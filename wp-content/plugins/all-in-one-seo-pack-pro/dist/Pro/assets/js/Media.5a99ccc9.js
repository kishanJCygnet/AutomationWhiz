var S=Object.defineProperty,P=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var _=(t,a,e)=>a in t?S(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,i=(t,a)=>{for(var e in a||(a={}))k.call(a,e)&&_(t,e,a[e]);if(m)for(var e of m(a))C.call(a,e)&&_(t,e,a[e]);return t},r=(t,a)=>P(t,x(a));import{a as o,d as l,c as A}from"./index.9b64eb46.js";import{B as c}from"./RadioToggle.98e1e7ec.js";import{C as L}from"./Blur.8490ecd2.js";import{C as T}from"./HtmlTagsEditor.268eecf4.js";import{C as u}from"./SettingsRow.eb71f07b.js";import{n}from"./vueComponentNormalizer.87056a83.js";import{C as y}from"./Index.e2bd87fe.js";import{C as d}from"./Index.d44bd387.js";import{A as O,T as E}from"./TitleDescription.f87fad13.js";import{C as F}from"./Card.377c3939.js";import{C as I}from"./Tabs.255bc9e3.js";import{C as w}from"./ProBadge.7c0de2f7.js";import{C as R,S as U}from"./Schema.b98b9e97.js";import{R as M}from"./RequiredPlans.0825a232.js";import{A as B}from"./ToolsSettings.78d1d300.js";import"./helpers.a60eef6a.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./Editor.9c8b8c31.js";import"./_commonjsHelpers.f40d732e.js";import"./index.7c8bddbb.js";import"./client.94d919c5.js";import"./constants.81bd140d.js";import"./UnfilteredHtml.a634227d.js";import"./Row.13b6f3f1.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RobotsMeta.e1063949.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./GoogleSearchPreview.e1396b39.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Textarea.d161fc2e.js";import"./Modal.09e9b873.js";import"./cleanForSlug.5d2420e9.js";var G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.titleAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesTitleTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationTitleAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripTitlePunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.altTagAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","default-tags":["image_title","separator_sa","site_title","alt_tag"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesAltTag)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationForAltAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{value:!1,name:"stripAltPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}])})],1)},D=[];const V={components:{BaseRadioToggle:c,CoreBlur:L,CoreHtmlTagsEditor:T,CoreSettingsRow:u},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$tdPro),stripPunctuationTitleAttribute:this.$t.__("Strip Punctuation for Title Attributes",this.$tdPro),clickToAddVariablesTitleTag:this.$t.__("Click on the tags below to insert variables into your title attribute.",this.$tdPro),altTagAttributeFormat:this.$t.__("Alt Tag Attribute Format",this.$tdPro),clickToAddVariablesAltTag:this.$t.__("Click on the tags below to insert variables into your alt tag attribute.",this.$tdPro),stripPunctuationForAltAttribute:this.$t.__("Strip Punctuation for Alt Attributes",this.$tdPro)}}}},g={};var N=n(V,G,D,!1,H,null,null,null);function H(t){for(let a in g)this[a]=g[a]}var p=function(){return N.exports}(),j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},q=[];const W={components:{Blur:p,CoreAlert:y,Cta:d},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",this.$tdPro),ctaButtonText:this.$t.__("Activate Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),setTitleAttributes:this.$t.__("Set title attributes",this.$td),setAltTagAttributes:this.$t.__("Set alt tag attributes",this.$td),stripPunctuationTitles:this.$t.__("Strip punctuation for titles",this.$td),stripPunctuationAltTags:this.$t.__("Strip punctuation for alt tags",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},computed:i({},o(["tags"])),methods:r(i(i({},l(["installPlugins","getTags"])),A(["updateAddon"])),{activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.installPlugins([{plugin:t.basename}]).then(a=>{if(a.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}})},h={};var Y=n(W,j,q,!1,z,null,null,null);function z(t){for(let a in h)this[a]=h[a]}var J=function(){return Y.exports}(),K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("core-settings-row",{attrs:{name:t.strings.titleAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"imageSeoTitle","default-tags":["image_title","separator_sa","site_title"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesTitleTag)+" ")]},proxy:!0}]),model:{value:t.options.image.format.title,callback:function(s){t.$set(t.options.image.format,"title",s)},expression:"options.image.format.title"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationTitleAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripTitlePunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image.stripPunctuation.title,callback:function(s){t.$set(t.options.image.stripPunctuation,"title",s)},expression:"options.image.stripPunctuation.title"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.altTagAttributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"imageSeoAlt","default-tags":["alt_tag","separator_sa","site_title"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddVariablesAltTag)+" ")]},proxy:!0}]),model:{value:t.options.image.format.altTag,callback:function(s){t.$set(t.options.image.format,"altTag",s)},expression:"options.image.format.altTag"}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuationForAltAttribute,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripAltPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.image.stripPunctuation.altTag,callback:function(s){t.$set(t.options.image.stripPunctuation,"altTag",s)},expression:"options.image.stripPunctuation.altTag"}})]},proxy:!0}])})],1)},Q=[];const X={components:{BaseRadioToggle:c,CoreHtmlTagsEditor:T,CoreSettingsRow:u},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$tdPro),stripPunctuationTitleAttribute:this.$t.__("Strip Punctuation for Title Attributes",this.$tdPro),clickToAddVariablesTitleTag:this.$t.__("Click on the tags below to insert variables into your title attribute.",this.$tdPro),altTagAttributeFormat:this.$t.__("Alt Tag Attribute Format",this.$tdPro),clickToAddVariablesAltTag:this.$t.__("Click on the tags below to insert variables into your alt tag attribute.",this.$tdPro),stripPunctuationForAltAttribute:this.$t.__("Strip Punctuation for Alt Attributes",this.$tdPro)}}},computed:i({},o(["options"]))},f={};var Z=n(X,K,Q,!1,tt,null,null,null);function tt(t){for(let a in f)this[a]=f[a]}var et=function(){return Z.exports}(),at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-image-seo"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},st=[];const it={components:{Blur:p,RequiredPlans:M,Cta:d},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),setTitleAttributes:this.$t.__("Set title attributes",this.$td),setAltTagAttributes:this.$t.__("Set alt tag attributes",this.$td),stripPunctuationTitles:this.$t.__("Strip punctuation for titles",this.$td),stripPunctuationAltTags:this.$t.__("Strip punctuation for alt tags",this.$td)}}}},b={};var nt=n(it,at,st,!1,rt,"5a3a7186",null,null);function rt(t){for(let a in b)this[a]=b[a]}var ot=function(){return nt.exports}(),lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanUpdate("aioseo-image-seo"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-image-seo","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("imageSeo"),"feature-list":[t.strings.setTitleAttributes,t.strings.setAltTagAttributes,t.strings.stripPunctuationTitles,t.strings.stripPunctuationAltTags]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.imageSeoHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},ct=[];const ut={components:{Blur:p,CoreAlert:y,Cta:d},data(){return{failed:!1,activationLoading:!1,strings:{imageSeoHeader:this.$t.__("Enable Advanced SEO for Images on your Site",this.$tdPro),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the Title Attribute and Alt Text for attachment pages and images that are embedded in your content. These can be set based on a specified format, similar to the Title Format settings in the Global Settings menu.",this.$tdPro),ctaButtonText:this.$t.__("Update Image SEO",this.$tdPro),learnMoreText:this.$t.__("Learn more about Image SEO",this.$tdPro),setTitleAttributes:this.$t.__("Set title attributes",this.$td),setAltTagAttributes:this.$t.__("Set alt tag attributes",this.$td),stripPunctuationTitles:this.$t.__("Strip punctuation for titles",this.$td),stripPunctuationAltTags:this.$t.__("Strip punctuation for alt tags",this.$td),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-image-seo").minimumVersion,"Image SEO",this.$addons.getAddon("aioseo-image-seo").installedVersion)}}},computed:i({},o(["tags"])),methods:r(i(i({},l(["upgradePlugins","getTags"])),A(["updateAddon"])),{upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-image-seo");this.upgradePlugins([{plugin:t.sku}]).then(a=>{if(a.body.failed.length){this.activationLoading=!1,this.failed=!0;return}this.getTags().then(()=>{const e=a.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=e.installedVersion,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}})},$={};var dt=n(ut,lt,ct,!1,pt,null,null,null);function pt(t){for(let a in $)this[a]=$[a]}var mt=function(){return dt.exports}(),_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:t.postType.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:""+(t.postType.icon||"dashicons-admin-post")}),e("div",{domProps:{innerHTML:t._s(t.postType.label)}})]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(s){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",s)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[t.postType.name+"SA"],internal:""},on:{changed:function(s){return t.processChangeTab(t.postType.name,s)}}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[t.postType.name+"SA"],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo",noSlide:!t.shouldShowMain},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.imageSeo)+" "),e("core-pro-badge")]},proxy:!0}])},[t.shouldShowMain?e("image-seo"):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},gt=[];const ht={mixins:[B],components:{Activate:J,Advanced:O,BaseRadioToggle:c,CoreCard:F,CoreMainTabs:I,CoreProBadge:w,CoreSettingsRow:u,CustomFields:R,ImageSeo:et,Lite:ot,Schema:U,TitleDescription:E,Update:mt},data(){return{addonSlug:"aioseo-image-seo",internalDebounce:!1,strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td)},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:r(i({},o(["options","dynamicOptions","settings"])),{postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}}),methods:r(i({},l(["changeTab"])),{processChangeTab(t,a){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:a}),setTimeout(()=>{this.internalDebounce=!1},50))}})},v={};var ft=n(ht,_t,gt,!1,bt,null,null,null);function bt(t){for(let a in v)this[a]=v[a]}var ne=function(){return ft.exports}();export{ne as default};