(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e81fc6c"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pagination.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},o=[],n={computed:{pagination:function(){return this.$store.state.pagination}},methods:{getPage:function(t){this.$emit("getPage",t)}}},i=n,l=e("2877"),c=Object(l["a"])(i,s,o,!1,null,"0a76b542",null);a["a"]=c.exports},b8c6:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal(!0)}}},[t._v("建立優惠卷")])]),e("div",{staticClass:"table-responsive d-none d-md-block"},[e("table",{staticClass:"table mt-4 table-hover",staticStyle:{cursor:"pointer"}},[t._m(0),e("tbody",t._l(t.coupons,(function(a){return e("tr",{on:{click:function(e){return t.openModal(!1,a)}}},[e("td",[t._v(t._s(a.title))]),e("td",[t._v(t._s(a.percent)+" %")]),e("td",[t._v(t._s(a.due_date))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return t.openDelModal(a)}}},[t._v("刪除")])])])})),0)])]),e("div",{staticClass:"table-responsive d-md-none"},[e("table",{staticClass:"table table-sm mt-4"},[e("tbody",t._l(t.coupons,(function(a){return e("tr",{staticClass:"mobile-tr"},[e("table",{staticClass:"table table-borderless mt-3"},[e("tr",[e("th",{attrs:{width:"80"}},[t._v("名稱")]),e("td",[t._v(t._s(a.title))])]),e("tr",[e("th",[t._v("折扣")]),e("td",[t._v(t._s(a.percent)+" %")])]),e("tr",[e("th",[t._v("到期日")]),e("td",[t._v(t._s(a.due_date))]),e("th")]),e("tr",[e("th",[t._v("是否啟用")]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])])])]),e("div",{staticClass:"form-row mb-4"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.openModal(!1,a)}}},[t._v("編輯")])]),e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.openDelModal(a)}}},[t._v("刪除")])])])])})),0)])]),e("Pagination",{staticClass:"d-flex justify-content-center mb-4",attrs:{pagination:t.pagination},on:{getPage:t.getCoupons}}),e("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon-title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"coupon-title"},domProps:{value:t.tempCoupon.title},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"title",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon-discount"}},[t._v("折扣(%)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"coupon-discount"},domProps:{value:t.tempCoupon.percent},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"percent",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon-code"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon-code"},domProps:{value:t.tempCoupon.code},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"code",a.target.value)}}})])]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"coupon-deadline"}},[t._v("到期日")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"coupon-deadline"},domProps:{value:t.tempCoupon.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempCoupon,"due_date",a.target.value)}}})])])]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t.tempCoupon.is_enabled},on:{change:function(a){var e=t.tempCoupon.is_enabled,s=a.target,o=!!s.checked;if(Array.isArray(e)){var n=null,i=t._i(e,n);s.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",e.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",o)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠卷(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteCoupon(t.tempCoupon)}}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("名稱")]),e("th",{attrs:{width:"100"}},[t._v("折扣")]),e("th",{attrs:{width:"140"}},[t._v("到期日")]),e("th",{attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"75"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-title text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("新增優惠卷")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除優惠卷")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("99af"),e("b0c0"),e("1157")),i=e.n(n),l=e("1799"),c={components:{Pagination:l["a"]},data:function(){return{coupons:[],tempCoupon:{},isNew:!1}},computed:{pagination:function(){return this.$store.state.pagination}},methods:{getCoupons:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/coupons?page=").concat(t);a.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(t){a.coupons=t.data.coupons,a.$store.dispatch("updateLoading",!1),a.$store.dispatch("getPagination",t.data.pagination)}))},updateCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/coupon"),e="post";t.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/coupon/").concat(t.tempCoupon.id),e="put"),this.$http[e](a,{data:t.tempCoupon}).then((function(a){a.data.success?t.$store.dispatch("updateMessage",{message:a.data.message,status:"success"}):t.$store.dispatch("updateMessage",{message:a.data.message,status:"danger"}),i()("#couponModal").modal("hide"),t.getCoupons()}))},deleteCoupon:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/coupon/").concat(t.id);this.$http.delete(e).then((function(t){t.data.success?a.$store.dispatch("updateMessage",{message:t.data.message,status:"success"}):a.$store.dispatch("updateMessage",{message:t.data.message,status:"danger"}),a.getCoupons(),i()("#delCouponModal").modal("hide")}))},openModal:function(t,a){t?(this.tempCoupon={},this.isNew=!0):(this.tempCoupon=Object.assign({},a),this.isNew=!1),i()("#couponModal").modal("show")},openDelModal:function(t){this.tempCoupon=Object.assign({},t),i()("#delCouponModal").modal("show")}},mounted:function(){this.$store.dispatch("setRouteName",this.$route.name),this.getCoupons()}},d=c,r=e("2877"),p=Object(r["a"])(d,s,o,!1,null,"2b2d3fd3",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7e81fc6c.a915e808.js.map