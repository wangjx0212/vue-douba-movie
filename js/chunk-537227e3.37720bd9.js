(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537227e3"],{1316:function(t,e,a){t.exports=a("9cd3")},"284c":function(t,e,a){"use strict";var n=a("1316"),r=a.n(n);function i(t){if(r()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var o=a("a06f"),s=a.n(o),c=a("2dc0"),f=a.n(c);function d(t){if(f()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return i(t)||d(t)||u()}a.d(e,"a",(function(){return l}))},"2dc0":function(t,e,a){t.exports=a("588c")},"3a25":function(t,e,a){},"471b":function(t,e,a){"use strict";var n=a("194a"),r=a("4fff"),i=a("faaa"),o=a("2616"),s=a("6725"),c=a("6c15"),f=a("0b7b");t.exports=function(t){var e,a,d,u,l,p=r(t),v="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,_=void 0!==h,b=0,y=f(p);if(_&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=s(p.length),a=new v(e);e>b;b++)c(a,b,_?h(p[b],b):p[b]);else for(u=y.call(p),l=u.next,a=new v;!(d=l.call(u)).done;b++)c(a,b,_?i(u,h,[d.value,b],!0):d.value);return a.length=b,a}},"484e":function(t,e,a){var n=a("a5eb"),r=a("471b"),i=a("7de7"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:r})},5066:function(t,e,a){"use strict";var n=a("3a25"),r=a.n(n);r.a},"588c":function(t,e,a){a("5145"),a("3e47b"),t.exports=a("59d7")},"59d7":function(t,e,a){var n=a("8f95"),r=a("0363"),i=a("7463"),o=r("iterator");t.exports=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(n(e))}},"5ab9":function(t,e,a){a("e519");var n=a("764b");t.exports=n.Array.isArray},6220:function(t,e,a){var n=a("fc48");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"6c15":function(t,e,a){"use strict";var n=a("7168"),r=a("4180"),i=a("2c6c");t.exports=function(t,e,a){var o=n(e);o in t?r.f(t,o,i(0,a)):t[o]=a}},"74e7":function(t,e,a){t.exports=a("bc59")},7892:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-index"},[t.data?a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("ul",t._l(t.data,(function(e,n){return a("li",{key:n},[a("div",{staticClass:"left"},[a("p",[t._v(t._s(t._f("timeformat")(e.dateline)))])]),a("div",{staticClass:"right"},[a("p",{staticClass:"message"},[t._v(t._s(e.message))]),2==e.attachment?a("div",{staticClass:"image-box"},t._l(e.image_list,(function(n,r){return a("img",{key:r,attrs:{src:n},on:{click:function(a){return t.handlePreviewImage(e.image_list,r)}}})})),0):t._e(),a("div",{staticClass:"label flex justify-space-between"},[a("div",[a("div",{staticClass:"views"},[t._v(t._s(e.views))]),a("div",{staticClass:"replies"},[t._v(t._s(e.replies))])]),a("div",{staticClass:"money"},[a("p",[t._v("打赏金额:"),a("span",[t._v("¥"+t._s(e.question_price))])]),0!=e.reward_type?a("div",{staticClass:"reward_type",class:{reward_type_fen:["2","3","4"].indexOf(e.reward_type)>-1}}):t._e()])])])])})),0)]):t._e()],1)},r=[],i=(a("99af"),a("284c")),o=a("d383"),s=a("28a2"),c={props:["uid","type"],data:function(){return{data:"",loading:!1,finished:!1,pageInfo:{page_size:10,page_index:0}}},created:function(){this.getMyThread(this.uid)},methods:{onLoad:function(){this.getMyThread(this.uid)},handlePreviewImage:function(t,e){Object(s["a"])({images:t,startPosition:e})},getMyThread:function(t){var e=this;this.api.getMyThread({token:this.$store.state.userData,uid:t,type:2,special:0,page_size:this.pageInfo.page_size,page_index:this.pageInfo.page_index}).then((function(t){e.loading=!1,0==t.err_code&&(e.pageInfo.page_index++,t.data.my_thread_data.length||(e.finished=!0),e.data=[].concat(Object(i["a"])(e.data),Object(i["a"])(t.data.my_thread_data)))}))}},filters:{timeformat:function(t){return Object(o["a"])(1e3*t,"MM-DD")}}},f=c,d=(a("5066"),a("2877")),u=Object(d["a"])(f,n,r,!1,null,"62f3babc",null);e["default"]=u.exports},8418:function(t,e,a){"use strict";var n=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?r.f(t,o,i(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),i=a("e8b5"),o=a("861d"),s=a("7b0b"),c=a("50c4"),f=a("8418"),d=a("65f0"),u=a("1dde"),l=a("b622"),p=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},y=!h||!_;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,r,i,o=s(this),u=d(o,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],b(i)){if(r=c(i.length),l+r>v)throw TypeError(g);for(a=0;a<r;a++,l++)a in i&&f(u,l,i[a])}else{if(l>=v)throw TypeError(g);f(u,l++,i)}return u.length=l,u}})},"9cd3":function(t,e,a){t.exports=a("5ab9")},a06f:function(t,e,a){t.exports=a("74e7")},bc59:function(t,e,a){a("3e47b"),a("484e");var n=a("764b");t.exports=n.Array.from},e519:function(t,e,a){var n=a("a5eb"),r=a("6220");n({target:"Array",stat:!0},{isArray:r})}}]);
//# sourceMappingURL=chunk-537227e3.37720bd9.js.map