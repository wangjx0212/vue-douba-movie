<template>
  <div id="searchContent" v-if="controlShow.content">
    <loading v-show="controlShow.loading"></loading>
    <div class="searchContent_header ">
      <div class="searchContent_header-goBack" @click="goHome()"></div>
      <div class="searchContent_header-text"><h4>{{title}}</h4></div>
    </div>
  <div class="searchContent-wrapper container" v-if="controlShow.content">

    <ul>
      <li v-for="(movie,index) in searchMovies">
        <div class="movie_item clearfix" @click="saveId(index)">
          <div class="movie_image">
            <em>{{index}}</em>
            <a href="javascript:void(0)">
              <img v-lazy="movie.images.medium" >
            </a>
          </div>
          <div class="movie_info">
            <div class="hd">
              <a href="javascript:void(0)"><span>{{movie.title}}</span>/<span>{{movie.original_title}}</span></a>
            </div>
            <div class="bd">
              <p><span v-for="(director,index) in movie.directors">{{director.name}}</span><!--导演：{{movie.directors[0].name}}--></p>
              <p>主演:<span v-for="(cast,index) in movie.casts">{{cast.name}}/</span></p>
              <p>类型:{{movie.genres}}</p>
              <p><span class="average">{{movie.rating.average}}</span><span>{{movie.collect_count}}人看过</span></p>
            </div>
          </div>
        </div>
      </li>
    </ul>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import loading from './loading.vue'
  export default {
    props: {},
    data() {
      return {
        searchMovies: [],
        current: 0,
        title:'',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },
    created(){
      let searchText=this.$store.state.searchCon;
      let url='https://api.douban.com/v2/movie/search?q='+searchText;
      this.$http.jsonp(url, {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.controlShow.loading = false;
        this.controlShow.content = true;
        this.searchMovies = response.data.subjects;
        this.title = response.data.title;
      }, function (response) {
        // 这里是处理错误的回调
        console.log("error:"+response)
      })
    },
    components:{
      loading
    },
    computed:{
      getId(){
        return this.$store.state.selectId
      }
    },

    methods:{
      saveId(index){
        let num=this.searchMovies[index].id;
        console.log(num);
        this.$store.dispatch('saveId',num);
        this.$store.dispatch('blackUrl',this.$route.path);
        this.$router.replace({ path: '/moviecontent', force: true })
      },
      goHome(){
        this.$router.replace({ path: './', force: true })
      }
    }

  }
</script>

<style>
  .searchContent_header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 5.27rem;
    background: #ffffff;
    border-bottom: 1px solid #dddddd;

  }

  .searchContent_header-goBack{
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url("../assets/goBack.png");
    cursor: pointer;
  }
  .searchContent_header-goBack:hover{
    background: url("../assets/goBackBlue.png");
  }
  .searchContent_header-text{
    position: absolute;
    margin-top: 1.1rem;
    margin-left: 2rem;
    display: inline-block;
    font-weight: bold;
    font-size: 2rem;

  }

  .movie_image{
    width: 45%;
    padding-right: 25px;
    float: left;
  }
  .movie_image em{
    padding: 0 10px;
    font-style: normal;
  }
  .movie_image img{
    width: 63%;
    height: 70%px;
  }
  .movie_info{
    width: 52%;
    float: left;
  }
  .searchContent-wrapper{
    margin-top: 5.83rem;
  }
  .searchContent-wrapper li{
    list-style: none;
    border-top: 1px dashed #ccc;
    padding: 12px 0;
  }
  .searchContent-wrapper li:nth-child(1){
    border-top:none;
  }
  .hd{
    margin-bottom: 10px;
  }
  .bd{
    color:#666
  }
  .bd .average{
    color:#e09015;
    padding:0 5px 0 0;
  }
</style>
