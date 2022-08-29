var h=Object.defineProperty;var d=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var r=(e,t,a)=>(d(e,typeof t!="symbol"?t+"":t,a),a);import{V as l,n as u}from"./vueComponentNormalizer.87056a83.js";import{i as m}from"./isEqual.d2ebe83c.js";import{t as g}from"./index.9b0095cc.js";var f=0;function c(e){var t=++f;return g(e)+t}async function C(e,t){if(!e||!t)return!1;switch(t){case"places/embed":return await l.prototype.$http.post(l.prototype.$links.restUrl("local-business/maps/check-api-enabled")).send({apiKey:e,apiName:t}).then(a=>a.statusCode===200).catch(a=>!1);default:return!1}}async function k(e,t,a){if(!e)return!1;let i=null;switch(t){case"places":return i=new e.maps.places.AutocompleteService,new Promise(s=>{i.getQueryPredictions({input:a||"NYC"},function(n,o){s(o===e.maps.places.PlacesServiceStatus.OK)})});case"geocoder":return i=new e.maps.Geocoder,new Promise(s=>{i.geocode({address:a||"NYC"},function(n,o){o===e.maps.GeocoderStatus.OK&&s({enabled:!0,result:n[0].geometry.location}),s({enabled:!1})})});default:return!1}}class y{constructor({apiKey:t,version:a,libraries:i}){r(this,"url","https://maps.googleapis.com/maps/api/js");r(this,"scriptId","localseo-maps-script");r(this,"loading",!1);r(this,"googleMapCallback","aioseoGoogleMapsLoaded");r(this,"callbacks",[]);this.apiKey=t,this.version=a||"weekly",this.libraries=i||[]}createUrl(){let t=this.url;return t+=`?callback=${this.googleMapCallback}`,this.apiKey&&(t+=`&key=${this.apiKey}`),0<this.libraries.length&&(t+=`&libraries=${this.libraries.join(",")}`),0<this.libraries.length&&(t+=`&libraries=${this.libraries.join(",")}`),this.version&&(t+=`&v=${this.version}`),t}async load(){return new Promise((t,a)=>{this.loadCallback(i=>{i?a(i):t(window.google)})})}loadCallback(t){this.callbacks.push(t),this.execute()}setCallback(){window.aioseoGoogleMapsLoaded=this.callback.bind(this)}callback(){this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}setScript(){this.reset();const t=this.createUrl(),a=document.createElement("script");a.id=this.scriptId,a.type="text/javascript",a.src=t,a.onerror=this.loadErrorCallback.bind(this),a.defer=!0,a.async=!0,this.nonce&&(a.nonce=this.nonce),document.head.appendChild(a)}loadErrorCallback(t){this.onerrorEvent=t,this.callback()}reset(){this.deleteScript(),window.google&&window.google.maps&&(window.google.maps=null)}deleteScript(){const t=document.getElementById(this.scriptId);t&&t.remove()}execute(){this.setCallback(),this.setScript()}}var b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"mapBox"},[this.searchBox?a("input",{staticClass:"searchInput",style:{display:e.placesLibraryAvailable?"block":"none"},attrs:{id:e.mapSearchBoxId}}):e._e(),a("div",{staticClass:"map",attrs:{id:e.mapDivId}}),e.preventInteraction?a("div",{staticClass:"preventInteraction"}):e._e()])])},_=[];const v={props:{apiKey:String,options:Object,marker:Object,placeId:String,address:String,searchBox:{type:Boolean,default(){return!1}},preventInteraction:{type:Boolean,default(){return!1}},watchOptions:{type:Boolean,default(){return!1}}},data(){return{mapDivId:null,mapSearchBoxId:null,google:null,map:null,mapMarker:null,loader:null,placesLibraryAvailable:!1,strings:{map:"Map"}}},watch:{marker(){this.mapMarker&&this.changeIcon(this.marker.icon)},"options.mapTypeId":{handler:function(){this.map.setOptions(this.options)}},apiKey(){this.loadMap()}},methods:{createMap(){this.map=new this.google.maps.Map(document.getElementById(this.mapDivId),this.options),this.map.addListener("zoom_changed",()=>{this.$emit("zoom-changed",this.map.getZoom())}),this.map.addListener("click",e=>{this.$emit("click",e),this.mapMarker&&(e.placeId?this.removeMarker():this.createMarker(e.latLng),this.placeInformation(e))})},createSearchBox(){if(!this.searchBox)return;const e=document.getElementById(this.mapSearchBoxId),t=new this.google.maps.places.SearchBox(e);this.map.controls[this.google.maps.ControlPosition.TOP_LEFT].push(e),t.addListener("places_changed",()=>{const a=t.getPlaces();if(a.length===0)return;this.removeMarker();const i=new this.google.maps.LatLngBounds;a.forEach(s=>{if(!s.geometry||!s.geometry.location){console.warn("Returned place contains no geometry");return}this.createMarker(s.geometry.location),s.geometry.viewport?i.union(s.geometry.viewport):i.extend(s.geometry.location)}),this.map.fitBounds(i)})},changeIcon(e){if(!e){this.mapMarker.setIcon(null);return}this.mapMarker.setIcon({url:e,size:new this.google.maps.Size(25,25),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(17,34),scaledSize:new this.google.maps.Size(25,25)})},createMarker(e,t=!1){this.mapMarker||(this.mapMarker=new this.google.maps.Marker({map:this.map,draggable:!0}),this.mapMarker.addListener("position_changed",()=>{this.placeInformation({latLng:this.mapMarker.getPosition()}),this.$emit("marker-position-changed",this.mapMarker.getPosition())})),e&&(this.mapMarker.setPosition(e),t&&this.map.setCenter(e)),this.changeIcon(this.marker.icon),this.mapMarker.setMap(this.map)},removeMarker(){this.mapMarker&&this.mapMarker.setMap(null)},loadMap(){(typeof window.google!="undefined"&&typeof window.google.maps!="undefined"&&typeof window.google.maps.plugins!="undefined"&&typeof window.google.maps.plugins.loader!="undefined"?new window.google.maps.plugins.loader.Loader({apiKey:this.apiKey,libraries:["places"]}):new y({apiKey:this.apiKey,libraries:["places"]})).load().then(t=>{this.google=t,this.createMap(),this.createMarker(),!this.placeId&&this.marker&&this.createMarker(this.marker.position),this.address&&this.isMarkerDefault()&&this.libraryEnabled("geocoder",this.address).then(a=>{a.enabled&&a.result&&this.createMarker(a.result,!0)}),this.libraryEnabled("places").then(a=>{this.$emit("places-library-available",a),a&&(this.placesLibraryAvailable=!0,this.createSearchBox())}),this.$emit("map-loaded"),this.placeInformation({placeId:this.placeId,latLng:this.marker.position})})},placeInformation(e){typeof e.latLng!="undefined"&&typeof e.latLng.lat=="function"&&(e.latLng=e.latLng.toJSON()),this.$emit("place-information",e)},libraryEnabled(e,t){return k(this.google,e,t)},isMarkerDefault(){return!!(this.marker&&m(this.marker.position,this.$aioseo.localBusiness.mapDefaults.center))}},mounted(){!this.apiKey||(this.mapDivId=c("map_"),this.mapSearchBoxId=c("search_box_"),this.loadMap())}},p={};var w=u(v,b,_,!1,M,"afdb0f9a",null,null);function M(e){for(let t in p)this[t]=p[t]}var B=function(){return w.exports}();export{B as C,C as i};
