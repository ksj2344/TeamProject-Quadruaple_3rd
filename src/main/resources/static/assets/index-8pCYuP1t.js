import{r as o,b3 as V,ad as g,aI as W,Q as K,S as U,M as j,aG as Q,Y}from"./index-Bm9G2PMV.js";function J(e,t,n){var i=n,a=i.noTrailing,c=a===void 0?!1:a,d=i.noLeading,f=d===void 0?!1:d,l=i.debounceMode,u=l===void 0?void 0:l,m,S=!1,p=0;function $(){m&&clearTimeout(m)}function E(b){var y=b||{},s=y.upcomingOnly,r=s===void 0?!1:s;$(),S=!r}function w(){for(var b=arguments.length,y=new Array(b),s=0;s<b;s++)y[s]=arguments[s];var r=this,v=Date.now()-p;if(S)return;function h(){p=Date.now(),t.apply(r,y)}function x(){m=void 0}!f&&u&&!m&&h(),$(),u===void 0&&v>e?f?(p=Date.now(),c||(m=setTimeout(u?x:h,e))):h():c!==!0&&(m=setTimeout(u?x:h,u===void 0?e-v:e))}return w.cancel=E,w}function Z(e,t,n){var i={},a=i.atBegin,c=a===void 0?!1:a;return J(e,t,{debounceMode:c!==!1})}const N=100,X=N/5,G=N/2-X/2,T=G*2*Math.PI,P=50,L=e=>{const{dotClassName:t,style:n,hasCircleCls:i}=e;return o.createElement("circle",{className:g(`${t}-circle`,{[`${t}-circle-bg`]:i}),r:G,cx:P,cy:P,strokeWidth:X,style:n})},k=e=>{let{percent:t,prefixCls:n}=e;const i=`${n}-dot`,a=`${i}-holder`,c=`${a}-hidden`,[d,f]=o.useState(!1);V(()=>{t!==0&&f(!0)},[t!==0]);const l=Math.max(Math.min(t,100),0);if(!d)return null;const u={strokeDashoffset:`${T/4}`,strokeDasharray:`${T*l/100} ${T*(100-l)/100}`};return o.createElement("span",{className:g(a,`${i}-progress`,l<=0&&c)},o.createElement("svg",{viewBox:`0 0 ${N} ${N}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":l},o.createElement(L,{dotClassName:i,hasCircleCls:!0}),o.createElement(L,{dotClassName:i,style:u})))};function ee(e){const{prefixCls:t,percent:n=0}=e,i=`${t}-dot`,a=`${i}-holder`,c=`${a}-hidden`;return o.createElement(o.Fragment,null,o.createElement("span",{className:g(a,n>0&&c)},o.createElement("span",{className:g(i,`${t}-dot-spin`)},[1,2,3,4].map(d=>o.createElement("i",{className:`${t}-dot-item`,key:d})))),o.createElement(k,{prefixCls:t,percent:n}))}function te(e){const{prefixCls:t,indicator:n,percent:i}=e,a=`${t}-dot`;return n&&o.isValidElement(n)?W(n,{className:g(n.props.className,a),percent:i}):o.createElement(ee,{prefixCls:t,percent:i})}const ne=new j("antSpinMove",{to:{opacity:1}}),ie=new j("antRotate",{to:{transform:"rotate(405deg)"}}),oe=e=>{const{componentCls:t,calc:n}=e;return{[t]:Object.assign(Object.assign({},Q(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"relative",display:"inline-block",opacity:1},[`${t}-text`]:{fontSize:e.fontSize,paddingTop:n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[t]:{[`${t}-dot-holder`]:{color:e.colorWhite},[`${t}-text`]:{color:e.colorTextLightSolid}}},"&-nested-loading":{position:"relative",[`> div > ${t}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${t}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:n(e.dotSize).mul(-1).div(2).equal()},[`${t}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${t}-dot`]:{margin:n(e.dotSizeSM).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${t}-dot`]:{margin:n(e.dotSizeLG).mul(-1).div(2).equal()},[`${t}-text`]:{paddingTop:n(n(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${t}-show-text ${t}-dot`]:{marginTop:n(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${t}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${t}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${t}-dot-holder`]:{width:"1em",height:"1em",fontSize:e.dotSize,display:"inline-block",transition:`transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,transformOrigin:"50% 50%",lineHeight:1,color:e.colorPrimary,"&-hidden":{transform:"scale(0.3)",opacity:0}},[`${t}-dot-progress`]:{position:"absolute",inset:0},[`${t}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),height:n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:ne,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:ie,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(i=>`${i} ${e.motionDurationSlow} ease`).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:e.colorFillSecondary}},[`&-sm ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeSM}},[`&-sm ${t}-dot-holder`]:{i:{width:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal(),height:n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${t}-dot`]:{"&, &-holder":{fontSize:e.dotSizeLG}},[`&-lg ${t}-dot-holder`]:{i:{width:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${t}-show-text ${t}-text`]:{display:"block"}})}},ae=e=>{const{controlHeightLG:t,controlHeight:n}=e;return{contentHeight:400,dotSize:t/2,dotSizeSM:t*.35,dotSizeLG:n}},re=K("Spin",e=>{const t=U(e,{spinDotDefault:e.colorTextDescription});return[oe(t)]},ae),se=200,q=[[30,.05],[70,.03],[96,.01]];function le(e,t){const[n,i]=o.useState(0),a=o.useRef(null),c=t==="auto";return o.useEffect(()=>(c&&e&&(i(0),a.current=setInterval(()=>{i(d=>{const f=100-d;for(let l=0;l<q.length;l+=1){const[u,m]=q[l];if(d<=u)return d+f*m}return d})},se)),()=>{clearInterval(a.current)}),[c,e]),c?n:t}var ce=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]]);return n};let B;function de(e,t){return!!e&&!!t&&!Number.isNaN(Number(t))}const ue=e=>{var t;const{prefixCls:n,spinning:i=!0,delay:a=0,className:c,rootClassName:d,size:f="default",tip:l,wrapperClassName:u,style:m,children:S,fullscreen:p=!1,indicator:$,percent:E}=e,w=ce(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen","indicator","percent"]),{getPrefixCls:b,direction:y,spin:s}=o.useContext(Y),r=b("spin",n),[v,h,x]=re(r),[C,O]=o.useState(()=>i&&!de(i,a)),_=le(C,E);o.useEffect(()=>{if(i){const z=Z(a,()=>{O(!0)});return z(),()=>{var D;(D=z==null?void 0:z.cancel)===null||D===void 0||D.call(z)}}O(!1)},[a,i]);const M=o.useMemo(()=>typeof S<"u"&&!p,[S,p]),H=g(r,s==null?void 0:s.className,{[`${r}-sm`]:f==="small",[`${r}-lg`]:f==="large",[`${r}-spinning`]:C,[`${r}-show-text`]:!!l,[`${r}-rtl`]:y==="rtl"},c,!p&&d,h,x),R=g(`${r}-container`,{[`${r}-blur`]:C}),A=(t=$??(s==null?void 0:s.indicator))!==null&&t!==void 0?t:B,F=Object.assign(Object.assign({},s==null?void 0:s.style),m),I=o.createElement("div",Object.assign({},w,{style:F,className:H,"aria-live":"polite","aria-busy":C}),o.createElement(te,{prefixCls:r,indicator:A,percent:_}),l&&(M||p)?o.createElement("div",{className:`${r}-text`},l):null);return v(M?o.createElement("div",Object.assign({},w,{className:g(`${r}-nested-loading`,u,h,x)}),C&&o.createElement("div",{key:"loading"},I),o.createElement("div",{className:R,key:"container"},S)):p?o.createElement("div",{className:g(`${r}-fullscreen`,{[`${r}-fullscreen-show`]:C},d,h,x)},I):I)};ue.setDefaultIndicator=e=>{B=e};export{ue as S};
