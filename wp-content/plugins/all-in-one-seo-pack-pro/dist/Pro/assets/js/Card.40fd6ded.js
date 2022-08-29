var i=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(t,s,e)=>s in t?i(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,o=(t,s)=>{for(var e in s||(s={}))c.call(s,e)&&r(t,e,s[e]);if(n)for(var e of n(s))u.call(s,e)&&r(t,e,s[e]);return t};import{e as d,j as g}from"./index.a8d44ca5.js";import{C as _}from"./Tooltip.674a9fb4.js";import{h as p,S as v}from"./index.9b0095cc.js";import{S as f}from"./QuestionMark.83ebd18e.js";import{T as m}from"./Slide.f5d21606.js";import{n as C}from"./vueComponentNormalizer.87056a83.js";var h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-card",class:Object.assign({},{disabled:t.disabled},t.cardClass)},[t.hideHeader?t._e():e("div",{staticClass:"header"},[e("div",{staticClass:"text"},[e("div",{staticClass:"header-icon"},[t._t("header-icon")],2),t._t("header",function(){return[t._v(" "+t._s(t.headerText)+" ")]}),t.$slots.tooltip?e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._t("tooltip")]},proxy:!0}],null,!0)},[e("svg-circle-question-mark")],1):t._e()],2),!t.closes&&t.toggles&&t.settings.toggledCards&&!t.noSlide&&!t.disabled?e("svg-caret",{class:{rotated:!t.settings.toggledCards[t.slug]},on:{click:function(l){return t.toggleCard({slug:t.slug,shouldSave:t.saveToggleStatus})}}}):t._e(),t.closes?e("svg-close",{on:{click:function(l){return t.$emit("close-card",!0)}}}):t._e()],1),t.$slots.disabled&&t.disabled?e("div",{staticClass:"content"},[t._t("disabled")],2):t._e(),(t.settings.toggledCards||t.noSlide)&&!t.disabled?e("transition-slide",{attrs:{active:t.settings.toggledCards[t.slug]&&t.toggles||t.noSlide}},[t.$slots["before-tabs"]?e("div",{staticClass:"content"},[t._t("before-tabs")],2):t._e(),t._t("tabs"),t.$slots.default?e("div",{staticClass:"content"},[t._t("default")],2):t._e()],2):t._e()],1)},S=[];const y={components:{CoreTooltip:_,SvgCaret:p,SvgCircleQuestionMark:f,SvgClose:v,TransitionSlide:m},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(t){const s=this.slug;t&&!this.settings.toggledCards[s]&&this.toggleCard({slug:s,shouldSave:!0})}},computed:o({},d(["settings"])),methods:o({},g(["toggleCard"]))},a={};var b=C(y,h,S,!1,x,null,null,null);function x(t){for(let s in a)this[s]=a[s]}var H=function(){return b.exports}();export{H as C};
