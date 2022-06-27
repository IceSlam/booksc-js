<template>
  <main class="layout home">
    <Navigation
      class="navigation"
    />
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
.home {
}
.navigation {
  &:hover {
    width: 300px;
    & + .content {
      transform: translateX(220px);
      max-width: 100%;
      opacity: 0.8;
    }
  }
}


</style>
