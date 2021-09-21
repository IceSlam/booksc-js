<template>
  <section class="is-admin is-services container-fluid">
    <div class="col-lg-12">
      <ul class="is-admin-breadcrumbs">
        <li>
          <nuxt-link
            to="/admin"
          >
            <fai icon="home" />
            Панель управления
          </nuxt-link>
        </li>
        <li>
          <fai icon="stream" />
          Услуги
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-lg-12 is-services__header">
        <h2 class="is-admin__title">
          Список услуг
        </h2>
        <div class="is-services__header-buttons">
          <nuxt-link
            to="/admin/services/new"
            class="btn save">
            <fai icon="plus" />
            Новая услуга
          </nuxt-link>
        </div>
      </div>
      <lazy-admin-services-wrapper
        :services-list="SERVICES"
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'AdminServicesPage',
  layout: 'admin',
  data () {
    return {
      title: 'Список услуг'
    }
  },
  computed: {
    ...mapGetters([
      'SERVICES',
    ])
  },
  mounted () {
    this.GET_SERVICES()
  },
  methods: {
    ...mapActions([
      'GET_SERVICES'
    ])
  },
  head () {
    return {
      title: this.title,
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `Book-Service | ${titleChunk}` : 'Сеть сервисных центров Book-Service';
      }
    }
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
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
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
      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-buttons {
          display: flex;
          .btn {
            display: flex;
            border: 2px solid $bsColor;
            margin: .5rem .25rem;
            padding: .75rem;
            color: $bsColor;
            font-size: 1rem;
            cursor: pointer;
            &.save {
              color: #fff;
              border-color: $bsColor;
              background-color: $bsColor;
              display: flex;
              align-items: center;
              text-decoration: none;
              font-weight: 600;
              font-family: 'Open Sans', sans-serif;
              text-transform: uppercase;
              svg {
                margin-right: .5rem;
              }
              &:hover {
                color: $bsColor;
                background-color: transparent;
              }
            }
          }
        }
      }
    }
  }
}
</style>
