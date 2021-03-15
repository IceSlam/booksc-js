<template>
  <b-navbar
    v-if="navbarData"
    id="navbar"
    toggleable="lg"
    type="dark"
    class="sticky-top bs-bg"
  >
    <b-container>
      <b-navbar-brand>
        <NLink
          v-if="navbarData.settings_logo"
          class="is_main-navbar-brand"
          to="/"
          exact
        >
          <img
            class="is_main-navbar-logo"
            :src="'https://api.booksc.ru' + navbarData.settings_logo.url"
            alt="Book-Service"
          >
          Book-Service
        </NLink>
      </b-navbar-brand>
      <button class="uk-button is-menu-mobile-toggle" type="button" uk-toggle="target: #mobile-sidebar-overlay">
        <i class="fas fa-bars" />
      </button>
      <div id="mobile-sidebar-overlay" class="is-mobile-sidebar-overlay" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar is-mobile-sidebar">
          <button class="uk-offcanvas-close" type="button" uk-close />
          <img
            src="/img/logotype.png"
            alt="Book-Service"
            style="max-width: 50%;"
          >
          <h3 class="is-mobile-sidebar-title">
            Book-Service
          </h3>
          <h4 class="is-mobile-sidebar-subtitle text-uppercase">
            Сеть сервисных центров
          </h4>
          <b-navbar-nav
            class="mr-auto is_main-navbar-menu mobile text-left mt-4"
          >
            <b-nav-item
              to="/"
              exact
            >
              Главная
            </b-nav-item>
            <b-nav-item
              to="/services"
            >
              Услуги и цены
            </b-nav-item>
            <b-nav-item
              href="https://bookparts.ru/"
              target="_blank"
            >
              Магазин
            </b-nav-item>
            <b-nav-item
              to="/contacts"
            >
              Контакты
            </b-nav-item>
          </b-navbar-nav>
          <hr class="clearfix w-100 d-md-none">
          <div class="d-flex justify-content-around">
            <a
              class="item"
              href="https://vk.com/bookservice"
              target="_blank"
            >
              <i class="fab fa-vk" />
            </a>
            <a
              class="item"
              href="https://instagram.com/bookservice32"
              target="_blank"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="item"
              href="https://yandex.ru/profile/224999423360"
              target="_blank"
            >
              <i class="fab fa-yandex" />
            </a>
          </div>
        </div>
      </div>
      <b-collapse
        id="navbar-menu"
        is-nav
      >
        <b-navbar-nav
          class="mr-auto is_main-navbar-menu text-center"
        >
          <b-nav-item
            to="/"
            exact
          >
            Главная
          </b-nav-item>
          <b-nav-item
            to="/services"
          >
            Услуги и цены
          </b-nav-item>
          <b-nav-item
            href="https://bookparts.ru/"
            target="_blank"
          >
            Магазин
          </b-nav-item>
          <b-nav-item
            to="/contacts"
          >
            Контакты
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav
          class="ml-auto is_main-navbar-menu d-flex justify-content-center social"
        >
          <b-nav-item
            href="https://vk.com/bookservice"
            target="_blank"
          >
            <i class="fab fa-vk" />
          </b-nav-item>
          <b-nav-item
            href="https://instagram.com/bookservice32"
            target="_blank"
          >
            <i class="fab fa-instagram" />
          </b-nav-item>
          <b-nav-item
            href="https://yandex.ru/profile/224999423360"
            target="_blank"
          >
            <i class="fab fa-yandex" />
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    navbarData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>
.is-menu-mobile-toggle {
  padding: 0 .75rem;
  border: none;
  background: transparent;
  color: rgba(255,255,255,.75);
  font-size: 1.5rem;
  transition: all .5s;
}
.is-menu-mobile-toggle:hover {
  color: #ffffff;
  transition: all .5s;
}
.is-mobile-sidebar-overlay {
  background: rgba(0,0,0,.25);
}
.is-mobile-sidebar {
  background: #a8312d;
}
.is-mobile-sidebar-title {
  margin-top: .5rem;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0;
}
.is-mobile-sidebar-subtitle {
  font-weight: 200;
  margin-top: 0;
  font-size: 1rem;
}
.is_main-navbar-menu.mobile li a {
  padding-left: 1rem;
}
@media screen and (min-width: 992px) {
  .is-menu-mobile-toggle {
    display: none;
  }
}
@media screen and (max-width: 991px) {
  .is_main-navbar-brand {
    font-weight: bold;
  }
}
</style>
