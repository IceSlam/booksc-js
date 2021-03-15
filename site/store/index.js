import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    homePage: [],
    contactPage: {},
    themeSettings: {}
  },
  mutations: {
    SET_HOMEPAGE_TO_STORE: (state, homePage) => {
      state.homePage = homePage
    },
    SET_CONTACTS_PAGE_TO_STORE: (state, contactsPage) => {
      state.contactPage = contactsPage
    },
    SET_THEME_SETTINGS_TO_STORE: (state, themeSettings) => {
      state.themeSettings = themeSettings
    }
  },
  actions: {
    GET_HOMEPAGE_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/homepage', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_HOMEPAGE_TO_STORE', response.data)
        })
    },
    GET_CONTACTS_PAGE_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/contacts', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_CONTACTS_PAGE_TO_STORE', response.data)
        })
    },
    GET_THEME_SETTINGS_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/settings', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_THEME_SETTINGS_TO_STORE', response.data)
        })
    }
  },
  getters: {
    HOMEPAGE (state) {
      return state.homePage
    },
    CONTACTS_PAGE (state) {
      return state.contactPage
    },
    THEME_SETTINGS (state) {
      return state.themeSettings
    }
  },
  modules: {
  }
})

export default store
