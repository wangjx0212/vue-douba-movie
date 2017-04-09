<template>
  <div id="app">
      <nav class="navbar navbar-default" role="navigation" v-if="$route.path == '/'">
        <div class="clearfix">
          <div class="navbar-header navbar_logo">
           <!-- <img src="./assets/movie.jpg">-->
            <router-link to="/" class="navbar-brand navbar_logo-text" >豆瓣电影</router-link>
          </div>
          <div class="navbar_search clearfix">
            <form class=" " role="search">
              <div class="form-group navbar-right">
                <input type="text" class="form-control search" placeholder="电影、影人、电视剧" v-model="searchCon">
                <button type="submit" class="btn btn-default" @click="submitSearch()">提交</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    <div class="">

      <Hot v-if="$route.path == '/'"></Hot>
      <Coming v-if="$route.path == '/'"></Coming>
      <Handpick v-if="$route.path == '/'"></Handpick>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Handpick from './components/handpick'
  import Hot from './components/hot'
  import Coming from './components/coming'
export default {
  name: 'app',
  data(){
    return{
      searchCon:'',
      pathUrl:this.$route.path,
    }
  },
  components: {
    Handpick,
    Hot,
    Coming
  },
  methods:{
    submitSearch(){
      this.$store.dispatch('saveSearchCon',this.searchCon);
      this.$router.replace({ path: '/searchcontent', force: true })
    }
  }
}
</script>

<style>
  html{
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .tabs{
    margin: 0 auto 3.0rem;
  }
  .navbar_logo{
    float: left;
  }
/*  .navbar_logo img{
    width: 16.6rem;
    height: 8.3rem;
    float: left;
  }*/
  .navbar_logo-text{
    height: 5rem;
    line-height:4rem;
    font-size: 1.9rem;
    overflow:hidden;
    font-weight: 600;
    color: #27a !important;
  }
  .navbar_search{
    float: right;
    margin-top: 0.9rem;
    margin-right: 0.3rem;
    width: 65%;
  }
  .navbar_search input{
    display: inline-block;
    margin-top: 0.8rem;
  }
  .form-control{
    width: 70%;
  }
  .navbar-right{
    float: right;
  }
  .average{
    color:#e09015 ;
  }

</style>
