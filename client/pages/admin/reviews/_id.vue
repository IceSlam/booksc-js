<template>
  <section class="is-admin is-services is-services-item">
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
          <nuxt-link
            to="/admin/services"
          >
            <fai icon="binoculars" />
            Отзывы
          </nuxt-link>
        </li>
        <li >
          Отзыв от {{ reviewsItemData.reviewer_name }} <span class="category">[{{ reviewsItemData.branch_office }}]</span>
        </li>
      </ul>
    </div>
    <div class="col-lg-12 is-services-item__header">
      <h2 class="is-admin__title">
<!--        {{ servicesItemData.page_title }}-->
        <span>
          Информация об услуге
        </span>
      </h2>
      <div class="is-services-item__header-buttons">
        <a @click="$router.go(-1)" class="btn cancel">
          <fai icon="times" />
        </a>
        <button @click.prevent="itemDelete" class="btn delete">
          <fai icon="trash" />
        </button>
        <a @click.prevent="itemUpdate" class="btn save">
          <fai icon="save" />
          Сохранить
        </a>
      </div>
    </div>
    <form class="is-services-item__form row">
      <div class="col-lg-12">
        <div class="is-services-item__form__title">
          Основное
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="page-title">
            Название услуги
          </label>
          <input id="page-title" type="text" v-model="itemData.page_title">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="long-title">
            Расширенное название услуги
          </label>
          <input id="long-title" type="text" v-model="itemData.page_longtitle">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="page-description">
            Описание услуги
          </label>
          <textarea id="page-description" type="text" v-model="itemData.page_description" />
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="form-group"
        >
          <label
            v-if="itemData.services_cat"
            for="service-category">
            Категория: {{ itemData.services_cat.category_name }}
          </label>
          <select
            v-if="itemData.services_cat"
            id="service-category"
            v-model="itemData.services_cat"
          >
            <option
              disabled
              selected
              :value="itemData.services_cat.category_name"
            >
              Текущая категория: {{ itemData.services_cat.category_name }}
            </option>
            <option
              v-for="category in CATEGORIES"
              :key="category.id"
              :value="category.id"
            >
              {{ category.category_name }}
            </option>
          </select>
        </div>
        <div class="form-group d-flex">
          <div class="form-group">
            <label for="min-price">
              Мнимальная цена ( <fai icon="ruble-sign" /> )
            </label>
            <input id="min-price" type="text" v-model="itemData.min_price">

          </div>
          <div class="form-group checkbox">
            <p class="label">
              Популярная услуга?
            </p>
            <input id="is-popular" type="checkbox" v-model="itemData.is_popular">
            <label for="is-popular" />
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="is-services-item__form__title">
          SEO
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="meta-title">
            Meta-заголовок
          </label>
          <input id="meta-title" type="text" v-model="itemData.meta_title">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="meta-keywords">
            Ключевые слова
          </label>
          <input id="meta-keywords" type="text" v-model="itemData.meta_keywords">
        </div>
      </div>
      <div class="col-lg-12">
        <div class="form-group">
          <label for="meta-description">
            Meta-описание
          </label>
          <textarea id="meta-description" type="text" v-model="itemData.meta_description" />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
const vm = this

export default {
  name: 'AdminServicesItemPage',
  layout: 'admin',
  data () {
    return {
      title: 'Информация об услуге',
      itemData: ''
    }
  },
  computed: {
    ...mapGetters([
      'REVIEWS'
    ]),
    reviewsItemData () {
      let itemContent = {}
      const vm = this
      this.REVIEWS.map(function (item) {
        if (item.id === vm.$route.params.id) {
          itemContent = item
          vm.itemData = item
          vm.title = item.reviewer_name
        }
      })
      return itemContent
    }
  },
  mounted () {
    this.GET_REVIEWS()
  },
  methods: {
    ...mapActions([
      'GET_REVIEWS',
    ]),
    async itemDelete () {
      await this.$axios.$delete('/api/reviews/' + this.itemData.id, {})
        .then((response) => {
          this.$router.push('./')
          this.$toast.global.successful_deletion()
        }, (error) => {
          console.log(error)
          this.$toast.global.errored_deletion()
        })
    },
    async itemUpdate () {
      const vm = this;
      await this.$axios.$put('/api/reviews/' + this.itemData.id, this.itemData)
        .then((response) => {
          this.$toast.global.successful_updated()
        }, (error) => {
          this.$toast.global.errored_update()
        })
    }
  },
  head () {
    return {
      title: this.title,
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `Book-Service | Отзыв от ${titleChunk}` : 'Сеть сервисных центров Book-Service';
      }
    }
  }
}
</script>

<style lang="scss">
.is-admin {
  &.is-services {
    &.is-services-item {
      .is-admin {
        &__title {
          margin: .25rem 0 1rem;
          span {
            display: block;
            font-size: 1rem;
            text-transform: uppercase;
            color: #888;
          }
        }
      }
      .is-services-item {
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
              &.cancel {
                cursor: pointer;
                &:hover {
                  background-color: $bsColor;
                  color: #fff;
                }
              }
              &.delete {
                color: #fff;
                background-color: $bsColor;
                cursor: pointer;
                &:hover {
                  background-color: transparent;
                  color: $bsColor;
                }
              }
              &.save {
                color: #fff;
                border-color: #228b22;
                background-color: #228b22;
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
                  color: #228b22;
                  background-color: transparent;
                }
              }
            }
          }
        }
        &__form {
          margin-top: 1.5rem;
          &__title {
            font-family: 'Rubik', 'Open Sans', sans-serif;
            font-size: 1.25rem;
            color: $bsColor;
            font-weight: 500;
            margin-bottom: 1rem;
            margin-left: 1rem;
          }
          .form-group {
            display: block;
            padding: 0 1rem 2rem;
            .form-group {
              padding: 0;
              margin-right: 2rem;
            }
            label,
            input,
            select {
              display: block;
              width: 100%;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
            label {
              font-family: 'Open Sans', sans-serif;
              font-size: 1rem;
              font-weight: 600;
              margin-bottom: .5rem;
            }
            input {
              border: 2px solid $bsColor;
              padding: 1rem;
              outline: none;
              font-weight: 600;
              font-size: 1.125rem;
              font-family: 'Open Sans', sans-serif;
            }
            textarea {
              outline: none;
              border: 2px solid $bsColor;
              width: 100%;
              -webkit-box-sizing: border-box;
              min-height: 183px;
              padding: 1rem;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
              font-weight: 600;
              &:focus {
                border: 2px solid black;
              }
            }
            select {
              border: 2px solid $bsColor;
              height: 64px;
              padding: 1rem;
              font-weight: 600;
              option {
                background-color: #fff;
                padding: 1rem;
              }
            }
            &.checkbox {
              position: relative;
              .label {
                font-family: 'Open Sans', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: .5rem;
                margin-top: 0;
              }
              input {
                position: absolute;
                top: 2rem;
                left: 0;
                width: 150px;
                opacity: 0;
                height: 32px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                cursor: pointer;
                &:checked {
                  & + label {
                    cursor: pointer;
                    &:before {
                      transform: translateX(73px);
                      content: 'I';
                      transition: all .3s;
                      cursor: pointer;
                    }
                  }
                }
              }
              label {
                width: 150px;
                height: 60px;
                display: block;
                border: 2px solid $bsColor;
                cursor: pointer;
                &:before {
                  content: 'O';
                  font-size: 2rem;
                  align-items: center;
                  justify-content: center;
                  font-weight: 700;
                  font-family: 'Rubik', 'Open Sans', sans-serif;
                  color: #fff;
                  display: flex;
                  height: 56px;
                  width: 73px;
                  background-color: $bsColor;
                  transition: all .3s;
                  cursor: pointer;
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
