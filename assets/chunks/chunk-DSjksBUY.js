import{T as i}from"./chunk-Cszz-g1J.js";import{d as m,ad as u,n as g,o as p,c as S,k as l,w as d,j as s,b as a}from"./chunk-H2g-oCXM.js";import"./chunk-B3cmQ3xr.js";function _(n){const o=document.createElement("style");o.appendChild(document.createTextNode(n));const t=document.getElementsByTagName("head")[0];return t.appendChild(o),()=>{o.parentNode===t&&t.removeChild(o)}}const f={id:"loadStyleStringDemoNode"},N=m({__name:"basic",setup(n){class o extends i{color="red";get cssRule(){return`
    #loadStyleStringDemoNode{
      background: ${this.color};
    }
    `}constructor(e){super(),this.color=e}add(e){e&&(this.color=e),this.removeHandler=_(this.cssRule)}}const t=new o("red");return t.add(),u(()=>{t.remove()}),(c,e)=>{const r=g("el-button");return p(),S("div",f,[l(r,{onClick:e[0]||(e[0]=()=>a(t).toggle())},{default:d(()=>[s(" toggleLoadStyleStringDemoNodeBg ")]),_:1}),l(r,{onClick:e[1]||(e[1]=()=>a(t).reset("blue"))},{default:d(()=>[s(" blue ")]),_:1})])}}});export{N as default};
