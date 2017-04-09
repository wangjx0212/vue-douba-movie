
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

import store from './store';
import Charts from './components/charts.vue'
import Hot from './components/hot.vue'
import Coming from './components/coming.vue'
import Moviecontent from './components/moviecontent.vue'
import Searchcontent from './components/searchcontent.vue'
import Subject from './components/subject.vue'
import Theatre from './components/theatre.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VueLazyload)

const routes = [/*{
  path : '/',
  component : Charts
},*/
  {
    path: '/charts',
    component:Charts
  },
  {
    path:'/hot',
    component:Hot
  },
  {
    path:'/coming',
    component:Coming
  },
  {
    path:'/moviecontent',
    component:Moviecontent
  },
  {
    path:'/searchcontent',
    component:Searchcontent
  },
  {
    path:'/subject',
    component:Subject
  },
  {
    path:'/theatre',
    component:Theatre,
    children: [
      // 当 /user/:id 匹配成功，
      // UserHome 会被渲染在 User 的 <router-view> 中
      { path: 'theatreHot',
        component: resolve => require(['./components/theatreHot.vue'],resolve)
      },
      {path:'theatreComing',
        component: resolve => require(['./components/theatreComing.vue'],resolve)
      }

    ]
  }];


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/.gif',
  attempt: 1
})

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app')
