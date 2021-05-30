<template>
  <main class="wrapper">
    <Header
      :header-data="THEME_SETTINGS"
    />
    <Navbar
      :navbar-data="THEME_SETTINGS"
    />
    <nuxt />
    <Footer
      :footer-data="THEME_SETTINGS"
    />
    <v-scroll-to-top class="to-top-btn" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomePageLayout',
  components: {
    Header: () => import('@/components/main/Header.vue'),
    Navbar: () => import('@/components/main/Navbar'),
    Footer: () => import('@/components/main/Footer')
  },
  head () {
    const canonical = `https://mysite.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: './img/logotype.png' }],
      link: [{ rel: 'canonical', href: canonical }]
    }
  },
  computed: {
    ...mapGetters([
      'THEME_SETTINGS'
    ]),
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    }
  },
  mounted () {
    this.GET_THEME_SETTINGS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_THEME_SETTINGS_FROM_API'
    ]),
  }
}
</script>
<style>
</style>
