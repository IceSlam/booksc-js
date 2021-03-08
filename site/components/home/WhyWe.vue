<template>
  <section id="whywe" class="is_main-whywe">
    <b-container>
      <h2 class="h2-resposive is_main-whywe-h2 text-center text-uppercase" >
        Почему нас выбирают?
      </h2>
      <p class="is_main-whywe-title-caption d-block mx-auto">
        Сеть сервисных центров Book-Service осуществляет постгарантийный ремонт цифровой техники, а именно телефонов, смартфонов, планшетов, ноутбуков и персональных компьютеров, телевизоров и мониторов, техники Apple и систем нагревания табака IQOS
      </p>
      <br>
      <b-row>
        <b-col
          md="4"
          v-for="item in WhyWeData"
          :key="item.id"
        >
          <b-card
            class="is_main-whywe-card"
          >
            <h3 class="is_main-whywe-card-ititle">
              {{ item.count }}<sup>+</sup>
            </h3>
            <h4 class="card-title">
              {{ item.title }}
            </h4>
            <b-card-text>
              {{ item.description }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'WhyWe',
  data () {
    return {
      WhyWeData: [
        {
          id: 1,
          count: 7,
          title: 'лет опыта',
          description: 'Мы на рынке уже более 7 лет и имеем за плечами огромный профессиональный опыт'
        },
        {
          id: 2,
          count: 1000,
          title: 'довольных клиентов',
          description: 'Уже более тысячи клиентов довольны нашим обслуживанием и рекомендуют нас своим друзьям и знакомым'
        },
        {
          id: 3,
          count: 100,
          title: 'постоянных клиентов',
          description: 'С нами сотрудничают уже более ста постоянных клиентов и других сервисных центров'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
