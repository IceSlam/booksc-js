<template>
  <section class="is-choise section">
    <div class="container">
      <h2 class="choise title">Почему клиеты нам доверяют</h2>
      <p class="subtitle">
        Сеть сервисных центров Book-Service осуществляет постгарантийный ремонт цифровой техники, а
        именно телефонов, смартфонов, планшетов, ноутбуков и персональных компьютеров, телевизоров и мониторов, техники
        Apple и систем нагревания табака IQOS
      </p>
    </div>
    <div class="row is-choise-card__items">
      <choise-card v-for="(item, index) in 4" :key="index">
        {{ item }}
      </choise-card>
    </div>
  </section>
</template>

<script>
import ChoiseCard from "./ChoiseCard";

export default {
  name: "Choise",
  components: {ChoiseCard}
}
</script>

<style scoped lang="scss">
</style>
