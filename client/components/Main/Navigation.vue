<template>
  <header class="header">
    <a class="header__logo">
                <span class="header__logo-img">
                    <img src="@/assets/img/logotype-min.webp" alt="">
                </span>
      <span class="header__logo-title">book-service</span>
      <span class="header__logo-subtitle">Сеть сервисных центров</span>
    </a>
    <nav class="menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="#" class="menu__link">
            <fai icon="home"/>
            <span>Главная</span>
          </a>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">
            <fai icon="home"/>
            <span>Услуги и цены </span>
          </a>
        </li>
        <li class="menu__item">
          <a href="tel:89000000" class="menu__link">
            <fai icon="home"/>
            <span>Отзывы</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import IsButton from "./isButton";
export default {
  name: "Navigation",
  components: {IsButton}
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  padding: 1rem 0 0 0;
  height: 100%;
  z-index: 1111;
  background: linear-gradient(0deg,  ($bsColor) 0%, ($bsColor) 100%);
  transition: $transition;
  &:hover {
    width: 300px;
    & + .content {
      transform: translateX(220px);
      max-width: 100%;
      opacity: 0.5;
    }
    .header__logo-title, .header__logo-subtitle {
      text-indent: 0;
      color: #fff;
    }
    .menu {
      span, .logo__title {
        text-indent: 0;
      }
    }
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
    width: $wIcon;
    height: $wIcon;
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
    text-indent: -20em;
    white-space: nowrap;
    transition: text-indent 500ms ease-in-out;
    align-self: center;
  }
  &__logo-subtitle {
    font-size: 12px;
  }
  &__link svg {
    width: 100px;
  }
}
.menu {
  padding-bottom: 1rem;
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 32px 0 0 0;
    padding: 0;
    list-style: none;
  }
  &__item {
    position: relative;
    clear: both;
    width: 100%;
    padding: 0;
    align-self: flex-start;
    transition: $transition;
    &:hover {
      background-color: #fff;
      &:before {
        background-color: #fff;
      }
      svg path {
        fill: $bsColor;
      }
      .menu__link {
        color: $bsColor;
      }
    }
  }
  &__link {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    transition: $transition;
    & span {
      position: relative;
      display: block;
      z-index: 0;
      font-family: Roboto;
      text-indent: -20em;
      white-space: nowrap;
      transition: $transition;
    }
  }
  svg {
    position: relative;
    width: $wIcon;
    height: $wIcon;
    z-index: 1;
    margin-right: 1rem;
  }
  svg path {
    fill: #fff;
    transition: $transition;
  }
}

</style>
