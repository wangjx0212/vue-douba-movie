<template>
  <div id="handpick">
    <div class="panel panel-default">
      <div class="panel-body handpick-body">
        <p class="title">精选榜单</p>
        <ul class="clearfix handpick_ul">
          <li @click="saveHandpickCon('豆瓣Top250')"><p>豆瓣Top250</p></li>
          <li @click="saveHandpickCon('本周口碑榜')"><p>本周口碑榜</p></li>
          <li @click="saveHandpickCon('新片榜')"><p>新片榜</p></li>
          <li @click="saveHandpickCon('票房榜')"><p>票房榜</p></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    methods:{
      saveHandpickCon(dex){
            this.$store.dispatch('saveHandpickCon',dex);
            this.$store.dispatch('blackUrl',this.$route.path);
            this.$router.replace({ path: '/subject', force: true })
      }
    },
    created(){

    }
  }

</script>
<style>
  #handpick ul{
    padding-left: 8px;
    position: relative;
    left: 10px;
    list-style: none;
  }
  #handpick ul li{
    float: left;
    width: 40%;
    height: 10rem;
    border-radius:1.7rem;
    display: block;
    cursor: pointer;
    background-color: #337ab7;
    color: #ffffff;
    font-size: 1.6rem;
    margin: 10px;
    text-align: center;
  }
  #handpick ul li p{
    margin-top: 1.6rem;

  }
  .panel-body{
    overflow: hidden;
  }

  .handpick-body{
    font-weight: 600;
    font-size: 1.56rem;
    margin-bottom: 15px;
  }
/*  #handpick ul li:nth-child(1){
    margin-bottom: 1.66rem;
    width: 42.5%;
    height: 13.33rem;
    background: url("../assets/top250.png") no-repeat ;
    background-size: cover;
  }
  #handpick ul li:nth-child(2){
    margin-left: 2px;
    margin-bottom: 1.66rem;
    width: 42.5%;
    height: 13.33rem;
    background: url("../assets/praiseWeekly.png") no-repeat;
    background-size: cover;
  }
  #handpick ul li:nth-child(3){
    margin-left: 2px;
    width: 42.5%;
    height: 13.33rem;
    background: url("../assets/newMovies.png") no-repeat;
    background-size: cover;
  }
  #handpick ul li:nth-child(4){
    width: 42.5%;
    height: 13.33rem;
    background: url("../assets/usBox.png") no-repeat;
    background-size: cover;
  }*/
</style>
