(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-529114a2"],{1316:function(t,e,a){t.exports=a("9cd3")},"23d8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-index"},[t.data?i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("ul",t._l(t.data,(function(e,n){return i("li",{key:n},[i("div",{staticClass:"flex justify-space-between",staticStyle:{width:"100%"}},[i("div",{staticClass:"left"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:e.avatar}}),t._v(" "),1==e.is_ident_icon?i("img",{staticClass:"isvip",attrs:{src:a("7637")}}):t._e()]),i("div",{staticClass:"text"},[i("p",{staticClass:"username"},[t._v(t._s(e.author))]),i("div",{staticClass:"flex flex-none"},[i("p",{staticClass:"level",class:{isCarvip:1==e.is_carvip}},[t._v(t._s(e.level))]),i("p",{staticClass:"extcredits"},[t._v(t._s(e.extcredits2)+"°")])])])]),i("div",{staticClass:"right"},[i("p",{staticClass:"price"},[t._v("¥"+t._s(e.question_price))]),i("p",{staticClass:"time"},[t._v(t._s(t._f("getFromNom")(e.dateline)))])])]),i("div",{staticClass:"message"},[i("p",[t._v(t._s(e.message))])]),2==e.attachment?i("div",{staticClass:"image-box"},t._l(e.image_list,(function(a,n){return i("img",{key:n,class:{"one-image":!(!e.image_list||1!=e.image_list.length)},attrs:{src:a},on:{click:function(a){return t.handlePreviewImage(e.image_list,n)}}})})),0):t._e(),i("div",{staticClass:"poll"},[i("div",{staticClass:"title flex justify-space-between"},[i("span",[t._v("投票选项")]),1==e.poll.is_expiration?i("span",{staticClass:"expiration"},[t._v("投票已结束")]):t._e(),1!=e.poll.is_expiration?i("p",{staticClass:"countdown"},[i("span",{staticClass:"text"},[t._v("据截止还有")]),i("span",{staticClass:"time"},[i("van-count-down",{attrs:{time:t._f("countdown")(e.poll.expiration)}})],1)]):t._e()]),i("ul",t._l(e.polloption,(function(a,n){return i("li",{key:n},[i("div",{staticClass:"flex  left"},[i("img",{attrs:{src:a.icon}}),i("p",[t._v(t._s(a.polloption))])]),i("div",{staticClass:"right"},[t._v(t._s(a.votes)+"票 "),a.polloptionid==e.poll.is_vote?i("div",{staticClass:"is-vote"},[i("div")]):t._e()])])})),0)]),i("div",{staticClass:"other flex justify-space-between"},[i("div",{staticClass:"time"},[t._v(t._s(t._f("getFromNom")(e.dateline)))]),i("div",{staticClass:"icon flex"},[i("div",{staticClass:"views"},[t._v(t._s(e.views))]),i("div",{staticClass:"replies"},[t._v(t._s(e.replies))]),i("div",{staticClass:"share"})])])])})),0)]):t._e()],1)},n=[],s=(a("99af"),a("0d03"),a("284c")),r=a("d383"),o=a("28a2"),c={props:["uid","type"],data:function(){return{data:"",loading:!1,finished:!1,pageInfo:{page_size:10,page_index:0}}},created:function(){this.getMyThread(this.uid)},methods:{onLoad:function(){this.getMyThread(this.uid)},handlePreviewImage:function(t,e){Object(o["a"])({images:t,startPosition:e,loop:!1})},getMyThread:function(t){var e=this;this.api.getMyThread({token:this.$store.state.userData,uid:t,type:2,special:1,page_size:this.pageInfo.page_size,page_index:this.pageInfo.page_index}).then((function(t){e.loading=!1,0==t.err_code&&(e.pageInfo.page_index++,t.data.my_thread_data.length||(e.finished=!0),e.data=[].concat(Object(s["a"])(e.data),Object(s["a"])(t.data.my_thread_data)))}))}},filters:{timeformat:function(t){return Object(r["a"])(1e3*t,"MM-DD")},getFromNom:function(t){return Object(r["b"])(1e3*t)},countdown:function(t){return 1e3*t-(new Date).getTime()}}},l=c,f=(a("dae9"),a("2877")),d=Object(f["a"])(l,i,n,!1,null,"5c607ef1",null);e["default"]=d.exports},"284c":function(t,e,a){"use strict";var i=a("1316"),n=a.n(i);function s(t){if(n()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var r=a("a06f"),o=a.n(r),c=a("2dc0"),l=a.n(c);function f(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return s(t)||f(t)||d()}a.d(e,"a",(function(){return u}))},"2dc0":function(t,e,a){t.exports=a("588c")},"471b":function(t,e,a){"use strict";var i=a("194a"),n=a("4fff"),s=a("faaa"),r=a("2616"),o=a("6725"),c=a("6c15"),l=a("0b7b");t.exports=function(t){var e,a,f,d,u,v=n(t),p="function"==typeof this?this:Array,g=arguments.length,x=g>1?arguments[1]:void 0,h=void 0!==x,b=0,m=l(v);if(h&&(x=i(x,g>2?arguments[2]:void 0,2)),void 0==m||p==Array&&r(m))for(e=o(v.length),a=new p(e);e>b;b++)c(a,b,h?x(v[b],b):v[b]);else for(d=m.call(v),u=d.next,a=new p;!(f=u.call(d)).done;b++)c(a,b,h?s(d,x,[f.value,b],!0):f.value);return a.length=b,a}},"484e":function(t,e,a){var i=a("a5eb"),n=a("471b"),s=a("7de7"),r=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:n})},"4e09":function(t,e,a){},"588c":function(t,e,a){a("5145"),a("3e47b"),t.exports=a("59d7")},"59d7":function(t,e,a){var i=a("8f95"),n=a("0363"),s=a("7463"),r=n("iterator");t.exports=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||s.hasOwnProperty(i(e))}},"5ab9":function(t,e,a){a("e519");var i=a("764b");t.exports=i.Array.isArray},6220:function(t,e,a){var i=a("fc48");t.exports=Array.isArray||function(t){return"Array"==i(t)}},"6c15":function(t,e,a){"use strict";var i=a("7168"),n=a("4180"),s=a("2c6c");t.exports=function(t,e,a){var r=i(e);r in t?n.f(t,r,s(0,a)):t[r]=a}},"74e7":function(t,e,a){t.exports=a("bc59")},7637:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAD6UlEQVRIib1W32scVRT+7p2d7I/stknW3U2baMlEsDGgAdM8CCpIJVqoL2ko9kkELab+BfbJl4KKID4EzIM/niRUBRUCrdhECn2otNSWNvqQqabRthu2G7LpbrK7M1e+mN2dmZ3ZtFV6noZ7z/m+Off8FH19fWglpmlqAEYBHNiw1QsaYISkiNGkaquiBZhhKX4GMAPglGEYViu8QELTNHUAExVbvatLkb5RsqyzK+vab3eryFXsTZ2kLrG3PYTnOiLWo1FNq9gqq0txAsCkYRiVeyY0TXOobNkndU32T98sik+XCrhU8LWvy1BCx9HeBA7viqmKZS+0aXLcMIxL2xKapjlmK/XVfNGSE1dz2uW11kReeSquY3IwaQ3ENFsK8ZphGN84VaSXTAEnf1guhV785fZ9k1FoQ1tiEIuYvoR8Rnr2fbaIN67mRdlW901WE9oSg1jEJLaLkAnCmPEZ37qWF7Z6cLKaEINYxCT2VhLWPZwISdHPmP0Xz7xCLGISmxybhKwzpv70rZJwxmx/MoLZfWnMjWQwtEPfFjwdljj1TApXnu3GWCZWPycmsclBLno4yjqbWiq4AD56ogNDiTY8HdfxweOd2xK+3ZPAyM4weiMhvNe/w3VHbHKQi4QHWNTeOqs4nna4ow2P6K6EbpLRVKR+tFJ13xKbHOSSbFfsIF6AuTvl+rcA8LID0CuPRUMYaG88++lcsUmHHOSS7I1sV175MVdynYylYk069bu0+25meb1JhxzkkmzEtd7olNn8BgrVxvnzXeHNxPCT8e5o/TS7YeOiTxskB7kCA8OU/jbbeBopBI7sam/SYw91Puf0rbtoVceSIyYZkBCf/+WOxZs9cWjCrfN6j/snvrzZHD9sTRZySc4zjhg/+bVQxrl8Ix67wxrGMw2CrpDAIUf8qLtQ9O+/5CCX5PDkPAt6gg8X3fV53Eggrv/r5jt7EmgPNV7nk8W1IJjNmUkuas9weDIWfjKX28CsI2NZ2F8MJnEwHcGx3nj9/MJqGadzzdmJrTiTg1xCKcXW9vfXt0vpifk7vgZ9MR1nh1Mub5xStRVeupANHNKTA104lIlyG9gtuYNwLTjcHVUcnn5yvVjBsfk8gnLvxPXgjYCYxCYHuWq/PFm11QIndZsUvobfLZdw9Foea47aZPq//8cqPv5z1deGWMQkNjngXDG2BvB5TmoOz6BaYk99JRVBQtPw08o6fg/wjHX72WCnOpiKVqUQI7X9xrXT1FYMTmoOzwedjfRs6slO9Wo6xj487txrXFnACyrwr87sy1hBMW0ltKEtMbxkTR46PH14a6KD9OEtwh7i/2/VB/APU8EZpqcnsBIAAAAASUVORK5CYII="},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?n.f(t,r,s(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),f=a("65f0"),d=a("1dde"),u=a("b622"),v=u("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",x=!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=d("concat"),b=function(t){if(!r(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},m=!x||!h;i({target:"Array",proto:!0,forced:m},{concat:function(t){var e,a,i,n,s,r=o(this),d=f(r,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?r:arguments[e],b(s)){if(n=c(s.length),u+n>p)throw TypeError(g);for(a=0;a<n;a++,u++)a in s&&l(d,u,s[a])}else{if(u>=p)throw TypeError(g);l(d,u++,s)}return d.length=u,d}})},"9cd3":function(t,e,a){t.exports=a("5ab9")},a06f:function(t,e,a){t.exports=a("74e7")},bc59:function(t,e,a){a("3e47b"),a("484e");var i=a("764b");t.exports=i.Array.from},dae9:function(t,e,a){"use strict";var i=a("4e09"),n=a.n(i);n.a},e519:function(t,e,a){var i=a("a5eb"),n=a("6220");i({target:"Array",stat:!0},{isArray:n})}}]);
//# sourceMappingURL=chunk-529114a2.ddfa9a0e.js.map