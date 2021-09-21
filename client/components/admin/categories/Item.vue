<template>
  <div
    class="row"
    @click.prevent="viewItem()"
  >
    <div class="col-lg-1 is-reviews__list__col align-items-center d-flex px-2">
      <h4 class="is-reviews__list__col-item id">
        {{ CategoriesItem.id.slice(0,10) }}
      </h4>
    </div>
    <div class="col-lg-3 is-reviews__list__col align-items-center d-flex px-2">
      <h4 class="is-reviews__list__col-item name">
        {{ CategoriesItem.category_name.slice(0,30) }}
      </h4>
    </div>
    <div class="col-lg-2 is-reviews__list__col">
      <div
        class="is-reviews__list__col-item cat-img"
        :style="'background: url(/api' + CategoriesItem.category_image.url + ');'"
      />
    </div>
    <div class="col-lg-1 is-reviews__list__col center" style="font-size: 2rem;">
      <i :class="CategoriesItem.category_icon + ' is-reviews__list__col-item price'" />
    </div>
    <div class="col-lg-2 is-reviews__list__col center">
      <h4 class="is-reviews__list__col-item price">
        {{ CategoriesItem.services.length }}
      </h4>
    </div>
    <div class="col-lg-1 is-reviews__list__col center">
      <h4 class="is-reviews__list__col-item category">
        {{ CategoriesItem.category_slug }}
      </h4>
    </div>
    <div class="col-lg-2 is-reviews__list__col center">
      <h4 class="is-reviews__list__col-item date">
        {{ $moment(CategoriesItem.createdAt).formatWithJDF("dd.MM.yyyy") }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminCategoriesItem',
  data () {
    return {}
  },
  props: {
    CategoriesItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$emit('viewItem', this.CategoriesItem.id)
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
.is-reviews {
  &__list {
    &__col {
      &-item {
        &.cat-img {
          display: block;
          margin: .5rem auto;
          width: 128px;
          height: 128px;
          background-position: center !important;
          background-repeat: no-repeat !important;
          -webkit-background-size: cover !important;
          background-size: cover !important;
          -webkit-border-radius: 5px;
          -moz-border-radius: 5px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
