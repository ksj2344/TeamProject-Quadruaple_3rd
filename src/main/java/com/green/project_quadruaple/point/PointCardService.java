package com.green.project_quadruaple.point;

import com.green.project_quadruaple.booking.model.dto.KakaoReadyDto;
import com.green.project_quadruaple.common.config.constant.KakaopayConst;
import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.jwt.UserRole;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.common.model.SizeConstants;
import com.green.project_quadruaple.entity.model.*;
import com.green.project_quadruaple.point.model.dto.PointCardGetDto;
import com.green.project_quadruaple.point.model.dto.PointHistoryListDto;
import com.green.project_quadruaple.point.model.payModel.req.PointBuyReadyReq;
import com.green.project_quadruaple.point.model.req.PointUseOrUnUseReq;
import com.green.project_quadruaple.point.model.res.PointCardProductRes;
import com.green.project_quadruaple.point.model.dto.PointCardPostDto;
import com.green.project_quadruaple.point.model.dto.PointCardUpdateDto;
import com.green.project_quadruaple.point.model.res.PointHistoryListReq;
import com.green.project_quadruaple.user.Repository.UserRepository;
import com.green.project_quadruaple.user.model.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PointCardService {
    private final PointCardRepository pointCardRepository;
    private final PointHistoryRepository pointHistoryRepository;
    private final PointViewRepository pointViewRepository;
    private final AuthenticationFacade authenticationFacade;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    private final KakaopayConst kakaopayConst;
    private KakaoReadyDto kakaoReadyDto;

    //관리자 포인트 상품 추가
    public int intPointCard(PointCardPostDto dto) {
        long userId = authenticationFacade.getSignedUserId();

        // 사용자 권한 확인 (ADMIN 권한이 있는지 확인)
        List<Role> roles = roleRepository.findByUserUserId(userId);
        boolean isAdmin = roles.stream().anyMatch(role -> role.getRole() == UserRole.ADMIN);

        if (!isAdmin) {
            log.error("상품권 발급 권한이 없습니다. 사용자 권한: {}", roles.isEmpty() ? "없음" : roles.get(0).getRole());
            return 0;  // 권한이 없으면 상품권 발급하지 않음
        }

        // 포인트 카드 객체 생성
        PointCard pointCard = new PointCard();
        pointCard.setAvailable(dto.getAvailable());
        pointCard.setDiscountPer(dto.getDiscountPer());

        // 할인율 적용하여 최종 결제 금액 계산
        double discountRate = 1 - 0.01 * dto.getDiscountPer();
        int finalPayment = (int) Math.round(dto.getAvailable() * discountRate);
        pointCard.setFinalPayment(finalPayment);

        pointCardRepository.save(pointCard);

        return 1;
    }

    // 회원 or 비회원 포인트 카드 조회
    public PointCardProductRes getPointCardProduct() {
        Long userId = authenticationFacade.getSignedUserId();
        Integer remainPoints=null;
        if(userId!=null){
            remainPoints=pointHistoryRepository.findLastRemainPointByUserId(userId);
        }
        return new PointCardProductRes(remainPoints,pointCardRepository.findAll());
    }



    public List<PointCardGetDto> getPointCard() {
        long userId = authenticationFacade.getSignedUserId();

        // 사용자 권한 확인 (ADMIN 권한이 있는지 확인)
        List<Role> roles = roleRepository.findByUserUserId(userId);
        boolean isAdmin = roles.stream().anyMatch(role -> role.getRole() == UserRole.ADMIN);

        if (!isAdmin) {
            log.error("상품권 조회 권한이 없습니다. 사용자 권한: {}", roles.isEmpty() ? "없음" : roles.get(0).getRole());
            return new ArrayList<>();  // 권한이 없으면 상품권 조회 불가능
        }

        return pointCardRepository.findAll().stream()
                .map(pointCard -> new PointCardGetDto(
                        pointCard.getPointCardId(),
                        pointCard.getAvailable(),
                        pointCard.getDiscountPer(),
                        pointCard.getFinalPayment()
                )).collect(Collectors.toList());
    }

    public int updPointCard(PointCardUpdateDto dto) {
        long userId = authenticationFacade.getSignedUserId();

        // 사용자 권한 확인 (ADMIN 권한이 있는지 확인)
        List<Role> roles = roleRepository.findByUserUserId(userId);
        boolean isAdmin = roles.stream().anyMatch(role -> role.getRole() == UserRole.ADMIN);

        if (!isAdmin) {
            log.error("상품권 수정 권한이 없습니다. 사용자 권한: {}", roles.isEmpty() ? "없음" : roles.get(0).getRole());
            return 0;  // 권한이 없으면 상품권 수정 불가능
        }

        // 기존 PointCard 조회 (존재하지 않으면 예외 발생)
        PointCard pointCard = pointCardRepository.findById(dto.getPointCardId())
                .orElseThrow(() -> new RuntimeException("존재하지 않는 상품권입니다."));


        // 선택적으로 필드만 업데이트
        if (dto.getAvailable() != 0) {
            pointCard.setAvailable(dto.getAvailable());
        }

        if (dto.getDiscountPer() != 0) {
            pointCard.setDiscountPer(dto.getDiscountPer());
        }

        // discountPer 변경 시, finalPayment를 다시 계산
        if (dto.getDiscountPer() != 0 || dto.getAvailable() != pointCard.getAvailable()) {
            // 할인율 적용하여 최종 결제 금액 계산
            double discountRate = 1 - 0.01 * pointCard.getDiscountPer();
            int finalPayment = (int) Math.round(pointCard.getAvailable() * discountRate);
            pointCard.setFinalPayment(finalPayment);
        }

        // 변경 사항 저장
        pointCardRepository.save(pointCard);

        return 1;
    }

    // point 사용 혹은 사용취소
    public ResponseEntity<ResponseWrapper<Integer>> useOrUnUsePoint(PointUseOrUnUseReq p){
        long userId = authenticationFacade.getSignedUserId();
        int remainPoint =pointHistoryRepository.findLastRemainPointByUserId(userId);
        remainPoint = p.getCategory()==0? remainPoint+p.getAmount():remainPoint-p.getAmount();
        if(remainPoint<0){ return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new ResponseWrapper<>(ResponseCode.NOT_Acceptable.getCode(), null)); }
        PointHistory pointHistory = PointHistory.builder()
                .amount(p.getAmount())
                .category(p.getCategory())
                .relatedId(p.getRelatedId())
                .user(userRepository.findById(userId).get())
                .remainPoint(remainPoint)
                .build();
        pointHistoryRepository.save(pointHistory);
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(),pointHistory.getRemainPoint()));
    }

    // 보유 포인트 확인화면
    public ResponseEntity<ResponseWrapper<PointHistoryListReq>> checkMyRemainPoint
    (LocalDate startAt, LocalDate endAt, Integer category, boolean isDesc, int page){
        /*
            response 내용
            로그인 유저 닉네임+보유포인트
            포인트 내역(구매, 사용, 취소) 사용처 이름, 시간, 얼마가 들었고 얼마가 남았나.
         */
        long userId = authenticationFacade.getSignedUserId();
        User user=userRepository.findById(userId).get();

        Sort sort = Sort.by("pointHistoryId");
        sort=isDesc?sort.descending():sort.ascending();
        Pageable pageable= PageRequest.of(page, SizeConstants.getDefault_page_size(), sort);

        List<PointView> pointViews= category!=null?
                pointViewRepository.findByUserIdAndCategoryAndCreatedAtBetween(userId, category, startAt, endAt, pageable)
                : pointViewRepository.findByUserIdAndCreatedAtBetween(userId, startAt, endAt, pageable);

        List<PointHistoryListDto> historys=new ArrayList<>(pointViews.size());
        for(PointView h:pointViews){
            String usedAt = switch (h.getCategory()){
                case 0: yield h.getTitle();
                case 1: yield "포인트 충전";
                case 2: yield "취소(환불)";
                default: yield "";
            };

            PointHistoryListDto dto=new PointHistoryListDto(
                    h.getPointHistoryId(), usedAt , h.getCategory(), h.getCreatedAt(), h.getAmount(), h.getRemainPoint()
            );
            historys.add(dto);
        }

        PointHistoryListReq result=new PointHistoryListReq();
        result.setUserName(user.getName());
        result.setRemainPoint(pointHistoryRepository.findLastRemainPointByUserId(userId));
        result.setPointList(historys);
        return ResponseEntity.ok(new ResponseWrapper<>(ResponseCode.OK.getCode(),result));
    }

    // 포인트 카드 구매 (결제 준비->요청->승인(approve)
    public void ReadyToBuyPointCard(PointBuyReadyReq p){
        long userId = authenticationFacade.getSignedUserId();
        User user=userRepository.findById(userId).get();

        PointCard pointCard=pointCardRepository.findById(p.getPointCardId()).get();
        int charge=pointCard.getFinalPayment();

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", kakaopayConst.getSecretKey());
        headers.add("Content-Type", "application/json");

        HashMap<String, String> parameters = new HashMap<>();

        LocalDateTime localDateTime = LocalDateTime.now();
        String orderNo = localDateTime.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")) + (int)(Math.random()*1000);
        String quantity = "1";
        String totalAmount = String.valueOf(charge);
        String taxFreeAmount = String.valueOf((charge/10));;

        parameters.put("cid", kakaopayConst.getAffiliateCode()); // 가맹점 코드 - 테스트용
        parameters.put("partner_order_id", orderNo); // 주문 번호
        parameters.put("partner_user_id", String.valueOf(userId)); // 회원 아이디
        parameters.put("item_name", "테스트 상품1"); // 상품 명
        parameters.put("quantity", quantity); // 상품 수량
        parameters.put("total_amount", totalAmount); // 상품 가격
        parameters.put("tax_free_amount", taxFreeAmount); // 상품 비과세 금액
        parameters.put("approval_url", kakaopayConst.getApprovalUrl()); // 성공시 url
        parameters.put("cancel_url", kakaopayConst.getCancelUrl()); // 실패시 url
        parameters.put("fail_url", kakaopayConst.getFailUrl());

        HttpEntity<HashMap<String, String>> body = new HttpEntity<>(parameters, headers);

//        try {
//            kakaoReadyDto = restTemplate.postForObject(new URI(kakaopayConst.getUrl() + "/online/v1/payment/ready"), body, KakaoReadyDto.class);
//            log.info("kakaoDto = {}", kakaoReadyDto);
//            if(kakaoReadyDto != null) {
//                Booking booking = Booking.builder()
//                        .menu(menu)
//                        .room(room)
//                        .user(signedUser)
//                        .num(req.getNum())
//                        .usedPoint(point)
//                        .checkIn(checkInDate)
//                        .checkOut(checkOutDate)
//                        .totalPayment(actualPaid)
//                        .tid(kakaoReadyDto.getTid())
//                        .state(0)
//                        .build();
//                kakaoReadyDto.setPartnerOrderId(orderNo);
//                kakaoReadyDto.setPartnerUserId(String.valueOf(userId));
//                kakaoReadyDto.setBookingPostReq(req);
//                kakaoReadyDto.setBooking(booking);
//                kakaoReadyDto.setRemainPoint(remainPoint);
//
//                return new ResponseWrapper<>(ResponseCode.OK.getCode(), kakaoReadyDto.getNextRedirectPcUrl());
//            }

//        } catch (Exception e) {
//            e.printStackTrace();
//        }

    }

    public void approveBuy(){

    }
}
