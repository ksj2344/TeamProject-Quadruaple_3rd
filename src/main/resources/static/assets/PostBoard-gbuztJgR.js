import{g as k,b as B,u as D,r as o,j as e,e as h,B as P,i as u}from"./index-Cwx4I7Vi.js";import{T as C}from"./TitleHeader-B_AiqjDt.js";import{M as A}from"./index-eJot4Dt1.js";import{S as E}from"./ScheduleDay-BFov5vUi.js";import{F as s}from"./index-CrprEvdX.js";import{U as O}from"./index-BcCznlQQ.js";import"./index-CWBfKhhN.js";import"./index-zy4pIAEY.js";import"./index-C1nPTQe_.js";import"./match-DbFL20-W.js";import"./index-DYAbll7n.js";import"./index-U9W_KTU5.js";import"./tripAtom-3d6D5ktp.js";import"./pic-Jp7D6aQ0.js";import"./CenterModal-Djm6Na2l.js";import"./dayjs.min-DnVSsyDC.js";import"./index-Dbth3xtv.js";import"./KeyCode-DNlgD2sM.js";import"./index-G7OR39Gq.js";import"./index-B7BtatMF.js";import"./Portal-SJsC_TZ1.js";import"./useId-cPQzkJ8H.js";import"./useZIndex-0xqzHicI.js";import"./zoom-D6z5ctYs.js";import"./Keyframes-C9Oo5sJi.js";import"./collapse-BbEVqHco.js";import"./index-BBJIY0lA.js";import"./useLocale-Dwzm1w12.js";import"./ExclamationCircleFilled-Dk5DvsjU.js";import"./fade-DpeTCdmG.js";import"./CheckOutlined-CC4htO-i.js";import"./CloseOutlined-GwKmxF7X.js";const he=()=>{var x;k("accessToken");const[g]=B(),n=parseInt(g.get("tripId")),p=D(),j=()=>{p(-1)},y=()=>{p("/scheduleboard/index")};o.useState(""),o.useState("여행기 제목"),o.useState("");const[b,v]=o.useState({}),[c,m]=o.useState([]),[w,d]=o.useState(!1),N=async()=>{try{const t=await u.get(`/api/trip?trip_id=${n}`);console.log("여행확인하기",t.data);const l=t.data.data;v(l)}catch(t){console.log(t)}};o.useEffect(()=>{N()},[]);const[S]=s.useForm(),F=({fileList:t})=>m(t),T=async t=>{const{title:l,file:a,content:I}=t,L={tripId:n,title:l,content:I},i=new FormData;m(a.fileList),i.append("req",new Blob([JSON.stringify(L)],{type:"application/json"})),console.log(t),console.log(c),a&&a.fileList&&a.fileList.length>0&&a.fileList.forEach(r=>{i.append("tripReviewPic",r.originFileObj)});const f=i.get("p");f&&f.text().then(r=>console.log("p의 내용:",r)),console.log("보낸 데이터",[...i]);try{const r=await u.post("/api/trip-review",i);console.log(r.data)}catch(r){console.error(r)}};return e.jsxs("div",{children:[e.jsx(C,{icon:"back",onClick:j,title:"여행기 공유"}),e.jsx("div",{className:"mt-[60px] py-[40px] flex flex-col gap-[40px]",children:e.jsx("div",{className:"flex flex-col  px-[32px]",children:e.jsxs(s,{form:S,onFinish:T,layout:"vertical",className:"flex flex-col gap-[48px]",children:[e.jsx(s.Item,{name:"file",children:e.jsx(O,{id:"file",listType:"picture-card",beforeUpload:()=>!1,fileList:c,onChange:F,multiple:!0,children:e.jsx("div",{htmlFor:"fileUpload",className:`\r
            w-[160px] h-[160px] \r
            flex items-center justify-center\r
            bg-slate-100 rounded-lg\r
            hover:bg-[#e9eef3]\r
            transition duration-300\r
            cursor-pointer shrink-0`,children:e.jsx(A,{size:60,className:"text-slate-400"})})})}),e.jsx(s.Item,{name:"title",className:`border-b ${w?"border-primary":"border-slate-200"}`,children:e.jsx(h,{variant:"borderless",className:` px-[10px] py-[10px]\r
                text-slate-400 text-[36px] font-semibold\r
              placeholder:text-slate-400\r
                 `,onFocus:()=>d(!0),onBlur:()=>d(!1),placeholder:"여행기 제목"})}),e.jsx(s.Item,{name:"content",children:e.jsx(h.TextArea,{rows:4,placeholder:"이번 여행은 어떠셨나요? 여행에 대한 감상과 여행에서 경험한 꿀팁들을 남겨 다른 회원님들과 공유해보세요 !",variant:"borderless",maxLength:100,autoSize:{minRows:3,maxRows:5},style:{height:300,resize:"none"},className:"placeholder: text-[24px] placeholder: text-slate-400"})}),e.jsx("div",{className:"flex flex-col gap-[50px]",children:(x=b.days)==null?void 0:x.map((t,l)=>e.jsx(E,{data:t,showMap:!1,readOnly:!0}))}),e.jsx(s.Item,{className:"w-full",children:e.jsx(P,{type:"primary",htmlType:"submit",className:`w-full h-[80px] \r
                    text-slate-50 text-[24px] font-semibold`,onClick:y,children:"완료"})})]})})})]})};export{he as default};
