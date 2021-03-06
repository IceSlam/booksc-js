export { default as Logo } from '../..\\components\\Logo.vue'
export { default as HomeSocial } from '../..\\components\\home\\social.vue'
export { default as MainFooter } from '../..\\components\\main\\Footer.vue'
export { default as MainHeader } from '../..\\components\\main\\Header.vue'
export { default as MainNavbar } from '../..\\components\\main\\Navbar.vue'
export { default as ServicesHeading } from '../..\\components\\services\\Heading.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyHomeSocial = import('../..\\components\\home\\social.vue' /* webpackChunkName: "components/home-social" */).then(c => c.default || c)
export const LazyMainFooter = import('../..\\components\\main\\Footer.vue' /* webpackChunkName: "components/main-footer" */).then(c => c.default || c)
export const LazyMainHeader = import('../..\\components\\main\\Header.vue' /* webpackChunkName: "components/main-header" */).then(c => c.default || c)
export const LazyMainNavbar = import('../..\\components\\main\\Navbar.vue' /* webpackChunkName: "components/main-navbar" */).then(c => c.default || c)
export const LazyServicesHeading = import('../..\\components\\services\\Heading.vue' /* webpackChunkName: "components/services-heading" */).then(c => c.default || c)
