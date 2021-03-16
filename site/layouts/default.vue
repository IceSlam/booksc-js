<template>
  <div class="wrapper">
    <LazyHydrate when-idle>
      <Header
        :header-data="THEME_SETTINGS"
      />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <Navbar
        :navbar-data="THEME_SETTINGS"
      />
    </LazyHydrate>
    <nuxt />
    <LazyHydrate when-idle>
      <Footer
        :footer-data="THEME_SETTINGS"
      />
    </LazyHydrate>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
    Header: () => import('@/components/main/Header.vue'),
    Navbar: () => import('@/components/main/Navbar'),
    Footer: () => import('@/components/main/Footer')
  },
  head () {
    return {
      title: 'Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './img/logotype.png' }]
    }
  },
  computed: {
    ...mapGetters([
      'THEME_SETTINGS'
    ])
  },
  mounted () {
    this.GET_THEME_SETTINGS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_THEME_SETTINGS_FROM_API'
    ])
  }
}
</script>
