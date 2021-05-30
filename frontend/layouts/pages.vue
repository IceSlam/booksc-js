<template>
  <div>
    <Navbar
      :navbar-data="THEME_SETTINGS"
    />
    <nuxt />
    <SocialWidgets />
    <Footer
      :footer-data="THEME_SETTINGS"
    />
    <v-scroll-to-top class="to-top-btn" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PagesLayout',
  components: {
    SocialWidgets: () => import('@/components/home/social'),
    Navbar: () => import('@/components/main/Navbar'),
    Footer: () => import('@/components/main/Footer'),
    Breadcrumbs: () => import('@/components/main/Breadcrumbs')
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

<style scoped>

</style>
