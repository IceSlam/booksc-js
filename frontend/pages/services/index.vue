<template>
  <transition name="page">
    <main>
      <Breadcrumbs
        :breadcrumbs-page-title="pageMetaTitle"
      />
      <section id="services-list" class="is_main-services-list main">
        <b-container>
          <ServicesList
            :services-data="CATEGORIES"
          />
        </b-container>
      </section>
    </main>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Breadcrumbs from '@/components/main/Breadcrumbs'
import ServicesList from '@/components/services/ServicesList'

export default {
  name: 'ServicesPage',
  components: {
    Breadcrumbs,
    ServicesList
  },
  layout: 'services',
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
.my-page-enter-active,
.my-page-leave-active {
  transition: opacity 0.5s;
}
.my-page-enter,
.my-page-leave-to {
  opacity: 0;
}
</style>
