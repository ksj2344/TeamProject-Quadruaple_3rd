import{ag as u,v as _,w as F,m,D as V,af as I,u as T,j as e,T as R,B as W}from"./index-CiM0iehI.js";/* empty css                    */import{R as f}from"./index-BfTMOH_7.js";import{i as g}from"./gapSize-U1swVQyS.js";import{C as k}from"./index-D-QA9Ymb.js";import"./useBubbleLock-B49c9xEt.js";import"./useId-CfZRftqB.js";import"./Checkbox-DG2smT69.js";const b=["wrap","nowrap","wrap-reverse"],j=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],h=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],D=(t,s)=>{const a=s.wrap===!0?"wrap":s.wrap;return{[`${t}-wrap-${a}`]:a&&b.includes(a)}},L=(t,s)=>{const a={};return h.forEach(l=>{a[`${t}-align-${l}`]=s.align===l}),a[`${t}-align-stretch`]=!s.align&&!!s.vertical,a},z=(t,s)=>{const a={};return j.forEach(l=>{a[`${t}-justify-${l}`]=s.justify===l}),a};function A(t,s){return u(Object.assign(Object.assign(Object.assign({},D(t,s)),L(t,s)),z(t,s)))}const B=t=>{const{componentCls:s}=t;return{[s]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},H=t=>{const{componentCls:s}=t;return{[s]:{"&-gap-small":{gap:t.flexGapSM},"&-gap-middle":{gap:t.flexGap},"&-gap-large":{gap:t.flexGapLG}}}},J=t=>{const{componentCls:s}=t,a={};return b.forEach(l=>{a[`${s}-wrap-${l}`]={flexWrap:l}}),a},M=t=>{const{componentCls:s}=t,a={};return h.forEach(l=>{a[`${s}-align-${l}`]={alignItems:l}}),a},X=t=>{const{componentCls:s}=t,a={};return j.forEach(l=>{a[`${s}-justify-${l}`]={justifyContent:l}}),a},q=()=>({}),Q=_("Flex",t=>{const{paddingXS:s,padding:a,paddingLG:l}=t,n=F(t,{flexGapSM:s,flexGap:a,flexGapLG:l});return[B(n),H(n),J(n),M(n),X(n)]},q,{resetStyle:!1});var U=function(t,s){var a={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&s.indexOf(l)<0&&(a[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,l=Object.getOwnPropertySymbols(t);n<l.length;n++)s.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(t,l[n])&&(a[l[n]]=t[l[n]]);return a};const o=m.forwardRef((t,s)=>{const{prefixCls:a,rootClassName:l,className:n,style:y,flex:p,gap:i,children:N,vertical:x=!1,component:v="div"}=t,C=U(t,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:r,direction:w,getPrefixCls:P}=m.useContext(V),c=P("flex",a),[S,$,O]=Q(c),G=x??(r==null?void 0:r.vertical),E=u(n,l,r==null?void 0:r.className,c,$,O,A(c,t),{[`${c}-rtl`]:w==="rtl",[`${c}-gap-${i}`]:g(i),[`${c}-vertical`]:G}),d=Object.assign(Object.assign({},r==null?void 0:r.style),y);return p&&(d.flex=p),i&&!g(i)&&(d.gap=i),S(m.createElement(v,Object.assign({ref:s,className:E,style:d},I(C,["justify","wrap","align"])),N))}),ne=()=>{const t=T(),s=()=>{t("/user/point")};return e.jsxs("div",{children:[e.jsx(R,{icon:"",title:"포인트 충전",onClick:s}),e.jsx("div",{className:"py-3 px-4 border-b-[10px] border-slate-100",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700 ml-1 mb-3",children:"충전 포인트"}),e.jsxs("div",{className:"px-3 py-4 border-[1px] border-slate-200 rounded-lg flex items-center justify-between mb-3",children:[e.jsx("p",{className:"text-base text-slate-700",children:"현재 포인트"}),e.jsx("p",{className:"text-base text-primary font-semibold",children:"6,700P"})]}),e.jsx(f.Group,{className:"custom-radio",options:[{value:1,label:e.jsxs(o,{gap:"small",align:"center",vertical:!0,className:"text-base text-slate-700 py-4 ",children:[e.jsx("p",{children:"10,000P"}),e.jsx("p",{children:"10,000원"})]})},{value:2,label:e.jsxs(o,{gap:"small",align:"center",vertical:!0,className:"text-base text-slate-700 py-4",children:[e.jsx("p",{children:"30,000P"}),e.jsx("p",{children:"30,000P"})]})},{value:3,label:e.jsxs(o,{gap:"small",align:"center",vertical:!0,className:"text-base text-slate-700 py-4",children:[e.jsx("p",{children:"50,000P"}),e.jsx("p",{children:"50,000P"})]})},{value:4,label:e.jsxs(o,{gap:"small",align:"center",vertical:!0,className:"text-base text-slate-700 py-4 ",children:[e.jsx("p",{children:"70,000P"}),e.jsx("p",{children:"70,000P"})]})},{value:5,label:e.jsxs(o,{gap:"small",align:"center",vertical:!0,className:"text-base text-slate-700 py-4 ",children:[e.jsx("p",{children:"100,000P"}),e.jsx("p",{children:"100,000P"})]})}]})]})}),e.jsxs("div",{className:"pt-3 px-4 border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700 mb-3",children:"결제정보"}),e.jsxs("div",{className:"py-4 flex items-center justify-between mb-3",children:[e.jsx("p",{className:"text-base text-slate-700 font-semibold",children:"결제 금액"}),e.jsx("p",{className:"text-base text-primary font-semibold",children:"10,000원"})]})]}),e.jsxs("div",{className:"py-3 px-4 border-b-[10px] border-slate-100",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700 ml-1 mb-3",children:"결제수단"}),e.jsx("div",{className:"px-3 py-4 border-[1px] border-slate-200 rounded-lg flex items-center justify-between mb-3",children:e.jsx(f,{className:"custom-payment-radio text-base text-slate-700",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("img",{src:"/images/payment/payment_icon_yellow_small.png",alt:"payment_icon_yellow_small",className:"w-[60px]"}),e.jsx("span",{children:"카카오페이"})]})})}),e.jsxs("div",{className:"bg-slate-50 p-5 rounded-lg",children:[e.jsx("p",{className:"text-lg text-slate-700 mb-[6px]",children:"결제혜택"}),e.jsx("p",{className:"text-base text-slate-500 tracking-tight",children:'본 프로모션은 카카오페이 계정 기준 "기간 내 1회, 카카오페이머니 결제"에 한해 페이포인트 적립 가능합니다. - 포인트 적립은 장바구니 합산 기준으로 최종 결제 금액 4만원 이상 시 자동 적립되며, 카카오페이 톡채널로 안내됩니다. (기간 내 누적 결제금액이 아닌 단건 결제에 한함) - 기간 내 선착순 3천명 대상으로 예산 소진 시 별도 고지 없이 조기 종료 될 수 있습니다. - 예산 소진 시 페이포인트 적립 메세지가 발송되지 않습니다. - 포인트 사용 유효기간은 적립일로부터 60개월입니다. - 적립된 포인트는 카카오페이 제휴 가맹점에서 사용 가능합니다.'})]})]}),e.jsxs("div",{className:"py-3 px-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700 ml-1 mb-3",children:"취소정책 및 이용 동의"}),e.jsx(k,{className:"custom-payment-checkbox w-full text-base rounded-lg my-4 text-slate-700",children:"주문 내용과 아래 유의 사항을 확인하였으며 결제 진행에 동의합니다."}),e.jsx(W,{type:"primary",className:"w-full text-base py-3 !h-auto",children:"결제하기"}),e.jsx("p",{className:"mt-3 text-sm text-slate-500",children:'• 본 약관은 주식회사 카카오페이(이하 "회사"라 합니다)가 제공하는 카카오페이 서비스의 이용과 관련하여 회사와 회원 사이의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.'})]})]})};export{ne as default};
