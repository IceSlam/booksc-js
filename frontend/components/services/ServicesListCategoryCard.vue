<template>
  <b-col
    lg="4"
    md="6"
    sm="12"
    class="is_main-services-list-card-box-new"
  >
    <b-card
      v-if="servicesCategoryData.category_image"
      :style="'background: url(https://api.booksc.ru' + servicesCategoryData.category_image.url + ');'"
      :alt="servicesCategoryData.category_name"
    >
      <div class="mask rgba-stylish-strong"></div>
      <a
        @click.prevent="openCategory()"
        class="brand"
      >
        <i
          :class="servicesCategoryData.category_icon + ' fa-7x'"
        />
        <span class="mt-3">
          {{ servicesCategoryData.category_name }}
        </span>
      </a>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'ServicesListCategoryCard',
  props: {
    servicesCategoryData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    openCategory (id) {
      this.$emit('openCategory', this.servicesCategoryData.category_slug)
    }
  }
}
</script>

<style scoped>
.is_main-services-list-card-img-box > p {
  padding: 0 2rem;
}
.is_main-services-list-card-img-box.view {
  position: relative;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.rgba-stylish-strong {
  background: rgba(62,69,81,.7);
}
</style>
