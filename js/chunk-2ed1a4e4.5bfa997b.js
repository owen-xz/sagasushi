(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ed1a4e4"],{5356:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container pt-4"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb bg-transparent mb-4 px-0"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/products"}},[t._v("美味菜單")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{path:"/products",query:{category:""+t.product.category}}}},[t._v(" "+t._s(t.product.category)+" ")])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"w-100 bg-cover rounded",staticStyle:{height:"300px"},style:{backgroundImage:"url("+t.product.imageUrl+")"}})]),s("div",{staticClass:"col-md-5 my-4"},[s("h1",{staticClass:"h2 mb-3 text-dark"},[t._v(t._s(t.product.title))]),s("span",{staticClass:"badge badge-desktop text-content p-2 mb-3"},[t._v(t._s(t.product.category))]),s("p",{staticClass:"mb-0 text-content mb-3"},[t._v(t._s(t.product.content))]),s("div",{staticClass:"d-flex justify-content-between align-items-end mb-4"},[s("div",[t.product.price===t.product.origin_price?s("div",{staticClass:"h4 mb-0 text-right"},[t._v(" "+t._s(t._f("currency")(t.product.origin_price))+" ")]):t._e(),t.product.price!==t.product.origin_price?s("del",{staticClass:"h6 text-del"},[t._v(" "+t._s(t._f("currency")(t.product.origin_price))+" ")]):t._e(),t.product.price!==t.product.origin_price?s("div",{staticClass:"h4 mb-0 text-danger"},[t._v(" "+t._s(t._f("currency")(t.product.price))+" ")]):t._e()]),s("div",[s("div",{staticClass:"h4 text-content mb-0"},[t._v("小計 "+t._s(t._f("currency")(t.product.price*t.qty)))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-5"},[s("select",{staticClass:"form-control",attrs:{name:""},on:{change:t.changeQty}},t._l(10,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "+t._s(t.product.unit)+" ")])})),0)]),s("div",{staticClass:"col-7"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.qty)}}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 加到購物車 ")])])])]),s("div",{staticClass:"col",staticStyle:{"margin-top":"100px"}},[t._m(0),s("div",{staticClass:"swiper-container mb-4"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.filterProducts,(function(e){return s("div",{key:e.id,staticClass:"swiper-slide"},[t.swiperIsReady?s("div",[s("Card",{attrs:{"card-data":e}})],1):t._e()])})),0),s("div",{staticClass:"swiper-button-next text-title"}),s("div",{staticClass:"swiper-button-prev text-title"})])])])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:" text-center mb-4"},[s("b",[t._v("現正特價")])])}],a=(s("4de4"),s("5530")),c=s("2f62"),n=s("ba15"),o=s.n(n),d=(s("f4bd"),s("f4fe")),u={components:{Card:d["a"]},data:function(){return{qty:1,swiperIsReady:!1}},computed:Object(a["a"])({filterProducts:function(){var t=this;return this.products.filter((function(e){return e.origin_price!==e.price&&e.id!==t.product.id}))}},Object(c["b"])(["products","product"])),methods:{goBack:function(){this.$router.back()},addtoCart:function(t,e){this.$store.dispatch("addtoCart",{id:t,qty:e})},changeQty:function(t){this.qty=parseInt(t.target.value,10)},swiperInit:function(){new o.a(".swiper-container",{direction:"horizontal",autoplay:!0,slidesPerView:2,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:30},992:{slidesPerView:3,spaceBetween:40},1280:{slidesPerView:4}},observer:!0,observeParents:!0}),this.swiperIsReady=!0}},created:function(){var t=this,e=this.$route.params.id;this.$store.dispatch("getProduct",e),this.timeout=setTimeout((function(){t.swiperInit()}),1e3)}},p=u,l=(s("f8f9"),s("2877")),b=Object(l["a"])(p,i,r,!1,null,"c076799c",null);e["default"]=b.exports},"92d4":function(t,e,s){},f8f9:function(t,e,s){"use strict";var i=s("92d4"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-2ed1a4e4.5bfa997b.js.map