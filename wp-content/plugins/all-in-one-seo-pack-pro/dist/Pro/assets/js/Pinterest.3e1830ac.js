var p=Object.defineProperty;var r=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(t,o,e)=>o in t?p(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,i=(t,o)=>{for(var e in o||(o={}))c.call(o,e)&&s(t,e,o[e]);if(r)for(var e of r(o))u.call(o,e)&&s(t,e,o[e]);return t};import{a as l}from"./index.63323e13.js";import"./ToolsSettings.9a525564.js";import"./helpers.d992cd63.js";import{M as m}from"./MetaTag.ceacc375.js";import{n as _}from"./vueComponentNormalizer.87056a83.js";import{C as d}from"./Card.b87ede7d.js";import{C as f}from"./SettingsRow.eb71f07b.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./Modal.ff6affc5.js";import"./index.cd641513.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.40d5dc79.js";import"./cleanForSlug.6eecf7c2.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";var g=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"aioseo-pinterest"},[e("core-card",{attrs:{slug:"pinterest","header-text":t.strings.pinterest}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0))}}),e("br"),e("br"),e("strong",[t._v(t._s(t.strings.skipStep))])]),e("core-settings-row",{attrs:{name:t.strings.pinterestVerificationCode,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"},on:{blur:function(n){return t.maybeUpdateId("pinterest")}},model:{value:t.options.webmasterTools.pinterest,callback:function(n){t.$set(t.options.webmasterTools,"pinterest",n)},expression:"options.webmasterTools.pinterest"}})]},proxy:!0}])})],1)],1)},h=[];const y={components:{CoreCard:d,CoreSettingsRow:f},mixins:[m],data(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}},computed:i({},l(["options"]))},a={};var v=_(y,g,h,!1,b,null,null,null);function b(t){for(let o in a)this[o]=a[o]}var U=function(){return v.exports}();export{U as default};
