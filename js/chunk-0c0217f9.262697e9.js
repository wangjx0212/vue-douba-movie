(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0217f9"],{"1d39":function(t,a,e){},"42cf":function(t,a,e){t.exports=e.p+"img/pic_weixin.7641e877.png"},4915:function(t,a,e){t.exports=e.p+"img/pic_pengyouquan.57030e6d.png"},5793:function(t,a,e){t.exports=e.p+"img/pic_qq.21a41883.png"},7637:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAD6UlEQVRIib1W32scVRT+7p2d7I/stknW3U2baMlEsDGgAdM8CCpIJVqoL2ko9kkELab+BfbJl4KKID4EzIM/niRUBRUCrdhECn2otNSWNvqQqabRthu2G7LpbrK7M1e+mN2dmZ3ZtFV6noZ7z/m+Off8FH19fWglpmlqAEYBHNiw1QsaYISkiNGkaquiBZhhKX4GMAPglGEYViu8QELTNHUAExVbvatLkb5RsqyzK+vab3eryFXsTZ2kLrG3PYTnOiLWo1FNq9gqq0txAsCkYRiVeyY0TXOobNkndU32T98sik+XCrhU8LWvy1BCx9HeBA7viqmKZS+0aXLcMIxL2xKapjlmK/XVfNGSE1dz2uW11kReeSquY3IwaQ3ENFsK8ZphGN84VaSXTAEnf1guhV785fZ9k1FoQ1tiEIuYvoR8Rnr2fbaIN67mRdlW901WE9oSg1jEJLaLkAnCmPEZ37qWF7Z6cLKaEINYxCT2VhLWPZwISdHPmP0Xz7xCLGISmxybhKwzpv70rZJwxmx/MoLZfWnMjWQwtEPfFjwdljj1TApXnu3GWCZWPycmsclBLno4yjqbWiq4AD56ogNDiTY8HdfxweOd2xK+3ZPAyM4weiMhvNe/w3VHbHKQi4QHWNTeOqs4nna4ow2P6K6EbpLRVKR+tFJ13xKbHOSSbFfsIF6AuTvl+rcA8LID0CuPRUMYaG88++lcsUmHHOSS7I1sV175MVdynYylYk069bu0+25meb1JhxzkkmzEtd7olNn8BgrVxvnzXeHNxPCT8e5o/TS7YeOiTxskB7kCA8OU/jbbeBopBI7sam/SYw91Puf0rbtoVceSIyYZkBCf/+WOxZs9cWjCrfN6j/snvrzZHD9sTRZySc4zjhg/+bVQxrl8Ix67wxrGMw2CrpDAIUf8qLtQ9O+/5CCX5PDkPAt6gg8X3fV53Eggrv/r5jt7EmgPNV7nk8W1IJjNmUkuas9weDIWfjKX28CsI2NZ2F8MJnEwHcGx3nj9/MJqGadzzdmJrTiTg1xCKcXW9vfXt0vpifk7vgZ9MR1nh1Mub5xStRVeupANHNKTA104lIlyG9gtuYNwLTjcHVUcnn5yvVjBsfk8gnLvxPXgjYCYxCYHuWq/PFm11QIndZsUvobfLZdw9Foea47aZPq//8cqPv5z1deGWMQkNjngXDG2BvB5TmoOz6BaYk99JRVBQtPw08o6fg/wjHX72WCnOpiKVqUQI7X9xrXT1FYMTmoOzwedjfRs6slO9Wo6xj487txrXFnACyrwr87sy1hBMW0ltKEtMbxkTR46PH14a6KD9OEtwh7i/2/VB/APU8EZpqcnsBIAAAAASUVORK5CYII="},7997:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.data?s("div",{staticClass:"index"},[s("header",[s("van-uploader",{attrs:{"after-read":t.afterRead}},[s("img",{attrs:{src:t.data.cover_image}})]),s("div",{staticClass:"icon-left-box",on:{click:t.handleGoBack}},[s("van-icon",{staticStyle:{"font-size":"18px"},attrs:{name:"arrow-left",color:"#ffffff"}})],1)],1),s("section",{staticClass:"content"},[s("div",{staticClass:"avatar-box"},[s("img",{attrs:{src:t.data.avatar}}),1==t.data.is_ident_icon?s("img",{staticClass:"isvip",attrs:{src:e("7637")}}):t._e()]),s("div",{staticClass:"info flex justify-space-between"},[s("div",{staticClass:"left"},[s("p",{staticClass:"username",on:{click:t.handleToeditUsername}},[t._v(t._s(t.data.username))]),s("div",{staticClass:"flex flex-none"},[s("p",{staticClass:"level",class:{isCarvip:1==t.data.is_carvip}},[t._v(t._s(t.data.level))]),s("p",{staticClass:"extcredits"},[t._v(t._s(t.data.extcredits2)+"°")])])]),s("div",{staticClass:"right"},[s("div",{staticClass:"edit",on:{click:t.handleToeditUserinfo}},[t._v("编辑资料")]),s("router-link",{staticClass:"friend",attrs:{to:"/my/friendlist",tag:"div"}}),s("div",{staticClass:"share",on:{click:t.handleShare}})],1)]),s("p",{staticClass:"bio",on:{click:t.handleToEditsignature}},[t._v(t._s(t.data.bio?t.data.bio:"填写个人签名更容易获得别人关注哦~"))]),s("p",{staticClass:"label"},[s("span",{staticClass:"gender"},[t._v(t._s(t.data.gender))]),t.data.residecity?s("span",{staticClass:"residecity"},[t._v(t._s(t.data.residecity))]):t._e()]),4==t.tabs&&0!=t.appleType?s("div",{staticClass:"attest",on:{click:t.handleAttest}},[t._v("认证")]):t._e(),s("div",{staticClass:"flex  count"},[s("div",[s("p",{staticClass:"item"},[t._v("获赞")]),s("p",{staticClass:"value",on:{click:function(a){return t.handleToPage(1)}}},[t._v(t._s(t.data.zan))])]),s("div",[s("p",{staticClass:"item"},[t._v("被踩")]),s("p",{staticClass:"value",on:{click:function(a){return t.handleToPage(2)}}},[t._v(t._s(t.data.cai))])]),s("div",[s("p",{staticClass:"item"},[t._v("关注")]),s("p",{staticClass:"value",on:{click:function(a){return t.handleToPage(3)}}},[t._v(t._s(t.data.following))])]),s("div",[s("p",{staticClass:"item"},[t._v("粉丝")]),s("p",{staticClass:"value",on:{click:function(a){return t.handleToPage(4)}}},[t._v(t._s(t.data.follower))])])])]),s("van-divider"),s("div",{staticClass:"tabs"},[s("ul",{staticClass:"flex"},[s("li",{class:{active:3==t.tabs},on:{click:function(a){return t.handleTabs(3)}}},[t._v("广场")]),s("li",{class:{active:2==t.tabs},on:{click:function(a){return t.handleTabs(2)}}},[t._v("问答")]),s("li",{class:{active:1==t.tabs},on:{click:function(a){return t.handleTabs(1)}}},[t._v("投票")]),s("li",{class:{active:4==t.tabs},on:{click:function(a){return t.handleTabs(4)}}},[t._v("更多")])])]),s("div",[s("router-view",{attrs:{uid:t.data.uid,type:t.tabs}})],1),s("Share",{attrs:{shareShow:t.shareShow},on:{handleShareEvent:t.handleShareEvent}})],1):t._e()},i=[],n=e("d399"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"share"},[s("van-popup",{attrs:{position:"bottom","close-on-click-overlay":!1},on:{"click-overlay":t.clickOverlay},model:{value:t.shareShow,callback:function(a){t.shareShow=a},expression:"shareShow"}},[s("ul",{staticClass:"list flex justify-space-between"},[s("li",{on:{click:function(a){return t.toshare("wx")}}},[s("img",{attrs:{src:e("42cf")}}),s("p",[t._v("微信")])]),s("li",{on:{click:function(a){return t.toshare("pyq")}}},[s("img",{attrs:{src:e("4915")}}),s("p",[t._v("朋友圈")])]),s("li",{on:{click:function(a){return t.toshare("qq")}}},[s("img",{attrs:{src:e("5793")}}),s("p",[t._v("QQ")])]),s("li",{on:{click:function(a){return t.toshare("wb")}}},[s("img",{attrs:{src:e("b038")}}),s("p",[t._v("微博")])])]),s("div",{staticClass:"cancel",on:{click:t.handleCacel}},[t._v(" 取消 ")])])],1)},o=[],c={props:["shareShow"],data:function(){return{}},created:function(){},methods:{toshare:function(t){var a="".concat(this.$store.state.indexUrl+"my/index/square?"+this.$store.state.appParams),e={url:a,channel:"wxp,wxf,sina,qqp,qqz",title:"title",desc:"desc",image:"https://cdn.e-power.vip/share_logo.png"};switch(window.location.href="teldapp://share?params="+JSON.stringify(e),t){case"wx":e.channel="wxp";break;case"pyq":e.channel="wxf";break;case"qq":e.channel="qqp";break;case"wb":e.channel="sina";break}this.$emit("handleShareEvent",!1),console.log("teldapp://share?params="+JSON.stringify(e)),window.location.href="teldapp://share?params="+JSON.stringify(e)},clickOverlay:function(){this.$emit("handleShareEvent",!1)},handleCacel:function(){this.$emit("handleShareEvent",!1)}}},l=c,d=(e("a855"),e("2877")),h=Object(d["a"])(l,r,o,!1,null,"2db01fb9",null),p=h.exports,u={components:{Share:p},data:function(){return{shareShow:!1,data:"",appleType:0,tabs:this.$route.query.tabs?this.$route.query.tabs:3}},created:function(){var t=this;document.title="我的",1==this.$route.query.share?(n["a"].loading({message:"加载中...",forbidClick:!0}),setTimeout((function(){t.getUserInfo(),t.getApplyType()}),800)):this.$store.state.userData?(this.getUserInfo(),this.getApplyType()):window.location.href="teldapp://login"},mounted:function(){this.$nextTick((function(){}))},methods:{handleTabs:function(t){this.tabs=t,3==t?this.$router.push({path:"/my/index/square",query:{tabs:t}}):2==t?this.$router.push({path:"/my/index/answers",query:{tabs:t}}):1==t?this.$router.push({path:"/my/index/vote",query:{tabs:t}}):4==t&&this.$router.push({path:"/my/index/more",query:{tabs:t}})},afterRead:function(t){this.addImageOfUserCover(t.file)},handleAttest:function(){switch(this.appleType){case 1:this.$router.push({path:"/my/mycertification"});break}},handleShare:function(){var t="".concat(this.$store.state.indexUrl+"my/index/square?share=1&"+this.$store.state.appParams),a={url:t,channel:"wxp,wxf,sina,qqp,qqz",title:"title",desc:"desc",image:"https://cdn.e-power.vip/share_logo.png"};console.log("teldapp://share?params="+JSON.stringify(a)),window.location.href="teldapp://share?params="+JSON.stringify(a)},handleShareEvent:function(t){this.shareShow=t},getApplyType:function(){var t=this;this.api.getApplyType({token:this.$store.state.userData}).then((function(a){0==a.err_code&&(t.appleType=a.data.type)}))},addImageOfUserCover:function(t){var a=this;n["a"].loading({message:"加载中...",forbidClick:!0});var e=new FormData;e.append("token",this.$store.state.userData),e.append("myfile",t),this.api.addImageOfUserCover(e).then((function(t){n["a"].clear(),0==t.err_code&&a.getUserInfo()})).catch((function(t){Object(n["a"])(t)}))},handleToEditsignature:function(){this.$router.push({path:"/my/editsignature"})},handleToeditUsername:function(){this.$router.push({path:"/my/editusername"})},handleToeditUserinfo:function(){var t="".concat(this.$store.state.indexUrl+"my/edituserinfo?"+this.$store.state.appParams),a={url:t,share:"0",keyboard:"0"};this.$store.state.userData?window.location.href="teldapp://newWebview?params="+JSON.stringify(a):(console.log('window.location.href= "teldapp://login"'),window.location.href="teldapp://login")},handleToPage:function(t){switch(t){case 1:break;case 2:break;case 3:this.$router.push({path:"/my/attention",query:{type:1,user:1}});break;case 4:this.$router.push({path:"/my/attention",query:{type:2,user:1}});break}},handleGoBack:function(){this.$router.push({path:"/"})},getUserInfo:function(){var t=this;n["a"].loading({message:"加载中...",forbidClick:!0}),this.api.getUserInfo({token:this.$store.state.userData,uid:""}).then((function(a){n["a"].clear(),0==a.err_code&&(t.data=a.data)}))}}},f=u,v=(e("dadd"),Object(d["a"])(f,s,i,!1,null,"3d2684a2",null));a["default"]=v.exports},a855:function(t,a,e){"use strict";var s=e("dbfa"),i=e.n(s);i.a},b038:function(t,a,e){t.exports=e.p+"img/pic_weibo.f284fa2b.png"},dadd:function(t,a,e){"use strict";var s=e("1d39"),i=e.n(s);i.a},dbfa:function(t,a,e){}}]);
//# sourceMappingURL=chunk-0c0217f9.262697e9.js.map