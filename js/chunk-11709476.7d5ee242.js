(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11709476"],{"059b":function(t,a,s){"use strict";var i=s("0ff6"),e=s.n(i);e.a},"0ff6":function(t,a,s){},"197a":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"square"},[i("van-nav-bar",{attrs:{"left-arrow":"",title:"E区专题"},on:{"click-left":t.onClickLeft}}),i("div",{staticClass:"bg"},[i("img",{staticClass:"bg-image",attrs:{src:t.pic}}),i("div",{staticClass:"other"},[i("div",{staticClass:"views"},[t._v(t._s(t.views))]),i("div",{staticClass:"replies"},[t._v(t._s(t.replies))])])]),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.datalist,(function(a,e){return i("div",{key:e,staticClass:"list"},[i("div",{staticClass:"header",on:{click:function(s){return t.handleToDetails(a.tid)}}},[i("div",{staticClass:"avatar-box"},[i("img",{staticClass:"portrait_img",attrs:{src:a.avatar,alt:""}}),1==a.is_ident_icon?i("img",{staticClass:"isvip",attrs:{src:s("7637")}}):t._e()]),i("div",{staticClass:"header_center"},[i("span",{staticClass:"header_center_name"},[t._v(t._s(a.author))]),i("div",{staticClass:"header_center_label"},[i("div",{staticClass:"label_grade"},[i("img",{staticClass:"label_grade_img",class:{opacity_0:1!=a.is_carvip},attrs:{src:1==a.is_carvip?t.icon_iscarvip:"",alt:""}}),i("span",{staticClass:"label_grade_name"},[t._v(t._s(a.level))])]),i("div",{staticClass:"label_heat"},[i("img",{staticClass:"label_heat_img",attrs:{src:t.icon_label_d,alt:""}}),i("span",{staticClass:"label_grade_name"},[t._v(t._s(a.extcredits2)+"°")])])])]),i("van-icon",{staticClass:"more",attrs:{size:"30px",name:"ellipsis"},on:{click:function(a){return t.handleMore()}}})],1),i("div",{staticClass:"content"},[i("div",{class:t.showTotal?"total-introduce":"detailed-introduce"},[i("div",{ref:"desc",refInFor:!0,staticClass:"intro-content",attrs:{title:a.subject}},[a.subject?i("span",{staticClass:"merchant-desc"},[i("span",{staticClass:"name"},[t._v(t._s(t.name))]),t._v(t._s(a.subject))]):t._e(),t.showExchangeButton?i("div",{staticClass:"unfold",on:{click:t.showTotalIntro}},[i("p",[t._v(t._s(t.exchangeButton?"展开":"收起"))]),i("img",{attrs:{src:t.exchangeButton?t.down:t.up,alt:""}})]):t._e()])])]),2==a.attachment?i("div",{staticClass:"img"},[4==a.image_list.length?i("div",[i("div",[i("img",{staticClass:"img_content",attrs:{src:a.image_list[0]},on:{click:function(s){return t.ImagePreview(a.image_list,0)}}}),i("img",{staticClass:"img_content",attrs:{src:a.image_list[1]},on:{click:function(s){return t.ImagePreview(a.image_list,1)}}})]),i("div",[i("img",{staticClass:"img_content",attrs:{src:a.image_list[2]},on:{click:function(s){return t.ImagePreview(a.image_list,2)}}}),i("img",{staticClass:"img_content",attrs:{src:a.image_list[3]},on:{click:function(s){return t.ImagePreview(a.image_list,3)}}})])]):i("div",t._l(a.image_list,(function(s,e){return i("img",{key:e,staticClass:"img_content",attrs:{src:s,alt:""},on:{click:function(s){return t.ImagePreview(a.image_list,e)}}})})),0)]):t._e(),1==a.attachment?i("div",{staticClass:"video",class:{video_1:1==a.video_heng_shu,video_2:0==a.video_heng_shu}},[i("video",{attrs:{src:a.video,poster:a.image_list[0],"x5-video-player-type":"h5","x5-video-orientation":"landscape|portrait",controls:"controls"}})]):t._e(),i("div",{staticClass:"usage"},[i("span",{staticClass:"time"},[t._v(t._s(t._f("timeformat")(a.timestamp)))]),i("div",{staticClass:"news"},[i("div",{staticClass:"usage_news",on:{click:function(s){return t.handleToDetails(a.tid)}}},[i("img",{staticClass:"usage_news_img",attrs:{src:s("0af8"),alt:""}}),i("span",[t._v(t._s(a.post?a.post.length:0))])]),i("div",{staticClass:"usage_news",on:{click:function(s){return t.addZan(a,1)}}},[1==a.is_zan?i("img",{staticClass:"usage_news_img",attrs:{src:s("5545"),alt:""}}):i("img",{staticClass:"usage_news_img",attrs:{src:s("cf38"),alt:""}}),i("span",[t._v(t._s(a.zan))])]),i("div",{staticClass:"usage_news usage_news_right",on:{click:function(s){return t.addZan(a,2)}}},[2==a.is_zan?i("img",{staticClass:"usage_news_img",attrs:{src:s("b6bc"),alt:""}}):i("img",{staticClass:"usage_news_img",attrs:{src:s("cd5d"),alt:""}}),i("span",[t._v(t._s(a.cai))])])])]),!a.post||a.post.length?i("div",{staticClass:"information",on:{click:function(s){return t.handleToDetails(a.tid)}}},t._l(a.post,(function(a,s){return i("div",{key:s,staticClass:"information_text"},[i("span",{staticClass:"information_title"},[t._v(t._s(a.author)+"：")]),i("span",{staticClass:"information_content"},[t._v(t._s(a.message))])])})),0):t._e()])})),0),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}})],1)},e=[],n=(s("99af"),s("b0c0"),s("acd8"),s("e25e"),s("ac1f"),s("5319"),s("284c")),c=s("28a2"),o=s("d399"),r=s("d383"),l={props:["itemdata"],data:function(){return{pic:this.$route.query.pic,views:this.$route.query.views,replies:this.$route.query.replies,name:this.$route.query.name,down:s("43f4"),up:s("2a0a"),icon_iscarvip:s("da34"),icon_label_d:s("e939"),show:!1,loading:!1,finished:!1,actions:[{name:"私聊"},{name:"关注"}],showTotal:!0,exchangeButton:!1,showExchangeButton:!1,introduce:"",datalist:[],allpage:-1,parameter:{token:this.$store.state.userData,type:0,typeid:this.$route.query.typeid,order:0,page_size:10,page_index:0}}},watch:{introduce:function(){this.$nextTick(function(){var t=parseFloat(this.getRem());if(this.$refs.desc){var a=window.getComputedStyle(this.$refs.desc).height.replace("px","");a>5.25*t?(this.showExchangeButton=!0,this.exchangeButton=!0,this.showTotal=!1):(this.showExchangeButton=!1,this.showTotal=!0)}}.bind(this))}},mounted:function(){this.squaresItem()},methods:{handleToDetails:function(t){this.$router.push({path:"/square/details",query:{tid:t,name:this.name}})},onClickLeft:function(){this.$router.go(-1)},onLoad:function(){this.datalist.length&&(this.parameter.page_index++,this.squaresItem()),this.parameter.page_index==this.allpage&&(this.finished=!0)},ImagePreview:function(t,a){Object(c["a"])({images:t,startPosition:a})},addZan:function(t,a){var s=t.tid,i=this.$store.state.userData;o["a"].loading({message:"加载中...",forbidClick:!0}),this.api.addZan({token:i,tid:s,type:a}).then((function(s){o["a"].clear(),0==s.err_code?(1==t.is_zan?1==a?(t.zan=parseInt(t.zan)-1,t.is_zan=0):2==a&&(t.is_zan=a,t.zan=parseInt(t.zan)-1,t.cai=parseInt(t.cai)+1):2==t.is_zan?1==a?(t.is_zan=a,t.zan=parseInt(t.zan)+1,t.cai=parseInt(t.cai)-1):2==a&&(t.is_zan=0,t.cai=parseInt(t.cai)-1):(1==a?t.zan=parseInt(t.zan)+1:2==a&&(t.cai=parseInt(t.cai)+1),t.is_zan=a),t.is_zan):Object(o["a"])(s.err_msg)}))},squaresItem:function(){var t=this;this.api.squaresItem(this.parameter).then((function(a){0==a.err_code&&(t.allpage=a.data.total_page,t.datalist=[].concat(Object(n["a"])(t.datalist),Object(n["a"])(a.data.thread))),t.loading=!1}))},showTotalIntro:function(){this.showTotal=!this.showTotal,this.exchangeButton=!this.exchangeButton},getRem:function(){var t=16,a=window.innerWidth,s=a/375*t;return s},handleClickAll:function(){this.dispalyAll=!0},handleClick:function(){this.dispalyAll=!1},onSelect:function(t){this.show=!1},onCancel:function(){this.show=!1},handleMore:function(){this.show=!0}},filters:{timeformat:function(t){return t?Object(r["b"])(1e3*t):""}}},d=l,u=(s("059b"),s("2877")),_=Object(u["a"])(d,i,e,!1,null,"0c4e7dac",null);a["default"]=_.exports},b0c0:function(t,a,s){var i=s("83ab"),e=s("9bf2").f,n=Function.prototype,c=n.toString,o=/^\s*function ([^ (]*)/,r="name";!i||r in n||e(n,r,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-11709476.7d5ee242.js.map