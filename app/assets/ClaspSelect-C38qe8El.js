import{r as n,an as q,ao as z,j as d}from"./index-lkhjwX5T.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S=(...s)=>s.filter((l,r,f)=>!!l&&l.trim()!==""&&f.indexOf(l)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=n.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:f,className:k="",children:h,iconNode:w,...v},x)=>n.createElement("svg",{ref:x,...F,width:l,height:l,stroke:s,strokeWidth:f?Number(r)*24/Number(l):r,className:S("lucide",k),...v},[...w.map(([m,p])=>n.createElement(m,p)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(s,l)=>{const r=n.forwardRef(({className:f,...k},h)=>n.createElement(T,{ref:h,iconNode:l,className:S(`lucide-${O(s)}`,f),...k}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var H=q();const G=z(H);function J({value:s,onChange:l,options:r,ariaLabel:f,className:k="",id:h,disabled:w,autoFocus:v}){var $;const x=n.useId(),m=n.useRef(null),p=n.useRef(null),[i,L]=n.useState(!1),[b,g]=n.useState(0),[K,B]=n.useState({left:0,top:0,width:200,maxHeight:300}),E=n.useRef({text:"",at:0}),C=r.find(e=>e.value===s),u=()=>L(!1),j=()=>{w||(g(Math.max(0,r.findIndex(e=>e.value===s&&!e.disabled))),L(!0))},D=e=>{var o;const t=r[e];!t||t.disabled||(l(t.value),u(),(o=m.current)==null||o.focus({preventScroll:!0}))};n.useEffect(()=>{w&&u()},[w]),n.useLayoutEffect(()=>{if(!i||!m.current)return;const e=()=>{const a=m.current.getBoundingClientRect(),c=8,y=Math.min(Math.max(a.width,200),window.innerWidth-c*2),M=window.innerHeight-a.bottom-c,R=a.top-c,N=Math.min(320,r.length*38+10),A=M<Math.min(N,180)&&R>M,I=Math.min(320,Math.max(80,A?R-5:M-5));B({left:Math.max(c,Math.min(a.left,window.innerWidth-y-c)),top:A?Math.max(c,a.top-Math.min(N,I)-5):a.bottom+5,width:y,maxHeight:I})},t=a=>{var c;(!(a.target instanceof Node)||!((c=p.current)!=null&&c.contains(a.target)))&&u()};e(),window.addEventListener("resize",u),window.addEventListener("scroll",t,!0);const o=a=>{var c,y;a.target instanceof Node&&!((c=m.current)!=null&&c.contains(a.target))&&!((y=p.current)!=null&&y.contains(a.target))&&u()};return document.addEventListener("pointerdown",o,!0),()=>{window.removeEventListener("resize",u),window.removeEventListener("scroll",t,!0),document.removeEventListener("pointerdown",o,!0)}},[i,r.length]),n.useEffect(()=>{var e,t,o;i&&((o=(t=(e=p.current)==null?void 0:e.querySelector(`[data-option-index="${b}"]`))==null?void 0:t.scrollIntoView)==null||o.call(t,{block:"nearest"}))},[i,b]);const W=e=>{let t=b;for(let o=0;o<r.length;o++)if(t=(t+e+r.length)%r.length,!r[t].disabled){g(t);break}};return d.jsxs(d.Fragment,{children:[d.jsxs("button",{ref:m,id:h,type:"button",role:"combobox",className:`clasp-select ${k}`,"aria-label":f,"aria-haspopup":"listbox","aria-expanded":i,"aria-controls":i?x:void 0,"aria-activedescendant":i?`${x}-${b}`:void 0,disabled:w,autoFocus:v,onClick:()=>i?u():j(),onBlur:u,onKeyDown:e=>{if(["ArrowDown","ArrowUp","Home","End","Enter"," ","Escape"].includes(e.key)){if(e.preventDefault(),e.stopPropagation(),e.key==="Escape"){u();return}if(!i){j();return}if(e.key==="Enter"||e.key===" ")D(b);else if(e.key==="Home")g(Math.max(0,r.findIndex(t=>!t.disabled)));else if(e.key==="End"){for(let t=r.length-1;t>=0;t--)if(!r[t].disabled){g(t);break}}else W(e.key==="ArrowDown"?1:-1)}else if(e.key==="Tab")u();else if(e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey){const t=Date.now();E.current={text:(t-E.current.at<650?E.current.text:"")+e.key.toLocaleLowerCase(),at:t};const o=r.findIndex(a=>!a.disabled&&a.label.toLocaleLowerCase().startsWith(E.current.text));o>=0&&(i||j(),g(o))}},children:[d.jsx("span",{children:(C==null?void 0:C.label)??s}),d.jsx(V,{size:12})]}),i&&H.createPortal(d.jsx("div",{ref:p,id:x,role:"listbox","aria-label":f,className:"clasp-select-menu",style:K,onScroll:e=>e.stopPropagation(),onPointerDown:e=>e.preventDefault(),children:r.map((e,t)=>d.jsxs("div",{id:`${x}-${t}`,role:"option","aria-selected":e.value===s,"aria-disabled":e.disabled||void 0,"data-option-index":t,"data-value":e.value,className:`clasp-select-option${t===b?" active":""}${e.disabled?" disabled":""}`,onPointerMove:()=>{e.disabled||g(t)},onClick:()=>D(t),children:[d.jsx("span",{className:"clasp-select-check",children:e.value===s&&d.jsx(U,{size:13})}),d.jsxs("span",{className:"clasp-select-label",children:[e.label,e.description&&d.jsx("small",{children:e.description})]})]},e.value))}),(($=m.current)==null?void 0:$.closest("[data-popover-root], dialog[open]"))??document.body)]})}export{V as C,G as R,U as a,J as b,P as c,H as r};
