<template>
  <section id="top" class="is_main-top main-section">
    <b-container>
      <h2 class="is_main-top-title text-center text-uppercase mb-5">
        Наши услуги
      </h2>
      <h4>
        Наши популярные услуги
      </h4>
      <b-row>
        <TopServicesCard
          v-for="card in TopServicesData"
          :key="card.id"
          :top-services-card-data="card"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'TopServices',
  components: {
    TopServicesCard: () => import('@/components/home/TopServicesCard')
  },
  props: {
    TopServicesData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.is_main-top-title {
  margin-bottom: .5rem !important;
}
h4 {
  text-align: center;
  margin-top: 0;
}
</style>
