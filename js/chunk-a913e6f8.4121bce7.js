(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a913e6f8"],{"98b7":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add"},[i("van-nav-bar",{attrs:{"left-arrow":"","right-text":"发布"},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}}),i("section",{staticClass:"main"},[i("div",{staticClass:"message-box"},[i("van-cell-group",{attrs:{border:!1}},[i("van-field",{attrs:{type:"textarea",placeholder:"分享这一刻"},model:{value:e.message,callback:function(t){e.message="string"===typeof t?t.trim():t},expression:"message"}})],1)],1),i("div",{staticClass:"uploader-box"},["image"==e.type?i("van-uploader",{attrs:{"after-read":e.afterRead,"before-read":e.beforeRead},on:{delete:e.handledelete},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}}):e._e(),i("van-divider"),e.read_file_url?i("div",{staticClass:"video-box flex align-items-center",class:{video_1:1==e.video_heng_shu,video_2:0==e.video_heng_shu}},[i("div",{staticClass:"vide-box-content",on:{click:function(t){return e.handlePlay("video")}}},[i("video",{ref:"video",attrs:{src:e.read_file_url,preload:"auto",poster:e.video_cover}}),i("img",{staticClass:"icon-play",attrs:{src:a("e2b5")}})]),i("div",{staticClass:"remove-box",on:{click:function(t){return e.handleVideo()}}},[i("van-icon",{attrs:{name:"cross"}})],1)]):e._e(),"video"!=e.type||e.read_file_url?e._e():i("van-uploader",{attrs:{"after-read":e.afterRead,"before-read":e.beforeRead,accept:"video/*"},on:{delete:e.handledelete}}),i("van-divider")],1)])],1)},n=[],r=(a("b0f7"),a("bdf4"),a("7fae"),a("384e"),a("6076"),a("63ff"),a("f8f9")),s=(a("d383"),a("98e6")),o={data:function(){return{type:this.$route.query.type,video_heng_shu:"",read_file_url:"",video_cover:"",message:"",typeid:0,fileList:[],address:"",aid_list:[],longitude:"",latitude:"",attachment:"video"==this.$route.query.type?1:2}},created:function(){},methods:{getParameter:function(){return this.message||this.fileList.length||"image"!=this.type||Object(s["a"])("发布内容不能为空"),this.message||this.read_file_url||"video"!=this.type||Object(s["a"])("发布内容不能为空"),{token:this.$store.state.userData,message:this.message,typeid:this.typeid,attachment:this.attachment,address:this.address,latitude:this.latitude,longitude:this.longitude,aid_list:this.aid_list.join(",")}},handlePlay:function(e){var t=this.$refs[e];t.play(),t.webkitRequestFullScreen(),t.addEventListener("pause",(function(){t.controls=!1}))},addSquare:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s["a"].loading({message:"加载中...",forbidClick:!0}),e.next=3,this.postImg();case 3:t=this.getParameter(),this.api.addSquare(t).then((function(e){s["a"].clear(),0==e.err_code?a.$router.go(-1):Object(s["a"])(e.err_msg)}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleVideo:function(){this.read_file_url="",this.aid_list=[]},handledelete:function(e){},postVideo:function(e){var t=this;return new Promise((function(a,i){s["a"].loading({message:"加载中...",forbidClick:!0});var n=new FormData;n.append("token",t.$store.state.userData),n.append("myfile",e),t.api.addVideo(n).then((function(e){if(s["a"].clear(),0==e.err_code){var a=e.data,i=a.read_file_url,n=a.video_cover,r=a.video_heng_shu;t.aid_list.push(e.data.aid),t.read_file_url=i,t.video_cover=n,t.video_heng_shu=r}})).catch((function(e){Object(s["a"])(e)}))}))},postImg:function(){var e=this;return new Promise((function(t,a){var i=e.fileList.map((function(t){var a=new FormData;return a.append("token",e.$store.state.userData),a.append("myfile",t.file),a.append("type","forum"),e.api.addImage(a).then((function(t){0==t.err_code&&e.aid_list.push(t.data.aid)}))}));Promise.all(i).then((function(){t()})).catch((function(e){}))}))},afterRead:function(e){this.postVideo(e.file)},beforeRead:function(e){switch(this.type){case"image":if(9==this.fileList.length)return Object(s["a"])("只能上传9长图片"),!1;break;case"video":break}return!0},onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.addSquare()}}},d=o,c=(a("f6e3"),a("6691")),l=Object(c["a"])(d,i,n,!1,null,"3736018b",null);t["default"]=l.exports},e2b5:function(e,t,a){e.exports=a.p+"img/icon_play.6d0d7b7f.png"},ecf0:function(e,t,a){},f6e3:function(e,t,a){"use strict";var i=a("ecf0"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-a913e6f8.4121bce7.js.map