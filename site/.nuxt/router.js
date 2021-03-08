import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _10d8759e = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _20ecf146 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _58ac6e18 = () => interopDefault(import('..\\pages\\services\\apple\\index.vue' /* webpackChunkName: "pages/services/apple/index" */))
const _468bb5f2 = () => interopDefault(import('..\\pages\\services\\desktop\\index.vue' /* webpackChunkName: "pages/services/desktop/index" */))
const _014bf03a = () => interopDefault(import('..\\pages\\services\\iqos\\index.vue' /* webpackChunkName: "pages/services/iqos/index" */))
const _4b97f7ac = () => interopDefault(import('..\\pages\\services\\laptop\\index.vue' /* webpackChunkName: "pages/services/laptop/index" */))
const _4a2275f4 = () => interopDefault(import('..\\pages\\services\\monitor\\index.vue' /* webpackChunkName: "pages/services/monitor/index" */))
const _60937f7e = () => interopDefault(import('..\\pages\\services\\other\\index.vue' /* webpackChunkName: "pages/services/other/index" */))
const _10750161 = () => interopDefault(import('..\\pages\\services\\smartphone\\index.vue' /* webpackChunkName: "pages/services/smartphone/index" */))
const _b4bdc0c0 = () => interopDefault(import('..\\pages\\services\\tablet\\index.vue' /* webpackChunkName: "pages/services/tablet/index" */))
const _620ec6bd = () => interopDefault(import('..\\pages\\services\\tvs\\index.vue' /* webpackChunkName: "pages/services/tvs/index" */))
const _05850f48 = () => interopDefault(import('..\\pages\\services\\apple\\_id.vue' /* webpackChunkName: "pages/services/apple/_id" */))
const _11128cda = () => interopDefault(import('..\\pages\\services\\desktop\\_id.vue' /* webpackChunkName: "pages/services/desktop/_id" */))
const _eca68dbc = () => interopDefault(import('..\\pages\\services\\iqos\\_id.vue' /* webpackChunkName: "pages/services/iqos/_id" */))
const _31d7f514 = () => interopDefault(import('..\\pages\\services\\laptop\\_id.vue' /* webpackChunkName: "pages/services/laptop/_id" */))
const _23fd655c = () => interopDefault(import('..\\pages\\services\\monitor\\_id.vue' /* webpackChunkName: "pages/services/monitor/_id" */))
const _29574966 = () => interopDefault(import('..\\pages\\services\\other\\_id.vue' /* webpackChunkName: "pages/services/other/_id" */))
const _3b342fee = () => interopDefault(import('..\\pages\\services\\smartphone\\_id.vue' /* webpackChunkName: "pages/services/smartphone/_id" */))
const _8f9aebf0 = () => interopDefault(import('..\\pages\\services\\tablet\\_id.vue' /* webpackChunkName: "pages/services/tablet/_id" */))
const _57295465 = () => interopDefault(import('..\\pages\\services\\tvs\\_id.vue' /* webpackChunkName: "pages/services/tvs/_id" */))
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
    path: "/services",
    component: _20ecf146,
    name: "services"
  }, {
    path: "/services/apple",
    component: _58ac6e18,
    name: "services-apple"
  }, {
    path: "/services/desktop",
    component: _468bb5f2,
    name: "services-desktop"
  }, {
    path: "/services/iqos",
    component: _014bf03a,
    name: "services-iqos"
  }, {
    path: "/services/laptop",
    component: _4b97f7ac,
    name: "services-laptop"
  }, {
    path: "/services/monitor",
    component: _4a2275f4,
    name: "services-monitor"
  }, {
    path: "/services/other",
    component: _60937f7e,
    name: "services-other"
  }, {
    path: "/services/smartphone",
    component: _10750161,
    name: "services-smartphone"
  }, {
    path: "/services/tablet",
    component: _b4bdc0c0,
    name: "services-tablet"
  }, {
    path: "/services/tvs",
    component: _620ec6bd,
    name: "services-tvs"
  }, {
    path: "/services/apple/:id",
    component: _05850f48,
    name: "services-apple-id"
  }, {
    path: "/services/desktop/:id",
    component: _11128cda,
    name: "services-desktop-id"
  }, {
    path: "/services/iqos/:id",
    component: _eca68dbc,
    name: "services-iqos-id"
  }, {
    path: "/services/laptop/:id",
    component: _31d7f514,
    name: "services-laptop-id"
  }, {
    path: "/services/monitor/:id",
    component: _23fd655c,
    name: "services-monitor-id"
  }, {
    path: "/services/other/:id",
    component: _29574966,
    name: "services-other-id"
  }, {
    path: "/services/smartphone/:id",
    component: _3b342fee,
    name: "services-smartphone-id"
  }, {
    path: "/services/tablet/:id",
    component: _8f9aebf0,
    name: "services-tablet-id"
  }, {
    path: "/services/tvs/:id",
    component: _57295465,
    name: "services-tvs-id"
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
