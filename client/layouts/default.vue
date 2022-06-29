<template>
  <main class="layout home">
    <Navigation/>
    <nuxt/>
  </main>
</template>

<script>
import Navigation from "../components/Main/Navigation";

export default {
  name: "home",
  components: {Navigation}
}
</script>

<style scoped lang="scss">


</style>
