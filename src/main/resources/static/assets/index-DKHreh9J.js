import{u as M,C as h,G as T}from"./Checkbox-jx7-EmXH.js";import{r,y as X,E as D,H as F,J as p}from"./index-DB3eQjaF.js";import{o as L}from"./useSize-CL4N8q3x.js";var Q=function(s,u){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&u.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(s);a<t.length;a++)u.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(s,t[a])&&(c[t[a]]=s[t[a]]);return c};const U=r.forwardRef((s,u)=>{const{defaultValue:c,children:t,options:a=[],prefixCls:S,className:V,rootClassName:N,style:P,onChange:f}=s,l=Q(s,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:E,direction:_}=r.useContext(X),[i,v]=r.useState(l.value||c||[]),[k,g]=r.useState([]);r.useEffect(()=>{"value"in l&&v(l.value||[])},[l.value]);const m=r.useMemo(()=>a.map(e=>typeof e=="string"||typeof e=="number"?{label:e,value:e}:e),[a]),w=e=>{g(n=>n.filter(o=>o!==e))},j=e=>{g(n=>[].concat(p(n),[e]))},I=e=>{const n=i.indexOf(e.value),o=p(i);n===-1?o.push(e.value):o.splice(n,1),"value"in l||v(o),f==null||f(o.filter(x=>k.includes(x)).sort((x,z)=>{const J=m.findIndex(b=>b.value===x),K=m.findIndex(b=>b.value===z);return J-K}))},d=E("checkbox",S),C=`${d}-group`,y=D(d),[G,$,A]=M(d,y),q=L(l,["value","disabled"]),B=a.length?m.map(e=>r.createElement(h,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:l.disabled,value:e.value,checked:i.includes(e.value),onChange:e.onChange,className:`${C}-item`,style:e.style,title:e.title,id:e.id,required:e.required},e.label)):t,H={toggleOption:I,value:i,disabled:l.disabled,name:l.name,registerValue:j,cancelValue:w},R=F(C,{[`${C}-rtl`]:_==="rtl"},V,N,A,y,$);return G(r.createElement("div",Object.assign({className:R,style:P},q,{ref:u}),r.createElement(T.Provider,{value:H},B)))}),O=h;O.Group=U;O.__ANT_CHECKBOX=!0;export{O as C};
