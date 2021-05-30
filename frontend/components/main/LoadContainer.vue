<template>
  <b-row>
    <LoadAnimation />
  </b-row>
</template>

<script>
export default {
  name: 'LoadContainer',
  components: {
    LoadAnimation: () => import('@/components/main/LoadAnimation')
  }
}
</script>

<style scoped>

</style>
