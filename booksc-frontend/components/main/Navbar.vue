<template>
  <nav id="navbar" class="navbar navbar-expand-lg sticky-top navbar-dark bs-bg animated fadeIn">
    <div class="container">
      <nuxt-link class="navbar-brand is_main-navbar-brand" to="/" exact>
        <img class="is_main-navbar-logo" src="@/assets/img/logotype.png" alt="Book-Service">
        Book-Service
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <menu class="navbar-nav mr-auto is_main-navbar-menu justify-center text-center">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/" exact>
              Главная
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/services">
              Услуги и цены
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://bookparts.ru" target="_blank">Магазин</a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contacts">
              Контакты
            </nuxt-link>
          </li>
        </menu>
        <menu style="justify-content:center;" class="navbar-nav ml-auto nav-flex-icons  is_main-navbar-menu">
          <li class="nav-item">
            <a data-toggle="collapse" data-target="#collapseOne2" class="nav-link waves-effect waves-light" href="#map-accordeon">
              <i class="fas fa-map"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://vk.com/bookservice">
              <i class="fab fa-vk"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://instagram.com/bookservice32">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="https://yandex.ru/profile/224999423360">
              <i class="fab fa-yandex"></i>
            </a>
          </li>
        </menu>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
