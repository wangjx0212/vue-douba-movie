<template>
  <div id="movieContent">
    <loading v-show="controlShow.loading"></loading>
    <div class="movieContent_header">
      <div class="movieContent_header-goBack" @click="goBack()"></div>
      <div class="movieContent_header-text"></div>
    </div>
    <div class="moviecontent-wrapper" v-if="controlShow.content">
      <div class="container">
            <h4>{{title}}/{{Movies.original_title}}<span>({{Movies.year}})</span></h4>
            <div class="moviecontent_image-large">
              <img :src="picUrl">
            </div>
            <div class="moviecontent_info">
              <p><span v-for="(countrie,index) in Movies.countries">{{countrie}}</span>/<span v-for="(genre,index) in Movies.genres">{{genre}}/</span></p>
              <p><span>豆瓣评分：<span class="moviecontent_info-average">{{Movies.rating.average}}</span></span><span class="moviecontent_info-collect">{{Movies.collect_count}}人看过</span></p>
              <h3 class="moviecontent_info-h">{{title}}的剧情介绍</h3>
              <p class="moviecontent_info-summary">{{Movies.summary}}</p>
              <div class="moviecontent_info-directors clearfix ">
                <div class="directors_pic pull-left">
                  <img :src="directorsPicUrl">
                </div>
                <div class="directors_info pull-left">
                    <span v-for="(director,index) in Movies.directors">{{director.name}}[导演]</span>
                </div>
              </div>
              <div class="moviecontent_info-casts">
                  <ul>
                    <li v-for="(cast,index) in Movies.casts">
                      <div class="casts_item clearfix">
                        <div class="casts_pic pull-left">
                          <img :src="cast.avatars.small">
                        </div>
                        <div class="casts_info pull-left">
                          <p>{{cast.name}}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import loading from './loading.vue'
  export default {
    props: {},
    data() {
      return {
        Movies: [],
        current: 0,
        picUrl:'',
        title:'',
        directorsPicUrl:'',
        controlShow: {
          loading: true,
          content: false
        }
      }
    },
    created(){
      let id=this.$store.state.selectId;
      let url='https://api.douban.com/v2/movie/subject/'+id;
      console.log(url);
      this.$http.jsonp(url, {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.controlShow.loading = false;
        this.controlShow.content = true;
        this.Movies = response.data;
        this.title = response.data.title;
        this.picUrl=response.data.images.large;
        this.directorsPicUrl=response.data.directors[0].avatars.small;
        console.log(this.directorsPicUrl);
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response)
      })
    },
    components:{
      loading
    },
    computed:{
      getId(){
        return this.$store.state.selectId
      },
    },

    methods:{
      goBack(){
        let url=this.$store.state.goBlackUrl;
        this.$router.replace({ path: url, force: true })
      }
    }

  }
</script>

<style>
  .movieContent_header{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 5.27rem;
    background: #ffffff;
    border-bottom: 1px solid #dddddd;
  }

  .movieContent_header-goBack{
    margin-top: 1rem;
    margin-left: 1rem;
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url("../assets/goBack.png");
    cursor: pointer;
  }
  .movieContent_header-goBack:hover{
    background: url("../assets/goBackBlue.png");
  }
  .movieContent_header-text{
    position: absolute;
    margin-top: 2.3rem;
    margin-left: 5rem;
    display: inline-block;
    font-weight: bold;
    font-size: 2rem;

  }
  .moviecontent_image-large{
    margin-bottom: 0.83rem;
  }
  .moviecontent-wrapper{
    margin-top: 5.83rem;
  }
  .moviecontent-wrapper ul{
    padding-left: 0;
  }



  .moviecontent_info-h{
    color: #007722;
  }
  .moviecontent_info-summary{
    text-indent:2em
  }
  .moviecontent_info-average{
    padding-right: 15px;
    color: #e09015;
  }
  .moviecontent_info-collect{
    color:#37a;
  }
  .moviecontent_info-directors{
    padding: 12px 0;
  }
  .moviecontent_info-casts ul{
    padding-left:0px;
  }
  .casts_pic,.directors_pic{
    padding-right: 25px;
  }
  .casts_info,.directors_pic ,.casts_pic ,.directors_info{
    height: 100px;
  }
  .casts_info,.directors_info{
    padding-top:40px
  }

</style>
