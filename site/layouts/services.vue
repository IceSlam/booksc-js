<template>
  <div>
    <Navbar
      :navbar-data="THEME_SETTINGS"
    />
    <nuxt />
    <Footer
      :footer-data="THEME_SETTINGS"
    />
  </div>
</template>

<script>
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'ServicesLayout',
  components: {
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
