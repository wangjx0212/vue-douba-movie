(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9eb02ee2"],{"0947":function(a,t,e){},"1c49":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"page-index verifyformZj"},[e("van-nav-bar",{attrs:{"left-arrow":"",title:"我的认证"},on:{"click-left":a.onClickLeft}}),e("div",{staticClass:"main"},[a._m(0),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"item item_2 flex  "},[e("p",{staticClass:"label flex-none"},[a._v("姓名")]),1==a.type?e("p",{staticClass:"value"},[a._v(a._s(a.data.realname))]):a._e(),2==a.type?e("van-field",{attrs:{placeholder:"请输入您的姓名","right-icon":"cross"},on:{"click-right-icon":function(t){a.editData.realname=""}},model:{value:a.editData.realname,callback:function(t){a.$set(a.editData,"realname",t)},expression:"editData.realname"}}):a._e()],1),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"item item_3 item_image"},[e("p",{staticClass:"label"},[a._v("名片或工作证"),2==a.type?e("span",[a._v("（横向拍摄识别更精确）")]):a._e()]),1==a.type?e("div",{staticClass:"value"},[a.data.base_url?e("img",{attrs:{src:a.data.base_url}}):a._e()]):a._e(),2==a.type?e("van-uploader",{attrs:{"after-read":a.afterRead}},[e("div",{staticClass:"image-box"},[a.editData.base_url?e("img",{attrs:{src:a.editData.base_url}}):a._e()])]):a._e()],1),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"item item_2  flex"},[e("p",{staticClass:"label"},[a._v("公众ID号")]),1==a.type?e("p",{staticClass:"value"},[a._v(a._s(a.data.field4))]):a._e(),2==a.type?e("van-field",{attrs:{placeholder:"请输入您的公众ID号","right-icon":"cross"},on:{"click-right-icon":function(t){a.editData.field4=""}},model:{value:a.editData.field4,callback:function(t){a.$set(a.editData,"field4",t)},expression:"editData.field4"}}):a._e()],1),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"item item_2  flex "},[e("p",{staticClass:"label flex-none"},[a._v("联系电话")]),1==a.type?e("p",{staticClass:"value"},[a._v(a._s(a.data.mobile))]):a._e(),2==a.type?e("van-field",{attrs:{placeholder:"请输入您的联系电话","right-icon":"cross"},on:{"click-right-icon":function(t){a.editData.mobile=""}},model:{value:a.editData.mobile,callback:function(t){a.$set(a.editData,"mobile",t)},expression:"editData.mobile"}}):a._e()],1),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"item item_2  "},[e("p",{staticClass:"label"},[a._v("在职公司名称")]),1==a.type?e("p",{staticClass:"value"},[a._v(a._s(a.data.company))]):a._e(),2==a.type?e("van-field",{attrs:{placeholder:"请输入您的在职公司名称","right-icon":"cross"},on:{"click-right-icon":function(t){a.editData.company=""}},model:{value:a.editData.company,callback:function(t){a.$set(a.editData,"company",t)},expression:"editData.company"}}):a._e()],1),e("van-divider",{staticClass:"line"}),e("div",{staticClass:"btn-box flex"},[e("div",{staticClass:"btn-action",on:{click:a.handleAction}},[e("span",[a._v(a._s(1==a.type?"修改资料":"取消修改"))])]),e("div",{staticClass:"btn-status"},[1==a.type?e("div",{},[0==a.data.flag?e("span",[a._v("审核中...")]):a._e(),1==a.data.flag?e("span",[a._v("认证失败")]):a._e(),2==a.data.flag?e("span",[a._v("已认证")]):a._e()]):a._e(),2==a.type?e("div",{on:{click:function(t){return a.checkForm()}}},[e("span",[a._v("重新审核")])]):a._e()])])],1)],1)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"item item_1"},[e("p",{staticClass:"label label_1"},[a._v("认证类型")]),e("ul",{staticClass:"verif_type"},[e("li",{staticClass:"active"},[a._v("媒体认证")])])])}],l=e("d399"),n=e("2f14"),d={props:["itemdata"],data:function(){return{type:1,data:{vid:"",field4:"",mobile:"",realname:"",company:"",job_image:"",flag:0,base_url:"",token:this.$store.state.userData},editData:null}},created:function(){this.getEinfoVerify()},mounted:function(){},beforeRouteEnter:function(a,t,e){e((function(a){a.init()}))},methods:{init:function(){"edit"==this.$route.query.type&&(this.data.vid=this.itemdata.vid,this.data.mobile=this.itemdata.mobile,this.data.realname=this.itemdata.realname,this.data.myfile=this.itemdata.myfile,this.data.base64=this.itemdata.real_myfile)},handleRemoveValue:function(a){this.editData[a]=""},afterRead:function(a){var t=this,e=new FormData;e.append("token",this.$store.state.userData),e.append("myfile",a.file),l["a"].loading({message:"加载中...",forbidClick:!0}),this.api.addVerifyImage(e).then((function(a){l["a"].clear(),0==a.err_code?(t.editData.base_url=a.data.real_file_url,t.editData.job_image=a.data.file_url):Object(l["a"])(a.err_msg)}))},handleAction:function(){if(2==this.data.flag)return Object(l["a"])("认证通过的资料不可修改!");1==this.type?(this.fillForm(),this.type=2):2==this.type&&(this.type=1)},onClickLeft:function(){this.$router.go(-1)},fillForm:function(){this.editData=Object(n["a"])(this.data)},checkForm:function(){return this.editData.realname?this.editData.base_url?this.editData.mobile?this.editData.field4?this.editData.company?void this.hadnleSubmit():Object(l["a"])("请输入您的专家职位"):Object(l["a"])("请输入您的公众ID号"):Object(l["a"])("请输入您的联系电话"):Object(l["a"])("请上传名片或者工作证"):Object(l["a"])("请输入您的姓名")},getEinfoVerify:function(){var a=this;this.api.getEinfoVerify({token:this.$store.state.userData}).then((function(t){if(0==t.err_code&&"[]"!=JSON.stringify(t.data)){var e=t.data,i=e.company,s=e.field4,l=e.realname,n=e.job_image,d=e.mobile,c=e.vid,r=e.flag,o=e.base_url;a.data.vid=c,a.data.field4=s,a.data.company=i,a.data.mobile=d,a.data.realname=l,a.data.job_image=n,a.data.flag=r,a.data.base_url=o}}))},hadnleSubmit:function(){var a=this;l["a"].loading({message:"加载中...",forbidClick:!0});var t=new FormData;for(var e in this.editData.wechatnum=this.editData.field4,this.editData)"flag"!=e&&"base_url"!=e&&"field4"!=e&&t.append(e,this.editData[e]);this.api.addEinfoVerify(t).then((function(t){l["a"].clear(),0==t.err_code?(Object(l["a"])("修改成功"),a.getEinfoVerify(),a.type=1):Object(l["a"])(t.err_msg)}))}}},c=d,r=(e("794b"),e("9924"),e("2877")),o=Object(r["a"])(c,i,s,!1,null,"88744476",null);t["default"]=o.exports},6640:function(a,t,e){},"794b":function(a,t,e){"use strict";var i=e("6640"),s=e.n(i);s.a},9924:function(a,t,e){"use strict";var i=e("0947"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-9eb02ee2.d31618ab.js.map