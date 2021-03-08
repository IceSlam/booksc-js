<template>
  <section id="brands" class="is_main-brands">
    <b-container>
      <b-row>
        <b-col
          class="is_main-brand-left"
          md="6"
        >
          <div class="mask flex-center rgba-stylish-light" />
        </b-col>
        <b-col
          class="is_main-brand-right"
          md="6"
        >
          <h2 class="is_main-brands-title text-center">
            Бренды
          </h2>
          <p class="is_main-brands-items text-center">
            <span
              v-for="item in BrandsList"
              :key="item.id"
              class="btn btn-sm"
            >
              {{ item.brand }}
            </span>
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Brands',
  data () {
    return {
      BrandsList: [
        { id: 1, brand: 'Asus' },
        { id: 2, brand: 'Acer' },
        { id: 3, brand: 'Apple' },
        { id: 4, brand: 'Archos' },
        { id: 5, brand: 'AlinWare' },
        { id: 6, brand: 'BQ' },
        { id: 7, brand: 'Blackview' },
        { id: 8, brand: 'DEXP' },
        { id: 9, brand: 'DNS' },
        { id: 10, brand: 'Digma' },
        { id: 11, brand: 'Doogee' },
        { id: 12, brand: 'Finepower' },
        { id: 13, brand: 'Heier' },
        { id: 14, brand: 'Honor' },
        { id: 15, brand: 'Huawei' },
        { id: 16, brand: 'HTC' },
        { id: 17, brand: 'Highsreen' },
        { id: 18, brand: 'Irbis' },
        { id: 19, brand: 'Lenovo' },
        { id: 20, brand: 'Meizu' },
        { id: 21, brand: 'Micromax' },
        { id: 22, brand: 'Motorola' },
        { id: 23, brand: 'Nokia' },
        { id: 24, brand: 'OnePlus' },
        { id: 25, brand: 'Philips' },
        { id: 26, brand: 'Oukitel' },
        { id: 27, brand: 'Prestigio' },
        { id: 28, brand: 'Samsung' },
        { id: 29, brand: 'Sony' },
        { id: 30, brand: 'Turbo' },
        { id: 31, brand: 'Virtex' },
        { id: 32, brand: 'Vivo' },
        { id: 33, brand: 'realme' },
        { id: 34, brand: 'texet' },
        { id: 35, brand: 'HP' },
        { id: 36, brand: 'AOC' },
        { id: 37, brand: 'PackardBell' },
        { id: 38, brand: 'eMachines' },
        { id: 39, brand: 'Xiaomi' },
        { id: 40, brand: 'MSI' },
        { id: 41, brand: 'Dell' }
      ]
    }
  }
}
</script>

<style scoped>
.is_main-brand-left {
  position: relative;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-attachment: fixed;
}
.rgba-stylish-light {
  background-color: rgba(62,69,81,.3);
}
</style>
