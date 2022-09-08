import{e as a,m as r}from"./index.9d9c8f08.js";import{C as l}from"./Tooltip.a1ab116b.js";import{c as i,g as c,S as u}from"./index.693463c8.js";import{T as d}from"./Slide.8aaa5049.js";import{n as g}from"./vueComponentNormalizer.58b0a173.js";var _=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-card",class:Object.assign({disabled:t.disabled},t.cardClass)},[t.hideHeader?t._e():e("div",{staticClass:"header",class:[{toggles:t.toggles}],on:{click:function(o){return t.toggleCard({slug:t.slug,shouldSave:t.saveToggleStatus})}}},[e("div",{staticClass:"text"},[e("div",{staticClass:"header-icon"},[t._t("header-icon")],2),e("div",{staticClass:"header-title",on:{click:function(o){o.stopPropagation()}}},[t._t("header",function(){return[e("span",[t._v(t._s(t.headerText))])]})],2),t.$slots.tooltip?e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._t("tooltip")]},proxy:!0}],null,!0)},[e("svg-circle-question-mark")],1):t._e()],1),!t.closes&&t.toggles&&t.settings.toggledCards&&!t.noSlide&&!t.disabled?e("svg-caret",{class:{rotated:!t.settings.toggledCards[t.slug]}}):t._e(),t.closes?e("svg-close",{on:{click:function(o){return t.$emit("close-card",!0)}}}):t._e()],1),t.$slots.disabled&&t.disabled?e("div",{staticClass:"content"},[t._t("disabled")],2):t._e(),(t.settings.toggledCards||t.noSlide)&&!t.disabled?e("transition-slide",{attrs:{active:t.settings.toggledCards[t.slug]&&t.toggles||t.noSlide}},[t.$slots["before-tabs"]?e("div",{staticClass:"content"},[t._t("before-tabs")],2):t._e(),t._t("tabs"),t.$slots.default?e("div",{staticClass:"content"},[t._t("default")],2):t._e()],2):t._e()],1)},p=[];const f={components:{CoreTooltip:l,SvgCaret:i,SvgCircleQuestionMark:c,SvgClose:u,TransitionSlide:d},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(t){const s=this.slug;t&&!this.settings.toggledCards[s]&&this.toggleCard({slug:s,shouldSave:!0})}},computed:{...a(["settings"])},methods:{...r(["toggleCard"])}},n={};var v=g(f,_,p,!1,m,null,null,null);function m(t){for(let s in n)this[s]=n[s]}const x=function(){return v.exports}();export{x as C};