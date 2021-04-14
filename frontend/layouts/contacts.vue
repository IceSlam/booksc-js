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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import SocialWidgets from '@/components/home/social'

export default {
  name: 'Contacts',
  components: {
    SocialWidgets,
    Navbar,
    Footer
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
