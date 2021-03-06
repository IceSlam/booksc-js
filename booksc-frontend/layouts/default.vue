<template>
  <div>
    <Header />
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

export default {
  components: {
    Header,
    Navbar,
    Footer
  },
  head () {
    return {
      title: 'Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: './img/logotype.png' }]
    }
  }
}
</script>
