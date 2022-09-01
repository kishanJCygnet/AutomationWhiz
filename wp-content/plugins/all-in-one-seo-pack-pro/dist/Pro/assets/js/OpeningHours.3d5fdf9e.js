var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var u=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,d=(t,e)=>{for(var s in e||(e={}))O.call(e,s)&&u(t,s,e[s]);if(c)for(var s of c(e))C.call(e,s)&&u(t,s,e[s]);return t};import{a as S}from"./index.63323e13.js";import{B as f}from"./Checkbox.5873a8d2.js";import{B as b}from"./RadioToggle.98e1e7ec.js";import{C as w}from"./Index.05a01367.js";import{C as r}from"./Card.b87ede7d.js";import{C as y}from"./SettingsRow.eb71f07b.js";import{C as H}from"./AttributesList.d348890d.js";import{C as k}from"./DisplayInfo.d59f4e7c.js";import{n}from"./vueComponentNormalizer.87056a83.js";import{A as D,U as R}from"./UpdateCta.38b26278.js";import{C as T}from"./Blur.8490ecd2.js";import{R as L}from"./RequiredPlans.27e26653.js";import{C as A}from"./ProBadge.7c0de2f7.js";import{C as z}from"./Index.842cade7.js";import{A as F}from"./ToolsSettings.9a525564.js";import"./helpers.d992cd63.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./Checkmark.e7547654.js";import"./index.cd641513.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.40d5dc79.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";import"./Php.8f904d07.js";import"./CheckSolid.99652043.js";import"./Copy.a07db25e.js";import"./Modal.ff6affc5.js";import"./cleanForSlug.6eecf7c2.js";var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-display-info",{attrs:{label:t.label,options:t.displayOptions},scopedSlots:t._u([{key:"shortcodeAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.phpArgumentsDescription,attributes:t.attributes}})]},proxy:!0}])})},j=[];const U={components:{CoreAttributesList:H,CoreDisplayInfo:k},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_title",description:this.$t.__("Show or hide the title.",this.$td)},{name:"show_icons",description:this.$t.__("Show or hide icons ( address, phone, fax, email ).",this.$td)},{name:"show_monday",description:this.$t.__("Show or hide the monday hours.",this.$td)},{name:"show_tuesday",description:this.$t.__("Show or hide the tuesday hours.",this.$td)},{name:"show_wednesday",description:this.$t.__("Show or hide the wednesday hours.",this.$td)},{name:"show_thursday",description:this.$t.__("Show or hide the thursday hours.",this.$td)},{name:"show_friday",description:this.$t.__("Show or hide the friday hours.",this.$td)},{name:"show_saturday",description:this.$t.__("Show or hide the saturday hours.",this.$td)},{name:"show_sunday",description:this.$t.__("Show or hide the sunday hours.",this.$td)},{name:"label",description:this.$t.__("The label.",this.$td)}]}}},_={};var B=n(U,M,j,!1,I,null,null,null);function I(t){for(let e in _)this[e]=_[e]}var W=function(){return B.exports}(),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-opening-hours"},[s("core-card",{attrs:{slug:"localBusinessOpeningHours","header-text":t.strings.openingHours}},[s("core-settings-row",{staticClass:"info-openinghours-row",attrs:{name:t.strings.showOpeningHours,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("base-radio-toggle",{attrs:{name:"openingHours",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.getDataObject().show,callback:function(a){t.$set(t.getDataObject(),"show",a)},expression:"getDataObject().show"}})],1)]},proxy:!0}])}),s("local-business-opening-hours-display-info",{attrs:{label:t.strings.displayOpeningHours,displayOptions:t.displayInfo}}),t.getDataObject().show&&t.isMultipleLocations()&&t.$aioseo.license.isActive?s("core-settings-row",{attrs:{name:t.strings.defaultLocationSettings,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-alert",{domProps:{innerHTML:t._s(t.strings.closedLabelIntro)}})]},proxy:!0}],null,!1,496858497)}):t._e(),t.getDataObject().show?s("core-settings-row",{staticClass:"info-labels-row",attrs:{name:t.strings.labels,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("span",{staticClass:"field-description mt-8"},[t._v(t._s(t.strings.open24Label))]),s("base-input",{attrs:{size:"medium"},model:{value:t.getDataObject().labels.alwaysOpen,callback:function(a){t.$set(t.getDataObject().labels,"alwaysOpen",a)},expression:"getDataObject().labels.alwaysOpen"}}),s("div",{staticClass:"aioseo-description"},[t._v(t._s(t.strings.open24LabelDesc))])],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("span",{staticClass:"field-description"},[t._v(t._s(t.strings.closedLabel))]),s("base-input",{attrs:{type:"text",size:"medium"},model:{value:t.getDataObject().labels.closed,callback:function(a){t.$set(t.getDataObject().labels,"closed",a)},expression:"getDataObject().labels.closed"}}),s("div",{staticClass:"aioseo-description"},[t._v(t._s(t.strings.closedLabelDesc))])],1)]},proxy:!0}],null,!1,609632856)}):t._e(),t.getDataObject().show?s("core-settings-row",{staticClass:"info-settings-row",attrs:{name:"Settings",align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("base-toggle",{model:{value:t.getDataObject().alwaysOpen,callback:function(a){t.$set(t.getDataObject(),"alwaysOpen",a)},expression:"getDataObject().alwaysOpen"}},[t._v(" "+t._s(t.strings.open247)+" ")])],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left mt-16"},[t.getDataObject().alwaysOpen?t._e():s("base-toggle",{model:{value:t.getDataObject().use24hFormat,callback:function(a){t.$set(t.getDataObject(),"use24hFormat",a)},expression:"getDataObject().use24hFormat"}},[t._v(" "+t._s(t.strings.use24hFormat)+" ")])],1)]},proxy:!0}],null,!1,1790874724)}):t._e(),t.getDataObject().show&&!t.getDataObject().alwaysOpen?s("core-settings-row",{staticClass:"info-hours-row",attrs:{name:t.strings.hours,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},t._l(t.weekdays,function(a,o){return s("div",{key:o,staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(a)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{disabled:t.getWeekDay(o).open24h||t.getWeekDay(o).closed,size:"medium",options:t.getDataObject().use24hFormat?t.$constants.HOURS_24H_FORMAT:t.$constants.HOURS_12H_FORMAT,value:t.getSelectOptions(t.getWeekDay(o).openTime)},on:{input:function(i){return t.saveDay(o,"openTime",i.value)}}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{disabled:t.getWeekDay(o).open24h||t.getWeekDay(o).closed,size:"medium",options:t.getDataObject().use24hFormat?t.$constants.HOURS_24H_FORMAT:t.$constants.HOURS_12H_FORMAT,value:t.getSelectOptions(t.getWeekDay(o).closeTime)},on:{input:function(i){return t.saveDay(o,"closeTime",i.value)}}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{disabled:t.getWeekDay(o).closed,size:"medium"},model:{value:t.getWeekDay(o).open24h,callback:function(i){t.$set(t.getWeekDay(o),"open24h",i)},expression:"getWeekDay(index).open24h"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"},model:{value:t.getWeekDay(o).closed,callback:function(i){t.$set(t.getWeekDay(o),"closed",i)},expression:"getWeekDay(index).closed"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)])}),0)]},proxy:!0}],null,!1,3629777455)}):t._e()],1)],1)},G=[];const P={components:{BaseCheckbox:f,BaseRadioToggle:b,CoreAlert:w,CoreCard:r,CoreSettingsRow:y,LocalBusinessOpeningHoursDisplayInfo:W},data(){return{displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Opening Hours" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_opening_hours]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the opening hours info. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeOpeningHours",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Opening Hours" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_opening_hours' ) ) aioseo_local_opening_hours(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the opening hours. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionOpeningHours",!0))}},strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),defaultLocationSettings:this.$t.__("Default Location Settings",this.$td),closedLabel:this.$t.__("Closed",this.$td),closedLabelDesc:this.$t.__("Displayed when the business is closed.",this.$td),closedLabelIntro:this.$t.sprintf(this.$t.__("Below are the default settings for all locations, which can be overwritten per %1$slocation%2$s.",this.$td),`<a href="${this.$aioseo.localBusiness.postTypeEditLink}">`,"</a>"),alwaysOpenLabel:this.$t.__("Open 24h label",this.$td),open24LabelDesc:this.$t.__("Displayed when the business is open all day long.",this.$td),open24Label:this.$t.__("Open 24h",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone",this.$td),hours:this.$t.__("Hours",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)},weekdays:{monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td)}}},computed:d({},S(["currentPost","options"])),methods:{isMultipleLocations(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.locations.general.multiple:this.options.localBusiness.locations.general.multiple},getDataObject(){return this.$root._data.screenContext==="metabox"?this.currentPost.local_seo.openingHours:this.options.localBusiness.openingHours},getSelectOptions(t){return this.getDataObject().use24hFormat?this.$constants.HOURS_24H_FORMAT.find(e=>e.value===t):this.$constants.HOURS_12H_FORMAT.find(e=>e.value===t)},getSelectTimezone(t){return this.$constants.TIMEZONES.find(e=>e.value===t)},saveDay(t,e,s){this.$set(this.getDataObject().days[t],e,s)},saveTimezone(t){this.$set(this.getDataObject(),"timezone",t)},getWeekDay(t){return this.getDataObject().days[t]}}},h={};var N=n(P,E,G,!1,q,null,null,null);function q(t){for(let e in h)this[e]=h[e]}var Z=function(){return N.exports}(),K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-opening-hours-blur"},[s("core-blur",[s("core-settings-row",{staticClass:"info-openinghours-row",attrs:{name:t.strings.showOpeningHours,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("base-radio-toggle",{attrs:{name:"openingHours",value:!0,options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]}})],1)]},proxy:!0}])}),s("core-settings-row",{staticClass:"info-hours-row",attrs:{name:t.strings.hours,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("base-toggle",[t._v(" "+t._s(t.strings.open247)+" ")])],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left mt-16"},[s("base-toggle",[t._v(" "+t._s(t.strings.use24hFormat)+" ")])],1),s("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.monday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.tuesday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.wednesday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.thursday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.friday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.saturday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)]),s("div",{staticClass:"aioseo-col-flex text-xs-left"},[s("div",{staticClass:"aioseo-col-day text-xs-left"},[t._v(" "+t._s(t.strings.sunday)+" ")]),s("div",{staticClass:"aioseo-col-hours text-xs-left"},[s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"09:00"}}),s("span",{staticClass:"separator"},[t._v("-")]),s("base-select",{attrs:{size:"medium",options:t.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),s("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[s("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.open24h)+" ")]),s("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[t._v(" "+t._s(t.strings.closed)+" ")])],1)])])]},proxy:!0}])})],1)],1)},J=[];const Q={components:{BaseCheckbox:f,BaseRadioToggle:b,CoreBlur:T,CoreSettingsRow:y},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),closedLabel:this.$t.__("Closed label",this.$td),closedLabelDesc:this.$t.__("Text to display when 'Closed' setting is checked",this.$td),alwaysOpenLabel:this.$t.__("Open 24h label",this.$td),alwaysOpenLabelDesc:this.$t.__("Text to display when 'Open 24h' setting is checked",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},p={};var V=n(Q,K,J,!1,X,null,null,null);function X(t){for(let e in p)this[e]=p[e]}var l=function(){return V.exports}(),Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("core-card",{attrs:{slug:"localBusinessOpeningHours","header-text":t.strings.openingHours,noSlide:!0}},[s("blur"),s("activate-cta")],1)],1)},tt=[];const st={components:{ActivateCta:D,Blur:l,CoreCard:r},data(){return{strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}},$={};var et=n(st,Y,tt,!1,ot,null,null,null);function ot(t){for(let e in $)this[e]=$[e]}var at=function(){return et.exports}(),it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-opening-hours"},[s("core-card",{attrs:{slug:"localBusinessOpeningHours",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.openingHours))]),s("core-pro-badge")]},proxy:!0}])},[s("blur"),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[s("required-plans",{attrs:{addon:"aioseo-local-business"}}),t._v(" "+t._s(t.strings.locationInfo1)+" ")]},proxy:!0}])})],1)],1)},nt=[];const rt={components:{Blur:l,RequiredPlans:L,CoreCard:r,CoreProBadge:A,Cta:z},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},g={};var lt=n(rt,it,nt,!1,ct,null,null,null);function ct(t){for(let e in g)this[e]=g[e]}var ut=function(){return lt.exports}(),dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("core-card",{attrs:{slug:"localBusinessOpeningHours","header-text":t.strings.openingHours,noSlide:!0}},[s("blur"),s("update-cta")],1)],1)},_t=[];const ht={components:{Blur:l,CoreCard:r,UpdateCta:R},data(){return{strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}},m={};var pt=n(ht,dt,_t,!1,$t,null,null,null);function $t(t){for(let e in m)this[e]=m[e]}var gt=function(){return pt.exports}(),mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-opening-hours"},[t.shouldShowMain?s("opening-hours"):t._e(),t.shouldShowActivate?s("activate"):t._e(),t.shouldShowUpdate?s("update"):t._e(),t.shouldShowLite?s("lite"):t._e()],1)},vt=[];const ft={mixins:[F],components:{OpeningHours:Z,Activate:at,Lite:ut,Update:gt},data(){return{addonSlug:"aioseo-local-business"}}},v={};var bt=n(ft,mt,vt,!1,yt,null,null,null);function yt(t){for(let e in v)this[e]=v[e]}var ss=function(){return bt.exports}();export{ss as default};