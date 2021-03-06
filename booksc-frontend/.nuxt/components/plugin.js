import Vue from 'vue'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  HomeSocial: () => import('../..\\components\\home\\social.vue' /* webpackChunkName: "components/home-social" */).then(c => c.default || c),
  MainFooter: () => import('../..\\components\\main\\Footer.vue' /* webpackChunkName: "components/main-footer" */).then(c => c.default || c),
  MainHeader: () => import('../..\\components\\main\\Header.vue' /* webpackChunkName: "components/main-header" */).then(c => c.default || c),
  MainNavbar: () => import('../..\\components\\main\\Navbar.vue' /* webpackChunkName: "components/main-navbar" */).then(c => c.default || c),
  ServicesHeading: () => import('../..\\components\\services\\Heading.vue' /* webpackChunkName: "components/services-heading" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
