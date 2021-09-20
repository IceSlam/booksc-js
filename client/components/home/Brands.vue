<template>
  <section class="is-brands">
    <div class="row">
      <div class="col-lg-6 left"/>
      <div class="col-lg-6" style="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;">
        <h2 class="is-brands__title">
          Бренды
          {{ ip }}
        </h2>
        <p class="is-brands__description">
          Lorem ipsum dolor akismet Lorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismetLorem ipsum dolor akismet
        </p>
        <div class="is-brands__list">
          <p
            v-for="brand in brandsData"
            :key="brand.id"
            class="is-brands__list-item"
          >
            {{ brand.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBrands',
  data () {
    return {
      ip: '',
      brandsData: [
        { id: 1, name: 'Apple'},
        { id: 2, name: 'Asus'},
        { id: 3, name: 'Acer'},
        { id: 4, name: 'Archos'},
        { id: 5, name: 'Alienware'},
        { id: 6, name: 'BQ'},
        { id: 7, name: 'Blackview'},
        { id: 8, name: 'DEXP'},
        { id: 9, name: 'DNS'},
        { id: 10, name: 'Digma'},
        { id: 11, name: 'Doogee'},
        { id: 12, name: 'eMachines'},
        { id: 13, name: 'Finepower'},
        { id: 14, name: 'Heier'},
        { id: 15, name: 'Honor'},
        { id: 16, name: 'Huawei'},
        { id: 17, name: 'HTC'},
        { id: 18, name: 'Highscreen'},
        { id: 19, name: 'Irbis'},
        { id: 20, name: 'Lenovo'},
        { id: 21, name: 'Meizu'},
        { id: 22, name: 'Micromax'},
        { id: 23, name: 'Motorola'},
        { id: 24, name: 'Nokia'},
        { id: 10, name: 'OnePlus'},
      ]
    }
  }
}
</script>

<style lang="scss">
.is-brands {
  background-color: #f6f6f6;
  padding: 2rem 0;
  .left {
  }
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
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 50px;
      height: 3px;
      background-color: $bsColor;
      margin: 0 auto;
    }
  }
  &__description {
    color: #777;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    max-width: 60%;
    margin: 0 auto;
    text-align: center;
    line-height: 2rem;
  }
  &__list {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    flex-wrap: wrap;
    &-item {
      padding: .5rem;
      margin: .25rem;
      border: 1px solid rgba(0, 0, 0, 0.015);
      color: rgba(0, 0, 0, 0.25);
      cursor: pointer;
      transition: all .3s;
      text-transform: uppercase;
      font-size: .9rem;
      display: inline-block;
      &:hover {
        border: 1px solid $bsColor;
        color: #333;
        transition: all .3s;
      }
    }
  }
}
</style>
