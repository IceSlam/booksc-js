import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    newGoods: []
  },
  mutations: {
    SET_NEW_GOODS_TO_STORE: (state, newGoods) => {
      state.newGoods = newGoods
    }
  },
  actions: {
    GET_NEW_GOODS_FROM_API ({ commit }) {
      return axios('http://localhost:1894/new-goods', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_NEW_GOODS_TO_STORE', response.data)
        })
    }
  },
  getters: {
    NEW_GOODS (state) {
      return state.newGoods
    }
  },
  modules: {
  }
})

export default store
