import{d as f,R as u,X as p,n as v,o as c,s as m,w as h,Y as D,r as $,a9 as b}from"./chunk-DSDXeCVq.js";const w={effectAllowed:{type:String,default:"copyMove"},data:{type:String,default:""},custom:{type:Boolean,default:!1}},B=f({name:"VkDraggable",components:{VkWrapper:u},props:w,setup(e){function s(a){a.dataTransfer&&(a.dataTransfer.effectAllowed=e.effectAllowed,e.data&&a.dataTransfer.setData("text/plain",e.data))}return{dragstart:s}}});function V(e,s,a,o,g,l){const n=v("VkWrapper");return c(),m(n,{is:"div",show:!e.custom,draggable:"true",onDragstart:e.dragstart,class:"vkf-drag-wrapper"},{default:h(()=>[D(e.$slots,"default",{dragstart:e.dragstart})]),_:3},8,["show","onDragstart"])}const i=p(B,[["render",V]]);i.install=e=>{e.component(i.name,i)};const R={custom:{type:Boolean,default:!1},edge:{type:Number,default:10}},y={drop:e=>e},W=f({name:"VkDropable",components:{VkWrapper:u},props:R,emits:y,setup(e,{emit:s}){const a=$({"is-dragover-prev":!1,"is-dragover-next":!1,"is-dragover-left":!1,"is-dragover-right":!1,"is-hugging-bottom":!1,"is-hugging-top":!1,"is-hugging-left":!1,"is-hugging-right":!1}),o=t=>{a.value["is-hugging-bottom"]=t==="bottom",a.value["is-hugging-top"]=t==="top",a.value["is-hugging-left"]=t==="left",a.value["is-hugging-right"]=t==="right"};function g(t){if(t.preventDefault(),!t.dataTransfer)return;const r=t.currentTarget,C=r.getBoundingClientRect().top+r.offsetHeight*.5;t.pageY>=C?(a.value["is-dragover-prev"]=!1,a.value["is-dragover-next"]=!0):(a.value["is-dragover-prev"]=!0,a.value["is-dragover-next"]=!1);const k=r.getBoundingClientRect().left+r.offsetWidth*.5;t.pageX>=k?(a.value["is-dragover-left"]=!1,a.value["is-dragover-right"]=!0):(a.value["is-dragover-left"]=!0,a.value["is-dragover-right"]=!1),t.pageX<=r.getBoundingClientRect().left+e.edge?o("left"):t.pageX>=r.getBoundingClientRect().right-e.edge?o("right"):t.pageY<=r.getBoundingClientRect().top+e.edge?o("top"):t.pageY>=r.getBoundingClientRect().bottom-e.edge?o("bottom"):o()}function l(){a.value={}}function n(t){t.preventDefault(),s("drop",{event:t,dragoverClass:a.value}),a.value={}}return{dragover:g,dragleave:l,drop:n,dragoverClass:a}}});function _(e,s,a,o,g,l){const n=v("VkWrapper");return c(),m(n,{is:"div",show:!e.custom,onDragleave:e.dragleave,onDrop:e.drop,onDragover:e.dragover,class:b(["vkf-drop-wrapper",e.dragoverClass])},{default:h(()=>[D(e.$slots,"default",{dragoverClass:e.dragoverClass,drop:e.drop,dragover:e.dragover,dragleave:e.dragleave})]),_:3},8,["show","onDragleave","onDrop","onDragover","class"])}const d=p(W,[["render",_]]);d.install=e=>{e.component(d.name,d)};export{i as V,d as a};
