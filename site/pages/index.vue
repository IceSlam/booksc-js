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
      <section id="reviews" class="is_main-reviews view">
        <div class="mask rgba-stylish-strong" />
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <center>
                <p class="is_main-reviews-icon text-center">
                  <i class="fas fa-pencil-alt text-white fa-3x" />
                </p>
              </center>
              <br>
              <center>
                <p class="is_main-reviews-text text-center ">
                  "Быстро, качественно, недорого, ребята профессионалы👍👍👍👍👍"
                </p>
              </center>
              <p class="is_main-reviews-author text-center text-white text-uppercase">
                <a href="https://yandex.ru/user/0wzqx85dnz3yehdaubgj8az940">
                  Эрнесто З.
                </a>
              </p>
              <center>
                <img style="max-height:32px;" src="~/assets/img/yandex_rating.png" alt="Рейтинг в Яндекс">
              </center>
            </div>
            <div class="carousel-item">
              <center>
                <p class="is_main-reviews-icon text-center">
                  <i class="fas fa-pencil-alt text-white fa-3x" />
                </p>
              </center>
              <br>
              <center>
                <p class="is_main-reviews-text text-center ">
                  "Быстро, недорого, качественно. Советую!👍👍👍👍👍"
                </p>
              </center>
              <p class="is_main-reviews-author text-center text-white text-uppercase">
                <a href="https://yandex.ru/user/7kadb5jr6bu7a4h0q6ka3mw18r">
                  Парфёнов В.
                </a>
              </p>
              <center>
                <img style="max-height:32px;" src="~/assets/img/yandex_rating.png" alt="Рейтинг в Яндекс">
              </center>
            </div>
            <div class="carousel-item">
              <center>
                <p class="is_main-reviews-icon text-center">
                  <i class="fas fa-pencil-alt text-white fa-3x" />
                </p>
              </center>
              <br>
              <center>
                <p class="is_main-reviews-text text-center ">
                  "Парни ремонтировали мне ноутбук,  цены приемлемые..."
                </p>
              </center>
              <p class="is_main-reviews-author text-center text-white text-uppercase">
                <a href="https://yandex.ru/user/2xz8vty1agav99910p8bczmc2c">
                  Sergey M.
                </a>
              </p>
              <center>
                <img style="max-height:32px;" src="~/assets/img/yandex_rating.png" alt="Рейтинг в Яндекс">
              </center>
            </div>
          </div>
        </div>
      </section>
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

export default {
  name: 'IndexPage',
  components: {
    WhyWe,
    SocialWidgets,
    Brands,
    TopServices,
    NewGoods
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
      'HOMEPAGE'
    ])
  },
  mounted () {
    this.GET_HOMEPAGE_FROM_API()
  },
  methods: {
    ...mapActions([
      'GET_HOMEPAGE_FROM_API'
    ])
  }
}
</script>

<style></style>
