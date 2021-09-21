<template>
  <div class="col-lg-12 is-services__list">
    <div class="row">
      <div class="col-lg-1">
        <h3 class="is-services__list__col-title">
          ID
        </h3>
      </div>
      <div class="col-lg-2">
        <h3 class="is-services__list__col-title">
          Автор отзыва
        </h3>
      </div>
      <div class="col-lg-4">
        <h3 class="is-services__list__col-title">
          Текст отзыва
        </h3>
      </div>
      <div class="col-lg-2">
        <h3 class="is-services__list__col-title">
          Филиал
        </h3>
      </div>
      <div class="col-lg-1 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Оценка
        </h3>
      </div>
      <div class="col-lg-2 is-reviews__list__col center">
        <h3 class="is-services__list__col-title">
          Дата добавления
        </h3>
      </div>
    </div>
    <lazy-admin-reviews-item
      v-for="review in ReviewsList"
      :key="review.id"
      :reviews-item="review"
      @viewItem="viewItem"
    />
    <div class="row">
      <div class="col-lg-12">
        <p class="is-services__list__count">
          <span>Всего услуг: </span>{{ this.REVIEWS_COUNT }}
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
    ReviewsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$router.push('/admin/reviews/' + id)
    },
    ...mapActions([
      'GET_REVIEWS',
      'GET_REVIEWS_COUNT'
    ])
  },
  computed: {
    ...mapGetters([
      'REVIEWS',
      'REVIEWS_COUNT'
    ])
  },
  mounted () {
    this.GET_REVIEWS()
    this.GET_REVIEWS_COUNT()
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
