import{d as c}from"./index.7c8bddbb.js";import{n as u}from"./vueComponentNormalizer.87056a83.js";var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.canShow?i("img",{attrs:{src:t.src}}):t._e()},l=[];const m={props:{src:String,tag:{type:String,default(){return"img"}},debounce:{type:Boolean,default(){return!0}}},data(){return{canShow:!1,images:{}}},watch:{src(){if(this.debounce){c(this.maybeShowImage,50);return}this.maybeShowImage()},canShow(t){this.$emit("can-show",t)},images:{handler:function(){this.$emit("images",this.images)},deep:!0}},methods:{async maybeShowImage(){if(this.canShow=!1,!this.src)return;let t=null;try{t=new URL(this.src)}catch{return}const e=/\.(jpg|jpeg|png|gif|svg|webp)$/;if(!t.pathname.replace("/","\\/").match(e))return;if(this.images[this.src]){this.canShow=!0;return}const n=new Image;n.onload=await(()=>{this.canShow=!0;let r=0;const s=n.width,a=n.height;s&&a&&(r=s/a),!this.images[this.src]&&this.$set(this.images,this.src,{image:n,ratio:r,vertical:1.5>r||2<r||600>s||315>a})}),n.onerror=await(()=>{this.canShow=!1}),n.src=this.src}},mounted(){this.maybeShowImage()}},o={};var p=u(m,h,l,!1,g,null,null,null);function g(t){for(let e in o)this[e]=o[e]}var w=function(){return p.exports}();export{w as B};
