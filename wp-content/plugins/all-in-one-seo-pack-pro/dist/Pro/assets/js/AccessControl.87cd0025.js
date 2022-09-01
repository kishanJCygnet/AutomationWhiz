var v=Object.defineProperty,y=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var c=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,r=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&c(t,s,e[s]);if(l)for(var s of l(e))C.call(e,s)&&c(t,s,e[s]);return t},g=(t,e)=>y(t,k(e));import{a as h,b as A}from"./index.9b64eb46.js";import{A as S}from"./WebmasterTools.bfb9b339.js";import{B as x}from"./Checkbox.5873a8d2.js";import{G as R,a as M}from"./Row.13b6f3f1.js";import{n as o}from"./vueComponentNormalizer.87056a83.js";import{C as m}from"./Card.377c3939.js";import{C as $}from"./ProBadge.7c0de2f7.js";import{C as f}from"./SettingsRow.eb71f07b.js";import{C as P}from"./Blur.8490ecd2.js";import{C as w}from"./Index.d44bd387.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./ToolsSettings.78d1d300.js";import"./helpers.a60eef6a.js";import"./index.7c8bddbb.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.81bd140d.js";import"./cleanForSlug.5d2420e9.js";import"./Modal.09e9b873.js";import"./MetaTag.ceacc375.js";import"./Checkmark.e7547654.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Index.e2bd87fe.js";var E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control-toggle"},[s("base-toggle",{attrs:{disabled:t.disabled,value:t.value},on:{input:t.emitInput}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")]),t.value?t._t("description"):t._e(),t.value?t._e():s("div",{staticClass:"access-control-settings"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.strings.generalSeoSettings)+" ")]),s("grid-row",t._l(t.settings.general,function(n,i){return s("grid-column",{key:i,attrs:{md:"4"}},[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.roleSettings[n.key],callback:function(a){t.$set(t.roleSettings,n.key,a)},expression:"roleSettings[setting.key]"}},[t._v(" "+t._s(n.label)+" ")])],1)}),1),s("div",{staticClass:"title"},[t._v(" "+t._s(t.strings.postSettings)+" ")]),s("grid-row",t._l(t.settings.page,function(n,i){return s("grid-column",{key:i,attrs:{md:"4"}},[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.roleSettings[n.key],callback:function(a){t.$set(t.roleSettings,n.key,a)},expression:"roleSettings[setting.key]"}},[t._v(" "+t._s(n.label)+" ")])],1)}),1)],1)],2)},L=[];const O={components:{BaseCheckbox:x,GridColumn:R,GridRow:M},props:{disabled:{type:Boolean,default(){return!1}},value:{type:Boolean,required:!0},roleSettings:{type:Object,required:!0}},data(){return{strings:{generalSeoSettings:this.$t.__("General SEO Settings:",this.$tdPro),postSettings:this.$t.__("Post SEO Settings:",this.$tdPro),useDefaultSettings:this.$t.__("Use Default Settings",this.$td),dashboard:this.$t.__("Dashboard",this.$td),setupWizard:this.$t.__("Setup Wizard",this.$td),generalSettings:this.$t.__("General Settings",this.$td),searchAppearanceSettings:this.$t.__("Search Appearance Settings",this.$tdPro),socialNetworksSettings:this.$t.__("Social Networks Settings",this.$tdPro),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),linkAssistantSettings:this.$t.__("Link Assistant Settings",this.$tdPro),redirectsManage:this.$t.__("Manage Redirects",this.$tdPro),pageRedirectsManage:this.$t.__("Manage Redirects",this.$tdPro),redirectsSettings:this.$t.__("Redirects Settings",this.$tdPro),seoAnalysisSettings:this.$t.__("SEO Analysis",this.$td),toolsSettings:this.$t.__("Tools",this.$td),featureManagerSettings:this.$t.__("Feature Manager Settings",this.$tdPro),pageAnalysis:this.$t.__("Page Analysis",this.$td),pageAdvancedSettings:this.$t.__("Advanced Settings",this.$td),pageSchemaSettings:this.$t.__("Schema Settings",this.$tdPro),pageSocialSettings:this.$t.__("Social Settings",this.$tdPro),localSeoSettings:this.$t.__("Local SEO Settings",this.$tdPro),pageLinkAssistantSettings:this.$t.__("Link Assistant",this.$td)}}},computed:g(r({},h(["options"])),{settings(){return{general:[{key:"dashboard",label:this.strings.dashboard},{key:"generalSettings",label:this.strings.generalSettings},{key:"searchAppearanceSettings",label:this.strings.searchAppearanceSettings},{key:"socialNetworksSettings",label:this.strings.socialNetworksSettings},{key:"sitemapSettings",label:this.strings.sitemapSettings},{key:"linkAssistantSettings",label:this.strings.linkAssistantSettings},{key:"redirectsManage",label:this.strings.redirectsManage},{key:"redirectsSettings",label:this.strings.redirectsSettings},{key:"seoAnalysisSettings",label:this.strings.seoAnalysisSettings},{key:"toolsSettings",label:this.strings.toolsSettings},{key:"featureManagerSettings",label:this.strings.featureManagerSettings},{key:"localSeoSettings",label:this.strings.localSeoSettings},{key:"setupWizard",label:this.strings.setupWizard}],page:[{key:"pageAnalysis",label:this.strings.pageAnalysis},{key:"pageGeneralSettings",label:this.strings.generalSettings},{key:"pageAdvancedSettings",label:this.strings.pageAdvancedSettings},{key:"pageSchemaSettings",label:this.strings.pageSchemaSettings},{key:"pageSocialSettings",label:this.strings.pageSocialSettings},{key:"pageLocalSeoSettings",label:this.strings.localSeoSettings},{key:"pageLinkAssistantSettings",label:this.strings.pageLinkAssistantSettings},{key:"pageRedirectsManage",label:this.strings.pageRedirectsManage}]}}}),methods:{emitInput(t){this.$emit("input",t)}}},u={};var U=o(O,E,L,!1,D,null,null,null);function D(t){for(let e in u)this[e]=u[e]}var B=function(){return U.exports}(),G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control"},[s("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.accessControl)+" "),s("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[t._l(t.getRoles,function(n){return[t.canShowRole(n)?s("core-settings-row",{key:n.name,attrs:{name:n.label},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-access-control-options",{attrs:{roleSettings:t.getSettings(n)},scopedSlots:t._u([{key:"description",fn:function(){return[s("p",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(n.description)}})]},proxy:!0}],null,!0),model:{value:t.getSettings(n).useDefault,callback:function(i){t.$set(t.getSettings(n),"useDefault",i)},expression:"getSettings(role).useDefault"}})]},proxy:!0}],null,!0)}):t._e()]})],2)],1)},z=[];const j={components:{CoreAccessControlOptions:B,CoreCard:m,CoreProBadge:$,CoreSettingsRow:f},mixins:[S],computed:r({},h(["options","dynamicOptions"])),methods:{canShowRole(t){let e=t.name;return e!=="administrator"?(["seoManager","seoEditor"].includes(e)&&(e=e.replace("seo","aioseo_").toLowerCase()),e in this.$aioseo.user.roles):this.$aioseo.data.multisite},getSettings(t){return t.dynamic?this.dynamicOptions.accessControl[t.name]:this.options.accessControl[t.name]}}},_={};var N=o(j,G,z,!1,F,null,null,null);function F(t){for(let e in _)this[e]=_[e]}var W=function(){return N.exports}(),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control-lite"},[s("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.accessControl)+" "),s("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[s("core-blur",[t._l(t.getLiteRoles,function(n){return[s("core-settings-row",{key:n.name,attrs:{name:n.label},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"toggle"},[s("base-toggle",{attrs:{disabled:!0,value:!0}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")])],1)]},proxy:!0}],null,!0)})]})],2),s("cta",{attrs:{"feature-list":[t.strings.granularControl,t.strings.wpRoles,t.strings.seoManagerRole,t.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])})],1)],1)},H=[];const I={components:{CoreBlur:P,CoreCard:m,CoreProBadge:$,CoreSettingsRow:f,Cta:w},mixins:[S],data(){return{strings:{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},computed:{getLiteRoles(){const t=this.getRoles;let e=1;for(;8>t.length;)t.push({label:this.$t.__("Custom Role "+e,this.$td),name:"customRole"+e}),e++;return t}}},p={};var q=o(I,T,H,!1,J,null,null,null);function J(t){for(let e in p)this[e]=p[e]}var K=function(){return q.exports}(),Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-access-control"},[t.isUnlicensed?t._e():s("access-control"),t.isUnlicensed?s("access-control-lite"):t._e()],1)},V=[];const X={components:{AccessControl:W,AccessControlLite:K},computed:r({},A(["isUnlicensed"]))},d={};var Y=o(X,Q,V,!1,Z,null,null,null);function Z(t){for(let e in d)this[e]=d[e]}var Rt=function(){return Y.exports}();export{Rt as default};