<template>
  <div>
    <article id="content" class="is_main-content wow fadeIn " data-wow-duration="1s">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import WhyWe from '@/components/home/WhyWe'
import SocialWidgets from '@/components/home/social'
import Brands from '@/components/home/Brands'
import TopServices from '@/components/home/TopServices'
import NewGoods from '@/components/home/NewGoods'
import ReviewsHome from '@/components/home/ReviewsHome'

export default {
  name: 'IndexPage',
  components: {
    WhyWe,
    SocialWidgets,
    Brands,
    TopServices,
    NewGoods,
    ReviewsHome
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
