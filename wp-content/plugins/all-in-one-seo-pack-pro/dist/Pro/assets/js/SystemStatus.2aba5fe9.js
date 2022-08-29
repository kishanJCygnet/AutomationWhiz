var d=Object.defineProperty,p=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var n=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))f.call(e,s)&&n(t,s,e[s]);if(r)for(var s of r(e))h.call(e,s)&&n(t,s,e[s]);return t},m=(t,e)=>p(t,_(e));import{d as v}from"./index.63323e13.js";import{C as g}from"./Card.b87ede7d.js";import{G as y,a as b}from"./Row.13b6f3f1.js";import{S}from"./Checkmark.e7547654.js";import{S as $}from"./Copy.a07db25e.js";import{S as C}from"./Download.bc45fb83.js";import{T as w,a as I}from"./Row.b5e5f12f.js";import{n as E}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./Tooltip.3ec20ff5.js";import"./_commonjsHelpers.f40d732e.js";import"./index.cd641513.js";import"./client.94d919c5.js";import"./constants.40d5dc79.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";var A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-tools-system-status-info"},[s("core-card",{attrs:{slug:"systemStatusInfo","header-text":t.strings.systemStatusInfo}},[s("div",{staticClass:"actions"},[s("grid-row",[s("grid-column",{staticClass:"left",attrs:{sm:"6"}},[s("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.downloadSystemStatusInfo}},[s("svg-download"),t._v(" "+t._s(t.strings.downloadSystemInfoFile)+" ")],1),s("base-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copySystemStatusInfo,expression:"copySystemStatusInfo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{type:"blue",size:"medium"}},[t.copied?t._e():[s("svg-copy"),t._v(" "+t._s(t.strings.copyToClipboard)+" ")],t.copied?[s("svg-checkmark"),t._v(" "+t._s(t.strings.copied)+" ")]:t._e()],2)],1),s("grid-column",{staticClass:"right",attrs:{sm:"6"}},[s("base-input",{class:{"aioseo-error":t.emailError},attrs:{size:"medium",placeholder:t.strings.emailDebugInformation},model:{value:t.emailAddress,callback:function(i){t.emailAddress=i},expression:"emailAddress"}}),s("base-button",{attrs:{type:"blue",size:"medium",loading:t.sendingEmail},on:{click:t.processEmailDebugInfo}},[t._v(" "+t._s(t.strings.submit)+" ")])],1)],1)],1),s("div",{staticClass:"aioseo-settings-row"},[t._l(t.$aioseo.data.status,function(i,c){return[i.results.length?s("div",{key:c,staticClass:"settings-group"},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name"},[t._v(t._s(i.label))])]),s("div",{staticClass:"settings-content"},[s("div",{staticClass:"system-status-table"},t._l(i.results,function(o,a){return s("table-row",{key:a,class:{even:a%2===0}},[s("table-column",{staticClass:"system-status-header"},[t._v(" "+t._s(o.header)+" ")]),s("table-column",[t._v(" "+t._s(o.value)+" ")])],1)}),1)])]):t._e()]})],2)])],1)},k=[];const x={components:{CoreCard:g,GridColumn:y,GridRow:b,SvgCheckmark:S,SvgCopy:$,SvgDownload:C,TableColumn:w,TableRow:I},data(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:this.$t.__("System Status Info",this.$td),downloadSystemInfoFile:this.$t.__("Download System Info File",this.$td),copyToClipboard:this.$t.__("Copy to Clipboard",this.$td),emailDebugInformation:this.$t.__("Email Debug Information",this.$td),submit:this.$t.__("Submit",this.$td),wordPress:this.$t.__("WordPress",this.$td),serverInfo:this.$t.__("Server Info",this.$td),activeTheme:this.$t.__("Active Theme",this.$td),muPlugins:this.$t.__("Must-Use Plugins",this.$td),activePlugins:this.$t.__("Active Plugins",this.$td),inactivePlugins:this.$t.__("Inactive Plugins",this.$td),copied:this.$t.__("Copied!",this.$td)}}},computed:{copySystemStatusInfo(){return JSON.stringify(this.$aioseo.data.status)}},methods:m(l({},v(["emailDebugInfo"])),{onCopy(){this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)},onError(){},downloadSystemStatusInfo(){const t=new Blob([JSON.stringify(this.$aioseo.data.status)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(t),e.download=`aioseo-system-status-${this.$moment().format("YYYY-MM-DD")}.json`,e.click(),URL.revokeObjectURL(e.href)},processEmailDebugInfo(){if(this.emailError=!1,!this.emailAddress||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)){this.emailError=!0;return}this.sendingEmail=!0,this.emailDebugInfo(this.emailAddress).then(()=>{this.emailAddress=null,this.sendingEmail=!1})}})},u={};var D=E(x,A,k,!1,P,null,null,null);function P(t){for(let e in u)this[e]=u[e]}var Q=function(){return D.exports}();export{Q as default};
