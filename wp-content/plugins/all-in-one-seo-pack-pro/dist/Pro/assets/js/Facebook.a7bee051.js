var p=Object.defineProperty,g=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,n=(e,s)=>{for(var t in s||(s={}))d.call(s,t)&&l(e,t,s[t]);if(r)for(var t of r(s))f.call(s,t)&&l(e,t,s[t]);return e},c=(e,s)=>g(e,m(s));import{T as b}from"./ToolsSettings.78d1d300.js";import{I as _,U as k}from"./Image.22a29494.js";import{M as h}from"./MaxCounts.5a7ca2fd.js";import{n as $}from"./vueComponentNormalizer.87056a83.js";import{b as v,a as y}from"./index.9b64eb46.js";import{B as T}from"./Img.781a7e40.js";import{B as I}from"./RadioToggle.98e1e7ec.js";import{C as S}from"./Index.e2bd87fe.js";import{C as P}from"./Card.377c3939.js";import{C}from"./FacebookPreview.bd1ff4d4.js";import{C as x}from"./HtmlTagsEditor.268eecf4.js";import{C as A}from"./SettingsRow.eb71f07b.js";import{S as w}from"./Book.b6a9040c.js";import{S as O}from"./Plus.a9b9ba75.js";import{T as L,a as U}from"./Row.b5e5f12f.js";import"./helpers.a60eef6a.js";import"./index.7c8bddbb.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.81bd140d.js";import"./isArrayLikeObject.86537e3d.js";import"./default-i18n.abde8d59.js";import"./cleanForSlug.5d2420e9.js";import"./Modal.09e9b873.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./dannie-profile.41545edf.js";import"./Editor.9c8b8c31.js";import"./UnfilteredHtml.a634227d.js";import"./Row.13b6f3f1.js";var D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-facebook"},[t("core-card",{attrs:{slug:"facebook","header-text":e.strings.generalFacebookSettings}},[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.description)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"facebook",!0))}})]),t("core-settings-row",{attrs:{name:e.strings.enableOpenGraph},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:e.options.social.facebook.general.enable,callback:function(o){e.$set(e.options.social.facebook.general,"enable",o)},expression:"options.social.facebook.general.enable"}})]},proxy:!0}])}),e.options.social.facebook.general.enable?t("core-settings-row",{staticClass:"facebook-default-image-source",attrs:{name:e.strings.defaultImageSourcePosts,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{attrs:{size:"medium",options:e.imageSourceOptions,value:e.getImageSourceOption(e.options.social.facebook.general.defaultImageSourcePosts)},on:{input:function(o){return e.options.social.facebook.general.defaultImageSourcePosts=o.value}}})]},proxy:!0}],null,!1,3972235420)}):e._e(),e.options.social.facebook.general.enable&&e.options.social.facebook.general.defaultImageSourcePosts==="custom"?t("core-settings-row",{attrs:{name:e.strings.postCustomFieldName,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.facebook.general.customFieldImagePosts,callback:function(o){e.$set(e.options.social.facebook.general,"customFieldImagePosts",o)},expression:"options.social.facebook.general.customFieldImagePosts"}})]},proxy:!0}],null,!1,3287317387)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{staticClass:"facebook-image",attrs:{name:e.strings.defaultFacebookImagePosts,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"facebook-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.facebook.general.defaultImagePosts,callback:function(o){e.$set(e.options.social.facebook.general,"defaultImagePosts",o)},expression:"options.social.facebook.general.defaultImagePosts"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){e.openUploadModal("defaultImagePosts",function(a){return e.options.social.facebook.general.defaultImagePosts=a})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){e.options.social.facebook.general.defaultImagePosts=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.minimumSize)+" ")]),t("base-img",{attrs:{src:e.options.social.facebook.general.defaultImagePosts}})]},proxy:!0}],null,!1,1742393159)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{staticClass:"facebook-default-image-source",attrs:{name:e.strings.defaultImageSourceTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[e.isUnlicensed?e._e():t("base-select",{attrs:{size:"medium",options:e.getTermImageSourceOptions(),value:e.getImageSourceOption(e.options.social.facebook.general.defaultImageSourceTerms)},on:{input:function(o){return e.options.social.facebook.general.defaultImageSourceTerms=o.value}}}),e.isUnlicensed?t("base-select",{attrs:{size:"medium",options:e.getTermImageSourceOptions(),value:e.getImageSourceOption("default"),disabled:""}}):e._e(),e.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:e._s(e.strings.defaultTermImageSourceUpsell)}})]):e._e()]},proxy:!0}],null,!1,987495405)}):e._e(),e.options.social.facebook.general.enable&&e.options.social.facebook.general.defaultImageSourceTerms==="custom"&&!e.isUnlicensed?t("core-settings-row",{attrs:{name:e.strings.termsCustomFieldName,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.facebook.general.customFieldImageTerms,callback:function(o){e.$set(e.options.social.facebook.general,"customFieldImageTerms",o)},expression:"options.social.facebook.general.customFieldImageTerms"}})]},proxy:!0}],null,!1,1628198397)}):e._e(),e.options.social.facebook.general.enable&&!e.isUnlicensed?t("core-settings-row",{staticClass:"facebook-image",attrs:{name:e.strings.defaultFacebookImageTerms,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"facebook-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.facebook.general.defaultImageTerms,callback:function(o){e.$set(e.options.social.facebook.general,"defaultImageTerms",o)},expression:"options.social.facebook.general.defaultImageTerms"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){e.openUploadModal("defaultImageTerms",function(a){return e.options.social.facebook.general.defaultImageTerms=a})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){e.options.social.facebook.general.defaultImageTerms=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.minimumSize)+" ")]),t("base-img",{attrs:{src:e.options.social.facebook.general.defaultImageTerms}})]},proxy:!0}],null,!1,3862772785)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{attrs:{name:e.strings.postTypeObjectTypes,align:""},scopedSlots:e._u([{key:"content",fn:function(){return e._l(e.$aioseo.postData.postTypes,function(o,a){return t("table-row",{key:a,staticClass:"facebook-object-types"},[t("table-column",{domProps:{innerHTML:e._s(o.label)}},[e._v(" ("+e._s(o.name)+") ")]),t("table-column",[t("base-select",{attrs:{size:"medium",options:e.objectTypeOptions,"group-label":"groupLabel","group-values":"options",value:e.getObjectTypeOptions(e.dynamicOptions.social.facebook.general.postTypes[o.name].objectType)},on:{input:function(i){return e.dynamicOptions.social.facebook.general.postTypes[o.name].objectType=i.value}}})],1)],1)})},proxy:!0}],null,!1,3932838815)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{attrs:{name:e.strings.taxonomyObjectTypes,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[e._l(e.$aioseo.postData.taxonomies,function(o,a){return t("table-row",{key:a,staticClass:"facebook-object-types"},[t("table-column",[e._v(" "+e._s(o.label)+" ("+e._s(o.name)+") ")]),t("table-column",[e.isUnlicensed?e._e():t("base-select",{attrs:{size:"medium",options:e.objectTypeOptions,"group-label":"groupLabel","group-values":"options",value:e.getObjectTypeOptions(e.dynamicOptions.social.facebook.general.taxonomies[o.name].objectType)},on:{input:function(i){return e.dynamicOptions.social.facebook.general.taxonomies[o.name].objectType=i.value}}}),e.isUnlicensed?t("base-select",{attrs:{size:"medium",options:e.objectTypeOptions,"group-label":"groupLabel","group-values":"options",value:e.getObjectTypeOptions("article"),disabled:""}}):e._e()],1)],1)}),e.isUnlicensed?t("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[t("div",{domProps:{innerHTML:e._s(e.strings.taxonomyObjectTypesUpsell)}})]):e._e()]},proxy:!0}],null,!1,2973730503)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{attrs:{name:e.strings.showFacebookAuthor,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"showFacebookAuthor",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.facebook.general.showAuthor,callback:function(o){e.$set(e.options.social.facebook.general,"showAuthor",o)},expression:"options.social.facebook.general.showAuthor"}})]},proxy:!0}],null,!1,4045631323)}):e._e(),e.options.social.facebook.general.enable?t("core-settings-row",{attrs:{name:e.strings.siteName,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"facebook-meta-input",attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(o){return e.updateCount(o,"siteNameCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddSiteName)+" ")]},proxy:!0}],null,!1,1737386538),model:{value:e.options.social.facebook.general.siteName,callback:function(o){e.$set(e.options.social.facebook.general,"siteName",o)},expression:"options.social.facebook.general.siteName"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.siteNameCount,95))}})]},proxy:!0}],null,!1,3823092701)}):e._e()],1),e.options.social.facebook.general.enable?t("core-card",{attrs:{slug:"facebookHomePageSettings","header-text":e.strings.homePageSettings}},[e.$aioseo.data.staticHomePage?t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t("span",{domProps:{innerHTML:e._s(e.strings.homePageDisabledDescription)}}),e._v(" \xA0 "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageFacebook",!0))}})]):e._e(),t("br"),t("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-facebook-preview",{attrs:{image:e.options.social.facebook.homePage.image},scopedSlots:e._u([{key:"site-title",fn:function(){return[e.$aioseo.data.staticHomePage?t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.$aioseo.data.staticHomePageOgTitle||"#site_title"),100))}}):e._e(),e.$aioseo.data.staticHomePage?e._e():t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.options.social.facebook.homePage.title||"#site_title"),100))}})]},proxy:!0},{key:"site-description",fn:function(){return[e.$aioseo.data.staticHomePage?t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.$aioseo.data.staticHomePageOgDescription||"#tagline")))}}):e._e(),e.$aioseo.data.staticHomePage?e._e():t("span",{domProps:{innerHTML:e._s(e.truncate(e.parseTags(e.options.social.facebook.homePage.description||"#tagline")))}})]},proxy:!0}],null,!1,2307549679)})]},proxy:!0}],null,!1,2999179343)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{staticClass:"facebook-image",attrs:{name:e.strings.homePageImage},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"facebook-image-upload"},[t("base-input",{attrs:{size:"medium",placeholder:e.strings.pasteYourImageUrl},model:{value:e.options.social.facebook.homePage.image,callback:function(o){e.$set(e.options.social.facebook.homePage,"image",o)},expression:"options.social.facebook.homePage.image"}}),t("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){e.openUploadModal("homePageImage",function(a){return e.options.social.facebook.homePage.image=a})}}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.uploadOrSelectImage)+" ")],1),t("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){e.options.social.facebook.homePage.image=null}}},[e._v(" "+e._s(e.strings.remove)+" ")])],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.minimumSize)+" ")]),t("base-img",{attrs:{src:e.options.social.facebook.homePage.image}})]},proxy:!0}],null,!1,2812326779)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{attrs:{name:e.strings.homePageTitle,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"facebook-meta-input",attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(o){return e.updateCount(o,"titleCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddHomePageTitle)+" ")]},proxy:!0}],null,!1,4162175994),model:{value:e.options.social.facebook.homePage.title,callback:function(o){e.$set(e.options.social.facebook.homePage,"title",o)},expression:"options.social.facebook.homePage.title"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.titleCount,95))}})]},proxy:!0}],null,!1,3782128428)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{attrs:{name:e.strings.homePageDescription,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-html-tags-editor",{staticClass:"facebook-meta-input",attrs:{"line-numbers":!1,"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},on:{counter:function(o){return e.updateCount(o,"descriptionCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddHomePageDescription)+" ")]},proxy:!0}],null,!1,3376949532),model:{value:e.options.social.facebook.homePage.description,callback:function(o){e.$set(e.options.social.facebook.homePage,"description",o)},expression:"options.social.facebook.homePage.description"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.descriptionCount,200))}})]},proxy:!0}],null,!1,1114306425)}),e.$aioseo.data.staticHomePage?e._e():t("core-settings-row",{staticClass:"facebook-home-page-object-type",attrs:{name:e.strings.objectType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{attrs:{size:"medium",options:e.objectTypeOptions,"group-label":"groupLabel","group-values":"options",value:e.getObjectTypeOptions(e.options.social.facebook.homePage.objectType)},on:{input:function(o){return e.options.social.facebook.homePage.objectType=o.value}}})]},proxy:!0}],null,!1,1638031576)})],1):e._e(),e.options.social.facebook.general.enable?t("core-card",{attrs:{slug:"facebookAdvancedSettings",toggles:e.options.social.facebook.advanced.enable},scopedSlots:e._u([{key:"header",fn:function(){return[t("base-toggle",{model:{value:e.options.social.facebook.advanced.enable,callback:function(o){e.$set(e.options.social.facebook.advanced,"enable",o)},expression:"options.social.facebook.advanced.enable"}}),e._v(" "+e._s(e.strings.advancedSettings)+" ")]},proxy:!0}],null,!1,1726484805)},[t("core-settings-row",{attrs:{name:e.strings.facebookAdminId,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.facebook.advanced.adminId,callback:function(o){e.$set(e.options.social.facebook.advanced,"adminId",o)},expression:"options.social.facebook.advanced.adminId"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.facebookAdminIdDescription)+" ")]),t("div",{staticClass:"aioseo-description how-to"},[t("a",{staticClass:"no-underline",attrs:{href:e.$links.getDocUrl("facebookAdminId"),target:"_blank"}},[t("svg-book")],1),t("a",{attrs:{href:e.$links.getDocUrl("facebookAdminId"),target:"_blank"}},[e._v(" "+e._s(e.strings.howToGetAdminId)+" ")])])]},proxy:!0}],null,!1,3444247401)}),t("core-settings-row",{attrs:{name:e.strings.facebookAppId,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.facebook.advanced.appId,callback:function(o){e.$set(e.options.social.facebook.advanced,"appId",o)},expression:"options.social.facebook.advanced.appId"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.facebookAppIdDescription)+" ")]),t("div",{staticClass:"aioseo-description how-to"},[t("a",{staticClass:"no-underline",attrs:{href:e.$links.getDocUrl("facebookAppId"),target:"_blank"}},[t("svg-book")],1),t("a",{attrs:{href:e.$links.getDocUrl("facebookAppId"),target:"_blank"}},[e._v(" "+e._s(e.strings.howToGetAppId)+" ")])])]},proxy:!0}],null,!1,1473509127)}),t("core-settings-row",{attrs:{name:e.strings.facebookAuthorUrl,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{attrs:{size:"medium"},model:{value:e.options.social.facebook.advanced.authorUrl,callback:function(o){e.$set(e.options.social.facebook.advanced,"authorUrl",o)},expression:"options.social.facebook.advanced.authorUrl"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.facebookAuthorUrlDescription)+" ")]),t("div",{staticClass:"aioseo-description how-to"},[t("a",{staticClass:"no-underline",attrs:{href:e.$links.getDocUrl("facebookAuthorUrl"),target:"_blank"}},[t("svg-book")],1),t("a",{attrs:{href:e.$links.getDocUrl("facebookAuthorUrl"),target:"_blank"}},[e._v(" "+e._s(e.strings.howToGetAuthorUrl)+" ")])])]},proxy:!0}],null,!1,1382072789)}),t("core-settings-row",{attrs:{name:e.strings.generateArticleTags,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"generateArticleTags",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.facebook.advanced.generateArticleTags,callback:function(o){e.$set(e.options.social.facebook.advanced,"generateArticleTags",o)},expression:"options.social.facebook.advanced.generateArticleTags"}})]},proxy:!0}],null,!1,1394259835)}),e.options.social.facebook.advanced.generateArticleTags?t("core-settings-row",{attrs:{name:e.strings.useKeywordsInTags,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useKeywordsInTags",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.facebook.advanced.useKeywordsInTags,callback:function(o){e.$set(e.options.social.facebook.advanced,"useKeywordsInTags",o)},expression:"options.social.facebook.advanced.useKeywordsInTags"}})]},proxy:!0}],null,!1,1270941531)}):e._e(),e.options.social.facebook.advanced.generateArticleTags?t("core-settings-row",{attrs:{name:e.strings.useCategoriesInTags,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"useCategoriesInTags",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.facebook.advanced.useCategoriesInTags,callback:function(o){e.$set(e.options.social.facebook.advanced,"useCategoriesInTags",o)},expression:"options.social.facebook.advanced.useCategoriesInTags"}})]},proxy:!0}],null,!1,2964773339)}):e._e(),e.options.social.facebook.advanced.generateArticleTags?t("core-settings-row",{attrs:{name:e.strings.usePostTagsInTags,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"usePostTagsInTags",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.social.facebook.advanced.usePostTagsInTags,callback:function(o){e.$set(e.options.social.facebook.advanced,"usePostTagsInTags",o)},expression:"options.social.facebook.advanced.usePostTagsInTags"}})]},proxy:!0}],null,!1,1056069563)}):e._e()],1):e._e()],1)},F=[];const G={components:{BaseImg:T,BaseRadioToggle:I,CoreAlert:S,CoreCard:P,CoreFacebookPreview:C,CoreHtmlTagsEditor:x,CoreSettingsRow:A,SvgBook:w,SvgCirclePlus:O,TableColumn:L,TableRow:U},mixins:[_,h,b,k],data(){return{siteNameCount:0,titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{generalFacebookSettings:this.$t.__("General Facebook Settings",this.$td),description:this.$t.__("Enable this feature if you want Facebook and other social media to display a preview with images and a text excerpt when a link to your site is shared.",this.$td),enableOpenGraph:this.$t.__("Enable Open Graph Markup",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultFacebookImagePosts:this.$t.__("Default Post Facebook Image",this.$td),defaultFacebookImageTerms:this.$t.__("Default Term Facebook Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 200px x 200px, ideal ratio 1.91:1, 8MB max. (eg: 1640px x 856px or 3280px x 1712px for retina screens)",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),exampleSiteTitle:this.$t.__("The Title of the Page or Site you are Sharing",this.$td),exampleSiteDescription:this.$t.sprintf(this.$t.__("This is what your page configured with %1$s will look like when shared via Facebook. The site title and description will be automatically added.",this.$td),"AIOSEO"),homePageImage:this.$t.__("Image",this.$td),siteName:this.$t.__("Site Name",this.$td),homePageTitle:this.$t.__("Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddSiteName:this.$t.__("Click on the tags below to insert variables into your site name.",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),remove:this.$t.__("Remove",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),facebookAdminId:this.$t.__("Facebook Admin ID",this.$td),facebookAppId:this.$t.__("Facebook App ID",this.$td),facebookAuthorUrl:this.$t.__("Facebook Author URL",this.$td),facebookAdminIdDescription:this.$t.__("Enter your Facebook Admin ID here. You can enter multiple Facebook Admin IDs by separating them with a comma.",this.$td),facebookAppIdDescription:this.$t.__("The Facebook App ID of the site's app. In order to use Facebook Insights, you must add the App ID to your page. Insights lets you view analytics for traffic to your site from Facebook. Find the App ID in your App Dashboard.",this.$td),facebookAuthorUrlDescription:this.$t.__("Will be overriden if the Facebook author URL is present in the individual User Profile.",this.$td),howToGetAdminId:this.$t.__("How to get your Facebook Admin ID",this.$td),howToGetAppId:this.$t.__("How to get your Facebook App ID",this.$td),howToGetAuthorUrl:this.$t.__("How to get your Facebook Author URL",this.$td),showFacebookAuthor:this.$t.__("Show Facebook Author",this.$td),postTypeObjectTypes:this.$t.__("Default Post Type Object Types",this.$td),taxonomyObjectTypes:this.$t.__("Default Taxonomy Object Types",this.$td),taxonomyObjectTypesUpsell:this.$t.sprintf(this.$t.__("Default Taxonomy Object Types are only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-taxonomy-object-types",!0)),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is only available for licensed %1$s users. %2$s",this.$td),"<strong>AIOSEO Pro</strong>",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-soruce",!0)),generateArticleTags:this.$t.__("Automatically Generate Article Tags",this.$td),useKeywordsInTags:this.$t.__("Use Keywords in Article Tags",this.$td),useCategoriesInTags:this.$t.__("Use Categories in Article Tags",this.$td),usePostTagsInTags:this.$t.__("Use Post Tags in Article Tags",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta and image.",this.$td),`<a href="${this.$aioseo.urls.staticHomePage}">`,"</a>"),objectType:this.$t.__("Object Type",this.$td)}}},computed:c(n(n({},v(["isUnlicensed"])),y(["options","dynamicOptions"])),{objectTypeOptions(){return this.$constants.OG_TYPE_OPTIONS}}),methods:{getObjectTypeOptions(e){let s=null;return this.objectTypeOptions.forEach(t=>{const o=t.options.find(a=>a.value===e);o&&(s=o)}),s}}},u={};var H=$(G,D,F,!1,j,null,null,null);function j(e){for(let s in u)this[s]=u[s]}var _e=function(){return H.exports}();export{_e as default};