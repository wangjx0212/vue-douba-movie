(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6e8cfc"],{"0019":function(t,a,e){"use strict";var s=e("0cd8"),i=e.n(s);i.a},"0cd8":function(t,a,e){},"2f0e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"square square-index"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.datalist,(function(a,i){return s("div",{key:i,staticClass:"list"},[1==a.ad?s("div",{staticClass:"ad-box"},[s("img",{attrs:{src:a.data}}),s("span",{},[t._v("广告")])]):t._e(),1!=a.ad?s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"avatar-box",on:{click:function(e){return t.handleToMyPage(a)}}},[s("img",{staticClass:"portrait_img",attrs:{src:a.avatar,alt:""}}),1==a.is_ident_icon?s("img",{staticClass:"isvip",attrs:{src:e("7637")}}):t._e()]),s("div",{staticClass:"header_center",on:{click:function(e){return t.handleToDetails(a.tid)}}},[s("span",{staticClass:"header_center_name"},[t._v(t._s(a.author))]),s("div",{staticClass:"header_center_label"},[s("div",{staticClass:"label_grade"},[1==a.is_carvip?s("img",{staticClass:"label_grade_img",class:{opacity_0:1!=a.is_carvip},attrs:{src:1==a.is_carvip?t.icon_iscarvip:"",alt:""}}):t._e(),s("span",{staticClass:"label_grade_name"},[t._v(t._s(a.level))])]),s("div",{staticClass:"label_heat"},[s("img",{staticClass:"label_heat_img",attrs:{src:t.icon_label_d,alt:""}}),s("span",{staticClass:"label_grade_name"},[t._v(t._s(a.extcredits2)+"°")])])])]),1!=a.is_self?s("van-icon",{staticClass:"more",attrs:{size:"30px",name:"ellipsis"},on:{click:function(e){return t.handleMore(a)}}}):t._e()],1),s("div",{staticClass:"content",on:{click:function(e){return t.handleToDetails(a.tid)}}},[s("div",{class:t.showTotal?"total-introduce":"detailed-introduce"},[s("div",{ref:"desc",refInFor:!0,staticClass:"intro-content",attrs:{title:a.message}},[a.message?s("span",{staticClass:"merchant-desc"},[s("span",{staticClass:"class_name"},[t._v(t._s(a.class_name))]),t._v(t._s(a.message))]):t._e(),t.showExchangeButton?s("div",{staticClass:"unfold",on:{click:t.showTotalIntro}},[s("p",[t._v(t._s(t.exchangeButton?"展开":"收起"))]),s("img",{attrs:{src:t.exchangeButton?t.down:t.up,alt:""}})]):t._e()])])]),2==a.attachment?s("div",{staticClass:"img"},[4==a.image_list.length?s("div",[s("div",{staticStyle:{"font-size":"0"}},[s("img",{staticClass:"img_content",attrs:{src:a.image_list[0]},on:{click:function(e){return t.ImagePreview(a.image_list,0)}}}),s("img",{staticClass:"img_content",attrs:{src:a.image_list[1]},on:{click:function(e){return t.ImagePreview(a.image_list,1)}}})]),s("div",{staticStyle:{"font-size":"0"}},[s("img",{staticClass:"img_content",attrs:{src:a.image_list[2]},on:{click:function(e){return t.ImagePreview(a.image_list,2)}}}),s("img",{staticClass:"img_content",attrs:{src:a.image_list[3]},on:{click:function(e){return t.ImagePreview(a.image_list,3)}}})])]):s("div",{staticClass:"img_content_botton"},t._l(a.image_list,(function(e,i){return s("img",{key:i,staticClass:"img_content",class:{img_content_1:1==a.image_list.length},attrs:{src:e,alt:""},on:{click:function(e){return t.ImagePreview(a.image_list,i)}}})})),0)]):t._e(),1==a.attachment?s("div",{staticClass:"video",class:{video_1:1==a.video_heng_shu,video_2:0==a.video_heng_shu},on:{click:function(e){return t.handlePlay("video"+i,a.tid)}}},[s("video",{ref:"video"+i,refInFor:!0,attrs:{playsinline:"true","x-webkit-airplay":"true","x5-playsinline":"true","webkit-playsinline":"true","x5-video-player-type":"h5",src:a.video,preload:"auto",poster:a.image_list[0]}}),s("img",{staticClass:"icon-play",attrs:{src:e("e2b5")}})]):t._e(),s("div",{staticClass:"usage"},[s("span",{staticClass:"time"},[t._v(t._s(t._f("timeformat")(a.timestamp)))]),s("div",{staticClass:"news"},[s("div",{staticClass:"usage_news",on:{click:function(e){return t.handleToDetails(a.tid)}}},[s("img",{staticClass:"usage_news_img",attrs:{src:e("0af8"),alt:""}}),s("span",[t._v(t._s(a.replies))])]),s("div",{staticClass:"usage_news",on:{click:function(e){return t.addZan(a,1)}}},[1==a.is_zan?s("img",{staticClass:"usage_news_img",attrs:{src:e("5545"),alt:""}}):s("img",{staticClass:"usage_news_img",attrs:{src:e("cf38"),alt:""}}),s("span",[t._v(t._s(a.zan))])]),s("div",{staticClass:"usage_news usage_news_right",on:{click:function(e){return t.addZan(a,2)}}},[2==a.is_zan?s("img",{staticClass:"usage_news_img usage_icon_cai",attrs:{src:e("b6bc"),alt:""}}):s("img",{staticClass:"usage_news_img usage_icon_cai",attrs:{src:e("cd5d"),alt:""}}),s("span",[t._v(t._s(a.cai))])])])]),!a.post||a.post.length?s("div",{staticClass:"information",on:{click:function(e){return t.handleToDetails(a.tid)}}},t._l(a.post,(function(a,e){return s("div",{key:e,staticClass:"information_text"},[s("span",{staticClass:"information_title"},[t._v(t._s(a.author)+"：")]),s("span",{staticClass:"information_content"},[t._v(t._s(a.message))])])})),0):t._e()]):t._e()])})),0),s("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}})],1)},i=[],n=(e("99af"),e("b0c0"),e("acd8"),e("e25e"),e("ac1f"),e("5319"),e("284c")),c=e("28a2"),o=e("d399"),r=e("d383"),l={data:function(){return{down:e("43f4"),up:e("2a0a"),icon_iscarvip:e("da34"),icon_label_d:e("e939"),show:!1,loading:!1,finished:!1,actions:[{name:"私聊"},{name:"关注"}],showTotal:!0,exchangeButton:!1,showExchangeButton:!1,introduce:"",datalist:[],allpage:-1,selectActionItem:null,parameter:{token:this.$store.state.userData,type:0,typeid:0,order:0,page_size:10,page_index:0}}},watch:{introduce:function(){this.$nextTick(function(){var t=parseFloat(this.getRem());if(this.$refs.desc){var a=window.getComputedStyle(this.$refs.desc).height.replace("px","");a>5.25*t?(this.showExchangeButton=!0,this.exchangeButton=!0,this.showTotal=!1):(this.showExchangeButton=!1,this.showTotal=!0)}}.bind(this))}},mounted:function(){this.$store.dispatch("registerTeld"),this.init()},methods:{init:function(){this.squaresItem()},handleToDetails:function(t){var a="".concat(this.$store.state.indexUrl+"square/details?tid="+t+"&"+this.$store.state.appParams),e={url:a,share:"0",keyboard:"1"};if(this.$store.state.userData)window.location.href="teldapp://newWebview?params="+JSON.stringify(e);else{var s=document.createElement("frame");s.src="teldapp://login",document.documentElement.childNodes[0].appendChild(s)}},onLoad:function(){this.datalist.length&&(this.parameter.page_index++,this.squaresItem()),this.parameter.page_index==this.allpage&&(this.finished=!0)},ImagePreview:function(t,a){Object(c["a"])({images:t,startPosition:a,loop:!1})},handlePlay:function(t,a){var e="".concat(this.$store.state.indexUrl+"square/playVideo?tid="+a+"&"+this.$store.state.appParams),s={url:e,share:"0",keyboard:"0"};return window.location.href="teldapp://newWebview?params="+JSON.stringify(s),null},isFollow:function(t){var a=this;this.api.isFollow({uid:t,token:this.$store.state.userData}).then((function(t){if(0==t.err_code){switch(t.data.status){case 0:a.actions[1].name="关注";break;case 1:a.actions[1].name="取消关注";break;case 2:a.actions[1].name="取消关注";break}a.$nextTick((function(){a.show=!0}))}}))},handleToMyPage:function(t){if(!this.$store.state.userData){var a=document.createElement("frame");return a.src="teldapp://login",document.documentElement.childNodes[0].appendChild(a),null}1==t.is_self?this.$router.push({path:"/my/index/square"}):this.$router.push({path:"/my/index/square",query:{uid:t.authorid}})},addZan:function(t,a){if(!this.$store.state.userData){var e=document.createElement("frame");return e.src="teldapp://login",document.documentElement.childNodes[0].appendChild(e),null}var s=t.tid,i=this.$store.state.userData;o["a"].loading({message:"加载中...",forbidClick:!0}),this.api.addZan({token:i,tid:s,type:a}).then((function(e){o["a"].clear(),0==e.err_code?(1==t.is_zan?1==a?(t.zan=parseInt(t.zan)-1,t.is_zan=0):2==a&&(t.is_zan=a,t.zan=parseInt(t.zan)-1,t.cai=parseInt(t.cai)+1):2==t.is_zan?1==a?(t.is_zan=a,t.zan=parseInt(t.zan)+1,t.cai=parseInt(t.cai)-1):2==a&&(t.is_zan=0,t.cai=parseInt(t.cai)-1):(1==a?t.zan=parseInt(t.zan)+1:2==a&&(t.cai=parseInt(t.cai)+1),t.is_zan=a),t.is_zan):Object(o["a"])(e.err_msg)}))},squaresItem:function(){var t=this;this.api.squaresItem(this.parameter).then((function(a){0==a.err_code&&(t.allpage=a.data.total_page,t.datalist=[].concat(Object(n["a"])(t.datalist),Object(n["a"])(a.data.thread))),t.loading=!1}))},showTotalIntro:function(){this.showTotal=!this.showTotal,this.exchangeButton=!this.exchangeButton},getRem:function(){var t=16,a=window.innerWidth,e=a/375*t;return e},handleClickAll:function(){this.dispalyAll=!0},handleClick:function(){this.dispalyAll=!1},addFollow:function(t){this.api.addFollow({followuid:t,token:this.$store.state.userData}).then((function(t){0==t.err_code&&Object(o["a"])(t.data.msg)}))},onSelect:function(t){switch(t.name){case"关注":this.addFollow(this.selectActionItem.authorid);break;case"取消关注":this.addFollow(this.selectActionItem.authorid);break;case"私聊":var a="".concat(this.$store.state.indexUrl+"other/wechat?uid="+this.selectActionItem.authorid+"&name="+this.selectActionItem.author+"&"+this.$store.state.appParams),e={url:a,share:"0",keyboard:"1"};window.location.href="teldapp://newWebview?params="+JSON.stringify(e);break}this.show=!1},onCancel:function(){this.show=!1},handleMore:function(t){if(!this.$store.state.userData){var a=document.createElement("frame");return a.src="teldapp://login",document.documentElement.childNodes[0].appendChild(a),null}this.selectActionItem=t,this.isFollow(t.authorid)}},filters:{timeformat:function(t){return t?Object(r["b"])(1e3*t):""}}},d=l,u=(e("0019"),e("dad8"),e("2877")),h=Object(u["a"])(d,s,i,!1,null,"e0e01b56",null);a["default"]=h.exports},b462:function(t,a,e){},dad8:function(t,a,e){"use strict";var s=e("b462"),i=e.n(s);i.a},e2b5:function(t,a,e){t.exports=e.p+"img/icon_play.3cd1ac49.png"}}]);
//# sourceMappingURL=chunk-7c6e8cfc.baa6b019.js.map