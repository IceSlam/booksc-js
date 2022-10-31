<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="header__logo">
                <span class="header__logo-img">
                    <img src="@/assets/img/logotype-min.webp" alt="">
                </span>
        </a>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="#" class="menu__link">
                <span>Главная</span>
              </a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">
                <span>Услуги и цены </span>
              </a>
            </li>
            <li class="menu__item">
              <a href="tel:89000000" class="menu__link">
                <span>Отзывы</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="header__adress">
          <span class="header__adress-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          </span>
          <span>Красноармейская, 15 </span>
        </div>
        <div class="header__tel">
          <a class="header__tel-link" href="tel:88000000000">8 800 000 00 00</a>
          <p class="header__tel-text">Ежедневно, без выходных 10.00-18.00</p>
        </div>
        <is-button>x</is-button>
      </div>
    </div>
  </header>
</template>
<script>


export default {
  name: "Navigation",
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1111;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    padding: 1rem 0 0 0;
  }
  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
  }
  &__logo-img {
    display: flex;
    justify-content: center;
  }
  &__logo-img img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  &__logo-title {
    font-size: 16px;
  }
  &__logo-title, &__logo-subtitle {
    position: relative;
    display: block;
    z-index: 0;
    text-transform: uppercase;
    font-family: Roboto;
    white-space: nowrap;
  }
  &__logo-subtitle {
    font-size: 12px;
  }
  &__link svg {
    width: 100px;
  }
  &__address {
    &-icon {
      margin-right: 10px;
      & svg path {
        fill: red;
      }
    }
  }
  &__tel {
    &-text {
      font-size: 12px;
    }
    &-link {
      color: inherit;
      font-size: 30px;
      text-decoration: none;
    }
  }
}
.menu {
  &__list {
    display: flex;
    list-style: none;
    margin-bottom: 0;
  }
  &__item {
    position: relative;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  &__link {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
  }
}

</style>
