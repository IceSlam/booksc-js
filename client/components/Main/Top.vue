<template>
  <section class="top section">
    <div class="top__content">
      <div class="container top__container">
        <is-button
          text=""
          class="menu-btn"
          @click="openMenu"
        />
        <div class="top__content-inner">
          <h3 class="top__content-subtitle">
            Сеть сервисных центров
          </h3>
          <h2 class="top__content-title">
            book-service
          </h2>
          <h3 class="top__content-text">
            Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS
          </h3>
          <div class="top__content__buttons">
            <is-button/>
            <is-button
              :active=true
            />
          </div>
        </div>
        <is-social-iist
          class="top__content-social"
        />
      </div>
    </div>
  </section>
</template>

<script>
import IsButton from "./isButton";
import IsSocialIist from "./isSocialIist";

export default {
  name: "top",
  components: {IsSocialIist, IsButton},
  data() {

  },
  methods: {
    openMenu() {

    }
  }
}
</script>
<style scoped lang="scss">
.top {
  background-image: url(./assets/img/top-bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 50px;
  &__content {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "";
      min-width: 750px;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 1;
      background: rgba(0, 0, 0, 0.72);
    }
  }
  &__container {
    position: relative;
    z-index: 2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__content-title {
    font-size: 80px;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #fff;
    text-transform: uppercase;
  }
  &__content-subtitle,
  &__content-text {
    font-size: 16px;
    max-width: 500px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #fff;
  }
  &__content-text {
    margin-bottom: 2rem;

  }
  &__content__buttons button:last-child{
    margin-left: 1rem;
  }
  &__content-social {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.menu-btn {
  position: absolute;
  right: 0;
  top: 1rem;
  width: 50px;
  height: 50px;
  padding: 0;
}

</style>
