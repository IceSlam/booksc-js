<template>
  <main>
    <BreadcrumbsCategory
      :breadcrumbs-page-title="pageMetaTitle"
    />
    <section id="services-list" class="is_main-services-list">
      <b-container>
        <b-row>
          <b-col
            v-for="service in getServices"
            :key="service._id"
            md="12"
          >
            <div class="d-flex justify-content-between align-items-center px-3 service-card">
              <h3 class="service-title mb-0">
                {{ service.page_title }}
              </h3>
              <p class="service-price font-weight-bold text-uppercase">
                {{ service.min_price }}
                <i class="fas fa-ruble-sign" />
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ServicesCategoryPage',
  components: {
    BreadcrumbsCategory: () => import('@/components/main/BreadcrumbsCategory')
  },
  layout: 'category',
  data () {
    return {
      pageMetaTitle: ''
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
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logotype.png' }]
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
    getServices () {
      return this.CATEGORIES.find(e => e.category_slug === this.$route.params.slug).services
    }
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

<style scoped>
.service-card {
  border: 1px solid #dedede;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #F5F5F5;
  margin-bottom: 1rem;
}
.service-price {
  font-size: 1.25rem;
}
.service-price i {
  font-size: 1rem;
}
</style>
