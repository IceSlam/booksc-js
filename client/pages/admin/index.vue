<template>
  <section class="is-admin container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="is-admin__title">
          Панель управления
        </h2>
      </div>
      <lazy-admin-dashboard-users-count />
      <lazy-admin-dashboard-services-count />
      <lazy-admin-dashboard-categories-count />
      <lazy-admin-dashboard-reviews-count />
      <lazy-admin-dashboard-users />
      <lazy-admin-dashboard-services />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminPage',
  layout: 'admin',
  data () {
    return {
      title: 'Панель управления сайтом'
    }
  },
  head () {
    return {
      title: this.title,
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk ? `Book-Service | ${titleChunk}` : 'Сеть сервисных центров Book-Service';
      }
    }
  }
}
</script>

<style lang="scss">
.is-admin {
  &__title {
    font-family: 'Rubik', 'Open Sans', sans-serif;
    font-size: 2rem;
    color: #333;
    margin-right: 1rem;
  }
}
</style>
