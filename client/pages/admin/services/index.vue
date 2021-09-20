<template>
  <section class="is-admin is-services container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="is-admin__title">
          Список услуг
        </h2>
      </div>
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
        <div
          v-for="service in SERVICES"
          :key="service.createdAt"
          class="row"
        >
          <div class="col-lg-1">
            <h4 class="is-services__list__col-item id">
              {{ service.id.slice(0,10) }}
            </h4>
          </div>
          <div class="col-lg-5">
            <h4 class="is-services__list__col-item name">
              {{ service.page_title }}
            </h4>
          </div>
          <div class="col-lg-2">
            <h4 class="is-services__list__col-item price">
              {{ service.min_price }}<fai icon="ruble-sign" />
            </h4>
          </div>
          <div class="col-lg-2">
            <h4 class="is-services__list__col-item category">
              {{ service.services_cat.category_name }}
            </h4>
          </div>
          <div class="col-lg-2">
            <h4 class="is-services__list__col-item date">
              {{ service.createdAt }}
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p class="is-services__list__count">
              <span>Всего услуг: </span>{{ this.$store.state.servicesCount.servicesCount }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'AdminServicesPage',
  layout: 'admin',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'SERVICES'
    ])
  },
  mounted () {
    this.GET_SERVICES()
  },
  methods: {
    ...mapActions([
      'GET_SERVICES'
    ])
  }
}
</script>

<style lang="scss">
.is-admin {
  &.is-services {
    .is-services {
      &__list {
        &__col {
          &-title {}
          &-item {
            padding: .125rem .5rem;
            &.id {}
            &.name {
              font-weight: 400;
            }
          }
        }
        &__count {
          font-weight: 600;
          span {
            font-weight: 400;
          }
        }
        .row {
          background-color: #f7f7f7;
          margin-bottom: .5rem;
          transition: all .3s;
          cursor: pointer;
          &:hover {
            background-color: #f0f0f0;
            transition: all .3s
          }
          &:first-child,
          &:last-child {
            background-color: transparent;
            cursor: inherit;
          }
        }
      }
    }
  }
}
</style>
