import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    categoriesCount: ''
  },
  getters: {
    CATEGORIES_COUNT (state) {
      return state.categoriesCount
    }
  },
  actions: {
    GET_CATEGORIES_COUNT ({ commit }) {
      return axios('/api/categories/count', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_CATEGORIES_COUNT', response.data)
        })
    }
  },
  mutations: {
    SET_CATEGORIES_COUNT: (state, categoriesCount) => {
      state.categoriesCount = categoriesCount
    }
  }
}
