import{d as k,k as t,H as p,M as _,a7 as f,r as m,n as g,o as v,c as y,a as s,t as V,w as r,j as d,b as u,F as C}from"./chunk-DSDXeCVq.js";import{s as j}from"./chunk-BN5h9Q8q.js";import"./chunk-B3cmQ3xr.js";const P={source:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},x={setData:c=>c},i=k({name:"VkCheckRecordLogicProviders",props:P,emits:x,setup(c,{emit:o,slots:l}){const n=(e,a)=>t(f,p({key:e.id},_(e,{excludes:["id"]}),{modelValue:c.data[e.id],"onUpdate:modelValue":h=>{o("setData",{k:e.id,v:h})},provideKey:e.provideKey||e.id}),{default:a});return()=>{if(!c.source.length)return null;const e=a=>a>=c.source.length?l.default?.():n(c.source[a],()=>e(a+1));return e(0)}}});i.install=c=>{c.component(i.name||"VkCheckRecordLogicProviders",i)};const D={class:"check-logic-x"},L={class:"check-logic-group"},R={class:"check-logic-x"},w=k({__name:"providers",setup(c){const o=m({check2:{},check3:[]});return(l,n)=>{const e=g("VkCheckRecordLogic");return v(),y(C,null,[s("p",null,[s("pre",null,V(o.value),1)]),t(u(i),{data:o.value,source:[{id:"check2"},{id:"check3"}],onSetData:n[0]||(n[0]=a=>u(j)(o.value,a))},{default:r(()=>[s("div",D,[s("div",L,[t(e,{name:{id:1},"inject-key":"check2"},{default:r(()=>[d(" 1 ")]),_:1}),t(e,{name:{id:2},"inject-key":"check2"},{default:r(()=>[d(" 2 ")]),_:1})])]),s("div",R,[t(e,{class:"check-logic-3",name:{id:3},"inject-key":"check3"},{default:r(()=>[d(" 3 ")]),_:1}),t(e,{class:"check-logic-4",name:{id:4},"inject-key":"check3"},{default:r(()=>[d(" 4 ")]),_:1})])]),_:1},8,["data"])],64)}}});export{w as default};
