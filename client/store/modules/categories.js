import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    CategoriesList: []
  },
  getters: {
    CATEGORIES (state) {
      return state.CategoriesList
    }
  },
  actions: {
    GET_CATEGORIES ({ commit }) {
      return axios('/api/categories', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_CATEGORIES', response.data)
        })
    }
  },
  mutations: {
    SET_CATEGORIES: (state, CategoriesList) => {
      state.CategoriesList = CategoriesList
    }
  }
}
