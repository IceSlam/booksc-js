<template>
  <footer
    v-if="footerData"
    class="page-footer font-small bs-bg"
  >
    <b-container class="text-center text-md-left">
      <b-row v-if="footerData.settings_contacts">
        <b-col
          v-for="contact in footerData.settings_contacts"
          :key="contact.id"
          md="3"
        >
          <h5
            class="font-weight-bold text-uppercase is-footer-contact-title mt-3 mb-4 text-white"
            style="min-height: 56px;"
          >
            {{ contact.contact_title }}
          </h5>
          <p class="is-contacts-contact">
            <i class="fas fa-map-marked" aria-hidden="true" />
            <span class="d-none" contactprop="postalCode">{{ contact.contact_postal }}</span>
            <span contactprop="addressLocality">{{ contact.contact_city }}</span>,
            <span contactprop="streetAddress">{{ contact.contact_street }}</span>,
            {{ contact.contact_busstation }}
          </p>
          <p class="is-contacts-contact">
            <i class="fas fa-phone" aria-hidden="true" />
            тел.:
            <a :href="'tel:' + contact.contact_phone" class="is-contacts-contact-link">
              <span contactprop="telephone">
                {{ contact.contact_phone }}
              </span>
            </a>
          </p>
          <p class="is-contacts-contact">
            <i class="fas fa-envelope" aria-hidden="true" />
            email:
            <a :href="'mailto:' + contact.contact_email" class="is-contacts-contact-link">
              <span contactprop="email">{{ contact.contact_email }}</span>
            </a>
          </p>
          <p class="is-contacts-contact">
            <i class="far fa-calendar-alt" />
            {{ contact.contact_time }}
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
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A76ea0ff14f25dccb0001d250726fa6efa283b055a34a618a96877072ceef3fd7&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true" />
        </b-collapse>
      </b-card>
    </div>
    <div class="footer-copyright text-center py-3">
      <p class="is_main-footer-copy mb-2">
        © 2014 - 2021 Copyright
        <a href="https://booksc.ru"> Сеть сервисных центров Book-Service</a> <br>
        ИП Моисеенко К.А. ИНН: 323307422295 ОГРНИП: 314325624800051 <br>
        Копирование материалов с данного сайта запрещено. <br> Цены, указанные на сайте, не являются публичной офертой.
        <br>Для уточнения цен необходимо обратиться в офис компании.
        <br>
        Developed by
        <a
          href="https://iceslam.ru"
          target="_blank"
        >
          IceSlam
        </a>
        and based on
        <a
          href="https://nuxtjs.org/"
          target="_blank"
        >
          Nuxt.js
        </a> and
        <a
          href="https://strapi.io/"
          target="_blank"
        >
          Strapi.js
        </a>
        <br>
        Powered by
        <a
          href="https://netangels.ru/?p_ref=u92953"
          target="_blank"
        >
          NetAngels - Professional hosting
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footerData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data: () => ({
  })
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
.is-contacts-contact {
  color: #ffffff;
  font-size: .9rem;
}
.is-contacts-contact-link {
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
