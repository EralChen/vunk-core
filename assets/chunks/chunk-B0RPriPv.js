import{ad as I,d as v,o as f,c,a as b,F as y,h as x,S as D,t as O,b as m}from"./chunk-BIt-4EX2.js";import"./chunk-B3cmQ3xr.js";class w{raw=[];value=[];getValue(){return this.value}drawOptions={width:0,height:0,align:50,justify:50,levelOffset:10};valueMap=new Map;constructor(e,t){this.drawOptions=Object.assign(this.drawOptions,t),this.raw=e,this.initValue()}initValue(){this.value=I(this.raw),this.valueMap=new Map(this.value.map(e=>[e.id,e])),this.fillDrawInfoToValue()}getNodeById(e){return this.valueMap.get(e)}getNodeByIdOrFail(e){const t=this.getNodeById(e);if(!t)throw new Error(`Node with id ${e} not found`);return t}leafMaxDepth(e){const t=this.getChildren(e);return t.length===0?0:Math.max(...t.map(a=>this.leafMaxDepth(a)))+1}getChildren(e){return this.value.filter(t=>t.pid===e.id)}getDescendants(e,t){if(t===0)return[];const a=this.getChildren(e);return a.length===0?[]:a.concat(a.map(s=>this.getDescendants(s,t===void 0?void 0:t-1)).flat())}getNodeListByIds(e){return e?e.split(",").map(t=>this.getNodeByIdOrFail(t)):[]}getIdsSet(e){return e?new Set(e.split(",")):new Set}getNexts(e){return this.value.filter(t=>this.getIdsSet(t.prev).has(e.id))}getChain(e){const t=[this.getNodeByIdOrFail(e.id)];let a=this.getNodeListByIds(e.prev);for(;a.length>0;)t.unshift(...a),a=a.reduce((i,r)=>{const o=this.getNodeListByIds(r.prev);return i.concat(o)},[]);let s=this.getNexts(e);for(;s.length>0;)t.push(...s),s=s.reduce((i,r)=>{const o=this.getNexts(r);return i.concat(o)},[]);return t}fillDrawInfoToValue(){this.value.forEach(e=>{this.fillDrawInfo(e)})}fillDrawInfo(e){if(e.drawInfo)return e;e.drawInfo={x:0,y:0};const t=this.getNodeById(e.prev),a=t?this.fillDrawInfo(t):null,s=this.getNodeById(e.pid),i=s?this.fillDrawInfo(s):null;if(a){e.drawInfo.y=a.drawInfo.y,e.drawInfo.x=a.drawInfo.x+this.drawOptions.width+this.drawOptions.justify;const n=this.leafMaxDepth(e),l=this.getDescendants(a,n);if(n&&l.length){const p=l.filter(d=>!d.prev).map(d=>this.getChain(d).at(-1)).reduce((d,u)=>Math.max(d,u?this.fillDrawInfo(u).drawInfo.x:0),0);e.drawInfo.x=p+this.drawOptions.width+this.drawOptions.justify}return e}if(!i)return e.drawInfo.y=0,e.drawInfo.x=0,e;e.drawInfo.x=this.drawOptions.levelOffset+i.drawInfo.x;const r=this.value.filter(n=>n.pid===e.pid),o=r.findIndex(n=>n.id===e.id),g=r.slice(0,o).at(-1),h=g?this.fillDrawInfo(g):null;if(h){const n=this.getChain(h).map(l=>this.getDescendants(l)).flat();if(n.length){const l=n.map(p=>this.fillDrawInfo(p)).reduce((p,d)=>Math.max(p,d.drawInfo.y),0);e.drawInfo.y=l+this.drawOptions.height+this.drawOptions.align}else e.drawInfo.y=h.drawInfo.y+this.drawOptions.height+this.drawOptions.align}else e.drawInfo.y=i.drawInfo.y+this.drawOptions.height+this.drawOptions.align;return e}static fromList(e,t){return new w(e,t)}}const N=[{id:"#",label:"root",pid:"",prev:"",order:0},{id:"a",label:"a",pid:"#",prev:"",order:0},{id:"aa",label:"aa",pid:"a",prev:""},{id:"aaa",label:"aaa",pid:"aa",prev:""},{id:"ab",label:"ab",pid:"a",prev:""},{id:"a1",label:"a1",pid:"#",prev:"a",order:1},{id:"b",label:"b",pid:"#",prev:"",order:0},{id:"b1",label:"b1",pid:"#",prev:"b"},{id:"b2",label:"b2",pid:"#",prev:"b1"},{id:"c",label:"c",pid:"#",prev:""},{id:"c1",label:"c1",pid:"#",prev:"c"},{id:"c1a",label:"c1a",pid:"c1",prev:""},{id:"c1b",label:"c1b",pid:"c1",prev:""},{id:"c1a1",label:"c1a1",pid:"c1",prev:"c1a"},{id:"c1a1a",label:"c1a1a",pid:"c1a1",prev:""},{id:"c2",label:"c2",pid:"#",prev:"c1"},{id:"c2a",label:"c2a",pid:"c2",prev:""},{id:"d",label:"d",pid:"#",prev:""},{id:"d1",label:"d1",pid:"#",prev:"d"}],B={class:"draw-playground"},S={class:"draw-playground__inner"},L=v({__name:"tree",setup(_){const t=w.fromList(N).getValue();return(a,s)=>(f(),c("div",B,[b("div",S,[(f(!0),c(y,null,x(m(t),i=>(f(),c("span",{key:i.id,class:"draw-item",style:D({top:i.drawInfo.y+"px",left:i.drawInfo.x+"px"})},O(i.label),5))),128))])]))}});export{L as default};
