import Vue from 'vue'

const components = {
  HomeBrands: () => import('../..\\components\\home\\Brands.vue' /* webpackChunkName: "components/home-brands" */).then(c => c.default || c),
  HomeNewGoods: () => import('../..\\components\\home\\NewGoods.vue' /* webpackChunkName: "components/home-new-goods" */).then(c => c.default || c),
  HomeNewGoodsCard: () => import('../..\\components\\home\\newGoodsCard.vue' /* webpackChunkName: "components/home-new-goods-card" */).then(c => c.default || c),
  HomeReviewsHome: () => import('../..\\components\\home\\ReviewsHome.vue' /* webpackChunkName: "components/home-reviews-home" */).then(c => c.default || c),
  HomeReviewsHomeCard: () => import('../..\\components\\home\\ReviewsHomeCard.vue' /* webpackChunkName: "components/home-reviews-home-card" */).then(c => c.default || c),
  HomeSocial: () => import('../..\\components\\home\\social.vue' /* webpackChunkName: "components/home-social" */).then(c => c.default || c),
  HomeTopServices: () => import('../..\\components\\home\\TopServices.vue' /* webpackChunkName: "components/home-top-services" */).then(c => c.default || c),
  HomeWhyWe: () => import('../..\\components\\home\\WhyWe.vue' /* webpackChunkName: "components/home-why-we" */).then(c => c.default || c),
  ContactsOffices: () => import('../..\\components\\contacts\\Offices.vue' /* webpackChunkName: "components/contacts-offices" */).then(c => c.default || c),
  ContactsOfficesCard: () => import('../..\\components\\contacts\\OfficesCard.vue' /* webpackChunkName: "components/contacts-offices-card" */).then(c => c.default || c),
  MainBreadcrumbs: () => import('../..\\components\\main\\Breadcrumbs.vue' /* webpackChunkName: "components/main-breadcrumbs" */).then(c => c.default || c),
  MainFooter: () => import('../..\\components\\main\\Footer.vue' /* webpackChunkName: "components/main-footer" */).then(c => c.default || c),
  MainHeader: () => import('../..\\components\\main\\Header.vue' /* webpackChunkName: "components/main-header" */).then(c => c.default || c),
  MainNavbar: () => import('../..\\components\\main\\Navbar.vue' /* webpackChunkName: "components/main-navbar" */).then(c => c.default || c),
  Reviews: () => import('../..\\components\\reviews\\Reviews.vue' /* webpackChunkName: "components/reviews" */).then(c => c.default || c),
  ReviewsCard: () => import('../..\\components\\reviews\\ReviewsCard.vue' /* webpackChunkName: "components/reviews-card" */).then(c => c.default || c),
  ServicesHeading: () => import('../..\\components\\services\\Heading.vue' /* webpackChunkName: "components/services-heading" */).then(c => c.default || c),
  ServicesHeadingCategory: () => import('../..\\components\\services\\HeadingCategory.vue' /* webpackChunkName: "components/services-heading-category" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
