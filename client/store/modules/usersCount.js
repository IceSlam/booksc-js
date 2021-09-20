import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    usersCount: ''
  },
  getters: {
    USERS_COUNT (state) {
      return state.usersCount
    }
  },
  actions: {
    GET_USERS_COUNT ({ commit }) {
      return axios('/api/users/count', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_USERS_COUNT', response.data)
        })
    }
  },
  mutations: {
    SET_USERS_COUNT: (state, usersCount) => {
      state.usersCount = usersCount
    }
  }
}
