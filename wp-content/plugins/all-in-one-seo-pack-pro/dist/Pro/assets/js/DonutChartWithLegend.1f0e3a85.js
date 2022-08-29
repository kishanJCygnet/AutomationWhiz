import{U as u}from"./AnimatedNumber.6e9fb9fd.js";import{n as a}from"./vueComponentNormalizer.a77505d6.js";var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._t("default")],2)},d=[];const _={props:{targetLineCount:{default:1,type:Number},unit:{default:"px",type:String},min:{default:12,type:Number},max:{default:36,type:Number},constrainToElement:{type:[Boolean,Element],default(){return!1}},elementPadding:{type:Number,default(){return 0}}},data(){return{observer:null}},methods:{calculate(){const t=this.$el,n=this.unit==="px"?1:.05;let e=this.max;if(t.style.display="inline-block",t.style.lineHeight="1px",t.style.fontSize=e+this.unit,this.constrainToElement)for(;t.offsetWidth>this.constrainToElement.offsetWidth-this.elementPadding&&e>this.min;)e-=n,t.style.fontSize=e+this.unit;else for(;t.offsetHeight>this.targetLineCount&&e>this.min;)e-=n,t.style.fontSize=e+this.unit;this.$emit("resize",{size:e,unit:this.unit}),t.style.display=null,t.style.lineHeight=null}},mounted(){this.calculate(),"MutationObserver"in window&&this.observer===null&&(this.observer=new MutationObserver(this.calculate),this.observer.observe(this.$el,{subtree:!0,characterData:!0})),window.addEventListener("resize",this.calculate)},beforeDestroy:function(){this.observer.disconnect(),window.removeEventListener("resize",this.calculate)}},o={};var m=a(_,c,d,!1,h,null,null,null);function h(t){for(let n in o)this[n]=o[n]}const p=function(){return m.exports}();var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aioseo-donut-chart"},[t.total===0?e("svg",{attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{staticClass:"aioseo-donut-chart-score__circle",attrs:{stroke:"#e8e8eb","stroke-dasharray":"100","stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}})]):t._e(),0<t.total?e("svg",{attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[t._l(t.parts,function(r,s){return[Math.round(r.ratio)&&s!==0?e("circle",{key:s+"_border",staticClass:"aioseo-donut-chart-score__circle",attrs:{stroke:"#FFFFFF","stroke-dasharray":Math.round(r.ratio)+" "+parseFloat(99-Math.round(r.ratio)),"stroke-linecap":"round","stroke-width":2.5,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}):t._e(),Math.round(r.ratio)?e("circle",{key:s+"_stroke",staticClass:"aioseo-donut-chart-score__circle",attrs:{stroke:r.color,"stroke-dasharray":(Math.round(r.ratio)===100?100:Math.round(r.ratio)-1)+" 100","stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}):t._e()]})],2):t._e(),e("div",{staticClass:"total-amount-wrapper"},[e("div",{staticClass:"total-amount"},[e("div",{staticClass:"total"},[e("util-fit-text",{attrs:{max:40,"constrain-to-element":t.$el,"element-padding":30}},[t.animatedNumber?e("util-animated-number",{attrs:{number:parseInt(t.total)}}):e("div",{domProps:{innerHTML:t._s(parseInt(t.total))}})],1)],1),e("div",{staticClass:"label"},[t._v(t._s(t.label))])])])])},v=[];const y={components:{UtilAnimatedNumber:u,UtilFitText:p},props:{parts:{type:Array,required:!0},label:{type:String,required:!0},total:{type:Number,required:!0},animatedNumber:{type:Boolean,default(){return!0}}}},i={};var b=a(y,f,v,!1,g,null,null,null);function g(t){for(let n in i)this[n]=i[n]}const C=function(){return b.exports}();var k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aioseo-donut-chart-with-legend"},[e("div",{staticClass:"chart-left"},[e("core-donut-chart",{attrs:{parts:t.parts,total:t.total,label:t.label,animatedNumber:t.animatedNumber}})],1),e("div",{staticClass:"chart-right"},[t._l(t.sortedParts,function(r,s){return e("div",{key:s,staticClass:"legend"},[e("div",{staticClass:"legend-bullet",style:"background-color: "+r.color}),e("span",{staticClass:"legend-amount"},[t.animatedNumber?e("util-animated-number",{attrs:{number:parseInt(r.count)}}):e("div",{domProps:{innerHTML:t._s(parseInt(r.count))}})],1),e(r.link?"a":"span",{tag:"component",staticClass:"legend-label",class:{"is-link":r.link},attrs:{href:r.link||null}},[t._v(" "+t._s(r.name)+" ")])],1)}),t.link&&t.total>0?e("div",{staticClass:"chart-more"},[e("span",{domProps:{innerHTML:t._s(t.link)}})]):t._e()],2)])},w=[];const x={components:{CoreDonutChart:C,UtilAnimatedNumber:u},props:{parts:{type:Array,required:!0},total:{type:Number,required:!0},label:{type:String,required:!0},link:{type:String,required:!1},animatedNumber:{type:Boolean,default(){return!0}}},computed:{sortedParts(){const t=this.parts.map(n=>n);return t.forEach(function(n,e){n.last&&(t.push(t[e]),t.splice(e,1))}),t}}},l={};var $=a(x,k,w,!1,M,null,null,null);function M(t){for(let n in l)this[n]=l[n]}const F=function(){return $.exports}();export{F as C};
