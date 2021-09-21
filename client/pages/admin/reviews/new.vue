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
            to="/admin/reviews"
          >
            <fai icon="binoculars" />
            Отзывы
          </nuxt-link>
        </li>
        <li >
          Новый отзыв от {{ itemData.reviewer_name }} <span class="category">[{{ itemData.branch_office }}]</span>
        </li>
      </ul>
    </div>
    <div class="col-lg-12 is-services-item__header">
      <h2 class="is-admin__title">
        Отзыв от {{ itemData.reviewer_name }}
        <span>
          Филиал: {{ itemData.branch_office }}
        </span>
      </h2>
      <div class="is-services-item__header-buttons">
        <a @click="$router.go(-1)" class="btn cancel">
          <fai icon="times" />
        </a>
        <a @click.prevent="itemCreate" class="btn save">
          <fai icon="save" />
          Добавить
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
          <label for="reviewer-name">
            Автор отзыва
          </label>
          <input id="reviewer-name" type="text" v-model="itemData.reviewer_name">
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="form-group"
        >
          <label
            for="branch-office">
            Филиал: {{ itemData.branch_office }}
          </label>
          <select
            id="branch-office"
            v-model="itemData.branch_office"
          >
            <option
              disabled
              selected
              :value="itemData.branch_office"
            >
              Текущий филиал: {{ itemData.branch_office }}
            </option>
            <option
              value="Book-Service Красноармейская"
            >
              Book-Service Красноармейская
            </option>
            <option
              value="Book-Service ТД Весна"
            >
              Book-Service ТД Весна
            </option>
          </select>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="review-info">
            Текст отзыва
          </label>
          <textarea
            id="review-info"
            type="text"
            v-model="itemData.review_info"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="form-group"
        >
          <label
            for="review-rating">
            Рейтинг: {{ itemData.review_rating }} <fai icon="star" />
          </label>
          <select
            id="review-rating"
            v-model="itemData.review_rating"
          >
            <option
              disabled
              selected
              :value="itemData.review_rating"
            >
              Текущий рейтинг: {{ itemData.review_rating }} <fai icon="star" />
            </option>
            <option
              value="1"
            >
              1 <fai icon="star" />
            </option>
            <option
              value="2"
            >
              2 <fai icon="star" />
            </option>
            <option
              value="3"
            >
              3 <fai icon="star" />
            </option>
            <option
              value="4"
            >
              4 <fai icon="star" />
            </option>
            <option
              value="5"
            >
              5 <fai icon="star" />
            </option>
          </select>
        </div>
        <div class="form-group">
          <label
            for="review-date">
            Дата публикации: {{ $moment(itemData.review_date).formatWithJDF("dd. MM. yyyy") }}
          </label>
          <input
            id="review-date"
            type="date"
            v-model:value="itemData.review_date"
          >
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AdminServicesItemCreatePage',
  layout: 'admin',
  data () {
    return {
      title: 'Новый отзыв',
      itemData: {
        reviewer_name: '',
        branch_office: '',
        review_info: '',
        review_rating: '',
        review_date: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'REVIEWS'
    ])
  },
  mounted () {
    this.GET_REVIEWS()
  },
  methods: {
    ...mapActions([
      'GET_REVIEWS',
    ]),
    async itemCreate () {
      await this.$axios.$post('/api/reviews/', this.itemData)
        .then((response) => {
          this.$toast.global.successful_created()
          this.$router.push('./' + response.id)
          console.log(response)
        }, (error) => {
          this.$toast.global.errored_creation()
        })
    }
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
