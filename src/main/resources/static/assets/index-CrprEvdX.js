import{Y as rt,C as ot,r as l,J as ce,a0 as U,w as lt,ah as We,y as ee,x as st,bg as $e,Z as xe,a1 as G,aP as at,aI as it,bh as ct,bi as ut,ak as dt,ay as ft,bj as mt,bk as pt,bl as gt,bm as ht,bn as Ae,bo as re,bp as bt,ad as yt,aj as me,ag as Ee,aR as $t,al as xt,bq as Ct,br as Ie,bs as wt,aw as qe,W as vt,X as St,A as Ot,ap as Et,aq as It,aT as Mt,$ as jt,bt as De,bu as Ft,bv as Nt,bw as Pt,bx as Rt,aF as _t,ax as Vt,aJ as Lt,by as Tt,bz as zt}from"./index-Cwx4I7Vi.js";import{a as Me}from"./Portal-SJsC_TZ1.js";import{g as Ht}from"./collapse-BbEVqHco.js";import{z as Be}from"./zoom-D6z5ctYs.js";import{u as Wt,a as At}from"./index-BBJIY0lA.js";import{T as qt}from"./index-G7OR39Gq.js";import{u as Dt}from"./useLocale-Dwzm1w12.js";import{R as Bt,a as kt}from"./ExclamationCircleFilled-Dk5DvsjU.js";const je=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Fe=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",de=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Fe(n.overflowY,t)||Fe(n.overflowX,t)||(r=>{const o=(s=>{if(!s.ownerDocument||!s.ownerDocument.defaultView)return null;try{return s.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},fe=(e,t,n,r,o,s,a,i)=>s<e&&a>t||s>e&&a<t?0:s<=e&&i<=n||a>=t&&i>=n?s-e-r:a>t&&i<n||s<e&&i>n?a-t+o:0,Xt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Ne=(e,t)=>{var n,r,o,s;if(typeof document>"u")return[];const{scrollMode:a,block:i,inline:c,boundary:d,skipOverflowHiddenElements:y}=t,$=typeof d=="function"?d:A=>A!==d;if(!je(e))throw new TypeError("Invalid target");const E=document.scrollingElement||document.documentElement,R=[];let v=e;for(;je(v)&&$(v);){if(v=Xt(v),v===E){R.push(v);break}v!=null&&v===document.body&&de(v)&&!de(document.documentElement)||v!=null&&de(v,y)&&R.push(v)}const S=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,I=(s=(o=window.visualViewport)==null?void 0:o.height)!=null?s:innerHeight,{scrollX:m,scrollY:N}=window,{height:u,width:h,top:p,right:b,bottom:_,left:w}=e.getBoundingClientRect(),{top:x,right:g,bottom:P,left:W}=(A=>{const f=window.getComputedStyle(A);return{top:parseFloat(f.scrollMarginTop)||0,right:parseFloat(f.scrollMarginRight)||0,bottom:parseFloat(f.scrollMarginBottom)||0,left:parseFloat(f.scrollMarginLeft)||0}})(e);let j=i==="start"||i==="nearest"?p-x:i==="end"?_+P:p+u/2-x+P,O=c==="center"?w+h/2-W+g:c==="end"?b+g:w-W;const L=[];for(let A=0;A<R.length;A++){const f=R[A],{height:T,width:M,top:D,right:z,bottom:B,left:Y}=f.getBoundingClientRect();if(a==="if-needed"&&p>=0&&w>=0&&_<=I&&b<=S&&(f===E&&!de(f)||p>=D&&_<=B&&w>=Y&&b<=z))return L;const te=getComputedStyle(f),J=parseInt(te.borderLeftWidth,10),k=parseInt(te.borderTopWidth,10),C=parseInt(te.borderRightWidth,10),V=parseInt(te.borderBottomWidth,10);let F=0,q=0;const X="offsetWidth"in f?f.offsetWidth-f.clientWidth-J-C:0,Q="offsetHeight"in f?f.offsetHeight-f.clientHeight-k-V:0,oe="offsetWidth"in f?f.offsetWidth===0?0:M/f.offsetWidth:0,ne="offsetHeight"in f?f.offsetHeight===0?0:T/f.offsetHeight:0;if(E===f)F=i==="start"?j:i==="end"?j-I:i==="nearest"?fe(N,N+I,I,k,V,N+j,N+j+u,u):j-I/2,q=c==="start"?O:c==="center"?O-S/2:c==="end"?O-S:fe(m,m+S,S,J,C,m+O,m+O+h,h),F=Math.max(0,F+N),q=Math.max(0,q+m);else{F=i==="start"?j-D-k:i==="end"?j-B+V+Q:i==="nearest"?fe(D,B,T,k,V+Q,j,j+u,u):j-(D+T/2)+Q/2,q=c==="start"?O-Y-J:c==="center"?O-(Y+M/2)+X/2:c==="end"?O-z+C+X:fe(Y,z,M,J,C+X,O,O+h,h);const{scrollLeft:H,scrollTop:Z}=f;F=ne===0?0:Math.max(0,Math.min(Z+F/ne,f.scrollHeight-T/ne+Q)),q=oe===0?0:Math.max(0,Math.min(H+q/oe,f.scrollWidth-M/oe+X)),j+=Z-F,O+=H-q}L.push({el:f,top:F,left:q})}return L},Gt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Kt(e,t){if(!e.isConnected||!(o=>{let s=o;for(;s&&s.parentNode;){if(s.parentNode===document)return!0;s=s.parentNode instanceof ShadowRoot?s.parentNode.host:s.parentNode}return!1})(e))return;const n=(o=>{const s=window.getComputedStyle(o);return{top:parseFloat(s.scrollMarginTop)||0,right:parseFloat(s.scrollMarginRight)||0,bottom:parseFloat(s.scrollMarginBottom)||0,left:parseFloat(s.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Ne(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:s,left:a}of Ne(e,Gt(t))){const i=s-n.top+n.bottom,c=a-n.left+n.right;o.scroll({top:i,left:c,behavior:r})}}const ie=["xxl","xl","lg","md","sm","xs"],Ut=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Yt=e=>{const t=e,n=[].concat(ie).reverse();return n.forEach((r,o)=>{const s=r.toUpperCase(),a=`screen${s}Min`,i=`screen${s}`;if(!(t[a]<=t[i]))throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);if(o<n.length-1){const c=`screen${s}Max`;if(!(t[i]<=t[c]))throw new Error(`${i}<=${c} fails : !(${t[i]}<=${t[c]})`);const y=`screen${n[o+1].toUpperCase()}Min`;if(!(t[c]<=t[y]))throw new Error(`${c}<=${y} fails : !(${t[c]}<=${t[y]})`)}}),e};function Jt(){const[,e]=rt(),t=Ut(Yt(e));return ot.useMemo(()=>{const n=new Map;let r=-1,o={};return{matchHandlers:{},dispatch(s){return o=s,n.forEach(a=>a(o)),n.size>=1},subscribe(s){return n.size||this.register(),r+=1,n.set(r,s),s(o),r},unsubscribe(s){n.delete(s),n.size||this.unregister()},unregister(){Object.keys(t).forEach(s=>{const a=t[s],i=this.matchHandlers[a];i==null||i.mql.removeListener(i==null?void 0:i.listener)}),n.clear()},register(){Object.keys(t).forEach(s=>{const a=t[s],i=d=>{let{matches:y}=d;this.dispatch(Object.assign(Object.assign({},o),{[s]:y}))},c=window.matchMedia(a);c.addListener(i),this.matchHandlers[a]={mql:c,listener:i},i(c)})},responsiveMap:t}},[e])}const ke=l.createContext({});var Qt=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Pe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const Zt=["xs","sm","md","lg","xl","xxl"],Xe=l.forwardRef((e,t)=>{const{getPrefixCls:n,direction:r}=l.useContext(ce),{gutter:o,wrap:s}=l.useContext(ke),{prefixCls:a,span:i,order:c,offset:d,push:y,pull:$,className:E,children:R,flex:v,style:S}=e,I=Qt(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),m=n("col",a),[N,u,h]=Wt(m),p={};let b={};Zt.forEach(x=>{let g={};const P=e[x];typeof P=="number"?g.span=P:typeof P=="object"&&(g=P||{}),delete I[x],b=Object.assign(Object.assign({},b),{[`${m}-${x}-${g.span}`]:g.span!==void 0,[`${m}-${x}-order-${g.order}`]:g.order||g.order===0,[`${m}-${x}-offset-${g.offset}`]:g.offset||g.offset===0,[`${m}-${x}-push-${g.push}`]:g.push||g.push===0,[`${m}-${x}-pull-${g.pull}`]:g.pull||g.pull===0,[`${m}-rtl`]:r==="rtl"}),g.flex&&(b[`${m}-${x}-flex`]=!0,p[`--${m}-${x}-flex`]=Pe(g.flex))});const _=U(m,{[`${m}-${i}`]:i!==void 0,[`${m}-order-${c}`]:c,[`${m}-offset-${d}`]:d,[`${m}-push-${y}`]:y,[`${m}-pull-${$}`]:$},E,b,u,h),w={};if(o&&o[0]>0){const x=o[0]/2;w.paddingLeft=x,w.paddingRight=x}return v&&(w.flex=Pe(v),s===!1&&!w.minWidth&&(w.minWidth=0)),N(l.createElement("div",Object.assign({},I,{style:Object.assign(Object.assign(Object.assign({},w),S),p),className:_,ref:t}),R))});var en=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Re(e,t){const[n,r]=l.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&r(e),typeof e=="object")for(let s=0;s<ie.length;s++){const a=ie[s];if(!t[a])continue;const i=e[a];if(i!==void 0){r(i);return}}};return l.useEffect(()=>{o()},[JSON.stringify(e),t]),n}const tn=l.forwardRef((e,t)=>{const{prefixCls:n,justify:r,align:o,className:s,style:a,children:i,gutter:c=0,wrap:d}=e,y=en(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:$,direction:E}=l.useContext(ce),[R,v]=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[S,I]=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),m=Re(o,S),N=Re(r,S),u=l.useRef(c),h=Jt();l.useEffect(()=>{const f=h.subscribe(T=>{I(T);const M=u.current||0;(!Array.isArray(M)&&typeof M=="object"||Array.isArray(M)&&(typeof M[0]=="object"||typeof M[1]=="object"))&&v(T)});return()=>h.unsubscribe(f)},[]);const p=()=>{const f=[void 0,void 0];return(Array.isArray(c)?c:[c,void 0]).forEach((M,D)=>{if(typeof M=="object")for(let z=0;z<ie.length;z++){const B=ie[z];if(R[B]&&M[B]!==void 0){f[D]=M[B];break}}else f[D]=M}),f},b=$("row",n),[_,w,x]=At(b),g=p(),P=U(b,{[`${b}-no-wrap`]:d===!1,[`${b}-${N}`]:N,[`${b}-${m}`]:m,[`${b}-rtl`]:E==="rtl"},s,w,x),W={},j=g[0]!=null&&g[0]>0?g[0]/-2:void 0;j&&(W.marginLeft=j,W.marginRight=j);const[O,L]=g;W.rowGap=L;const A=l.useMemo(()=>({gutter:[O,L],wrap:d}),[O,L,d]);return _(l.createElement(ke.Provider,{value:A},l.createElement("div",Object.assign({},y,{className:P,style:Object.assign(Object.assign({},W),a),ref:t}),i)))});function pe(e){const[t,n]=l.useState(e);return l.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}const nn=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},rn=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${ee(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),_e=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},on=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},We(e)),rn(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},_e(e,e.controlHeightSM)),"&-large":Object.assign({},_e(e,e.controlHeightLG))})}},ln=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,antCls:s,labelRequiredMarkColor:a,labelColor:i,labelFontSize:c,labelHeight:d,labelColonMarginInlineStart:y,labelColonMarginInlineEnd:$,itemMarginBottom:E}=e;return{[t]:Object.assign(Object.assign({},We(e)),{marginBottom:E,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${s}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:d,color:i,fontSize:c,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:y,marginInlineEnd:$},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Be,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ve=(e,t)=>{const{formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},sn=e=>{const{componentCls:t,formItemCls:n,inlineItemMarginBottom:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:r,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},K=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Ge=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:K(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},an=e=>{const{componentCls:t,formItemCls:n,antCls:r}=e;return{[`${t}-vertical`]:{[`${n}:not(${n}-horizontal)`]:{[`${n}-row`]:{flexDirection:"column"},[`${n}-label > label`]:{height:"auto"},[`${n}-control`]:{width:"100%"},[`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenXSMax)})`]:[Ge(e),{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-xs-24${n}-label`]:K(e)}}}],[`@media (max-width: ${ee(e.screenSMMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-sm-24${n}-label`]:K(e)}}},[`@media (max-width: ${ee(e.screenMDMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-md-24${n}-label`]:K(e)}}},[`@media (max-width: ${ee(e.screenLGMax)})`]:{[t]:{[`${n}:not(${n}-horizontal)`]:{[`${r}-col-lg-24${n}-label`]:K(e)}}}}},cn=e=>{const{formItemCls:t,antCls:n}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${n}-col-24${t}-label,
      ${n}-col-xl-24${t}-label`]:K(e),[`@media (max-width: ${ee(e.screenXSMax)})`]:[Ge(e),{[t]:{[`${n}-col-xs-24${t}-label`]:K(e)}}],[`@media (max-width: ${ee(e.screenSMMax)})`]:{[t]:{[`${n}-col-sm-24${t}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenMDMax)})`]:{[t]:{[`${n}-col-md-24${t}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenLGMax)})`]:{[t]:{[`${n}-col-lg-24${t}-label`]:K(e)}}}},un=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),Ke=(e,t)=>st(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),Ce=lt("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=Ke(e,n);return[on(r),ln(r),nn(r),Ve(r,r.componentCls),Ve(r,r.formItemCls),sn(r),an(r),cn(r),Ht(r),Be]},un,{order:-1e3}),Le=[];function ye(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}const Ue=e=>{let{help:t,helpStatus:n,errors:r=Le,warnings:o=Le,className:s,fieldId:a,onVisibleChanged:i}=e;const{prefixCls:c}=l.useContext($e),d=`${c}-item-explain`,y=xe(c),[$,E,R]=Ce(c,y),v=l.useMemo(()=>Me(c),[c]),S=pe(r),I=pe(o),m=l.useMemo(()=>t!=null?[ye(t,"help",n)]:[].concat(G(S.map((h,p)=>ye(h,"error","error",p))),G(I.map((h,p)=>ye(h,"warning","warning",p)))),[t,n,S,I]),N=l.useMemo(()=>{const h={};return m.forEach(p=>{let{key:b}=p;h[b]=(h[b]||0)+1}),m.map((p,b)=>Object.assign(Object.assign({},p),{key:h[p.key]>1?`${p.key}-fallback-${b}`:p.key}))},[m]),u={};return a&&(u.id=`${a}_help`),$(l.createElement(at,{motionDeadline:v.motionDeadline,motionName:`${c}-show-help`,visible:!!N.length,onVisibleChanged:i},h=>{const{className:p,style:b}=h;return l.createElement("div",Object.assign({},u,{className:U(d,p,R,y,s,E),style:b,role:"alert"}),l.createElement(it,Object.assign({keys:N},Me(c),{motionName:`${c}-show-help-item`,component:!1}),_=>{const{key:w,error:x,errorStatus:g,className:P,style:W}=_;return l.createElement("div",{key:w,className:U(P,{[`${d}-${g}`]:g}),style:W},x)}))}))},dn=["parentNode"],fn="form_item";function ae(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ye(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:dn.includes(n)?`${fn}_${n}`:n}function Je(e,t,n,r,o,s){let a=r;return s!==void 0?a=s:n.validating?a="validating":e.length?a="error":t.length?a="warning":(n.touched||o&&n.validated)&&(a="success"),a}function Te(e){return ae(e).join("_")}function ze(e,t){const n=t.getFieldInstance(e),r=ut(n);if(r)return r;const o=Ye(ae(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function Qe(e){const[t]=ct(),n=l.useRef({}),r=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>s=>{const a=Te(o);s?n.current[a]=s:delete n.current[a]}},scrollToField:function(o){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=ze(o,r);a&&Kt(a,Object.assign({scrollMode:"if-needed",block:"nearest"},s))},focusField:o=>{var s;const a=ze(o,r);a&&((s=a.focus)===null||s===void 0||s.call(a))},getFieldInstance:o=>{const s=Te(o);return n.current[s]}}),[e,t]);return[r]}var mn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const pn=(e,t)=>{const n=l.useContext(dt),{getPrefixCls:r,direction:o,form:s}=l.useContext(ce),{prefixCls:a,className:i,rootClassName:c,size:d,disabled:y=n,form:$,colon:E,labelAlign:R,labelWrap:v,labelCol:S,wrapperCol:I,hideRequiredMark:m,layout:N="horizontal",scrollToFirstError:u,requiredMark:h,onFinishFailed:p,name:b,style:_,feedbackIcons:w,variant:x}=e,g=mn(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),P=ft(d),W=l.useContext(mt),j=l.useMemo(()=>h!==void 0?h:m?!1:s&&s.requiredMark!==void 0?s.requiredMark:!0,[m,h,s]),O=E??(s==null?void 0:s.colon),L=r("form",a),A=xe(L),[f,T,M]=Ce(L,A),D=U(L,`${L}-${N}`,{[`${L}-hide-required-mark`]:j===!1,[`${L}-rtl`]:o==="rtl",[`${L}-${P}`]:P},M,A,T,s==null?void 0:s.className,i,c),[z]=Qe($),{__INTERNAL__:B}=z;B.name=b;const Y=l.useMemo(()=>({name:b,labelAlign:R,labelCol:S,labelWrap:v,wrapperCol:I,vertical:N==="vertical",colon:O,requiredMark:j,itemRef:B.itemRef,form:z,feedbackIcons:w}),[b,R,S,I,N,O,j,z,w]),te=l.useRef(null);l.useImperativeHandle(t,()=>{var C;return Object.assign(Object.assign({},z),{nativeElement:(C=te.current)===null||C===void 0?void 0:C.nativeElement})});const J=(C,V)=>{if(C){let F={block:"nearest"};typeof C=="object"&&(F=Object.assign(Object.assign({},F),C)),z.scrollToField(V,F),F.focus&&z.focusField(V)}},k=C=>{if(p==null||p(C),C.errorFields.length){const V=C.errorFields[0].name;if(u!==void 0){J(u,V);return}s&&s.scrollToFirstError!==void 0&&J(s.scrollToFirstError,V)}};return f(l.createElement(pt.Provider,{value:x},l.createElement(gt,{disabled:y},l.createElement(ht.Provider,{value:P},l.createElement(Ae,{validateMessages:W},l.createElement(re.Provider,{value:Y},l.createElement(bt,Object.assign({id:b},g,{name:b,onFinishFailed:k,form:z,ref:te,style:Object.assign(Object.assign({},s==null?void 0:s.style),_),className:D}))))))))},gn=l.forwardRef(pn);function hn(e){if(typeof e=="function")return e;const t=yt(e);return t.length<=1?t[0]:t}const Ze=()=>{const{status:e,errors:t=[],warnings:n=[]}=l.useContext(me);return{status:e,errors:t,warnings:n}};Ze.Context=me;function bn(e){const[t,n]=l.useState(e),r=l.useRef(null),o=l.useRef([]),s=l.useRef(!1);l.useEffect(()=>(s.current=!1,()=>{s.current=!0,Ee.cancel(r.current),r.current=null}),[]);function a(i){s.current||(r.current===null&&(o.current=[],r.current=Ee(()=>{r.current=null,n(c=>{let d=c;return o.current.forEach(y=>{d=y(d)}),d})})),o.current.push(i))}return[t,a]}function yn(){const{itemRef:e}=l.useContext(re),t=l.useRef({});function n(r,o){const s=o&&typeof o=="object"&&$t(o),a=r.join("_");return(t.current.name!==a||t.current.originRef!==s)&&(t.current.name=a,t.current.originRef=s,t.current.ref=xt(e(r),s)),t.current.ref}return n}const $n=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},xn=Ct(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=Ke(e,n);return[$n(r)]});var Cn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const wn=24,vn=e=>{const{prefixCls:t,status:n,labelCol:r,wrapperCol:o,children:s,errors:a,warnings:i,_internalItemRender:c,extra:d,help:y,fieldId:$,marginBottom:E,onErrorVisibleChanged:R,label:v}=e,S=`${t}-item`,I=l.useContext(re),m=l.useMemo(()=>{let O=Object.assign({},o||I.wrapperCol||{});return v===null&&!r&&!o&&I.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(A=>{const f=A?[A]:[],T=Ie(I.labelCol,f),M=typeof T=="object"?T:{},D=Ie(O,f),z=typeof D=="object"?D:{};"span"in M&&!("offset"in z)&&M.span<wn&&(O=wt(O,[].concat(f,["offset"]),M.span))}),O},[o,I]),N=U(`${S}-control`,m.className),u=l.useMemo(()=>Cn(I,["labelCol","wrapperCol"]),[I]),h=l.useRef(null),[p,b]=l.useState(0);qe(()=>{d&&h.current?b(h.current.clientHeight):b(0)},[d]);const _=l.createElement("div",{className:`${S}-control-input`},l.createElement("div",{className:`${S}-control-input-content`},s)),w=l.useMemo(()=>({prefixCls:t,status:n}),[t,n]),x=E!==null||a.length||i.length?l.createElement($e.Provider,{value:w},l.createElement(Ue,{fieldId:$,errors:a,warnings:i,help:y,helpStatus:n,className:`${S}-explain-connected`,onVisibleChanged:R})):null,g={};$&&(g.id=`${$}_extra`);const P=d?l.createElement("div",Object.assign({},g,{className:`${S}-extra`,ref:h}),d):null,W=x||P?l.createElement("div",{className:`${S}-additional`,style:E?{minHeight:E+p}:{}},x,P):null,j=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:_,errorList:x,extra:P}):l.createElement(l.Fragment,null,_,W);return l.createElement(re.Provider,{value:u},l.createElement(Xe,Object.assign({},m,{className:N}),j),l.createElement(xn,{prefixCls:t}))};var Sn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},On=function(t,n){return l.createElement(vt,St({},t,{ref:n,icon:Sn}))},En=l.forwardRef(On),In=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Mn(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const jn=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:s,colon:a,required:i,requiredMark:c,tooltip:d,vertical:y}=e;var $;const[E]=Dt("Form"),{labelAlign:R,labelCol:v,labelWrap:S,colon:I}=l.useContext(re);if(!n)return null;const m=o||v||{},N=s||R,u=`${t}-item-label`,h=U(u,N==="left"&&`${u}-left`,m.className,{[`${u}-wrap`]:!!S});let p=n;const b=a===!0||I!==!1&&a!==!1;b&&!y&&typeof n=="string"&&n.trim()&&(p=n.replace(/[:|：]\s*$/,""));const w=Mn(d);if(w){const{icon:W=l.createElement(En,null)}=w,j=In(w,["icon"]),O=l.createElement(qt,Object.assign({},j),l.cloneElement(W,{className:`${t}-item-tooltip`,title:"",onClick:L=>{L.preventDefault()},tabIndex:null}));p=l.createElement(l.Fragment,null,p,O)}const x=c==="optional",g=typeof c=="function";g?p=c(p,{required:!!i}):x&&!i&&(p=l.createElement(l.Fragment,null,p,l.createElement("span",{className:`${t}-item-optional`,title:""},(E==null?void 0:E.optional)||(($=Ot.Form)===null||$===void 0?void 0:$.optional))));const P=U({[`${t}-item-required`]:i,[`${t}-item-required-mark-optional`]:x||g,[`${t}-item-no-colon`]:!b});return l.createElement(Xe,Object.assign({},m,{className:h}),l.createElement("label",{htmlFor:r,className:P,title:typeof n=="string"?n:""},p))},Fn={success:Bt,warning:kt,error:Et,validating:It};function et(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:s,prefixCls:a,meta:i,noStyle:c}=e;const d=`${a}-item`,{feedbackIcons:y}=l.useContext(re),$=Je(n,r,i,null,!!o,s),{isFormItemInput:E,status:R,hasFeedback:v,feedbackIcon:S}=l.useContext(me),I=l.useMemo(()=>{var m;let N;if(o){const h=o!==!0&&o.icons||y,p=$&&((m=h==null?void 0:h({status:$,errors:n,warnings:r}))===null||m===void 0?void 0:m[$]),b=$&&Fn[$];N=p!==!1&&b?l.createElement("span",{className:U(`${d}-feedback-icon`,`${d}-feedback-icon-${$}`)},p||l.createElement(b,null)):null}const u={status:$||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:N,isFormItemInput:!0};return c&&(u.status=($??R)||"",u.isFormItemInput=E,u.hasFeedback=!!(o??v),u.feedbackIcon=o!==void 0?u.feedbackIcon:S),u},[$,o,c,E,R]);return l.createElement(me.Provider,{value:I},t)}var Nn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Pn(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:s,errors:a,warnings:i,validateStatus:c,meta:d,hasFeedback:y,hidden:$,children:E,fieldId:R,required:v,isRequired:S,onSubItemMetaChange:I,layout:m}=e,N=Nn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),u=`${t}-item`,{requiredMark:h,vertical:p}=l.useContext(re),b=p||m==="vertical",_=l.useRef(null),w=pe(a),x=pe(i),g=s!=null,P=!!(g||a.length||i.length),W=!!_.current&&Mt(_.current),[j,O]=l.useState(null);qe(()=>{if(P&&_.current){const M=getComputedStyle(_.current);O(parseInt(M.marginBottom,10))}},[P,W]);const L=M=>{M||O(null)},f=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const D=M?w:d.errors,z=M?x:d.warnings;return Je(D,z,d,"",!!y,c)}(),T=U(u,n,r,{[`${u}-with-help`]:g||w.length||x.length,[`${u}-has-feedback`]:f&&y,[`${u}-has-success`]:f==="success",[`${u}-has-warning`]:f==="warning",[`${u}-has-error`]:f==="error",[`${u}-is-validating`]:f==="validating",[`${u}-hidden`]:$,[`${u}-${m}`]:m});return l.createElement("div",{className:T,style:o,ref:_},l.createElement(tn,Object.assign({className:`${u}-row`},jt(N,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(jn,Object.assign({htmlFor:R},e,{requiredMark:h,required:v??S,prefixCls:t,vertical:b})),l.createElement(vn,Object.assign({},e,d,{errors:w,warnings:x,prefixCls:t,status:f,help:s,marginBottom:j,onErrorVisibleChanged:L}),l.createElement(De.Provider,{value:I},l.createElement(et,{prefixCls:t,meta:d,errors:d.errors,warnings:d.warnings,hasFeedback:y,validateStatus:f},E)))),!!j&&l.createElement("div",{className:`${u}-margin-offset`,style:{marginBottom:-j}}))}const Rn="__SPLIT__";function _n(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(o=>{const s=e[o],a=t[o];return s===a||typeof s=="function"||typeof a=="function"})}const Vn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>_n(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function He(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Ln(e){const{name:t,noStyle:n,className:r,dependencies:o,prefixCls:s,shouldUpdate:a,rules:i,children:c,required:d,label:y,messageVariables:$,trigger:E="onChange",validateTrigger:R,hidden:v,help:S,layout:I}=e,{getPrefixCls:m}=l.useContext(ce),{name:N}=l.useContext(re),u=hn(c),h=typeof u=="function",p=l.useContext(De),{validateTrigger:b}=l.useContext(Ft),_=R!==void 0?R:b,w=t!=null,x=m("form",s),g=xe(x),[P,W,j]=Ce(x,g);Lt();const O=l.useContext(Nt),L=l.useRef(null),[A,f]=bn({}),[T,M]=Pt(()=>He()),D=C=>{const V=O==null?void 0:O.getKey(C.name);if(M(C.destroy?He():C,!0),n&&S!==!1&&p){let F=C.name;if(C.destroy)F=L.current||F;else if(V!==void 0){const[q,X]=V;F=[q].concat(G(X)),L.current=F}p(C,F)}},z=(C,V)=>{f(F=>{const q=Object.assign({},F),Q=[].concat(G(C.name.slice(0,-1)),G(V)).join(Rn);return C.destroy?delete q[Q]:q[Q]=C,q})},[B,Y]=l.useMemo(()=>{const C=G(T.errors),V=G(T.warnings);return Object.values(A).forEach(F=>{C.push.apply(C,G(F.errors||[])),V.push.apply(V,G(F.warnings||[]))}),[C,V]},[A,T.errors,T.warnings]),te=yn();function J(C,V,F){return n&&!v?l.createElement(et,{prefixCls:x,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:T,errors:B,warnings:Y,noStyle:!0},C):l.createElement(Pn,Object.assign({key:"row"},e,{className:U(r,j,g,W),prefixCls:x,fieldId:V,isRequired:F,errors:B,warnings:Y,meta:T,onSubItemMetaChange:z,layout:I}),C)}if(!w&&!h&&!o)return P(J(u));let k={};return typeof y=="string"?k.label=y:t&&(k.label=String(t)),$&&(k=Object.assign(Object.assign({},k),$)),P(l.createElement(Rt,Object.assign({},e,{messageVariables:k,trigger:E,validateTrigger:_,onMetaChange:D}),(C,V,F)=>{const q=ae(t).length&&V?V.name:[],X=Ye(q,N),Q=d!==void 0?d:!!(i!=null&&i.some(H=>{if(H&&typeof H=="object"&&H.required&&!H.warningOnly)return!0;if(typeof H=="function"){const Z=H(F);return(Z==null?void 0:Z.required)&&!(Z!=null&&Z.warningOnly)}return!1})),oe=Object.assign({},C);let ne=null;if(Array.isArray(u)&&w)ne=u;else if(!(h&&(!(a||o)||w))){if(!(o&&!h&&!w))if(l.isValidElement(u)){const H=Object.assign(Object.assign({},u.props),oe);if(H.id||(H.id=X),S||B.length>0||Y.length>0||e.extra){const se=[];(S||B.length>0)&&se.push(`${X}_help`),e.extra&&se.push(`${X}_extra`),H["aria-describedby"]=se.join(" ")}B.length>0&&(H["aria-invalid"]="true"),Q&&(H["aria-required"]="true"),_t(u)&&(H.ref=te(q,u)),new Set([].concat(G(ae(E)),G(ae(_)))).forEach(se=>{H[se]=function(){for(var we,ve,ge,Se,he,Oe=arguments.length,be=new Array(Oe),ue=0;ue<Oe;ue++)be[ue]=arguments[ue];(ge=oe[se])===null||ge===void 0||(we=ge).call.apply(we,[oe].concat(be)),(he=(Se=u.props)[se])===null||he===void 0||(ve=he).call.apply(ve,[Se].concat(be))}});const nt=[H["aria-required"],H["aria-invalid"],H["aria-describedby"]];ne=l.createElement(Vn,{control:oe,update:u,childProps:nt},Vt(u,H))}else h&&(a||o)&&!w?ne=u(F):ne=u}return J(ne,X,Q)}))}const tt=Ln;tt.useStatus=Ze;var Tn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const zn=e=>{var{prefixCls:t,children:n}=e,r=Tn(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(ce),s=o("form",t),a=l.useMemo(()=>({prefixCls:s,status:"error"}),[s]);return l.createElement(Tt,Object.assign({},r),(i,c,d)=>l.createElement($e.Provider,{value:a},n(i.map(y=>Object.assign(Object.assign({},y),{fieldKey:y.key})),c,{errors:d.errors,warnings:d.warnings})))};function Hn(){const{form:e}=l.useContext(re);return e}const le=gn;le.Item=tt;le.List=zn;le.ErrorList=Ue;le.useForm=Qe;le.useFormInstance=Hn;le.useWatch=zt;le.Provider=Ae;le.create=()=>{};export{le as F,Jt as u};
