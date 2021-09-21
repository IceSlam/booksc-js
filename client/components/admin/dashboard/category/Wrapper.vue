<template>
  <div class="col-lg-6 is-admin__half-card">
    <div class="is-admin__half-card__content">
      <h2 class="is-admin__half-card__content-title">
        Список категорий (Всего: {{ CATEGORIES_COUNT }})
      </h2>
      <lazy-admin-dashboard-category-list
        :categories-wrapper-list="CATEGORIES"
      />
      <div class="is-admin__half-card__content-buttons">
        <nuxt-link
          to="/admin/categories"
        >
          <fai icon="th-list" />
          Все категории
        </nuxt-link>
        <nuxt-link
          v-if="this.$auth.user.role.id === '6148cb5a15248f00ca3e882a' || this.$auth.user.role.id === '6148850e4c85a4001978318f'"
          to="/admin/categories/new"
        >
          <fai icon="plus" />
          Добавить категорию
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminDashboardReviews',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
      'CATEGORIES_COUNT'
    ])
  },
  mounted () {
    this.GET_CATEGORIES()
    this.GET_CATEGORIES_COUNT()
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES',
      'GET_CATEGORIES_COUNT'
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
