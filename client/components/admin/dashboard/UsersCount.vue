<template>
  <div
    v-if="this.$auth.user.role.id === '6148cb5a15248f00ca3e882a'"
    class="col-lg-3 is-admin__card"
  >
    <div class="is-admin__card-content">
      <fai icon="user" />
      <p class="is-admin__card-content__count">
        <span class="count">
          {{ USERS_COUNT }}
        </span>
        <span class="title">
          Пользователей
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminDashboardUsersCount',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'USERS_COUNT'
    ])
  },
  mounted () {
    this.GET_USERS_COUNT()
  },
  methods: {
    ...mapActions([
      'GET_USERS_COUNT'
    ])
  }
}
</script>

<style lang="scss">
.is-admin {
  &__card {
    padding: 1rem;
    &-content {
      display: flex;
      align-items: center;
      padding: 1rem;
      -webkit-box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
      -moz-box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
      box-shadow: 0 4px 15px 2px rgba(34,41,47,.1);
      svg {
        font-size: 2rem;
        display: block;
        padding: 1.5rem;
        background-color: $bsColor;
        margin-right: 1rem;
        color: #fff;
      }
      &__count {
        display: block;
        .count,
        .title {
          display: block;
        }
        .count {
          font-size: 2rem;
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          margin-bottom: .25rem;
        }
        .title {
          font-size: 1rem;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
