import{_ as u}from"./chunk-mnWAcH3M.js";import{D as c}from"./chunk-yWomF17G.js";import{T as g}from"./chunk-Cszz-g1J.js";import{d as w,p as y,W as v,n as p,o as F,c as I,k as l,w as f,b as i,j as _,t as x,Y as b,F as N}from"./chunk-DSDXeCVq.js";const C=w({__name:"renderer-item",props:{active:{type:Boolean,default:!1},label:{type:String,default:""}},setup(s){const h=s,m=new c,d=new c;return y(async()=>{const e=await m.promise,n=await d.promise;class r extends g{animationFrameId=0;add(){const t=()=>{this.render(),this.animationFrameId=window.requestAnimationFrame(t)};t(),this.removeHandler=()=>{window.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=0,this.clear()}}render(){const t=n.getBoundingClientRect();e.style.width=t.width+"px",e.style.height=t.height+"px",e.style.top=t.top+"px",e.style.left=t.left+"px"}clear(){e.style.width="",e.style.height="",e.style.top="",e.style.left=""}}const a=new r;v(()=>h.active,async o=>{o?a.add():a.remove()},{immediate:!0})}),(e,n)=>{const r=p("ElInput"),a=p("ElFormItem");return F(),I(N,null,[l(a,{label:s.label,onVnodeMounted:n[0]||(n[0]=o=>i(d).resolve(o.el))},{default:f(()=>[l(r)]),_:1},8,["label"]),l(i(u),{active:s.active},{default:f(({presetNode:o})=>[_(x(i(m).resolve(o))+" ",1),b(e.$slots,"global")]),_:3},8,["active"])],64)}}});export{C as _};