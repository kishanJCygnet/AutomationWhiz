var h=Object.defineProperty,C=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(e,s,t)=>s in e?h(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&u(e,t,s[t]);if(c)for(var t of c(s))b.call(s,t)&&u(e,t,s[t]);return e},i=(e,s)=>C(e,$(s));import"./ToolsSettings.78d1d300.js";import{a as l,b as S,c as _}from"./index.9b64eb46.js";import"./helpers.a60eef6a.js";import{g as r,r as p}from"./params.bea1a08d.js";import{n as a}from"./vueComponentNormalizer.87056a83.js";import{C as x,a as k}from"./LicenseKeyBar.6284760e.js";import{U as w}from"./AnimatedNumber.b6059bfd.js";import{S as P}from"./Logo.1a5e022a.js";import{S as B}from"./QuestionMark.83ebd18e.js";const N={mounted(){if(r()["aioseo-scroll"]&&setTimeout(()=>{this.$scrollTo(`#${r()["aioseo-scroll"]}`,{offset:-130}),p("aioseo-scroll")},500),r()["aioseo-highlight"]){const e=r()["aioseo-scroll"]?1500:500;setTimeout(()=>{const s=document.querySelector(`#${r()["aioseo-highlight"]}`);s&&(s.classList.add("aioseo-row-highlight"),setTimeout(()=>{s.classList.remove("aioseo-row-highlight")},1500)),p("aioseo-highlight")},e)}}};var A=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-percent-circle"},[t("transition",{attrs:{name:"fill-percent-circle"}},[t("svg",{staticClass:"aioseo-seo-site-score-svg",attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{staticClass:"aioseo-percent-circle-score__background",attrs:{stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}),t("circle",{staticClass:"aioseo-percent-circle-score__circle",attrs:{stroke:"#005AE0","stroke-width":"2","stroke-dasharray":e.suggestionsScan.percent+",100",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}})])]),t("div",{staticClass:"aioseo-percent-circle-percent"},[t("div",[t("util-animated-number",{attrs:{number:e.number,"from-number":e.fromNumber}}),e._v("% ")],1)])],1)},M=[];const H={components:{UtilAnimatedNumber:w},data(){return{fromNumber:0,number:0}},watch:{suggestionsScan:{deep:!0,handler(e){e.percent!==this.number&&(this.fromNumber=this.number,this.number=e.percent)}}},computed:n({},l("linkAssistant",["suggestionsScan"])),mounted(){this.number=this.suggestionsScan.percent}},m={};var U=a(H,A,M,!1,E,null,null,null);function E(e){for(let s in m)this[s]=m[s]}var F=function(){return U.exports}(),L=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div")},j=[];const R={},d={};var V=a(R,L,j,!1,q,null,null,null);function q(e){for(let s in d)this[s]=d[s]}var T=function(){return V.exports}(),W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:e.classes},[e._t("default")],2)},G=[];const Z={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let e=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return e+=this.hero?"aioseo-hero ":"",e+=this.fullWidth?"full-width ":"",e+=this.small?"small ":"",e}}},g={};var O=a(Z,W,G,!1,z,null,null,null);function z(e){for(let s in g)this[s]=g[s]}var D=function(){return O.exports}(),I=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("svg",{staticClass:"aioseo-notifications",attrs:{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"}})])},K=[];const Q={},v={};var Y=a(Q,I,K,!1,J,null,null,null);function J(e){for(let s in v)this[s]=v[s]}var X=function(){return Y.exports}(),ee=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-header"},[!e.$isPro&&e.settings.showUpgradeBar&&e.upgradeBar&&e.pong?t("core-upgrade-bar"):e._e(),e.$isPro&&e.isUnlicensed&&e.pong?t("core-license-key-bar"):e._e(),e.pong?e._e():t("core-api-bar"),t("grid-container",{attrs:{"full-width":e.fullWidth,small:e.small}},[t("div",{staticClass:"aioseo-header-content"},[e.isUnlicensed?t("a",{attrs:{href:e.$links.utmUrl("header-logo"),target:"_blank"}},[t("svg-aioseo-logo")],1):e._e(),e.isUnlicensed?e._e():t("svg-aioseo-logo"),e.pageName?t("span",{staticClass:"spacer"}):e._e(),e.pageName?t("span",{staticClass:"page-name"},[e._v(e._s(e.pageName))]):e._e(),e.actions?t("div",{staticClass:"header-actions"},[t("transition",{attrs:{name:"fade-percent-circle"}},[e.canShowPercentCircle?t("core-percent-circle",{nativeOn:{click:function(o){return e.toggleProcessingPopup.apply(null,arguments)}}}):e._e()],1),t("span",{staticClass:"round",on:{click:function(o){return o.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}},[e.activeNotificationsCount?t("span",{staticClass:"round number"},[e._v(" "+e._s(e.activeNotificationsCount>9?"!":e.activeNotificationsCount)+" ")]):e._e(),t("svg-notifications",{on:{click:function(o){return o.stopPropagation(),e.toggleNotifications.apply(null,arguments)}}})],1),e.helpPanel.docs&&Object.keys(e.helpPanel.docs).length?t("span",{staticClass:"round",on:{click:function(o){return o.stopPropagation(),e.toggleModal.apply(null,arguments)}}},[t("svg-circle-question-mark")],1):e._e()],1):e._e()],1)])],1)},te=[];const se={components:{CoreApiBar:x,CorePercentCircle:F,CoreLicenseKeyBar:k,CoreUpgradeBar:T,GridContainer:D,SvgAioseoLogo:P,SvgCircleQuestionMark:B,SvgNotifications:X},mixins:[N],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},computed:i(n(n(n({},S(["settings","activeNotificationsCount","isUnlicensed","helpPanel"])),l(["notifications","pong"])),l("linkAssistant",["suggestionsScan"])),{canShowPercentCircle(){return this.$addons.isActive("aioseo-link-assistant")&&!this.$addons.requiresUpgrade("aioseo-link-assistant")&&this.$addons.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.suggestionsScan.percent!==100}}),methods:i(n(n({},_(["toggleNotifications"])),_("linkAssistant",["toggleProcessingPopup"])),{debounce(e){let s;return(...t)=>{s&&cancelAnimationFrame(s),s=requestAnimationFrame(()=>{e(...t)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")}}),mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0})}},f={};var ne=a(se,ee,te,!1,oe,null,null,null);function oe(e){for(let s in f)this[s]=f[s]}var ge=function(){return ne.exports}();export{ge as C,D as G};
