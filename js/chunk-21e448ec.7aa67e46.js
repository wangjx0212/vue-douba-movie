(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e448ec"],{1316:function(t,e,a){t.exports=a("9cd3")},"202e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-index wechat"},[t.data?n("van-list",{staticClass:"vanlist",attrs:{finished:t.finished,"finished-text":"",direction:"up"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("ul",{staticClass:"list"},t._l(t.data,(function(e,a){return n("li",{key:a,staticClass:"item"},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.dateline==e.dateline,expression:"item.dateline == item.dateline"}],staticClass:"content_time"},[t._v(t._s(t._f("timeformat")(e.dateline)))]),n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.type,expression:"item.type == 1"}],staticClass:"right"},[0==e.attachment?n("span",{staticClass:"right_text"},[t._v(t._s(e.message))]):t._e(),2==e.attachment?n("img",{staticClass:"right_img message_img",attrs:{src:e.message,alt:""},on:{click:function(a){return t.ImagePreview(e.message)}}}):t._e(),n("img",{staticClass:"right_avatar",attrs:{src:e.my_avatar,alt:""}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:2==e.type,expression:"item.type == 2"}],staticClass:"left"},[n("img",{staticClass:"left_avatar",attrs:{src:e.user_avatar,alt:""}}),0==e.attachment?n("span",{staticClass:"left_text"},[t._v(t._s(e.message))]):t._e(),2==e.attachment?n("img",{staticClass:"left_img message_img",attrs:{src:e.message,alt:""},on:{click:function(a){return t.ImagePreview(e.message)}}}):t._e()])])])})),0)]):t._e(),n("div",{staticClass:"input-box"},[n("p",{staticClass:"line"}),n("div",{staticClass:"flex align-items-center"},[n("van-cell-group",{staticClass:"input-message"},[n("van-field",{attrs:{placeholder:"我也来说～",border:!1},on:{focus:function(e){return t.animateWidth()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addPost(e)}},model:{value:t.postParameter.message,callback:function(e){t.$set(t.postParameter,"message",e)},expression:"postParameter.message"}},[n("span",{staticStyle:{color:"#424E77"},attrs:{slot:"button"},on:{click:t.addPost},slot:"button"},[t._v("发布")])])],1),n("van-uploader",{attrs:{"after-read":t.afterRead}},[n("div",{staticClass:"flex align-items-center"},[n("img",{staticClass:"icon icon_image",attrs:{src:a("c7b3")}})])])],1)])],1)},i=[],s=(a("99af"),a("b0c0"),a("284c")),r=a("d383"),c=a("28a2"),o=a("d399"),l={data:function(){return{loading:!1,finished:!1,pageInfo:{page_size:30,page_index:0},postParameter:{message:"",attachment:0},data:[]}},created:function(){document.title=this.$route.query.name},methods:{onLoad:function(){this.getChatMsg()},getChatMsg:function(){var t=this;this.api.getChatMsg({token:this.$store.state.userData,uid:this.$route.query.uid,page_size:this.pageInfo.page_size,page_index:this.pageInfo.page_index}).then((function(e){t.loading=!1,0==e.err_code&&(e.data.length||(t.finished=!0),0==t.pageInfo.page_index?(t.data=[],setTimeout((function(){document.getElementsByClassName("vanlist")[0].scrollTo(0,document.getElementsByClassName("list")[0].scrollHeight)}),0)):setTimeout((function(){document.getElementsByClassName("vanlist")[0].scrollTo(0,document.getElementsByClassName("list")[0].scrollHeight-200)}),0),t.data=[].concat(Object(s["a"])(e.data),Object(s["a"])(t.data)),t.pageInfo.page_index++)}))},ImagePreview:function(t){Object(c["a"])([t])},afterRead:function(t){this.addImageByMsg(t.file)},addImageByMsg:function(t){var e=this,a=new FormData;a.append("token",this.$store.state.userData),a.append("myfile",t),this.api.addImageByMsg(a).then((function(t){0==t.err_code&&(e.postParameter.attachment=2,e.addSendMsg(2,t.data.aid))}))},addSendMsg:function(t,e){var a=this;0!=this.postParameter.attachment||this.postParameter.message||Object(o["a"])("发布内容不能为空"),o["a"].loading({message:"加载中...",forbidClick:!0}),this.api.addSendMsg({token:this.$store.state.userData,uid:this.$route.query.uid,message:e,attachment:t}).then((function(t){o["a"].clear(),0==t.err_code?(a.postParameter.message="",a.pageInfo.page_index=0,a.getChatMsg()):Object(o["a"])(t.err_msg)}))},addPost:function(){this.postParameter.attachment=0,this.addSendMsg(0,this.postParameter.message)},animateWidth:function(){window.scrollTo(0,document.body.scrollHeight)}},filters:{timeformat:function(t){return t?Object(r["b"])(1e3*t):""}}},d=l,u=(a("ce76"),a("7ded"),a("2877")),m=Object(u["a"])(d,n,i,!1,null,"5d471f39",null);e["default"]=m.exports},"284c":function(t,e,a){"use strict";var n=a("1316"),i=a.n(n);function s(t){if(i()(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var r=a("a06f"),c=a.n(r),o=a("2dc0"),l=a.n(o);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(t){return s(t)||d(t)||u()}a.d(e,"a",(function(){return m}))},"2dc0":function(t,e,a){t.exports=a("588c")},"471b":function(t,e,a){"use strict";var n=a("194a"),i=a("4fff"),s=a("faaa"),r=a("2616"),c=a("6725"),o=a("6c15"),l=a("0b7b");t.exports=function(t){var e,a,d,u,m,f=i(t),g="function"==typeof this?this:Array,h=arguments.length,b=h>1?arguments[1]:void 0,p=void 0!==b,v=0,A=l(f);if(p&&(b=n(b,h>2?arguments[2]:void 0,2)),void 0==A||g==Array&&r(A))for(e=c(f.length),a=new g(e);e>v;v++)o(a,v,p?b(f[v],v):f[v]);else for(u=A.call(f),m=u.next,a=new g;!(d=m.call(u)).done;v++)o(a,v,p?s(u,b,[d.value,v],!0):d.value);return a.length=v,a}},"484e":function(t,e,a){var n=a("a5eb"),i=a("471b"),s=a("7de7"),r=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:i})},"588c":function(t,e,a){a("5145"),a("3e47b"),t.exports=a("59d7")},"59d7":function(t,e,a){var n=a("8f95"),i=a("0363"),s=a("7463"),r=i("iterator");t.exports=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||s.hasOwnProperty(n(e))}},"5ab9":function(t,e,a){a("e519");var n=a("764b");t.exports=n.Array.isArray},6220:function(t,e,a){var n=a("fc48");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"6c15":function(t,e,a){"use strict";var n=a("7168"),i=a("4180"),s=a("2c6c");t.exports=function(t,e,a){var r=n(e);r in t?i.f(t,r,s(0,a)):t[r]=a}},"74e7":function(t,e,a){t.exports=a("bc59")},"7ded":function(t,e,a){"use strict";var n=a("d00b"),i=a.n(n);i.a},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var r=n(e);r in t?i.f(t,r,s(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),s=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),m=a("b622"),f=m("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",b=!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=u("concat"),v=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},A=!b||!p;n({target:"Array",proto:!0,forced:A},{concat:function(t){var e,a,n,i,s,r=c(this),u=d(r,0),m=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?r:arguments[e],v(s)){if(i=o(s.length),m+i>g)throw TypeError(h);for(a=0;a<i;a++,m++)a in s&&l(u,m,s[a])}else{if(m>=g)throw TypeError(h);l(u,m++,s)}return u.length=m,u}})},"9cd3":function(t,e,a){t.exports=a("5ab9")},"9d1b":function(t,e,a){},a06f:function(t,e,a){t.exports=a("74e7")},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,r=s.toString,c=/^\s*function ([^ (]*)/,o="name";!n||o in s||i(s,o,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},bc59:function(t,e,a){a("3e47b"),a("484e");var n=a("764b");t.exports=n.Array.from},c7b3:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA2CAYAAACIsLrgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0RDYxRDcxRkJCOTExRTlBMjExRkFENDdGMTc5MjhDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY0RDYxRDcyRkJCOTExRTlBMjExRkFENDdGMTc5MjhDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjRENjFENkZGQkI5MTFFOUEyMTFGQUQ0N0YxNzkyOEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjRENjFENzBGQkI5MTFFOUEyMTFGQUQ0N0YxNzkyOEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5tBuGaAAAJJ0lEQVR42sSa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"},ce76:function(t,e,a){"use strict";var n=a("9d1b"),i=a.n(n);i.a},d00b:function(t,e,a){},e519:function(t,e,a){var n=a("a5eb"),i=a("6220");n({target:"Array",stat:!0},{isArray:i})}}]);
//# sourceMappingURL=chunk-21e448ec.7aa67e46.js.map