import{r as i,H as nr,ar as bn,Q as Mn,_ as x,ak as he,a4 as kn,p as R,a9 as Sn,as as Dn,ab as Nn,aa as Ln,n as Ie,at as un,J as vn,au as ln,Z as Tn}from"./index-DB3eQjaF.js";import{P as Cn}from"./Portal-cPad4SNO.js";import{R as Pn}from"./index-CncOcDmE.js";import{u as zn}from"./useId-BBTtT7-5.js";import{i as Wn}from"./useSize-CL4N8q3x.js";const xn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function Hn(e){var a=e.prefixCls,r=e.align,t=e.arrow,u=e.arrowPos,l=t||{},v=l.className,f=l.content,m=u.x,g=m===void 0?0:m,H=u.y,h=H===void 0?0:H,C=i.useRef();if(!r||!r.points)return null;var s={position:"absolute"};if(r.autoArrow!==!1){var k=r.points[0],z=r.points[1],N=k[0],S=k[1],$=z[0],L=z[1];N===$||!["t","b"].includes(N)?s.top=h:N==="t"?s.top=0:s.bottom=0,S===L||!["l","r"].includes(S)?s.left=g:S==="l"?s.left=0:s.right=0}return i.createElement("div",{ref:C,className:nr("".concat(a,"-arrow"),v),style:s},f)}function $n(e){var a=e.prefixCls,r=e.open,t=e.zIndex,u=e.mask,l=e.motion;return u?i.createElement(bn,Mn({},l,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(v){var f=v.className;return i.createElement("div",{style:{zIndex:t},className:nr("".concat(a,"-mask"),f)})}):null}var Bn=i.memo(function(e){var a=e.children;return a},function(e,a){return a.cache}),En=i.forwardRef(function(e,a){var r=e.popup,t=e.className,u=e.prefixCls,l=e.style,v=e.target,f=e.onVisibleChanged,m=e.open,g=e.keepDom,H=e.fresh,h=e.onClick,C=e.mask,s=e.arrow,k=e.arrowPos,z=e.align,N=e.motion,S=e.maskMotion,$=e.forceRender,L=e.getPopupContainer,U=e.autoDestroy,J=e.portal,d=e.zIndex,ke=e.onMouseEnter,Se=e.onMouseLeave,me=e.onPointerEnter,De=e.onPointerDownCapture,Ee=e.ready,ge=e.offsetX,ye=e.offsetY,oe=e.offsetR,we=e.offsetB,Q=e.onAlign,be=e.onPrepare,B=e.stretch,F=e.targetWidth,c=e.targetHeight,Fe=typeof r=="function"?r():r,ee=m||g,E=(L==null?void 0:L.length)>0,y=i.useState(!L||!E),Z=x(y,2),je=Z[0],ar=Z[1];if(he(function(){!je&&E&&v&&ar(!0)},[je,E,v]),!je)return null;var ue="auto",G={left:"-1000vw",top:"-1000vh",right:ue,bottom:ue};if(Ee||!m){var Ne,Ae=z.points,I=z.dynamicInset||((Ne=z._experimental)===null||Ne===void 0?void 0:Ne.dynamicInset),le=I&&Ae[0][1]==="r",re=I&&Ae[0][0]==="b";le?(G.right=oe,G.left=ue):(G.left=ge,G.right=ue),re?(G.bottom=we,G.top=ue):(G.top=ye,G.bottom=ue)}var V={};return B&&(B.includes("height")&&c?V.height=c:B.includes("minHeight")&&c&&(V.minHeight=c),B.includes("width")&&F?V.width=F:B.includes("minWidth")&&F&&(V.minWidth=F)),m||(V.pointerEvents="none"),i.createElement(J,{open:$||ee,getContainer:L&&function(){return L(v)},autoDestroy:U},i.createElement($n,{prefixCls:u,open:m,zIndex:d,mask:C,motion:S}),i.createElement(Pn,{onResize:Q,disabled:!m},function(tr){return i.createElement(bn,Mn({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:$,leavedClassName:"".concat(u,"-hidden")},N,{onAppearPrepare:be,onEnterPrepare:be,visible:m,onVisibleChanged:function(_){var se;N==null||(se=N.onVisibleChanged)===null||se===void 0||se.call(N,_),f(_)}}),function(Le,_){var se=Le.className,qe=Le.style,j=nr(u,se,t);return i.createElement("div",{ref:kn(tr,a,_),className:j,style:R(R(R(R({"--arrow-x":"".concat(k.x||0,"px"),"--arrow-y":"".concat(k.y||0,"px")},G),V),qe),{},{boxSizing:"border-box",zIndex:d},l),onMouseEnter:ke,onMouseLeave:Se,onPointerEnter:me,onClick:h,onPointerDownCapture:De},s&&i.createElement(Hn,{prefixCls:u,arrow:s,arrowPos:k,align:z}),i.createElement(Bn,{cache:!m&&!H},Fe))})}))}),Fn=i.forwardRef(function(e,a){var r=e.children,t=e.getTriggerDOMNode,u=Sn(r),l=i.useCallback(function(f){Dn(a,t?t(f):f)},[t]),v=Nn(l,Ln(r));return u?i.cloneElement(r,{ref:v}):r}),fn=i.createContext(null);function cn(e){return e?Array.isArray(e)?e:[e]:[]}function jn(e,a,r,t){return i.useMemo(function(){var u=cn(r??a),l=cn(t??a),v=new Set(u),f=new Set(l);return e&&(v.has("hover")&&(v.delete("hover"),v.add("click")),f.has("hover")&&(f.delete("hover"),f.add("click"))),[v,f]},[e,a,r,t])}function An(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?e[0]===a[0]:e[0]===a[0]&&e[1]===a[1]}function qn(e,a,r,t){for(var u=r.points,l=Object.keys(e),v=0;v<l.length;v+=1){var f,m=l[v];if(An((f=e[m])===null||f===void 0?void 0:f.points,u,t))return"".concat(a,"-placement-").concat(m)}return""}function hn(e,a,r,t){return a||(r?{motionName:"".concat(e,"-").concat(r)}:t?{motionName:t}:null)}function mr(e){return e.ownerDocument.defaultView}function sn(e){for(var a=[],r=e==null?void 0:e.parentElement,t=["hidden","scroll","clip","auto"];r;){var u=mr(r).getComputedStyle(r),l=u.overflowX,v=u.overflowY,f=u.overflow;[l,v,f].some(function(m){return t.includes(m)})&&a.push(r),r=r.parentElement}return a}function hr(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?a:e}function cr(e){return hr(parseFloat(e),0)}function mn(e,a){var r=R({},e);return(a||[]).forEach(function(t){if(!(t instanceof HTMLBodyElement||t instanceof HTMLHtmlElement)){var u=mr(t).getComputedStyle(t),l=u.overflow,v=u.overflowClipMargin,f=u.borderTopWidth,m=u.borderBottomWidth,g=u.borderLeftWidth,H=u.borderRightWidth,h=t.getBoundingClientRect(),C=t.offsetHeight,s=t.clientHeight,k=t.offsetWidth,z=t.clientWidth,N=cr(f),S=cr(m),$=cr(g),L=cr(H),U=hr(Math.round(h.width/k*1e3)/1e3),J=hr(Math.round(h.height/C*1e3)/1e3),d=(k-z-$-L)*U,ke=(C-s-N-S)*J,Se=N*J,me=S*J,De=$*U,Ee=L*U,ge=0,ye=0;if(l==="clip"){var oe=cr(v);ge=oe*U,ye=oe*J}var we=h.x+De-ge,Q=h.y+Se-ye,be=we+h.width+2*ge-De-Ee-d,B=Q+h.height+2*ye-Se-me-ke;r.left=Math.max(r.left,we),r.top=Math.max(r.top,Q),r.right=Math.min(r.right,be),r.bottom=Math.min(r.bottom,B)}}),r}function gn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(a),t=r.match(/^(.*)\%$/);return t?e*(parseFloat(t[1])/100):parseFloat(r)}function yn(e,a){var r=a||[],t=x(r,2),u=t[0],l=t[1];return[gn(e.width,u),gn(e.height,l)]}function wn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function rr(e,a){var r=a[0],t=a[1],u,l;return r==="t"?l=e.y:r==="b"?l=e.y+e.height:l=e.y+e.height/2,t==="l"?u=e.x:t==="r"?u=e.x+e.width:u=e.x+e.width/2,{x:u,y:l}}function Be(e,a){var r={t:"b",b:"t",l:"r",r:"l"};return e.map(function(t,u){return u===a?r[t]||"c":t}).join("")}function Rn(e,a,r,t,u,l,v){var f=i.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:u[t]||{}}),m=x(f,2),g=m[0],H=m[1],h=i.useRef(0),C=i.useMemo(function(){return a?sn(a):[]},[a]),s=i.useRef({}),k=function(){s.current={}};e||k();var z=Ie(function(){if(a&&r&&e){let p=function(er,He){var $e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gr,fr=y.x+er,$r=y.y+He,nn=fr+le,an=$r+I,tn=Math.max(fr,$e.left),n=Math.max($r,$e.top),o=Math.min(nn,$e.right),P=Math.min(an,$e.bottom);return Math.max(0,(o-tn)*(P-n))},Hr=function(){Je=y.y+M,Qe=Je+I,Ce=y.x+w,Xe=Ce+le};var $,L,U,J,d=a,ke=d.ownerDocument,Se=mr(d),me=Se.getComputedStyle(d),De=me.width,Ee=me.height,ge=me.position,ye=d.style.left,oe=d.style.top,we=d.style.right,Q=d.style.bottom,be=d.style.overflow,B=R(R({},u[t]),l),F=ke.createElement("div");($=d.parentElement)===null||$===void 0||$.appendChild(F),F.style.left="".concat(d.offsetLeft,"px"),F.style.top="".concat(d.offsetTop,"px"),F.style.position=ge,F.style.height="".concat(d.offsetHeight,"px"),F.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto",d.style.overflow="hidden";var c;if(Array.isArray(r))c={x:r[0],y:r[1],width:0,height:0};else{var Fe,ee,E=r.getBoundingClientRect();E.x=(Fe=E.x)!==null&&Fe!==void 0?Fe:E.left,E.y=(ee=E.y)!==null&&ee!==void 0?ee:E.top,c={x:E.x,y:E.y,width:E.width,height:E.height}}var y=d.getBoundingClientRect();y.x=(L=y.x)!==null&&L!==void 0?L:y.left,y.y=(U=y.y)!==null&&U!==void 0?U:y.top;var Z=ke.documentElement,je=Z.clientWidth,ar=Z.clientHeight,ue=Z.scrollWidth,G=Z.scrollHeight,Ne=Z.scrollTop,Ae=Z.scrollLeft,I=y.height,le=y.width,re=c.height,V=c.width,tr={left:0,top:0,right:je,bottom:ar},Le={left:-Ae,top:-Ne,right:ue-Ae,bottom:G-Ne},_=B.htmlRegion,se="visible",qe="visibleFirst";_!=="scroll"&&_!==qe&&(_=se);var j=_===qe,Fr=mn(Le,C),b=mn(tr,C),gr=_===se?b:Fr,Re=j?b:gr;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var A=d.getBoundingClientRect();d.style.left=ye,d.style.top=oe,d.style.right=we,d.style.bottom=Q,d.style.overflow=be,(J=d.parentElement)===null||J===void 0||J.removeChild(F);var Te=hr(Math.round(le/parseFloat(De)*1e3)/1e3),Me=hr(Math.round(I/parseFloat(Ee)*1e3)/1e3);if(Te===0||Me===0||un(r)&&!Wn(r))return;var jr=B.offset,Ar=B.targetOffset,yr=yn(y,jr),ne=x(yr,2),ae=ne[0],X=ne[1],qr=yn(c,Ar),Ve=x(qr,2),Y=Ve[0],ze=Ve[1];c.x-=Y,c.y-=ze;var Rr=B.points||[],wr=x(Rr,2),Vr=wr[0],Ur=wr[1],de=wn(Ur),K=wn(Vr),ir=rr(c,de),q=rr(y,K),We=R({},B),w=ir.x-q.x+ae,M=ir.y-q.y+X,te=p(w,M),Ue=p(w,M,b),or=rr(c,["t","l"]),O=rr(y,["t","l"]),br=rr(c,["b","r"]),ur=rr(y,["b","r"]),xe=B.overflow||{},Mr=xe.adjustX,Jr=xe.adjustY,lr=xe.shiftX,_e=xe.shiftY,sr=function(He){return typeof He=="boolean"?He:He>=0},Je,Qe,Ce,Xe;Hr();var Ze=sr(Jr),Cr=K[0]===de[0];if(Ze&&K[0]==="t"&&(Qe>Re.bottom||s.current.bt)){var W=M;Cr?W-=I-re:W=or.y-ur.y-X;var Pr=p(w,W),Qr=p(w,W,b);Pr>te||Pr===te&&(!j||Qr>=Ue)?(s.current.bt=!0,M=W,X=-X,We.points=[Be(K,0),Be(de,0)]):s.current.bt=!1}if(Ze&&K[0]==="b"&&(Je<Re.top||s.current.tb)){var Ge=M;Cr?Ge+=I-re:Ge=br.y-O.y-X;var kr=p(w,Ge),Zr=p(w,Ge,b);kr>te||kr===te&&(!j||Zr>=Ue)?(s.current.tb=!0,M=Ge,X=-X,We.points=[Be(K,0),Be(de,0)]):s.current.tb=!1}var Sr=sr(Mr),Dr=K[1]===de[1];if(Sr&&K[1]==="l"&&(Xe>Re.right||s.current.rl)){var Ke=w;Dr?Ke-=le-V:Ke=or.x-ur.x-ae;var Nr=p(Ke,M),Ye=p(Ke,M,b);Nr>te||Nr===te&&(!j||Ye>=Ue)?(s.current.rl=!0,w=Ke,ae=-ae,We.points=[Be(K,1),Be(de,1)]):s.current.rl=!1}if(Sr&&K[1]==="r"&&(Ce<Re.left||s.current.lr)){var Pe=w;Dr?Pe+=le-V:Pe=br.x-O.x-ae;var Lr=p(Pe,M),Tr=p(Pe,M,b);Lr>te||Lr===te&&(!j||Tr>=Ue)?(s.current.lr=!0,w=Pe,ae=-ae,We.points=[Be(K,1),Be(de,1)]):s.current.lr=!1}Hr();var ve=lr===!0?0:lr;typeof ve=="number"&&(Ce<b.left&&(w-=Ce-b.left-ae,c.x+V<b.left+ve&&(w+=c.x-b.left+V-ve)),Xe>b.right&&(w-=Xe-b.right-ae,c.x>b.right-ve&&(w+=c.x-b.right+ve)));var ie=_e===!0?0:_e;typeof ie=="number"&&(Je<b.top&&(M-=Je-b.top-X,c.y+re<b.top+ie&&(M+=c.y-b.top+re-ie)),Qe>b.bottom&&(M-=Qe-b.bottom-X,c.y>b.bottom-ie&&(M+=c.y-b.bottom+ie)));var Oe=y.x+w,pe=Oe+le,fe=y.y+M,Gr=fe+I,zr=c.x,Kr=zr+V,dr=c.y,Ir=dr+re,_r=Math.max(Oe,zr),Xr=Math.min(pe,Kr),Wr=(_r+Xr)/2,Yr=Wr-Oe,Or=Math.max(fe,dr),xr=Math.min(Gr,Ir),pr=(Or+xr)/2,en=pr-fe;v==null||v(a,We);var vr=A.right-y.x-(w+y.width),ce=A.bottom-y.y-(M+y.height);Te===1&&(w=Math.round(w),vr=Math.round(vr)),Me===1&&(M=Math.round(M),ce=Math.round(ce));var rn={ready:!0,offsetX:w/Te,offsetY:M/Me,offsetR:vr/Te,offsetB:ce/Me,arrowX:Yr/Te,arrowY:en/Me,scaleX:Te,scaleY:Me,align:We};H(rn)}}),N=function(){h.current+=1;var L=h.current;Promise.resolve().then(function(){h.current===L&&z()})},S=function(){H(function(L){return R(R({},L),{},{ready:!1})})};return he(S,[t]),he(function(){e||S()},[e]),[g.ready,g.offsetX,g.offsetY,g.offsetR,g.offsetB,g.arrowX,g.arrowY,g.scaleX,g.scaleY,g.align,N]}function Vn(e,a,r,t,u){he(function(){if(e&&a&&r){let h=function(){t(),u()};var l=a,v=r,f=sn(l),m=sn(v),g=mr(v),H=new Set([g].concat(vn(f),vn(m)));return H.forEach(function(C){C.addEventListener("scroll",h,{passive:!0})}),g.addEventListener("resize",h,{passive:!0}),t(),function(){H.forEach(function(C){C.removeEventListener("scroll",h),g.removeEventListener("resize",h)})}}},[e,a,r])}function Un(e,a,r,t,u,l,v,f){var m=i.useRef(e);m.current=e;var g=i.useRef(!1);i.useEffect(function(){if(a&&t&&(!u||l)){var h=function(){g.current=!1},C=function(N){var S;m.current&&!v(((S=N.composedPath)===null||S===void 0||(S=S.call(N))===null||S===void 0?void 0:S[0])||N.target)&&!g.current&&f(!1)},s=mr(t);s.addEventListener("pointerdown",h,!0),s.addEventListener("mousedown",C,!0),s.addEventListener("contextmenu",C,!0);var k=ln(r);return k&&(k.addEventListener("mousedown",C,!0),k.addEventListener("contextmenu",C,!0)),function(){s.removeEventListener("pointerdown",h,!0),s.removeEventListener("mousedown",C,!0),s.removeEventListener("contextmenu",C,!0),k&&(k.removeEventListener("mousedown",C,!0),k.removeEventListener("contextmenu",C,!0))}}},[a,r,t,u,l]);function H(){g.current=!0}return H}var Jn=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Qn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cn,a=i.forwardRef(function(r,t){var u=r.prefixCls,l=u===void 0?"rc-trigger-popup":u,v=r.children,f=r.action,m=f===void 0?"hover":f,g=r.showAction,H=r.hideAction,h=r.popupVisible,C=r.defaultPopupVisible,s=r.onPopupVisibleChange,k=r.afterPopupVisibleChange,z=r.mouseEnterDelay,N=r.mouseLeaveDelay,S=N===void 0?.1:N,$=r.focusDelay,L=r.blurDelay,U=r.mask,J=r.maskClosable,d=J===void 0?!0:J,ke=r.getPopupContainer,Se=r.forceRender,me=r.autoDestroy,De=r.destroyPopupOnHide,Ee=r.popup,ge=r.popupClassName,ye=r.popupStyle,oe=r.popupPlacement,we=r.builtinPlacements,Q=we===void 0?{}:we,be=r.popupAlign,B=r.zIndex,F=r.stretch,c=r.getPopupClassNameFromAlign,Fe=r.fresh,ee=r.alignPoint,E=r.onPopupClick,y=r.onPopupAlign,Z=r.arrow,je=r.popupMotion,ar=r.maskMotion,ue=r.popupTransitionName,G=r.popupAnimation,Ne=r.maskTransitionName,Ae=r.maskAnimation,I=r.className,le=r.getTriggerDOMNode,re=Tn(r,Jn),V=me||De||!1,tr=i.useState(!1),Le=x(tr,2),_=Le[0],se=Le[1];he(function(){se(xn())},[]);var qe=i.useRef({}),j=i.useContext(fn),Fr=i.useMemo(function(){return{registerSubPopup:function(o,P){qe.current[o]=P,j==null||j.registerSubPopup(o,P)}}},[j]),b=zn(),gr=i.useState(null),Re=x(gr,2),A=Re[0],Te=Re[1],Me=i.useRef(null),jr=Ie(function(n){Me.current=n,un(n)&&A!==n&&Te(n),j==null||j.registerSubPopup(b,n)}),Ar=i.useState(null),yr=x(Ar,2),ne=yr[0],ae=yr[1],X=i.useRef(null),qr=Ie(function(n){un(n)&&ne!==n&&(ae(n),X.current=n)}),Ve=i.Children.only(v),Y=(Ve==null?void 0:Ve.props)||{},ze={},Rr=Ie(function(n){var o,P,T=ne;return(T==null?void 0:T.contains(n))||((o=ln(T))===null||o===void 0?void 0:o.host)===n||n===T||(A==null?void 0:A.contains(n))||((P=ln(A))===null||P===void 0?void 0:P.host)===n||n===A||Object.values(qe.current).some(function(D){return(D==null?void 0:D.contains(n))||n===D})}),wr=hn(l,je,G,ue),Vr=hn(l,ar,Ae,Ne),Ur=i.useState(C||!1),de=x(Ur,2),K=de[0],ir=de[1],q=h??K,We=Ie(function(n){h===void 0&&ir(n)});he(function(){ir(h||!1)},[h]);var w=i.useRef(q);w.current=q;var M=i.useRef([]);M.current=[];var te=Ie(function(n){var o;We(n),((o=M.current[M.current.length-1])!==null&&o!==void 0?o:q)!==n&&(M.current.push(n),s==null||s(n))}),Ue=i.useRef(),or=function(){clearTimeout(Ue.current)},O=function(o){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;or(),P===0?te(o):Ue.current=setTimeout(function(){te(o)},P*1e3)};i.useEffect(function(){return or},[]);var br=i.useState(!1),ur=x(br,2),xe=ur[0],Mr=ur[1];he(function(n){(!n||q)&&Mr(!0)},[q]);var Jr=i.useState(null),lr=x(Jr,2),_e=lr[0],sr=lr[1],Je=i.useState(null),Qe=x(Je,2),Ce=Qe[0],Xe=Qe[1],Ze=function(o){Xe([o.clientX,o.clientY])},Cr=Rn(q,A,ee&&Ce!==null?Ce:ne,oe,Q,be,y),W=x(Cr,11),Pr=W[0],Qr=W[1],Ge=W[2],kr=W[3],Zr=W[4],Sr=W[5],Dr=W[6],Ke=W[7],Nr=W[8],Ye=W[9],Pe=W[10],Lr=jn(_,m,g,H),Tr=x(Lr,2),ve=Tr[0],ie=Tr[1],Oe=ve.has("click"),pe=ie.has("click")||ie.has("contextMenu"),fe=Ie(function(){xe||Pe()}),Gr=function(){w.current&&ee&&pe&&O(!1)};Vn(q,ne,A,fe,Gr),he(function(){fe()},[Ce,oe]),he(function(){q&&!(Q!=null&&Q[oe])&&fe()},[JSON.stringify(be)]);var zr=i.useMemo(function(){var n=qn(Q,l,Ye,ee);return nr(n,c==null?void 0:c(Ye))},[Ye,c,Q,l,ee]);i.useImperativeHandle(t,function(){return{nativeElement:X.current,popupElement:Me.current,forceAlign:fe}});var Kr=i.useState(0),dr=x(Kr,2),Ir=dr[0],_r=dr[1],Xr=i.useState(0),Wr=x(Xr,2),Yr=Wr[0],Or=Wr[1],xr=function(){if(F&&ne){var o=ne.getBoundingClientRect();_r(o.width),Or(o.height)}},pr=function(){xr(),fe()},en=function(o){Mr(!1),Pe(),k==null||k(o)},vr=function(){return new Promise(function(o){xr(),sr(function(){return o})})};he(function(){_e&&(Pe(),_e(),sr(null))},[_e]);function ce(n,o,P,T){ze[n]=function(D){var Br;T==null||T(D),O(o,P);for(var on=arguments.length,dn=new Array(on>1?on-1:0),Er=1;Er<on;Er++)dn[Er-1]=arguments[Er];(Br=Y[n])===null||Br===void 0||Br.call.apply(Br,[Y,D].concat(dn))}}(Oe||pe)&&(ze.onClick=function(n){var o;w.current&&pe?O(!1):!w.current&&Oe&&(Ze(n),O(!0));for(var P=arguments.length,T=new Array(P>1?P-1:0),D=1;D<P;D++)T[D-1]=arguments[D];(o=Y.onClick)===null||o===void 0||o.call.apply(o,[Y,n].concat(T))});var rn=Un(q,pe,ne,A,U,d,Rr,O),p=ve.has("hover"),Hr=ie.has("hover"),er,He;p&&(ce("onMouseEnter",!0,z,function(n){Ze(n)}),ce("onPointerEnter",!0,z,function(n){Ze(n)}),er=function(o){(q||xe)&&A!==null&&A!==void 0&&A.contains(o.target)&&O(!0,z)},ee&&(ze.onMouseMove=function(n){var o;(o=Y.onMouseMove)===null||o===void 0||o.call(Y,n)})),Hr&&(ce("onMouseLeave",!1,S),ce("onPointerLeave",!1,S),He=function(){O(!1,S)}),ve.has("focus")&&ce("onFocus",!0,$),ie.has("focus")&&ce("onBlur",!1,L),ve.has("contextMenu")&&(ze.onContextMenu=function(n){var o;w.current&&ie.has("contextMenu")?O(!1):(Ze(n),O(!0)),n.preventDefault();for(var P=arguments.length,T=new Array(P>1?P-1:0),D=1;D<P;D++)T[D-1]=arguments[D];(o=Y.onContextMenu)===null||o===void 0||o.call.apply(o,[Y,n].concat(T))}),I&&(ze.className=nr(Y.className,I));var $e=R(R({},Y),ze),fr={},$r=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];$r.forEach(function(n){re[n]&&(fr[n]=function(){for(var o,P=arguments.length,T=new Array(P),D=0;D<P;D++)T[D]=arguments[D];(o=$e[n])===null||o===void 0||o.call.apply(o,[$e].concat(T)),re[n].apply(re,T)})});var nn=i.cloneElement(Ve,R(R({},$e),fr)),an={x:Sr,y:Dr},tn=Z?R({},Z!==!0?Z:{}):null;return i.createElement(i.Fragment,null,i.createElement(Pn,{disabled:!q,ref:qr,onResize:pr},i.createElement(Fn,{getTriggerDOMNode:le},nn)),i.createElement(fn.Provider,{value:Fr},i.createElement(En,{portal:e,ref:jr,prefixCls:l,popup:Ee,className:nr(ge,zr),style:ye,target:ne,onMouseEnter:er,onMouseLeave:He,onPointerEnter:er,zIndex:B,open:q,keepDom:xe,fresh:Fe,onClick:E,onPointerDownCapture:rn,mask:U,motion:wr,maskMotion:Vr,onVisibleChanged:en,onPrepare:vr,forceRender:Se,autoDestroy:V,getPopupContainer:ke,align:Ye,arrow:tn,arrowPos:an,ready:Pr,offsetX:Qr,offsetY:Ge,offsetR:kr,offsetB:Zr,onAlign:fe,stretch:F,targetWidth:Ir/Ke,targetHeight:Yr/Nr})))});return a}const Xn=Qn(Cn);export{Xn as T,xn as i};
