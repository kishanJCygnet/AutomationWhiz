import{d,b as m}from"./index.670b7e80.js";import{c as $,b as u}from"./ToolsSettings.d7505a2f.js";import"./helpers.1eef9d6b.js";import{n as a}from"./vueComponentNormalizer.a77505d6.js";import{C as g}from"./Card.571f0099.js";import{B as f}from"./Checkbox.36e2c6ae.js";import{C as b}from"./Index.66ae07a9.js";import{C as v}from"./Modal.354eb07f.js";import{C as i}from"./SettingsRow.038ea1b7.js";import{G as k,a as S}from"./Row.62bf82fb.js";import{S as L}from"./index.1a8da5ff.js";import{S as y}from"./Checkmark.dc905798.js";import{C as B}from"./Blur.17e6ffab.js";import{C}from"./Index.88326aa1.js";import"./default-i18n.11a38481.js";import"./isArrayLikeObject.44af21ce.js";import"./cleanForSlug.ba4852e5.js";import"./constants.5371d109.js";import"./Tooltip.bd71695e.js";import"./_commonjsHelpers.10c44588.js";import"./QuestionMark.ba3fc27e.js";import"./Slide.b9a2da7a.js";import"./client.f3edd6a0.js";var w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-core-reset-settings"},[e("core-settings-row",{staticClass:"no-border",attrs:{name:t.strings.selectSettings},scopedSlots:t._u([{key:"content",fn:function(){return[t.showSuccess?e("core-alert",{staticClass:"reset-success",attrs:{type:"green"}},[t._v(" "+t._s(t.strings.resetSuccess)+" ")]):t._e(),e("div",{staticClass:"reset-settings"},[t._v(" "+t._s(t.strings.selectSettingsToReset)+" "),e("br"),e("br"),e("grid-row",{staticClass:"settings"},[e("grid-column",[e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.options.all,callback:function(o){t.$set(t.options,"all",o)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.toolsSettings,function(o,h){return e("grid-column",{key:h,attrs:{xl:"3",md:"4",sm:"6"}},[t.options.all?t._e():e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.options[o.value],callback:function(p){t.$set(t.options,o.value,p)},expression:"options[setting.value]"}},[t._v(" "+t._s(o.label)+" ")]),o.value!=="all"&&t.options.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(o.label)+" ")]):t._e()],1)})],2),e("base-button",{attrs:{type:"gray",size:"medium",disabled:t.canReset},on:{click:function(o){t.showModal=!0}}},[t._v(" "+t._s(t.strings.resetSelectedSettings)+" ")])],1)]},proxy:!0}])}),t.showModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(o){o.stopPropagation(),t.showModal=!1}}},[e("svg-close",{on:{click:function(o){t.showModal=!1}}})],1),e("h3",[t._v(t._s(t.strings.areYouSureReset))]),e("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.strings.actionCannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processResetSettings}},[t._v(" "+t._s(t.strings.yesIHaveBackup)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(o){t.showModal=!1}}},[t._v(" "+t._s(t.strings.noBackup)+" ")])],1)]},proxy:!0}],null,!1,2298756748)}):t._e()],1)},x=[];const z={components:{BaseCheckbox:f,CoreAlert:b,CoreModal:v,CoreSettingsRow:i,GridColumn:k,GridRow:S,SvgClose:L},mixins:[$],props:{site:Object},data(){return{showSuccess:!1,showModal:!1,loading:!1,options:{},strings:{selectSettings:this.$t.__("Select Settings",this.$td),selectSettingsToReset:this.$t.__("Select settings that you would like to reset:",this.$td),resetSelectedSettings:this.$t.__("Reset Selected Settings to Default",this.$td),resetSuccess:this.$t.__("Your settings have been reset successfully!",this.$td),areYouSureReset:this.$t.__("Are you sure you want to reset the selected settings to default?",this.$td),actionCannotBeUndone:this.$t.sprintf(this.$t.__("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",this.$td),"<strong>","</strong>"),yesIHaveBackup:this.$t.__("Yes, I have a backup and want to reset the settings",this.$td),noBackup:this.$t.__("No, I need to make a backup",this.$td),allSettings:this.$t.sprintf(this.$t.__("All %1$s Settings",this.$td),"AIOSEO")}}},computed:{canReset(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),!t.some(s=>s)}},methods:{...d(["resetSettings"]),processResetSettings(){const t=[];this.options.all?this.toolsSettings.filter(s=>s.value!=="all").forEach(s=>{t.push(s.value)}):Object.keys(this.options).forEach(s=>{this.options[s]&&t.push(s)}),this.loading=!0,this.resetSettings({payload:t,siteId:this.site?this.site.blog_id:null}).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})}}},r={};var R=a(z,w,x,!1,T,null,null,null);function T(t){for(let s in r)this[s]=r[s]}const _=function(){return R.exports}();var A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-database-tools"},[e("core-card",{attrs:{slug:"databaseTools","header-text":t.strings.resetRestoreSettings}},[t.$aioseo.data.isNetworkAdmin?e("core-settings-row",{attrs:{name:t.strings.selectSite},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",options:t.sites},model:{value:t.site,callback:function(o){t.site=o},expression:"site"}})]},proxy:!0}],null,!1,375472348)}):t._e(),e("core-reset-settings",{attrs:{site:t.selectedSite}})],1),t.showLogs?e("core-card",{attrs:{slug:"databaseToolsLogs","header-text":t.strings.logs},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.logsTooltip)+" ")]},proxy:!0}],null,!1,3934548655)},[t.$aioseo.data.logSizes.logs404?e("core-settings-row",{attrs:{name:t.strings.logs404,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:t.loadingLog==="logs404",disabled:t.disabledLog("logs404")},on:{click:function(o){return t.processClearLog("logs404")}}},[t.disabledLog("logs404")?e("span",[e("svg-checkmark"),t._v(" "+t._s(t.strings.cleared)+" ")],1):t._e(),t.disabledLog("logs404")?t._e():e("span",[t._v(" "+t._s(t.strings.clear404Logs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:t.getSizeClass(t.$aioseo.data.logSizes.logs404.original)}),t._v(" "+t._s(t.$aioseo.data.logSizes.logs404.readable)+" ")])]},proxy:!0}],null,!1,1716809233)}):t._e(),t.$aioseo.data.logSizes.redirectLogs?e("core-settings-row",{attrs:{name:t.strings.redirectLogs,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:t.loadingLog==="redirectLogs",disabled:t.disabledLog("redirectLogs")},on:{click:function(o){return t.processClearLog("redirectLogs")}}},[t.disabledLog("redirectLogs")?e("span",[e("svg-checkmark"),t._v(" "+t._s(t.strings.cleared)+" ")],1):t._e(),t.disabledLog("redirectLogs")?t._e():e("span",[t._v(" "+t._s(t.strings.clearRedirectLogs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:t.getSizeClass(t.$aioseo.data.logSizes.redirectLogs.original)}),t._v(" "+t._s(t.$aioseo.data.logSizes.redirectLogs.readable)+" ")])]},proxy:!0}],null,!1,4167017073)}):t._e(),t.showBadBotBlockerLogs?e("core-settings-row",{attrs:{name:t.strings.badBotBlockerLogs,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{staticClass:"clear-log",attrs:{type:"gray",size:"medium",loading:t.loadingLog==="badBotBlockerLog",disabled:t.disabledLog("badBotBlockerLog")},on:{click:function(o){return t.processClearLog("badBotBlockerLog")}}},[t.disabledLog("badBotBlockerLog")?e("span",[e("svg-checkmark"),t._v(" "+t._s(t.strings.cleared)+" ")],1):t._e(),t.disabledLog("badBotBlockerLog")?t._e():e("span",[t._v(" "+t._s(t.strings.clearBadBotBlockerLogs)+" ")])]),e("div",{staticClass:"log-size"},[e("span",{staticClass:"size-dot",class:t.getSizeClass(t.$aioseo.data.logSizes.badBotBlockerLog.original)}),t._v(" "+t._s(t.$aioseo.data.logSizes.badBotBlockerLog.readable)+" ")])]},proxy:!0}],null,!1,649968002)}):t._e()],1):t._e()],1)},M=[];const U={mixins:[u],components:{CoreCard:g,CoreResetSettings:_,CoreSettingsRow:i,SvgCheckmark:y},data(){return{site:null,selectedSite:null,clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},loadingLog:null,strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td)}}},watch:{site(t){this.selectedSite=this.$aioseo.data.network.sites.sites.find(s=>this.getUniqueSiteId(s)===t.value)}},computed:{canReset(){const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),!t.some(s=>s)},showLogs(){return!this.$aioseo.data.isNetworkAdmin&&(this.showBadBotBlockerLogs||this.$aioseo.data.logSizes.redirectLogs||this.$aioseo.data.logSizes.logs404)},showBadBotBlockerLogs(){return window.aioseo.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")},sites(){return this.getSites.filter(t=>!t.parentDomain).map(t=>({value:this.getUniqueSiteId(t),label:`${t.domain}${t.path}`}))}},methods:{...d(["clearLog"]),getSizeClass(t){let s="green";return 262144e3<t?s="orange":1073741274<t&&(s="red"),s},processClearLog(t){this.loadingLog=t,this.clearLog(t).then(()=>{this.loadingLog=null,this.clearedLogs[t]=!0})},disabledLog(t){return!this.$aioseo.data.logSizes[t].original||this.clearedLogs[t]}}},n={};var D=a(U,A,M,!1,E,null,null,null);function E(t){for(let s in n)this[s]=n[s]}const N=function(){return D.exports}();var O=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-database-tools"},[e("core-card",{attrs:{slug:"databaseTools","header-text":t.strings.resetRestoreSettings}},[e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.selectSite},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{attrs:{size:"medium",value:{value:"",label:""},options:[]}})]},proxy:!0}])}),e("core-reset-settings")],1),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("network-tools","database-tools"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("network-tools","database-tools")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.networkDatabaseToolsDescription)+" ")]},proxy:!0}])})],1)],1)},I=[];const j={mixins:[u],components:{CoreBlur:B,CoreCard:g,CoreResetSettings:_,CoreSettingsRow:i,Cta:C},data(){return{strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td),ctaHeader:this.$t.sprintf(this.$t.__("This feature is not available in your current plan.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade Your Plan and Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},l={};var F=a(j,O,I,!1,P,null,null,null);function P(t){for(let s in l)this[s]=l[s]}const H=function(){return F.exports}();var Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[!t.$aioseo.data.isNetworkAdmin||!t.isUnlicensed&&t.$license.hasCoreFeature("tools","network-tools-database")?e("database-tools"):t._e(),t.$aioseo.data.isNetworkAdmin&&(t.isUnlicensed||!t.$license.hasCoreFeature("tools","network-tools-database"))?e("lite-database-tools"):t._e()],1)},G=[];const q={components:{DatabaseTools:N,LiteDatabaseTools:H},computed:{...m(["isUnlicensed"])}},c={};var J=a(q,Y,G,!1,K,null,null,null);function K(t){for(let s in c)this[s]=c[s]}const ft=function(){return J.exports}();export{ft as default};
