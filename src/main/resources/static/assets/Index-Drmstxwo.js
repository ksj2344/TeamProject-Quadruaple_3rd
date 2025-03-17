import{g as S,u as C,b as I,r as t,j as e,a7 as k,B as A,c as g,J as n,a8 as c}from"./index-CiM0iehI.js";import{S as B}from"./index-DRF_f7CH.js";import{R as L}from"./index-BfTMOH_7.js";import"./useBubbleLock-B49c9xEt.js";import"./useId-CfZRftqB.js";const D=()=>{const h=S("accessToken"),m=C(),[i]=I(),v=i.get("category"),b=i.get("reportTarget"),[a,j]=t.useState(1),[y,T]=t.useState(""),[u,x]=t.useState(""),[R,r]=t.useState(!1),N=s=>{j(s.target.value),s.target.value!==8&&x("")};t.useEffect(()=>{var s;T(((s=p.find(l=>l.value===a))==null?void 0:s.label)||"")},[a]);const w=async()=>{var d;const s="/api/report",l={category:E(v),reportTarget:b,reason:a===8?u:y};r(!0);try{const f=(await g.post(s,l,{headers:{Authorization:`Bearer ${h}`}})).data;return r(!1),f.code==="200 성공"&&(setTimeout(()=>{n.success("신고가 완료되었습니다.")},0),m(-1)),f}catch(o){return g.isAxiosError(o)&&(((d=o.response)==null?void 0:d.status)===405?setTimeout(()=>{n.error("이미 신고한 내용입니다.")},0):setTimeout(()=>{n.error("신고에 실패했습니다.")},0)),r(!1),null}},p=[{value:1,label:"주문과 관련없는 내용"},{value:2,label:"음란성, 욕설 등 부적절한 내용"},{value:3,label:"부적절한 홍보 또는 광고"},{value:4,label:"관련없는 사진 게시"},{value:5,label:"개인정보 유출 위험"},{value:6,label:"리뷰 작성 취지에 맞지 않는 내용(복사글 등)"},{value:7,label:"저작권 도용 의심(사진 등)"},{value:8,label:"기타(하단 내용 작성)"}],E=s=>{switch(s){case c.REVIEW:return"리뷰";case c.STRF:return"상품";case c.TRIPREVIEW:return"여행기";default:return"리뷰"}};return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("section",{className:"flex flex-col gap-4 text-slate-700 px-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"신고하는 이유를 알려주세요!"}),e.jsxs("div",{className:"flex flex-col bg-slate-100 rounded-lg p-4 text-slate-500 text-sm",children:[e.jsx("p",{children:"타당한 근거 없이 신고된 내용은 관리자 확인 후 반영되지 않을 수 있습니다."}),e.jsx("p",{children:"신고하는 이유를 알려주시면 더 나은 서비스를 제공할 수 있습니다."})]})]}),e.jsxs(B,{spinning:R,children:[e.jsxs("section",{className:"px-4 flex flex-col gap-4",children:[e.jsx(L.Group,{options:p,onChange:N,value:a,className:"flex flex-col gap-4 w-full [&_.ant-radio-wrapper]:text-base [&_.ant-radio-wrapper]:text-slate-700"}),e.jsx(k,{placeholder:"신고 사유를 입력해주세요.",showCount:!0,maxLength:500,onChange:s=>x(s.target.value),value:u,disabled:a!==8,style:{resize:"none",height:"180px"}})]}),e.jsx("section",{className:"px-4 py-8",children:e.jsx(A,{type:"primary",className:"w-full h-[16vw] max-h-[60px] text-lg font-semibold",onClick:w,children:"신고하기"})})]})]})};export{D as default};
