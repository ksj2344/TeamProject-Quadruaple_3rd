import{u as f,c as x,R as g,B as h,r as c,D as l,g as j,E as p,j as e}from"./index-CG8vYf2y.js";import{S as k}from"./index-Lk_NMThz.js";import"./reactNode-Dx8pTwlk.js";import"./Keyframes-DQFvTPSf.js";import"./genStyleUtils-BNuyCX-p.js";const K=()=>{const t=f(),[i]=x(),s=i.get("access_token"),a=i.get("user_id"),r=i.get("email"),n=i.get("nick_name"),o=i.get("pic"),[,m]=g(h),[d]=c.useState(!1);return c.useEffect(()=>{if(s&&l("accessToken",s),a&&r){const u=j("user");l("user",{...u,userId:a,email:r,isSaveLogin:!1,isSaveEmail:!1,providerType:p.KAKAO})}a&&r&&n&&o&&s&&m({userId:Number(a),name:n,email:r,porfilePic:o,accessToken:s,providerType:p.KAKAO}),t(s===null?"/signin":"/")},[]),e.jsx("div",{children:e.jsxs(k,{spinning:d,tip:"카카오 로그인 진행 중...",size:"large",children:[e.jsx("h1",{children:"카카오 로그인 준비 중(도흠쌤 버전 아님)"}),e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsxs("p",{children:["토큰: ",s]}),e.jsxs("p",{children:["userId: ",a]}),e.jsxs("p",{children:["이메일: ",r]}),e.jsxs("p",{children:["이름: ",n]}),e.jsxs("p",{children:["이미지: ",o]})]})]})})};export{K as default};
