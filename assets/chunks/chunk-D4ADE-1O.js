import{d as h,k as t,H as p,Q as _,L as m,r as g,o as v,c as y,a as r,t as V,w as n,b as a,M as l,j as i,F as j}from"./chunk-C3KEJ4OI.js";import{s as C}from"./chunk-BN5h9Q8q.js";import"./chunk-B3cmQ3xr.js";const P={source:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},x={setData:c=>c},u=h({name:"VkCheckLogicProviders",props:P,emits:x,setup(c,{emit:s,slots:k}){const d=(e,o)=>t(m,p({key:e.id},_(e,{excludes:["id"]}),{modelValue:c.data[e.id],"onUpdate:modelValue":f=>{s("setData",{k:e.id,v:f})},provideKey:e.provideKey||e.id}),{default:o});return()=>{if(!c.source.length)return null;const e=o=>o>=c.source.length?k.default?.():d(c.source[o],()=>e(o+1));return e(0)}}});u.install=c=>{c.component(u.name||"VkCheckLogicProviders",u)};const D={class:"check-logic-x"},L={class:"check-logic-group"},b={class:"check-logic-x"},A=h({__name:"providers",setup(c){const s=g({check2:0,check3:0});return(k,d)=>(v(),y(j,null,[r("p",null,[r("pre",null,V(s.value),1)]),t(a(u),{data:s.value,source:[{id:"check2"},{id:"check3"}],onSetData:d[0]||(d[0]=e=>a(C)(s.value,e))},{default:n(()=>[r("div",D,[r("div",L,[t(a(l),{name:1,"inject-key":"check2"},{default:n(()=>[i(" 1 ")]),_:1}),t(a(l),{name:2,"inject-key":"check2"},{default:n(()=>[i(" 2 ")]),_:1})])]),r("div",b,[t(a(l),{class:"check-logic-3",name:3,"inject-key":"check3"},{default:n(()=>[i(" 3 ")]),_:1}),t(a(l),{class:"check-logic-4",name:4,"inject-key":"check3"},{default:n(()=>[i(" 4 ")]),_:1})])]),_:1},8,["data"])],64))}});export{A as default};
