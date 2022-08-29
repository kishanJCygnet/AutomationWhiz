var m=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var n=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,p=(t,e)=>{for(var a in e||(e={}))g.call(e,a)&&n(t,a,e[a]);if(c)for(var a of c(e))f.call(e,a)&&n(t,a,e[a]);return t};var r=(t,e,a)=>(n(t,typeof e!="symbol"?e+"":e,a),a);import{a as k}from"./index.63323e13.js";import{V as h,n as y}from"./vueComponentNormalizer.87056a83.js";import{i as b}from"./isEqual.b2245f38.js";import{t as _}from"./constants.40d5dc79.js";var v=0;function d(t){var e=++v;return _(t)+e}var D={computed:p({},k(["currentPost","options"])),methods:{getDataObject(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.maps:this.options.localBusiness.maps}}};async function O(t,e){if(!t||!e)return!1;switch(e){case"places/embed":return await h.prototype.$http.post(h.prototype.$links.restUrl("local-business/maps/check-api-enabled")).send({apiKey:t,apiName:e}).then(a=>a.statusCode===200).catch(a=>!1);default:return!1}}async function w(t,e,a){if(!t)return!1;let s=null;switch(e){case"places":return s=new t.maps.places.AutocompleteService,new Promise(i=>{s.getQueryPredictions({input:a||"NYC"},function(l,o){i(o===t.maps.places.PlacesServiceStatus.OK)})});case"geocoder":return s=new t.maps.Geocoder,new Promise(i=>{s.geocode({address:a||"NYC"},function(l,o){o===t.maps.GeocoderStatus.OK&&i({enabled:!0,result:l[0].geometry.location}),i({enabled:!1})})});default:return!1}}class M{constructor({apiKey:e,version:a,libraries:s}){r(this,"url","https://maps.googleapis.com/maps/api/js");r(this,"scriptId","localseo-maps-script");r(this,"loading",!1);r(this,"googleMapCallback","aioseoGoogleMapsLoaded");r(this,"callbacks",[]);this.apiKey=e,this.version=a||"weekly",this.libraries=s||[]}createUrl(){let e=this.url;return e+=`?callback=${this.googleMapCallback}`,this.apiKey&&(e+=`&key=${this.apiKey}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),0<this.libraries.length&&(e+=`&libraries=${this.libraries.join(",")}`),this.version&&(e+=`&v=${this.version}`),e}async load(){return new Promise((e,a)=>{this.loadCallback(s=>{s?a(s):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setCallback(){window.aioseoGoogleMapsLoaded=this.callback.bind(this)}callback(){this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}setScript(){this.reset();const e=this.createUrl(),a=document.createElement("script");a.id=this.scriptId,a.type="text/javascript",a.src=e,a.onerror=this.loadErrorCallback.bind(this),a.defer=!0,a.async=!0,this.nonce&&(a.nonce=this.nonce),document.head.appendChild(a)}loadErrorCallback(e){this.onerrorEvent=e,this.callback()}reset(){this.deleteScript(),window.google&&window.google.maps&&(window.google.maps=null)}deleteScript(){const e=document.getElementById(this.scriptId);e&&e.remove()}execute(){this.setCallback(),this.setScript()}}var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mapBox"},[this.searchBox?a("input",{staticClass:"searchInput",style:{display:t.placesLibraryAvailable?"block":"none"},attrs:{id:t.mapSearchBoxId}}):t._e(),a("div",{staticClass:"map",attrs:{id:t.mapDivId}}),t.preventInteraction?a("div",{staticClass:"preventInteraction"}):t._e()])])},x=[];const S={props:{apiKey:String,options:Object,marker:Object,placeId:String,address:String,searchBox:{type:Boolean,default(){return!1}},preventInteraction:{type:Boolean,default(){return!1}},watchOptions:{type:Boolean,default(){return!1}}},data(){return{mapDivId:null,mapSearchBoxId:null,google:null,map:null,mapMarker:null,loader:null,placesLibraryAvailable:!1,strings:{map:this.$t.__("Map",this.$td)}}},watch:{marker(){this.mapMarker&&this.changeIcon(this.marker.icon)},"options.mapTypeId":{handler:function(){this.map.setOptions(this.options)}},apiKey(){this.loadMap()}},methods:{createMap(){this.map=new this.google.maps.Map(document.getElementById(this.mapDivId),this.options),this.map.addListener("zoom_changed",()=>{this.$emit("zoom-changed",this.map.getZoom())}),this.map.addListener("click",t=>{this.$emit("click",t),this.mapMarker&&(t.placeId?this.removeMarker():this.createMarker(t.latLng),this.placeInformation(t))})},createSearchBox(){if(!this.searchBox)return;const t=document.getElementById(this.mapSearchBoxId),e=new this.google.maps.places.SearchBox(t);this.map.controls[this.google.maps.ControlPosition.TOP_LEFT].push(t),e.addListener("places_changed",()=>{const a=e.getPlaces();if(a.length===0)return;this.removeMarker();const s=new this.google.maps.LatLngBounds;a.forEach(i=>{if(!i.geometry||!i.geometry.location){console.warn("Returned place contains no geometry");return}this.createMarker(i.geometry.location),i.geometry.viewport?s.union(i.geometry.viewport):s.extend(i.geometry.location)}),this.map.fitBounds(s)})},changeIcon(t){if(!t){this.mapMarker.setIcon(null);return}this.mapMarker.setIcon({url:t,size:new this.google.maps.Size(25,25),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(17,34),scaledSize:new this.google.maps.Size(25,25)})},createMarker(t,e=!1){this.mapMarker||(this.mapMarker=new this.google.maps.Marker({map:this.map,draggable:!0}),this.mapMarker.addListener("position_changed",()=>{this.placeInformation({latLng:this.mapMarker.getPosition()}),this.$emit("marker-position-changed",this.mapMarker.getPosition())})),t&&(this.mapMarker.setPosition(t),e&&this.map.setCenter(t)),this.changeIcon(this.marker.icon),this.mapMarker.setMap(this.map)},removeMarker(){this.mapMarker&&this.mapMarker.setMap(null)},loadMap(){(typeof window.google!="undefined"&&typeof window.google.maps!="undefined"&&typeof window.google.maps.plugins!="undefined"&&typeof window.google.maps.plugins.loader!="undefined"?new window.google.maps.plugins.loader.Loader({apiKey:this.apiKey,libraries:["places"]}):new M({apiKey:this.apiKey,libraries:["places"]})).load().then(e=>{this.google=e,this.createMap(),this.createMarker(),!this.placeId&&this.marker&&this.createMarker(this.marker.position),this.address&&this.isMarkerDefault()&&this.libraryEnabled("geocoder",this.address).then(a=>{a.enabled&&a.result&&this.createMarker(a.result,!0)}),this.libraryEnabled("places").then(a=>{this.$emit("places-library-available",a),a&&(this.placesLibraryAvailable=!0,this.createSearchBox())}),this.$emit("map-loaded"),this.placeInformation({placeId:this.placeId,latLng:this.marker.position})})},placeInformation(t){typeof t.latLng!="undefined"&&typeof t.latLng.lat=="function"&&(t.latLng=t.latLng.toJSON()),this.$emit("place-information",t)},libraryEnabled(t,e){return w(this.google,t,e)},isMarkerDefault(){return!!(this.marker&&b(this.marker.position,this.$aioseo.localBusiness.mapDefaults.center))}},mounted(){!this.apiKey||(this.mapDivId=d("map_"),this.mapSearchBoxId=d("search_box_"),this.loadMap())}},u={};var L=y(S,I,x,!1,C,"afdb0f9a",null,null);function C(t){for(let e in u)this[e]=u[e]}var j=function(){return L.exports}();export{j as C,D,O as i};
