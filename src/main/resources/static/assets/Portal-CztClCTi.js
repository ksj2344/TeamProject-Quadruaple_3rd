import{af as q,r as u,ag as $,o as g,I as Q,a6 as _,ac as M,ah as w,a0 as z,a2 as U,N as B}from"./index-CG8vYf2y.js";const C=()=>({height:0,opacity:0}),x=e=>{const{scrollHeight:t}=e;return{height:t,opacity:1}},F=e=>({height:e?e.offsetHeight:0}),R=(e,t)=>(t==null?void 0:t.deadline)===!0||t.propertyName==="height",re=function(){return{motionName:`${arguments.length>0&&arguments[0]!==void 0?arguments[0]:q}-motion-collapse`,onAppearStart:C,onEnterStart:C,onAppearActive:x,onEnterActive:x,onLeaveStart:F,onLeaveActive:C,onAppearEnd:R,onEnterEnd:R,onLeaveEnd:R,motionDeadline:500}},oe=(e,t,n)=>n!==void 0?n:`${e}-${t}`,Y=e=>({animationDuration:e,animationFillMode:"both"}),G=e=>({animationDuration:e,animationFillMode:"both"}),ie=function(e,t,n,o){const a=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]:Object.assign(Object.assign({},Y(o)),{animationPlayState:"paused"}),[`${a}${e}-leave`]:Object.assign(Object.assign({},G(o)),{animationPlayState:"paused"}),[`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}};var k=u.createContext(null),H=[];function J(e,t){var n=u.useState(function(){if(!$())return null;var i=document.createElement("div");return i}),o=g(n,1),r=o[0],a=u.useRef(!1),l=u.useContext(k),c=u.useState(H),d=g(c,2),s=d[0],v=d[1],p=l||(a.current?void 0:function(i){v(function(m){var y=[i].concat(Q(m));return y})});function f(){r.parentElement||document.body.appendChild(r),a.current=!0}function h(){var i;(i=r.parentElement)===null||i===void 0||i.removeChild(r),a.current=!1}return _(function(){return e?l?l(f):f():h(),h},[e]),_(function(){s.length&&(s.forEach(function(i){return i()}),v(H))},[s]),[r,p]}function K(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),n=document.createElement("div");n.id=t;var o=n.style;o.position="absolute",o.left="0",o.top="0",o.width="100px",o.height="100px",o.overflow="scroll";var r,a;if(e){var l=getComputedStyle(e);o.scrollbarColor=l.scrollbarColor,o.scrollbarWidth=l.scrollbarWidth;var c=getComputedStyle(e,"::-webkit-scrollbar"),d=parseInt(c.width,10),s=parseInt(c.height,10);try{var v=d?"width: ".concat(c.width,";"):"",p=s?"height: ".concat(c.height,";"):"";M(`
#`.concat(t,`::-webkit-scrollbar {
`).concat(v,`
`).concat(p,`
}`),t)}catch(i){console.error(i),r=d,a=s}}document.body.appendChild(n);var f=e&&r&&!isNaN(r)?r:n.offsetWidth-n.clientWidth,h=e&&a&&!isNaN(a)?a:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),w(t),{width:f,height:h}}function V(e){return typeof document>"u"||!e||!(e instanceof Element)?{width:0,height:0}:K(e)}function X(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Z="rc-util-locker-".concat(Date.now()),I=0;function ee(e){var t=!!e,n=u.useState(function(){return I+=1,"".concat(Z,"_").concat(I)}),o=g(n,1),r=o[0];_(function(){if(t){var a=V(document.body).width,l=X();M(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(a,"px);"):"",`
}`),r)}else w(r);return function(){w(r)}},[t,r])}var te=!1;function ne(e){return te}var N=function(t){return t===!1?!1:!$()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},ue=u.forwardRef(function(e,t){var n=e.open,o=e.autoLock,r=e.getContainer;e.debug;var a=e.autoDestroy,l=a===void 0?!0:a,c=e.children,d=u.useState(n),s=g(d,2),v=s[0],p=s[1],f=v||n;u.useEffect(function(){(l||n)&&p(n)},[n,l]);var h=u.useState(function(){return N(r)}),i=g(h,2),m=i[0],y=i[1];u.useEffect(function(){var b=N(r);y(b??null)});var A=J(f&&!m),D=g(A,2),L=D[0],W=D[1],S=m??L;ee(o&&n&&$()&&(S===L||S===document.body));var P=null;if(c&&z(c)&&t){var O=c;P=O.ref}var T=U(P,t);if(!f||!$()||m===void 0)return null;var j=S===!1||ne(),E=c;return t&&(E=u.cloneElement(c,{ref:T})),u.createElement(k.Provider,{value:W},j?E:B.createPortal(E,S))});export{ue as P,re as a,oe as g,ie as i};
