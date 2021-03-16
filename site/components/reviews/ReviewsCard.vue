<template>
  <b-col
    md="6"
    lg="4"
  >
    <b-card
      class="mb-2 pb-5"
      style="-webkit-border-radius: 8px;-moz-border-radius: 8px;border-radius: 8px;"
    >
      <div
        v-if="reviewsCardData.reviewer_avatar"
        :style="'background: url(' + reviewsCardData.reviewer_avatar + ');'"
        class="is-review__author-img"
      />
      <div
        v-else
        style="background: #dedede;color: #a0a0a0;display: flex;align-items: center;justify-content: center;font-size: 5rem;font-weight: 600;"
        class="is-review__author-img"
      >
        ?
      </div>
      <div
        class="review-rating"
      >
        {{ reviewsCardData.review_rating }}
        <i class="fas fa-star" />
      </div>
      <a
        :href="reviewsCardData.reviewer_link"
        target="_blank"
        class="text-center text-uppercase mt-2 mx-auto"
        style="color: #a8312d;display: block;text-align: center;font-size: 1.5rem;font-weight: 200;"
      >
        {{ reviewsCardData.reviewer_name }}
      </a>
      <p class="review-pub-date text-center mt-0">
        {{ reviewsCardData.review_date }}
      </p>
      <div
        class="review-info"
      >
        {{ reviewsCardData.review_info.slice(0,100) }}
      </div>
      <div class="branch-office">
        {{ reviewsCardData.branch_office }}
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'ReviewsCard',
  props: {
    reviewsCardData: {
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
.card {
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.is-review__author-img {
  width: 128px;
  height: 128px;
  border-radius: 100%;
  display: block;
  margin: -4rem auto 0;
  background-position: center !important;
  -webkit-background-size: cover !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.review-info {
  min-height: 128px;
  margin-top: .75rem;
  margin-bottom: .75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(0,0,0,.5);
}
.review-rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  color: #ffcc00;
  font-weight: bold;
  display: block;
  width: 64px;
  height: 64px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background: #fff;
}
.branch-office {
  position: absolute;
  bottom: .5rem;
  left: 0;
  right: 0;
  text-align: center;
  color: #a8312d;
  text-transform: uppercase;
  font-weight: 200;
  font-size: .75rem;
}
</style>
