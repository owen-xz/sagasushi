(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80b67128"],{"1a37":function(t,e,s){"use strict";var a=s("c929"),i=s.n(a);i.a},6669:function(t,e,s){t.exports=s.p+"img/freshfood.35190a2b.jpg"},b0c0:function(t,e,s){var a=s("83ab"),i=s("9bf2").f,o=Function.prototype,n=o.toString,r=/^\s*function ([^ (]*)/,c="name";a&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(t){return""}}})},c929:function(t,e,s){},ec5a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row justify-content-center "},[a("div",{staticClass:"col-lg-9 col-md-10 my-md-4 my-3"},[t._m(1),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-4 d-flex justify-content-center align-items-center p-2"},[a("router-link",{staticClass:"btn btn-lg text-white text-center btn-block py-md-6 py-5 bg-cover menu-sashimi border-0 shadow",attrs:{to:{path:"/products",query:{category:"刺身"}}}},[a("b",[t._v("刺身")])])],1),a("div",{staticClass:"col-4 d-flex justify-content-center align-items-center p-2"},[a("router-link",{staticClass:"btn btn-lg text-white text-center btn-block py-md-6 py-5 bg-cover menu-sushi border-0 shadow",attrs:{to:{path:"/products",query:{category:"壽司"}}}},[a("b",[t._v("壽司")])])],1),a("div",{staticClass:"col-4 d-flex justify-content-center align-items-center p-2"},[a("router-link",{staticClass:"btn btn-lg text-white text-center btn-block py-md-6 py-5 bg-cover menu-ton border-0 shadow",attrs:{to:{path:"/products",query:{category:"丼飯"}}}},[a("b",[t._v("丼飯")])])],1)])])])]),t._m(2),a("section",{staticClass:"container-fluid mt-md-5 p-0 mb-md-4",staticStyle:{position:"relative"}},[t._m(3),a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"container-fluid bg-desktop my-md-4"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 my-3 align-items-center"},[t._m(4),t._m(5),t._m(6),a("div",{staticClass:"d-flex justify-content-end"},[a("router-link",{staticClass:"btn btn-outline-title",attrs:{to:"/products"}},[t._v("去嘗鮮")])],1)])])])])]),a("img",{staticClass:"d-md-none img-fluid",attrs:{src:s("6669"),alt:""}})]),a("section",{staticClass:"mb-4 container"},[t._m(7),a("div",{staticClass:"swiper-container swiper-hot w-100"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(e){return a("div",{key:e.id,staticClass:"swiper-slide"},[t.swiperIsReady?a("div",[a("Card",{attrs:{"card-data":e}})],1):t._e()])})),0)])]),a("section",{staticClass:"container-fluid bg-desktop pb-4"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-between"},[t._m(8),a("div",{staticClass:"col-md-6 px-md-5"},[t._m(9),a("ValidationObserver",{staticClass:"mt-4",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.reservation(e)}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookName"}},[t._v("訂位大名*")]),a("ValidationProvider",{attrs:{rules:"required",name:"訂位大名"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.name,expression:"bookInfo.name"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"text",id:"bookName",placeholder:"輸入姓名",required:""},domProps:{value:t.bookInfo.name},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"name",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookTel"}},[t._v("訂位電話*")]),a("ValidationProvider",{attrs:{rules:"required",name:"訂位電話"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.tel,expression:"bookInfo.tel"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"tel",id:"bookTel",placeholder:"輸入電話號碼",required:""},domProps:{value:t.bookInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"tel",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookDate"}},[t._v("訂位日期*")]),a("ValidationProvider",{attrs:{rules:"required",name:"訂位日期"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.date,expression:"bookInfo.date"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"date",id:"bookDate",placeholder:"輸入時間",required:""},domProps:{value:t.bookInfo.date},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"date",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1),a("div",{staticClass:"row align-items-end"},[a("div",{staticClass:"col-lg-4 col-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookNum"}},[t._v("訂位人數")]),a("ValidationProvider",{attrs:{rules:"required",name:"訂位人數"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,i=e.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.num,expression:"bookInfo.num"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"number",id:"bookNum",placeholder:"輸入人數",required:""},domProps:{value:t.bookInfo.num},on:{input:function(e){e.target.composing||t.$set(t.bookInfo,"num",e.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}],null,!0)})],1)]),a("div",{staticClass:"col-lg-5 col-6"},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.isVegetarian,expression:"bookInfo.isVegetarian"}],staticClass:"form-check-input",attrs:{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"false"},domProps:{checked:t._q(t.bookInfo.isVegetarian,"false")},on:{change:function(e){return t.$set(t.bookInfo,"isVegetarian","false")}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios1"}},[t._v(" 不需要素食 ")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bookInfo.isVegetarian,expression:"bookInfo.isVegetarian"}],staticClass:"form-check-input",attrs:{type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"true"},domProps:{checked:t._q(t.bookInfo.isVegetarian,"true")},on:{change:function(e){return t.$set(t.bookInfo,"isVegetarian","true")}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios2"}},[t._v(" 需要素食 ")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"d-flex justify-content-end mb-3"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s}},[t._v("預約")])])])])]}}])})],1)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container swiper-banner"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide banner1 bg-cover"}),s("div",{staticClass:"swiper-slide banner2 bg-cover"}),s("div",{staticClass:"swiper-slide banner3 bg-cover"})]),s("div",{staticClass:"swiper-pagination"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-center"},[s("b",[t._v("餐點類別")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container-fluid text-white p-0",staticStyle:{position:"relative"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center justify-content-md-start"},[s("div",{staticClass:"col-md-4 bg-cover introduction-image chef p-0"})])]),s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"container-fluid bg-desktop my-4"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-md-6 text-md-title m-3"},[s("h3",{staticClass:"text-center mt-3 pb-3 border-md-title"},[s("b",[t._v("專業的師傅")])]),s("ul",{staticClass:"list-unstyled"},[s("li",{staticClass:"mt-4"},[s("h4",[t._v("最道地的技術")]),s("p",{staticClass:"text-md-content"},[t._v("師傅十三歲赴日本拜師學藝，從打雜、刮魚鱗、取內臟，再到洗米煮飯、切生魚片，總共經過八年的努力與無數次的鑽研，造就最道地的壽司技術。")])]),s("li",{staticClass:"mt-4"},[s("h4",[t._v("超過十年的實務經驗")]),s("p",{staticClass:"text-md-content"},[t._v("回到台灣後，在知名日本料理店內擔任廚師，也持續精進自己的料理水平。將日本的技術與台灣在地食材做結合，打造最符合台灣人口味的壽司。")])]),s("li",{staticClass:"mt-4"},[s("h4",[t._v("堅持每個細節")]),s("p",{staticClass:"text-md-content"},[t._v("從醋米的溫度，到醃魚的時間長短，都堅持由師傅親自監督。根據顧客的用餐習慣做調整，堅持提供顧客最高的餐點品質。")])])])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center justify-content-md-end"},[s("div",{staticClass:"col-md-4 bg-cover introduction-image freshfood d-none d-md-block"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-center mt-3 pb-3 border-bottom border-title"},[s("b",[t._v("新鮮的食材")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex mt-4 "},[s("div",{staticClass:"mr-4 d-none d-sm-block"},[s("i",{staticClass:"fas fa-fish fa-4x"})]),s("div",[s("h5",{staticClass:"h4"},[t._v("海鮮")]),s("p",{staticClass:"text-content"},[t._v("本店選用台灣外圍海域現撈的新鮮水產漁獲，由師傅親自至漁市挑選，依不同魚種進行從去鳞、剖腹、除內臟等精細的刀法處理，保證當天現點現做，營養不流失。此外進口魚類皆為產地直送，以真空包裝急速冷凍處理，全程低溫冷凍保存運送，從捕撈上岸至到貨不超過三天，保持魚肉的絕佳鮮度與質感。")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex mt-4 mb-3"},[s("div",{staticClass:"mr-4 d-none d-sm-block"},[s("i",{staticClass:"fas fa-cookie-bite fa-4x"})]),s("div",[s("h5",{staticClass:"h4"},[t._v("壽司米")]),s("p",{staticClass:"text-content"},[t._v("壽司米選用花東出產的台梗九號米，顆顆精挑細選，粒粒飽滿晶亮，烹煮時就有香濃的米香散出，口感軟又有黏性，搭配師傅特調的壽司醋比例，使魚肉的鮮甜更上一個層次。")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-center my-4"},[s("b",[t._v("熱門商品")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-6"},[s("h3",{staticClass:"text-center my-4"},[s("b",[t._v("本店位置")])]),s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5893972464746!2d120.65074364864552!3d24.151053894791914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9707337f77%3A0x27955725a4c4ceff!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5YWs55uK6Lev5LqM5q61MjLomZ8!5e0!3m2!1szh-TW!2stw!4v1587616087063!5m2!1szh-TW!2stw",width:"100%",height:"350",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"text-center my-4"},[s("b",[t._v("立即預約")])])}],o=(s("b0c0"),s("5530")),n=s("2f62"),r=s("ba15"),c=s.n(r),l=(s("f4bd"),s("f4fe")),d={components:{Card:l["a"]},data:function(){return{bookInfo:{name:"",tel:"",date:"",num:1,isVegetarian:!1},swiperIsReady:!1}},computed:Object(o["a"])({},Object(n["b"])(["products"])),methods:{reservation:function(){this.$store.dispatch("updateMessage",{message:"訂位成功",status:"success"})},swiperInit:function(){new c.a(".swiper-hot",{slidesPerView:2,spaceBetween:10,autoplay:!0,breakpoints:{768:{spaceBetween:30},992:{slidesPerView:3,spaceBetween:40},1280:{slidesPerView:4}},observer:!0,observeParents:!1});this.swiperIsReady=!0}},mounted:function(){new c.a(".swiper-banner",{direction:"horizontal",loop:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}})},created:function(){var t=this;this.$store.dispatch("setRouteName",this.$route.name),this.timeout=setTimeout((function(){t.swiperInit()}),1e3)}},u=d,m=(s("1a37"),s("2877")),f=Object(m["a"])(u,a,i,!1,null,"4cd30d73",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-80b67128.286713f6.js.map