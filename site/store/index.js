import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    newGoods: [],
    contactPage: {}
  },
  mutations: {
    SET_NEW_GOODS_TO_STORE: (state, newGoods) => {
      state.newGoods = newGoods
    },
    SET_CONTACTS_PAGE_TO_STORE: (state, contactsPage) => {
      state.contactPage = contactsPage
    }
  },
  actions: {
    GET_NEW_GOODS_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/new-goods', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_NEW_GOODS_TO_STORE', response.data)
        })
    },
    GET_CONTACTS_PAGE_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/contacts', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_CONTACTS_PAGE_TO_STORE', response.data)
        })
    }
  },
  getters: {
    NEW_GOODS (state) {
      return state.newGoods
    },
    CONTACTS_PAGE (state) {
      return state.contactPage
    }
  },
  modules: {
  }
})

export default store
