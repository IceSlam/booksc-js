<template>
  <article id="content" class="is_main-content">
    <LazyHydrate when-idle>
      <WhyWe
        :why-we-data="HOMEPAGE"
      />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <Brands
        :brands-data="HOMEPAGE"
      />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <TopServices />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <ReviewsHome
        :reviews-home-data="REVIEWS"
      />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <NewGoods
        :new-goods-data="HOMEPAGE"
      />
    </LazyHydrate>
    <LazyHydrate when-idle>
      <SocialWidgets />
    </LazyHydrate>
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'IndexPage',
  components: {
    LazyHydrate,
    WhyWe: () => import('@/components/home/WhyWe'),
    SocialWidgets: () => import('@/components/home/social'),
    Brands: () => import('@/components/home/Brands'),
    TopServices: () => import('@/components/home/TopServices'),
    NewGoods: () => import('@/components/home/NewGoods'),
    ReviewsHome: () => import('@/components/home/ReviewsHome')
  },
  data () {
    return {
      PageTitle: ''
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
