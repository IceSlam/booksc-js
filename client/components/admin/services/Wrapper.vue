<template>
  <div class="col-lg-12 is-services__list">
    <div class="row">
      <div class="col-lg-1">
        <h3 class="is-services__list__col-title">
          ID
        </h3>
      </div>
      <div class="col-lg-5">
        <h3 class="is-services__list__col-title">
          Наименование услуги
        </h3>
      </div>
      <div class="col-lg-2">
        <h3 class="is-services__list__col-title">
          Мин. стоимость
        </h3>
      </div>
      <div class="col-lg-2">
        <h3 class="is-services__list__col-title">
          Категория
        </h3>
      </div>
      <div class="col-lg-2">
        <h3 class="is-services__list__col-title">
          Дата добавления
        </h3>
      </div>
    </div>
    <lazy-admin-services-item
      v-for="service in servicesList"
      :key="service.id"
      :services-item="service"
      @viewItem="viewItem"
    />
    <div class="row">
      <div class="col-lg-12">
        <p class="is-services__list__count">
          <span>Всего услуг: </span>{{ this.$store.state.servicesCount.servicesCount }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminServicesWrapper',
  data () {
    return {}
  },
  props: {
    servicesList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$router.push('/admin/services/' + id)
    },
    ...mapActions([
      'GET_SERVICES'
    ])
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ])
  },
  mounted () {
    this.GET_SERVICES()
  }
}
</script>

<style scoped>

</style>
