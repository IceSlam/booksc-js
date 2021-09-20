<template>
  <div class="col-lg-6 is-admin__half-card">
    <div class="is-admin__half-card__content">
      <h2 class="is-admin__half-card__content-title">
        Список услуг (Всего: {{ this.$store.state.servicesCount.servicesCount }})
      </h2>
      <ul class="is-admin__half-card__content-list">
        <nuxt-link
          to="/admin/services/view"
          tag="li"
          v-for="service in SERVICES.slice(0,5)"
          :key="service.id"
        >
          <span class="name">
            {{ service.page_title.slice(0,40) }}... ({{ service.min_price }} <fai icon="ruble-sign" />)
          </span>
          <span class="category">
            {{ service.services_cat.category_name }}
          </span>
        </nuxt-link>
      </ul>
      <div class="is-admin__half-card__content-buttons">
        <nuxt-link
          to="/admin/services"
        >
          <fai icon="stream" />
          Все услуги
        </nuxt-link>
        <nuxt-link
          v-if="this.$auth.user.role.id === '6148cb5a15248f00ca3e882a' || this.$auth.user.role.id === '6148850e4c85a4001978318f'"
          to="/admin/services/new"
        >
          <fai icon="plus" />
          Добавить услугу
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminDashboardServices',
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
  &__half-card {
    &__content {
      &-title {
        font-family: 'Rubik', 'SansSerif', sans-serif;
        font-size: 1.5rem;
        font-weight: 500;
        color: #333;
        margin: 0;
      }
      &-list {
        list-style-type: none;
        margin: 0;
        padding-top: 1rem;
        padding-left: 0;
        li {
          padding: .5rem;
          margin-bottom: .5rem;
          background-color: #f6f6f6;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            background-color: #f0f0f0;
            transition: all .3s;
          }
          &:last-child {
            margin-bottom: 0;
          }
          .name {
            display: flex;
            align-items: center;
            font-weight: 600;
            font-family: 'Open Sans', sans-serif;
            color: #333;
            .avatar {
              width: 48px;
              height: 48px;
              background-repeat: no-repeat !important;
              background-position: center !important;
              -webkit-background-size: cover !important;
              background-size: cover !important;
              display: block;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              margin-right: .5rem;
            }
          }
          .category {
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            color: #333;
          }
        }
      }
      &-buttons {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          padding: 1rem;
          text-decoration: none;
          background-color: $bsColor;
          border: 2px solid $bsColor;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
          transition: all .3s;
          &:hover {
            background-color: #fff;
            color: $bsColor;
            transition: all .3s;
          }
          &:first-child {
            background-color: #fff;
            color: $bsColor;
            transition: all .3s;
            &:hover {
              background-color: $bsColor;
              color: #fff;
              transition: all .3s;
            }
          }
        }
      }
    }
  }
}
</style>
