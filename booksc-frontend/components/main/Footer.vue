<template>
  <footer class="page-footer font-small bs-bg">
    <b-container class="text-center text-md-left">
      <b-row>
        <b-col
          md="3"
          v-for="item in ContactsData"
          :key="item.id"
        >

          <h5
            class="font-weight-bold text-uppercase is-footer-contact-title mt-3 mb-4 text-white"
          >
            {{ item.name }}
          </h5>
          <p class="is-contacts-item">
            <i class="fas fa-map-marked" aria-hidden="true" />
            <span class="d-none" itemprop="postalCode">{{ item.address_postal }}</span>
            <span itemprop="addressLocality">{{ item.address_city }}</span>,
            <span itemprop="streetAddress">{{ item.address_street }}</span>,
            {{ item.address_station }}
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-phone" aria-hidden="true"></i>
            тел.:
            <a :href="'tel:' + item.phone" class="is-contacts-item-link">
                <span itemprop="telephone">
                    {{ item.phone }}
                </span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            email:
            <a :href="'mailto:' + item.email" class="is-contacts-item-link">
              <span itemprop="email">{{ item.email }}</span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="far fa-calendar-alt"></i>
            {{ item.work_graphic }}
          </p>
          <hr class="clearfix w-100 d-md-none">
        </b-col>
        <b-col
          md="3"
          class="offset-md-3 text-right"
          style="line-height:2;"
        >
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white" style="font-size: 1.25rem;">
            Ссылки
          </h5>
          <ul class="list-unstyled">
            <li>
              <NLink to="/">
                Главная
              </NLink>
            </li>
            <li>
              <NLink to="/services">
                Услуги и цены
              </NLink>
            </li>
            <li>
              <a
                href="https://bookparts.ru/"
                target="_blank"
              >
                Магазин BookParts
              </a>
            </li>
            <li>
              <NLink to="/contacts">
                Контакты
              </NLink>
            </li>
            <li>
              <b-button
                v-b-toggle.collapsed-ya-map
                class="map-collapse-btn"
              >
                СЦ на карте
              </b-button>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div id="map-accordeon">
      <b-card
        class="z-depth-0"
        style="background-color: transparent; border: none;"
      >
        <b-collapse id="collapsed-ya-map">
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A76ea0ff14f25dccb0001d250726fa6efa283b055a34a618a96877072ceef3fd7&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
        </b-collapse>
      </b-card>
    </div>
    <div class="footer-copyright text-center py-3">
      <p class="is_main-footer-copy">
        © 2014 - 2021 Copyright
        <a href="https://booksc.ru"> Сеть сервисных центров Book-Service</a> <br>
        ИП Моисеенко К.А. ИНН: 323307422295 ОГРНИП: 314325624800051 <br>
        Копирование и распространение материалов с данного сайта только с разрешения администрации сайта и с указанием ссылки на первоисточник. <br> Цены, указанные на сайте, не являются публичной офертой. Для уточнения цен необходимо обратиться в офис компании.
        <br>
        Developed by
        <a
          href="https://iceslam.ru"
          target="_blank"
        >
          IceSlam
        </a>
        and based on
        Nuxt.js and Strapi
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      ContactsData: [
        {
          id: 1,
          name: 'Book-Service Красноармейская',
          address_postal: '241037',
          address_city: 'Брянск',
          address_street: 'Красноармейская ул., 170',
          address_station: 'ост. Памятник летчикам',
          phone: '+7-900-373-6000',
          email: 'help@booksc.ru',
          work_graphic: 'ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00'
        },
        {
          id: 2,
          name: 'Book-Service ТД Весна',
          address_postal: '241035',
          address_city: 'Брянск',
          address_street: 'III Интернационала ул., 17А',
          address_station: 'ТД Весна',
          phone: '+7-930-720-2222',
          email: 'help@booksc.ru',
          work_graphic: 'ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00'
        }
      ]
    }
  }
}
</script>

<style type="scss" scoped>
.bs-bg {
  background-color: #a8312d;
  border-radius: 0 !important;
  border: none !important;
}
.is-footer-contact-title {
  font-size: 1.25rem;
}
.is-contacts-item {
  color: #ffffff;
  font-size: .9rem;
}
.is-contacts-item-link {
  color: #ffffff;
}
.list-unstyled li a {
  color: #ffffff;
}
.card-body {
  padding: 0;
}
.map-collapse-btn,
.map-collapse-btn:active,
.map-collapse-btn:checked,
.map-collapse-btn:hover,
.map-collapse-btn:focus{
  padding: 0;
  background-color: transparent;
  border: none;
}
.footer-copyright {
  color: rgba(255,255,255,.6);
  background-color: rgba(0,0,0,.2);
  font-weight: 600;
}
.footer-copyright a {
  color: #ffffff;
}
</style>
