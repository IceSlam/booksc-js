import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    ReviewsList: []
  },
  getters: {
    REVIEWS (state) {
      return state.ReviewsList
    }
  },
  actions: {
    GET_REVIEWS ({ commit }) {
      return axios('/api/reviews', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_REVIEWS', response.data)
        })
    }
  },
  mutations: {
    SET_REVIEWS: (state, ReviewsList) => {
      state.ReviewsList = ReviewsList
    }
  }
}
