import{d as f,m as O,j as T,b as R,k as G,l as F,c as I,h as U,e as M,n as z,f as D,o as Y,p as q,g as J,u as W,_ as X,V as Z}from"./VContainer.20f46c42.js";import{a3 as g,m,f as h,a4 as $,p as H,n as K,q as Q,v as ee,s as d,X as C,Y as te,Z as i,a5 as ne,a6 as se,F as ae,_ as oe}from"./index.9772d8ed.js";const k=["sm","md","lg","xl","xxl"],L=(()=>k.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),N=(()=>k.reduce((e,n)=>(e["offset"+g(n)]={type:[String,Number],default:null},e),{}))(),_=(()=>k.reduce((e,n)=>(e["order"+g(n)]={type:[String,Number],default:null},e),{}))(),S={col:Object.keys(L),offset:Object.keys(N),order:Object.keys(_)};function le(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const re=["auto","start","end","center","baseline","stretch"],ce=m()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...L,offset:{type:[String,Number],default:null},...N,order:{type:[String,Number],default:null},..._,alignSelf:{type:String,default:null,validator:e=>re.includes(e)},...f()},setup(e,n){let{slots:t}=n;const a=h(()=>{const s=[];let o;for(o in S)S[o].forEach(r=>{const c=e[r],u=le(o,r,c);u&&s.push(u)});const l=s.some(r=>r.startsWith("v-col-"));return s.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return $(e.tag,{class:a.value},(s=t.default)==null?void 0:s.call(t))}}}),ue=["sm","md","lg","xl","xxl"],v=["start","end","center"],P=["space-between","space-around","space-evenly"];function y(e,n){return ue.reduce((t,a)=>(t[e+g(a)]=n(),t),{})}const ie=[...v,"baseline","stretch"],V=e=>ie.includes(e),j=y("align",()=>({type:String,default:null,validator:V})),de=[...v,...P],w=e=>de.includes(e),E=y("justify",()=>({type:String,default:null,validator:w})),fe=[...v,...P,"stretch"],x=e=>fe.includes(e),p=y("alignContent",()=>({type:String,default:null,validator:x})),b={align:Object.keys(j),justify:Object.keys(E),alignContent:Object.keys(p)},ge={align:"align",justify:"justify",alignContent:"align-content"};function me(e,n,t){let a=ge[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const ke=m()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...j,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:x},...p,...f()},setup(e,n){let{slots:t}=n;const a=h(()=>{const s=[];let o;for(o in b)b[o].forEach(l=>{const r=e[l],c=me(o,l,r);c&&s.push(c)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return $(e.tag,{class:["v-row",a.value]},(s=t.default)==null?void 0:s.call(t))}}});const ve=H({color:String,...O(),...T(),...R(),...G(),...F(),...I(),...f(),...K()},"v-sheet"),ye=m()({name:"VSheet",props:{...ve()},setup(e,n){let{slots:t}=n;const{themeClasses:a}=Q(e),{backgroundColorClasses:s,backgroundColorStyles:o}=U(ee(e,"color")),{borderClasses:l}=M(e),{dimensionStyles:r}=z(e),{elevationClasses:c}=D(e),{locationStyles:u}=Y(e),{positionClasses:B}=q(e),{roundedClasses:A}=J(e);return W(()=>d(e.tag,{class:["v-sheet",a.value,s.value,l.value,c.value,B.value,A.value],style:[o.value,r.value,u.value]},t)),{}}}),Ce={mounted(){const e=this;window.$$registerEventListener&&window.$$registerEventListener("back","id",function(n,t){console.log("back"),e.$router.back()}),console.log("the component is now mounted.")}};function Se(e,n,t,a,s,o){return C(),te(Z,{class:"bg-surface-variant"},{default:i(()=>[d(ke,{"no-gutters":""},{default:i(()=>[(C(),ne(ae,null,se(3,l=>d(ce,{key:l,cols:"12",sm:"4"},{default:i(()=>[d(ye,{class:"ma-2 pa-2"},{default:i(()=>[oe(" One of three columns ")]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})}const $e=X(Ce,[["render",Se]]);export{$e as default};
