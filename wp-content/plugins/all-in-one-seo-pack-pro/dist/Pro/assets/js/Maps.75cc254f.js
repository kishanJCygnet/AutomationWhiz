var M=Object.defineProperty,S=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))A.call(t,s)&&p(e,s,t[s]);if(l)for(var s of l(t))k.call(t,s)&&p(e,s,t[s]);return e},c=(e,t)=>S(e,b(t));import{C as w,i as K}from"./Map.729ed919.js";import{a as x}from"./index.6b238922.js";import{C as g}from"./Index.021930ae.js";import{C as a}from"./Card.56d6b098.js";import{C as v}from"./SettingsRow.eb71f07b.js";import{L as B,a as L}from"./DefaultStyle.379a6f2c.js";import{C}from"./AttributesList.d348890d.js";import{C as $}from"./DisplayInfo.2703ee3b.js";import{n as o}from"./vueComponentNormalizer.87056a83.js";import{S as I}from"./Close.5e7bcb70.js";import{d as P}from"./index.621c7f0d.js";import{A as G,U as O}from"./UpdateCta.143d5a61.js";import{C as E}from"./Blur.8490ecd2.js";import{C as D}from"./ProBadge.7c0de2f7.js";import{C as T}from"./Index.7868e16c.js";import{A as R}from"./ToolsSettings.d33ae322.js";import"./context.04ada340.js";import"./isEqual.b2245f38.js";import"./_baseIsEqual.fe803cec.js";import"./isArrayLikeObject.86537e3d.js";import"./_getTag.9b5bfcef.js";import"./constants.feea4720.js";import"./default-i18n.abde8d59.js";import"./Tooltip.3ec20ff5.js";import"./_commonjsHelpers.f40d732e.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";import"./Image.9e9e3be5.js";import"./helpers.8f033058.js";import"./cleanForSlug.3b9a9c2e.js";import"./Img.47316be6.js";import"./Plus.a9b9ba75.js";import"./Php.8f904d07.js";import"./CheckSolid.99652043.js";import"./Copy.a07db25e.js";import"./client.94d919c5.js";var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("core-display-info",{attrs:{label:e.label,options:e.displayOptions},scopedSlots:e._u([{key:"shortcodeAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:e.strings.shortcodeAttributesDescription,attributes:e.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:e.strings.phpArgumentsDescription,attributes:e.attributes}})]},proxy:!0}])})},U=[];const j={components:{CoreAttributesList:C,CoreDisplayInfo:$},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:"The following shortcode attributes can be used to override the default settings:",phpArgumentsDescription:"The function accepts an associative array with the following arguments that can be used to override the default settings:",advancedSettings:"Advanced Settings"},attributes:[{name:"location_id",description:"A Location ID if Multiple Locations is on."},{name:"show_label",description:"Show or hide the label."},{name:"show_icon",description:"Show or hide the icon."},{name:"width",description:"The width of the map. You may use a percentage or a fixed width in pixels."},{name:"height",description:"The height of the map. You may use a percentage or a fixed height in pixels."},{name:"label",description:"The label."}]}}},u={};var H=o(j,F,U,!1,N,null,null,null);function N(e){for(let t in u)this[t]=u[t]}var V=function(){return H.exports}(),q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.strings.googleMapsApiKey)+" ")]},proxy:!0}])},[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description",domProps:{innerHTML:e._s(e.strings.description)}})]),s("core-settings-row",{attrs:{name:e.strings.apiKey,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-input",{class:{"aioseo-error":e.options.localBusiness.maps.apiKey&&e.options.localBusiness.maps.apiKeyValid===!1},attrs:{size:"medium",spellcheck:!1},on:{input:function(r){return e.checkApiKey()}},scopedSlots:e._u([{key:"append-icon",fn:function(){return[s("div",{staticClass:"append-icon"},[[e.options.localBusiness.maps.apiKey&&e.options.localBusiness.maps.apiKeyValid===!1?s("svg-circle-close"):e._e()]],2)]},proxy:!0}]),model:{value:e.options.localBusiness.maps.apiKey,callback:function(r){e.$set(e.options.localBusiness.maps,"apiKey",r)},expression:"options.localBusiness.maps.apiKey"}}),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:e._s(e.strings.apiKeyDescription)}}),e.options.localBusiness.maps.apiKey&&e.options.localBusiness.maps.apiKeyValid===!1?s("core-alert",{attrs:{type:"red"},domProps:{innerHTML:e._s(e.strings.apiKeyInvalid)}}):e._e(),e.options.localBusiness.maps.apiKey&&e.options.localBusiness.maps.apiKeyValid&&e.options.localBusiness.maps.mapsEmbedApiEnabled===!1?s("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:e._s(e.strings.placeSelected)}}):e._e()]},proxy:!0}])}),e.debouncedApiKey?s("core-settings-row",{attrs:{name:e.strings.mapPreview,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("core-map",{attrs:{apiKey:e.debouncedApiKey,options:e.defaultMapOptions,placeId:e.options.localBusiness.maps.placeId,marker:e.currentMarker}})]},proxy:!0}],null,!1,2126454560)}):e._e()],1),e.options.localBusiness.maps.apiKey?s("core-card",{attrs:{slug:"localBusinessMapsSettings"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.strings.mapSettings)+" ")]},proxy:!0}],null,!1,2727138174)},[s("local-business-map-display-info",{attrs:{label:e.strings.displayMap,displayOptions:e.displayInfo}}),s("local-business-map-default-style"),s("local-business-map-custom-marker")],1):e._e()],1)},Y=[];const z={components:{CoreAlert:g,CoreCard:a,CoreMap:w,CoreSettingsRow:v,LocalBusinessMapCustomMarker:B,LocalBusinessMapDefaultStyle:L,LocalBusinessMapDisplayInfo:V,SvgCircleClose:I},data(){return{strings:{googleMapsApiKey:"Google Maps API Key",description:this.$t.sprintf("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),apiKey:"API Key",apiKeyDescription:this.$t.sprintf("A Google API Key is necessary to render your maps. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),mapSettings:"Map Settings",apiKeyInvalid:this.$t.sprintf("Your API Key is invalid. Please make sure you have set your key correctly. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),placeSelected:this.$t.sprintf("Your Maps Embed API is not enabled. For a more seamless experience with rich information cards, please enable it in your Google Project. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapEmbedApi",!0)),displayMap:"Display Map",mapPreview:"Map Preview"},displayInfo:{block:{copy:"",desc:this.$t.sprintf('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',"AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf("Use the following shortcode to display the location map. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},widget:{copy:"",desc:this.$t.sprintf('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}},debouncedApiKey:null}},computed:c(i({},x(["options"])),{defaultMapOptions(){return i(i({},this.options.localBusiness.maps.mapOptions),this.$aioseo.localBusiness.mapDefaults)},currentMarker(){return{position:this.options.localBusiness.maps.mapOptions.center,icon:this.options.localBusiness.maps.customMarker}}}),methods:{apiKeyFailed(){this.options.localBusiness.maps.apiKeyValid=!1},checkApiKey(){P(()=>{this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.options.localBusiness.maps.apiKeyValid=!0,this.options.localBusiness.maps.mapsEmbedApiEnabled=null,window.gm_authFailure=this.apiKeyFailed,this.checkMapEmbedApi()},1500)},checkMapEmbedApi(){K(this.options.localBusiness.maps.apiKey,"places/embed").then(e=>{this.options.localBusiness.maps.mapsEmbedApiEnabled=e})}},mounted(){this.options.localBusiness.maps.apiKey&&(this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.checkMapEmbedApi())}},d={};var J=o(z,q,Y,!1,Q,null,null,null);function Q(e){for(let t in d)this[t]=d[t]}var W=function(){return J.exports}(),X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-maps-blur"},[s("core-blur",[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description"},[e._v(e._s(e.strings.description))])]),s("core-settings-row",{attrs:{name:e.strings.apiKey,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"}})]},proxy:!0}])}),s("core-display-info",{attrs:{options:e.displayInfo}})],1)],1)},Z=[];const ee={components:{CoreBlur:E,CoreDisplayInfo:$,CoreSettingsRow:v},data(){return{strings:{description:"Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",apiKey:"API Key"},displayInfo:{block:{copy:"",desc:this.$t.sprintf('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',"AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf("Use the following shortcode to display the location map. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},widget:{copy:"",desc:this.$t.sprintf('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}}}}},m={};var se=o(ee,X,Z,!1,te,null,null,null);function te(e){for(let t in m)this[t]=m[t]}var n=function(){return se.exports}(),oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":e.strings.googleMapsApiKey,noSlide:!0}},[s("blur")],1),s("activate-cta")],1)},ie=[];const ae={components:{ActivateCta:G,Blur:n,CoreCard:a},data(){return{strings:{googleMapsApiKey:"Google Maps API Key"}}}},_={};var ne=o(ae,oe,ie,!1,re,null,null,null);function re(e){for(let t in _)this[t]=_[t]}var le=function(){return ne.exports}(),pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey",noSlide:!0},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" "+e._s(e.strings.googleMapsApiKey)+" "),s("core-pro-badge")]},proxy:!0}])},[s("blur"),s("cta",{attrs:{"cta-link":e.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":e.features},scopedSlots:e._u([{key:"header-text",fn:function(){return[e._v(" "+e._s(e.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e.$isPro&&e.$addons.requiresUpgrade("aioseo-local-business")&&e.$addons.currentPlans("aioseo-local-business")?s("core-alert",{attrs:{type:"red"}},[e._v(" "+e._s(e.strings.thisFeatureRequires)+" "),s("strong",[e._v(e._s(e.$addons.currentPlans("aioseo-local-business")))])]):e._e(),e._v(" "+e._s(e.strings.ctaDescription)+" ")]},proxy:!0}])})],1)],1)},ce=[];const ue={components:{Blur:n,CoreAlert:g,CoreCard:a,CoreProBadge:D,Cta:T},data(){return{features:["Google Places Support","Google Reviews","Driving Directions","Multiple Locations"],strings:{googleMapsApiKey:"Google Maps API Key",ctaButtonText:"Upgrade to Pro and Unlock Local SEO",ctaHeader:this.$t.sprintf("Local SEO Maps are only available for licensed %1$s %2$s users.","AIOSEO","Pro"),ctaDescription:"Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",thisFeatureRequires:"This feature requires one of the following plans:"}}}},h={};var de=o(ue,pe,ce,!1,me,null,null,null);function me(e){for(let t in h)this[t]=h[t]}var _e=function(){return de.exports}(),he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":e.strings.googleMapsApiKey,noSlide:!0}},[s("blur")],1),s("update-cta")],1)},fe=[];const ye={components:{UpdateCta:O,Blur:n,CoreCard:a},data(){return{strings:{googleMapsApiKey:"Google Maps API Key"}}}},f={};var ge=o(ye,he,fe,!1,ve,null,null,null);function ve(e){for(let t in f)this[t]=f[t]}var $e=function(){return ge.exports}(),Me=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-maps"},[e.shouldShowMain?s("maps"):e._e(),e.shouldShowActivate?s("activate"):e._e(),e.shouldShowUpdate?s("update"):e._e(),e.shouldShowLite?s("lite"):e._e()],1)},Se=[];const be={mixins:[R],components:{Maps:W,Activate:le,Lite:_e,Update:$e},data(){return{addonSlug:"aioseo-local-business"}}},y={};var Ae=o(be,Me,Se,!1,ke,null,null,null);function ke(e){for(let t in y)this[t]=y[t]}var cs=function(){return Ae.exports}();export{cs as default};
