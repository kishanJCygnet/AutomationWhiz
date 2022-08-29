import{b as _,d as i,a as n,c as h}from"./index.670b7e80.js";import{R as g,B as p,A as f,L as m}from"./Redirects.2dfdd88c.js";import{A as v}from"./ToolsSettings.d7505a2f.js";import"./helpers.1eef9d6b.js";import{J as $}from"./JsonValues.08065e69.js";import{n as s}from"./vueComponentNormalizer.a77505d6.js";import{C as y}from"./Index.fc4debab.js";import{C as R}from"./Card.571f0099.js";import{C as u}from"./Index.66ae07a9.js";import{C as S}from"./Index.88326aa1.js";var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.redirectServerTest.failed&&t.redirectOptions.main.method==="server"?r("core-alert",{attrs:{size:"small",type:"yellow"}},[r("div",{domProps:{innerHTML:t._s(t.strings.nginxReload)}}),r("div",{domProps:{innerHTML:t._s(t.strings.dontKnow)}}),r("base-button",{attrs:{type:"blue",size:"small",loading:t.redirectServerTest.testing},on:{click:function(o){return t.testServerRedirects()}}},[t._v(" "+t._s(t.strings.checkAgain)+" ")])],1):t._e()},A=[];const x={components:{CoreAlert:u},data(){return{strings:{nginxReload:this.$t.sprintf(this.$t.__("Your redirect settings have been updated. In order for them to work properly you may need to reload your %1$s configuration. %2$s",this.$td),this.detectedServer(),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"redirectServerConfigReload",!0)),dontKnow:this.$t.__("If you don't know how to do that please revert your Redirect Method to PHP.",this.$td),checkAgain:this.$t.__("Check Again",this.$td)}}},computed:{..._("redirects",["redirectOptions","redirectServerTest"])},methods:{...i("redirects",["testServerRedirects"]),maybeTest(){this.testServerRedirects()},detectedServer(){return this.$aioseo.data.server.apache?"Apache":this.$aioseo.data.server.nginx?"NGINX":this.$t.__("Server",this.$td)}},mounted(){this.maybeTest(),this.$bus.$on("changes-saved",this.maybeTest)},beforeDestroy(){this.$bus.$off("changes-saved",this.maybeTest)}},a={};var k=s(x,b,A,!1,w,"76b3408a",null,null);function w(t){for(let e in a)this[e]=a[e]}const C=function(){return k.exports}();var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aioseo-redirects"},[r("server-config-reload-warning"),r("core-card",{attrs:{slug:"addNewRedirection","header-text":t.strings.addNewRedirection}},[r("core-add-redirection",{attrs:{urls:t.getUrls,target:t.getTarget,type:t.getType}})],1),r("redirects-table")],1)},T=[];const M={components:{CoreAddRedirection:y,CoreCard:R,ServerConfigReloadWarning:C,RedirectsTable:g},mixins:[$],data(){return{queryUrls:[],targetUrl:"",type:0,strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td)}}},computed:{...n("redirects",["manualUrls"]),getType(){return this.type?this.type:-1},getTarget(){return this.targetUrl?this.targetUrl:this.queryUrls.length?"/":""},getUrls(){var t;return(t=this==null?void 0:this.manualUrls)!=null&&t.length?(this.manualUrls.forEach(e=>{this.queryUrls.push({url:e.url,regex:e.regex||!1,ignoreSlash:e.slash||!1,ignoreCase:e.case||!1,errors:[],warnings:[]}),e.target&&(this.targetUrl=e.target),e.type&&(this.type=e.type)}),this.queryUrls):this.queryUrls}}},d={};var L=s(M,U,T,!1,P,null,null,null);function P(t){for(let e in d)this[e]=d[e]}const O=function(){return L.exports}();var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{"aioseo-redirects":!0,"core-card":!t.noCoreCard}},[r("blur"),r("cta",{attrs:{"cta-button-visible":t.$addons.userCanUpdate("aioseo-redirects"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-redirects","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("redirects"),"feature-list":[t.strings.serverRedirects,t.strings.automaticRedirects,t.strings.redirectMonitoring,t.strings.monitoring404,t.strings.fullSiteRedirects,t.strings.siteAliases]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[r("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?r("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},E=[];const N={components:{Blur:p,CoreAlert:u,Cta:S},data(){return{strings:{ctaButtonText:this.$t.__("Update Redirects",this.$tdPro),ctaHeader:this.$t.__("Enable Redirects on your Site",this.$tdPro),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),ctaDescription:this.$t.__("Our Redirection Manager allows you to easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks. It even automatically sends users and search engines from your old URLs to your new ones.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-redirects").minimumVersion,"Redirects",this.$addons.getAddon("aioseo-redirects").installedVersion)},failed:!1,activationLoading:!1}},computed:{...n("redirects",["filters","totals","options"])},methods:{...i("redirects",["filter","getRedirectOptions"]),...i(["upgradePlugins"]),...h(["updateAddon"]),upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-redirects");this.upgradePlugins([{plugin:t.sku}]).then(e=>{if(e.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const r=[this.filter({slug:"all"}),this.filter({slug:"logs"}),this.filter({slug:"404"}),this.getRedirectOptions()];Promise.all(r).then(()=>{const o=e.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=o.installedVersion,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}}},c={};var j=s(N,q,E,!1,F,null,null,null);function F(t){for(let e in c)this[e]=c[e]}const I=function(){return j.exports}();var V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"aioseo-redirects-main"},[t.shouldShowMain?r("redirects"):t._e(),t.shouldShowActivate?r("activate"):t._e(),t.shouldShowUpdate?r("update"):t._e(),t.shouldShowLite?r("lite"):t._e()],1)},B=[];const D={mixins:[v],components:{Activate:f,Lite:m,Redirects:O,Update:I},data(){return{addonSlug:"aioseo-redirects"}},computed:{...n(["options","settings"])}},l={};var H=s(D,V,B,!1,z,null,null,null);function z(t){for(let e in l)this[e]=l[e]}const G=function(){return H.exports}(),st=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as R,C as S,st as a};
