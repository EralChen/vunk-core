import{d as h,r as k,p as O,q as _,o as l,s as y,w as p,v as x,a as d,k as i,x as w,y as E,T as L,t as P,z as H,E as M,A as R,B,C as j,b as N,c as f,D as q,G as z,H as A,F as U,h as F,I as G,J as K}from"./chunk-V5DpdfH2.js";const W=typeof document<"u";class J{constructor(){this.removeHandler=null}async remove(){await this.removeHandler?.(),this.removeHandler=null}async toggle(o){this.removeHandler?this.remove():this.add(o)}async reset(o){await this.remove(),await this.add(o)}}class C extends J{static{this.timeoutIdMap=new WeakMap}copyButtonClick(o){const t=o.target;if(t.matches('div[class*="language-"] > button.copy')){const e=t.parentElement,r=t.nextElementSibling?.nextElementSibling;if(!e||!r)return;const s=/language-(shellscript|shell|bash|sh|zsh)/.test(e.className),a=[".vp-copy-ignore",".diff.remove"],m=r.cloneNode(!0);m.querySelectorAll(a.join(",")).forEach(g=>g.remove());let u=m.textContent||"";s&&(u=u.replace(/^ *(\$|>) /gm,"").trim()),Q(u).then(()=>{t.classList.add("copied"),clearTimeout(C.timeoutIdMap.get(t));const g=setTimeout(()=>{t.classList.remove("copied"),t.blur(),C.timeoutIdMap.delete(t)},2e3);C.timeoutIdMap.set(t,g)})}}add(){window.addEventListener("click",this.copyButtonClick),this.removeHandler=()=>{window.removeEventListener("click",this.copyButtonClick)}}}const $=new C;function Ve(){W&&$.reset()}async function Q(n){try{return navigator.clipboard.writeText(n)}catch{const o=document.createElement("textarea"),t=document.activeElement;o.value=n,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const e=document.getSelection(),r=e?e.rangeCount>0&&e.getRangeAt(0):null;document.body.appendChild(o),o.select(),o.selectionStart=0,o.selectionEnd=n.length,document.execCommand("copy"),document.body.removeChild(o),r&&(e.removeAllRanges(),e.addRange(r)),t&&t.focus()}}function T(n){return typeof n=="function"?n():N(n)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function X(n=!1,o={}){const{truthyValue:t=!0,falsyValue:e=!1}=o,r=H(n),s=k(n);function a(m){if(arguments.length)return s.value=m,s.value;{const u=T(t);return s.value=s.value===u?T(e):u,s.value}}return r?a:[s,a]}/*! Element Plus Icons Vue v2.3.1 */var Y=h({name:"CaretTop",__name:"caret-top",setup(n){return(o,t)=>(l(),f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[d("path",{fill:"currentColor",d:"M512 320 192 704h639.936z"})]))}}),Z=Y,v=h({name:"VkClientOnly",setup(n,{slots:o}){const t=k(!1);return O(()=>{t.value=!0}),()=>t.value&&o.default?o.default():null}});v.__file="client-only/src/index.vue";v.install=n=>{n.component(v.name,v)};var ee=h({__name:"DemoContainerExample",props:{file:{type:String,required:!0},demo:{type:Object,required:!0}},setup(n,{expose:o}){o();const t={get VkClientOnly(){return v}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),b=(n,o)=>{const t=n.__vccOpts||n;for(const[e,r]of o)t[e]=r;return t};const te={class:"vunk-shared-demo-example-showcase"};function oe(n,o,t,e,r,s){return l(),f("div",te,[i(e.VkClientOnly,null,{default:p(()=>[t.demo?(l(),y(q(t.demo),z(A({key:0},n.$attrs)),null,16)):x("v-if",!0)]),_:1})])}var ne=b(ee,[["render",oe],["__file","/home/runner/work/vunk-shared/vunk-shared/packages/markdown/components/DemoContainer/src/DemoContainerExample.vue"]]),re=h({__name:"DemoContainerCode",props:{source:{type:String,required:!0}},setup(n,{expose:o}){o();const t=n,e=_(()=>decodeURIComponent(t.source)),r={props:t,decoded:e};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});const ae={class:"vunk-shared-demo-code"},se=["innerHTML"];function ie(n,o,t,e,r,s){return l(),f("div",ae,[d("div",{innerHTML:e.decoded},null,8,se)])}var le=b(re,[["render",ie],["__file","/home/runner/work/vunk-shared/vunk-shared/packages/markdown/components/DemoContainer/src/DemoContainerCode.vue"]]),ce=h({__name:"DemoContainerCodes",props:{data:{type:Array,required:!0}},setup(n,{expose:o}){o();const t=n,e=k(t.data[0].path),r={props:t,active:e,get ElTabs(){return G},get ElTabPane(){return K}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});const de={class:"vunk-shared-demo-codes"},ue=["innerHTML"];function pe(n,o,t,e,r,s){return l(),f("div",de,[i(e.ElTabs,{modelValue:e.active,"onUpdate:modelValue":o[0]||(o[0]=a=>e.active=a),type:"border-card"},{default:p(()=>[(l(!0),f(U,null,F(t.data,a=>(l(),y(e.ElTabPane,{key:a.path,name:a.path,label:a.path},{default:p(()=>[d("div",{innerHTML:a.source},null,8,ue)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])])}var me=b(ce,[["render",pe],["__file","/home/runner/work/vunk-shared/vunk-shared/packages/markdown/components/DemoContainer/src/DemoContainerCodes.vue"]]);const _e={},ve={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},fe=d("path",{fill:"currentColor",d:"m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414z"},null,-1),he=[fe];function ge(n,o){return l(),f("svg",ve,[...he])}var ye=b(_e,[["render",ge],["__file","/home/runner/work/vunk-shared/vunk-shared/packages/markdown/components/DemoContainer/src/IconCodeLine.vue"]]);const Ce={demos:{type:Object,required:!0},path:{type:String,required:!0},source:{type:String,required:!0},rawSource:{type:String,default:""},subsources:{type:String,default:"{}"},description:{type:String,default:""}};var be=h({__name:"DemoContainer",props:Ce,setup(n,{expose:o}){o();const t=n,e=_(()=>t.path.split("/")[0]+"/"),r=_(()=>{const c=decodeURIComponent(t.subsources);return JSON.parse(c)}),s=_(()=>[{path:t.path.replace(e.value,""),source:decodeURIComponent(t.source)},...Object.keys(r.value).map(c=>({path:c.replace(e.value,""),source:r.value[c]}))]),[a,m]=X(),u=k(),g=_(()=>{const c={};return Object.keys(t.demos).forEach(D=>{c[D.replace(".vue","")]=t.demos[D]}),c}),V=_(()=>({"view-source":"View source","hide-source":"Hide source","edit-in-editor":"Edit in Playground","edit-on-github":"Edit on GitHub","edit-in-codepen":"Edit in Codepen.io","copy-code":"Copy code","switch-button-option-text":"Switch to Options API","switch-button-setup-text":"Switch to Composition API","copy-success":"Copied!","copy-error":"This browser does not support automatic copy！"})),I=_(()=>decodeURIComponent(t.description)),S={props:t,prepath:e,tabsSource:r,tabsData:s,sourceVisible:a,toggleSourceVisible:m,sourceCodeRef:u,formatPathDemos:g,locale:V,decodedDescription:I,onSourceVisibleKeydown:c=>{["Enter","Space"].includes(c.code)&&(c.preventDefault(),m(!1),u.value?.focus())},get CaretTop(){return Z},DemoContainerExample:ne,DemoContainerCode:le,DemoContainerCodes:me,get VkClientOnly(){return v},get ElDivider(){return M},get ElIcon(){return R},get ElTooltip(){return B},get ElCollapseTransition(){return j},IconCodeLine:ye};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}});const ke=["innerHTML"],we={class:"vunk-shared-demo-container"},Ee={class:"vunk-shared-demo-op-btns"},Se=["aria-label"];function De(n,o,t,e,r,s){return l(),y(e.VkClientOnly,null,{default:p(()=>[x(" danger here DO NOT USE INLINE SCRIPT TAG "),d("p",{innerHTML:e.decodedDescription},null,8,ke),d("div",we,[i(e.DemoContainerExample,{file:n.path,demo:e.formatPathDemos[n.path]},null,8,["file","demo"]),i(e.ElDivider,{class:"m-0"}),d("div",Ee,[i(e.ElTooltip,{content:e.locale["view-source"],"show-arrow":!1,trigger:["hover","focus"],"trigger-keys":[]},{default:p(()=>[d("button",{ref:"sourceCodeRef","aria-label":e.sourceVisible?e.locale["hide-source"]:e.locale["view-source"],class:"reset-btn el-icon vunk-shared-demo-op-btn",onClick:o[0]||(o[0]=a=>e.toggleSourceVisible())},[i(e.ElIcon,{size:16},{default:p(()=>[i(e.IconCodeLine)]),_:1})],8,Se)]),_:1},8,["content"])]),i(e.ElCollapseTransition,null,{default:p(()=>[e.tabsData.length>1?w((l(),y(e.DemoContainerCodes,{key:0,data:e.tabsData},null,8,["data"])),[[E,e.sourceVisible]]):w((l(),y(e.DemoContainerCode,{key:1,source:n.source},null,8,["source"])),[[E,e.sourceVisible]])]),_:1}),i(L,{name:"el-fade-in-linear",persisted:""},{default:p(()=>[w(d("div",{class:"vunk-shared-demo-float-control",tabindex:"0",role:"button",onClick:o[1]||(o[1]=a=>e.toggleSourceVisible(!1)),onKeydown:e.onSourceVisibleKeydown},[i(e.ElIcon,{size:16},{default:p(()=>[i(e.CaretTop)]),_:1}),d("span",null,P(e.locale["hide-source"]),1)],544),[[E,e.sourceVisible]])]),_:1})])]),_:1})}var Ie=b(be,[["render",De],["__file","/home/runner/work/vunk-shared/vunk-shared/packages/markdown/components/DemoContainer/src/DemoContainer.vue"]]);export{Ie as D,Ve as u};