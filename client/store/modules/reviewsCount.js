import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    reviewsCount: ''
  },
  getters: {
    REVIEWS_COUNT (state) {
      return state.reviewsCount
    }
  },
  actions: {
    GET_REVIEWS_COUNT ({ commit }) {
      return axios('/api/reviews/count', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_REVIEWS_COUNT', response.data)
        })
    }
  },
  mutations: {
    SET_REVIEWS_COUNT: (state, reviewsCount) => {
      state.reviewsCount = reviewsCount
    }
  }
}
