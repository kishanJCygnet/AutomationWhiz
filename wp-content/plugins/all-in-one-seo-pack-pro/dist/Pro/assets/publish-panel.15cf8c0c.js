import{n as o,V as c}from"./js/vueComponentNormalizer.a77505d6.js";import{u as $,h as y,c as b}from"./js/index.1a8da5ff.js";import{a as r,s as l}from"./js/index.670b7e80.js";import{T as P}from"./js/ToolsSettings.d7505a2f.js";import{a as w}from"./js/Image.91bc75ec.js";import{S}from"./js/Close.d0d842fb.js";import{S as k}from"./js/Exclamation.bfa9fb45.js";import{S as f}from"./js/Standalone.67437852.js";import{C as x}from"./js/GoogleSearchPreview.99dae0c0.js";import{S as C}from"./js/External.8e2238ff.js";import{S as E}from"./js/Pencil.77e25de2.js";import{i as T,s as A}from"./js/helpers.1eef9d6b.js";import{l as M}from"./js/loadTruSeo.8a5e4245.js";import{e as I}from"./js/elemLoaded.b1f6e29c.js";import{t as O}from"./js/constants.5371d109.js";import"./js/client.f3edd6a0.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/default-i18n.11a38481.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/Modal.354eb07f.js";import"./js/cleanForSlug.ba4852e5.js";function F(e){return $(O(e).toLowerCase())}var R=y(function(e,t,s){return t=t.toLowerCase(),e+(s?F(t):t)});const u=R;var V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentPost.id?s("div",{staticClass:"seo-overview"},[s("ul",{staticClass:"pre-publish-checklist"},e._l(e.tips,function(i,n){return s("li",{key:n},[s("span",{staticClass:"icon"},[s(i.icon,{tag:"component",class:i.type})],1),s("span",[e._v(e._s(i.label)+": "),s("span",{staticClass:"result",class:i.value.endsWith("/100")?i.type:null},[e._v(e._s(i.value))])]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?s("span",{staticClass:"edit",on:{click:function(a){return e.openSidebar(i.name)}}},[s("svg-pencil")],1):e._e()])}),0),e.$allowed("aioseo_page_analysis")?s("div",{staticClass:"snippet-preview"},[s("p",{staticClass:"title"},[e._v(e._s(e.strings.snippetPreview)+":")]),s("core-google-search-preview",{class:{ismobile:e.currentPost.generalMobilePrev},attrs:{title:e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title",separator:e.options.searchAppearance.global.separator,description:e.currentPost.description||e.currentPost.tags.description||"#post_content"},scopedSlots:e._u([{key:"domain",fn:function(){return[s("a",{attrs:{href:e.liveTags.permalink,target:"_blank"}},[e._v(" "+e._s(e.liveTags.permalink)+" ")])]},proxy:!0}],null,!1,4038479585)})],1):e._e(),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?s("div",{staticClass:"canonical-url"},[s("p",{staticClass:"title"},[e._v(" "+e._s(e.strings.canonicalUrl)+": "),s("span",{staticClass:"edit",on:{click:function(i){return e.openSidebar("canonical")}}},[s("svg-pencil")],1)]),s("a",{attrs:{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"}},[s("span",[e._v(e._s(e.currentPost.canonicalUrl))]),s("svg-external")],1)]):e._e()]):e._e()},L=[];const U={components:{CoreGoogleSearchPreview:x,SvgCircleCheck:b,SvgCircleClose:S,SvgCircleExclamation:k,SvgExternal:C,SvgPencil:E},mixins:[f,P,w],data(){return{strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:{...r(["currentPost"]),...r("live-tags",["liveTags"]),tips(){let e=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(t=>this.$allowed(t.access)&&(t.access!=="aioseo_page_analysis"||this.options.advanced.truSeo));return!this.options.social.facebook.general.enable&&!this.options.social.twitter.general.enable&&(e=e.filter(t=>t.name!=="social")),e.forEach((t,s)=>{e[s]={...t,...this.getData(t.name)}}),e},canImprove(){return this.tips.some(e=>e.type==="error")}},methods:{getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const t={};if(e==="visibility"&&(t.value=this.$t.__("Good!",this.$td),t.type="success",(this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex)&&(t.value=this.$t.__("Blocked!",this.$td),t.type="error")),e==="seoAnalysis"){t.value=this.$t.__("N/A",this.$td),t.type="error";const s=this.currentPost.seo_score;Number.isInteger(s)&&(t.value=s+"/100",t.type=80<s?"success":50<s?"warning":"error")}if(e==="readabilityAnalysis"){t.value=this.$t.__("Good!",this.$td),t.type="success";const s=this.currentPost.page_analysis.analysis.readability.errors;s&&0<s&&(t.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",s,this.$td),s),t.type="error")}if(e==="focusKeyphrase"){t.value=this.$t.__("No focus keyphrase!",this.$td),t.type="error";const s=this.currentPost.keyphrases.focus;s&&s.keyphrase&&(t.value=s.score+"/100",t.type=80<s.score?"success":50<s.score?"warning":"error")}if(e==="social"){t.value=this.$t.__("Good!",this.$td),t.type="success";const s=this.parseTags(this.currentPost.og_title||this.currentPost.title||this.currentPost.tags.title).trim(),i=this.parseTags(this.currentPost.og_description||this.currentPost.description||this.currentPost.tags.description).trim(),n=this.socialImage;(!s||!i||!n)&&(t.value=this.$t.__("Missing social markup!",this.$td),t.type="error")}return{...t,icon:this.getIcon(t.type)}},openSidebar(e){const{closePublishSidebar:t,openGeneralSidebar:s}=window.wp.data.dispatch("core/edit-post");switch(t(),s("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar"),e){case"canonical":case"visibility":this.$bus.$emit("open-post-settings",{tab:"advanced"});break;case"seoAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"basicseo"});break;case"readabilityAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"readability"});break;case"focusKeyphrase":this.$bus.$emit("open-post-settings",{tab:"general",card:"focus"});break;case"social":this.$bus.$emit("open-post-settings",{tab:"social"});break}}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),this.$bus.$on("updateSocialImagePreview",e=>{this.socialImage=e.image}),this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}},p={};var z=o(U,V,L,!1,D,null,null,null);function D(e){for(let t in p)this[t]=p[t]}const _=function(){return z.exports}();var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-facebook-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"}})])},G=[];const B={},d={};var N=o(B,j,G,!1,K,null,null,null);function K(e){for(let t in d)this[t]=d[t]}const H=function(){return N.exports}();var Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-linkedin-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"}})])},q=[];const W={},h={};var J=o(W,Y,q,!1,Q,null,null,null);function Q(e){for(let t in h)this[t]=h[t]}const X=function(){return J.exports}();var Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-pinterest-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"}})])},ee=[];const te={},m={};var se=o(te,Z,ee,!1,ie,null,null,null);function ie(e){for(let t in m)this[t]=m[t]}const ne=function(){return se.exports}();var oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-twitter-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"}})])},ae=[];const re={},v={};var ce=o(re,oe,ae,!1,le,null,null,null);function le(e){for(let t in v)this[t]=v[t]}const ue=function(){return ce.exports}();var pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.liveTags.permalink?s("div",{staticClass:"aioseo-post-publish"},[s("h2",{staticClass:"title"},[e._v(e._s(e.strings.title))]),s("p",{staticClass:"description"},[e._v(e._s(e.strings.description))]),s("div",{staticClass:"links"},e._l(e.socialNetworks,function(i,n){return s("a",{key:n,staticClass:"link",attrs:{target:"_blank",href:i.link}},[s(i.icon,{tag:"component"})],1)}),0)]):e._e()},_e=[];const de={components:{SvgFacebookRounded:H,SvgLinkedinRounded:X,SvgPinterestRounded:ne,SvgTwitterRounded:ue},mixins:[f],data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:{...r("live-tags",["liveTags"]),socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(e=>({...e,link:e.link+this.liveTags.permalink}))}}},g={};var he=o(de,pe,_e,!1,me,null,null,null);function me(e){for(let t in g)this[t]=g[t]}const ve=function(){return he.exports}();(function(e){if(!T()||!A()||!e.editPost.PluginDocumentSettingPanel)return;const t=e.editPost.PluginDocumentSettingPanel,s=e.editPost.PluginPrePublishPanel,i=e.editPost.PluginPostPublishPanel,n=e.plugins.registerPlugin,a=window.aioseo.user;!a.capabilities.aioseo_page_analysis&&!a.capabilities.aioseo_page_general_settings&&!a.capabilities.aioseo_page_advanced_settings||n("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(t,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(s,{title:["AIOSEO",":",e.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(i,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:_},{id:"aioseo-document-setting",component:_},{id:"aioseo-post-publish",component:ve}].forEach(t=>{document.getElementById(t.id)?new c({store:l,render:s=>s(t.component)}).$mount("#"+t.id):(I("#"+t.id,u(t.id)),document.addEventListener("animationstart",function(s){u(t.id)===s.animationName&&new c({store:l,render:i=>i(t.component)}).$mount("#"+t.id)},{passive:!0}))});window.addEventListener("load",()=>{M(!1)});
