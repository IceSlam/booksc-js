<template>
  <b-row>
    <ServicesListCategoryCard
      v-for="category in servicesData"
      :key="category.id"
      :services-category-data="category"
      @openCategory="openCategory"
    />
  </b-row>
</template>

<script>
import ServicesListCategoryCard from './ServicesListCategoryCard'

export default {
  name: 'ServicesList',
  components: {
    ServicesListCategoryCard
  },
  props: {
    servicesData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => ({
  }),
  methods: {
    openCategory (category) {
      this.$router.push('/services/' + category)
    }
  }
}
</script>

<style scoped>

</style>
