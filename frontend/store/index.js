import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    homePage: [],
    reviewsList: [],
    categoiesList: [],
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
    },
    SET_REVIEWS_TO_STORE: (state, reviewsList) => {
      state.reviewsList = reviewsList
    },
    SET_CATEGORIES_TO_STORE: (state, cateriesList) => {
      state.categoiesList = cateriesList
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
    },
    GET_REVIEWS_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/reviews?_sort=review_date:desc', {
        method: 'GET'
      })
        .then((res) => {
          commit('SET_REVIEWS_TO_STORE', res.data)
        })
    },
    GET_CATEGORIES_FROM_API ({ commit }) {
      return axios('https://api.booksc.ru/categories', {
        method: 'GET'
      })
        .then((res) => {
          commit('SET_CATEGORIES_TO_STORE', res.data)
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
    },
    REVIEWS (state) {
      return state.reviewsList
    },
    CATEGORIES (state) {
      return state.categoiesList
    }
  },
  modules: {
  }
})

export default store
