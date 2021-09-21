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
      <div class="col-lg-12">
        <h2 class="is-admin__title">
          Список услуг
        </h2>
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
    }
  }
}
</style>
