<template>
  <section id="reviews" class="is_main-reviews view">
    <div class="mask rgba-stylish-strong" />
    <b-container>
      <b-row class="mb-5">
        <b-col>
          <h2
            class="text-center text-uppercase text-white font-weight-normal mb-5"
            style="font-size: 2rem;"
          >
            Отзывы
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <ReviewsHomeCard
          v-for="review in reviewsHomeData.slice(0,3)"
          :key="review.id"
          :reviews-home-card-data="review"
        />
      </b-row>
      <b-row
        class="mt-5 mb-5"
      >
        <b-col
          md="12"
          class="d-flex align-items-center justify-content-center"
        >
          <NLink
            to="/reviews"
            class="btn mx-auto more-reviews"
          >
            Читать все отзывы
          </NLink>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ReviewsHomeCard from '@/components/home/ReviewsHomeCard'

export default {
  name: 'ReviewsHome',
  components: {
    ReviewsHomeCard
  },
  props: {
    reviewsHomeData: {
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
.is_main-reviews {
  background: url(./static/img/reviews_bg-min.webp);
  background-position: center;
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
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
.mask.rgba-stylish-strong {
  background: rgba(62,69,81,.9);
}
h2:after {
  display: block;
  content: "";
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 80px;
  height: 2px;
  background-color: #a8312d;
  margin-top: 20px;
}
.more-reviews {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 2px solid #a8312d;
  background: #a8312d;
  color: #fff;
  padding: .75rem 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  -webkit-transition: all .4s;
  -moz-transition: all .4s;
  -ms-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
}
.more-reviews:hover {
  background: #fff;
  color: #a8312d;
  -webkit-transition: all .4s;
  -moz-transition: all .4s;
  -ms-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
}
</style>
