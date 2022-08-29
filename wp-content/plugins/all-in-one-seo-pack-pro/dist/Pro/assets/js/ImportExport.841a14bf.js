import{a as C,d as n,b as E}from"./index.670b7e80.js";import{C as d}from"./Index.66ae07a9.js";import{C as l}from"./Card.571f0099.js";import{C as B}from"./Modal.354eb07f.js";import{C as c}from"./NetworkSiteSelector.161163c0.js";import{C as O}from"./Tooltip.bd71695e.js";import{S as A}from"./Plus.63317bcc.js";import{S as I}from"./index.1a8da5ff.js";import{S as D}from"./History.94a42161.js";import{S as R}from"./Refresh.ad0eeb54.js";import{S as T}from"./Trash.5bc42b4f.js";import{n as a}from"./vueComponentNormalizer.a77505d6.js";import{G as u,a as p}from"./Row.62bf82fb.js";import{c as M}from"./ToolsSettings.d7505a2f.js";import"./helpers.1eef9d6b.js";import{B as k}from"./Checkbox.36e2c6ae.js";import{S as P}from"./Upload.5ea11310.js";import{S as b}from"./Download.50cb51cf.js";import{C as F}from"./Blur.17e6ffab.js";import{C as U}from"./Index.88326aa1.js";import"./default-i18n.11a38481.js";import"./isArrayLikeObject.44af21ce.js";import"./QuestionMark.ba3fc27e.js";import"./Slide.b9a2da7a.js";import"./_commonjsHelpers.10c44588.js";import"./client.f3edd6a0.js";import"./constants.5371d109.js";import"./cleanForSlug.ba4852e5.js";import"./Checkmark.dc905798.js";var N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-card",{staticClass:"aioseo-backup-settings",attrs:{slug:"backupSettings",toggles:!1,"no-slide":"","header-text":t.strings.backupSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[e("svg-history")]},proxy:!0}])},[t.$aioseo.data.isNetworkAdmin?e("div",{staticClass:"aioseo-settings-row"},[e("div",{staticClass:"select-site"},[t._v(" "+t._s(t.strings.selectSite)+" ")]),e("core-network-site-selector",{on:{"selected-site":function(i){t.site=i}}})],1):t._e(),t.backupsDeleteSuccess?e("core-alert",{attrs:{type:"green"}},[t._v(" "+t._s(t.strings.backupSuccessfullyDeleted)+" ")]):t._e(),t.backupsRestoreSuccess?e("core-alert",{attrs:{type:"green"}},[t._v(" "+t._s(t.strings.backupSuccessfullyRestored)+" ")]):t._e(),t.getBackups.length?t._e():e("div",{staticClass:"aioseo-section-description"},[t._v(" "+t._s(t.strings.noBackups)+" ")]),t.getBackups.length&&!(t.$aioseo.data.isNetworkAdmin&&!t.site)?[e("div",{staticClass:"backups-table"},[e("div",{staticClass:"backups-rows"},t._l(t.getBackups,function(i,o){return e("div",{key:o,staticClass:"backup-row",class:{even:o%2===0}},[e("div",{staticClass:"backup-name",domProps:{innerHTML:t._s(t.getBackupName(i))}}),e("div",{staticClass:"backup-actions"},[e("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.restore)+" ")]},proxy:!0}],null,!0)},[e("svg-refresh",{nativeOn:{click:function(r){return t.maybeRestoreBackup(i)}}})],1),e("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.delete)+" ")]},proxy:!0}],null,!0)},[e("svg-trash",{nativeOn:{click:function(r){return t.maybeDeleteBackup(i)}}})],1)],1)])}),0)])]:t._e(),e("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading,disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},on:{click:t.processCreateBackup}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.createBackup)+" ")],1),t.showModal?e("core-modal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(i){i.stopPropagation(),t.showModal=!1}}},[e("svg-close",{on:{click:function(i){t.showModal=!1}}})],1),e("h3",[t._v(t._s(t.areYouSure))]),e("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.strings.actionCannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.processBackupAction}},[t._v(" "+t._s(t.iAmSure)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(i){t.showModal=!1}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,1131809547)}):t._e()],2)},z=[];const j={components:{CoreAlert:d,CoreCard:l,CoreModal:B,CoreNetworkSiteSelector:c,CoreTooltip:O,SvgCirclePlus:A,SvgClose:I,SvgHistory:D,SvgRefresh:R,SvgTrash:T},data(){return{site:null,timeout:null,backupToDelete:null,backupToRestore:null,backupsDeleteSuccess:!1,showModal:!1,backupsRestoreSuccess:!1,loading:!1,strings:{backupSettings:this.$t.__("Backup Settings",this.$td),areYouSureDeleteBackup:this.$t.__("Are you sure you want to delete this backup?",this.$td),areYouSureRestoreBackup:this.$t.__("Are you sure you want to restore this backup?",this.$td),yesDeleteBackup:this.$t.__("Yes, I want to delete this backup",this.$td),yesRestoreBackup:this.$t.__("Yes, I want to restore this backup",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td),actionCannotBeUndone:this.$t.__("This action cannot be undone.",this.$td),noBackups:this.$t.__("You have no saved backups.",this.$td),createBackup:this.$t.__("Create Backup",this.$td),restore:this.$t.__("Restore",this.$td),delete:this.$t.__("Delete",this.$td),backupSuccessfullyDeleted:this.$t.__("Success! The backup was deleted.",this.$td),backupSuccessfullyRestored:this.$t.__("Success! The backup was restored.",this.$td)}}},computed:{...C(["backups","networkBackups"]),getBackups(){return this.site?this.networkBackups[this.site.blog_id]||[]:this.backups},areYouSure(){return this.backupToDelete?this.strings.areYouSureDeleteBackup:this.strings.areYouSureRestoreBackup},iAmSure(){return this.backupToDelete?this.strings.yesDeleteBackup:this.strings.yesRestoreBackup}},methods:{...n(["createBackup","deleteBackup","restoreBackup"]),processCreateBackup(){this.loading=!0,this.createBackup({siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1})},maybeDeleteBackup(t){this.showModal=!0,this.backupToDelete=t},maybeRestoreBackup(t){this.showModal=!0,this.backupToRestore=t},processDeleteBackup(){this.loading=!0,this.deleteBackup({backup:this.backupToDelete,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToDelete=null,this.backupsDeleteSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},processRestoreBackup(){this.loading=!0,this.restoreBackup({backup:this.backupToRestore,siteId:this.site?this.site.blog_id:null}).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToRestore=null,this.backupsRestoreSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},getBackupName(t){return this.$t.sprintf(this.$t.__("%1$s at %2$s",this.$td),"<strong>"+this.$moment(t*1e3).tz(this.$moment.tz.guess()).format("MMMM D, YYYY")+"</strong>","<strong>"+this.$moment(t*1e3).tz(this.$moment.tz.guess()).format("h:mmA z")+"</strong>")},processBackupAction(){return this.backupToDelete?this.processDeleteBackup():this.processRestoreBackup()}}},_={};var Y=a(j,N,z,!1,L,null,null,null);function L(t){for(let s in _)this[s]=_[s]}const S=function(){return Y.exports}();var q=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-card",{staticClass:"aioseo-export-settings",attrs:{slug:"exportSettings",toggles:!1,"no-slide":"","header-text":t.strings.exportSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[e("svg-upload")]},proxy:!0}])},[t.$aioseo.data.isNetworkAdmin?e("div",{staticClass:"aioseo-settings-row"},[e("div",{staticClass:"select-site"},[t._v(" "+t._s(t.strings.selectSite)+" ")]),e("core-network-site-selector",{on:{"selected-site":function(i){t.site=i}}})],1):t._e(),e("div",{staticClass:"export-settings",class:{"aioseo-settings-row":t.canExportPostOptions}},[e("grid-row",[e("grid-column",{staticClass:"export-all"},[e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.options.all,callback:function(i){t.$set(t.options,"all",i)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.toolsSettings,function(i,o){return e("grid-column",{key:o,attrs:{sm:"6"}},[t.options.all?t._e():e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.options[i.value],callback:function(r){t.$set(t.options,i.value,r)},expression:"options[setting.value]"}},[t._v(" "+t._s(i.label)+" ")]),i.value!=="all"&&t.options.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2)],1),t.canExportPostOptions?e("div",{staticClass:"export-post-types"},[e("grid-row",[e("grid-column",{staticClass:"export-all"},[e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.postOptions.all,callback:function(i){t.$set(t.postOptions,"all",i)},expression:"postOptions.all"}},[t._v(" "+t._s(t.strings.allPostTypes)+" ")])],1),t._l(t.$aioseo.postData.postTypes,function(i,o){return e("grid-column",{key:o,attrs:{sm:"6"}},[t.postOptions.all?t._e():e("base-checkbox",{attrs:{size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},model:{value:t.postOptions[i.name],callback:function(r){t.$set(t.postOptions,i.name,r)},expression:"postOptions[postType.name]"}},[t._v(" "+t._s(i.label)+" ")]),i.name!=="all"&&t.postOptions.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2)],1):t._e(),e("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.canExport,loading:t.loading},on:{click:t.processExportSettings}},[t._v(" "+t._s(t.strings.exportSettings)+" ")])],1)},W=[];const H={components:{BaseCheckbox:k,CoreCard:l,CoreNetworkSiteSelector:c,GridColumn:u,GridRow:p,SvgUpload:P},mixins:[M],data(){return{site:null,options:{},postOptions:{},loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),exportSettings:this.$t.__("Export Settings",this.$td),allSettings:this.$t.__("Export All Settings",this.$td),allPostTypes:this.$t.__("Export All Post Types",this.$td)}}},computed:{canExport(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),Object.keys(this.postOptions).forEach(s=>{t.push(this.postOptions[s])}),t.some(s=>s)},canExportPostOptions(){return["aioseo_page_general_settings","aioseo_page_advanced_settings","aioseo_page_schema_settings","aioseo_page_social_settings","aioseo_page_local_seo_settings"].some(t=>this.$allowed(t))}},methods:{...n(["exportSettings"]),processExportSettings(){const t=[];this.options.all?(this.$isPro&&t.push("general"),t.push("internal"),this.toolsSettings.filter(i=>i.value!=="all").forEach(i=>{t.push(i.value)})):Object.keys(this.options).forEach(i=>{this.options[i]&&t.push(i)});const s=[];this.postOptions.all?this.$aioseo.postData.postTypes.forEach(i=>{s.push(i.name)}):Object.keys(this.postOptions).forEach(i=>{this.postOptions[i]&&s.push(i)});const e=this.site?`${this.site.domain}${this.site.path.replace("/","-")}`:"";this.loading=!0,this.exportSettings({settings:t,postOptions:s,siteId:this.site?this.site.blog_id:null}).then(i=>{this.loading=!1,this.options={},this.postOptions={};const o=new Blob([JSON.stringify(i.body.settings)],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(o),r.download=`aioseo-export-settings-${e}${this.$moment().format("YYYY-MM-DD")}.json`,r.click(),URL.revokeObjectURL(r.href)})}}},h={};var G=a(H,q,W,!1,V,null,null,null);function V(t){for(let s in h)this[s]=h[s]}const y=function(){return G.exports}();var J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-card",{staticClass:"aioseo-import-aioseo",attrs:{slug:"importAioseoSettings",toggles:!1,"no-slide":"","header-text":t.strings.importRestoreAioseoSettings},scopedSlots:t._u([{key:"header-icon",fn:function(){return[e("svg-download")]},proxy:!0}])},[t.$aioseo.data.isNetworkAdmin?e("div",{staticClass:"aioseo-settings-row"},[e("div",{staticClass:"select-site"},[t._v(" "+t._s(t.strings.selectSite)+" ")]),e("core-network-site-selector",{on:{"selected-site":function(i){t.site=i}}})],1):t._e(),t.uploadError?e("core-alert",{staticClass:"import-alert",attrs:{type:"red"}},[t._v(" "+t._s(t.uploadError)+" ")]):t._e(),t.filename&&t.filename.endsWith(".ini")?e("core-alert",{staticClass:"import-alert",attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.v3ImportWarning)+" ")]):t._e(),t.uploadSuccess?e("core-alert",{staticClass:"import-alert",attrs:{type:"green"}},[t._v(" "+t._s(t.strings.fileUploadedSuccessfully)+" ")]):t._e(),e("div",{staticClass:"file-upload"},[e("base-input",{class:{"aioseo-error":t.uploadError},attrs:{size:"medium",placeholder:t.strings.fileUploadPlaceholder,disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},on:{focus:t.triggerFileUpload},model:{value:t.filename,callback:function(i){t.filename=i},expression:"filename"}}),e("base-button",{attrs:{type:"black",size:"medium",disabled:t.$aioseo.data.isNetworkAdmin&&!t.site}},[t._v(" "+t._s(t.strings.chooseAFile)+" "),e("base-input",{ref:"file",attrs:{type:"file"},on:{click:t.reset,change:t.handleFileUpload},model:{value:t.inputFile,callback:function(i){t.inputFile=i},expression:"inputFile"}})],1)],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.fileUploadDescription)+" ")]),e("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.file||!t.importValidated,loading:t.loading},on:{click:t.submitFile}},[t._v(" "+t._s(t.strings.import)+" ")])],1)},K=[];const Q={components:{CoreAlert:d,CoreCard:l,CoreNetworkSiteSelector:c,SvgDownload:b},data(){return{site:null,inputFile:null,filename:null,file:null,uploadError:!1,uploadSuccess:!1,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importRestoreAioseoSettings:this.$t.sprintf(this.$t.__("Import / Restore %1$s Settings",this.$td),"AIOSEO"),fileUploadPlaceholder:this.$t.__("Import from a JSON or INI file...",this.$td),chooseAFile:this.$t.__("Choose a File",this.$td),fileUploadDescription:this.$t.__("Imported settings will overwrite existing settings and will not be merged.",this.$td),import:this.$t.__("Import",this.$td),jsonFileTypeRequired:this.$t.__("A JSON or INI file is required to import settings.",this.$td),fileUploadedSuccessfully:this.$t.__("Success! Your settings have been imported.",this.$td),fileUploadFailed:this.$t.__("There was an error importing your settings. Please make sure you are uploading the correct file or it is in the proper format.",this.$td),v3ImportWarning:this.$t.sprintf(this.$t.__("Please note that if you are importing post/term meta from %1$s v3.7.1 or below, this will only be successful if the post/term IDs of this site are identical to those of the source site.",this.$td),"AIOSEO")}}},computed:{importValidated(){return!(this.$aioseo.data.isNetworkAdmin&&!this.site||!this.file.type||!this.file.name||this.file.type!=="application/json"&&!this.file.name.endsWith(".ini"))}},methods:{...n(["uploadFile"]),reset(){this.uploadError=!1,this.filename=null,this.file=null,this.inputFile=null},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},submitFile(){this.loading=!0,this.uploadFile({file:this.file,filename:this.filename,siteId:this.site?this.site.blog_id:null}).then(()=>{this.reset(),this.uploadSuccess=!0,this.loading=!1}).catch(()=>{this.reset(),this.loading=!1,this.uploadError=this.strings.fileUploadFailed})},handleFileUpload(){this.reset(),this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="application/json"&&!this.file.name.endsWith(".ini")&&(this.uploadError=this.strings.jsonFileTypeRequired))}}},m={};var X=a(Q,J,K,!1,Z,null,null,null);function Z(t){for(let s in m)this[s]=m[s]}const x=function(){return X.exports}();var tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-card",{staticClass:"aioseo-import-others",attrs:{id:"aioseo-import-others",slug:"importOtherPlugins",toggles:!1,"no-slide":"","header-text":t.strings.importSettingsFromOtherPlugins},scopedSlots:t._u([{key:"header-icon",fn:function(){return[e("svg-download")]},proxy:!0}])},[t.$aioseo.data.isNetworkAdmin?e("div",{staticClass:"aioseo-settings-row"},[e("div",{staticClass:"select-site"},[t._v(" "+t._s(t.strings.selectSite)+" ")]),e("core-network-site-selector",{on:{"selected-site":function(i){t.site=i}}})],1):t._e(),e("div",{staticClass:"aioseo-section-description"},[t._v(" "+t._s(t.strings.importOthersDescription)+" ")]),t.importSuccess?e("core-alert",{staticClass:"import-success",attrs:{type:"green"}},[t._v(" "+t._s(t.importSuccessful)+" ")]):t._e(),t.importError?e("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[t._v(" "+t._s(t.importErrorMessage)+" ")]):t._e(),e("base-select",{attrs:{size:"medium",options:t.plugins,placeholder:t.strings.selectPlugin,disabled:t.$aioseo.data.isNetworkAdmin&&!t.site},scopedSlots:t._u([{key:"option",fn:function(i){var o=i.option;return[e("div",{staticClass:"import-plugin-label"},[e("span",{staticClass:"plugin-label"},[t._v(t._s(o.label))]),o.$isDisabled?e("span",{staticClass:"plugin-status"},[t._v(t._s(t.strings.notInstalled))]):t._e()])]}}]),model:{value:t.plugin,callback:function(i){t.plugin=i},expression:"plugin"}}),t.plugin?e("div",{staticClass:"import-settings"},[t.plugin.canImport?e("grid-row",[e("grid-column",[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.all,callback:function(i){t.$set(t.options,"all",i)},expression:"options.all"}},[t._v(" "+t._s(t.strings.allSettings)+" ")])],1),t._l(t.settings,function(i,o){return e("grid-column",{key:o,attrs:{sm:"6"}},[t.options.all?t._e():e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options[i.value],callback:function(r){t.$set(t.options,i.value,r)},expression:"options[setting.value]"}},[t._v(" "+t._s(i.label)+" ")]),i.value!=="all"&&t.options.all?e("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[t._v(" "+t._s(i.label)+" ")]):t._e()],1)})],2):t._e(),t.plugin.canImport?t._e():e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.invalidVersion(t.plugin))+" ")])],1):t._e(),e("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!t.plugin||!t.canImport,loading:t.loading},on:{click:t.processImportPlugin}},[t._v(" "+t._s(t.strings.import)+" ")])],1)},et=[];const st={components:{BaseCheckbox:k,CoreAlert:d,CoreCard:l,CoreNetworkSiteSelector:c,GridColumn:u,GridRow:p,SvgDownload:b},data(){return{site:null,importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{selectSite:this.$t.__("Select Site",this.$td),importSettingsFromOtherPlugins:this.$t.__("Import Settings From Other Plugins",this.$td),importOthersDescription:this.$t.sprintf(this.$t.__("Choose a plugin to import SEO data directly into %1$s.",this.$td),"AIOSEO"),selectPlugin:this.$t.__("Select a plugin...",this.$td),import:this.$t.__("Import",this.$td),allSettings:this.$t.__("All Settings",this.$td),notInstalled:this.$t.__("not installed",this.$td)}}},watch:{plugin(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{settings(){const t=[{value:"settings",label:this.$t.__("SEO Settings",this.$td)},{value:"postMeta",label:this.$t.__("Post Meta",this.$td)}];return this.$isPro&&t.push({value:"termMeta",label:this.$t.__("Term Meta",this.$td)}),t},plugins(){const t=[];return this.$aioseo.importers.forEach(s=>{t.push({value:s.slug,label:s.name,canImport:s.canImport,version:s.version,$isDisabled:!s.installed})}),t},canImport(){if(this.$aioseo.data.isNetworkAdmin&&!this.site)return!1;const t=[];return Object.keys(this.options).forEach(s=>{t.push(this.options[s])}),t.some(s=>s)},importSuccessful(){return this.$t.sprintf(this.$t.__("%1$s was successfully imported!",this.$td),this.plugin.label)},importErrorMessage(){return this.$t.sprintf(this.$t.__("An error occurred while importing %1$s. Please try again.",this.$td),this.plugin.label)}},methods:{...n(["importPlugins"]),processImportPlugin(){this.importSuccess=!1,this.importError=!1,this.loading=!0;const t=[];this.options.all?this.settings.filter(s=>s.value!=="all").forEach(s=>{t.push(s.value)}):Object.keys(this.options).forEach(s=>{this.options[s]&&t.push(s)}),this.importPlugins({plugins:[{plugin:this.plugin.value,settings:t}],siteId:this.site?this.site.blog_id:null}).then(()=>{this.loading=!1,this.importSuccess=!0,this.options={}}).catch(()=>{this.loading=!1,this.importError=!0,this.options={}})},invalidVersion(t){return this.$t.sprintf(this.$t.__("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",this.$td),t.label,t.version)}}},g={};var it=a(st,tt,et,!1,ot,null,null,null);function ot(t){for(let s in g)this[s]=g[s]}const w=function(){return it.exports}();var rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-import-export"},[e("grid-row",[e("grid-column",{attrs:{md:"6"}},[e("import-aioseo"),e("import-others")],1),e("grid-column",{attrs:{md:"6"}},[e("export-settings")],1)],1),e("grid-row",[e("grid-column",[e("backup-settings")],1)],1)],1)},at=[];const nt={components:{BackupSettings:S,GridColumn:u,GridRow:p,ExportSettings:y,ImportAioseo:x,ImportOthers:w}},f={};var lt=a(nt,rt,at,!1,ct,null,null,null);function ct(t){for(let s in f)this[s]=f[s]}const ut=function(){return lt.exports}();var pt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-import-export"},[e("core-blur",[e("grid-row",[e("grid-column",{attrs:{md:"6"}},[e("import-aioseo"),e("import-others")],1),e("grid-column",{attrs:{md:"6"}},[e("export-settings")],1)],1),e("grid-row",[e("grid-column",[e("backup-settings")],1)],1)],1),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("network-tools","import-export"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("network-tools","import-export")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.networkDatabaseToolsDescription)+" ")]},proxy:!0}])})],1)},dt=[];const _t={components:{BackupSettings:S,CoreBlur:F,Cta:U,GridColumn:u,GridRow:p,ExportSettings:y,ImportAioseo:x,ImportOthers:w},data(){return{strings:{ctaHeader:this.$t.sprintf(this.$t.__("This feature is not available in your current plan.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade Your Plan and Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},v={};var ht=a(_t,pt,dt,!1,mt,null,null,null);function mt(t){for(let s in v)this[s]=v[s]}const gt=function(){return ht.exports}();var ft=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[!t.$aioseo.data.isNetworkAdmin||!t.isUnlicensed&&t.$license.hasCoreFeature("tools","network-tools-import-export")?e("import-export"):t._e(),t.$aioseo.data.isNetworkAdmin&&(t.isUnlicensed||!t.$license.hasCoreFeature("tools","network-tools-import-export"))?e("lite-import-export"):t._e()],1)},vt=[];const $t={components:{ImportExport:ut,LiteImportExport:gt},computed:{...E(["isUnlicensed"])}},$={};var kt=a($t,ft,vt,!1,bt,null,null,null);function bt(t){for(let s in $)this[s]=$[s]}const Qt=function(){return kt.exports}();export{Qt as default};
