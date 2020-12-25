import Vue from 'vue'
import App from './App.vue'
import Vuex from '../vuex/index'

Vue.config.productionTip = false

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 520
  },
  getters: {
    getStateCount(state) {
      return state.count
    }
  },
  actions: {
    subAction(context, payload) { //context = {commint,dispatch}
      context.commit('sub')
    },
    asyncSub(context, payload) { //context = {commint,dispatch}
      setTimeout(() => {
        context.commit('sub')
      }, 1000);
    },
  },
  mutations: {
    add(state) {
      state.count = state.count + 1
    },
    sub(state) {
      state.count = state.count - 1
    },
  }
}, Vue)

new Vue({
  name: "root",
  store,
  render: h => h(App),
}).$mount('#app')
