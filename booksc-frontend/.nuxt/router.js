import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bf79a800 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _475bd8d2 = () => interopDefault(import('..\\pages\\services\\index.vue' /* webpackChunkName: "pages/services/index" */))
const _32d99983 = () => interopDefault(import('..\\pages\\services\\apple\\index.vue' /* webpackChunkName: "pages/services/apple/index" */))
const _cdecc27e = () => interopDefault(import('..\\pages\\services\\desktop\\index.vue' /* webpackChunkName: "pages/services/desktop/index" */))
const _2da851cb = () => interopDefault(import('..\\pages\\services\\iqos\\index.vue' /* webpackChunkName: "pages/services/iqos/index" */))
const _5b3b8e06 = () => interopDefault(import('..\\pages\\services\\laptop\\index.vue' /* webpackChunkName: "pages/services/laptop/index" */))
const _c6bf427a = () => interopDefault(import('..\\pages\\services\\monitor\\index.vue' /* webpackChunkName: "pages/services/monitor/index" */))
const _80795fe6 = () => interopDefault(import('..\\pages\\services\\other\\index.vue' /* webpackChunkName: "pages/services/other/index" */))
const _8aa79b9c = () => interopDefault(import('..\\pages\\services\\smartphone\\index.vue' /* webpackChunkName: "pages/services/smartphone/index" */))
const _2c6b60f1 = () => interopDefault(import('..\\pages\\services\\tablet\\index.vue' /* webpackChunkName: "pages/services/tablet/index" */))
const _e67121e8 = () => interopDefault(import('..\\pages\\services\\tvs\\index.vue' /* webpackChunkName: "pages/services/tvs/index" */))
const _27f620ab = () => interopDefault(import('..\\pages\\services\\apple\\_id.vue' /* webpackChunkName: "pages/services/apple/_id" */))
const _70425d69 = () => interopDefault(import('..\\pages\\services\\desktop\\_id.vue' /* webpackChunkName: "pages/services/desktop/_id" */))
const _23b36a1a = () => interopDefault(import('..\\pages\\services\\iqos\\_id.vue' /* webpackChunkName: "pages/services/iqos/_id" */))
const _5e3456a5 = () => interopDefault(import('..\\pages\\services\\laptop\\_id.vue' /* webpackChunkName: "pages/services/laptop/_id" */))
const _f9a5942a = () => interopDefault(import('..\\pages\\services\\monitor\\_id.vue' /* webpackChunkName: "pages/services/monitor/_id" */))
const _540ff1b5 = () => interopDefault(import('..\\pages\\services\\other\\_id.vue' /* webpackChunkName: "pages/services/other/_id" */))
const _40b5cdcc = () => interopDefault(import('..\\pages\\services\\smartphone\\_id.vue' /* webpackChunkName: "pages/services/smartphone/_id" */))
const _36e228ce = () => interopDefault(import('..\\pages\\services\\tablet\\_id.vue' /* webpackChunkName: "pages/services/tablet/_id" */))
const _95847718 = () => interopDefault(import('..\\pages\\services\\tvs\\_id.vue' /* webpackChunkName: "pages/services/tvs/_id" */))
const _68ea9016 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _bf79a800,
    name: "contacts"
  }, {
    path: "/services",
    component: _475bd8d2,
    name: "services"
  }, {
    path: "/services/apple",
    component: _32d99983,
    name: "services-apple"
  }, {
    path: "/services/desktop",
    component: _cdecc27e,
    name: "services-desktop"
  }, {
    path: "/services/iqos",
    component: _2da851cb,
    name: "services-iqos"
  }, {
    path: "/services/laptop",
    component: _5b3b8e06,
    name: "services-laptop"
  }, {
    path: "/services/monitor",
    component: _c6bf427a,
    name: "services-monitor"
  }, {
    path: "/services/other",
    component: _80795fe6,
    name: "services-other"
  }, {
    path: "/services/smartphone",
    component: _8aa79b9c,
    name: "services-smartphone"
  }, {
    path: "/services/tablet",
    component: _2c6b60f1,
    name: "services-tablet"
  }, {
    path: "/services/tvs",
    component: _e67121e8,
    name: "services-tvs"
  }, {
    path: "/services/apple/:id",
    component: _27f620ab,
    name: "services-apple-id"
  }, {
    path: "/services/desktop/:id",
    component: _70425d69,
    name: "services-desktop-id"
  }, {
    path: "/services/iqos/:id",
    component: _23b36a1a,
    name: "services-iqos-id"
  }, {
    path: "/services/laptop/:id",
    component: _5e3456a5,
    name: "services-laptop-id"
  }, {
    path: "/services/monitor/:id",
    component: _f9a5942a,
    name: "services-monitor-id"
  }, {
    path: "/services/other/:id",
    component: _540ff1b5,
    name: "services-other-id"
  }, {
    path: "/services/smartphone/:id",
    component: _40b5cdcc,
    name: "services-smartphone-id"
  }, {
    path: "/services/tablet/:id",
    component: _36e228ce,
    name: "services-tablet-id"
  }, {
    path: "/services/tvs/:id",
    component: _95847718,
    name: "services-tvs-id"
  }, {
    path: "/",
    component: _68ea9016,
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
