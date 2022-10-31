<template>
  <section class="top section">
    <div class="top__content">
      <div class="container top__container">
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
          <div class="top__cards row">
            <div class="top__card col-md-4">
              <div class="top__card-img">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path
                    d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div class="top__card-inner">
                <p class="top__card-title">Гарантия</p>
                <p class="top__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa delectus
                  exercitationem nam provident quaerat temporibus ut.
                </p>
              </div>
            </div>

            <div class="top__card col-md-4">
              <div class="top__card-img">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path
                    d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div class="top__card-inner">
                <p class="top__card-title">Гарантия</p>
                <p class="top__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa delectus
                  exercitationem nam provident quaerat temporibus ut.
                </p>
              </div>
            </div>

            <div class="top__card col-md-4">
              <div class="top__card-img">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path
                    d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                </svg>
              </div>
              <div class="top__card-inner">
                <p class="top__card-title">Гарантия</p>
                <p class="top__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa delectus
                  exercitationem nam provident quaerat temporibus ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IsButton from "./isButton";

export default {
  name: "top",
  components: {IsButton},
  data() {

  },
  methods: {}
}
</script>
<style scoped lang="scss">
.top {
  //background-image: url(./assets/img/top-bg.jpg);
  background: $darkColor;
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
  &__content__buttons button:last-child {
    margin-left: 1rem;
  }
  &__content-social {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &__cards {

  }
  &__card {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid $bsColor;
    &-img {
      margin-right: 20px;
      svg {
        width: 50px;
        height: 50px;
      }
    }
    &-title {
      font-size: 14px;
      font-weight: 700;
    }
    &-text {
      font-size: 12px;
    }
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
