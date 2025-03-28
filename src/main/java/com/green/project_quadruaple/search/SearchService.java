package com.green.project_quadruaple.search;

import com.green.project_quadruaple.common.config.enumdata.ResponseCode;
import com.green.project_quadruaple.common.config.jwt.JwtUser;
import com.green.project_quadruaple.common.config.security.AuthenticationFacade;
import com.green.project_quadruaple.common.model.ResponseWrapper;
import com.green.project_quadruaple.common.model.SizeConstants;
import com.green.project_quadruaple.entity.model.SearchWord;
import com.green.project_quadruaple.entity.model.User;
import com.green.project_quadruaple.search.model.*;
import com.green.project_quadruaple.search.model.filter.*;
import com.green.project_quadruaple.search.model.strf_list.GetSearchStrfListBasicRes;
import com.green.project_quadruaple.search.model.strf_list.LocationIdAndTitleDto;
import com.green.project_quadruaple.search.model.strf_list.StrfShortInfoDto;
import com.green.project_quadruaple.search.repository.SearchWordRepository;
import com.green.project_quadruaple.trip.model.Category;
import com.green.project_quadruaple.user.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class SearchService {
    private final AuthenticationFacade authenticationFacade;
    private final SearchMapper searchMapper;
    private final SearchWordRepository searchWordRepository;
    private final UserRepository userRepository;

    @Value("${const.default-search-size}")
    private int size;

    // 기존
    /*public List<LocationResponse> getTripLocation(String searchWord, int offset, int pageSize) {
        // SQL 매퍼 호출
        return searchMapper.getTripLocation(searchWord, offset, pageSize);
    }*/


    /* public List<LocationResponse> getTripLocation(String searchWord) {
         return searchMapper.getTripLocation(searchWord);
         // asdasd
     }*/
    public List<LocationResponse> getTripLocation(String searchWord) {
        List<LocationResponse> locations = searchMapper.getTripLocation(searchWord);
        System.out.println("Fetched locations: " + locations); // 디버깅용 로그 추가
        return locations;
    }

    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListBasic(long tripId, int startIdx) {
        if (tripId == 0) return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), null);
        long signedUserId = Optional.of(AuthenticationFacade.getSignedUserId()).get();
        int more = 1;
        try {
            List<LocationIdAndTitleDto> locationIdList = searchMapper.selLocationIdByTripId(tripId);
            List<StrfShortInfoDto> dto = searchMapper.selStrfShortInfoBasic(signedUserId, locationIdList, startIdx, size + more, null, null);
            GetSearchStrfListBasicRes res = new GetSearchStrfListBasicRes();
            if (dto.size() > size) {
                dto.remove(size);
                res.setMore(true);
            }
            res.setList(dto);
            List<String> titleList = new ArrayList<>();
            for (LocationIdAndTitleDto list : locationIdList) {
                titleList.add(list.getLocationTitle());
            }
            res.setLocationTitleList(titleList);
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }

    public ResponseWrapper<GetSearchStrfListBasicRes> getStrfListWithSearchWord(long tripId,
                                                                                int startIdx,
                                                                                String category,
                                                                                String searchWord) {
        if (tripId == 0) return new ResponseWrapper<>(ResponseCode.BAD_REQUEST.getCode(), null);
        long signedUserId = Optional.of(AuthenticationFacade.getSignedUserId()).get();
        int more = 1;
        try {
            List<LocationIdAndTitleDto> locationIdList = searchMapper.selLocationIdByTripId(tripId);
            List<StrfShortInfoDto> dto = searchMapper.selStrfShortInfoBasic(signedUserId, locationIdList, startIdx, size + more, category, searchWord);
            GetSearchStrfListBasicRes res = new GetSearchStrfListBasicRes();
            if (dto.size() >= size) {
                dto.remove(size);
                res.setMore(true);
            }
            res.setList(dto);
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }

    // 검색창 - 최근 검색어 출력
    public ResponseWrapper<List<SearchGetRes>> searchGetList() {
        Long userId = authenticationFacade.getSignedUserId();

        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("user id not found"));
        List<SearchWord> search = searchWordRepository.searchByUser(user.getUserId());

        List<SearchGetRes> res = searchMapper.searchGetList(user.getUserId());
        for (SearchGetRes searchGetRes : res) {
            searchGetRes.setUserId(user.getUserId());
        }
        return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
    }

    // 밑으로 상품 검색
    public ResponseWrapper<List<SearchBasicRecentRes>> searchBasicRecent() {
        Long userId = authenticationFacade.getSignedUserId();
        List<SearchBasicRecentRes> res = searchMapper.searchBasicRecent(userId);
        if (res.isEmpty()) {
            return new ResponseWrapper<>(ResponseCode.BAD_GATEWAY.getCode(), null);
        }
        try {
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            return new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null);
        }
    }

    public ResponseWrapper<List<SearchBasicPopualarRes>> searchBasicPopular() {
        List<SearchBasicPopualarRes> res = searchMapper.searchBasicPopular();
        if (res.isEmpty()) {
            return new ResponseWrapper<>(ResponseCode.BAD_GATEWAY.getCode(), null);
        }
        try {
            return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
        } catch (Exception e) {
            return new ResponseWrapper<>(ResponseCode.SERVER_ERROR.getCode(), null);
        }
    }

    public ResponseWrapper<List<Stay>> searchAll(String searchWord) {
        Long userId = 0L;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.getPrincipal() instanceof JwtUser) {
            userId = authenticationFacade.getSignedUserId();
        }
        if (userId > 0) {
            searchMapper.searchIns(searchWord, userId);
        }

        try {
            List<Stay> stays = searchMapper.searchAllList(searchWord, userId);
            stays.forEach(stay -> {
                if (stay.getAverageRating() != null) {
                    double roundedRating = Math.round(stay.getAverageRating() * 10) / 10.0;
                    stay.setAverageRating(roundedRating);
                }
            });

            return new ResponseWrapper<>(ResponseCode.OK.getCode(), stays);

        } catch (Exception e) {
            return new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), null);
        }
    }

    public ResponseWrapper<Integer> categoryCount(String category, String searchWord) {
        String categoryValue = null;
        if (category != null && Category.getKeyByName(category) != null) {
            categoryValue = Objects.requireNonNull(Category.getKeyByName(category)).getValue();
        }
        int count = searchMapper.categoryCount(categoryValue, searchWord);

        return new ResponseWrapper<>(ResponseCode.OK.getCode(), count);
    }

    public ResponseWrapper<List<SearchCategoryRes>> searchCategory(int startIdx, String category, String searchWord, String orderType) {
        Long userId = 0L;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof JwtUser) {
            userId = authenticationFacade.getSignedUserId();
        }
        if (userId > 0) {
            searchMapper.searchIns(searchWord, userId);
        }
        String categoryValue = null;
        if (category != null && Category.getKeyByName(category) != null) {
            categoryValue = Objects.requireNonNull(Category.getKeyByName(category)).getValue();
        }

        List<SearchCategoryRes> res = searchMapper.searchCategory(startIdx, SizeConstants.getDefault_page_size(), categoryValue, searchWord, userId, orderType);
        res.forEach(stay -> {
            if (stay.getRatingAvg() != null) {
                double roundedRating = Math.round(stay.getRatingAvg() * 10) / 10.0;
                stay.setRatingAvg(roundedRating);
            }
        });
//        boolean hasMore = res.size() > size;
//
//        if (hasMore) {
//
//            res.remove(res.size() - 1);
//        }
//        res.forEach(stay -> stay.setMore(hasMore));
        return new ResponseWrapper<>(ResponseCode.OK.getCode(), res);
    }

    public ResponseWrapper<Integer> amenityCnt(List<Long> amenityId) {
        int count = searchMapper.amenityCnt(amenityId);

        return new ResponseWrapper<>(ResponseCode.OK.getCode(), count);
    }

    public ResponseWrapper<List<SearchStay>> searchStayFilter(int startIdx, String category, String searchWord, List<Long> amenityId) {
        Long userId = 0L;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof JwtUser) {
            userId = authenticationFacade.getSignedUserId();
        }
        String categoryValue = null;
        if (category != null && Category.getKeyByName(category) != null) {
            categoryValue = Objects.requireNonNull(Category.getKeyByName(category)).getValue();
        }
        List<SearchStay> stays = searchMapper.searchStay(startIdx, SizeConstants.getDefault_page_size(), categoryValue, searchWord, userId, amenityId);

        if (stays.size() == 0) {
            return new ResponseWrapper<>(ResponseCode.NOT_FOUND.getCode(), stays);
        }

        stays.forEach(stay -> {
            if (stay.getRatingAvg() != null) {
                double roundedRating = Math.round(stay.getRatingAvg() * 10) / 10.0;
                stay.setRatingAvg(roundedRating);
            }
        });

        return new ResponseWrapper<>(ResponseCode.OK.getCode(), stays);
    }
    public ResponseWrapper<List<SearchManyOneDto>> SearchManyOne (long menuId){
        List<SearchManyOneDto> many = searchMapper.SearchManyOne(menuId);
        return new ResponseWrapper<>(ResponseCode.OK.getCode(), many);
    }
}