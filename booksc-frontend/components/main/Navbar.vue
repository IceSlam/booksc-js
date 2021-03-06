<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    id="navbar"
    class="sticky-top bs-bg"
  >
    <b-container>
      <b-navbar-brand>
        <NLink
          class="is_main-navbar-brand"
          to="/"
          exact
        >
          <img
            class="is_main-navbar-logo"
            src="@/assets/img/logotype.png"
            alt="Book-Service">
          Book-Service
        </NLink>
      </b-navbar-brand>
      <b-navbar-toggle target="navbar-menu"></b-navbar-toggle>
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
            <i class="fab fa-vk"></i>
          </b-nav-item>
          <b-nav-item
            href="https://instagram.com/bookservice32"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </b-nav-item>
          <b-nav-item
            href="https://yandex.ru/profile/224999423360"
            target="_blank"
          >
            <i class="fab fa-yandex"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
