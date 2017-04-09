import * as types from './mutation-types'

export default {
  // 选择电影的Id
  [types.SAVE_ID] (state, id) {
    state.selectId = id;
  },
  // 选中的当前页面的URL
  [types.BLACK_URL] (state, url) {
    state.goBlackUrl = url;
  },
//搜索的内容
  [types.SAVE_SEARCH_CON] (state, Con) {
    state.searchCon = Con;
  },
  //选择精选项
  [types.SAVE_HANDPICK_CON] (state, Con){
    state.handpickCon = Con;
    console.log( state.handpickCon);
  },
}
