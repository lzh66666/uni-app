(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0093":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniGoodsNav",props:{options:{type:Array,default:function(){return[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"\u5e97\u94fa"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"\u8d2d\u7269\u8f66"}]}},buttonGroup:{type:Array,default:function(){return[{text:"\u52a0\u5165\u8d2d\u7269\u8f66",backgroundColor:"#ff0000",color:"#fff"},{text:"\u7acb\u5373\u8d2d\u4e70",backgroundColor:"#ffa200",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=r},"075d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["goods"],methods:{navigator:function(t){this.$emit("goodsItemClick",t)}}};e.default=r},"09b0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.myRequest=void 0;var r="192.168.1.2:8082",i=function(t){return new Promise((function(e,n){uni.request({url:r+t.url,method:t.method||"GET",data:t.data||{},success:function(t){if(0!==t.data.status)return uni.showToast({title:"\u83b7\u53d6\u6570\u636e\u5931\u8d25"});e(t)},fail:function(t){uni.showToast({title:"\u8bf7\u6c42\u63a5\u53e3\u5931\u8d25"}),n(t)}})}))};e.myRequest=i},"0c1d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4795"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,u,"next",t)}function u(t){o(a,r,i,s,u,"throw",t)}s(void 0)}))}}var s={data:function(){return{cates:[],active:0,secondData:[]}},methods:{getPicsCate:function(){var t=this;return a(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getimgcategory"});case 2:n=e.sent,t.cates=n.data.message,t.leftClickHandle(0,t.cates[0].id);case 5:case"end":return e.stop()}}),e)})))()},leftClickHandle:function(t,e){var n=this;return a(r.default.mark((function i(){var o;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.active=t,r.next=3,n.$myRequest({url:"/api/getimages/"+e});case 3:o=r.sent,n.secondData=o.data.message;case 5:case"end":return r.stop()}}),i)})))()},previewImg:function(t){var e=this.secondData.map((function(t){return t.img_url}));uni.previewImage({current:t,urls:e})}},onLoad:function(){this.getPicsCate()}};e.default=s},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[o](s)}n.r(e),n.d(e,"log",(function(){return o})),n.d(e,"default",(function(){return a}))},"125d":function(t,e,n){"use strict";n.r(e);var r=n("e610"),i=n("a15b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"12fd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4795"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,u,"next",t)}function u(t){o(a,r,i,s,u,"throw",t)}s(void 0)}))}}var s={data:function(){return{id:0,detail:{}}},methods:{getNewsDetail:function(){var t=this;return a(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getnew/"+t.id});case 2:n=e.sent,t.detail=n.data.message[0];case 4:case"end":return e.stop()}}),e)})))()}},onLoad:function(t){this.id=t.id,this.getNewsDetail()}};e.default=s},"1c4b":function(t,e,n){"use strict";n.r(e);var r=n("fc6a"),i=n("ad5f");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},2061:function(t,e,n){"use strict";n.r(e);var r=n("075d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"2061d":function(t,e,n){"use strict";n.r(e);var r=n("0c1d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"20ae":function(t,e,n){"use strict";var r={newsItem:n("8e4a").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","news"),attrs:{_i:0}},[n("news-item",{attrs:{list:t.newsList,_i:1},on:{itemClick:t.goDetail}})],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},2118:function(t,e,n){"use strict";n.r(e);var r=n("b335"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},2536:function(t,e,n){"use strict";n.r(e);var r=n("0093"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"2c05":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),i=o(n("3048"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return f(t)||c(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){d(o,r,i,a,s,"next",t)}function s(t){d(o,r,i,a,s,"throw",t)}a(void 0)}))}}var _={components:{goodsList:i.default},data:function(){return{pageindex:1,goods:[],flag:!1}},methods:{getGoodsList:function(t){var e=this;return v(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$myRequest({url:"/api/getgoods?pageindex="+e.pageindex});case 2:i=n.sent,e.goods=[].concat(a(e.goods),a(i.data.message)),t&&t();case 5:case"end":return n.stop()}}),n)})))()},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}},onLoad:function(){this.getGoodsList()},onReachBottom:function(){if(this.goods.length<10*this.pageindex)return this.flag=!0;this.pageindex++,this.getGoodsList()},onPullDownRefresh:function(){var t=this;this.pageindex=1,this.goods=[],this.flag=!1,setTimeout((function(){t.getGoodsList((function(){uni.stopPullDownRefresh()}))}),1e3)}};e.default=_},"2c49":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","uni-goods-nav"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","uni-tab__seat"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","uni-tab__cart-box flex"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","flex uni-tab__cart-sub-box"),attrs:{_i:3}},t._l(t._$s(4,"f",{forItems:t.options}),(function(e,r,i,o){return n("view",{key:t._$s(4,"f",{forIndex:i,key:r}),staticClass:t._$s("4-"+o,"sc","flex uni-tab__cart-button-left uni-tab__shop-cart"),attrs:{_i:"4-"+o},on:{click:function(n){return t.onClick(r,e)}}},[n("view",{staticClass:t._$s("5-"+o,"sc","uni-tab__icon"),attrs:{_i:"5-"+o}},[n("image",{staticClass:t._$s("6-"+o,"sc","image"),attrs:{src:t._$s("6-"+o,"a-src",e.icon),_i:"6-"+o}})]),n("text",{staticClass:t._$s("7-"+o,"sc","uni-tab__text"),attrs:{_i:"7-"+o}},[t._v(t._$s("7-"+o,"t0-0",t._s(e.text)))]),n("view",{staticClass:t._$s("8-"+o,"sc","flex uni-tab__dot-box"),attrs:{_i:"8-"+o}},[t._$s("9-"+o,"i",e.info)?n("text",{staticClass:t._$s("9-"+o,"sc","uni-tab__dot "),class:t._$s("9-"+o,"c",{"uni-tab__dots":e.info>9}),attrs:{_i:"9-"+o}},[t._v(t._$s("9-"+o,"t0-0",t._s(e.info)))]):t._e()])])})),0),n("view",{staticClass:t._$s(10,"sc","flex uni-tab__cart-sub-box "),class:t._$s(10,"c",{"uni-tab__right":t.fill}),attrs:{_i:10}},t._l(t._$s(11,"f",{forItems:t.buttonGroup}),(function(e,r,i,o){return n("view",{key:t._$s(11,"f",{forIndex:i,key:r}),staticClass:t._$s("11-"+o,"sc","flex uni-tab__cart-button-right"),style:t._$s("11-"+o,"s",{backgroundColor:e.backgroundColor,color:e.color}),attrs:{_i:"11-"+o},on:{click:function(n){return t.buttonClick(r,e)}}},[n("text",{staticClass:t._$s("12-"+o,"sc","uni-tab__cart-button-right-text"),attrs:{_i:"12-"+o}},[t._v(t._$s("12-"+o,"t0-0",t._s(e.text)))])])})),0)])])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"2d51":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",t._l(t._$s(1,"f",{forItems:t.list}),(function(e,r,i,o){return n("view",{key:t._$s(1,"f",{forIndex:i,key:e.id}),staticClass:t._$s("1-"+o,"sc","news_item"),attrs:{_i:"1-"+o},on:{click:function(n){return t.navigator(e.id)}}},[n("image",{attrs:{src:t._$s("2-"+o,"a-src",e.img_url),_i:"2-"+o}}),n("view",{staticClass:t._$s("3-"+o,"sc","right"),attrs:{_i:"3-"+o}},[n("view",{staticClass:t._$s("4-"+o,"sc","tit"),attrs:{_i:"4-"+o}},[t._v(t._$s("4-"+o,"t0-0",t._s(e.title)))]),n("view",{staticClass:t._$s("5-"+o,"sc","info"),attrs:{_i:"5-"+o}},[n("text",[t._v(t._$s("6-"+o,"t0-0",t._s(t._f("formatData")(e.add_time))))]),n("text",[t._v(t._$s("7-"+o,"t0-0",t._s(e.click)))])])])])})),0)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},3048:function(t,e,n){"use strict";n.r(e);var r=n("f33f"),i=n("2061");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},3482:function(t,e,n){"use strict";n.r(e);var r=n("9a90"),i=n("e178");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"3c38":function(t,e,n){"use strict";n.r(e);var r=n("def8"),i=n("a825");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},4795:function(t,e,n){t.exports=n("bbdd")},"47fb":function(t,e,n){"use strict";n.r(e);var r=n("d320"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"508e":function(t,e,n){"use strict";n("8c34");var r=a(n("8bbf")),i=a(n("b61a")),o=n("09b0");function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.prototype.$myRequest=o.myRequest,r.default.filter("formatDate",(function(t){var e=new Date(t),n=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,0),i=e.getDay().toString().padStart(2,0);return n+"-"+r+"-"+i})),r.default.config.productionTip=!1,i.default.mpType="app";var f=new r.default(u({},i.default));f.$mount()},"62c3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),i=o(n("8dbe"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,u,"next",t)}function u(t){a(o,r,i,s,u,"throw",t)}s(void 0)}))}}var u={data:function(){return{id:0,swipers:[],info:{},content:"",options:[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png",text:"\u5ba2\u670d"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"\u5e97\u94fa",info:2,infoBackgroundColor:"#007aff",infoColor:"red"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"\u8d2d\u7269\u8f66",info:2}],buttonGroup:[{text:"\u52a0\u5165\u8d2d\u7269\u8f66",backgroundColor:"#ff0000",color:"#fff"},{text:"\u7acb\u5373\u8d2d\u4e70",backgroundColor:"#ffa200",color:"#fff"}]}},methods:{getSwipers:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getthumimages/"+t.id});case 2:n=e.sent,t.swipers=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getDetailInfo:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getinfo/"+t.id});case 2:n=e.sent,t.info=n.data.message[0];case 4:case"end":return e.stop()}}),e)})))()},getDetailContent:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getdesc/"+t.id});case 2:n=e.sent,t.content=n.data.message[0].content;case 4:case"end":return e.stop()}}),e)})))()},onClick:function(e){t("log",e," at pages/goods-detail/goods-detail.vue:92"),uni.showToast({title:"\u70b9\u51fb".concat(e.content.text),icon:"none"})},buttonClick:function(e){t("log",e," at pages/goods-detail/goods-detail.vue:100"),this.options[2].info++}},onLoad:function(t){this.id=t.id,this.getSwipers(),this.getDetailInfo(),this.getDetailContent()},components:{uniGoodsNav:i.default}};e.default=u}).call(this,n("0de9")["default"])},"6fb4":function(t,e,n){"use strict";n.r(e);var r=n("947c"),i=n("cbbe");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"77b2":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","pics"),attrs:{_i:0}},[n("scroll-view",{staticClass:t._$s(1,"sc","left"),attrs:{_i:1}},t._l(t._$s(2,"f",{forItems:t.cates}),(function(e,r,i,o){return n("view",{key:t._$s(2,"f",{forIndex:i,key:e.id}),class:t._$s("2-"+o,"c",t.active===r?"active":""),attrs:{_i:"2-"+o},on:{click:function(n){return t.leftClickHandle(r,e.id)}}},[t._v(t._$s("2-"+o,"t0-0",t._s(e.title)))])})),0),n("scroll-view",{staticClass:t._$s(3,"sc","right"),attrs:{_i:3}},[t._l(t._$s(4,"f",{forItems:t.secondData}),(function(e,r,i,o){return n("view",{key:t._$s(4,"f",{forIndex:i,key:e.id}),staticClass:t._$s("4-"+o,"sc","item"),attrs:{_i:"4-"+o}},[n("image",{attrs:{src:t._$s("5-"+o,"a-src",e.img_url),_i:"5-"+o},on:{click:function(n){return t.previewImg(e.img_url)}}}),n("text",[t._v(t._$s("6-"+o,"t0-0",t._s(e.title)))])])})),t._$s(7,"i",0===t.secondData.length)?n("text"):t._e()],2)])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"7e11":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),i=o(n("3048"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,u,"next",t)}function u(t){a(o,r,i,s,u,"throw",t)}s(void 0)}))}}var u={components:{goodsList:i.default},data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"\u9ed1\u9a6c\u8d85\u5e02",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"\u8054\u7cfb\u6211\u4eec",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"\u793e\u533a\u56fe\u7247",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"\u5b66\u4e60\u89c6\u9891",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},methods:{getSwipers:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getlunbo"});case 2:n=e.sent,t.swipers=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getHotGoods:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:n=e.sent,t.goods=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},navItemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+t})}}};e.default=u},"8bbf":function(t,e){t.exports=Vue},"8c34":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("3482").default)})),__definePage("pages/cart/cart",(function(){return Vue.extend(n("a930").default)})),__definePage("pages/member/member",(function(){return Vue.extend(n("1c4b").default)})),__definePage("pages/news/news",(function(){return Vue.extend(n("e2f3").default)})),__definePage("pages/goods/goods",(function(){return Vue.extend(n("3c38").default)})),__definePage("pages/contact/contact",(function(){return Vue.extend(n("6fb4").default)})),__definePage("pages/pics/pics",(function(){return Vue.extend(n("c36f").default)})),__definePage("pages/news-detail/news-detail",(function(){return Vue.extend(n("125d").default)})),__definePage("pages/goods-detail/goods-detail",(function(){return Vue.extend(n("a452").default)}))},"8dbe":function(t,e,n){"use strict";n.r(e);var r=n("2c49"),i=n("2536");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"07b1d887",null,!1,r["a"],a);e["default"]=u.exports},"8e4a":function(t,e,n){"use strict";n.r(e);var r=n("2d51"),i=n("bdfb");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},"947c":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","contact"),attrs:{_i:0}},[n("image",{staticClass:t._$s(1,"sc","img"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","info"),attrs:{_i:2}},[n("view",{attrs:{_i:3},on:{click:t.phone}}),n("view")]),n("map",{staticClass:t._$s(5,"sc","map"),attrs:{longitude:t._$s(5,"a-longitude",t.longitude),scale:t._$s(5,"a-scale",t.scale),latitude:t._$s(5,"a-latitude",t.latitude),markers:t._$s(5,"a-markers",t.markers),_i:5}})])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=b;var l="suspendedStart",d="suspendedYield",v="executing",_="completed",p={},h={};h[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(S([])));m&&m!==r&&i.call(m,a)&&(h=m);var w=C.prototype=x.prototype=Object.create(h);$.prototype=w.constructor=C,C.constructor=$,C[u]=$.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===$||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},k(O.prototype),O.prototype[s]=function(){return this},f.AsyncIterator=O,f.async=function(t,e,n,r){var i=new O(b(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=S,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),p}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new I(r||[]);return o._invoke=j(t,n,a),o}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function x(){}function $(){}function C(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){function e(n,r,o,a){var s=y(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(c).then((function(t){u.value=t,o(u)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=l;return function(i,o){if(r===v)throw new Error("Generator is already running");if(r===_){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=y(t,e,n);if("normal"===u.type){if(r=n.done?_:d,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=_,n.method="throw",n.arg=u.arg)}}}function P(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=y(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,p;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"98c4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["list"],data:function(){return{}},filters:{formatData:function(t){var e=new Date(t),n=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,0),i=e.getDay().toString().padStart(2,0);return n+"-"+r+"-"+i}},methods:{navigator:function(t){this.$emit("itemClick",t)}}};e.default=r},"9a90":function(t,e,n){"use strict";var r={goodsList:n("3048").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","home"),attrs:{_i:0}},[n("swiper",{attrs:{_i:1}},t._l(t._$s(2,"f",{forItems:t.swipers}),(function(e,r,i,o){return n("swiper-item",{key:t._$s(2,"f",{forIndex:i,key:e.id})},[n("image",{attrs:{src:t._$s("3-"+o,"a-src",e.img),_i:"3-"+o}})])})),0),n("view",{staticClass:t._$s(4,"sc","nav"),attrs:{_i:4}},t._l(t._$s(5,"f",{forItems:t.navs}),(function(e,r,i,o){return n("view",{key:t._$s(5,"f",{forIndex:i,key:r}),staticClass:t._$s("5-"+o,"sc","nav_item"),attrs:{_i:"5-"+o},on:{click:function(n){return t.navItemClick(e.path)}}},[n("view",{class:t._$s("6-"+o,"c",e.icon),attrs:{_i:"6-"+o}}),n("text",[t._v(t._$s("7-"+o,"t0-0",t._s(e.title)))])])})),0),n("view",{staticClass:t._$s(8,"sc","hot_goods"),attrs:{_i:8}},[n("view",{staticClass:t._$s(9,"sc","tit"),attrs:{_i:9}}),n("goods-list",{attrs:{goods:t.goods,_i:10},on:{goodsItemClick:t.goGoodsDetail}})],1)])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},a0c9:function(t,e,n){"use strict";n.r(e);var r=n("62c3"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},a15b:function(t,e,n){"use strict";n.r(e);var r=n("12fd"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},a17b:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},a452:function(t,e,n){"use strict";n.r(e);var r=n("b87e"),i=n("a0c9");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},a6c7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{}};e.default=r},a825:function(t,e,n){"use strict";n.r(e);var r=n("2c05"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},a930:function(t,e,n){"use strict";n.r(e);var r=n("a17b"),i=n("d6f0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},aad7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{}},methods:{}};e.default=r},ad5f:function(t,e,n){"use strict";n.r(e);var r=n("a6c7"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},b335:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},b61a:function(t,e,n){"use strict";n.r(e);var r=n("2118");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,a,s,u,c=n("f0c5"),f=Object(c["a"])(r["default"],o,a,!1,null,null,null,!1,s,u);e["default"]=f.exports},b87e:function(t,e,n){"use strict";var r={uniGoodsNav:n("8dbe").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","goods_detail"),attrs:{_i:0}},[n("swiper",{attrs:{_i:1}},t._l(t._$s(2,"f",{forItems:t.swipers}),(function(e,r,i,o){return n("swiper-item",{key:t._$s(2,"f",{forIndex:i,key:r})},[n("image",{attrs:{src:t._$s("3-"+o,"a-src",e.src),_i:"3-"+o}})])})),0),n("view",{staticClass:t._$s(4,"sc","box1"),attrs:{_i:4}},[n("view",{staticClass:t._$s(5,"sc","price"),attrs:{_i:5}},[n("text",[t._v(t._$s(6,"t0-0",t._s(t.info.sell_price)))]),n("text",[t._v(t._$s(7,"t0-0",t._s(t.info.market_price)))])]),n("view",{staticClass:t._$s(8,"sc","goods_name"),attrs:{_i:8}},[t._v(t._$s(8,"t0-0",t._s(t.info.title)))]),n("view",{staticClass:t._$s(9,"sc","line"),attrs:{_i:9}}),n("view",{staticClass:t._$s(10,"sc","box2"),attrs:{_i:10}},[n("view",[t._v(t._$s(11,"t0-0",t._s(t.info.goods_no)))]),n("view",[t._v(t._$s(12,"t0-0",t._s(t.info.stock_quantity)))])]),n("view",{staticClass:t._$s(13,"sc","line"),attrs:{_i:13}}),n("view",{staticClass:t._$s(14,"sc","box3"),attrs:{_i:14}},[n("view",{staticClass:t._$s(15,"sc","tit"),attrs:{_i:15}}),n("view",{staticClass:t._$s(16,"sc","content"),attrs:{_i:16}},[n("rich-text",{attrs:{nodes:t._$s(17,"a-nodes",t.content),_i:17}})])])]),n("view",{staticClass:t._$s(18,"sc","goods_nav"),attrs:{_i:18}},[n("uni-goods-nav",{attrs:{fill:!0,options:t.options,buttonGroup:t.buttonGroup,_i:19},on:{click:t.onClick,buttonClick:t.buttonClick}})],1)])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},bdfb:function(t,e,n){"use strict";n.r(e);var r=n("98c4"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},c36f:function(t,e,n){"use strict";n.r(e);var r=n("77b2"),i=n("2061d");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},cbbe:function(t,e,n){"use strict";n.r(e);var r=n("ed11"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},d320:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),i=o(n("8e4a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function s(t){a(o,r,i,s,u,"next",t)}function u(t){a(o,r,i,s,u,"throw",t)}s(void 0)}))}}var u={components:{newsItem:i.default},data:function(){return{newsList:[]}},methods:{getNews:function(){var t=this;return s(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getnewslist"});case 2:n=e.sent,t.newsList=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},goDetail:function(t){uni.navigateTo({url:"/pages/news-detail/news-detail?id="+t})}},onLoad:function(){this.getNews()}};e.default=u},d6f0:function(t,e,n){"use strict";n.r(e);var r=n("aad7"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},def8:function(t,e,n){"use strict";var r={goodsList:n("3048").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","goods_list"),attrs:{_i:0}},[n("goods-list",{attrs:{goods:t.goods,_i:1},on:{goodsItemClick:t.goGoodsDetail}}),t._$s(2,"i",t.flag)?n("view",{staticClass:t._$s(2,"sc","isOver"),attrs:{_i:2}}):t._e()],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},e178:function(t,e,n){"use strict";n.r(e);var r=n("7e11"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},e2f3:function(t,e,n){"use strict";n.r(e);var r=n("20ae"),i=n("47fb");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var a,s=n("f0c5"),u=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=u.exports},e610:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","news_detail"),attrs:{_i:0}},[n("text",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}},[t._v(t._$s(1,"t0-0",t._s(t.detail.title)))]),n("view",{staticClass:t._$s(2,"sc","info"),attrs:{_i:2}},[n("text",[t._v(t._$s(3,"t0-0",t._s(t._f("formatDate")(t.detail.add_time))))]),n("text",[t._v(t._$s(4,"t0-0",t._s(t.detail.click)))])]),n("view",{staticClass:t._$s(5,"sc","content"),attrs:{_i:5}},[n("rich-text",{attrs:{nodes:t._$s(6,"a-nodes",t.detail.content),_i:6}})])])},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},ed11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{longitude:120.363172,latitude:30.312212,scale:13,markers:[{longitude:120.363172,latitude:30.312212,iconPath:"../../static/hmlogo.png",width:30,height:30}]}},methods:{phone:function(){uni.makePhoneCall({phoneNumber:"400-618-9090"})}}};e.default=r},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var v in u)d.call(u,v)&&!d.call(l.components,v)&&(l.components[v]=u[v])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var _=l.render;l.render=function(t,e){return f.call(e),_(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},f33f:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","goods_list"),attrs:{_i:0}},t._l(t._$s(1,"f",{forItems:t.goods}),(function(e,r,i,o){return n("view",{key:t._$s(1,"f",{forIndex:i,key:e.id}),staticClass:t._$s("1-"+o,"sc","goods_item"),attrs:{_i:"1-"+o},on:{click:function(n){return t.navigator(e.id)}}},[n("image",{attrs:{src:t._$s("2-"+o,"a-src",e.img_url),_i:"2-"+o}}),n("view",{staticClass:t._$s("3-"+o,"sc","price"),attrs:{_i:"3-"+o}},[n("text",[t._v(t._$s("4-"+o,"t0-0",t._s(e.sell_price)))]),n("text",[t._v(t._$s("5-"+o,"t0-0",t._s(e.market_price)))])]),n("view",{staticClass:t._$s("6-"+o,"sc","name"),attrs:{_i:"6-"+o}},[t._v(t._$s("6-"+o,"t0-0",t._s(e.title)))])])})),0)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))},fc6a:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view")},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}))}},[["508e","app-config"]]]);