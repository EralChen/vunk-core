import{d as l,a4 as o,U as c,a5 as i,a6 as r}from"./chunk-BIt-4EX2.js";const m={active:{type:Boolean,default:!1}},p={},a=l({name:"VkGlobalRendererTemplate",emits:p,props:m,setup(e,{emit:u}){const t=o("vkGlobalRendererActiveVM"),n=r();return c(()=>e.active,async s=>{s&&n?(await i(),t.value=n):t.value=null},{immediate:!0}),()=>null}});a.install=e=>{e.component(a.name,a)};export{a as _};
