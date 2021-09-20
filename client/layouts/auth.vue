<template>
  <main class="layout default container-fluid">
    <nuxt />
  </main>
</template>

<script>
export default {
  name: 'AuthLayout',
  data () {
    return {
      title: 'Авторизация'
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

</style>
