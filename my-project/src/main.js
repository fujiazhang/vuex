import Vue from 'vue'
import App from './App.vue'
import Vuex from '../vuex/index'

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    getStateCount(state) {
      return state.count
    }
  },
  actions: {
    subAction(context) {
      context.commit('sub')
    }
  },
  mutations: {
    add(state) {
      state.count = state.count + 1
    },
    sub(state) {
      state.count = state.count - 1
    }
  }
}, Vue)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
