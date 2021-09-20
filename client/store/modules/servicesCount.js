import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    servicesCount: ''
  },
  getters: {
    SERVICES_COUNT (state) {
      return state.servicesCount
    }
  },
  actions: {
    GET_SERVICES_COUNT ({ commit }) {
      return axios('/api/services/count', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_SERVICES_COUNT', response.data)
        })
    }
  },
  mutations: {
    SET_SERVICES_COUNT: (state, servicesCount) => {
      state.servicesCount = servicesCount
    }
  }
}
