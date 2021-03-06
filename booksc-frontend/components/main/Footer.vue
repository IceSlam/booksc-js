<template>
  <footer class="page-footer font-small bs-bg">
    <b-container class="text-center text-md-left">
      <b-row>
        <b-col
          md="3"
          class="mx-auto"
        >
          <h5
            class="font-weight-bold text-uppercase mt-3 mb-4 text-white"
          >
            Book-Service Красноармейская
          </h5>
          <p class="is-contacts-item">
            <i class="fas fa-map-marked" aria-hidden="true" />
            <span class="d-none" itemprop="postalCode">241037</span>
            <span itemprop="addressLocality">Брянск</span>,
            <span itemprop="streetAddress">Красноармейская ул., 170</span>,
            ост. Памятник летчикам
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-phone" aria-hidden="true"></i>
            тел.:
            <a href="tel:+79003736000" class="is-contacts-item-link">
                <span itemprop="telephone">
                    +7-900-373-6000
                </span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            email:
            <a href="mailto:help@booksc.ru" class="is-contacts-item-link">
              <span itemprop="email">help@booksc.ru</span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="far fa-calendar-alt"></i>
            ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00
          </p>
        </b-col>
        <hr class="clearfix w-100 d-md-none">
        <b-col
          md="3"
          class="mx-auto"
        >
          <h5
            class="font-weight-bold text-uppercase mt-3 mb-4 text-white">
            Book-Service <br> ТД Весна
          </h5>
          <p class="is-contacts-item">
            <i class="fas fa-map-marked" aria-hidden="true" />
            <span class="d-none" itemprop="postalCode">241037</span>
            <span itemprop="addressLocality">Брянск</span>,
            <span itemprop="streetAddress">III Интернационала ул., 17А</span>,
            ост. Почта, ТД Весна, 4 этаж
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-phone" aria-hidden="true" />
            тел.:
            <a href="tel:+79307202222" class="is-contacts-item-link">
                <span itemprop="telephone">
                    +7-930-720-2222
                </span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            email:
            <a href="mailto:help@booksc.ru" class="is-contacts-item-link">
              <span itemprop="email">help@booksc.ru</span>
            </a>
          </p>
          <p class="is-contacts-item">
            <i class="far fa-calendar-alt"></i>
            ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00
          </p>
        </b-col>
        <hr class="clearfix w-100 d-md-none">
        <b-col
          md="3"
          class="mx-auto offset-md-3 text-right"
          style="line-height:2;"
        >
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white">
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
  name: 'Footer'
}
</script>

<style type="scss" scoped>
.bs-bg {
  background-color: #a8312d;
  border-radius: 0 !important;
  border: none !important;
}
.is-contacts-item {
  color: #ffffff;
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
