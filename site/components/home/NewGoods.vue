<template>
  <section id="goods" class="is_main-goods container">
    <b-container>
      <h2 class="h2-resposive is_main-whywe-h2 text-center text-uppercase">
        У нас покупают
      </h2>
      <p class="is_main-whywe-title-caption d-block mb-5 mx-auto">
        На базе сети сервисных центров открыт магазин запчастей и аксессуаров для телефонов, планшетов, ноутбуков и другой цифровой техники - магазин BookParts. Низкие цены как для розничных покупателей так и для оптовиков
      </p>
      <b-row
        class="mt-5"
      >
        <NewGoodsCard
          v-for="newGoodsItem in newGoodsData"
          :key="newGoodsItem.id"
          :newGoodsItemData="newGoodsItem"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import NewGoodsCard from '@/components/home/newGoodsCard'

export default {
  name: 'NewGoods',
  components: {
    NewGoodsCard
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
