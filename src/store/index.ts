/*
 * @Author: pengyanxue
 * @Date: 2021-04-29 12:03:05
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-04-29 13:06:37
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('ncrement')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})