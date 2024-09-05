import{d as b,r as k,p as H,q as _,o as i,s as w,w as d,v as I,a as u,k as c,b as r,E as M,x as R,y as T,z as V,A as S,B as E,T as B,t as N,C as O,c as g,D as q,G as z,H as A,F as P,h as j,I as U,J as F}from"./chunk-DSDXeCVq.js";const G=typeof document<"u";class W{constructor(){this.removeHandler=null}async remove(){await this.removeHandler?.(),this.removeHandler=null}async toggle(e){this.removeHandler?this.remove():this.add(e)}async reset(e){await this.remove(),await this.add(e)}}class C extends W{static{this.timeoutIdMap=new WeakMap}copyButtonClick(e){const t=e.target;if(t.matches('div[class*="language-"] > button.copy')){const s=t.parentElement,a=t.nextElementSibling?.nextElementSibling;if(!s||!a)return;const n=/language-(shellscript|shell|bash|sh|zsh)/.test(s.className),p=[".vp-copy-ignore",".diff.remove"],h=a.cloneNode(!0);h.querySelectorAll(p.join(",")).forEach(v=>v.remove());let m=h.textContent||"";n&&(m=m.replace(/^ *(\$|>) /gm,"").trim()),K(m).then(()=>{t.classList.add("copied"),clearTimeout(C.timeoutIdMap.get(t));const v=setTimeout(()=>{t.classList.remove("copied"),t.blur(),C.timeoutIdMap.delete(t)},2e3);C.timeoutIdMap.set(t,v)})}}add(){window.addEventListener("click",this.copyButtonClick),this.removeHandler=()=>{window.removeEventListener("click",this.copyButtonClick)}}}const J=new C;function be(){G&&J.reset()}async function K(o){try{return navigator.clipboard.writeText(o)}catch{const e=document.createElement("textarea"),t=document.activeElement;e.value=o,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";const s=document.getSelection(),a=s?s.rangeCount>0&&s.getRangeAt(0):null;document.body.appendChild(e),e.select(),e.selectionStart=0,e.selectionEnd=o.length,document.execCommand("copy"),document.body.removeChild(e),a&&(s.removeAllRanges(),s.addRange(a)),t&&t.focus()}}function x(o){return typeof o=="function"?o():r(o)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function Q(o=!1,e={}){const{truthyValue:t=!0,falsyValue:s=!1}=e,a=O(o),n=k(o);function p(h){if(arguments.length)return n.value=h,n.value;{const m=x(t);return n.value=n.value===m?x(s):m,n.value}}return a?p:[n,p]}/*! Element Plus Icons Vue v2.3.1 */var X=b({name:"CaretTop",__name:"caret-top",setup(o){return(e,t)=>(i(),g("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[u("path",{fill:"currentColor",d:"M512 320 192 704h639.936z"})]))}}),Y=X,y=b({name:"VkClientOnly",setup(o,{slots:e}){const t=k(!1);return H(()=>{t.value=!0}),()=>t.value&&e.default?e.default():null}});y.__file="client-only/src/index.vue";y.install=o=>{o.component(y.name,y)};const Z={class:"vunk-shared-demo-example-showcase"};var ee=b({__name:"DemoContainerExample",props:{file:{type:String,required:!0},demo:{type:Object,required:!0}},setup(o){return(e,t)=>(i(),g("div",Z,[c(r(y),null,{default:d(()=>[o.demo?(i(),w(q(o.demo),z(A({key:0},e.$attrs)),null,16)):I("v-if",!0)]),_:1})]))}});const te={class:"vunk-shared-demo-code"},oe=["innerHTML"];var ne=b({__name:"DemoContainerCode",props:{source:{type:String,required:!0}},setup(o){const e=o,t=_(()=>decodeURIComponent(e.source));return(s,a)=>(i(),g("div",te,[u("div",{innerHTML:t.value},null,8,oe)]))}});const se={class:"vunk-shared-demo-codes"},re=["innerHTML"];var ae=b({__name:"DemoContainerCodes",props:{data:{type:Array,required:!0}},setup(o){const t=k(o.data[0].path);return(s,a)=>(i(),g("div",se,[c(r(F),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n),type:"border-card"},{default:d(()=>[(i(!0),g(P,null,j(o.data,n=>(i(),w(r(U),{key:n.path,name:n.path,label:n.path},{default:d(()=>[u("div",{innerHTML:n.source},null,8,re)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])]))}}),le=(o,e)=>{const t=o.__vccOpts||o;for(const[s,a]of e)t[s]=a;return t};const ce={},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ue=u("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414z"},null,-1),de=[ue];function pe(o,e){return i(),g("svg",ie,[...de])}var me=le(ce,[["render",pe]]);const ve={demos:{type:Object,required:!0},path:{type:String,required:!0},source:{type:String,required:!0},rawSource:{type:String,default:""},subsources:{type:String,default:"{}"},description:{type:String,default:""}},he=["innerHTML"],fe={class:"vunk-shared-demo-container"},_e={class:"vunk-shared-demo-op-btns"},ye=["aria-label"];var we=b({__name:"DemoContainer",props:ve,setup(o){const e=o,t=_(()=>e.path.split("/")[0]+"/"),s=_(()=>{const l=decodeURIComponent(e.subsources);return JSON.parse(l)}),a=_(()=>[{path:e.path.replace(t.value,""),source:decodeURIComponent(e.source)},...Object.keys(s.value).map(l=>({path:l.replace(t.value,""),source:s.value[l]}))]),[n,p]=Q(),h=k(),m=_(()=>{const l={};return Object.keys(e.demos).forEach(f=>{l[f.replace(".vue","")]=e.demos[f]}),l}),v=_(()=>({"view-source":"View source","hide-source":"Hide source","edit-in-editor":"Edit in Playground","edit-on-github":"Edit on GitHub","edit-in-codepen":"Edit in Codepen.io","copy-code":"Copy code","switch-button-option-text":"Switch to Options API","switch-button-setup-text":"Switch to Composition API","copy-success":"Copied!","copy-error":"This browser does not support automatic copy！"})),$=_(()=>decodeURIComponent(e.description)),L=l=>{["Enter","Space"].includes(l.code)&&(l.preventDefault(),p(!1),h.value?.focus())};return(l,f)=>(i(),w(r(y),null,{default:d(()=>[I(" danger here DO NOT USE INLINE SCRIPT TAG "),u("p",{innerHTML:$.value},null,8,he),u("div",fe,[c(ee,{file:l.path,demo:m.value[l.path]},null,8,["file","demo"]),c(r(M),{class:"m-0"}),u("div",_e,[c(r(R),{content:v.value["view-source"],"show-arrow":!1,trigger:["hover","focus"],"trigger-keys":[]},{default:d(()=>[u("button",{ref_key:"sourceCodeRef",ref:h,"aria-label":r(n)?v.value["hide-source"]:v.value["view-source"],class:"reset-btn el-icon vunk-shared-demo-op-btn",onClick:f[0]||(f[0]=D=>r(p)())},[c(r(T),{size:16},{default:d(()=>[c(me)]),_:1})],8,ye)]),_:1},8,["content"])]),c(r(V),null,{default:d(()=>[a.value.length>1?S((i(),w(ae,{key:0,data:a.value},null,8,["data"])),[[E,r(n)]]):S((i(),w(ne,{key:1,source:l.source},null,8,["source"])),[[E,r(n)]])]),_:1}),c(B,{name:"el-fade-in-linear",persisted:""},{default:d(()=>[S(u("div",{class:"vunk-shared-demo-float-control",tabindex:"0",role:"button",onClick:f[1]||(f[1]=D=>r(p)(!1)),onKeydown:L},[c(r(T),{size:16},{default:d(()=>[c(r(Y))]),_:1}),u("span",null,N(v.value["hide-source"]),1)],544),[[E,r(n)]])]),_:1})])]),_:1}))}});export{we as _,be as u};
