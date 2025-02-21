import{r as o,a4 as H,N as W,D as I,E as j,H as q,J as D,z as B,a5 as N,l as X,m as A,a6 as P,a7 as J,n as z,q as U,a8 as K,a9 as Q,U as Y}from"./index-H5Y2xFEd.js";import{u as Z}from"./useId-D0Wg6OZK.js";import{T as ee,W as ne}from"./button-CWLWs435.js";import{F as re}from"./context-DieX9Lv6.js";var ae=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],te=o.forwardRef(function(e,n){var r=e.prefixCls,l=r===void 0?"rc-checkbox":r,c=e.className,f=e.style,m=e.checked,u=e.disabled,x=e.defaultChecked,E=x===void 0?!1:x,v=e.type,h=v===void 0?"checkbox":v,R=e.title,i=e.onChange,k=H(e,ae),b=o.useRef(null),s=o.useRef(null),a=Z(E,{value:m}),y=W(a,2),S=y[0],C=y[1];o.useImperativeHandle(n,function(){return{focus:function(t){var d;(d=b.current)===null||d===void 0||d.focus(t)},blur:function(){var t;(t=b.current)===null||t===void 0||t.blur()},input:b.current,nativeElement:s.current}});var g=I(l,c,j(j({},"".concat(l,"-checked"),S),"".concat(l,"-disabled"),u)),$=function(t){u||("checked"in e||C(t.target.checked),i==null||i({target:D(D({},e),{},{type:h,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))};return o.createElement("span",{className:g,title:R,style:f,ref:s},o.createElement("input",q({},k,{className:"".concat(l,"-input"),ref:b,onChange:$,disabled:u,checked:!!S,type:h})),o.createElement("span",{className:"".concat(l,"-inner")}))});function oe(e){const n=B.useRef(null),r=()=>{N.cancel(n.current),n.current=null};return[()=>{r(),n.current=N(()=>{n.current=null})},f=>{n.current&&(f.stopPropagation(),r()),e==null||e(f)}]}const le=e=>{const{checkboxCls:n}=e,r=`${n}-wrapper`;return[{[`${n}-group`]:Object.assign(Object.assign({},P(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[r]:Object.assign(Object.assign({},P(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${r}`]:{marginInlineStart:0},[`&${r}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[n]:Object.assign(Object.assign({},P(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${n}-inner`]:Object.assign({},J(e))},[`${n}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${z(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${z(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${r}:not(${r}-disabled),
        ${n}:not(${n}-disabled)
      `]:{[`&:hover ${n}-inner`]:{borderColor:e.colorPrimary}},[`${r}:not(${r}-disabled)`]:{[`&:hover ${n}-checked:not(${n}-disabled) ${n}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${n}-checked:not(${n}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${n}-checked`]:{[`${n}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${r}-checked:not(${r}-disabled),
        ${n}-checked:not(${n}-disabled)
      `]:{[`&:hover ${n}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[n]:{"&-indeterminate":{[`${n}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${n}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${r}-disabled`]:{cursor:"not-allowed"},[`${n}-disabled`]:{[`&, ${n}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${n}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${n}-indeterminate ${n}-inner::after`]:{background:e.colorTextDisabled}}}]};function ie(e,n){const r=A(n,{checkboxCls:`.${e}`,checkboxSize:n.controlInteractiveSize});return[le(r)]}const ce=X("Checkbox",(e,n)=>{let{prefixCls:r}=n;return[ie(r,e)]}),se=B.createContext(null);var de=function(e,n){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(e);c<l.length;c++)n.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(e,l[c])&&(r[l[c]]=e[l[c]]);return r};const ue=(e,n)=>{var r;const{prefixCls:l,className:c,rootClassName:f,children:m,indeterminate:u=!1,style:x,onMouseEnter:E,onMouseLeave:v,skipGroup:h=!1,disabled:R}=e,i=de(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:k,direction:b,checkbox:s}=o.useContext(U),a=o.useContext(se),{isFormItemInput:y}=o.useContext(re),S=o.useContext(K),C=(r=(a==null?void 0:a.disabled)||R)!==null&&r!==void 0?r:S,g=o.useRef(i.value),$=o.useRef(null),w=Q(n,$);o.useEffect(()=>{a==null||a.registerValue(i.value)},[]),o.useEffect(()=>{if(!h)return i.value!==g.current&&(a==null||a.cancelValue(g.current),a==null||a.registerValue(i.value),g.current=i.value),()=>a==null?void 0:a.cancelValue(i.value)},[i.value]),o.useEffect(()=>{var O;!((O=$.current)===null||O===void 0)&&O.input&&($.current.input.indeterminate=u)},[u]);const t=k("checkbox",l),d=Y(t),[L,_,M]=ce(t,d),p=Object.assign({},i);a&&!h&&(p.onChange=function(){i.onChange&&i.onChange.apply(i,arguments),a.toggleOption&&a.toggleOption({label:m,value:i.value})},p.name=a.name,p.checked=a.value.includes(i.value));const T=I(`${t}-wrapper`,{[`${t}-rtl`]:b==="rtl",[`${t}-wrapper-checked`]:p.checked,[`${t}-wrapper-disabled`]:C,[`${t}-wrapper-in-form-item`]:y},s==null?void 0:s.className,c,f,M,d,_),V=I({[`${t}-indeterminate`]:u},ee,_),[G,F]=oe(p.onClick);return L(o.createElement(ne,{component:"Checkbox",disabled:C},o.createElement("label",{className:T,style:Object.assign(Object.assign({},s==null?void 0:s.style),x),onMouseEnter:E,onMouseLeave:v,onClick:G},o.createElement(te,Object.assign({},p,{onClick:F,prefixCls:t,className:V,disabled:C,ref:w})),m!==void 0&&o.createElement("span",null,m))))},he=o.forwardRef(ue);export{he as C,se as G,oe as a,te as b,ce as u};
