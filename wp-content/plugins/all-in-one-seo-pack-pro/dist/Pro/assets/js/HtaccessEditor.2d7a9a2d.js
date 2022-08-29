var c=Object.defineProperty;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(t,s,e)=>s in t?c(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))l.call(s,e)&&r(t,e,s[e]);if(o)for(var e of o(s))u.call(s,e)&&r(t,e,s[e]);return t};import{d}from"./index.a8d44ca5.js";import{B as p}from"./Editor.587e3e29.js";import{C as m}from"./Index.1acf3545.js";import{C as _}from"./Card.40fd6ded.js";import{C as f}from"./SettingsRow.eb71f07b.js";import{n as h}from"./vueComponentNormalizer.87056a83.js";import"./client.93f15631.js";import"./index.9b0095cc.js";import"./Tooltip.674a9fb4.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";var v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-tools-htaccess-editor"},[e("core-card",{attrs:{slug:"htaccessEditor","header-text":t.strings.htaccessEditor}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description",domProps:{innerHTML:t._s(t.strings.description)}}),e("core-settings-row",{attrs:{name:t.strings.editHtaccess,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t.htaccessError?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.htaccessError)+" ")]):t._e(),e("base-editor",{staticClass:"htaccess-editor",attrs:{disabled:!t.$aioseo.user.unfilteredHtml,"line-numbers":"",monospace:""},model:{value:t.$aioseo.data.htaccess,callback:function(i){t.$set(t.$aioseo.data,"htaccess",i)},expression:"$aioseo.data.htaccess"}})]},proxy:!0}])})],1)],1)},g=[];const y={components:{BaseEditor:p,CoreAlert:m,CoreCard:_,CoreSettingsRow:f},data(){return{strings:{htaccessEditor:".htaccess Editor",editHtaccess:"Edit .htaccess",description:this.$t.sprintf("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s","<strong>","</strong>")}}},computed:a({},d(["htaccessError"]))},n={};var w=h(y,v,g,!1,C,null,null,null);function C(t){for(let s in n)this[s]=n[s]}var R=function(){return w.exports}();export{R as default};
