<template>
  <div
    class="row"
    @click.prevent="viewItem()"
  >
    <div class="col-lg-1">
      <h4 class="is-services__list__col-item id">
        {{ servicesItem.id.slice(0,10) }}
      </h4>
    </div>
    <div class="col-lg-5">
      <h4 class="is-services__list__col-item name">
        {{ servicesItem.page_title }}
      </h4>
    </div>
    <div class="col-lg-2">
      <h4 class="is-services__list__col-item price">
        {{ servicesItem.min_price }}<fai icon="ruble-sign" />
      </h4>
    </div>
    <div class="col-lg-2">
      <h4 class="is-services__list__col-item category">
        {{ servicesItem.services_cat.category_name }}
      </h4>
    </div>
    <div class="col-lg-2">
      <h4 class="is-services__list__col-item date">
        {{ $moment(servicesItem.createdAt).formatWithJDF("HH:mm dd.MM.yyyy") }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminServicesItem',
  data () {
    return {}
  },
  props: {
    servicesItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    viewItem (id) {
      this.$emit('viewItem', this.servicesItem.id)
    }
  }
}
</script>

<style scoped>

</style>
