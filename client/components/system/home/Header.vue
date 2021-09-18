<template>
  <header class="is-header home">
    <div class="container">
      <div class="row d-flex align-items-center" style="height: 100%">
        <div class="col-lg-12 is-header__content">
          <img class="is-header__logo" src="@/assets/img/logotype-min.webp" alt="Book-Service">
          <h1 class="is-header__content__title">
            Book-Service
          </h1>
          <h2 class="is-header__content__subtitle">
            Сеть сервисных центров
          </h2>
          <h3 class="is-header__content__caption">
            По ремонту цифровой техники и техники Apple
          </h3>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SystemHomeHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.is-header {
  &.home {
    background-color: $bsColor;
    position: relative;
    height: 100vh;
    display: flex;
    .is-header {
      &__content {
        text-align: center !important;
        img {
          margin: 0 auto;
        }
        &__title {
          font-size: 4rem;
          font-family: 'Rubik', 'Open Sans', sans-serif;
          font-weight: 500;
          color: #fff;
          text-transform: uppercase;
          margin: 1rem 1rem .25rem;
        }
        &__subtitle {
          font-size: 2.125rem;
          color: rgba(255,255,255,.75);
          font-weight: 500;
          font-family: 'Open Sans', sans-serif;
          text-transform: uppercase;
          margin-top: .125rem;
          margin-bottom: .125rem;
        }
        &__caption {
          font-size: 1rem;
          color: rgba(255,255,255,.5);
          font-weight: 400;
          font-family: 'Open Sans', sans-serif;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
