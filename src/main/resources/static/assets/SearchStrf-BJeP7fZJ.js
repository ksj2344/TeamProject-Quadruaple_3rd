import{u as J,j as e,R as K,J as Y,H as Se,B as P,D as Ie,$ as Re,r as a,g as H,d as N,f as E,k as Ae,I as $e,F as Te,P as Fe}from"./index-CCfEkYYD.js";import{a as _e}from"./index-Bws8Da0c.js";import{C as De}from"./CenterModal-BLxOf0mN.js";import{a as q}from"./pic-Jp7D6aQ0.js";import{c as Q,a as Le}from"./match-CrKb_EXc.js";import{a as Me,b as Ee}from"./index-DI7I5gc_.js";import{R as Pe}from"./index-B-PXXu0k.js";import{L as Be}from"./index-DKDx-efY.js";import{c as p,o as U}from"./search-1EubG62x.js";import{F as k}from"./index-D-7V2hUy.js";import{C as G}from"./index-C6U__4s2.js";import{S as Oe}from"./index-BSMd0jin.js";import"./index-0c2dN6yF.js";import"./index-CZcf3rJK.js";import"./index-qy3Jsjdb.js";import"./index-CpIswslS.js";import"./Portal-CSjbbdCj.js";import"./useId-ai7JuQHX.js";import"./zoom-CdQ6y3c9.js";import"./collapse-BbEVqHco.js";import"./index-DfCmhylr.js";import"./useLocale-okFO0PBj.js";import"./Checkbox-CAler7Yr.js";import"./Overflow-BPxJ6ADq.js";import"./PurePanel-DZfO2-M_.js";import"./useIcons-Bcly44J-.js";import"./CheckOutlined-BimpP4X1.js";const We=o=>{o.current.scrollIntoView({behavior:"smooth"})},u=({showMore:o=!0,title:x,categoryData:g,searchValue:m,buttonClick:b})=>{const j=J(),v=c=>{j(`/contents/index?strfId=${c.strfId}`)};return e.jsxs("div",{className:"flex flex-col gap-[20px] items-center",children:[e.jsx("h2",{className:"w-full text-[24px] font-semibold text-slate-700",children:x}),e.jsx("ul",{className:"w-full flex flex-col gap-[20px] mb-[30px]",children:g==null?void 0:g.map((c,y)=>{var l,d;return e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>{v(c)},children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px] overflow-hidden",children:e.jsx("img",{src:`${q}${c.strfId}/${c.strfPic}`,alt:c.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:c.title||c.strfTitle})}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("p",{className:"text-[14px] text-slate-500",children:Q(c.category)}),e.jsx("p",{className:"text-[14px] text-slate-500",children:"|"}),e.jsx("p",{className:"text-[14px] text-slate-500",children:c.locationName})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(Pe,{disabled:!0,count:1,value:c.hasMyReview!==0?1:0}),e.jsx("p",{className:"text-[12px] text-slate-500",children:c.averageRating?c.averageRating:c.ratingAvg?c.ratingAvg:"0"}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",(l=c.reviewCount)==null?void 0:l.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:c.wishIn?e.jsx(Me,{className:"text-secondary3"}):e.jsx(Ee,{className:"text-slate-400"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:(d=c.wishlistCount)==null?void 0:d.toLocaleString()})]})]})]},y)})}),o&&e.jsxs("button",{type:"button",className:`px-[20px] py-[10px] border border-slate-300 \r
\r
        rounded-[24px] text-[16px] font-semibold text-slate-600`,onClick:b,children:[x," 검색결과 더보기"]})]})},Ve=({handleClickCancle:o,getAmenitySearch:x,setAmenityValues:g,searchData:m,setSearchData:b})=>{const[j]=k.useForm();K(Y),Se.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="unset"}),[]);const v=()=>{o()},c=l=>{l.stopPropagation()},y=async l=>{var r;console.log("values",l.amenities),g(l.amenities);const d=(r=l.amenities)==null?void 0:r.map(f=>`amenity_id=${f}`).join("&");console.log("amenityIds",d),await x(d),o()};return e.jsx("div",{className:`fixed top-0 left-[50%] translate-x-[-50%] z-10\r
            max-w-3xl w-full mx-auto h-screen\r
            flex items-end justify-center\r
            bg-[rgba(0,0,0,0.5)] overflow-hidden`,onClick:()=>{v()},children:e.jsx("div",{className:`bg-white w-full \r
                px-[60px] py-[55px]\r
                flex flex-col gap-[20px]\r
                mb-[60px]\r
                `,onClick:c,children:e.jsxs(k,{form:j,onFinish:y,className:"h-[500px] flex flex-col",children:[e.jsx(k.Item,{name:"amenities",className:"flex-1 px-3 py-2 rounded-lg cursor-pointer overflow-y-auto",children:e.jsx(G.Group,{className:"flex flex-col gap-4 px-5 pt-4 w-full",children:Le.map((l,d)=>e.jsx(G,{value:l.amenity_id,className:"scale-110 !flex items-center",children:e.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[e.jsx("span",{className:"text-[16px] text-slate-500",children:l.icon}),e.jsx("span",{className:"text-[20px] text-slate-700",children:l.key})]})},d))})}),e.jsx(k.Item,{children:e.jsxs("div",{className:"flex justify-end gap-4",children:[e.jsx(P,{color:"default",variant:"filled",onClick:o,className:"h-[40px] font-semibold text-[20px] text-slate-500",children:"취소"}),e.jsx(P,{type:"primary",htmlType:"submit",className:"h-[40px] font-semibold text-[20px]",children:"적용"})]})})]})})})},ut=()=>{var z;k.useForm();const[o,x]=K(Y),g=Ie(Re);a.useEffect(()=>{console.log("searchRecoil",o)},[o]);const m=H("accessToken");(z=H("user"))==null||z.userId;const b=a.useRef(null),j=J(),v=()=>{j(-1),g()},[c,y]=a.useState(o.searchWord!==""),[l,d]=a.useState(o.searchWord||""),[r,f]=a.useState(o.searchData||[]),[B,w]=a.useState(o.startIndex||0),[S,X]=a.useState([]),[I,Z]=a.useState([]),[R,ee]=a.useState([]),[i,O]=a.useState(o.category||0),[A,te]=a.useState(0),[se,_]=a.useState(!1),[ae,C]=a.useState(!1),[$,D]=a.useState(!0),[le,W]=a.useState(!1),[re,ce]=a.useState([]),oe=a.useCallback(async()=>{const t="/api/search/popular";try{const s=await N.get(t);X(s.data.data)}catch(s){console.log("인기 검색어",s)}},[]),L=a.useCallback(async()=>{try{const s=(await E.get("/api/search/basic")).data;Z(s.data)}catch(t){console.log("최근 본 검색 결과",t)}},[]),ne=a.useCallback(async()=>{try{const n=(await E.get("/api/search/list")).data.data.filter(h=>h.txt!=="");ee(n)}catch(t){console.log("최근 검색어 호출 결과:",t)}},[]),ie=a.useCallback(async t=>{const s={strf_id:t.strfId};try{const n=await N.patch(`/api/recent/hide?strf_id=${t.strfId}`,{...s},{headers:{Authorization:`Bearer ${m}`}});console.log(n.data),n.data&&L()}catch(n){console.log("개별 삭제",n)}},[]),xe=a.useCallback(async()=>{try{const t=await N.patch("/api/recent/hide/all",{},{headers:{Authorization:`Bearer ${m}`}});console.log(t.data),t.data&&(L(),_(!1))}catch(t){console.log("개별 삭제",t)}},[]),M=a.useCallback(async t=>{if(m)try{const n=(await E.get(`/api/search/all?search_word=${t}`)).data;n&&(C(!0),y(!0)),f(n.data)}catch(s){console.log("전체 검색",s)}else try{const n=(await N.get(`/api/search/all?search_word=${t}`)).data;n&&(C(!0),y(!0)),f(n.data)}catch(s){console.log("전체 검색",s)}},[]),V=a.useCallback(async()=>{var t;try{const s=B,h=(await N.get(`/api/search/category?start_idx=${s}&category=${p[i].name}&search_word=${l}&order_type=${U[A].type}`)).data;h&&C(!0),h.data&&h.data.length>0&&(f(we=>s===0?h.data:[...we,...h.data]),w(s+10)),((t=h.data[0])==null?void 0:t.more)===!1&&D(!1)}catch(s){console.log("카테고리 검색",s)}},[i,B,l,A]),de=a.useCallback(async t=>{try{const s=await N.get(`/api/search/filter?start_idx=0&category=숙소&search_word=${o.searchWord}&${t}`);console.log("편의시설",s.data);const n=s.data;n.data.more===!1&&D(!1),f(n.data)}catch(s){console.log("편의시설",s)}},[]),pe=r==null?void 0:r.filter(t=>t.category==="TOUR"),me=r==null?void 0:r.filter(t=>t.category==="STAY"),fe=r==null?void 0:r.filter(t=>t.category==="RESTAUR"),he=r==null?void 0:r.filter(t=>t.category==="FEST"),ue=t=>{d(t.target.value)},ge=a.useCallback(t=>{console.log("클릭한 최근 검색어:",t),d(t.txt),M(t.txt)},[]),je=a.useCallback(t=>{console.log("클릭한 인기 검색어:",t),j(`/contents/index?strfId=${t.strfId}`)},[]),ye=a.useCallback(t=>{console.log("클릭한 최근 본 목록:",t),j(`/contents/index?strfId=${t.strfId}`)},[]),Ne=a.useCallback(()=>{d("")},[]),be=()=>{_(!1)},ve=t=>{l.trim()&&(C(!1),M(t.target.value),x({...o,searchWord:l}),y(!0))},T=t=>{We(b),O(t),x({...o,category:t})},F=()=>{V()},Ce=()=>{W(!0)},ke=()=>{W(!1)};return a.useEffect(()=>{oe(),m&&(L(),ne())},[]),a.useEffect(()=>{l!==""&&x({...o,searchWord:l})},[l]),a.useEffect(()=>{if(w(0),C(!1),f([]),D(!0),x(t=>({...t,startIndex:0,searchData:[]})),l.trim()){const t=setTimeout(()=>{i!==0?V():M(l)},100);return()=>clearTimeout(t)}},[i,A]),a.useEffect(()=>{(r==null?void 0:r.length)>0&&x({...o,searchData:r})},[r]),e.jsxs("div",{className:"w-full flex flex-col gap-[30px] mb-[100px]",children:[e.jsxs("div",{className:"w-full px-[32px] py-[30px] flex items-center gap-[40px] relative",ref:b,children:[e.jsx("div",{className:"text-[36px] cursor-pointer",onClick:()=>{v()},children:e.jsx(Ae,{})}),e.jsx("label",{htmlFor:"searchBar",className:"relative w-full",children:e.jsx($e,{id:"searchBar",className:"h-[60px] text-lg rounded-lg gap-[5px]",placeholder:"관광지, 장소, 숙소,맛집을 검색해 보세요",allowClear:!0,onClear:Ne,prefix:e.jsx(Te,{className:"text-slate-400 text-2xl"}),onChange:ue,onPressEnter:t=>{t.target.value.trim()&&ve(t)},variant:"filled",value:l})})]}),c?e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] min-h-screen",children:[e.jsx("ul",{className:"flex justify-between items-center",children:p.map((t,s)=>e.jsx("li",{className:`cursor-pointer font-semibold text-[16px] w-full flex justify-center items-center px-[15px] py-[10px] gap-[10px] rounded-[8px] ${s===i?"bg-primary text-white":"bg-white text-slate-500"}`,onClick:()=>{w(0),O(s),x({...o,category:s})},children:t.name},s))}),e.jsxs("div",{className:"flex items-center gap-3",children:[i!==0&&e.jsx(Oe,{value:A,onChange:t=>{te(t),w(0)},options:U.map((t,s)=>({value:s,label:t.name})),className:"w-[120px]",size:"middle"}),e.jsx("div",{children:i===2&&e.jsx(P,{onClick:Ce,children:"편의시설 필터"})})]}),ae?(r==null?void 0:r.length)===0?e.jsxs("div",{className:"flex flex-col gap-[20px] items-center py-[100px]",children:[e.jsx("i",{className:"text-slate-300 text-[100px]",children:e.jsx(Be,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"검색 결과가 없습니다."})]}):e.jsxs(e.Fragment,{children:[i===0&&e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx(u,{title:p[1].name,categoryData:pe,searchValue:l,buttonClick:()=>{T(1)}}),e.jsx(u,{title:p[2].name,categoryData:me,searchValue:l,buttonClick:()=>{T(2)}}),e.jsx(u,{title:p[3].name,categoryData:fe,searchValue:l,buttonClick:()=>{T(3)}}),e.jsx(u,{title:p[4].name,categoryData:he,searchValue:l,buttonClick:()=>{T(4)}})]}),i===1&&e.jsx(u,{title:p[1].name,categoryData:r,searchValue:l,buttonClick:F,showMore:$}),i===2&&e.jsx(u,{title:p[2].name,categoryData:r,searchValue:l,buttonClick:F,showMore:$}),i===3&&e.jsx(u,{title:p[3].name,categoryData:r,searchValue:l,buttonClick:F,showMore:$}),i===4&&e.jsx(u,{title:p[4].name,categoryData:r,searchValue:l,buttonClick:F,showMore:$})]}):e.jsx("div",{className:"flex justify-center items-center h-[50vh]",children:e.jsx(Fe,{color:"#0DD1FD",speedMultiplier:.8})})]}):e.jsxs("div",{className:"px-[32px] flex flex-col gap-[50px]",children:[m&&e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"최근 검색어"}),e.jsx("ul",{className:"flex gap-[20px] flex-wrap",children:R?R==null?void 0:R.map((t,s)=>e.jsx("li",{className:"cursor-pointer text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",onClick:()=>ge(t),children:t.txt},s)):e.jsx("li",{className:"text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",children:"데이터 없음"})})]}),e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"인기 검색어"}),e.jsx("ul",{className:"flex gap-[20px] flex-wrap",children:S?S==null?void 0:S.map((t,s)=>e.jsx("li",{className:"cursor-pointer text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",onClick:()=>je(t),children:t.strfName},s)):e.jsx("li",{className:"text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",children:"데이터 없음"})})]}),m&&e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"최근 본 목록"}),e.jsx("button",{type:"button",className:"text-slate-400 text-[18px]",onClick:()=>_(!0),children:"모두 삭제"})]}),e.jsx("ul",{className:"flex flex-col gap-[20px]",children:I?I==null?void 0:I.map((t,s)=>e.jsxs("li",{className:"flex cursor-pointer items-center justify-between",onClick:()=>ye(t),children:[e.jsxs("div",{className:"flex gap-[15px]",children:[e.jsx("div",{className:"w-[80px] h-[80px] rounded-2xl overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:t.strfPic?`${q}${t.strfId}/${t.strfPic}`:"/images/logo_icon_4.png",alt:t.strfName})}),e.jsxs("div",{className:"flex flex-col gap-[5px] justify-center",children:[e.jsx("div",{className:"text-[18px] text-slate-700 font-semibold",children:t.strfName}),e.jsxs("div",{className:"flex gap-[5px]",children:[e.jsx("span",{className:"text-slate-500 text-[14px]",children:Q(t.category)}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:"•"}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:t.locationTitle})]})]})]}),e.jsx("button",{type:"button",className:"text-slate-400 text-[20px]",onClick:()=>ie(t),children:e.jsx(_e,{})})]},s)):null})]})]}),se&&e.jsx(De,{handleClickCancle:be,handleClickSubmit:xe,content:"최근 본 목록을 모두 삭제하시겠습니까?"}),le&&e.jsx(Ve,{searchData:r,setSearchData:f,amenityValues:re,setAmenityValues:ce,handleClickCancle:ke,getAmenitySearch:de,content:"편의시설 필터"})]})};export{ut as default};
