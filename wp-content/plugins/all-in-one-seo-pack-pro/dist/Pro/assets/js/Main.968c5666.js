var g=Object.defineProperty,_=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var c=(t,o,e)=>o in t?g(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,l=(t,o)=>{for(var e in o||(o={}))b.call(o,e)&&c(t,e,o[e]);if(r)for(var e of r(o))v.call(o,e)&&c(t,e,o[e]);return t},u=(t,o)=>_(t,f(o));import A from"./BadBotBlocker.318ef9c6.js";import{C as $}from"./Index.1c04c240.js";import y from"./DatabaseTools.f68d6e1d.js";import{C as k}from"./Index.05a01367.js";import{C as w}from"./Card.b87ede7d.js";import{C as D}from"./Tabs.17f5a283.js";import{C as T}from"./Modal.ff6affc5.js";import{C}from"./SettingsRow.eb71f07b.js";import{B as M}from"./Checkbox.5873a8d2.js";import{G as S,a as x}from"./Row.13b6f3f1.js";import{n as a}from"./vueComponentNormalizer.87056a83.js";import{S as L}from"./index.cd641513.js";import{d as O}from"./index.63323e13.js";import R from"./HtaccessEditor.694040f9.js";import B from"./ImportExport.744173e0.js";import E from"./RobotsEditor.fe616111.js";import Y from"./SystemStatus.2aba5fe9.js";import"./Textarea.d161fc2e.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.40d5dc79.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";/* empty css             */import"./params.bea1a08d.js";import"./ToolsSettings.9a525564.js";import"./helpers.d992cd63.js";import"./cleanForSlug.6eecf7c2.js";import"./Header.edb8b75f.js";import"./LicenseKeyBar.6284760e.js";import"./LogoGear.0c3dd5e3.js";import"./AnimatedNumber.b6059bfd.js";import"./Logo.1a5e022a.js";import"./Support.b1f25bbd.js";import"./Close.5e7bcb70.js";import"./Exclamation.356738ce.js";import"./Url.781a1d48.js";import"./Gear.c974e953.js";import"./Checkmark.e7547654.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Editor.3ef46c7b.js";import"./Plus.a9b9ba75.js";import"./History.99f81129.js";import"./Refresh.c697ed05.js";import"./Trash.214b5744.js";import"./Upload.7be8476b.js";import"./Download.bc45fb83.js";import"./Radio.99a9886d.js";import"./External.8868c638.js";import"./Copy.a07db25e.js";import"./Row.b5e5f12f.js";var I=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"aioseo-deprecated-options"},[e("grid-row",{staticClass:"settings"},t._l(t.$aioseo.deprecatedOptions,function(s,i){return e("grid-column",{key:i,attrs:{xl:"6",sm:"12"}},[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options[s.value],callback:function(n){t.$set(t.options,s.value,n)},expression:"options[option.value]"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1),e("br"),e("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:function(s){return t.$emit("update",t.options)}}},[t._v(" "+t._s(t.strings.updateOptions)+" ")]),e("br"),e("br")],1)},P=[];const U={components:{BaseCheckbox:M,GridColumn:S,GridRow:x},props:{loading:Boolean},data(){return{options:{},strings:{updateOptions:this.$t.__("Update Options",this.$td)}}},mounted(){this.$aioseo.deprecatedOptions.forEach(t=>{t.enabled&&this.$set(this.options,t.value,!0)})}},d={};var j=a(U,I,P,!1,z,null,null,null);function z(t){for(let o in d)this[o]=d[o]}var H=function(){return j.exports}(),K=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"aioseo-tools-debug"},[e("core-card",{attrs:{slug:"debug","header-text":t.strings.cardLabel}},[e("core-alert",{attrs:{type:"yellow"}},[e("div",[t._v(t._s(t.strings.alertWarning))]),e("div",{domProps:{innerHTML:t._s(t.alertLink)}})]),e("core-main-tabs",{key:t.tabsKey,attrs:{internal:"",tabs:t.tabs,active:t.activeTab,showSaveButton:!1},on:{changed:function(s){return t.activeTab=s}}}),t._l(t.activeTabObject.actions,function(s,i){return e("core-settings-row",{key:t.activeTab+i,attrs:{name:s.label,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s.component?[e(s.component,{tag:"component",attrs:{loading:t.doingAction[s.slug]},on:{update:function(n){return t.maybeDoAction(s,n)}}})]:e("base-button",{key:t.doingActionKey,attrs:{type:"blue",size:"medium",loading:t.doingAction[s.slug]},on:{click:function(n){return t.maybeDoAction(s)}}},[t._v(" "+t._s(t.strings.buttonLabel)+" ")]),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.shortDescription)}}),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.longDescription)}})]},proxy:!0}],null,!0)})}),t.showAreYouSureModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(s){s.stopPropagation(),t.showAreYouSureModal=!1}}},[e("SvgClose",{on:{click:function(s){t.showAreYouSureModal=!1}}})],1),e("h3",[t._v(t._s(t.areYouSureTitle))]),e("div",{staticClass:"description",domProps:{innerHTML:t._s(t.strings.cannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.doAction}},[t._v(" "+t._s(t.strings.yesDoAction)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(s){t.showAreYouSureModal=!1}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,564367180)}):t._e()],2)],1)},V=[];const F={props:{extraActions:{type:Array,required:!1}},components:{CoreAlert:k,CoreCard:w,CoreMainTabs:D,CoreModal:T,CoreSettingsRow:C,DeprecatedOptions:H,SvgClose:L},data(){return{tabsKey:0,doingActionKey:0,activeTab:"general",currentAction:"",showAreYouSureModal:!1,doingAction:[],strings:{cardLabel:"Debug",selectLabel:"Select a Debug Action:",buttonLabel:"Run Action",alertWarning:"Before you run any action, please make sure that you have fully read the description and understand the consequences as these cannot be reverted.",cannotBeUndone:"This action cannot be undone.",yesDoAction:"Yes, run this action",noChangedMind:"No, I changed my mind"},alertLink:this.$links.getPlainLink("Click here to open to the Scheduled Actions panel",this.$aioseo.urls.admin.scheduledActions,!0)}},methods:u(l({},O(["doTask"])),{isLoading(t){return!!this.doingAction[t.slug]},getSelectedActionObject(t){let o=null;return this.actions.forEach(e=>{const s=e.options.find(i=>i.value===t);s&&(o=s)}),o},maybeDoAction(t,o){if(this.currentAction=t,t.showModal){this.showAreYouSureModal=!0;return}this.doAction(o)},doAction(t){this.doingAction[this.currentAction.slug]=!0,this.showAreYouSureModal=!1,this.doingActionKey++,this.doTask({action:this.currentAction.slug,data:t}).then(()=>{console.log(`Action "${this.currentAction.label}" has been completed.`)}).catch(o=>{console.error(`Action "${this.currentAction.label}" could not be completed: `,o)}).finally(()=>{this.doingAction[this.currentAction.slug]=!1,this.doingActionKey++})}}),computed:{areYouSureTitle(){return`Are you sure you want to run the "${this.currentAction.label}" action?`},tabs(){const t=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions);return[{slug:"general",name:"General",actions:[{label:"Clear Cache",slug:"clear-cache",shortDescription:"This action deletes all records of the <code>aioseo_cache</code> table in the database.",longDescription:"",showModal:!1},{label:"Clear Plugin Updates Transient",slug:"clear-plugin-updates-transient",shortDescription:"This action clears the plugin updates transient, which forces WordPress Core to check for plugin updates.",longDescription:"",showModal:!1},{label:"Readd Capabilities",slug:"readd-capabilities",shortDescription:"This action will readd our capabilities (access permissions) for all users.",longDescription:"",showModal:!1},{label:"Reset Data",slug:"reset-data",shortDescription:"This action will <strong>delete</strong> all our custom tables and options.",longDescription:"",showModal:!0}]},{slug:"sitemap",name:"Sitemap",actions:[{label:"Clear Image Data",slug:"clear-image-data",shortDescription:"This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the image scan, go to %1$s and run the <code>aioseo_image_sitemap_scan</code> action.",t),showModal:!1}]},{slug:"migrations",name:"Migrations",actions:[{label:"Rerun V4+ Migrations",slug:"rerun-migrations",shortDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration.",longDescription:"",showModal:!0},{label:"Rerun V3 Migration",slug:"restart-v3-migration",shortDescription:"This action restarts the migration from V3 to V4.",longDescription:this.$t.sprintf("All settings will be migrated immediately. However, the post/term meta needs to be migrated via a routine which runs in batches via Action Scheduler. To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta</code> action.",t),showModal:!0}]},{slug:"old-issues",name:"Old Issues",actions:[{label:"Remove Duplicates",slug:"remove-duplicates",shortDescription:"This action will delete any duplicate records that are found in the <code>aioseo_posts</code> and <code>aioseo_terms</code> tables.",longDescription:"",showModal:!1},{label:"Unescape Data",slug:"unescape-data",shortDescription:"This action will clean <code>aioseo_posts</code> and <code>aioseo_term</code> records whose data is corrupted.",longDescription:this.$t.sprintf("The action will trigger a routine which runs in batches via Action Scheduler. It may take some time for this routine to complete, To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",t),showModal:!1}]},{slug:"deprecated-options",name:"Deprecated Options",actions:[{label:"Deprecated Options",slug:"deprecated-options",shortDescription:"Enable or disable any options that have been deprecated in AIOSEO.",longDescription:"<strong>These options are not guaranteed to work and all support has been dropped.</strong>",showModal:!1,component:"deprecated-options"}]}]},activeTabObject(){return this.tabs.find(t=>t.slug===this.activeTab)}},beforeMount(){var t;!((t=this.extraActions)!=null&&t.length)||this.extraActions.forEach(o=>{const e=this.tabs.findIndex(s=>s.slug.toLowerCase()===o.slug.toLowerCase());if(e!==-1){this.tabs[e].actions=this.tabs[e].actions.concat(o.actions);return}this.tabs.push(o)})}},p={};var G=a(F,K,V,!1,N,null,null,null);function N(t){for(let o in p)this[o]=p[o]}var W=function(){return G.exports}(),q=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("debug",{attrs:{extraActions:t.extraActions}})},J=[];const Q={components:{Debug:W},computed:{extraActions(){const t=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions),o=this.$aioseo.addons.find(i=>i.sku==="aioseo-video-sitemap"),e=this.$aioseo.addons.find(i=>i.sku==="aioseo-link-assistant"),s=[];return o.isActive&&s.push({slug:"sitemap",actions:[{label:"Clear Video Data",slug:"clear-video-data",shortDescription:"This action removes all video data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the video scan, go to %1$s and run the <code>aioseo_video_sitemap_scan</code> action.",t),showModal:!1}]}),e.isActive&&s.push({slug:"link-assistant",name:"Link Assistant",actions:[{label:"Clear Data",slug:"link-assistant-clear-data",shortDescription:"This action removes all Link Assistant data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("The various Link Assistant scans can be sped up through the %1$s",t),showModal:!0},{label:"Clear Links",slug:"link-assistant-clear-links",shortDescription:"This action removes all link data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the links scan, go to %1$s and run the <code>aioseo_link_assistant_links_scan</code> action.",t),showModal:!0},{label:"Clear Suggestions",slug:"link-assistant-clear-suggestions",shortDescription:"This action removes all link suggestion data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the links scan, go to %1$s and run the <code>aioseo_link_assistant_link_suggestions_scan</code> action.",t),showModal:!0},{label:"Undismiss Suggestions",slug:"link-assistant-undismiss-suggestions",shortDescription:"This action removes the dismissed state from all suggestions, which makes them appear in the UI again.",longDescription:this.$t.sprintf("To speed up the video scan, go to %1$s and run the <code>aioseo_video_sitemap_scan</code> action.",t),showModal:!1}]}),s}}},h={};var X=a(Q,q,J,!1,Z,null,null,null);function Z(t){for(let o in h)this[o]=h[o]}var tt=function(){return X.exports}(),et=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("core-main",{attrs:{"page-name":t.strings.pageName,"show-save-button":t.showSaveButton}},[e(t.$route.name,{tag:"component"})],1)},ot=[];const st={components:{BadBotBlocker:A,CoreMain:$,DatabaseTools:y,Debug:tt,HtaccessEditor:R,ImportExport:B,RobotsEditor:E,SystemStatus:Y},data(){return{strings:{pageName:this.$t.__("Tools",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="system-status"&&this.$route.name!=="import-export"&&this.$route.name!=="database-tools"&&this.$route.name!=="debug"}}},m={};var it=a(st,et,ot,!1,nt,null,null,null);function nt(t){for(let o in m)this[o]=m[o]}var ce=function(){return it.exports}();export{ce as default};