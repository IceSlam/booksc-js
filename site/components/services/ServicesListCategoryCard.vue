<template>
  <div class="col-lg-4 col-md-6 col-sm-12 is_main-services-list-card-box wow slideInLeft" data-wow-duration="1.5s">
    <div class="card">
      <div
        v-if="servicesCategoryData.category_image"
        class="view d-block is_main-services-list-card-img-box"
      >
        <img
          class="card-img-top"
          :src="'https://api.booksc.ru' + servicesCategoryData.category_image.url"
          :alt="servicesCategoryData.category_name"
        >
        <div class="mask rgba-stylish-strong" />
        <div
          class="mask"
          style="z-index: 101;"
        />
        <p
          v-if="servicesCategoryData.services"
          class="services-exists"
          style="z-index: 100;"
        >
          <a
            v-for="service in servicesCategoryData.services"
            :key="service.id"
          >
            {{ service.page_title }}
          </a>
        </p>
        <p
          v-else
        >
          Услуг пока нет
        </p>
      </div>
      <div class="card-body">
        <h4 class="card-title">
          <a
            class="nav-link"
            @click.prevent="openCategory()"
          >
            <i
              :class="servicesCategoryData.category_icon"
            />
            {{ servicesCategoryData.category_name }}
            <i
              class="fas fa-arrow-right text-right is_arrow"
            />
          </a>
        </h4>
      </div>
    </div>
  </div>
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
    openCategory (category) {
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
