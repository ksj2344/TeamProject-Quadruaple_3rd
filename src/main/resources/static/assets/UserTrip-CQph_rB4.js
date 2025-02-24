import{r as i,g as v,u as h,j as s,b as c}from"./index-CT_B22pp.js";import{T as u}from"./TitleHeader-Aec0FNKR.js";import{T as g}from"./pic-Jp7D6aQ0.js";import"./index-B_Lpx87X.js";const R=()=>{const[r,n]=i.useState([]),a=v("accessToken"),l=h(),o=async()=>{try{const e=await c.get("/api/trip-review/myTripReview?orderType=latest",{headers:{Authorization:`Bearer ${a}`}});n(e.data.data),console.log("✅  res.data.data:",e.data.data)}catch(e){console.log("✅  error:",e)}},d=e=>{console.log(e);try{const t=c.delete(`/api/trip-review?tripReviewId=${e.tripReviewId}`,{headers:{Authorization:`Bearer ${a}`}});console.log("✅  tripReviewId:",e.tripReviewId),o()}catch(t){console.log("✅  error:",t)}},p=e=>{l(`/scheduleboard/scheduleDetail?tripId=${e.tripId}&TripReviewId=${e.tripReviewId}`)};return i.useEffect(()=>{o()},[]),s.jsxs("div",{children:[s.jsx(u,{icon:"back",title:"내 여행기",onClick:()=>l(-1)}),s.jsx("div",{className:"px-8 mt-9",children:r==null?void 0:r.map((e,t)=>s.jsxs("li",{className:`flex flex-col gap-[20px] px-[30px] py-[30px] rounded-3xl\r
                  shadow-[0_0_10px_0_rgba(0,0,0,0.1)] cursor-pointer mb-8`,onClick:()=>p(e),children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{className:"font-semibold text-[24px] text-slate-700",children:e.title}),s.jsx("p",{className:"text-slate-700 bg-slate-100 py-1 px-3 rounded-lg",onClick:x=>{x.stopPropagation(),d(e)},children:"삭제"})]}),s.jsxs("div",{className:"flex flex-col gap-[20px]",children:[s.jsx("div",{className:"w-full h-[322px] bg-slate-200 rounded-2xl overflow-hidden",children:s.jsx("img",{src:e.tripReviewPics!==null?`${g}${e.tripReviewId}/${e.tripReviewPics[0]}`:"",alt:"여행기 사진",className:"w-full h-full object-cover"})}),s.jsx("p",{className:"text-[18px] text-slate-500 line-clamp-3",children:e.content})]})]},t))})]})};export{R as default};
