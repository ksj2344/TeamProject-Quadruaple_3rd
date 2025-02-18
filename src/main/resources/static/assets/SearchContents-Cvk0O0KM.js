import{g as R,R as I,m as v,f as _,r,u as T,j as e,b as S,c as $,a as L,W as B,e as P}from"./index-lSgSIVq0.js";import"./TitleHeader-CH0dT_zw.js";import{a as u,S as U}from"./SearchItems-B-x3jgN1.js";import{a as F}from"./index-W7l60tzT.js";import{a as z}from"./pic-Jp7D6aQ0.js";import{c as O}from"./match-Bwf83gmQ.js";import{L as Y}from"./index-zdkvGhim.js";import"./index-xOiyq3gC.js";import"./index-CL3h7xgQ.js";import"./index-QJhHY3lT.js";import"./index-76rm2S88.js";import"./index-BITOSm_t.js";import"./Portal-DgKfOFff.js";import"./useId-NRmY-Uhn.js";import"./zoom-JFcaoQzf.js";import"./Skeleton-C0MpUwLB.js";import"./index-DOmuDq51.js";const W=({searchData:p,setSearchData:s,setSearchValue:l,searchValue:a,setSearchState:n})=>{const c=R("accessToken"),[o,h]=I(v),{userId:g}=_(v),[d,y]=r.useState([]),[i,x]=r.useState([]),j=T(),b=async()=>{try{const f=(await S.get("/api/search/popular")).data;y(f.data)}catch(t){console.log("인기검색어 결과",t)}};r.useEffect(()=>{},[d]);const A=async()=>{try{const f=(await S.get(`/api/search/basic?user_id=${g}`,{headers:{Authorization:`Bearer ${c}`}})).data;x(f.data)}catch(t){console.log("최근 본 검색 결과",t)}};r.useEffect(()=>{},[i]);const w=t=>{console.log("클릭한 인기 검색어:",t),l(t.strfName),j(`/contents/index?strfId=${t.strfId}`)},E=t=>{console.log(t),j(`/contents/index?strfId=${t.strfId}`)},k=async t=>{const f={strf_id:t.strfId};try{const N=await S.patch(`/api/recent/hide?strf_id=${t.strfId}`,{...f},{headers:{Authorization:`Bearer ${c}`}});console.log(N.data),N.data&&A()}catch(N){console.log("개별 삭제",N)}},C=async()=>{try{const t=await S.patch("/api/recent/hide/all",{},{headers:{Authorization:`Bearer ${c}`}});console.log(t.data),t.data&&A()}catch(t){console.log("개별 삭제",t)}};return r.useEffect(()=>{b(),o.accessToken&&A()},[]),e.jsxs("div",{className:"px-[32px] flex flex-col gap-[50px]",children:[e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"인기 검색어"}),e.jsx("ul",{className:"flex gap-[20px] flex-wrap",children:d?d==null?void 0:d.map((t,f)=>e.jsx("li",{className:"cursor-pointer text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",onClick:()=>w(t),children:t.strfName},f)):e.jsx("li",{className:"text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",children:"데이터 없음"})})]}),o.accessToken?e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"최근 본 목록"}),e.jsx("button",{type:"button",className:"text-slate-400 text-[18px]",onClick:()=>C(),children:"모두 삭제"})]}),e.jsx("ul",{className:"flex flex-col gap-[20px]",children:i?i==null?void 0:i.map((t,f)=>e.jsxs("li",{className:"flex cursor-pointer items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[15px]",onClick:()=>E(t),children:[e.jsx("div",{className:"w-[80px] h-[80px] rounded-2xl overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:t.strfPic?`${z}${t.strfId}/${t.strfPic}`:"/images/logo_icon_4.png",alt:t.strfName})}),e.jsxs("div",{className:"flex flex-col gap-[5px] justify-center",children:[e.jsx("div",{className:"text-[18px] text-slate-700 font-semibold",children:t.strfName}),e.jsxs("div",{className:"flex gap-[5px]",children:[e.jsx("span",{className:"text-slate-500 text-[14px]",children:O(t.category)}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:"•"}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:t.locationTitle})]})]})]}),e.jsx("button",{type:"button",className:"text-slate-400 text-[20px]",onClick:()=>k(t),children:e.jsx(F,{})})]},f)):null})]}):null]})},m=[{type:"all",name:"전체"},{type:"TOUR",name:"관광지"},{type:"STAY",name:"숙소"},{type:"RESTAUR",name:"맛집"},{type:"FEST",name:"축제"}],K=({searchValue:p,searchData:s,setSearchData:l})=>{const[a,n]=r.useState(0),[c,o]=r.useState(0);r.useEffect(()=>{console.log("selectedCate",a),o(0)},[a]),r.useEffect(()=>{},[s]);const h=r.useRef(null),g=Array.isArray(s)?s.filter(x=>x.category==="TOUR"):[],d=Array.isArray(s)?s.filter(x=>x.category==="STAY"):[],y=Array.isArray(s)?s.filter(x=>x.category==="RESTAUR"):[],i=Array.isArray(s)?s.filter(x=>x.category==="FEST"):[];return e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] min-h-screen",children:[e.jsx("ul",{className:"flex gap-[10px]",ref:h,children:m.map((x,j)=>e.jsx("li",{className:`cursor-pointer font-semibold text-[16px] w-[124px] flex justify-center items-center px-[15px] py-[10px] gap-[10px] rounded-[8px] ${j===a?"bg-primary text-white":"bg-white text-slate-500"}`,onClick:()=>{n(j)},children:x.name},j))}),s.length===0?e.jsxs("div",{className:"flex flex-col gap-[20px] items-center py-[100px]",children:[e.jsx("i",{className:"text-slate-300 text-[100px] ",children:e.jsx(Y,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"검색 결과가 없습니다."})]}):e.jsxs(e.Fragment,{children:[" ",a===0&&e.jsxs("div",{children:[e.jsx(u,{type:m[1].type,name:m[1].name,data:g,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,category:1}),e.jsx(u,{type:m[2].type,name:m[2].name,data:d,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,category:2}),e.jsx(u,{type:m[3].type,name:m[3].name,data:y,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,category:3}),e.jsx(u,{type:m[4].type,name:m[4].name,data:i,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,category:4})]}),a===1&&e.jsx("div",{children:e.jsx(u,{type:"TOUR",data:g,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,setSelectedCate:n,category:1})}),a===2&&e.jsx("div",{children:e.jsx(u,{type:"STAY",data:d,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,setSelectedCate:n,category:2})}),a===3&&e.jsx("div",{children:e.jsx(u,{type:"RESTAUR",data:y,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,setSelectedCate:n,category:3})}),a===4&&e.jsx("div",{children:e.jsx(u,{type:"FEST",data:i,searchValue:p,searchData:s,setSearchData:l,dataIndex:c,setDataIndex:o,setSelectedCate:n,category:4})})]})]})},le=()=>{$(),R("accessToken"),T(),L().state;const[s,l]=r.useState(!1),[a,n]=r.useState(""),[c,o]=r.useState([]),[h,g]=r.useState("");r.useEffect(()=>{},[c]);const d=async()=>{const y={search_word:a,last_index:0};console.log("검색:",y);try{const i=await P.post(`/api/search/all?search_word=${a}`,{...y});console.log("검색 결과 호출",i.data);const x=i.data;o([...x.data])}catch(i){console.log(i)}};return r.useEffect(()=>{console.log("searchValue:",a),d()},[a]),e.jsxs("div",{className:"w-full flex flex-col gap-[30px]",children:[e.jsx(U,{searchValue:a,setSearchValue:n,setSearchState:l,inputValue:h,setInputValue:g,searchData:c,setSearchData:o}),s?e.jsx(K,{searchValue:a,searchData:c,setSearchData:o}):e.jsx(W,{setSearchState:l,searchData:c,setSearchData:o,setSearchValue:n,searchValue:a}),e.jsx(B,{})]})};export{le as default};
