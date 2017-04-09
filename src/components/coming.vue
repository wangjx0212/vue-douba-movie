<template>

  <div id="theatreComing">
    <div class="panel panel-default">
      <div class="panel-body theatreComing-body">
        <p  class="title">影院即将上映  <router-link to="/theatre/theatreComing" class="pull-right" >更多+</router-link></p>
        <ul class="clearfix theatreComing_ul">
          <li v-for="(movie,index) in comingMovies" @click="saveId(index)">
            <img :src="movie.images.large">
            <p><strong>{{movie.title}}</strong></p>
            <p><span class="average" v-if="movie.rating.average">{{movie.rating.average}}分</span><span v-if="!movie.rating.average">暂无评分</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    props: {},
    data() {
      return {
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
      this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        this.controlShow.loading = false;
        this.controlShow.content = true;
        for(var i=0;i<3;i++){
          this.comingMovies.push(response.data.subjects[i])
        }

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
        let num=this.comingMovies[index].id;
        this.$store.dispatch('saveId',num);
        this.$store.dispatch('blackUrl',this.$route.path);
        this.$router.replace({ path: '/moviecontent', force: true })
      }
    }

  }
</script>

<style>



  .theatreComing-body .title{
    font-weight: 600;
    font-size: 1.56rem;
    margin-bottom: 15px;
  }
  .theatreComing-body p a{
    padding-right: 0.5rem;
    font-size: 1.33rem;
  }
  .theatreComing-body p a:hover{
    text-decoration: none;
    font-size: 1.33rem;
  }

  #theatreComing ul{
    padding-left: 1rem;
    position: relative;
    list-style: none;
  }

  #theatreComing ul li{
    float: left;
    margin-right: 1.2rem;
    width: 28%;
    height: 16.0rem;
    display: block;
    cursor: pointer;

  }
  #theatreComing ul li img{
    width: 100%;
    height: 10.6rem;
  }


</style>
