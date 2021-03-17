import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10d8759e = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _4f467cad = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _20ecf146 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _1f364ffe = () => interopDefault(import('..\\pages\\services\\_slug.vue' /* webpackChunkName: "pages/services/_slug" */))
const _fc81d738 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacts",
    component: _10d8759e,
    name: "contacts"
  }, {
    path: "/reviews",
    component: _4f467cad,
    name: "reviews"
  }, {
    path: "/services",
    component: _20ecf146,
    name: "services"
  }, {
    path: "/services/:slug",
    component: _1f364ffe,
    name: "services-slug"
  }, {
    path: "/",
    component: _fc81d738,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
