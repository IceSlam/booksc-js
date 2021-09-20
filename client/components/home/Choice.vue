<template>
  <section class="is-choice container">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="is-choice__title">
          Почему нас выбирают?
        </h2>
        <p class="is-choice__description">
          Сеть сервисных центров Book-Service осуществляет постгарантийный ремонт цифровой техники, а именно телефонов, смартфонов, планшетов, ноутбуков и персональных компьютеров, телевизоров и мониторов, техники Apple и систем нагревания табака IQOS
        </p>
      </div>
      <div class="col-lg-4">
        <div class="is-choice__item">
          <h3 class="is-choice__item-title">
            7<sup>+</sup>
          </h3>
          <h4 class="is-choice__item-subtitle">
            лет опыта
          </h4>
          <p class="is-choice__item-description">
            Мы на рынке уже более 7 лет и имеем за плечами огромный профессиональный опыт
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="is-choice__item">
          <h3 class="is-choice__item-title">
            1000<sup>+</sup>
          </h3>
          <h4 class="is-choice__item-subtitle">
            довольных клиентов
          </h4>
          <p class="is-choice__item-description">
            Уже более тысячи клиентов довольны нашим обслуживанием и рекомендуют нас своим друзьям и знакомым
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="is-choice__item">
          <h3 class="is-choice__item-title">
            100<sup>+</sup>
          </h3>
          <h4 class="is-choice__item-subtitle">
            постоянных клиентов
          </h4>
          <p class="is-choice__item-description">
            С нами сотрудничают уже более ста постоянных клиентов и других сервисных центров
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeChoice',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.is-choice {
  padding: 3rem 0 5rem;
  &__title {
    font-family: 'Rubik', 'Open Sans', sans-serif;
    font-weight: 400;
    color: #333;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    position: relative;
    padding-bottom: 1.5rem;
    &:after {
      content: '';
      width: 100px;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      margin: 0 auto;
      background-color: $bsColor;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
    }
  }
  &__description {
    color: #666;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    max-width: 75%;
    text-align: center;
    display: block;
    margin: 0 auto;
    line-height: 1.75rem;
    margin-bottom: 2rem;
  }
  &__item {
    margin-top: 2rem;
    position: relative;
    padding-bottom: .75rem;
    &:after {
      position: absolute;
      content: '';
      width: 20%;
      height: 3px;
      background-color: $bsColor;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    &-title {
      font-family: 'Rubik', 'Open Sans', sans-serif;
      font-size: 5rem;
      color: $bsColor;
      text-align: center;
      font-weight: 400;
      margin: 0;
    }
    &-subtitle {
      font-family: 'Open Sans', sans-serif;
      font-size: 2rem;
      color: #333;
      text-align: center;
      max-width: 75%;
      font-weight: 400;
      margin: 0 auto;
      min-height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-description {
      font-family: 'Open Sans', sans-serif;
      font-size: 1rem;
      color: #666;
      text-align: center;
      max-width: 50%;
      font-weight: 400;
      margin: 1rem auto;
      line-height: 1.5rem;
    }
  }
}
</style>
