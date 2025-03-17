import{j as e,T as X,r as a,a$ as D,a5 as P,B as S,$ as ee,c as se,u as T,a9 as te,N as le,m as $,aB as ae,S as re,U as G,V as J,M as ie,o as oe,ao as ce,b as ne}from"./index-CiM0iehI.js";import{j as v}from"./jwt-QgJYqd_L.js";import{o as V,F as Q,c as de,p as xe}from"./match-CHJTCtXc.js";import{p as W,f as me}from"./index-D5eFVfyz.js";import{b as pe}from"./index-DD-JyHDZ.js";import{L as q}from"./index-Cpn1PKWB.js";/* empty css                    */import{D as ue}from"./DynamicGrid-DOnNbms6.js";import{R as fe}from"./index-ntae1Qnb.js";import{m as Z}from"./proxy-BeaUzGtg.js";import{a as g,K as he,b as M,u as ge,M as je}from"./MarkerClusterer-CesnT0MC.js";import{a as be}from"./index-f_YNyPEz.js";import{s as Ne}from"./searchAtom-DTGwh01d.js";import{P as we}from"./index-xijnw8df.js";import{T as ye}from"./index-BC_41kYy.js";import"./index-BpFWN78L.js";import"./index-CzF2OAM2.js";import"./index-BCTjbqQi.js";import"./index-B2YlbBp4.js";import"./index-C4ig94cj.js";import"./Portal-C3bpsPPe.js";import"./useId-CfZRftqB.js";import"./index-Dx58Pgh_.js";import"./fade-BNyIXdWS.js";import"./zoom-BZWbfUq2.js";import"./addEventListener-J8G-zJgX.js";import"./motion-BUbX8Cb0.js";import"./RightOutlined-Cj8o_mG0.js";import"./index-c8GoCNeN.js";import"./index-BB0IkGXf.js";import"./isMobile-B4CO7CVJ.js";import"./roundedArrow-CePw_OaH.js";import"./EllipsisOutlined-DQids8rM.js";import"./Overflow-D0KJLh0Y.js";const ve=({handleCancel:t,amenities:l})=>(console.log(l),e.jsxs("div",{className:"fixed top-0 left-1/2  -translate-x-1/2 z-[999] bg-white w-full max-w-[768px] h-screen",children:[e.jsx("div",{className:"",children:e.jsx(X,{icon:"close",title:"편의시설 및 서비스",onClick:t})}),e.jsx("ul",{className:"flex flex-wrap mt-6 px-4 gap-5",children:l.map(s=>e.jsxs("li",{className:"min-w-14 flex flex-col items-center justify-center gap-[6px] text-slate-700",children:[e.jsx("i",{className:"text-2xl ",children:V(s.amenityId??0)}),e.jsx("p",{children:s.amenityTitle})]},s.amenityId))})]})),ke=({strfId:t})=>{const[l,s]=a.useState(),[i,o]=a.useState(!1),c=async()=>{try{const r=await v.get(`/api/detail/amenity?strf_id=${t}&category=숙소`);s(r.data.data),console.log("편의시설 조회",r.data.data)}catch(r){console.log("편의시설 조회",r)}};return a.useEffect(()=>{c()},[]),e.jsxs("div",{className:"px-4 my-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"편의시설 및 서비스"}),e.jsxs("button",{onClick:()=>o(!0),className:"flex items-center gap-[6px] text-sm text-slate-400",children:["더보기 ",e.jsx(D,{className:"text-xl"})]})]}),e.jsx("ul",{className:"grid grid-flow-col gap-4 overflow-hidden w-full h-[90px] mt-3",children:l==null?void 0:l.map(r=>e.jsxs("li",{className:"min-w-14 flex flex-col items-center justify-center gap-[6px] text-slate-700",children:[e.jsx("i",{className:"text-2xl ",children:V(r.amenityId??0)}),e.jsx("p",{children:r.amenityTitle})]},r.amenityId))}),i?e.jsx(ve,{handleCancel:()=>o(!i),amenities:l}):null]})},Me=({strfId:t,menuData:l})=>e.jsxs("div",{className:"px-4 my-6",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"대표메뉴"}),e.jsx("ul",{className:"grid grid-cols-2 gap-3 mt-5",children:l.map(s=>e.jsxs("li",{children:[e.jsx("div",{className:"w-full aspect-square rounded-2xl overflow-hidden",children:e.jsx("img",{src:`${P}/${t}/menu/${s==null?void 0:s.menuPic}`,alt:s==null?void 0:s.menuTitle,className:"w-full h-full object-cover "})}),e.jsxs("div",{className:"mt-2 text-slate-700",children:[e.jsx("p",{className:"text-lg",children:s.menuTitle}),e.jsxs("p",{className:"text-base font-semibold tracking-tight",children:[s.menuPrice.toLocaleString(),"원"]})]})]},s.menuId))})]}),Ce=({strfId:t,menuData:l})=>e.jsxs("div",{className:"px-4 my-6",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl",children:"입장권"}),e.jsx("ul",{children:l.map(s=>e.jsxs("li",{className:"flex items-center justify-between gap-4 py-4 border-b border-slate-200 last:border-b-0",children:[e.jsxs("div",{className:"text-slate-700",children:[e.jsx("h3",{className:"text-lg",children:s.menuTitle}),e.jsxs("p",{className:"text-base font-semibold",children:[s.menuPrice.toLocaleString(),"원"]})]}),e.jsx("div",{className:"w-24 aspect-square overflow-hidden rounded-2xl",children:e.jsx("img",{src:`${P}/${t}/menu/${s==null?void 0:s.menuPic}`,alt:s==null?void 0:s.menuTitle,className:"w-full h-full object-cover "})})]},s.menuId))})]}),Ie=({strfId:t,menuData:l})=>e.jsxs("div",{className:"mt-3 ",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("button",{className:"w-full border border-slate-300 rounded-lg py-3 text-base text-slate-700 mb-3",children:"01.22(수)~01.23(목)"}),e.jsx("button",{className:"w-full border border-slate-300 rounded-lg py-3 text-base text-slate-700 mb-3",children:"성인 2"})]}),e.jsx("ul",{children:l==null?void 0:l.map(s=>e.jsxs("li",{className:"py-5 px-4 border-b-[10px] border-slate-100 last:border-b-0",children:[e.jsx("i",{children:e.jsx("img",{src:`${P}/${t}/menu/${s==null?void 0:s.menuPic}`,alt:s==null?void 0:s.menuTitle,className:"w-full aspect-[2/1] object-cover rounded-lg"})}),e.jsxs("div",{className:"my-3",children:[e.jsx("h2",{className:"text-2xl text-slate-700 font-semibold",children:s==null?void 0:s.menuTitle}),e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500 text-sm my-1",children:[e.jsx(W,{className:"text-base"}),"입실 ",s.openCheckIn.replace(/:\d{2}$/,"")," - 퇴실",s.closeCheckIn.replace(/:\d{2}$/,"")]}),e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500 text-sm ",children:[e.jsx(pe,{className:"text-base"}),"기준 ",s.recomCapacity,"인 / 최대 ",s.maxCapacity,"인"]}),e.jsxs("div",{className:"w-full border-t border-slate-100 mt-3 pt-3 flex justify-between items-center",children:[e.jsxs("span",{className:"text-xl text-slate-700 font-semibold",children:[s.menuPrice.toLocaleString(),"원"]}),e.jsx(S,{type:"primary",className:"text-base py-2 px-4 h-auto rounded-lg",children:"예약하기"})]})]})]},s.menuId))})]}),Se=({strfId:t,contentData:l})=>{console.log("contentData",l);const[s,i]=a.useState([]),[o,c]=a.useState(0),[r,h]=a.useState(null),[p,d]=a.useState({}),m=a.useRef({}),[u,j]=a.useState(0);console.log("리뷰 목록:",s),console.log("reviewIndex:",o);const f=a.useCallback(async()=>{console.log("지금 보내는 start_idx",o);try{const n=await v.get(`/api/review?strf_id=${t}&start_idx=${o}`);console.log("리뷰 불러오기:",n.data),i([...s,...n.data])}catch(n){console.log("리뷰 불러오기:",n)}},[o,s,t]),y=async()=>{try{const n=await se.get(`/api/detail/count?strf_id=${t}`);j(n.data.data),console.log("리뷰 수:",n)}catch(n){console.error("리뷰 수 불러오기 실패:",n)}};return a.useEffect(()=>{f()},[o]),a.useEffect(()=>{y()},[t]),a.useEffect(()=>{const n={};s.forEach((b,w)=>{const N=m.current[w];if(N){const k=parseInt(window.getComputedStyle(N).lineHeight),C=N.scrollHeight;n[w]=C>k*3}}),d(n)},[s]),e.jsxs("div",{children:[e.jsxs("p",{className:"text-base text-slate-700 px-4",children:[e.jsx("span",{className:"font-semibold text-primary",children:u}),"개의 리뷰"]}),s?e.jsx("ul",{children:s==null?void 0:s.map((n,b)=>{const w=p[b];return e.jsxs("li",{className:"flex flex-col gap-3 py-8 border-b border-slate-200 px-4",children:[e.jsxs("div",{className:"flex flex-col gap-[6px]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("div",{className:"w-8 h-8 rounded-full overflow-hidden",children:e.jsx("img",{src:`${ee}/${n.writerUserId}/${n.writerUserPic}`,alt:"pofilePic",className:"w-full h-full object-cover"})}),e.jsx("p",{className:"font-semibold text-slate-700 text-base",children:n.writerUserName})]}),e.jsxs("div",{className:"flex gap-[6px] items-center",children:[e.jsx(q,{className:"text-base text-slate-300"}),e.jsx("p",{className:"font-semibold text-sm text-slate-500",children:n.userWriteReviewCnt})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[6px]",children:[e.jsx(fe,{disabled:!0,count:5,value:n.rating,className:"custom-review-rate"}),e.jsx("p",{className:"font-semibold text-sm text-slate-700",children:n.rating})]}),e.jsx("div",{children:e.jsx("p",{className:"text-sm text-slate-500",children:n.reviewWriteDate.split(" ")[0].replace(/-/g,".")})})]})]}),e.jsxs("div",{children:[e.jsx("p",{ref:N=>m.current[b]=N,className:`text-sm tracking-tight ${r===b?"":"line-clamp-3"}`,children:n.content}),w&&r!==b&&e.jsx("button",{type:"button",className:"text-primary text-sm font-semibold mt-[6px]",onClick:()=>h(b),children:"더보기"})]}),e.jsx(ue,{reviewPics:n,type:"review"})]},b)})}):e.jsx("ul",{children:e.jsx("li",{className:"flex flex-col gap-[20px] py-[30px] border-b border-slate-200"})}),s.length>0?e.jsx("button",{type:"button",className:"w-full py-[20px] rounded-lg border border-slate-300",onClick:()=>c(n=>n+10),children:"리뷰 더보기"}):e.jsxs("div",{className:"flex flex-col gap-[20px] justify-center items-center",children:[e.jsx("i",{className:"text-slate-300 text-[100px]",children:e.jsx(q,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"리뷰가 없습니다."})]})]})},Re=a.memo(Se),Pe=({open:t,onClose:l})=>{const[s,i]=a.useState([]),o=T();console.log(t);const c=async()=>{try{const r=await v.get("/api/trip-list");i(r.data.data.beforeTripList)}catch(r){console.log("여행 목록 불러오기:",r)}};return a.useEffect(()=>{c()},[]),e.jsx("div",{children:e.jsx(Z.div,{tabIndex:-1,className:"max-w-[768px] w-full left-1/2 -translate-x-1/2 fixed inset-0 bg-black/50 flex justify-center items-end z-50 overflow-hidden",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>l(),children:e.jsxs(Z.div,{className:" bg-white w-full rounded-t-3xl py-5 shadow-lg",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:300,damping:30},drag:"y",dragConstraints:{top:0,bottom:100},dragElastic:.2,onDragEnd:(r,h)=>{h.offset.y>100&&l()},onClick:r=>r.stopPropagation(),children:[e.jsx("div",{className:"w-12 h-1 bg-slate-400 rounded-full mx-auto mb-4"}),e.jsxs("div",{onClick:()=>o("/search/location"),className:"w-auto h-auto p-5 bg-slate-50 rounded-lg flex items-center gap-5 mx-3 cursor-pointer mb-4",children:[e.jsx("i",{className:"inline-block p-[10px] bg-primary rounded-full",children:e.jsx(te,{className:"text-white"})}),e.jsx("div",{children:e.jsx("p",{className:"text-lg text-slate-700 font-semibold",children:"여행 일정 만들기"})})]}),e.jsx("div",{className:"px-3",children:s.map(r=>e.jsxs("div",{className:"flex items-center gap-3 w-full bg-slate-50 p-5 rounded-lg mb-3 cursor-pointer",children:[e.jsx("div",{className:"w-8 h-8 bg-slate-100 rounded-full overflow-hidden",children:e.jsx("img",{src:`${le}/${r.locationPic}`,alt:r.title,className:"w-full h-full"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-base text-slate-700 font-semibold",children:r.title}),e.jsxs("p",{className:"text-sm text-slate-500 tracking-tight",children:[r.startAt.replace(/-/g,".")," -"," ",r.endAt.replace(/-/g,".")]})]})]}))})]})})})},Te=({strfId:t,contentData:l})=>{const[,s]=a.useState({isRegistModalOpen:!1,openPathModal:!1,isReviewModalOpen:!1}),[i,o]=a.useState(!1),c=T(),r=()=>{s(h=>({...h,isReviewModalOpen:!0})),c(`/contents/postreview?strfId=${t}`,{state:l})};return e.jsxs("div",{className:"sticky bottom-0 left-0 z-50 w-full px-4 py-5 flex gap-3 bg-white border-t-[1px] border-slate-100",children:[e.jsx(S,{onClick:()=>o(!i),icon:e.jsx(Q,{className:"!text-sm opacity-50 mb-[2px]"}),className:"flex items-center justify-center gap-[6px] border-slate-200 rounded-lg w-full h-auto py-[14px] text-lg text-slate-700 ",children:"일정 추가"}),e.jsx(S,{onClick:()=>{r()},icon:e.jsx(me,{className:"text-sm opacity-50 mb-[2px]"}),className:"flex items-center justify-center gap-[6px]  border-slate-200 rounded-lg w-full  h-auto py-[14px] text-lg text-slate-700 ",children:"리뷰쓰기"}),i&&e.jsx(Pe,{open:i,onClose:()=>o(!1)})]})},$e=$.forwardRef(function(l,s){let{map:i,position:o,marker:c,children:r,altitude:h,disableAutoPan:p,range:d,removable:m,zIndex:u,onCreate:j}=l;const f=a.useMemo(()=>{const n=document.createElement("div");return n.style.display="none",new kakao.maps.InfoWindow({altitude:h,disableAutoPan:p,range:d,removable:m,zIndex:u,content:n,position:o})},[p,m]),y=a.useMemo(()=>f.getContent(),[f]);return a.useImperativeHandle(s,()=>f,[f]),a.useLayoutEffect(()=>(f.open(i,c),()=>{f.close()}),[i,c]),a.useLayoutEffect(()=>{j&&j(f)},[f,j]),g(f,"setPosition",o),g(f,"setAltitude",h),g(f,"setRange",d),g(f,"setZIndex",u),ae.createPortal(r,y.parentElement??y)}),Ae=$.forwardRef(function(l,s){let{map:i,position:o,children:c,altitude:r,clickable:h,draggable:p,image:d,infoWindowOptions:m,onCreate:u,onClick:j,onDragEnd:f,onDragStart:y,onMouseOut:n,onMouseOver:b,opacity:w,range:N,title:k,zIndex:C}=l;const I=a.useContext(he),A=a.useMemo(()=>{var R,E,L,z,F,H,_,O,U,B,K,Y;return d&&new kakao.maps.MarkerImage(d.src,new kakao.maps.Size(d.size.width,d.size.height),{alt:(R=d.options)==null?void 0:R.alt,coords:(E=d.options)==null?void 0:E.coords,offset:((L=d.options)==null?void 0:L.offset)&&new kakao.maps.Point((z=d.options)==null?void 0:z.offset.x,(F=d.options)==null?void 0:F.offset.y),shape:(H=d.options)==null?void 0:H.shape,spriteOrigin:((_=d.options)==null?void 0:_.spriteOrigin)&&new kakao.maps.Point((O=d.options)==null?void 0:O.spriteOrigin.x,(U=d.options)==null?void 0:U.spriteOrigin.y),spriteSize:((B=d.options)==null?void 0:B.spriteSize)&&new kakao.maps.Size((K=d.options)==null?void 0:K.spriteSize.width,(Y=d.options)==null?void 0:Y.spriteSize.height)})},[JSON.stringify(d)]),x=a.useMemo(()=>new kakao.maps.Marker({altitude:r,clickable:h,draggable:p,image:A,opacity:w,range:N,title:k,zIndex:C,position:o}),[]);return a.useImperativeHandle(s,()=>x,[x]),a.useLayoutEffect(()=>I?(I.addMarker(x,!0),()=>I.removeMarker(x,!0)):(x.setMap(i),()=>x.setMap(null)),[i,I,x]),a.useLayoutEffect(()=>{u&&u(x)},[x,u]),g(x,"setPosition",o),g(x,"setImage",A),g(x,"setAltitude",r),g(x,"setClickable",h),g(x,"setDraggable",p),g(x,"setOpacity",w),g(x,"setRange",N),g(x,"setRange",N),g(x,"setTitle",k),g(x,"setTitle",k),g(x,"setZIndex",C),M(x,"click",j),M(x,"dragstart",y),M(x,"dragend",f),M(x,"mouseout",n),M(x,"mouseover",b),c?e.jsx($e,{position:o,map:i,marker:x,altitude:m==null?void 0:m.altitude,disableAutoPan:m==null?void 0:m.disableAutoPan,range:m==null?void 0:m.range,removable:m==null?void 0:m.removable,zIndex:m==null?void 0:m.zIndex,children:c}):null}),Ee=$.forwardRef(function(l,s){let{position:i,...o}=l;const c=ge("MapMarker"),r=a.useMemo(()=>"lat"in i?new kakao.maps.LatLng(i.lat,i.lng):new kakao.maps.Coords(i.x,i.y).toLatLng(),[i.lat,i.lng,i.x,i.y]);return e.jsx(Ae,{map:c,position:r,...o,ref:s})}),Le=({contentData:t})=>{const[l,s]=a.useState(!1);a.useState({lat:0,lng:0});const i={lat:(t==null?void 0:t.latit)||35.868358,lng:(t==null?void 0:t.longitude)||128.593778};return a.useEffect(()=>{const o=document.createElement("script");return o.async=!0,o.src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1227efa5c91b2ace09ab915e643a15c9&autoload=false",o.addEventListener("load",()=>{window.kakao.maps.load(()=>{s(!0)})}),document.head.appendChild(o),()=>{document.head.removeChild(o)}},[]),l?e.jsx("div",{children:e.jsx(je,{center:i,style:{width:"100%",aspectRatio:"4 / 2",minHeight:"200px",borderRadius:"8px"},level:5,children:e.jsx(Ee,{position:i})})}):e.jsx("div",{children:"지도를 불러오는 중입니다..."})},ze=a.memo(Le),Fe=({contentData:t})=>{const[l,s]=a.useState(!1),[i,o]=a.useState(!1),c=a.useRef(null);return a.useEffect(()=>{c.current&&o(c.current.scrollHeight>c.current.clientHeight)},[t==null?void 0:t.detail]),e.jsxs("div",{children:[e.jsxs("section",{className:"my-6 px-4",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl mb-4",children:"소개"}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("p",{ref:c,className:`text-base text-slate-500 ${l?"":"line-clamp-5"}`,children:t==null?void 0:t.detail}),i&&!l&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white/100 to-white/0"})]}),i&&e.jsx(S,{onClick:()=>s(r=>!r),className:"w-full h-auto py-[14px] border border-slate-300 rounded-lg",children:l?"숨기기":"펼치기"})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("section",{className:"my-6 px-4",children:[e.jsx("h3",{className:"font-semibold text-slate-700 text-xl mb-4",children:"위치"}),e.jsx(ze,{contentData:t}),e.jsx("div",{children:e.jsxs("dl",{className:"mt-4 px-4 py-6 bg-slate-50 rounded-lg",children:[e.jsx("dt",{className:"text-base text-slate-700 font-semibold float-left mr-3",children:"주소"}),e.jsxs("dd",{className:"text-base text-slate-500 mb-1",children:["(",t==null?void 0:t.post,") ",t==null?void 0:t.address]}),e.jsx("dt",{className:"text-base text-slate-700 font-semibold float-left mr-3",children:"전화"}),e.jsx("dd",{className:"text-base text-slate-500 mb-1",children:"062-610-7000"}),e.jsx("dt",{className:"text-base text-slate-700 font-semibold float-left mr-3",children:"사업자번호"}),e.jsx("dd",{className:"text-base text-slate-500",children:"410-86-60209"})]})})]})]})},He=({strfId:t,contentData:l})=>e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("img",{src:`${re}/${t}/${l==null?void 0:l.strfPics[0].strfPic}`,alt:(l==null?void 0:l.strfTitle)||"",className:"w-full"})}),e.jsxs("div",{className:"px-4 py-3 flex flex-col gap-2",children:[e.jsx("p",{className:"text-sm text-slate-500 -mb-[6px]",children:de(l==null?void 0:l.category)}),e.jsx("h2",{className:"text-2xl text-slate-700 font-semibold",children:l==null?void 0:l.strfTitle}),e.jsxs("p",{className:"text-sm text-slate-500 flex items-center gap-[6px]",children:[e.jsx(Q,{className:" text-slate-300"}),l==null?void 0:l.address]}),e.jsxs("ul",{className:"flex items-center gap-[6px]",children:[e.jsx("li",{children:e.jsx(be,{className:"text-primary text-base"})}),e.jsx("li",{className:"text-sm text-slate-700 font-semibold",children:l==null?void 0:l.ratingAvg}),e.jsxs("li",{className:"text-sm text-primary underline",children:["리뷰 ",l==null?void 0:l.reviewCnt.toLocaleString(),"개"]}),e.jsx("li",{className:"text-slate-300 text-base mx-1",children:"|"}),e.jsx("li",{className:"text-lg text-slate-400",children:l!=null&&l.wishIn?e.jsx(G,{className:"text-secondary3"}):e.jsx(J,{})}),e.jsx("li",{className:"text-slate-500 text-sm",children:l==null?void 0:l.wishCnt})]}),e.jsx("div",{children:e.jsxs("p",{className:"flex items-center gap-[6px] text-slate-500",children:[e.jsx(W,{className:"text-base"}),"매일 00:00 ~ 24:00"]})})]})]}),_e=({scrollEvent:t=!0,strfId:l,contentData:s,getDetailMember:i})=>{const[,o]=ie(Ne),[c,r]=a.useState(!1),h=T(),p=async()=>{const u={strfId:l};console.log("찜하기 데이터:",u);try{const j=await v.post("/api/wish-list",{...u});console.log("찜하기",j.data),j.data.code==="200 성공"&&i()}catch(j){console.log("찜하기",j)}};a.useEffect(()=>{if(!t){r(!1);return}const u=()=>{window.scrollY>0?r(!0):r(!1)};return window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}},[t]);const d=window.location.href,m=async()=>{try{await navigator.clipboard.writeText(d)}catch(u){console.error("복사 실패",u)}};return console.log("currentUri",d),e.jsx("div",{className:`max-w-[768px] w-full px-4  fixed top-0 left-1/2 -translate-x-1/2 z-10
        duration-300 ${t?c?"bg-white text-slate-700":"bg-transparent text-white":"bg-transparent"}`,children:e.jsxs("div",{className:"flex justify-between items-center h-[60px]",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(oe,{className:"text-3xl min-w-7 cursor-pointer",onClick:()=>{h(-1),o(u=>({...u,fromContent:!0}))}}),e.jsx("h2",{className:"font-semibold text-lg line-clamp-1",children:s==null?void 0:s.strfTitle})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[s!=null&&s.wishIn?e.jsx(G,{className:`text-2xl cursor-pointer ${scrollY>0?"text-secondary3":"text-white"}`,onClick:p}):e.jsx(J,{className:`text-2xl cursor-pointer ${scrollY>0?"text-slate-700":"text-white"}`,onClick:p}),e.jsx(we,{className:"!rounded-2xl",content:e.jsxs("div",{className:"flex items-center justify-between gap-3 bg-slate-100 pl-3 pr-1 py-1 rounded-lg",children:[e.jsx("p",{className:"line-clamp-1 w-[189px]",children:d}),e.jsxs("button",{onClick:()=>m(),className:" flex items-center gap-1 bg-primary px-3 py-1 rounded-lg text-white",children:[e.jsx(xe,{}),"복사"]})]}),trigger:"click",getPopupContainer:u=>u.parentElement||document.body,children:e.jsx(ce,{className:" text-2xl cursor-pointer"})})]})]})})},Ns=()=>{const[t,l]=a.useState(null),[s,i]=a.useState([]),[o]=ne(),c=Number(o.get("strfId"))||0,r=async()=>{try{const p=await v.get(`/api/detail/member?&strf_id=${c}`);p.data.data,console.log("상품조회-회원",p.data.data),l(p.data.data)}catch(p){console.log("상품조회-회원",p)}},h=async()=>{try{const p=await v.get(`/api/detail/menu?strf_id=${c}`);i(p.data.data),console.log("상품조회-메뉴",p.data.data)}catch(p){console.log("상품조회-메뉴",p)}};return a.useEffect(()=>{h(),r()},[]),e.jsxs("div",{children:[t&&e.jsx(_e,{strfId:c,contentData:t,getDetailMember:r}),e.jsx("section",{children:t&&e.jsx(He,{strfId:c,contentData:t})}),s&&e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("section",{children:[(t==null?void 0:t.category)==="STAY"&&e.jsx(Ie,{strfId:c,menuData:s}),(t==null?void 0:t.category)==="RESTAUR"&&e.jsx(Me,{strfId:c,menuData:s}),((t==null?void 0:t.category)==="TOUR"||(t==null?void 0:t.category)==="FEST")&&e.jsx(Ce,{strfId:c,menuData:s})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"})]}),(t==null?void 0:t.category)==="STAY"&&e.jsxs(e.Fragment,{children:[e.jsx("section",{children:e.jsx(ke,{strfId:c})}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"})]}),e.jsx("section",{children:e.jsx(ye,{defaultActiveKey:"1",centered:!0,className:"custom-strf-tabs",items:[{label:"상세정보",key:"1",children:e.jsx(e.Fragment,{children:t&&e.jsx(Fe,{strfId:c,contentData:t})})},{label:"리뷰",key:"2",children:e.jsx(e.Fragment,{children:t&&e.jsx(Re,{strfId:c,contentData:t})})}]})}),t&&e.jsx(Te,{strfId:c,contentData:t})]})};export{Ns as default};
