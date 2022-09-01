import{n as i}from"./vueComponentNormalizer.a77505d6.js";import{C as $}from"./HtmlTagsEditor.c451ceda.js";import{B as g}from"./Phone.6dba59d3.js";import{a as o,d as h}from"./index.670b7e80.js";import"./ToolsSettings.d7505a2f.js";import{U as f}from"./Image.91bc75ec.js";import{B as b}from"./Img.3a6f45fe.js";import{S as x}from"./Plus.63317bcc.js";import{C as y,D as O}from"./Map.f000736b.js";import{C as D}from"./Index.66ae07a9.js";const n={computed:{...o(["currentPost","options"])},methods:{getDataObject(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.locations.business:this.options.localBusiness.locations.business}}};var C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().areaServed,callback:function(s){t.$set(t.getDataObject(),"areaServed",s)},expression:"getDataObject().areaServed"}}),e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.areaServedDescription))])],1)},j=[];const S={mixins:[n],data(){return{strings:{areaServedDescription:this.$t.__("The geographic area where a service or offered item is provided.",this.$td)}}}},r={};var I=i(S,C,j,!1,A,"a7c27f08",null,null);function A(t){for(let a in r)this[a]=r[a]}const jt=function(){return I.exports}();var L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"columns field-row aioseo-business-address"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.streetAddress))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().address.streetLine1,callback:function(s){t.$set(t.getDataObject().address,"streetLine1",s)},expression:"getDataObject().address.streetLine1"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.streetAddress2))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().address.streetLine2,callback:function(s){t.$set(t.getDataObject().address,"streetLine2",s)},expression:"getDataObject().address.streetLine2"}})],1),e("div",{staticClass:"aioseo-address-wrapper"},[e("div",{staticClass:"aioseo-col col-xs-12 col-sm-12 col-md-6 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.zipCode))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().address.zipCode,callback:function(s){t.$set(t.getDataObject().address,"zipCode",s)},expression:"getDataObject().address.zipCode"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 col-sm-12 col-md-6 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.city))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().address.city,callback:function(s){t.$set(t.getDataObject().address,"city",s)},expression:"getDataObject().address.city"}})],1)]),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.state))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().address.state,callback:function(s){t.$set(t.getDataObject().address,"state",s)},expression:"getDataObject().address.state"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left",attrs:{id:"aioseo-local-business-business-country"}},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.country))]),e("base-select",{attrs:{size:"medium",options:t.$constants.COUNTRY_LIST,value:this.$constants.COUNTRY_LIST.find(function(s){return s.value===t.getDataObject().address.country})},on:{input:function(s){return t.getDataObject().address.country=s.value}}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left address-format"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.addressFormat))]),e("core-html-tags-editor",{attrs:{"line-numbers":!1,checkUnfilteredHtml:"","tags-context":"addressFormat","default-tags":["streetLineOne","streetLineTwo","zipCode","city","state","country"]},scopedSlots:t._u([{key:"tags-description",fn:function(){return[e("span")]},proxy:!0}]),model:{value:t.getDataObject().address.addressFormat,callback:function(s){t.$set(t.getDataObject().address,"addressFormat",s)},expression:"getDataObject().address.addressFormat"}}),e("div",{staticClass:"aioseo-description"},[t._v(t._s(t.strings.addressFormatDescription))])],1)])},k=[];const P={components:{CoreHtmlTagsEditor:$},mixins:[n],data(){return{strings:{streetAddress:this.$t.__("Address Line 1",this.$td),streetAddress2:this.$t.__("Address Line 2",this.$td),zipCode:this.$t.__("Zip Code",this.$td),city:this.$t.__("City",this.$td),state:this.$t.__("State",this.$td),country:this.$t.__("Country",this.$td),addressFormat:this.$t.__("Address Format",this.$td),addressFormatDescription:this.$t.__("Use the smart tags above to define your address format (used in blocks, widgets and shortcodes).",this.$td)}}}},c={};var B=i(P,L,k,!1,z,null,null,null);function z(t){for(let a in c)this[a]=c[a]}const St=function(){return B.exports}();var E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-local-business-business-contact"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.emailAddress))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().contact.email,callback:function(s){t.$set(t.getDataObject().contact,"email",s)},expression:"getDataObject().contact.email"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left",attrs:{id:"aioseo-local-business-phone-number"}},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.phoneNumber))]),e("base-phone",{attrs:{value:t.getDataObject().contact.phone},on:{input:function(s){return t.getDataObject().contact.phone=s},inputFormatted:function(s){return t.getDataObject().contact.phoneFormatted=s}}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left",attrs:{id:"aioseo-local-business-fax-number"}},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.faxNumber))]),e("base-phone",{attrs:{value:t.getDataObject().contact.fax},on:{input:function(s){return t.getDataObject().contact.fax=s},inputFormatted:function(s){return t.getDataObject().contact.faxFormatted=s}}})],1)])},N=[];const M={components:{BasePhone:g},mixins:[n],data(){return{strings:{emailAddress:this.$t.__("Email Address",this.$td),phoneNumber:this.$t.__("Phone Number",this.$td),faxNumber:this.$t.__("Fax Number",this.$td)}}}},l={};var F=i(M,E,N,!1,T,null,null,null);function T(t){for(let a in l)this[a]=l[a]}const It=function(){return F.exports}();var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-local-business-ids"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.vatID))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().ids.vat,callback:function(s){t.$set(t.getDataObject().ids,"vat",s)},expression:"getDataObject().ids.vat"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.taxID))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().ids.tax,callback:function(s){t.$set(t.getDataObject().ids,"tax",s)},expression:"getDataObject().ids.tax"}})],1)])},R=[];const U={mixins:[n],data(){return{strings:{vatID:this.$t.__("VAT ID",this.$td),taxID:this.$t.__("Tax ID",this.$td),chamberID:this.$t.__("Chamber of Commerce ID",this.$td)}}}},d={};var w=i(U,K,R,!1,Y,null,null,null);function Y(t){for(let a in d)this[a]=d[a]}const At=function(){return w.exports}();var G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("base-select",{attrs:{size:"large",options:t.$constants.LOCAL_SEO_BUSINESS_TYPES,value:t.getBusinessTypeOptions(t.getDataObject().businessType)},on:{input:function(s){return t.getDataObject().businessType=s.value}}})],1)},J=[];const V={mixins:[n],data(){return{strings:{businessType:this.$t.__("Type",this.$td)}}},methods:{getBusinessTypeOptions(t){let a=this.$constants.LOCAL_SEO_BUSINESS_TYPES.find(e=>e.value===t);return(typeof a>"u"||a.length===0)&&(a=this.$constants.LOCAL_SEO_BUSINESS_TYPES.find(e=>!!e.value)),a}}},u={};var H=i(V,G,J,!1,W,null,null,null);function W(t){for(let a in u)this[a]=u[a]}const Lt=function(){return H.exports}();var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"image-upload"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.pasteYourImageUrl},model:{value:t.getDataObject().image,callback:function(s){t.$set(t.getDataObject(),"image",s)},expression:"getDataObject().image"}}),e("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(s){return t.openUploadModal("image",t.setImageUrl)}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.uploadOrSelectImage)+" ")],1),e("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(s){t.getDataObject().image=null}}},[t._v(" "+t._s(t.strings.remove)+" ")])],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.minimumSize)+" ")]),e("base-img",{attrs:{src:t.getDataObject().image}})],1)},q=[];const Q={components:{BaseImg:b,SvgCirclePlus:x},mixins:[f,n],data(){return{strings:{name:this.$t.__("Name",this.$td),image:this.$t.__("Image",this.$td),uploadOrSelectImage:this.$t.__("Upload or Select Image",this.$td),pasteYourImageUrl:this.$t.__("Paste your image URL or select a new image",this.$td),minimumSize:this.$t.__("Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",this.$td),remove:this.$t.__("Remove",this.$td)}}},computed:{...o(["currentPost","options"])},methods:{...h(["savePostState"]),setImageUrl(t){if(this.$root._data.screenContext!=="metabox"){this.options.localBusiness.locations.business.image=t;return}this.currentPost.local_seo.locations.business.image=t,this.savePostState()}}},_={};var X=i(Q,Z,q,!1,tt,"577b0890",null,null);function tt(t){for(let a in _)this[a]=_[a]}const kt=function(){return X.exports}();var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"local-business-map"},[!t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.apiKey?e("div",[e("core-alert",{attrs:{type:"yellow"}},[e("div",{domProps:{innerHTML:t._s(t.strings.apiKeyInvalid)}})])],1):t._e(),t.options.localBusiness.maps.apiKey?t._e():e("div",[e("core-alert",{attrs:{type:"yellow"}},[this.$root._data.screenContext!=="metabox"?e("div",[t._v(" "+t._s(t.strings.apiKeyNotSet)+" "),e("router-link",{attrs:{to:"/maps"}},[t._v(t._s(t.strings.apiKeyNotSetAnchor))]),e("router-link",{staticClass:"no-underline",attrs:{to:"/maps"}},[t._v(" \u2192 ")])],1):t._e(),this.$root._data.screenContext==="metabox"?e("div",[t._v(" "+t._s(t.strings.apiKeyNotSet)+" "),e("a",{attrs:{target:"_blank",href:this.$aioseo.urls.aio.localSeo+"#/maps"}},[t._v(" "+t._s(t.strings.apiKeyNotSetAnchor)+" ")]),e("a",{staticClass:"no-underline",attrs:{target:"_blank",href:this.$aioseo.urls.aio.localSeo+"#/maps"}},[t._v(" \u2192 ")])]):t._e()])],1),t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.apiKey?e("div",[e("core-alert",{attrs:{type:"blue"}},[t._v(" "+t._s(t.strings.description)+" ")]),t.place?e("div",{staticClass:"information"},[t.place.latLng?e("div",{staticClass:"latLng"},[e("div",[e("strong",[t._v(t._s(t.strings.latitude))]),t._v(": "+t._s(t.place.latLng.lat)+" ")]),e("div",[e("strong",[t._v(t._s(t.strings.longitude))]),t._v(": "+t._s(t.place.latLng.lng)+" ")])]):t._e(),t.options.localBusiness.maps.mapsEmbedApiEnabled&&t.place.placeId?e("div",[e("strong",[t._v(t._s(t.strings.placeId))]),t._v(": "+t._s(t.place.placeId)+" ")]):t._e()]):t._e(),t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.apiKey?e("core-map",{attrs:{apiKey:t.options.localBusiness.maps.apiKey,options:t.getDataObject().mapOptions,placeId:t.getDataObject().placeId,marker:t.currentMarker,address:t.getDataObject().geocodeAddress,searchBox:!0},on:{"zoom-changed":function(s){return t.getDataObject().mapOptions.zoom=s},click:function(s){return t.updatePlace(s)},"marker-position-changed":function(s){return t.updatePlace(s)},"place-information":function(s){return t.place=s}}}):t._e(),e("div",{staticClass:"map-zoom"},[e("strong",[t._v(t._s(t.strings.zoom)+":")]),t._v(" "+t._s(t.getDataObject().mapOptions.zoom)+" ")]),this.getDataObject().placeId&&!t.options.localBusiness.maps.mapsEmbedApiEnabled?e("core-alert",{attrs:{type:"yellow"},domProps:{innerHTML:t._s(t.strings.placeSelected)}}):t._e()],1):t._e()])},st=[];const at={components:{CoreAlert:D,CoreMap:y},mixins:[O],data(){return{place:null,placesEmbedAvailable:null,strings:{map:this.$t.__("Map",this.$td),coordinates:this.$t.__("Coordinates",this.$td),latitude:this.$t.__("Latitude",this.$td),longitude:this.$t.__("Longitude",this.$td),zoom:this.$t.__("Zoom",this.$td),currentMarker:this.$t.__("Your current marker",this.$td),address:this.$t.__("Address",this.$td),phoneNumber:this.$t.__("Phone Number",this.$td),website:this.$t.__("Website",this.$td),placeId:this.$t.__("Place ID",this.$td),description:this.$t.__("Use the map below to set your exact location. Search for an address, select a business or click anywhere to place a marker.",this.$td),placeSelected:this.$t.sprintf(this.$t.__("You selected a Place (from Google Places) but your Maps Embed API is not enabled. For a more seamless experience and rich information cards please enable it in your Google Project. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapEmbedApi",!0)),apiKeyInvalid:this.$t.sprintf(this.$t.__("Your API Key is invalid. Please make sure you have set your key correctly. %1$s",this.$td),this.$links.getDocLink(this.$t.__("Learn more",this.$td),"localSeoMapSetup",!0)),apiKeyNotSet:this.$t.__("You must first enter a Google Maps API Key for this feature to work.",this.$td),apiKeyNotSetAnchor:this.$t.__("Click here to enter an API key",this.$td)}}},computed:{...o(["options"]),currentMarker(){return{position:this.getCoordinates(),icon:this.getDataObject().customMarker}}},methods:{updatePlace(t){this.getDataObject().mapOptions.center=t.lat?t.toJSON():t.latLng.toJSON(),this.getDataObject().placeId=t.placeId||null},getCoordinates(){return this.getDataObject().mapOptions.center.lat=parseFloat(this.getDataObject().mapOptions.center.lat),this.getDataObject().mapOptions.center.lng=parseFloat(this.getDataObject().mapOptions.center.lng),this.getDataObject().mapOptions.center}}},p={};var it=i(at,et,st,!1,nt,null,null,null);function nt(t){for(let a in p)this[a]=p[a]}const Pt=function(){return it.exports}();var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().name,callback:function(s){t.$set(t.getDataObject(),"name",s)},expression:"getDataObject().name"}}),e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.nameDesc))])],1)},rt=[];const ct={mixins:[n],data(){return{strings:{nameDesc:this.$t.__("Your name or company name.",this.$td)}}}},m={};var lt=i(ct,ot,rt,!1,dt,"3bbdb5b9",null,null);function dt(t){for(let a in m)this[a]=m[a]}const Bt=function(){return lt.exports}();var ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-local-business-payment-info"},[e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description"},[t._v(t._s(t.strings.priceIndicator))]),e("base-select",{attrs:{size:"medium",options:t.priceIndicatorOptions,placeholder:t.strings.selectPriceIndicator,value:t.priceIndicatorOptions.find(function(s){return s.value===t.getDataObject().payment.priceRange})},on:{input:function(s){return t.getDataObject().payment.priceRange=s.value}}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left",attrs:{id:"aioseo-local-business-currencies-accepted"}},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.currenciesAccepted))]),e("base-select",{staticClass:"aioseo-multiselect",attrs:{size:"medium",label:"currenciesAccepted","track-by":"value",options:t.currencies,placeholder:t.strings.selectCurrency,multiple:"","close-on-select":!1},model:{value:t.currenciesAccepted,callback:function(s){t.currenciesAccepted=s},expression:"currenciesAccepted"}})],1),e("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[e("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.paymentMethods))]),e("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().payment.methods,callback:function(s){t.$set(t.getDataObject().payment,"methods",s)},expression:"getDataObject().payment.methods"}})],1)])},_t=[];const pt={mixins:[n],data(){return{currencies:this.$constants.CURRENCY_LIST,strings:{priceIndicator:this.$t.__("Price Indicator",this.$td),currenciesAccepted:this.$t.__("Currencies Accepted",this.$td),paymentMethods:this.$t.__("Payment Methods Accepted",this.$td),selectPriceIndicator:this.$t.__("Select a price indicator...",this.$td),selectCurrency:this.$t.__("Select a currency...",this.$td)}}},computed:{priceIndicatorOptions(){return[{value:"$",label:"$"},{value:"$$",label:"$$"},{value:"$$$",label:"$$$"},{value:"$$$$",label:"$$$$"},{value:"$$$$$",label:"$$$$$"}]},currenciesAccepted:{get(){let t=this.getDataObject().payment.currenciesAccepted||[];return typeof t<"u"&&0<t.length&&(t=JSON.parse(t)),t},set(t){this.getDataObject().payment.currenciesAccepted=JSON.stringify(t)}}}},v={};var mt=i(pt,ut,_t,!1,vt,null,null,null);function vt(t){for(let a in v)this[a]=v[a]}const zt=function(){return mt.exports}();export{jt as L,St as a,It as b,At as c,Lt as d,kt as e,Pt as f,Bt as g,zt as h};