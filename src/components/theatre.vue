<template>
  <div id="theatre">

    <div class="theatre_header">
      <div class="theatre_header-goBack" @click="goBack()"></div>
      <div class="theatre_header-text">院线电影</div>
    </div>
    <div class="theatre_tabs">
    <!-- <div class="theatre_tabs-hot cursor" :class="{'actice':isActiveHot} ">正在热映</div>-->
      <router-link tag="div" to="/theatre/theatreHot" :class="{'actice':this.$route.path == '/theatre/theatreHot'} " class="theatre_tabs-hot cursor" activeClass="active"  >正在热映</router-link>
      <!--<router-link tag="li" to="/" class="theatre_tabs-hot" activeClass="active"  ><a>即将上映</a></router-link>-->
      <router-link tag="div" to="/theatre/theatreComing" :class="{'actice':this.$route.path == '/theatre/theatreComing'} " class="theatre_tabs-coming cursor" activeClass="active"  >即将上映</router-link>
    </div>
    <router-view></router-view>
  </div>


</template>



<script type="text/ecmascript-6">

  export default {
    data(){
      return {
        isActiveHot:true,
        isActiveComing:false,
        hotMovies: [],
        current: 0,
        title:'',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },
    created:function() {

    },

    methods: {
      goBack(){
        let url = this.$store.state.goBlackUrl;
        this.$router.replace({path: '/', force: true})
      }

    }
  }

</script>

<style>
  .cursor{
    cursor: pointer;
  }
  .actice{
    padding-bottom:17px !important;
    color: #27a !important;
    border-bottom: 2px solid #27a !important;
  }
  .theatre_header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background: #fff;
    height: 5.27rem;

  }

  .theatre_header-goBack{
    margin-top: 1.0rem;
    margin-left: 1.0rem;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url("../assets/goBack.png");
    cursor: pointer;
  }
  .theatre_header-goBack:hover{
    background: url("../assets/goBackBlue.png");
  }
  .theatre_header-text{
    position: absolute;
    margin-top: 1.4rem;
    margin-left: 2rem;
    display: inline-block;
    font-weight: bold;
    font-size: 1.8rem;
  }
  .theatre_tabs{
    margin-top: 4.7rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    background: #fff;
    border-top: 1px solid #ddd;
  }
  .theatre_tabs-hot{
    float: left;
    padding: 1.5rem 0;
    width: 50%;
    color: #888;
    font-weight: 600;
    font-size: 1.63rem;
    border-bottom: 1px solid #ddd;
  }
  .theatre_tabs-coming{
    float: left;
    padding: 1.5rem 0;
    width: 50%;
    color: #888;
    font-weight: 600;
    font-size: 1.63rem;
    border-bottom: 1px solid #ddd;
  }
  .theatre_content{
    margin-top: 164px;
  }
  .theatre_content ul{
    list-style: none;
  }
</style>
