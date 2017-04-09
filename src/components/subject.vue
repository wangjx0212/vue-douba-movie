<template>
  <div id="subject">
    <loading v-show="controlShow.loading"></loading>
    <div class="subject_header">
      <div class="subject_header-goBack" @click="goBack()"></div>
      <div class="subject_header-text">{{getHandpickCon}}</div>
    </div>
    <div class="subject_content">
      <ul>
        <li v-for="(movie,index) in chartsMovies" >
          <div class="container cursor"  @click="saveId(index)">
            <div class="row">
              <div class="text-center subject_content-num" ><span>___</span>{{index+1}}<span>___</span></div>
              <div class="subject_content-item">
                <div class="row">
                  <div class="subject_content-pic col-md-3 	.col-sm-5">
                    <img  v-lazy="movie.images.medium" >
                  </div>
                  <div class="subject_content-info col-md-9">
                    <p><h2>{{movie.title}}</h2></p>
                    <p><span class="average">{{movie.rating.average}}分</span><span>{{movie.collect_count}}人看过</span></p>
                    <p>导演：{{movie.directors[0].name}}</p>
                    <p>类型:{{movie.genres}}</p>
                    <p>主演:<span v-for="(cast,index) in movie.casts">{{cast.name}}/</span></p>
                  </div>
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
  import loading from './loading.vue'
  export default {
    props: {},
    data() {
      return {
        chartsMovies: [],
        current: 0,
        title: '',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },

    created(){
      var url = '';
      var handpickCon = this.$store.state.handpickCon;
      if (handpickCon = '豆瓣Top250') {
        url = 'https://api.douban.com/v2/movie/top250';
      }
      this.$http.jsonp(url, {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.controlShow.loading = false;
        this.controlShow.content = true;
        this.chartsMovies = response.data.subjects;
        this.title = response.data.title;
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    components:{
      loading
    },
    computed: {
      getHandpickCon(){
        return this.$store.state.handpickCon;
      }
    },
    methods: {
      goBack(){
        let url = this.$store.state.goBlackUrl;
        this.$router.replace({path: '/', force: true})
      },
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
  .cursor{
    cursor: pointer;
  }
  .subject_header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 8000;
    background: #fff;
    height: 5.27rem;
    border-bottom: 1px solid #ddd;
  }

.subject_header-goBack{
  margin-top: 1.0rem;
  margin-left: 1.0rem;
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url("../assets/goBack.png");
  cursor: pointer;
}
.subject_header-goBack:hover{
  background: url("../assets/goBackBlue.png");
}
.subject_header-text{
  position: absolute;
  margin-top: 1.4rem;
  margin-left: 2rem;
  display: inline-block;
  font-weight: bold;
  font-size: 1.8rem;

}
  .subject_content{
    margin-top: 1rem;
  }

  .subject_content ul{
    list-style: none;
  }
  .subject_content-item{
    padding-bottom: 3rem;
    border-bottom:1px solid #ddd;
  }
  .subject_content-num{
    margin-top: 5rem;
    margin-bottom: 3rem;
    color: #a94442;
  }
  .subject_content-num span{
    color: #ddd;
    margin: 0 1rem;
  }
  .subject_content-pic{
    width: 30%;
    padding-top: 2.08rem;
    padding-left: 2.67rem;
    float: left;
  }
  .subject_content-pic img{
    width: 100%;
    height: 9.16rem;
  }
  .subject_content-info{
    width: 70%;
    padding-top: 0.67rem;
    float: left;
  }
  .subject_content-info p{
    font-size: 1.17rem;
  }

  .subject_content-info .average{
    color:#e09015;
    padding:0 0.42rem 0 0;
  }

</style>
