export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MainHeader } from '../..\\components\\main\\Header.vue'
export { default as MainNavbar } from '../..\\components\\main\\Navbar.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyMainHeader = import('../..\\components\\main\\Header.vue' /* webpackChunkName: "components/main-header" */).then(c => c.default || c)
export const LazyMainNavbar = import('../..\\components\\main\\Navbar.vue' /* webpackChunkName: "components/main-navbar" */).then(c => c.default || c)
