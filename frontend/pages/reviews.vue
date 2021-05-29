<template>
  <main>
    <Breadcrumbs
      :breadcrumbs-page-title="pageMetaTitle"
    />
    <section
      class="content-section main-section"
    >
      <b-container>
        <Reviews
          :reviews-data="REVIEWS"
        />
      </b-container>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Breadcrumbs from '@/components/main/Breadcrumbs'
import Reviews from '@/components/reviews/Reviews'

export default {
  name: 'ReviewsPage',
  components: {
    Breadcrumbs,
    Reviews
  },
  layout: 'pages',
  data () {
    return {
      pageMetaTitle: 'Отзывы клиентов'
    }
  },
  head () {
    return {
      title: 'Отзывы клиентов - Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './img/logotype.png' }]
    }
  },
  computed: {
    ...mapGetters([
      'REVIEWS'
    ])
  },
  mounted () {
    this.GET_REVIEWS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_REVIEWS_FROM_API'
    ])
  }
}
</script>

<style scoped>
.content-section {
  padding: 3rem 0;
}
</style>
