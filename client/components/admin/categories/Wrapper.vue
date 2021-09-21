<template>
  <div class="col-lg-12 is-services__list">
    <div class="row">
      <div class="col-lg-1">
        <h3 class="is-services__list__col-title">
          ID
        </h3>
      </div>
      <div class="col-lg-3">
        <h3 class="is-services__list__col-title">
          Название категории
        </h3>
      </div>
      <div class="col-lg-2 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Изображение
        </h3>
      </div>
      <div class="col-lg-1 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Иконка FA
        </h3>
      </div>
      <div class="col-lg-2 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Количество услуг
        </h3>
      </div>
      <div class="col-lg-1 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Алиас
        </h3>
      </div>
      <div class="col-lg-2 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Дата добавления
        </h3>
      </div>
    </div>
    <lazy-admin-categories-item
      v-for="review in CategoriesList"
      :key="review.id"
      :categories-item="review"
      @viewItem="viewItem"
    />
    <div class="row">
      <div class="col-lg-12">
        <p class="is-services__list__count">
          <span>Всего категорий: </span>{{ this.CATEGORIES_COUNT }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminReviewsWrapper',
  data () {
    return {}
  },
  props: {
    CategoriesList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$router.push('/admin/categories/' + id)
    },
    ...mapActions([
      'GET_CATEGORIES',
      'GET_CATEGORIES_COUNT'
    ])
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
  }
}
</script>

<style lang="scss">
.is-reviews {
  &__list {
    &__col {
      &.center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
