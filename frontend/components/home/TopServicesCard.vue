<template>
  <b-col
    class="mb-4"
    md="6"
    lg="4"
    sm="12"
  >
    <b-card
      :style="'background: url(https://api.booksc.ru' + TopServicesCardData.services_cat.category_image.url + '), rgba(0,0,0,.25);'"
    >
      <div class="mask d-flex align-items-center rgba-stylish-light py-3 px-2" />
      <div
        v-if="TopServicesCardData.services_cat"
        class="py-3 px-2 position-relative"
      >
        <NLink
          class="bs-text d-block"
          :to="'/services/' + TopServicesCardData.services_cat.category_slug"
          v-if="TopServicesCardData.services_cat"
        >
          <i :class="TopServicesCardData.services_cat.category_icon" />
          {{ TopServicesCardData.services_cat.category_name }}
        </NLink>
        <NLink
          class="card-title pt-2 text-white text-center text-uppercase d-block mt-5"
          style="font-size: 1.5rem;min-height: 80px;"
          :to="'/services/' + TopServicesCardData.services_cat.category_slug"
        >
          <strong>
            {{ TopServicesCardData.page_title.slice(0,22) }}...
          </strong>
        </NLink>
        <p
          class="text-center text-white"
          style="min-height: 144px;"
        >
          {{ TopServicesCardData.page_description.slice(0,135) }}...
        </p>
        <NLink
          :to="'/services/' + TopServicesCardData.services_cat.category_slug"
          class="text-center text-white d-block mx-auto"
        >
          от
          <span style="font-size: 3em;">
            {{ TopServicesCardData.min_price }}
                </span>
          руб.
        </NLink>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'TopServicesCard',
  props: {
    TopServicesCardData: {
      type: Object,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.is_main-top .card {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: default;
  border: none;
  border-radius: 16px;
  -webkit-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  -moz-box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
  box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
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
.bs-text:hover {
  color: #a8312d;
}
</style>
