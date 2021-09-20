import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  state: {
    UsersList: []
  },
  getters: {
    USERS (state) {
      return state.UsersList
    }
  },
  actions: {
    GET_USERS ({ commit }) {
      return axios('/api/users', {
        method: 'GET',
        headers: {
          'Authorization': Cookies.get('booksc._token.local')
        }
      })
        .then((response) => {
          commit('SET_USERS', response.data)
        })
    }
  },
  mutations: {
    SET_USERS: (state, UsersList) => {
      state.UsersList = UsersList
    }
  }
}
