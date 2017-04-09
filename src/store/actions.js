
import * as types from './mutation-types'
export default {
  saveId({ commit }, id) {
    commit(types.SAVE_ID, id)
  },
  blackUrl({ commit }, id) {
    commit(types.BLACK_URL, id)
  },
  saveSearchCon({ commit }, con) {
    commit(types.SAVE_SEARCH_CON, con)
  },
  saveHandpickCon({ commit }, con) {
    commit(types.SAVE_HANDPICK_CON, con);

  }
}
