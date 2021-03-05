<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
export default {
  name: 'ServicesLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
