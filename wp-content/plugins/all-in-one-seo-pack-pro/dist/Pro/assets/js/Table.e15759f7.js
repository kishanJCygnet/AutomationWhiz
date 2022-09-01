import{C as _}from"./Blur.17e6ffab.js";import{C as g}from"./index.1a8da5ff.js";import{C as h}from"./Tooltip.bd71695e.js";import{a as v}from"./index.670b7e80.js";import{n as o}from"./vueComponentNormalizer.a77505d6.js";import{T as f}from"./Slide.b9a2da7a.js";var y=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"aioseo-wp-additional-filters alignleft actions"},[e._l(e.additionalFilters,function(t,i){return[a("label",{key:i+"_label",staticClass:"screen-reader-text",attrs:{for:"filter-by-date"}},[e._v(e._s(t.label))]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFilters[t.name],expression:"selectedFilters[filter.name]"}],key:i+"_select",attrs:{name:t.name},on:{change:[function(r){var n=Array.prototype.filter.call(r.target.options,function(l){return l.selected}).map(function(l){var m="_value"in l?l._value:l.value;return m});e.$set(e.selectedFilters,t.name,r.target.multiple?n:n[0])},function(r){return e.$emit("change",{name:t.name,selectedValue:r.target.value})}]}},e._l(t.options,function(r,n){return a("option",{key:n,domProps:{value:r.value}},[e._v(" "+e._s(r.label)+" ")])}),0)]}),a("button",{staticClass:"button action",on:{click:function(t){return e.$emit("process-additional-filters",e.selectedFilters)}}},[e._v(" "+e._s(e.strings.filter)+" ")])],2)},k=[];const P={props:{additionalFilters:{type:Array,required:!0}},data(){return{strings:{filter:this.$t.__("Filter",this.$td)}}},computed:{...v("redirects",["selectedFilters"])},mounted(){this.setInitialOptions()},updated(){this.setInitialOptions()},methods:{setInitialOptions(){this.additionalFilters.forEach(e=>{this.selectedFilters[e.name]||this.$set(this.selectedFilters,e.name,e.options[0].value)})}}},c={};var $=o(P,y,k,!1,w,null,null,null);function w(e){for(let s in c)this[s]=c[s]}const C=function(){return $.exports}();var N=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"aioseo-wp-bulk-actions alignleft actions bulkactions"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.bulkAction,expression:"bulkAction"}],attrs:{disabled:e.disableTable},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(r){return r.selected}).map(function(r){var n="_value"in r?r._value:r.value;return n});e.bulkAction=t.target.multiple?i:i[0]}}},[a("option",{attrs:{value:"-1"}},[e._v(e._s(e.strings.bulkActions))]),e._l(e.bulkOptions,function(t,i){return a("option",{key:i,domProps:{value:t.value}},[e._v(e._s(t.label))])})],2),a("button",{staticClass:"button action",attrs:{disabled:e.disableTable},on:{click:function(t){e.bulkAction!=="-1"&&e.$emit("process-bulk-action",e.bulkAction)}}},[e._v(" "+e._s(e.strings.apply)+" ")])])},T=[];const A={props:{bulkOptions:{type:Array,required:!0},disableTable:Boolean},data(){return{bulkAction:"-1",strings:{bulkActions:this.$t.__("Bulk Actions",this.$td),apply:this.$t.__("Apply",this.$td)}}}},u={};var F=o(A,N,T,!1,x,null,null,null);function x(e){for(let s in u)this[s]=u[s]}const B=function(){return F.exports}();var R=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"aioseo-wp-items-per-page alignleft"},[a("label",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.itemsPerPage,expression:"itemsPerPage"}],attrs:{disabled:e.disableTable},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(r){return r.selected}).map(function(r){var n="_value"in r?r._value:r.value;return n});e.itemsPerPage=t.target.multiple?i:i[0]}}},e._l(e.items,function(t,i){return a("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])}),0),a("span",[e._v(e._s(e.strings.itemsPerPage))])])])},S=[];const I={props:{value:Number,disableTable:Boolean},data(){return{items:[5,10,20,25,50,100],itemsPerPage:20,strings:{itemsPerPage:this.$t.__("items per page",this.$td)}}},watch:{itemsPerPage(e){this.$emit("input",e)}},mounted(){this.itemsPerPage=this.value}},p={};var O=o(I,R,S,!1,q,null,null,null);function q(e){for(let s in p)this[s]=p[s]}const E=function(){return O.exports}();var D=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"tablenav-pages pagination"},[a("span",{staticClass:"displaying-num"},[e._v(e._s(e.$numbers.numberFormat(e.totals.total))+" "+e._s(e.strings.items))]),a("span",{staticClass:"pagination-links"},[a(e.pageNumber===1?"span":"a",{tag:"component",class:e.pageNumber===1?"tablenav-pages-navspan button disabled":"first-page button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.pageNumber===1||e.toPage(1)}}},[e._v(" \xAB ")]),a(e.pageNumber===1?"span":"a",{tag:"component",class:e.pageNumber===1?"tablenav-pages-navspan button disabled":"prev-page button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.pageNumber===1||e.toPage(e.pageNumber-1)}}},[e._v("\u2039")]),a("span",{staticClass:"paging-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pageNumber,expression:"pageNumber"}],staticClass:"current-page",attrs:{type:"number",name:"paged",size:"2",min:1,max:e.totals.pages,step:1,"aria-describedby":"table-paging",disabled:!e.totals.pages||e.disableTable},domProps:{value:e.pageNumber},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.toPage(e.pageNumber)},input:function(t){t.target.composing||(e.pageNumber=t.target.value)}}}),a("span",{staticClass:"tablenav-paging-text"},[e._v(" "+e._s(e.strings.of)+" "+e._s(e.totals.pages)+" ")])]),a(e.pageNumber===e.totals.pages||!e.totals.pages?"span":"a",{tag:"component",class:e.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"next-page button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.pageNumber===e.totals.pages||!e.totals.pages||e.toPage(e.pageNumber+1)}}},[e._v(" \u203A ")]),a(e.pageNumber===e.totals.pages||!e.totals.pages?"span":"a",{tag:"component",class:e.pageNumber===e.totals.pages||!e.totals.pages?"tablenav-pages-navspan button disabled":"last-page button",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.pageNumber===e.totals.pages||!e.totals.pages||e.toPage(e.totals.pages)}}},[e._v(" \xBB ")])],1)])},j=[];const M={props:{totals:{type:Object,required:!0},initialPageNumber:{type:Number,default(){return 1}},disableTable:Boolean},data(){return{pageNumber:1,strings:{of:this.$t.__("of",this.$td),items:this.$t.__("items",this.$td)}}},watch:{initialPageNumber(e){e!==this.pageNumber&&(this.pageNumber=e)}},methods:{toPage(e){this.pageNumber=e,this.$emit("paginate",parseInt(e))}},created(){this.pageNumber=this.initialPageNumber}},d={};var L=o(M,D,j,!1,W,null,null,null);function W(e){for(let s in d)this[s]=d[s]}const z=function(){return L.exports}();var H=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"aioseo-wp-table"},[e.showHeader?a("div",{staticClass:"header"},[a("ul",{staticClass:"subsubsub"},e._l(e.filters,function(t,i){return a("li",{key:i,class:t.slug},[a("span",{staticClass:"name",class:{active:t.active}},[!t.active&&!e.disableTable?a("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),e.processFilter(t)}}},[e._v(" "+e._s(t.name)+" "),e.showFilterCount(t)?a("span",[e._v("\xA0("+e._s(e.$numbers.numberFormat(t.count))+")")]):e._e()]):e._e(),t.active||e.disableTable?[e._v(" "+e._s(t.name)+" "),e.showFilterCount(t)?a("span",[e._v("\xA0("+e._s(e.$numbers.numberFormat(t.count))+")")]):e._e()]:e._e()],2),i+1<e.filters.length?a("span",{staticClass:"separator"},[e._v("|")]):e._e()])}),0),e.showSearch?a("p",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{type:"search",id:"post-search-input",name:"s",disabled:e.disableTable},domProps:{value:e.searchTerm},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.searchTerm)},search:function(t){return e.$emit("search",e.searchTerm)},input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),a("input",{staticClass:"button",attrs:{type:"submit",id:"search-submit",disabled:e.disableTable},domProps:{value:e.searchLabel},on:{click:function(t){return t.preventDefault(),e.$emit("search",e.searchTerm)}}})]):e._e(),a("div",{staticClass:"tablenav top"},[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?a("core-wp-bulk-actions",{attrs:{"bulk-options":e.bulkOptions,"disable-table":e.disableTable},on:{"process-bulk-action":e.processBulkAction}}):e._e(),e.additionalFilters&&e.additionalFilters.length?a("core-wp-additional-filters",{attrs:{"additional-filters":e.additionalFilters},on:{change:function(t){return e.$emit("additional-filter-option-selected",t)},"process-additional-filters":e.processAdditionalFilters}}):e._e(),e.showPagination?a("core-wp-pagination",{attrs:{totals:e.totals,"initial-page-number":e.pageNumber,"disable-table":e.disableTable},on:{paginate:e.processPaginate}}):e._e(),a("br",{staticClass:"clear"})],1)]):e._e(),a("div",{staticClass:"wp-table"},[a("table",{ref:"table",staticClass:"wp-list-table widefat fixed",class:{blurred:e.blurRows},attrs:{cellpadding:"0",cellspacing:"0","aria-label":"Paginated Table"}},[a("thead",[a("tr",[e.showBulkActions?a("td",{staticClass:"manage-column column-cb check-column"},[a("input",{attrs:{type:"checkbox",disabled:e.loading||e.disableTable}})]):e._e(),e._l(e.columns,function(t,i){return a("th",{key:i,staticClass:"manage-column",class:[{sortable:!e.disableTable&&t.sortable,asc:t.sortDir==="asc"&&t.sortable,desc:t.sortDir==="desc"&&t.sortable,sorted:t.sortable&&t.sorted},t.slug],style:{width:t.width},attrs:{scope:"col"}},[!t.tooltipIcon&&t.sortable?[a("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),function(n){return e.$emit("sort-column",t,n)}.apply(null,arguments)}}},[a("span",[e._v(e._s(t.label))]),a("span",{staticClass:"sorting-indicator"})])]:e._e(),!t.tooltipIcon&&!t.sortable?[e._v(" "+e._s(t.label)+" ")]:e._e(),t.tooltipIcon?[a("div",{staticClass:"aioseo-table-header-tooltip-icon"},[a("core-tooltip",{staticClass:"action",attrs:{type:"action"},scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(t.label)+" ")]},proxy:!0}],null,!0)},[a(t.tooltipIcon,{tag:"component"})],1)],1)]:e._e()],2)})],2)]),e.rows?a("tbody",{attrs:{id:"the-list"}},[e.loading?a("div",{staticClass:"loader-overlay"},[a("core-loader")],1):e._e(),e._l(e.rows,function(t,i){return[a("tr",{key:i+"_"+t.id,staticClass:"main-row",class:{even:i%2===0,enabled:t.enabled||!t.hasOwnProperty("enabled")},attrs:{"data-row-id":t.rowIndex&&t[t.rowIndex]||t.id||t.url||i}},[e.showBulkActions?a("th",{staticClass:"check-column",attrs:{scope:"row"}},[t.preventBulkAction?e._e():a("input",{attrs:{type:"checkbox",disabled:e.disableTable}})]):e._e(),e._l(e.columns,function(r,n){return a("td",{key:n,staticClass:"manage-column",class:r.slug},[e.$scopedSlots[r.slug]?[e._t(r.slug,null,{row:t,column:t[r.slug],editRow:e.editRow,index:i,editRowActive:e.activeRow===i})]:e._e(),e.$scopedSlots[r.slug]?e._e():a("span",[e._v(" "+e._s(t[r.slug])+" ")])],2)})],2),a("tr",{key:i+"_edit",staticClass:"edit-row",class:{even:i%2===0}},[a("td",{staticClass:"edit-row-content",attrs:{colspan:e.showBulkActions?e.columns.length+1:e.columns.length}},[a("transition-slide",{staticClass:"wrapper",attrs:{tag:"div",active:i===e.activeRow}},[a("div",{staticClass:"border"},[e._t("edit-row",null,{row:t,index:i,editRow:e.editRow})],2)])],1)])]}),e.rows.length?e._e():[a("td",{attrs:{colspan:e.columns.length+1}},[a("div",{staticClass:"no-results"},[e.loading?e._e():a("span",[e._v(e._s(e.strings.noResults))])])])]],2):e._e(),e.showTableFooter?a("tfoot",[a("tr",[e.showBulkActions?a("td",{staticClass:"manage-column column-cb check-column"},[a("input",{attrs:{type:"checkbox",disabled:e.loading||e.disableTable}})]):e._e(),e._l(e.columns,function(t,i){return a("th",{key:i,staticClass:"manage-column",style:{width:t.width},attrs:{scope:"col"}},[e._v(" "+e._s(t.label)+" ")])})],2)]):e._e()]),e._t("cta")],2),e.showTableFooter?a("div",{staticClass:"tablenav bottom"},[e.showBulkActions&&e.bulkOptions&&e.bulkOptions.length?a("core-wp-bulk-actions",{attrs:{"bulk-options":e.bulkOptions,"disable-table":e.disableTable},on:{"process-bulk-action":e.processBulkAction}}):e._e(),a("core-wp-items-per-page",{attrs:{"disable-table":e.disableTable},model:{value:e.itemsPerPage,callback:function(t){e.itemsPerPage=t},expression:"itemsPerPage"}}),a("div",{staticClass:"alignleft actions"}),e.showPagination?a("core-wp-pagination",{attrs:{totals:e.totals,"initial-page-number":e.pageNumber,"disable-table":e.disableTable},on:{paginate:e.processPaginate}}):e._e(),a("br",{staticClass:"clear"})],1):e._e()])},U=[];const V={components:{CoreBlur:_,CoreLoader:g,CoreTooltip:h,CoreWpAdditionalFilters:C,CoreWpBulkActions:B,CoreWpItemsPerPage:E,CoreWpPagination:z,TransitionSlide:f},props:{columns:{type:Array,required:!0},rows:{type:Array,required:!0},filters:{type:Array,required:!1},totals:{type:Object,required:!1},loading:Boolean,showSearch:{type:Boolean,default(){return!0}},showBulkActions:{type:Boolean,default(){return!0}},showPagination:{type:Boolean,default(){return!0}},showTableFooter:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},searchLabel:{type:String,default(){return this.$t.__("Search",this.$td)}},initialPageNumber:{type:Number,default(){return 1}},initialItemsPerPage:{type:Number,default(){return 20}},initialSearchTerm:{type:String,default(){return""}},bulkOptions:Array,additionalFilters:Array,itemsPerPageFilter:String,blurRows:Boolean,disableTable:Boolean},data(){return{itemsPerPage:null,searchTerm:"",pageNumber:1,activeRow:null,strings:{items:this.$t.__("items",this.$td),noResults:this.$t.__("No items found.",this.$td)}}},watch:{initialPageNumber(e){this.pageNumber=e},pageNumber(e){if(Math.abs(e)!==e){this.pageNumber=Math.floor(e);return}if(this.totals&&e>this.totals.pages){this.pageNumber=this.totals.pages;return}1>e&&(this.pageNumber=1)},itemsPerPage(e,s){s!==null&&this.processChangeItemsPerPage()}},methods:{showFilterCount(e){return Object.prototype.hasOwnProperty.call(e,"count")},editRow(e){if(e===null||this.activeRow===e){this.activeRow=null;return}this.activeRow=e},processChangeItemsPerPage(){this.$emit("process-change-items-per-page",this.itemsPerPage)},processBulkAction(e){this.$emit("process-bulk-action",{action:e,selectedRows:this.selectedItems()}),this.resetSelectedItems()},processPaginate(e){this.pageNumber=e,this.$emit("paginate",e,this.searchTerm)},processFilter(e){this.pageNumber=1,this.searchTerm="",this.$emit("filter-table",e)},processAdditionalFilters(e){this.pageNumber=1,this.searchTerm="",this.$emit("process-additional-filters",{filters:e})},selectedItems(){const e=this.$refs.table.querySelectorAll("tbody tr.main-row"),s=[];return e.forEach(a=>{const t=a.querySelector("th.check-column input");t&&t.checked&&s.push(a.dataset.rowId)}),s},resetSelectedItems(){const e=this.$refs.table.querySelectorAll(".check-column input:checked");e&&e.forEach(s=>s.checked=!1)},setPageNumber(e){this.pageNumber=e}},created(){this.pageNumber=this.initialPageNumber,this.searchTerm=this.initialSearchTerm,this.itemsPerPage=this.initialItemsPerPage}},b={};var G=o(V,H,U,!1,J,null,null,null);function J(e){for(let s in b)this[s]=b[s]}const te=function(){return G.exports}();export{te as C};