import{g as f,b as D,u as N,M as T,S as E,r as d,j as a,B as U,c as B,J as g}from"./index-CiM0iehI.js";import{s as R}from"./strfAtom-DTJf9ZGj.js";import{m as k}from"./match-CHJTCtXc.js";import{u as A,F as l}from"./index-BctfIxuD.js";import{S as C}from"./index-DRF_f7CH.js";import{U as M}from"./index-DjOa9wwR.js";import"./index-D5eFVfyz.js";import"./index-BpFWN78L.js";import"./index-CzF2OAM2.js";import"./index-Cpn1PKWB.js";import"./index-BCTjbqQi.js";import"./motion-BUbX8Cb0.js";import"./collapse-BbEVqHco.js";import"./zoom-BZWbfUq2.js";import"./Portal-C3bpsPPe.js";import"./responsiveObserver-CWjQaA9G.js";import"./index-Dx58Pgh_.js";import"./index-c8GoCNeN.js";import"./index-BB0IkGXf.js";import"./useId-CfZRftqB.js";import"./isMobile-B4CO7CVJ.js";import"./roundedArrow-CePw_OaH.js";import"./useLocale-CV7yhF7H.js";import"./fade-BNyIXdWS.js";import"./useForceUpdate-5Az2P2Yw.js";import"./CheckOutlined-B50Z6S37.js";const dt=()=>{const h=f("accessToken"),n=f("user").strfDtos[0].busiNum;console.log(n);const[p]=D(),i=p.get("strfId"),u=p.get("category"),x=N(),P=()=>{x(`/business/store?strfId=${i}&category=${u}&tab=0`)},[j,_]=T(R),y=j.strfPics.map((t,r)=>({uid:`-${r}`,name:t.strfPic,status:"done",url:`${E}/${i}/${t.strfPic}`})),[o,w]=d.useState(y),[b,c]=d.useState(!1),[$]=A(),F=async t=>{console.log("form",t);const r={strfId:i,busiNum:n},s=new FormData;if(!o||o.length===0){console.error("fileList가 비어 있습니다!");return}s.append("p",new Blob([JSON.stringify(r)],{type:"application/json"})),(o.length??!1)&&o.forEach(e=>{s.append("strfPic",e.originFileObj)}),await L(s)},I=({fileList:t})=>{w(t)},S=async t=>{let r=t.url;r||(r=await new Promise(v=>{const m=new FileReader;m.readAsDataURL(t.originFileObj),m.onload=()=>v(m.result)}));const s=new Image;s.src=r;const e=window.open(r);e==null||e.document.write(s.outerHTML)},L=async t=>{const r="/api/detail/strf/pic";c(!0);try{const s=await B.put(`${r}?strfId=${i}&busiNum=${n}`,t,{headers:{Authorization:`Bearer ${h}`}}),e=s.data;return e.code==="200 성공"&&(c(!1),g.success("사진 변경을 성공했습니다"),P()),console.log("사진 변경",s.data),e}catch(s){return console.log("사진 변경",s),g.error("사진 변경에 실패했습니다"),c(!1),null}};return a.jsx("div",{children:a.jsx(C,{spinning:b,children:a.jsxs(l,{form:$,onFinish:F,name:"strfPic",children:[a.jsx(l.Item,{name:"strfPic",rules:[{required:!0,message:"메뉴 사진을 등록해주세요.",validator:()=>o.length>0?Promise.resolve():Promise.reject(new Error("메뉴 사진을 등록해주세요."))}],help:`${k(u)} 이미지는 다수(최대 5장)을 등록하실 수 있습니다.`,children:a.jsx(M,{listType:"picture-card",fileList:o,onChange:I,onPreview:S,beforeUpload:()=>!1,accept:"image/*",maxCount:5,children:o.length<5&&"+ Upload"})}),a.jsx(l.Item,{children:a.jsx(U,{type:"primary",htmlType:"submit",size:"large",className:"text-lg",children:"등록하기"})})]})})})};export{dt as default};
