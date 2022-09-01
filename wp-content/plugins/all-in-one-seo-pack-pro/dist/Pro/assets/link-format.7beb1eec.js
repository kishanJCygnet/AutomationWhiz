import{n as r,V as l}from"./js/vueComponentNormalizer.a77505d6.js";import{S as u}from"./js/index.1a8da5ff.js";import{e as c}from"./js/elemLoaded.b1f6e29c.js";import{u as d}from"./js/url.eabb9161.js";import{b as m,a as p,d as k,s as f}from"./js/index.670b7e80.js";import{S as _}from"./js/Information.45f06e33.js";import"./js/client.f3edd6a0.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/constants.5371d109.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/default-i18n.11a38481.js";var h=function(){var n=this,t=n.$createElement,i=n._self._c||t;return n.canShowUpsell?i("div",{staticClass:"aioseo-link-assistant-did-you-know"},[i("svg-circle-information"),i("span",{domProps:{innerHTML:n._s(n.strings.upsell)},on:{click:function(s){s.stopPropagation(),n.disabled=!0}}}),i("svg-close",{nativeOn:{click:function(s){return s.stopPropagation(),n.disableLinkAssistantEducation.apply(null,arguments)}}})],1):n._e()},L=[];const v={components:{SvgCircleInformation:_,SvgClose:u},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:this.$t.sprintf(this.$t.__("Did you know you can automatically add internal links using Link Assistant? %1$s",this.$td),this.$links.getPlainLink(this.$constants.GLOBAL_STRINGS.learnMore,this.$aioseo.urls.aio.linkAssistant,!0))}}},computed:{...m(["isUnlicensed"]),...p(["currentPost"]),canShowUpsell(){const n=this.$addons.getAddon("aioseo-link-assistant"),{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,s=t.linkFormat.linkAssistantDismissed;return(this.isUnlicensed||!n||!n.isActive||n.requiresUpgrade)&&2<i&&!s&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{...k(["incrementInternalLinkCount","disableLinkAssistantEducation"]),async linkAdded(n){var o;await this.$nextTick();const{options:t}=this.currentPost,i=t.linkFormat.internalLinkCount,s=t.linkFormat.linkAssistantDismissed;2<i||s||this.isInternalLink(n.url||((o=n.suggestion)==null?void 0:o.url)||null)&&this.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const n=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(n==null?void 0:n.value)&&(this.linkFormatValue=JSON.parse(n.value))},isInternalLink(n){const t=d.parse(n,!1,!0);return n.indexOf("//")===-1&&n.indexOf("/")===0?!0:n.indexOf("#")===0?!1:t.host?t.host===this.$aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:n,hasAction:t}=window.wp.hooks;t("aioseo-link-format-link-added","aioseo")||n("aioseo-link-format-link-added","aioseo",this.linkAdded)}},e={};var g=r(v,h,L,!1,A,null,null,null);function A(n){for(let t in e)this[t]=e[t]}const w=function(){return g.exports}(),a=()=>{new l({store:f,render:n=>n(w)}).$mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?a():(c("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoLaDidYouKnow"&&a()},{passive:!0})));