<template>
  <section
    v-if="newGoodsData.new_goods"
    id="goods"
    class="is_main-goods"
  >
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
        <b-col
          v-for="goods in newGoodsData.new_goods"
          :key="goods.id"
          lg="3"
          md="4"
          sm="6"
        >
          <b-card
            class="is_main-goods-card"
          >
            <img
              v-if="goods.goods_img"
              class="card-img-top"
              :src="goods.goods_img"
              :alt="goods.goods_title"
            >
            <div
              v-if="goods.is_goods_new"
              style=""
              class="is_main-goods-card-badge-new"
            >
              Новинка
            </div>
            <div
              v-if="goods.is_goods_top"
              class="is_main-goods-card-badge-top"
            >
              <i class="fab fa-hotjar" aria-hidden="true" />
            </div>
            <div
              v-if="goods.is_goods_recommended"
              class="is_main-goods-card-badge-rec"
            >
              <i class="fas fa-thumbs-up" aria-hidden="true" />
            </div>
            <a href="#!">
              <div class="mask rgba-white-slight" />
            </a>
            <div class="card-body" style="padding: 1rem;">
              <h4 class="card-title is_main-goods-card-title">
                <a
                  class="btn bs-btn is_main-goods-card-cat-name"
                  :href="goods.goods_category_link"
                >
                  {{ goods.goods_category }}
                </a>
                <a
                  class="is_main-goods-card-title-link d-block mt-2"
                  :href="goods.goods_link"
                  target="_blank"
                >
                  {{ goods.goods_title }}
                </a>
              </h4>
              <span class="badge bs-bg mx-auto d-block" style="border-radius:0px;text-align:center !important;font-size:.55em;color:rgba(255,255,255,.85);max-width: 70%;font-weight:400;text-transform:uppercase;padding:5px;box-shadow:none;">
            Артикул: {{ goods.goods_article }}
          </span>
              <div class="card-text">
                <p class="mt-2 text-center">
                  <small>
                    {{ goods.goods_description }}
                  </small>
                </p>
              </div>
              <p class="card-price text-center" style="font-size:3em;font-weight:200;">
                {{ goods.goods_price }}
                <span
                  style="font-size:.5em;text-decoration:line-through;font-weight:300;"
                >
              <i class="fas fa-ruble-sign fa-1x" aria-hidden="true" />
            </span>
              </p>
              <a
                :href="goods.goods_link"
                class="btn btn-block btn-sm bs-btn"
                target="_blank"
              >
                К товару <i class="fas fa-arrow-right" />
              </a>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'NewGoods',
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
.card-body {
  padding: 0;
}
</style>
