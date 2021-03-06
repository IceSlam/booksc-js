<template>
  <header
    id="header"
    class="d-flex justify-content-center align-items-center"
  >
    <b-container>
      <b-row>
        <b-col
          md="12"
          class="text-white mb-4 text-center"
        >
          <img src="@/assets/img/logotype.png" alt="" class="img-fluid is_main-header-img">
          <h1 class="display-4 font-weight-bold text-uppercase">
            Book-Service
          </h1>
          <h2 class="h3-responsive text-uppercase is_main-header-h2">
            Сеть сервисных центров
          </h2>
          <h3 class="is_main-header-caption d-block mx-auto">
            Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS
          </h3>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
