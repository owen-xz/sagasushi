(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0748bca7"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.pagination.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getPage(t.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],o=e("5530"),r=e("2f62"),c={data:function(){return{}},computed:Object(o["a"])({},Object(r["b"])(["pagination"])),methods:{getPage:function(t){this.$emit("getPage",t)}}},n=c,l=e("2877"),d=Object(l["a"])(n,s,i,!1,null,"4b45e27c",null);a["a"]=d.exports},b0c0:function(t,a,e){var s=e("83ab"),i=e("9bf2").f,o=Function.prototype,r=o.toString,c=/^\s*function ([^ (]*)/,n="name";s&&!(n in o)&&i(o,n,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},c267:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal(!0)}}},[t._v("建立新產品")])]),e("div",{staticClass:"table-responsive d-none d-md-block"},[e("table",{staticClass:"table mt-4 table.hover",staticStyle:{cursor:"pointer"}},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id,on:{click:function(e){return t.openModal(!1,a)}}},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",{staticClass:"pl-4"},[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){return e.stopPropagation(),t.openDelModal(a)}}},[t._v("刪除")])])])})),0)])]),e("div",{staticClass:"table-responsive d-md-none"},[e("table",{staticClass:"table mt-4"},[e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id,staticClass:"mobile-tr"},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",{attrs:{width:"100"}},[t._v("分類")]),e("td",[t._v(t._s(a.category))])]),e("tr",[e("th",[t._v("產品名稱")]),e("td",[t._v(t._s(a.title))])]),e("tr",[e("th",[t._v("原價")]),e("td",[t._v(t._s(t._f("currency")(a.origin_price)))])]),e("tr",[e("th",[t._v("售價")]),e("td",[t._v(t._s(t._f("currency")(a.price)))])]),e("tr",[e("th",[t._v("是否啟用")]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])])])]),e("div",{staticClass:"form-row mb-4"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.openModal(!1,a)}}},[t._v(" 編輯 ")])]),e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-danger btn-block",on:{click:function(e){return t.openDelModal(a)}}},[t._v(" 刪除 ")])])])])})),0)])]),e("Pagination",{staticClass:"d-flex justify-content-center mb-4",attrs:{pagination:t.pagination},on:{getPage:t.getProducts}}),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"imageUrl",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片 "),t.status.fileUploading?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"price",a.target.value)}}})])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"content",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(a){var e=t.tempProduct.is_enabled,s=a.target,i=s.checked?1:0;if(Array.isArray(e)){var o=null,r=t._i(e,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",e.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteProduct(t.tempProduct)}}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("原價")]),e("th",{staticClass:"text-right",attrs:{width:"100"}},[t._v("售價")]),e("th",{staticClass:"pl-4",attrs:{width:"100"}},[t._v("是否啟用")]),e("th",{attrs:{width:"75"}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("99af"),e("b0c0"),e("5530")),r=e("2f62"),c=e("1157"),n=e.n(c),l=e("1799"),d={components:{Pagination:l["a"]},data:function(){return{products:[],tempProduct:{},isNew:!1,status:{fileUploading:!1}}},computed:Object(o["a"])({},Object(r["b"])(["pagination"])),methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/products?page=").concat(t);a.$store.dispatch("updateLoading",!0),a.$http.get(e).then((function(t){a.products=t.data.products,a.$store.dispatch("updateLoading",!1),a.$store.dispatch("getPagination",t.data.pagination)}))},openModal:function(t,a){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(o["a"])({},a),this.isNew=!1),n()("#productModal").modal("show")},openDelModal:function(t){this.tempProduct=Object(o["a"])({},t),n()("#delProductModal").modal("show")},updateProduct:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/product"),e="post";t.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/product/").concat(t.tempProduct.id),e="put"),t.$http[e](a,{data:t.tempProduct}).then((function(a){a.data.success?t.$store.dispatch("updateMessage",{message:a.data.message,status:"success"}):t.$store.dispatch("updateMessage",{message:a.data.message,status:"danger"}),n()("#productModal").modal("hide"),t.getProducts()}))},deleteProduct:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/product/").concat(t.id);a.$http.delete(e).then((function(t){t.data.success?a.$store.dispatch("updateMessage",{message:t.data.message,status:"success"}):a.$store.dispatch("updateMessage",{message:t.data.message,status:"danger"}),a.getProducts(),n()("#delProductModal").modal("hide")}))},uploadFile:function(){var t=this.$refs.files.files[0],a=this,e=new FormData;e.append("file-to-upload",t);var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("owen","/admin/upload");a.status.fileUploading=!0,a.$http.post(s,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data.success?a.$set(a.tempProduct,"imageUrl",t.data.imageUrl):a.$store.dispatch("updateMessage",{message:t.data.message,status:"danger"}),a.status.fileUploading=!1}))}},mounted:function(){this.$store.dispatch("setRouteName",this.$route.name),this.getProducts()}},u=d,p=e("2877"),m=Object(p["a"])(u,s,i,!1,null,"b03690dc",null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0748bca7.c8dd10e9.js.map