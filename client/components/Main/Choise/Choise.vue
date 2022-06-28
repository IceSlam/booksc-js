<template>
  <section class="is-choise">
    <div class="container">
      <h2 class="choise">Почему клиеты нам доверяют</h2>
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
