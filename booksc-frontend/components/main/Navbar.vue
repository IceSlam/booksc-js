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
            <nuxt-link class="nav-link" to="/services" exact>
              Услуги и цены
            </nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Магазин</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModalCenter">Статус ремонта</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-333"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >О нас
            </a>
            <div class="dropdown-menu bs-bg text-center" aria-labelledby="navbarDropdownMenuLink-333">
              <a class="dropdown-item" href="#">О компании</a>
              <a class="dropdown-item" href="#">Контакты</a>
            </div>
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
