<template>
  <main class="services-page">
    <Breadcrumbs
      :breadcrumbs-page-title="pageMetaTitle"
    />
    <section id="services-list" class="is_main-services-list main-section">
      <b-container>
        <ServicesList
          v-if="CATEGORIES.length"
          :services-data="CATEGORIES"
        />
        <b-row v-else>
          <LoadAnimation
            v-for="cat in 9"
            :key="cat"
          />
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ServicesPage',
  components: {
    Breadcrumbs: () => import('@/components/main/Breadcrumbs'),
    ServicesList: () => import('@/components/services/ServicesList'),
    LoadAnimation: () => import('@/components/main/LoadAnimation')
  },
  layout: 'pages',
  data () {
    return {
      pageMetaTitle: 'Услуги и цены'
    }
  },
  head () {
    return {
      title: 'Услуги и цены - Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Услуги ремонта цифровой техники, техники Apple и IQOS, телефонов, смартфонов, планшетов, ноутбуков и персональных компьютеров, мониторов и LED-телевизоров и многое другое, а также продажа аксессуаров и запчастей для цифровой техники'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logotype.png' }]
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  },
  mounted () {
    this.GET_CATEGORIES_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES_FROM_API'
    ])
  }
}
</script>

<style>
.services-page .load-block {
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  padding: 0 1.5rem;
}
.services-page .load-block .load-animation {
  min-height: 400px;
}
</style>
