import Vue from 'vue'
import Vuex from 'vuex'
import usersCount from './modules/usersCount'
import servicesCount from './modules/servicesCount'
import categoriesCount from './modules/categoriesCount'
import reviewsCount from './modules/reviewsCount'
import users from './modules/users'
import services from './modules/services'
import categories from './modules/categories'
import reviews from './modules/reviews'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    usersCount,
    servicesCount,
    categoriesCount,
    reviewsCount,
    users,
    services,
    categories,
    reviews
  }
})

export default store
