(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-949c08be"],{1799:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e===t.pagination.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],i={props:["pagination"],methods:{getPage:function(t){this.$emit("getPage",t)}}},n=i,o=a("2877"),c=Object(o["a"])(n,r,s,!1,null,"0a5fbd35",null);e["a"]=c.exports},8418:function(t,e,a){"use strict";var r=a("c04e"),s=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var n=r(e);n in t?s.f(t,n,i(0,a)):t[n]=a}},"88f9":function(t,e,a){},"99af":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),i=a("e8b5"),n=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),p=a("1dde"),u=a("b622"),v=a("2d00"),f=u("isConcatSpreadable"),_=9007199254740991,m="Maximum allowed index exceeded",b=v>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),h=p("concat"),g=function(t){if(!n(t))return!1;var e=t[f];return void 0!==e?!!e:i(t)},C=!b||!h;r({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,r,s,i,n=o(this),p=d(n,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?n:arguments[e],g(i)){if(s=c(i.length),u+s>_)throw TypeError(m);for(a=0;a<s;a++,u++)a in i&&l(p,u,i[a])}else{if(u>=_)throw TypeError(m);l(p,u++,i)}return p.length=u,p}})},b0c0:function(t,e,a){var r=a("83ab"),s=a("9bf2").f,i=Function.prototype,n=i.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&s(i,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},b204:function(t,e,a){"use strict";var r=a("88f9"),s=a.n(r);s.a},b9ab:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"table-responsive d-none d-md-block"},[a("table",{staticClass:"table table-sm table-hover mt-4"},[t._m(0),a("tbody",t._l(t.orders,(function(e){return a("tr",{on:{click:function(a){return t.openModal(e)}}},[a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[t._v(t._s(e.id))]),a("td",[a("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e){return a("li",[t._v(t._s(e.product.title))])})),0)]),a("td",{staticClass:"text-right pr-3"},[t._v(t._s(t._f("currency")(e.total)))]),e.is_paid?a("td",{staticClass:"text-success"},[t._v("已付款")]):a("td",[t._v("尚未付款")])])})),0)])]),a("div",{staticClass:"table-responsive d-md-none"},[a("table",{staticClass:"table table-sm mt-4"},[a("tbody",t._l(t.orders,(function(e){return a("tr",{staticClass:"mobile-tr"},[a("table",{staticClass:"table table-borderless mt-3"},[a("tbody",[a("tr",[a("td",[t._v("購買日期")]),a("td",[t._v(t._s(t._f("date")(e.create_at)))])]),a("tr",[a("td",[t._v("訂單編號")]),a("td",[t._v(t._s(e.id))])]),a("tr",[a("td",[t._v("訂單內容")]),a("td",[a("ul",{staticClass:"list-unstyled mb-0"},t._l(e.products,(function(e){return a("li",[t._v(t._s(e.product.title)+" * "+t._s(e.qty))])})),0)])]),a("tr",[a("td",[t._v("總金額")]),a("td",[t._v(t._s(t._f("currency")(e.total)))])]),a("tr",[a("td",[t._v("付款狀態")]),e.is_paid?a("td",{staticClass:"text-success"},[t._v("已付款")]):a("td",[t._v("尚未付款")])]),a("tr",[a("td",{attrs:{colspan:"2"}},[a("button",{staticClass:"btn btn-title btn-block",on:{click:function(a){return t.openModal(e)}}},[t._v("編輯訂單")])])])])])])})),0)])]),a("Pagination",{staticClass:"d-flex justify-content-center mb-4",attrs:{pagination:t.pagination},on:{getPage:t.getOrders}})],1)])]),a("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("購買日期")]),a("p",{staticClass:"text-dark"},[t._v(t._s(t._f("date")(t.tempOrder.create_at)))])]),a("div",{staticClass:"form-group"},[a("label",[t._v("訂單編號")]),a("p",{staticClass:"text-dark"},[t._v(" "+t._s(t.tempOrder.id))])]),a("h6",[t._v("訂單內容")]),a("ul",{staticClass:"list-unstyled"},t._l(t.tempOrder.products,(function(e){return a("li",{staticClass:"mb-1 text-dark"},[a("div",{staticClass:"d-flex align-items-center"},[a("a",{staticClass:"btn btn-sm btn-danger mr-3",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeProduct(e.id)}}},[t._v("刪除")]),t._v(" "+t._s(e.product.title)+" * "),a("a",{staticClass:"btn btn-sm btn-title ml-auto mr-2 p-0",staticStyle:{width:"25px",height:"25px"},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,"-")}}},[t._v("-")]),t._v(" "+t._s(e.qty)+" "),a("a",{staticClass:"btn btn-sm btn-title ml-2 p-0",staticStyle:{width:"25px",height:"25px"},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changeQty(e.id,"+")}}},[t._v("+")])])])})),0),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"order-id"}},[t._v("總金額($)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.total,expression:"tempOrder.total"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.tempOrder.total},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"total",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.is_paid,expression:"tempOrder.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"order-is_paid"},domProps:{checked:Array.isArray(t.tempOrder.is_paid)?t._i(t.tempOrder.is_paid,null)>-1:t.tempOrder.is_paid},on:{change:function(e){var a=t.tempOrder.is_paid,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);r.checked?n<0&&t.$set(t.tempOrder,"is_paid",a.concat([i])):n>-1&&t.$set(t.tempOrder,"is_paid",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tempOrder,"is_paid",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"order-is_paid"}},[t._v("已付款")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateOrder()}}},[t._v("確認")])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col",width:"100"}},[t._v("購買日期")]),a("th",{attrs:{scope:"col",width:"240"}},[t._v("訂單編號")]),a("th",{attrs:{scope:"col"}},[t._v("訂單內容")]),a("th",{staticClass:"text-right pr-3",attrs:{scope:"col",width:"100"}},[t._v("總金額")]),a("th",{attrs:{scope:"col",width:"90"}},[t._v("付款狀態")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-title text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("編輯訂單")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(a("99af"),a("b0c0"),a("1157")),n=a.n(i),o=a("1799"),c={components:{Pagination:o["a"]},data:function(){return{orders:[],tempOrder:{},isLoading:!1,pagination:{}}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/orders?page=").concat(t);e.isLoading=!0,this.$http.get(a).then((function(t){e.orders=t.data.orders,e.isLoading=!1,e.pagination=t.data.pagination}))},removeProduct:function(t){var e=this.tempOrder;e.products=Object.assign({},e.products),e.total-=e.products[t].final_total,delete e.products[t]},changeQty:function(t,e){var a=this.tempOrder;a.products=Object.assign({},a.products);var r,s=Object.assign({},a.products[t]);"-"===e?(s.qty--,0===s.qty?this.removeProduct(t):(s.total-=parseInt(s.product.price),r=s.coupon?parseInt(s.product.price)*parseInt(s.coupon.percent)/100:parseInt(s.product.price),s.final_total-=r,a.products[t]=s,a.total-=r)):"+"===e&&(s.qty++,s.total+=parseInt(s.product.price),r=s.coupon?parseInt(s.product.price)*parseInt(s.coupon.percent)/100:parseInt(s.product.price),s.final_total+=r,a.products[t]=s,a.total+=r)},updateOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/order/").concat(t.tempOrder.id);this.$http.put(e,{data:t.tempOrder}).then((function(e){e.data.success,n()("#orderModal").modal("hide"),t.getOrders()}))},openModal:function(t){this.tempOrder=Object.assign({},t),n()("#orderModal").modal("show")}},created:function(){this.$emit("sendRoute",this.$route.name),this.getOrders()}},l=c,d=(a("b204"),a("2877")),p=Object(d["a"])(l,r,s,!1,null,"e7ffcebe",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-949c08be.6d56370e.js.map