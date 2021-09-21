<template>
  <div class="col-lg-6 is-admin__half-card">
    <div class="is-admin__half-card__content">
      <h2 class="is-admin__half-card__content-title">
        Список отзывов (Всего: {{ USERS_COUNT }})
      </h2>
      <lazy-admin-dashboard-users-list
        :users-wrapper-list="USERS"
      />
      <div class="is-admin__half-card__content-buttons">
        <nuxt-link
          to="/admin/reviews"
        >
          <fai icon="users" />
          Все пользователи
        </nuxt-link>
        <nuxt-link
          v-if="this.$auth.user.role.id === '6148cb5a15248f00ca3e882a' || this.$auth.user.role.id === '6148850e4c85a4001978318f'"
          to="/admin/users/new"
        >
          <fai icon="plus" />
          Создать пользователя
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminDashboardUsers',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS',
      'USERS_COUNT'
    ])
  },
  mounted () {
    this.GET_USERS()
    this.GET_USERS_COUNT()
  },
  methods: {
    ...mapActions([
      'GET_USERS',
      'GET_USERS_COUNT'
    ])
  }
}
</script>

<style lang="scss">
.is-admin {
  &__half-card {
    padding: 1rem;
    height: 100%;
    display: flex;
    &__content {
      height: 100%;
      width: 100%;
      padding: 1rem;
      -webkit-box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
      -moz-box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
      box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
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
