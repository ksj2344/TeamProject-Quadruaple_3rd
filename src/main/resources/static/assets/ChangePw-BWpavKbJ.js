import{u as n,j as e,I as o,B as c}from"./index-CiM0iehI.js";import{j as d}from"./jwt-QgJYqd_L.js";import{T as x}from"./TitleHeader-bqTVMIXy.js";import{F as s}from"./index-BctfIxuD.js";import"./dayjs.min-H8NlPhUh.js";import"./index-D5eFVfyz.js";import"./index-DxYWFAJ6.js";import"./index-LQh0N3NZ.js";import"./motion-BUbX8Cb0.js";import"./collapse-BbEVqHco.js";import"./zoom-BZWbfUq2.js";import"./Portal-C3bpsPPe.js";import"./responsiveObserver-CWjQaA9G.js";import"./index-Dx58Pgh_.js";import"./index-c8GoCNeN.js";import"./index-BB0IkGXf.js";import"./useId-CfZRftqB.js";import"./isMobile-B4CO7CVJ.js";import"./roundedArrow-CePw_OaH.js";import"./useLocale-CV7yhF7H.js";const D=()=>{const r=n(),[l]=s.useForm(),i=t=>{console.log(t),p(t)},p=async t=>{const m={pw:t.pw,newPw:t.newPw};try{const a=await d.patch("/api/user/password",m);console.log("비밀번호 변경",a.data),a.data.code==="200 성공"&&r("/signin")}catch(a){console.log("비밀번호 변경",a)}};return e.jsxs("div",{children:[e.jsx(x,{title:"비밀번호 변경",onClick:()=>{r(-1)},icon:"back"}),e.jsxs("div",{className:"mt-[100px] flex flex-col justify-center items-start w-full px-8 gap-[20px]",children:[e.jsx("h2",{className:"text-[30px] text-slate-700 font-bold",children:"비밀번호 변경"}),e.jsx("div",{className:"w-full",children:e.jsxs(s,{form:l,requiredMark:!1,onFinish:i,className:"w-full flex flex-col gap-[20px]",children:[e.jsx(s.Item,{name:"pw",label:"비밀번호",labelCol:{span:24},rules:[{required:!0,message:"비밀번호는 필수 입력 항목입니다."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(o.Password,{placeholder:"현재 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(s.Item,{name:"newPw",label:"새 비밀번호",labelCol:{span:24},rules:[{required:!0,message:"새로운 비밀번호를 입력해주세요."},{pattern:/^(?=.*[A-Za-z])(?=.*[\d~!@#$%^&*()_+=])[A-Za-z\d~!@#$%^&*()_+=]{8,20}$/,message:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다"}],help:"비밀번호는 반드시 8-20자 이내 숫자, 특수문자(), 영문자 중 2가지 이상을 조합하셔야 합니다",children:e.jsx(o.Password,{placeholder:"새로운 비밀번호를 입력해주세요.",style:{height:"60px",width:"100%"}})}),e.jsx(s.Item,{children:e.jsx(c,{type:"primary",htmlType:"submit",className:"h-[60px] w-full text-[20px] font-semibold",children:"비밀번호 변경"})})]})})]})]})};export{D as default};
