(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71e837ea"],{1316:function(t,e,a){t.exports=a("9cd3")},"284c":function(t,e,a){"use strict";var n=a("1316"),i=a.n(n);function r(t){if(i()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var s=a("a06f"),o=a.n(s),c=a("2dc0"),f=a.n(c);function d(t){if(f()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return r(t)||d(t)||u()}a.d(e,"a",(function(){return l}))},"2dc0":function(t,e,a){t.exports=a("588c")},"471b":function(t,e,a){"use strict";var n=a("194a"),i=a("4fff"),r=a("faaa"),s=a("2616"),o=a("6725"),c=a("6c15"),f=a("0b7b");t.exports=function(t){var e,a,d,u,l,p=i(t),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,b=void 0!==g,x=0,m=f(p);if(b&&(g=n(g,h>2?arguments[2]:void 0,2)),void 0==m||v==Array&&s(m))for(e=o(p.length),a=new v(e);e>x;x++)c(a,x,b?g(p[x],x):p[x]);else for(u=m.call(p),l=u.next,a=new v;!(d=l.call(u)).done;x++)c(a,x,b?r(u,g,[d.value,x],!0):d.value);return a.length=x,a}},4795:function(t,e,a){},"484e":function(t,e,a){var n=a("a5eb"),i=a("471b"),r=a("7de7"),s=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:i})},"588c":function(t,e,a){a("5145"),a("3e47b"),t.exports=a("59d7")},"59d7":function(t,e,a){var n=a("8f95"),i=a("0363"),r=a("7463"),s=i("iterator");t.exports=function(t){var e=Object(t);return void 0!==e[s]||"@@iterator"in e||r.hasOwnProperty(n(e))}},"5ab9":function(t,e,a){a("e519");var n=a("764b");t.exports=n.Array.isArray},6220:function(t,e,a){var n=a("fc48");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"6c15":function(t,e,a){"use strict";var n=a("7168"),i=a("4180"),r=a("2c6c");t.exports=function(t,e,a){var s=n(e);s in t?i.f(t,s,r(0,a)):t[s]=a}},"74e7":function(t,e,a){t.exports=a("bc59")},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),r=a("5c6c");t.exports=function(t,e,a){var s=n(e);s in t?i.f(t,s,r(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),s=a("861d"),o=a("7b0b"),c=a("50c4"),f=a("8418"),d=a("65f0"),u=a("1dde"),l=a("b622"),p=l("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=u("concat"),x=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},m=!g||!b;n({target:"Array",proto:!0,forced:m},{concat:function(t){var e,a,n,i,r,s=o(this),u=d(s,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?s:arguments[e],x(r)){if(i=c(r.length),l+i>v)throw TypeError(h);for(a=0;a<i;a++,l++)a in r&&f(u,l,r[a])}else{if(l>=v)throw TypeError(h);f(u,l++,r)}return u.length=l,u}})},"9cd3":function(t,e,a){t.exports=a("5ab9")},a06f:function(t,e,a){t.exports=a("74e7")},ab8a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-index"},[t.data.length&&"/specialtopic/index"==t.$route.path?a("section",{staticClass:"main"},[t.data.length?a("van-list",{attrs:{finished:t.finished,"finished-text":""},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("ul",{staticClass:"list"},t._l(t.data,(function(e,n){return a("li",{key:n,on:{click:function(a){return t.handleToList(e)}}},[a("div",{staticClass:"flex item-box"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:e.pic}})]),a("div",{staticClass:"right"},[a("p",{staticClass:"name"},[t._v(t._s(e.name))]),a("p",{staticClass:"description"},[t._v(t._s(e.description))]),a("div",{staticClass:"other flex"},[a("p",{staticClass:"time"},[t._v(t._s(t._f("timeformat")(e.dateline)))]),a("div",{staticClass:"views"},[t._v(t._s(e.views))]),a("div",{staticClass:"replies"},[t._v(t._s(e.replies))])])])]),a("van-divider")],1)})),0)]):t._e()],1):t._e(),a("router-view",{attrs:{itemdata:t.itemdata}})],1)},i=[],r=(a("99af"),a("284c")),s=a("d383"),o={data:function(){return{data:[],itemdata:"",loading:!1,finished:!1,pageInfo:{page_size:10,page_index:0}}},created:function(){this.getSquareClass()},methods:{onLoad:function(){this.getSquareClass()},handleToList:function(t){this.itemdata=t;var e="".concat(this.$store.state.indexUrl+"specialtopic/list?typeid="+t.typeid+"&"+this.$store.state.appParams),a={url:e,share:"0",keyboard:"1"};window.location.href="teldapp://newWebview?params="+JSON.stringify(a)},getSquareClass:function(){var t=this;this.api.getSquareClass({token:this.$store.state.userData,fid:130,page_size:this.pageInfo.page_size,page_index:this.pageInfo.page_index}).then((function(e){t.loading=!1,0==e.err_code&&(e.data.threadclass.length||(t.finished=!0),0==t.pageInfo.page_index&&(t.data=[]),t.data=[].concat(Object(r["a"])(t.data),Object(r["a"])(e.data.threadclass)),t.pageInfo.page_index++)}))}},filters:{timeformat:function(t){return t&&0!=t?Object(s["b"])(1e3*t):""}}},c=o,f=(a("f107"),a("2877")),d=Object(f["a"])(c,n,i,!1,null,"16cb24d7",null);e["default"]=d.exports},bc59:function(t,e,a){a("3e47b"),a("484e");var n=a("764b");t.exports=n.Array.from},e519:function(t,e,a){var n=a("a5eb"),i=a("6220");n({target:"Array",stat:!0},{isArray:i})},f107:function(t,e,a){"use strict";var n=a("4795"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-71e837ea.746c2c74.js.map