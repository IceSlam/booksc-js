<template>
  <header
    v-if="headerInfo"
    id="header"
    class="d-flex justify-content-center align-items-center"
  >
    <b-container>
      <b-row>
        <b-col
          md="12"
          class="text-white mb-4 text-center"
        >
          <img
            v-if="headerInfo.settings_logo"
            :src="'https://api.booksc.ru' + headerInfo.settings_logo.url"
            class="img-fluid is_main-header-img"
            alt=""
          >
          <h1 class="display-4 font-weight-bold text-uppercase text-white">
            {{ headerInfo.settings_title }}
          </h1>
          <h2 class="h3-responsive text-uppercase is_main-header-h2 text-white">
            {{ headerInfo.settings_subtitle }}
          </h2>
          <h3 class="is_main-header-caption d-block mx-auto text-white">
            {{ headerInfo.settings_description }}
          </h3>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'THEME_SETTINGS'
    ]),
    headerInfo () {
      return this.$store.state.themeSettings
    }
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
