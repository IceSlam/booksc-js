<template>
  <article
    id="content"
    class="is_main-content wow fadeIn"
    data-wow-duration="1s"
  >
    <Heading />
  </article>
</template>

<script>
import Heading from '@/components/services/Heading'
export default {
  layout: 'services',
  name: 'Services',
  data () {
    return {
      title: 'Услуги и Цены'
    }
  },
  head () {
    return {
      title: this.title + ' - Сеть сервисных центров Book-Service',
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
  },
  components: {
    Heading
  }
}
</script>

<style scoped>

</style>
