<template>

  <div class="theatre_content-Coming">
    <loading v-show="controlShow.loading"></loading>
    <ul>
      <li v-for="(movie,index) in comingMovies" >
        <div class="container cursor"  @click="saveId(index)">
          <div class="row">
            <div class="text-center " ></div>
            <div class="subject_content-item">
              <div class="row">
                <div class="subject_content-pic col-md-3 	.col-sm-5">
                  <img  v-lazy="movie.images.large" >
                </div>
                <div class="subject_content-info col-md-9">
                  <p><h4>{{movie.title}}</h4></p>
                  <p><span class="average">{{movie.rating.average}}分</span><span class="Seen">{{movie.collect_count}}人看过</span></p>
                  <p>导演：{{movie.directors[0].name}}</p>
                  <p>类型:{{movie.genres}}</p>
                  <p>主演:<span v-for="(cast,index) in movie.casts">{{cast.name}}/</span></p>
                  <button type="button" class="btn btn-primary">想看</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>



</template>



<script type="text/ecmascript-6">
  import loading from './loading.vue'
  export default {
    data(){
      return {
        isActive:true,
        comingMovies: [],
        current: 0,
        title:'',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },
    created(){
      var url = 'https://api.douban.com/v2/movie/coming_soon';
//      var handpickCon = this.$store.state.handpickCon;
//      if (handpickCon = '豆瓣Top250') {
//        url = 'https://api.douban.com/v2/movie/top250';
//      }

      this.$http.jsonp(url, {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.controlShow.loading = false;
        this.controlShow.content = true;
        this.comingMovies = response.data.subjects;
        this.title = response.data.title;
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    components:{
      loading
    },
    methods: {
      goBack(){
        let url = this.$store.state.goBlackUrl;
        this.$router.replace({path: '/', force: true})
      },
      saveId(index){
        let num=this.comingMovies[index].id;
        this.$store.dispatch('saveId',num);
        this.$store.dispatch('blackUrl',this.$route.path);
        this.$router.replace({ path: '/moviecontent', force: true });
      }

    }
  }

</script>

<style>

  .cursor{
    cursor: pointer;
  }
  .theatre_content-Coming{
    margin-top: 9.83rem;
  }
  .theatre_content-Coming ul{
    list-style: none;
  }
  .subject_content-pic img{
    width: 100%;
    height: 9.16rem;
  }
  .subject_content-info p{
    font-size: 1.17px;
  }
  .Seen{
    color:#27a;
  }
</style>
