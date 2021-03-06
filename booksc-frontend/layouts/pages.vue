<template>
  <div>
    <Navbar />
    <nuxt />
    <SocialWidgets />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import SocialWidgets from '@/components/home/social'

export default {
  name: 'PagesLayout',
  components: {
    SocialWidgets,
    Navbar,
    Footer
  }
}
</script>

<style scoped>

</style>
