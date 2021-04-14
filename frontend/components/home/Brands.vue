<template>
  <section
    v-if="brandsData.homepage_brands"
    id="brands"
    class="is_main-brands"
  >
    <b-container>
      <b-row
        v-if="brandsData.homepage_brands_bg"
      >
        <b-col
          class="is_main-brand-left"
          md="6"
          :style="'background:url(https://api.booksc.ru' + brandsData.homepage_brands_bg.url + ');background-position: center;-webkit-background-size: cover;background-size: cover;'"
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
              v-for="brand in brandsData.homepage_brands"
              :key="brand.id"
              class="btn btn-sm"
            >
              {{ brand.brand_title }}
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
  props: {
    brandsData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  })
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
