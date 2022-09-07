import{a as r}from"./index.9d9c8f08.js";import{C as c}from"./CommonSitemap.7f174e42.js";import d from"./AdditionalPages.e00fedaf.js";import{B as m}from"./Checkbox.93944087.js";import{B as u}from"./RadioToggle.18d51233.js";import{C as g}from"./index.693463c8.js";import{C as _}from"./Card.e152dae5.js";import{C as y}from"./ExcludePosts.e7f45436.js";import{C as h}from"./PostTypeOptions.ec66ca05.js";import"./ToolsSettings.0bc46799.js";import{J as S}from"./JsonValues.08065e69.js";import{n as l}from"./vueComponentNormalizer.58b0a173.js";import{T as $,a as v}from"./Row.4ab9b942.js";import{C as f}from"./SettingsRow.8a127375.js";import{S as x}from"./External.1af3387c.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.0e73c33c.js";import"./Datepicker.000dba29.js";import"./_commonjsHelpers.10c44588.js";import"./NewsChannel.e4dcf289.js";import"./Index.dbb5baac.js";import"./Exclamation.c0680526.js";import"./Table.0d145e69.js";import"./Blur.404d53ce.js";import"./Tooltip.a1ab116b.js";import"./Slide.8aaa5049.js";import"./client.d00863cc.js";import"./translations.3bc9d58c.js";import"./constants.01c2b898.js";import"./portal-vue.esm.272b3133.js";import"./Checkmark.627d69a4.js";import"./AddPlus.a5cc22bc.js";import"./HighlightToggle.af16c79b.js";import"./Radio.fa2678ef.js";import"./Row.dfea53f7.js";import"./attachments.4aad9de1.js";import"./cleanForSlug.61ba6611.js";var b=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"aioseo-priority-score"},[t("table-row",{staticClass:"header-row"},[t("table-column"),t("table-column",[e._v(" "+e._s(e.strings.priority)+" ")]),t("table-column",[e._v(" "+e._s(e.strings.frequency)+" ")])],1),e._l(e.filteredRows,function(s,p){return t("table-row",{key:p},[t("table-column",[e._v(" "+e._s(e.getLabel(s))+" ")]),t("table-column",[t("base-select",{attrs:{size:"medium",options:e.getPriorityOptions,value:e.getJsonValue(e.priority[s].priority)},on:{input:function(n){return e.priority[s].priority=e.setJsonValue(n)}}})],1),t("table-column",[t("base-select",{attrs:{size:"medium",options:e.getFrequencyOptions,value:e.getJsonValue(e.priority[s].frequency)},on:{input:function(n){return e.priority[s].frequency=e.setJsonValue(n)}}})],1)],1)})],2)},T=[];const L={components:{TableColumn:$,TableRow:v},mixins:[S],props:{priority:{type:Object,required:!0},rows:{type:Array,required:!0},labels:{type:Object,default(){return{}}}},data(){return{strings:{postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),priority:this.$t.__("Priority",this.$td),frequency:this.$t.__("Frequency",this.$td),homePage:this.$t.__("Home Page",this.$td),archive:this.$t.__("Date Archive Pages",this.$td),author:this.$t.__("Author Pages",this.$td)}}},computed:{...r(["options"]),getFrequencyOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$td),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},filteredRows(){let e=this.rows;return this.options.sitemap.general.date||(e=e.filter(i=>i!=="archive")),this.options.sitemap.general.author||(e=e.filter(i=>i!=="author")),e}},methods:{getLabel(e){return this.labels[e]||this.strings[e]}}},o={};var k=l(L,b,T,!1,P,null,null,null);function P(e){for(let i in o)this[i]=o[i]}const A=function(){return k.exports}();var I=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"aioseo-general-sitemap"},[t("core-card",{attrs:{slug:"generalSitemap","header-text":e.strings.general}},[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.description)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"xmlSitemaps",!0))}})]),t("core-settings-row",{attrs:{name:e.strings.enableSitemap},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:e.options.sitemap.general.enable,callback:function(s){e.$set(e.options.sitemap.general,"enable",s)},expression:"options.sitemap.general.enable"}})]},proxy:!0}])}),e.options.sitemap.general.enable?t("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"aioseo-sitemap-preview"},[t("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:e.$aioseo.urls.generalSitemapUrl,target:"_blank"}},[t("svg-external"),e._v(" "+e._s(e.strings.openSitemap)+" ")],1)],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.noIndexDisplayed)+" "),t("br"),e._v(" "+e._s(e.strings.doYou404)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})]),!e.options.deprecated.sitemap.general.advancedSettings.dynamic&&e.$aioseo.scheduledActions&&e.$aioseo.scheduledActions.sitemap&&e.$aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?t("core-alert",{staticClass:"static-regeneration-notice",attrs:{type:"blue"}},[e._v(" "+e._s(e.strings.warningStaticRegeneration)+" ")]):e._e()]},proxy:!0}],null,!1,511387707)}):e._e()],1),e.options.sitemap.general.enable?t("core-card",{attrs:{slug:"generalSitemapSettings","header-text":e.strings.sitemapSettings}},[t("core-settings-row",{attrs:{name:e.strings.enableSitemapIndexes},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.sitemap.general.indexes,callback:function(s){e.$set(e.options.sitemap.general,"indexes",s)},expression:"options.sitemap.general.indexes"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.sitemapIndexes)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0))}})])]},proxy:!0}],null,!1,3486551062)}),e.options.sitemap.general.indexes?t("core-settings-row",{attrs:{name:e.strings.linksPerSitemap},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-input",{staticClass:"aioseo-links-per-site",attrs:{type:"number",size:"medium",min:1,max:5e4},on:{keyup:e.validateLinksPerIndex},model:{value:e.options.sitemap.general.linksPerIndex,callback:function(s){e.$set(e.options.sitemap.general,"linksPerIndex",s)},expression:"options.sitemap.general.linksPerIndex"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.maxLinks)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0))}})]),e.options.sitemap.general.indexes&&1e3<e.options.sitemap.general.linksPerIndex?t("core-alert",{staticClass:"index-notice",attrs:{type:"yellow"}},[e._v(" "+e._s(e.strings.warningLinksPerSitemap)+" ")]):e._e()]},proxy:!0}],null,!1,3979538341)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.postTypes},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.sitemap.general.postTypes.all,callback:function(s){e.$set(e.options.sitemap.general.postTypes,"all",s)},expression:"options.sitemap.general.postTypes.all"}},[e._v(" "+e._s(e.strings.includeAllPostTypes)+" ")]),e.options.sitemap.general.postTypes.all?e._e():t("core-post-type-options",{attrs:{options:e.options.sitemap.general,type:"postTypes"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectPostTypes)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0))}})])]},proxy:!0}],null,!1,2521503221)}),t("core-settings-row",{attrs:{name:e.strings.taxonomies},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.sitemap.general.taxonomies.all,callback:function(s){e.$set(e.options.sitemap.general.taxonomies,"all",s)},expression:"options.sitemap.general.taxonomies.all"}},[e._v(" "+e._s(e.strings.includeAllTaxonomies)+" ")]),e.options.sitemap.general.taxonomies.all?e._e():t("core-post-type-options",{attrs:{options:e.options.sitemap.general,type:"taxonomies"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.selectTaxonomies)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypes",!0))}})])]},proxy:!0}],null,!1,3565937687)}),t("core-settings-row",{attrs:{name:e.strings.dateArchiveSitemap},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"dateArchiveSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.sitemap.general.date,callback:function(s){e.$set(e.options.sitemap.general,"date",s)},expression:"options.sitemap.general.date"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.includeDateArchives)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0))}})])]},proxy:!0}],null,!1,1322694291)}),t("core-settings-row",{attrs:{name:e.strings.authorSitemap},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"authorSitemap",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:e.options.sitemap.general.author,callback:function(s){e.$set(e.options.sitemap.general,"author",s)},expression:"options.sitemap.general.author"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.includeAuthorArchives)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"includeArchivePages",!0))}})])]},proxy:!0}],null,!1,3540883280)})],1):e._e(),t("AdditionalPages"),e.options.sitemap.general.enable?t("core-card",{attrs:{slug:"advancedSettings",toggles:e.options.sitemap.general.advancedSettings.enable},scopedSlots:e._u([{key:"header",fn:function(){return[t("base-toggle",{model:{value:e.options.sitemap.general.advancedSettings.enable,callback:function(s){e.$set(e.options.sitemap.general.advancedSettings,"enable",s)},expression:"options.sitemap.general.advancedSettings.enable"}}),t("span",[e._v(e._s(e.strings.advancedSettings))])]},proxy:!0}],null,!1,3529570185)},[t("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:e.strings.excludePostsPages},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-exclude-posts",{attrs:{options:e.options.sitemap.general.advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,4108396106)}),t("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:e.strings.excludeTerms},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-exclude-posts",{attrs:{options:e.options.sitemap.general.advancedSettings,type:"terms"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.excludeTermsDescription)+" ")])]},proxy:!0}],null,!1,4230911807)}),t("core-settings-row",{attrs:{name:e.strings.priorityScore,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("core-priority-score",{attrs:{priority:e.options.sitemap.general.advancedSettings.priority,rows:["homePage","archive","author"]}})]},proxy:!0}],null,!1,2987899981)}),t("core-settings-row",{attrs:{name:e.strings.priorityScorePostTypes,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:e.options.sitemap.general.advancedSettings.priority.postTypes.grouped,callback:function(s){e.$set(e.options.sitemap.general.advancedSettings.priority.postTypes,"grouped",s)},expression:"options.sitemap.general.advancedSettings.priority.postTypes.grouped"}},[e._v(" "+e._s(e.strings.grouped)+" ")]),e.options.sitemap.general.advancedSettings.priority.postTypes.grouped?t("core-priority-score",{attrs:{priority:e.options.sitemap.general.advancedSettings.priority,rows:["postTypes"]}}):e._e(),e.options.sitemap.general.advancedSettings.priority.postTypes.grouped?e._e():t("core-priority-score",{attrs:{priority:e.dynamicOptions.sitemap.priority.postTypes,rows:e.getPostTypeRows,labels:e.getPostTypeLabels}})]},proxy:!0}],null,!1,735964814)}),t("core-settings-row",{attrs:{name:e.strings.priorityScoreTaxonomies,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped,callback:function(s){e.$set(e.options.sitemap.general.advancedSettings.priority.taxonomies,"grouped",s)},expression:"options.sitemap.general.advancedSettings.priority.taxonomies.grouped"}},[e._v(" "+e._s(e.strings.grouped)+" ")]),e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?t("core-priority-score",{attrs:{priority:e.options.sitemap.general.advancedSettings.priority,rows:["taxonomies"]}}):e._e(),e.options.sitemap.general.advancedSettings.priority.taxonomies.grouped?e._e():t("core-priority-score",{attrs:{priority:e.dynamicOptions.sitemap.priority.taxonomies,rows:e.getTaxonomyRows,labels:e.getTaxonomyLabels}})]},proxy:!0}],null,!1,1892827148)}),e.internalOptions.internal.deprecatedOptions.includes("staticSitemap")?t("core-settings-row",{attrs:{name:e.strings.dynamicallyGenerate},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"dynamic",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.deprecated.sitemap.general.advancedSettings.dynamic,callback:function(s){e.$set(e.options.deprecated.sitemap.general.advancedSettings,"dynamic",s)},expression:"options.deprecated.sitemap.general.advancedSettings.dynamic"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.dynamicallyGenerateDescription)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerate",!0))}})])]},proxy:!0}],null,!1,1485784438)}):e._e(),t("core-settings-row",{attrs:{name:e.strings.excludeImages},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:"excludeImages",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.options.sitemap.general.advancedSettings.excludeImages,callback:function(s){e.$set(e.options.sitemap.general.advancedSettings,"excludeImages",s)},expression:"options.sitemap.general.advancedSettings.excludeImages"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.excludeImagesDescription)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"excludeImages",!0))}})])]},proxy:!0}],null,!1,3249768009)})],1):e._e()],1)},G=[];const w={mixins:[c],components:{AdditionalPages:d,BaseCheckbox:m,BaseRadioToggle:u,CoreAlert:g,CoreCard:_,CoreExcludePosts:y,CorePostTypeOptions:h,CorePriorityScore:A,CoreSettingsRow:f,SvgExternal:x},data(){return{pagePostOptions:[],strings:{general:this.$t.__("General Sitemap",this.$td),description:this.$t.sprintf(this.$t.__("An XML Sitemap is a list of all your content that search engines use when they crawl your site. This is an essential part of SEO because it contains some important pieces of information that search engines need when crawling your site. The XML Sitemap created by %1$s tells search engines where to find all of the content on your site.",this.$td),"All in One SEO"),enableSitemap:this.$t.__("Enable Sitemap",this.$td),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$td),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),openSitemap:this.$t.__("Open Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),automaticallyPingSearchEngines:this.$t.__("Automatically Ping Search Engines",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),dateArchiveSitemap:this.$t.__("Date Archive Sitemap",this.$td),includeDateArchives:this.$t.__("Include Date Archives in your sitemap.",this.$td),authorSitemap:this.$t.__("Author Sitemap",this.$td),includeAuthorArchives:this.$t.__("Include Author Archives in your sitemap.",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$td),priorityScore:this.$t.__("Priority Score",this.$td),grouped:this.$t.__("Grouped",this.$td),priorityScorePostTypes:this.$t.__("Post Type Priority Score",this.$td),priorityScoreTaxonomies:this.$t.__("Taxonomy Priority Score",this.$td),excludeImages:this.$t.__("Exclude Images",this.$td),excludeImagesDescription:this.$t.__("Exclude Images from your sitemap.",this.$td),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$td),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the XML Sitemap instead of using a static file.",this.$td),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$td),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$td)}}},computed:{...r(["options","dynamicOptions","internalOptions"]),getPostTypeRows(){return this.$aioseo.postData.postTypes.map(e=>e.name)},getPostTypeLabels(){const e={};return this.$aioseo.postData.postTypes.forEach(i=>{e[i.name]=i.label}),e},getTaxonomyRows(){return this.$aioseo.postData.taxonomies.map(e=>e.name)},getTaxonomyLabels(){const e={};return this.$aioseo.postData.taxonomies.forEach(i=>{e[i.name]=i.label}),e}}},a={};var O=l(w,I,G,!1,C,null,null,null);function C(e){for(let i in a)this[i]=a[i]}const he=function(){return O.exports}();export{he as default};
