<template>
  <div class="wrap container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    {{ error }}
    <NuxtLink to="/">На главную</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  layout: 'error',
  transition: 'ispage',
  head () {
    return {
      title: 'Страница не найдена - Сеть сервисных центров Book-Service'
    }
  }
}
</script>

<style lang="scss">
</style>
