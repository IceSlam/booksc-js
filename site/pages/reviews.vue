<template>
  <main>
    <Breadcrumbs
      :breadcrumbs-page-title="pageMetaTitle"
    />
  </main>
</template>

<script>
import Breadcrumbs from '@/components/main/Breadcrumbs'

export default {
  name: 'Reviews',
  components: {
    Breadcrumbs
  },
  layout: 'pages',
  data () {
    return {
      pageMetaTitle: 'Отзывы'
    }
  }
}
</script>

<style scoped>

</style>
