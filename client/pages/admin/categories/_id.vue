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
            to="/admin/categories"
          >
            <fai icon="th-list" />
            Категории услуг
          </nuxt-link>
        </li>
        <li >
          Категория: {{ categoriesItemData.category_name }}
        </li>
      </ul>
    </div>
    <div class="col-lg-12 is-services-item__header">
      <h2 class="is-admin__title">
        <i :class="itemData.category_icon + ' ms-2 me-1'" />{{ itemData.category_name }}
        <span class="ms-2">
          {{ categoriesItemData.category_longtitle }}
        </span>
      </h2>
      <div class="is-services-item__header-buttons">
        <a @click="$router.go(-1)" class="btn cancel">
          <fai icon="times" />
        </a>
        <button @click.prevent="itemDelete" class="btn delete">
          <fai icon="trash" />
        </button>
        <a @click.prevent="uploadFiles" class="btn save">
          <fai icon="save" />
          Сохранить
        </a>
      </div>
    </div>
    <form id="categories-form" class="is-services-item__form row">
      <div class="col-lg-12">
        <div class="is-services-item__form__title">
          Основное
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="category-name">
            Название категории
          </label>
          <input
            @input="slugTranslit()"
            id="category-name"
            type="text"
            v-model="itemData.category_name"
          >
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="category-longtitle">
            Расширенное название категории
          </label>
          <input id="category-longtitle" type="text" v-model="itemData.category_longtitle">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label for="category-img">
            Изображение (/api{{ itemData.category_image.url }})
          </label>
          <input id="category-img" type="file" >
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="form-group d-flex"
        >

          <div class="form-group">
            <label for="category-icon">
              Иконка FontAwesome
            </label>
            <input id="category-icon" type="text" v-model="itemData.category_icon">
          </div>
          <div class="form-group">
            <label for="category-slug">
              Алиас
            </label>
            <input id="category-slug" type="text" v-model="itemData.category_slug">
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
import yaTranslit from 'yandex.translit'

export default {
  name: 'AdminServicesItemPage',
  layout: 'admin',
  data () {
    return {
      title: 'Информация об услуге',
      itemData: '',
      file: ''
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ]),
    categoriesItemData () {
      let itemContent = {}
      const vm = this
      this.CATEGORIES.map(function (item) {
        if (item.id === vm.$route.params.id) {
          itemContent = item
          vm.itemData = item
          vm.title = item.category_name
        }
      })
      return itemContent
    }
  },
  mounted () {
    this.GET_CATEGORIES()
  },
  methods: {
    ...mapActions([
      'GET_CATEGORIES',
    ]),
    async itemDelete () {
      await this.$axios.$delete('/api/categories/' + this.itemData.id, {})
        .then((response) => {
          this.$router.push('./')
          this.$toast.global.successful_deletion()
        }, (error) => {
          console.log(error)
          this.$toast.global.errored_deletion()
        })
    },
    async itemUpdate () {
      await this.$axios.$put('/api/categories/' + this.itemData.id, this.itemData)
        .then((response) => {
          this.$toast.global.successful_updated()
        }, (error) => {
          this.$toast.global.errored_update()
        })
    },
    slugTranslit () {
      let text = yaTranslit(this.itemData.category_name)
      this.itemData.category_slug = text
    }
  },
  head () {
    return {
      title: this.title,
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `Book-Service | Информация о категории ${titleChunk}` : 'Сеть сервисных центров Book-Service';
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
