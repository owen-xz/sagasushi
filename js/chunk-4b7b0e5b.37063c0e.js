(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b7b0e5b"],{"19f3":function(t,a,e){},3267:function(t,a,e){"use strict";var s=e("19f3"),i=e.n(s);i.a},"4a2f":function(t,a,e){"use strict";var s=e("b1d9"),i=e.n(s);i.a},"56a6":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,s){return e("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),e("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(s)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],n=(e("4160"),e("a434"),e("159b"),e("5530")),r=e("2f62"),o={name:"Navbar",data:function(){return{}},computed:Object(n["a"])({},Object(r["b"])(["messages"])),methods:{updateMessage:function(t,a){this.$store.dispatch("updateMessage",{message:t,status:a})},removeMessage:function(t){this.$store.dispatch("removeMessage",t)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(e,s){e.timestamp===t&&a.messages.splice(s,1)}))}),5e3)}}},l=o,c=(e("4a2f"),e("2877")),d=Object(c["a"])(l,s,i,!1,null,null,null);a["a"]=d.exports},"9d64":function(t,a,e){t.exports=e.p+"img/logo.e8db2109.png"},a6fb:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("Alert"),e("main",[e("router-view")],1),e("Footer")],1)},i=[],n=e("d178"),r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"py-3 bg-title text-white text-center"},[e("small",[t._v(" 資料、圖片來源皆來自網路，僅用來做為學習用途。 ")])])])}],l={data:function(){return{}}},c=l,d=e("2877"),u=Object(d["a"])(c,r,o,!1,null,"593ca280",null),m=u.exports,f=e("56a6"),v={components:{Navbar:n["a"],Footer:m,Alert:f["a"]},data:function(){return{}},methods:{}},b=v,h=Object(d["a"])(b,s,i,!1,null,"f95f53aa",null);a["default"]=h.exports},b1d9:function(t,a,e){},d178:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"fixed-top"},[t.adIsShow?s("div",{staticClass:"py-1 px-4 text-white bg-title d-flex\n    justify-content-center align-items-center ad-discount"},[t._v(" 想要取得餐點優惠嗎？ "),s("button",{staticClass:"btn btn-outline-light btn-sm ml-4",attrs:{"data-toggle":"modal","data-target":"#adModal"}},[t._v("馬上領取")]),s("a",{staticClass:"text-light close",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.closeAd(a)}}},[s("i",{staticClass:"fas fa-times"})])]):t._e(),s("nav",{staticClass:"navbar navbar-expand-lg bg-light py-1"},[s("div",{staticClass:"container-fluid"},[s("router-link",{staticClass:"logo mr-auto",staticStyle:{height:"45px"},attrs:{to:"/"}},[s("img",{staticClass:"img-fluid h-100",attrs:{src:e("9d64"),alt:""}})]),s("div",{staticClass:"d-flex"},[s("router-link",{staticClass:"nav-link p-1 p-md-2 animated",class:{heartBeat:t.animated.store},attrs:{to:"/products"},nativeOn:{click:function(a){return t.changeCategory("所有商品")},mouseover:function(a){t.animated.store=!0},mouseleave:function(a){t.animated.store=!1}}},[s("i",{staticClass:"fas fa-store fa-2x"})]),s("a",{staticClass:"nav-link p-1 p-md-2 animated",class:{heartBeat:t.animated.like},staticStyle:{position:"relative"},attrs:{href:"#","data-toggle":"modal","data-target":"#favoriteModal"},on:{mouseover:function(a){t.animated.like=!0},mouseleave:function(a){t.animated.like=!1}}},[t.favoriteNum>0?s("div",{staticClass:"bg-danger cart-num d-flex\n            justify-content-center align-items-center text-white"},[t._v(" "+t._s(t.favoriteNum)+" ")]):t._e(),s("i",{staticClass:"fas fa-heart fa-2x"})]),s("router-link",{staticClass:"nav-link p-1 p-md-2 animated",class:{heartBeat:t.animated.cart},staticStyle:{position:"relative"},attrs:{to:"/cart"},nativeOn:{mouseover:function(a){t.animated.cart=!0},mouseleave:function(a){t.animated.cart=!1}}},[t.cartNum>0?s("div",{staticClass:"bg-danger cart-num d-flex\n            justify-content-center align-items-center text-white"},[t._v(" "+t._s(t.cartNum)+" ")]):t._e(),s("i",{staticClass:"fas fa-shopping-cart fa-2x"})]),t._t("default",[s("router-link",{staticClass:"nav-link p-1 p-md-2 animated",class:{heartBeat:t.animated.system},attrs:{to:"/admin/products"},nativeOn:{mouseover:function(a){t.animated.system=!0},mouseleave:function(a){t.animated.system=!1}}},[s("i",{staticClass:"fas fa-cog fa-2x"})])])],2)],1)])]),s("div",{staticClass:"modal fade",attrs:{id:"adModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),!1===t.isValid?s("div",{staticClass:"modal-body p-4"},[t._v(" 立即訂閱我們，請在下方留下您的Email，就不會錯過任何最新消息，並能獲取餐點折扣碼唷！！ "),s("ValidationObserver",{staticClass:"mt-4",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),t.receiveDiscount(a)}},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("ValidationProvider",{attrs:{rules:"required",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.failed;return[s("input",{directives:[{name:"model",rawName:"v-model",value:t.subscribeEmail,expression:"subscribeEmail"}],staticClass:"form-control",class:{"is-invalid":i},attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.subscribeEmail},on:{input:function(a){a.target.composing||(t.subscribeEmail=a.target.value)}}}),i?s("span",{staticClass:"text-danger"},[t._v("必須是有效的電子郵件地址")]):t._e(),s("div",{staticClass:"d-flex justify-content-center"},[s("button",{staticClass:"btn btn-primary mt-4 booking-btn",attrs:{type:"submit",disabled:e},on:{click:function(a){t.isValid=!0}}},[t._v("訂閱")])])]}}],null,!0)})]}}],null,!1,1353879677)})],1):s("div",{staticClass:"modal-body p-4"},[t._v(" 訂閱成功！ 結帳時，請別忘記輸入下方優惠代碼以取得折扣～ "),t._m(1)])])])]),s("div",{staticClass:"modal fade",attrs:{id:"favoriteModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(2),s("div",{staticClass:"modal-body"},[t.favorite.length?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover"},[s("tbody",t._l(t.favorite,(function(a){return s("tr",{key:a.id,staticStyle:{cursor:"pointer"},on:{click:function(e){return t.goProductDetail(a.id)}}},[s("td",{staticClass:"align-middle",attrs:{width:"50"}},[s("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return e.stopPropagation(),t.removeFavorite(a)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]),s("td",{staticClass:"align-middle",attrs:{width:"80"}},[s("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:"",height:"60",width:"60"}})]),s("td",{staticClass:"align-middle text-truncate"},[t._v(t._s(a.title))]),s("td",{staticClass:"align-middle",attrs:{width:"50"}},[s("button",{staticClass:"btn btn-outline-title btn-sm",on:{click:function(e){return e.stopPropagation(),t.addtoCart(a.id)}}},[s("i",{staticClass:"fas fa-cart-plus"})])])])})),0)])]):s("div",{staticClass:"text-center"},[t._v(" 目前沒有商品喔 "),s("router-link",{staticClass:"btn btn-online text-title d-block mt-3",attrs:{to:"/products"}},[t._v(" 前往購物 ")])],1)])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-desktop"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-cover text-dark  couponCode mt-4 p-3"},[e("div",{staticClass:"p-4 h-100 d-flex flex-column justify-content-center",staticStyle:{"background-color":"rgba(255, 255, 255, .5)"}},[e("p",{staticClass:"h3",staticStyle:{"font-weight":"bold"}},[t._v("輸入優惠卷代碼")]),e("p",{staticClass:"h3",staticStyle:{"font-weight":"bold"}},[t._v("「ilovesushi」即享八折優惠")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-desktop"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=e("5530"),r=e("2f62"),o=e("1157"),l=e.n(o),c={data:function(){return{subscribeEmail:"",isValid:!1,animated:{store:!1,like:!1,cart:!1,system:!1}}},computed:Object(n["a"])({cartNum:function(){return!!this.cart.carts&&this.cart.carts.length},favoriteNum:function(){return!!this.favorite&&this.favorite.length}},Object(r["b"])(["cart","adIsShow","favorite"])),methods:{changeCategory:function(t){this.$store.dispatch("changeCategory",t)},goProductDetail:function(t){this.$router.push("/product/".concat(t)),this.$store.dispatch("getProduct",t),l()("#favoriteModal").modal("hide")},closeAd:function(){this.$store.dispatch("closeAd")},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:t,qty:a})},removeFavorite:function(t){this.$store.dispatch("setFavorite",t)}}},d=c,u=(e("3267"),e("2877")),m=Object(u["a"])(d,s,i,!1,null,"c147810c",null);a["a"]=m.exports}}]);
//# sourceMappingURL=chunk-4b7b0e5b.37063c0e.js.map