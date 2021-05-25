<template>
  <div class="error-layout">
    <div class="container">
      <div
        v-if="error.statusCode === 404"
        class="row"
      >
        <div class="col-lg-12 text-center">
          <p class="display-1">
            {{ error.statusCode }}
          </p>
          <p class="display-2">
            Страница не найдена :(
          </p>
          <p class="display-4">
            Страница <span style="color: #a8312d;">{{ error.path }}</span> не найдена, пожалуйста, повторите запрос...
          </p>
          <p class="display-4">
            ...или вернитесь на
            <NLink to="/">
              главную
            </NLink>
          </p>
        </div>
      </div>
      <div
        v-else
        class="row"
      >
        <div class="col-lg-12 text-center">
          <p class="display-1">
            {{ error.statusCode }}
          </p>
          <p class="display-2">
            Произошла ошибка :(
          </p>
          <p class="display-4">
            Произошла непредвиденная ошибка: {{ error.message }}
          </p>
          <p class="display-4">
            ...или вернитесь на
            <NLink to="/">
              главную
            </NLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  head () {
    return {
      title: this.error.statusCode + ' - Произошла ошибка - Сеть сервисных центров Book-Service'
    }
  }
}
</script>

<style lang="scss">
</style>
