<template>
  <section class="top">
    <div class="top__content">
      <div class="container top__container">
        <div class="top__content-inner">
          <h2 class="top__content-title">
            book-service
          </h2>
          <h3 class="top__content-text">
            Сеть сервисных центров
          </h3>
          <h3 class="top__content-text">
            По ремонту цифровой техники и техники Apple
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
  components: {IsSocialIist, IsButton}
}
</script>
<style scoped lang="scss">
.top {
  position: relative;
  min-height: 100vh;
  &__content {
    position: absolute;
    z-index: 111;
    right: 0;
    left: 0;
    height: 80vh;
    display: flex;
    align-items: center;
    text-align: left;
    &::before {
      content: '';
      width: 650px;
      height: 80%;
      left: 0;
      position: absolute;
      z-index: -1;
      background: rgba(0, 0, 0, 0.5);
    }
  }
  &__container {
    position: relative;
  }
  &__content-title {
    font-size: 54px;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #fff;
    text-align: left;
  }
  &__content-text {
    font-size: 16px;
    margin-bottom: 30px;
    max-width: 400px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #fff;
  }
  &__content-social {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
