import{n as h,V as y}from"./js/vueComponentNormalizer.58b0a173.js";import{d as p,S as B}from"./js/index.693463c8.js";import{T as C}from"./js/index.49cb19d1.js";import{s as m}from"./js/index.9d9c8f08.js";import{j as L,m as D}from"./js/attachments.4aad9de1.js";import{b as M}from"./js/_baseSet.19463128.js";import{i as x}from"./js/isEqual.a6913dc6.js";import{A as k}from"./js/App.25acb46b.js";import"./js/client.d00863cc.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.01c2b898.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/portal-vue.esm.272b3133.js";import"./js/cleanForSlug.61ba6611.js";import"./js/_baseIsEqual.e22c67bc.js";import"./js/_getTag.3036b7b0.js";/* empty css                */import"./js/params.bea1a08d.js";import"./js/ToolsSettings.0bc46799.js";import"./js/Index.dbb5baac.js";import"./js/JsonValues.08065e69.js";import"./js/SettingsRow.8a127375.js";import"./js/Row.dfea53f7.js";import"./js/Checkbox.93944087.js";import"./js/Checkmark.627d69a4.js";import"./js/LicenseKeyBar.5b051ac9.js";import"./js/LogoGear.fa7af154.js";import"./js/Tabs.45cdcdd3.js";import"./js/TruSeoScore.98a47fd6.js";import"./js/Information.d80e4486.js";import"./js/Slide.8aaa5049.js";import"./js/Index.f4c9c219.js";import"./js/ProBadge.d6147ee5.js";import"./js/External.1af3387c.js";import"./js/Exclamation.c0680526.js";import"./js/Gear.21727cf4.js";import"./js/Tooltip.a1ab116b.js";import"./js/Plus.6ec3819c.js";import"./js/MaxCounts.5a7ca2fd.js";import"./js/RadioToggle.18d51233.js";import"./js/GoogleSearchPreview.519950fc.js";import"./js/HtmlTagsEditor.f068d8e9.js";import"./js/Editor.edd7582e.js";import"./js/UnfilteredHtml.5b246ff0.js";import"./js/Mobile.a4836022.js";import"./js/popup.25df8419.js";import"./js/Index.9fcac11f.js";import"./js/Table.0d145e69.js";import"./js/Blur.404d53ce.js";import"./js/Affiliate.4f7dfe83.js";import"./js/Index.30f97cc3.js";import"./js/RequiredPlans.f9027045.js";import"./js/Image.b55dd526.js";import"./js/Img.0059965b.js";import"./js/FacebookPreview.58ab6a9f.js";import"./js/dannie-profile.e0152a9f.js";import"./js/TwitterPreview.bc861c14.js";import"./js/Book.7d439a03.js";import"./js/Build.dc549300.js";import"./js/Redirects.9af9410a.js";import"./js/Card.e152dae5.js";import"./js/Datepicker.000dba29.js";import"./js/NewsChannel.e4dcf289.js";import"./js/Radio.fa2678ef.js";import"./js/Textarea.2db5f910.js";import"./js/Eye.a1ab72cf.js";function f(t,e,o){return t==null?t:M(t,e,o)}const S=t=>t.parentElement.removeChild(t),$=()=>{const t=u();document.body.classList.toggle("aioseo-settings-bar-is-active",t),document.body.classList.toggle("aioseo-settings-bar-is-inactive",!t)},q=()=>{const t=g();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),d(t)},O=()=>{c.addEventListener("change",()=>{E(),d(g())}),U.observe(document.querySelector(".et-fb-page-settings-bar"),{attributeFilter:["class"]}),document.body.addEventListener("click",P),s.addEventListener("click",()=>{const t=new Event("aioseo-divi-toggle-modal");document.dispatchEvent(t)})},A=()=>{const t=g();r(document.body,"aioseo-settings-bar-is"),document.body.classList.add(`aioseo-settings-bar-is-${t}`),$(),E(),F()||d(t)},E=()=>{!w()||(s=S(s))},d=t=>{if(w())return;const e=document.querySelector(".et-fb-page-settings-bar"),o=e.querySelector(".et-fb-page-settings-bar__toggle-button"),n=e.querySelectorAll(".et-fb-page-settings-bar__column");if(T(t),u())if(c.matches){const i=[...n].filter(l=>l.classList.contains("et-fb-page-settings-bar__column--main"));i.length&&i[0].appendChild(s)}else{const i=[...n].filter(l=>l.classList.contains("et-fb-page-settings-bar__column--left"));i.length&&i[0].insertBefore(s)}else o.insertAdjacentElement("afterend",s)},T=t=>{r(s,"aioseo-settings-bar-root"),s.classList.add(`aioseo-settings-bar-root-${t}`),r(s,"aioseo-settings-bar-root-is-mobile"),["aioseo-settings-bar-root-is-mobile",`aioseo-settings-bar-root-is-mobile-${t}`].forEach(n=>{s.classList.toggle(n,!c.matches)}),r(s,"aioseo-settings-bar-root-is-desktop"),["aioseo-settings-bar-root-is-desktop",`aioseo-settings-bar-root-is-desktop-${t}`].forEach(n=>{s.classList.toggle(n,c.matches)})},r=(t,e)=>{const o=[`${e}-left`,`${e}-right`,`${e}-top`,`${e}-top-left`,`${e}-top-right`,`${e}-bottom`,`${e}-bottom-left`,`${e}-bottom-right`];t.classList.remove(...o)},g=()=>{const t=document.querySelector(".et-fb-page-settings-bar").classList;return t.contains("et-fb-page-settings-bar--horizontal")&&!t.contains("et-fb-page-settings-bar--top")?"bottom":t.contains("et-fb-page-settings-bar--top")&&!t.contains("et-fb-page-settings-bar--corner")?"top":t.contains("et-fb-page-settings-bar--bottom-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"bottom-left":"bottom-right":t.contains("et-fb-page-settings-bar--top-corner")?t.contains("et-fb-page-settings-bar--left-corner")?"top-left":"top-right":t.contains("et-fb-page-settings-bar--vertical--right")?"right":t.contains("et-fb-page-settings-bar--vertical--left")?"left":""},P=t=>{if(!R())return;const e=t.target,o=".aioseo-modal",n=".aioseo-app.post-settings-modal";if(!e.closest(o)&&!e.closest(n)&&!(e!==document.querySelector(o)&&e.contains(document.querySelector(o)))&&e!==s){const i=new Event("aioseo-divi-toggle-modal",{open:!1});document.dispatchEvent(i)}},R=()=>!document.querySelector(".aioseo-modal").classList.contains("aioseo-modal-is-closed"),w=()=>document.documentElement!==s&&document.documentElement.contains(s),u=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--active"),F=()=>document.querySelector(".et-fb-page-settings-bar").classList.contains("et-fb-page-settings-bar--dragged")&&!u(),c=window.matchMedia("(min-width: 768px)"),U=new MutationObserver(A),N="#aioseo-settings";let s=document.querySelector(N);s=S(s);const X=()=>{$(),q(),O()};let b={};const a=()=>{const t={...b},e=L();x(t,e)||(b=e,D())},Y=()=>{m.dispatch("saveCurrentPost",m.state.currentPost)},j=()=>{a(),window.addEventListener("message",t=>{t.data.eventType==="et_fb_section_content_change"&&p(a,1e3)}),window.wp&&window.wp.hooks.addFilter("et.builder.store.setting.update","aioseo",(t,e)=>{if(t)switch(e){case"et_pb_post_settings_title":f(ETBuilderBackendDynamic,"postTitle",t),p(a,1e3);break;case"et_pb_post_settings_excerpt":f(ETBuilderBackendDynamic,"postMeta.post_excerpt",t),p(a,1e3);break}return t}),document.querySelector(".et-fb-button--save-draft, .et-fb-button--publish").addEventListener("click",Y)};var z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-draggable"},[t.completelyDraggable?o("div",{on:{dragMouseDown:t.dragMouseDown}},[t._t("default")],2):t._e(),t.completelyDraggable?t._e():o("div",[t._t("default")],2)])},V=[];const Q={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(t){t=t||window.event,t.preventDefault(),this.position3=t.clientX,this.position4=t.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(t){t=t||window.event,t.preventDefault(),this.position1=this.position3-t.clientX,this.position2=this.position4-t.clientY,this.position3=t.clientX,this.position4=t.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}},_={};var W=h(Q,z,V,!1,G,null,null,null);function G(t){for(let e in _)this[e]=_[e]}const H=function(){return W.exports}();var I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("util-draggable",{ref:"modal-container",attrs:{completelyDraggable:!1}},[o("div",{staticClass:"aioseo-modal",class:{"aioseo-modal-is-closed":!t.isOpen}},[o("div",{staticClass:"aioseo-modal-header",on:{mousedown:function(n){return n.preventDefault(),function(i){return t.$refs["modal-container"].dragMouseDown(i)}.apply(null,arguments)}}},[o("div",{staticClass:"aioseo-modal-header-title"},[t._v(t._s(t.strings.header))]),o("div",{staticClass:"aioseo-modal-header-close",on:{click:function(n){t.isOpen=!1}}},[o("svg-close")],1)]),o("div",{staticClass:"aioseo-modal-body edit-post-sidebar"},[o("PostSettings")],1)])])},J=[];const K={components:{PostSettings:k,SvgClose:B,UtilDraggable:H},data(){return{isOpen:!1,strings:{header:this.$t.sprintf(this.$t.__("%1$s settings",this.$td),"All in One SEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}},beforeUnmount(){document.removeEventListener("aioseo-divi-toggle-modal",this.toggleModal)},mounted(){this.$nextTick(function(){document.addEventListener("aioseo-divi-toggle-modal",this.toggleModal)})}},v={};var Z=h(K,I,J,!1,tt,null,null,null);function tt(t){for(let e in v)this[e]=v[e]}const et=function(){return Z.exports}();y.prototype.$truSeo=new C;const ot=()=>{new y({store:m,data:{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"},render:t=>t(et)}).$mount("#aioseo-app-modal > div")},st=()=>{X(),ot(),j()};window.addEventListener("message",function(t){t.data.eventType==="et_builder_api_ready"&&st()});