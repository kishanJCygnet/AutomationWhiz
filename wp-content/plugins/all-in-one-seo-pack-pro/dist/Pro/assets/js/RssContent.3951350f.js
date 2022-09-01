var l=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,s,e)=>s in t?l(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))c.call(s,e)&&r(t,e,s[e]);if(o)for(var e of o(s))p.call(s,e)&&r(t,e,s[e]);return t};import{a as d}from"./index.63323e13.js";import{C as u}from"./Index.05a01367.js";import{C as _}from"./Card.b87ede7d.js";import{C as f}from"./HtmlTagsEditor.5f2dc1a3.js";import{C as m}from"./SettingsRow.eb71f07b.js";import{S as h}from"./External.8868c638.js";import{n as g}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./index.cd641513.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.40d5dc79.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Editor.3ef46c7b.js";import"./UnfilteredHtml.49e9dc89.js";import"./Row.13b6f3f1.js";var b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-rss-content"},[e("core-card",{attrs:{slug:"rssContent","header-text":t.strings.rssContent},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",[t._v(t._s(t.strings.tooltip))])]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"rssContent",!0))}}),t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global?e("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.rssFeedDisabled)}}):t._e()],1),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.feeds.global,target:"_blank",disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global}},[e("svg-external"),t._v(" "+t._s(t.strings.openYourRssFeed)+" ")],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssBeforeContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.before,callback:function(n){t.$set(t.options.rssContent,"before",n)},expression:"options.rssContent.before"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.beforeRssDescription)+" ")])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssAfterContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"],disabled:t.options.searchAppearance.advanced.crawlCleanup.enable&&!t.options.searchAppearance.advanced.crawlCleanup.feeds.global},model:{value:t.options.rssContent.after,callback:function(n){t.$set(t.options.rssContent,"after",n)},expression:"options.rssContent.after"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.afterRssDescription)+" ")])]},proxy:!0}])})],1)],1)},C=[];const v={components:{CoreAlert:u,CoreCard:_,CoreHtmlTagsEditor:f,CoreSettingsRow:m,SvgExternal:h},data(){return{strings:{tooltip:this.$t.__("Automatically add content to your site's RSS feed.",this.$td),description:this.$t.__("This feature is used to automatically add content to your site's RSS feed. More specifically, it allows you to add links back to your blog and your blog posts so scrapers will automatically add these links too. This helps search engines identify you as the original source of the content.",this.$td),learnMore:this.$t.__("Learn more",this.$td),rssFeedDisabled:this.$t.sprintf(this.$t.__("Your RSS feed has been disabled. Disabling the global RSS feed is NOT recommended. This will prevent users from subscribing to your content and can hurt your SEO rankings. You can re-enable the global RSS feed in the %1$scrawl content settings%2$s.",this.$td),'<a href="'+this.$aioseo.urls.aio.searchAppearance+'&aioseo-scroll=crawl-content-global-feed&aioseo-highlight=crawl-content-global-feed#/advanced">',"</a>"),rssContent:this.$t.__("RSS Content Settings",this.$td),openYourRssFeed:this.$t.__("Open Your RSS Feed",this.$td),rssBeforeContent:this.$t.__("RSS Before Content",this.$td),rssAfterContent:this.$t.__("RSS After Content",this.$td),beforeRssDescription:this.$t.__("Add content before each post in your site feed.",this.$td),afterRssDescription:this.$t.__("Add content after each post in your site feed.",this.$td),unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}},computed:a({},d(["options"]))},i={};var $=g(v,b,C,!1,y,null,null,null);function y(t){for(let s in i)this[s]=i[s]}var U=function(){return $.exports}();export{U as default};