<template>
  <main class="layout admin">
    <lazy-admin-system-navbar />
    <lazy-admin-system-sidebar />
    <div class="wrapper">
      <nuxt />
    </div>
  </main>
</template>

<script>
export default {
  name: 'AdminLayout',
  middleware: 'auth',
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss">
.layout {
  &.admin {
    padding-top: 65px;
    padding-left: 256px;
    height: 100%;
    min-height: calc(100vh - 65px);
    .wrapper {
      padding: 1rem;
    }
  }
}
</style>
