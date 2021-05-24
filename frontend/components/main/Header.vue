<template>
  <header
    v-if="headerData"
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
            v-if="headerData.settings_logo"
            :src="'https://api.booksc.ru' + headerData.settings_logo.url"
            class="img-fluid is_main-header-img"
            alt=""
          >
          <h1 class="display-4 font-weight-bold text-uppercase text-white">
            {{ headerData.settings_title }}
          </h1>
          <h2 class="h3-responsive text-uppercase is_main-header-h2 text-white">
            {{ headerData.settings_subtitle }}
          </h2>
          <h3 class="is_main-header-caption d-block mx-auto text-white">
            {{ headerData.settings_description }}
          </h3>
          <i class="fas fa-chevron-down fa-3x header-arrow" />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>

</style>
