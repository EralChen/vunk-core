import{D as r}from"./chunk-yWomF17G.js";import{d as c,r as t,p as i,al as u,o as m,c as d,a as e,t as p,b as f}from"./chunk-V5DpdfH2.js";import"./chunk-B3cmQ3xr.js";const _=e("span",null,"promise 改写 setTimeout 函数",-1),v=e("span",null,"Promise 延迟对象",-1),N=c({__name:"basic",setup(h){const a=t(""),o=t(""),l=new r;l.promise.then(s=>{o.value=s}),l.resolve("deferred"),i(async()=>{await u(400),a.value="sleep"});const n=new r;return n.promise.then(s=>{console.log(s)}),async function(){await n.promise}(),(s,w)=>(m(),d("ul",{ref:f(n).resolve},[e("li",null,[e("span",null,p(a.value)+": ",1),_]),e("li",null,[e("span",null,p(o.value)+": ",1),v])],512))}});export{N as default};
