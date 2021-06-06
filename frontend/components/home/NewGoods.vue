<template>
  <section
    id="goods"
    class="is_main-goods main-section"
  >
    <b-container>
      <h2 class="h2-resposive is_main-whywe-h2 text-center text-uppercase">
        У нас покупают
      </h2>
      <p class="is_main-whywe-title-caption d-block mb-5 mx-auto">
        На базе сети сервисных центров открыт магазин запчастей и аксессуаров для телефонов, планшетов, ноутбуков и другой цифровой техники - магазин BookParts. Низкие цены как для розничных покупателей так и для оптовиков
      </p>
      <b-row
        v-if="newGoodsData.new_goods"
        class="mt-5"
      >
        <NewGoodsCard
          v-for="item in newGoodsData.new_goods"
          :key="item.id"
          :new-goods-item-data="item"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'NewGoods',
  components: {
    NewGoodsCard: () => import('@/components/home/NewGoodsCard')
  },
  props: {
    newGoodsData: {
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
</style>
