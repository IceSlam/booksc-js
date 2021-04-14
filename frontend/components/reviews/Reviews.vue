<template>
  <b-row
    class="d-flex justify-content-center"
  >
    <ReviewsCard
      v-for="review in reviewsData"
      :key="review.id"
      :reviews-card-data="review"
    />
  </b-row>
</template>

<script>
import ReviewsCard from './ReviewsCard'
export default {
  name: 'Reviews',
  components: {
    ReviewsCard
  },
  props: {
    reviewsData: {
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
