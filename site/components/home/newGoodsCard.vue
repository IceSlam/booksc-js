<template>
  <b-col
    lg="3"
    md="4"
    sm="6"
  >
    <b-card
      class="is_main-goods-card"
    >
      <img
        v-if="newGoodsItemData.goods_img"
        class="card-img-top"
        :src="'https://api.booksc.ru' + newGoodsItemData.goods_img.url"
        :alt="newGoodsItemData.goods_title"
      >
      <div
        v-if="newGoodsItemData.is_goods_new"
        style=""
        class="is_main-goods-card-badge-new"
      >
        Новинка
      </div>
      <div
        v-if="newGoodsItemData.is_goods_popular"
        class="is_main-goods-card-badge-top"
      >
        <i class="fab fa-hotjar" aria-hidden="true" />
      </div>
      <div
        v-if="newGoodsItemData.is_goods_recommended"
        class="is_main-goods-card-badge-rec"
      >
        <i class="fas fa-thumbs-up" aria-hidden="true" />
      </div>
      <a href="#!">
        <div class="mask rgba-white-slight" />
      </a>
      <div class="card-body" style="">
        <h4 class="card-title is_main-goods-card-title">
          <a
            class="btn bs-btn is_main-goods-card-cat-name"
            :href="newGoodsItemData.goods_category_link"
          >
            {{ newGoodsItemData.goods_category }}
          </a>
          <a
            class="is_main-goods-card-title-link d-block mt-2"
            :href="newGoodsItemData.goods_link"
            target="_blank"
          >
            {{ newGoodsItemData.goods_title }}
          </a>
        </h4>
        <span class="badge bs-bg mx-auto d-block" style="border-radius:0px;text-align:center !important;font-size:.55em;color:rgba(255,255,255,.85);max-width: 70%;font-weight:400;text-transform:uppercase;padding:5px;box-shadow:none;">
          Артикул: {{ newGoodsItemData.goods_article }}
        </span>
        <div class="card-text">
          <p class="mt-2 text-center">
            <small>
              {{ newGoodsItemData.goods_description }}
            </small>
          </p>
        </div>
        <p class="card-price text-center" style="font-size:3em;font-weight:200;">
          {{ newGoodsItemData.goods_price }}
          <span
            style="font-size:.5em;text-decoration:line-through;font-weight:300;"
          >
            <i class="fas fa-ruble-sign fa-1x" aria-hidden="true" />
          </span>
        </p>
        <a
          :href="newGoodsItemData.goods_link"
          class="btn btn-block btn-sm bs-btn"
          target="_blank"
        >
          К товару <i class="fas fa-arrow-right" />
        </a>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'NewGoodsCard',
  props: {
    newGoodsItemData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.is_main-goods-card .card-body {
  padding: 0;
}
.is_main-goods-card .card-body .card-body {
  padding: 1.25rem !important;
}
</style>
