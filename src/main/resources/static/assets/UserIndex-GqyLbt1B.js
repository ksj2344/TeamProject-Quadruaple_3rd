import{Q as y,t as C,Y as k,r as f,g as c,u as P,j as e,p as S,Z as I,d as A,$ as E,N as $,L as a,V as L,a0 as T,n as U,a1 as i,c as d,a2 as R,s as p,X as B}from"./index-CiM0iehI.js";import{b as O,c as D,d as F,e as _}from"./index-D5eFVfyz.js";import{G}from"./index-CNygkORx.js";import{H}from"./index-LQh0N3NZ.js";import{R as z}from"./index-f_YNyPEz.js";import{S as Q,a as V}from"./swiper-react-DXCZApEp.js";import{r as M}from"./userSelector-CYXCfKbj.js";import{N as X}from"./NotificationComponent-BuYRDQ6d.js";import"./userAtom-z3SjLGJk.js";import"./eventsource-Cd5SwtWz.js";const le=()=>{var m;const u=y(C),h=k(M),[s,j]=f.useState({name:"",couponCnt:0,profilePic:"",tripList:[]}),r=c("accessToken"),x=c("user"),N=async()=>{try{const l=(await d.get("/api/home/user",{headers:{Authorization:`Bearer ${r}`}})).data;return j(l.data),l}catch(t){return console.log(t),null}},g=async()=>{const t="/api/chat-room/admin";try{const l=await d.post(t,null,{headers:{Authorization:`Bearer ${r}`}});console.log("관리자 채팅방 생성",l.data);const n=l.data;return n.code==="200 성공"&&w(n.data),n}catch(l){return console.log("관리자 채팅방 생성",l),null}};f.useEffect(()=>{r&&N()},[]);const o=P(),w=t=>{o(`/chatroom?roomId=${t}`)},b=()=>{h(),R("accessToken");const t=c("user");t.isSaveEmail===!1&&p("user",{...t,email:""}),t.isSaveLogin===!1&&p("user",{...t,userId:"",email:"",accessToken:"",role:[B.GUEST]}),o("/signin")},v=()=>{o("/user/useredit",{state:s})};return console.log(" useProfile",s),e.jsx("div",{className:" w-full flex justify-end",children:e.jsxs("div",{className:"w-full h-screen bg-white ",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"px-4",children:[e.jsxs("div",{className:"flex justify-between py-[14px]",children:[e.jsx(S,{onClick:()=>o("/"),className:"text-3xl cursor-pointer text-slate-700"}),e.jsxs("h1",{className:"flex gap-5",children:[e.jsxs("div",{className:"relative",children:[e.jsx(O,{onClick:()=>o("/user/notification"),className:"text-3xl text-slate-700 cursor-pointer"}),e.jsx(X,{token:r})]}),e.jsx(I,{className:"text-3xl text-slate-700 cursor-pointer",onClick:()=>v()})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mt-5",children:[e.jsx("div",{className:"mx-auto w-32 h-32 rounded-full overflow-hidden",children:e.jsx("img",{src:u.providerType===A.LOCAL?s.profilePic?`${E}/${x==null?void 0:x.userId}/${s==null?void 0:s.profilePic}`:"/images/user.png":s.profilePic?`${s.profilePic}`:"/images/user.png",alt:"User-Profile",className:"w-full h-full object-cover"})}),e.jsx("h1",{className:"text-2xl font-bold text-slate-700 mt-[14px] text-center",children:s.name}),e.jsx(Q,{slidesPerView:1,className:"mySwiper",children:(m=s.tripList)==null?void 0:m.map(t=>e.jsx(V,{children:e.jsxs("div",{className:`flex items-center justify-between bg-slate-100 mt-5 px-4 py-4 rounded-full relative\r
                    after:absolute after:border-solid after:border-transparent after:border-b-slate-100 after:border-x-[16px] after:border-b-[30px] after:-top-4 after:left-1/2 after:-translate-x-1/2`,children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:`${$}/${t.locationPic}`,alt:"",className:"w-8 h-8 rounded-full mr-3"}),e.jsx("span",{className:"text-lg text-slate-700 font-normal",children:t.title})]}),e.jsx("span",{className:"text-lg text-primary font-semibold",children:t.dday>0?`D-${t.dday}`:"여행중"})]})},t.tripId))})]}),e.jsxs("div",{className:"flex my-5",children:[e.jsxs(a,{to:"/user/usertrips",className:"w-1/4 text-center text-base text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(H,{className:"w-full text-3xl text-slate-700 mb-2"}),"여행"]}),e.jsxs(a,{to:"/user/userwishlist",className:"w-1/4 text-center text-base text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(L,{className:"w-full text-3xl text-slate-700 mb-2"}),"찜하기"]}),e.jsxs(a,{to:"/user/userreview",className:"w-1/4 text-center text-base text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(T,{className:"w-full text-3xl text-slate-700 mb-2"}),"리뷰"]}),e.jsxs(a,{to:"/user/usertrip",className:"w-1/4 text-center text-base text-slate-500 font-normal",children:[e.jsx(U,{className:"w-full text-3xl text-slate-700 mb-2"}),"내 여행기"]})]})]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"w-full px-4",children:[e.jsxs(a,{to:"/user/userbooking",className:"flex items-center py-5 text-xl text-slate-700 font-normal",children:[e.jsx(G,{className:"text-3xl text-slate-400 mr-4"}),"내예약",e.jsx(i,{className:"text-slate-300 ml-auto"})]}),e.jsxs(a,{to:"/user/usercoupon",className:"flex items-center py-5 text-xl text-slate-700 font-normal",children:[e.jsx(D,{className:"text-3xl text-slate-400 mr-4"}),"쿠폰함",s.couponCnt>0&&e.jsx("span",{className:"ml-auto w-9 h-6 rounded-2xl text-sm text-center leading-[1.45rem] text-primary3 bg-[#A5EEFE]/50",children:s.couponCnt}),e.jsx(i,{className:"text-slate-300 ml-2"})]}),e.jsxs(a,{to:"/user/point",className:"flex items-center py-5 text-xl text-slate-700 font-normal",children:[e.jsx(F,{className:"text-3xl text-slate-400 mr-4"}),"포인트",e.jsx(i,{className:"text-slate-300 ml-auto"})]}),e.jsxs(a,{to:"/user/recentlist",className:"flex items-center py-5 text-xl text-slate-700 font-normal",children:[e.jsx(_,{className:"text-3xl text-slate-400 mr-4"}),"최근 본 목록",e.jsx(i,{className:"text-slate-300 ml-auto"})]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"px-4 pb-[130px]",children:[e.jsx(a,{to:"",className:"flex py-5  text-slate-500 text-sm",children:"공지사항"}),e.jsx(a,{to:"",className:"flex  text-slate-500 py-5 text-sm",children:"FAQ"}),e.jsx(a,{to:"",className:"flex   text-slate-500 py-5 text-sm",children:"고객센터"}),e.jsx("div",{className:"flex text-slate-500 py-5 text-sm cursor-pointer",onClick:g,children:"1:1 문의하기"}),e.jsx(a,{to:"/user/changepw",className:"flex text-slate-500 py-5 text-sm",children:"비밀번호 변경"}),r&&e.jsxs("p",{onClick:()=>b(),className:"flex gap-3 items-center text-slate-500 py-5 text-sm",children:[e.jsx(z,{className:"text-slate-300"}),"로그아웃"]})]})]})})};export{le as default};
