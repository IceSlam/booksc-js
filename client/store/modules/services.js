import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    ServicesList: []
  },
  getters: {
    SERVICES (state) {
      return state.ServicesList
    }
  },
  actions: {
    GET_SERVICES ({ commit }) {
      return axios('/api/services', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_SERVICES', response.data)
        })
    }
  },
  mutations: {
    SET_SERVICES: (state, ServicesList) => {
      state.ServicesList = ServicesList
    }
  }
}
