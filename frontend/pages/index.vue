<template>
  <article id="content" class="is_main-content">
    <WhyWe
      :why-we-data="HOMEPAGE"
    />
    <Brands
      :brands-data="HOMEPAGE"
    />
    <TopServices />
    <ReviewsHome
      :reviews-home-data="REVIEWS"
    />
    <NewGoods
      :new-goods-data="HOMEPAGE"
    />
    <SocialWidgets />
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    WhyWe: () => import('@/components/home/WhyWe'),
    SocialWidgets: () => import('@/components/home/social'),
    Brands: () => import('@/components/home/Brands'),
    TopServices: () => import('@/components/home/TopServices'),
    NewGoods: () => import('@/components/home/NewGoods'),
    ReviewsHome: () => import('@/components/home/ReviewsHome')
  },
  layout: 'homepage',
  data () {
    return {
      PageTitle: '',
      show: true
    }
  },
  head () {
    return {
      title: 'Сеть сервисных центров Book-Service',
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
      'HOMEPAGE',
      'REVIEWS'
    ])
  },
  mounted () {
    this.GET_HOMEPAGE_FROM_API()
    this.GET_REVIEWS_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_HOMEPAGE_FROM_API',
      'GET_REVIEWS_FROM_API'
    ])
  }
}
</script>

<style></style>
