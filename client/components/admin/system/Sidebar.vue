<template>
  <aside class="is-sidebar">
    <ul class="is-sidebar__menu">
      <li>
        <nuxt-link
          exact
          to="/"
        >
          <fai icon="globe" />
          На сайт
        </nuxt-link>
      </li>
    </ul>
    <ul class="is-sidebar__menu">
      <p class="is-sidebar__menu__title">
        Основное
      </p>
      <li>
        <nuxt-link
          exact
          to="/admin"
        >
          <fai icon="chart-line" />
          Дашборд
        </nuxt-link>
      </li>
    </ul>
    <ul class="is-sidebar__menu">
      <p class="is-sidebar__menu__title">
        Коллекции
      </p>
      <li>
        <nuxt-link
          exact
          to="/admin/services"
        >
          <fai icon="stream" />
          Услуги
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/categories"
        >
          <fai icon="th-list" />
          Категории услуг
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/reviews"
        >
          <fai icon="binoculars" />
          Отзывы
        </nuxt-link>
      </li>
    </ul>
    <ul class="is-sidebar__menu">
      <p class="is-sidebar__menu__title">
        Страницы
      </p>
      <li>
        <nuxt-link
          exact
          to="/admin/homepage"
        >
          <fai icon="file" />
          Главная
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/contacts"
        >
          <fai icon="file" />
          Контакты
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/about"
        >
          <fai icon="file" />
          О нас
        </nuxt-link>
      </li>
    </ul>
    <ul class="is-sidebar__menu">
      <p class="is-sidebar__menu__title">
        Настройки
      </p>
      <li>
        <nuxt-link
          exact
          to="/admin/users"
        >
          <fai icon="users" />
          Пользователи
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/roles"
        >
          <fai icon="user-shield" />
          Права доступа
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          exact
          to="/admin/theme"
        >
          <fai icon="palette" />
          Оформление
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'AdminSystemSidebar',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.layout {
  &.admin {
    .is-sidebar {
      position: fixed;
      top: 65px;
      background-color: #f6f6f6;
      width: 224px;
      bottom: 0;
      left: 0;
      padding: 1rem;
      overflow-y: scroll;
      &__menu {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        margin-top: .5rem;
        &__title {
          margin-top: 1.5rem;
          font-family: 'Rubik', 'Open Sans', sans-serif;
          color: $bsColor;
          font-size: 1.25rem;
          margin-bottom: .5rem;
          font-weight: 600;
        }
        li {
          margin-bottom: .5rem;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          a {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 1rem;
            display: block;
            width: 100%;
            text-decoration: none;
            text-transform: uppercase;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            color: #333;
            background-color: #fff;
            transition: all .3s;
            svg {
              color: $bsColor;
              margin-right: .5rem;
            }
          }
          &:hover {
            a {
              background-color: $bsColor;
              color: #fff;
              transition: all .3s;
              svg {
                color: #fff;
              }
            }
          }
        }
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          border-bottom: none;
        }
      }
      font-family: 'Open Sans', sans-serif;
      scrollbar-width: thin;
      scrollbar-color: $bsColor #fff;
      transition: all .3s;
      &::-webkit-scrollbar {
        width: 6px !important;
        transition: all .3s;
      }
      &::-webkit-scrollbar-track {
        background-color: #fff !important;
        transition: all .3s;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $bsColor !important;
      }
      * {
        font-family: 'Open Sans', sans-serif;
      }
    }
  }
}
</style>
