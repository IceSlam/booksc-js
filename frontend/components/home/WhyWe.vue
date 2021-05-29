<template>
  <section id="whywe" class="is_main-whywe main-section">
    <b-container>
      <b-row
        v-if="whyWeData.homepage_why_we"
        class="justify-content-center"
      >
        <h2 class="h2-resposive is_main-whywe-h2 text-center text-uppercase">
          {{ whyWeData.homepage_why_we.block_title }}
        </h2>
        <p class="is_main-whywe-title-caption d-block mx-auto">
          {{ whyWeData.homepage_why_we.block_description }}
        </p>
      </b-row>
      <br>
      <b-row
        v-if="whyWeData.homepage_advantages"
      >
        <b-col
          v-for="item in whyWeData.homepage_advantages"
          :key="item.id"
          md="4"
        >
          <b-card
            class="is_main-whywe-card"
          >
            <h3 class="is_main-whywe-card-ititle">
              {{ item.advantage_count }}<sup>+</sup>
            </h3>
            <h4 class="card-title">
              {{ item.advantage_title }}
            </h4>
            <b-card-text>
              {{ item.advantage_description }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'WhyWe',
  props: {
    whyWeData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>
</style>
