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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    host: process.env.APP_IP || '127.0.0.1',
    port: process.env.APP_PORT || 3111
  },

  auth: {
    cookie: {
      prefix: 'booksc.',
      options: {
        path: '/',
        expires: 1,
        maxAge: 86400
      }
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/local',
            method: 'post'
          },
          logout: false,
          user: {
            url: '/api/users/me/',
            method: 'get'
          },
        },
        autoLogout: true,
        token: {
          property: 'jwt',
          global: true,
          required: true,
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 86400
        },
        user: {
          property: '',
          autoFetch: true
        },
      },
    },
    redirect: {
      login: '/admin/auth',
      logout: '/',
      user: '/admin/me',
      callback:'/',
      home: '/'
    }
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'black'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/normalize.css',
    '~/assets/scss/_dark.scss',
    '~/assets/scss/_main.scss',
    '~/assets/scss/_grid.scss'
  ],
  script: [
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
  ],
  styleResources: {
    scss: ["@/assets/scss/_vars.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fa.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/moment',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
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
    'nuxt-ssr-cache',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  moment: {
    defaultLocale: 'ru',
    plugins: [
      'moment-jdateformatparser'
    ]
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.RECAPTCHA_SITE_KEY,    // Site key for requests
    version: 3,     // Version
    size: 'invisible'        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  googleFonts: {
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      'Open+Sans': {
        wght: [200, 300, 400, 500, 600, 700, 800,900]
      },
      Rubik: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },

  pageTransition: 'ispage',

  toast: {
    position: 'bottom-right',
    register: [
      {
        name: 'logged_out',
        message: 'Вы вышли из аккаунта!',
        options: {
          type: 'info',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'sign-out-alt',
          className: 'is-logout',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'logged_in',
        message: 'Вы авторизованы!',
        options: {
          type: 'success',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'fingerprint',
          className: 'is-login',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'successful_deletion',
        message: 'Успешно удалено!',
        options: {
          type: 'success',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'check',
          className: 'is-login',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'successful_updated',
        message: 'Успешно обновлено!',
        options: {
          type: 'success',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'check',
          className: 'is-login',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'successful_created',
        message: 'Успешно создано!',
        options: {
          type: 'success',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'check',
          className: 'is-login',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'errored_deletion',
        message: 'Ошибка удаления!',
        options: {
          type: 'error',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'errored_update',
        message: 'Ошибка обновления!',
        options: {
          type: 'error',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'errored_creation',
        message: 'Ошибка создания!',
        options: {
          type: 'error',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'register',
        message: 'Вы зарегистрировались!',
        options: {
          type: 'success',
          duration: 3000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon : 'user-plus',
          className: 'is-login',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'logged_in_error',
        message: 'Неверный email или пароль!',
        options: {
          type: 'error',
          duration: 5000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon: 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'email_exists',
        message: 'Пользователь с таким email существует!',
        options: {
          type: 'error',
          duration: 5000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon: 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'route_404',
        message: 'Обработчик запроса не найден',
        options: {
          type: 'error',
          duration: 5000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon: 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'route_500',
        message: 'Обработчик запроса не отвечает',
        options: {
          type: 'error',
          duration: 5000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon: 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      },
      {
        name: 'route_503',
        message: 'Сервер-обработчик недоступен',
        options: {
          type: 'error',
          duration: 5000,
          position: 'bottom-right',
          iconPack: 'fontawesome',
          icon: 'exclamation-triangle',
          className: 'is-error',
          action : {
            onClick : (e, toastObject) => {
              toastObject.goAway(0);
            },
            icon: 'times'
          }
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    baseURL: process.env.API_URL
  },

  proxy: {
    '/api/': {
      target: 'https://api.booksc.ru/',
      pathRewrite: { '^/api/': '' }
    }
  },

  sitemap: {
    hostname: 'https://booksc.ru',
    gzip: true
  },

  robots: {
    Allow: '/',
    Host: 'booksc.ru',
    Sitemap: '/sitemap.xml',
    Disallow: '/admin'
  },

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
