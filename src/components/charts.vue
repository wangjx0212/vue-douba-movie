<template>
  <div class="ing_wrapper container">
    <div class="moviecontent-wrapper" v-if="controlShow.content">
      <!--<h3>{{title}} </h3>-->
          <ul>
            <li v-for="(movie,index) in chartsMovies">
              <div class="movie_item clearfix" @click="saveId(index)">
                <div class="row">
                  <div class="movie_image col-md-2 	col-xs-12">
                    <em>{{index}}</em>
                    <a href="javascript:void(0)">
                      <img :src="movie.images.medium">
                    </a>
                  </div>
                  <div class="movie_info col-md-10 col-xs-12">
                    <div class="hd">
                      <a href="javascript:void(0)"><span>{{movie.title}}</span>/<span>{{movie.original_title}}</span></a>
                    </div>
                    <div class="bd">
                        <p>导演：{{movie.directors[0].name}}</p>
                        <p>主演:<span v-for="(cast,index) in movie.casts">{{cast.name}}/</span></p>
                        <p>类型:{{movie.genres}}</p>
                        <p><span class="average">{{movie.rating.average}}</span><span>{{movie.collect_count}}人看过</span></p>
                    </div>
                  </div>
                </div>
              </div>

            </li>
          </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    props: {},
    data() {
      return {
        chartsMovies: [],
        current: 0,
        title:'',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },
    created(){
      this.$http.jsonp('https://api.douban.com/v2/movie/top250', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调

        this.controlShow.content = true;
        this.chartsMovies = response.data.subjects;
        this.title = response.data.title;
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    components:{

    },
    computed:{
      getId(){
        return this.$store.state.selectId
      }
    },

    methods:{
      saveId(index){
        let num=this.chartsMovies[index].id;
        this.$store.dispatch('saveId',num);
        this.$store.dispatch('blackUrl',this.$route.path);
        this.$router.replace({ path: '/moviecontent', force: true })
      }
    }

  }
</script>

<style>
  .ing_wrapper{
    margin: 0 auto;
  }

  .movie_image{
  padding-right: 25px;
    float: left;
  }
  .movie_image em{
    padding: 0 10px;
    font-style: normal;
  }
  .movie_info{
    float: left;
  }
  .moviecontent-wrapper li{
    list-style: none;
    border-top: 1px dashed #ccc;
    padding: 12px 0;
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
