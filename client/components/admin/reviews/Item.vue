<template>
  <div
    class="row"
    @click.prevent="viewItem()"
  >
    <div class="col-lg-1 is-reviews__list__col">
      <h4 class="is-reviews__list__col-item id">
        {{ ReviewsItem.id.slice(0,10) }}
      </h4>
    </div>
    <div class="col-lg-2 is-reviews__list__col">
      <h4 class="is-reviews__list__col-item name">
        <div v-if="ReviewsItem.reviewer_avatar" class="avatar" :style="'background: url(' + ReviewsItem.reviewer_avatar + ');'" />
        <div v-else class="avatar" style="background: url(https://erastech.com/wp-content/uploads/2015/08/placeholder_male1.jpg);" />
        {{ ReviewsItem.reviewer_name.slice(0,30) }}
      </h4>
    </div>
    <div class="col-lg-4 is-reviews__list__col">
      <h4 class="is-reviews__list__col-item info">
        {{ ReviewsItem.review_info.slice(0,100) }}...
      </h4>
    </div>
    <div class="col-lg-2 is-reviews__list__col">
      <h4 class="is-reviews__list__col-item price">
        {{ ReviewsItem.branch_office }}
      </h4>
    </div>
    <div class="col-lg-1 is-reviews__list__col center">
      <h4 class="is-reviews__list__col-item category">
        {{ ReviewsItem.review_rating }} <fai icon="star" />
      </h4>
    </div>
    <div class="col-lg-2 is-reviews__list__col center">
      <h4 class="is-reviews__list__col-item date">
        {{ $moment(ReviewsItem.review_date).formatWithJDF("dd.MM.yyyy") }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminReviewsItem',
  data () {
    return {}
  },
  props: {
    ReviewsItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$emit('viewItem', this.ReviewsItem.id)
    }
  }
}
</script>

<style lang="scss">
.layout {
  &.admin {
    .wrapper {
      .is-admin {
        &.is-reviews {
          .is-reviews {
            &__list {
              &__col {
                display: flex;
                align-items: center;
                &:first-child {
                  justify-content: center;
                }
                &.center {
                  justify-content: center;
                }
                &-item {
                  display: flex;
                  align-items: center;
                  padding: .25rem;
                  &.name {
                    .avatar {
                      display: block;
                      width: 32px;
                      height: 32px;
                      background-position: center !important;
                      background-repeat: no-repeat !important;
                      -webkit-background-size: cover !important;
                      background-size: cover !important;
                      -webkit-border-radius: 5px;
                      -moz-border-radius: 5px;
                      border-radius: 5px;
                      margin-right: .5rem;
                    }
                  }
                  &.info {
                    font-weight: 500;
                    padding: 0 1.5rem 0 0;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
