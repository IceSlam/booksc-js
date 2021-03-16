export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Сеть сервисных центров Book-Service',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './assets/img/logotype-min.webp' }
    ]
  },

  server: {
    host: '127.0.6.68',
    port: 57946
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/fontawesome.min.css',
    'uikit/dist/css/uikit.min.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Bootstrap-Vue for Nuxt
    'bootstrap-vue/nuxt',
    // NuxtJS Yandex Metrika
    [
      '@naumstory/nuxtjs-yandex-metrika',
      {
        id: '36912760',
        webvisor: true
        // clickmap:true,
        // useCDN:false,
        // trackLinks:true,
        // accurateTrackBounce:true,
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
      name: 'Сеть сервисных центров Book-Service',
      short_name: 'Book-Service',
      display: 'standalone',
      orientation: 'portrait',
      theme_color: '#a8312d'
    },
    meta: {
      mobileApp: 'true',
      name: 'Сеть сервисных центров Book-Service',
      short_name: 'Book-Service',
      author: 'IceSlam',
      theme_color: '#a8312d',
      description: 'Сервисный центр по ремонту цифровой техники, техники Apple и IQOS, телефонов, смартфонов, планшетов, ноутбуков и персональных компьютеров, мониторов и LED-телевизоров и многое другое, а также продажа аксессуаров и запчастей для цифровой техники'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
