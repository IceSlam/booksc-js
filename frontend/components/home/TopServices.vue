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
          v-for="card in TOP_SERVICES"
          :key="card.id"
          :top-services-card-data="card"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TopServices',
  components: {
    TopServicesCard: () => import('@/components/home/TopServicesCard')
  },
  computed: {
    ...mapGetters([
      'TOP_SERVICES'
    ])
  },
  mounted () {
    this.GET_TOP_SERVICES_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_TOP_SERVICES_FROM_API'
    ])
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
