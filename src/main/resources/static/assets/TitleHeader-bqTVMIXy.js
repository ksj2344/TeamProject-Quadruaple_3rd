import{m as x,j as e,n as m,r as o,o as d,p as u}from"./index-CiM0iehI.js";import"./dayjs.min-H8NlPhUh.js";import{a as p}from"./index-D5eFVfyz.js";import{C as f}from"./index-DxYWFAJ6.js";import{H as j}from"./index-LQh0N3NZ.js";const C=x.memo(({icon1:n=!1,icon2:t=!1,icon3:r=!1,icon4:a=!1,icon1Click:i,icon2Click:s,icon3Click:l,icon4Click:c})=>e.jsx("div",{children:e.jsxs("ul",{className:"flex gap-[30px] items-center",children:[n?e.jsx("li",{className:"flex items-center text-[36px] text-slate-700",children:e.jsx("button",{type:"button",onClick:i,children:e.jsx(p,{})})}):null,t?e.jsx("li",{className:"flex items-center text-[36px] text-slate-700",children:e.jsx("button",{type:"button",onClick:s,children:e.jsx(j,{})})}):null,r?e.jsx("li",{className:"flex items-center text-[36px] text-slate-700",children:e.jsx("button",{type:"button",onClick:l,children:e.jsx(m,{})})}):null,a?e.jsx("li",{className:"flex items-center text-[36px] text-slate-700",children:e.jsx("button",{type:"button",onClick:c,children:e.jsx(f,{})})}):null]})})),k=x.memo(({icon:n,title:t,onClick:r,rightContent:a=null})=>{const[i,s]=o.useState(!1);return o.useEffect(()=>{const l=()=>{window.scrollY>0?s(!0):s(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),e.jsxs("div",{className:`flex  items-center justify-between 
    w-full mx-auto h-[60px] px-4 sticky top-0 left-0 z-10 transition-colors duration-100 ${i?"bg-white shadow-sm":"bg-transparent"}`,children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("button",{type:"button",className:"text-3xl text-slate-700",onClick:r,children:n==="back"?e.jsx(d,{}):e.jsx(u,{})}),e.jsx("div",{className:"text-xl font-semibold text-slate-700",children:t?`${t}`:""})]}),e.jsx("div",{className:"flex items-center text-[36px] text-slate-700",children:a})]})});export{C as R,k as T};
