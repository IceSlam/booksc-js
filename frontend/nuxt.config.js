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
    host: process.env.APP_IP,
    port: process.env.APP_PORT
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '~/plugins/custom.js', ssr: false },
    { src: '~/plugins/v-scroll.js', ssr: false }
  ],
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'black'
  },

  pageTransition: 'ispage',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
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
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ],
    ['vue-scrollto/nuxt',
      {
        duration: 500
      }
    ],
    [
      'nuxt-imagemin',
      {
        optipng: { optimizationLevel: 5 },
        gifsicle: { optimizationLevel: 2 }
      }
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-ssr-cache'
  ],

  cache: {
    useHostPrefix: false,
    pages: [
      '/',
      '/services',
      '/contacts',
      '/reviews',
      '/services/apple',
      '/services/smartphone',
      '/services/tablet',
      '/services/laptop',
      '/services/desktop',
      '/services/monitor',
      '/services/tvs',
      'services/iqos',
      '/services/other'
    ],

    key(route, context) {
    },

    store: {
      type: 'redis',
      host: 'localhost',
      ttl: 10 * 60,
      configure: [
        // these values are configured
        // on redis upon initialization
        ['maxmemory', '200mb'],
        ['maxmemory-policy', 'allkeys-lru'],
      ]
    }
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  sitemap: {
    hostname: 'https://booksc.ru',
    gzip: true
  },

  robots: {
    Allow: '/',
    Host: 'booksc.ru',
    Sitemap: '/sitemap.xml'
  },

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
