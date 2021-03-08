<template>
  <section id="top" class="is_main-top">
    <b-container>
      <h2 class="is_main-top-title text-center text-uppercase mb-5">
        Наши услуги
      </h2>
      <b-row>
        <b-col
          v-for="item in TopServicesData"
          :key="item.id"
          class="mb-4"
          md="4"
          sm="6"
        >
          <b-card
            style="background-image: url(/img/smartphone.webp);"
          >
            <div class="mask d-flex align-items-center rgba-stylish-light py-3 px-2" />
            <div class="py-3 px-2 position-relative">
              <NLink
                class="bs-text d-block"
                :to="item.category_link"
              >
                <i :class="item.fa_icon" />
                {{ item.category_name }}
              </NLink>
              <NLink
                class="card-title pt-2 text-white text-center text-uppercase d-block mt-5"
                style="font-size: 1.5rem;min-height: 80px;"
                :to="item.category_link"
              >
                <strong>
                  {{ item.service_name }}
                </strong>
              </NLink>
              <p
                class="text-center text-white"
                style="min-height: 144px;"
              >
                {{ item.service_desription }}
              </p>
              <NLink
                :to="item.category_link"
                class="text-center text-white d-block mx-auto"
              >
                от
                <span style="font-size: 3em;">
                  {{ item.min_price }}
                </span>
                руб.
              </NLink>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'TopServices',
  data () {
    return {
      TopServicesData: [
        {
          id: 1,
          category_name: 'Apple',
          fa_icon: 'fab fa-apple',
          service_name: 'Замена экрана на iPhone',
          service_desription: 'Замена экрана (дисплейного модуля) на смартфонах Apple iPhone различных поколений на экрана качества Оригинал, а также на дисплеи с идеальным соотношением цена-качество',
          category_link: '/services/apple',
          min_price: 699
        },
        {
          id: 2,
          category_name: 'Смартфоны',
          fa_icon: 'fas fa-mobile-alt',
          service_name: 'Удаление Google FRP',
          service_desription: 'Удаление блокировки телефона Google-аккаунтом (FRP) в следствие неправильного сброса устройства к заводским настройкам, либо ошибкам в работе ОС Android / неполадкам в работе телефона',
          category_link: '/services/smartphone',
          min_price: 399
        },
        {
          id: 3,
          category_name: 'Планшеты',
          fa_icon: 'fas fa-tablet-alt',
          service_name: 'Замена разъема на планшете',
          service_desription: 'Замена системных разъемов microUSB, аудио- и видеоразъемов на планшетных ПК марок Acer, DEXP, DNS, Irbis, Samsung, Digma, Xiaomi и других производителей в кратчайшие сроки с гарантией на выполненные работы',
          category_link: '/services/tablet',
          min_price: 299
        },
        {
          id: 4,
          category_name: 'Ноутбуки',
          fa_icon: 'fas fa-laptop',
          service_name: 'Ремонт корпуса ноутбука',
          service_desription: 'Ремонт корпуса или его замена на новый на ноутбуках, марок Samsung, Dell, Lenovo, Acer, Asus, MSI и многих других с гарантией на выполненные работы от 1 месяца!',
          category_link: '/services/laptop',
          min_price: 999
        },
        {
          id: 5,
          category_name: 'Настольные ПК',
          fa_icon: 'fas fa-desktop',
          service_name: 'Замена комплектующих',
          service_desription: 'Замена комплектующих настольного персонального компьютера на новые вместо неисправных, так и на более мощные(апгрейд) комплектующие с гарантией от СЦ, так и от вендоров',
          category_link: '/services/desktop',
          min_price: 299
        },
        {
          id: 6,
          category_name: 'IQOS',
          fa_icon: 'fas fa-smoking',
          service_name: 'Ремонт нагревателя IQOS',
          service_desription: 'Профессиональная замена нагревательного элемента (лезвия) на специальном оборудовании. В стоимость входит стоимость работы + запчасть + чистка',
          category_link: '/services/iqos',
          min_price: 799
        }
      ]
    }
  }
}
</script>

<style scoped>
.is_main-top .card {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: default;
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-attachment: fixed;
}
.rgba-stylish-light {
  background-color: rgba(62,69,81,.3);
}
</style>
