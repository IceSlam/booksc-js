<template>
  <article id="content" class="is_main-content wow fadeIn " data-wow-duration="1s">
    <section id="page-heading" class="is_main-page-heading">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="is_main-page-heading-title wow slideInLeft" data-wow-duration="2s">
              {{ PageTitle }}
            </h2>
          </div>
          <div class="col-md-6 text-right">
            <nav aria-label="breadcrumb is_main-heading-breadcrumbs text-right">
              <ol style="float:right;" class="breadcrumb is_main-heading-breadcrumbs wow slideInRight" data-wow-duration="2s">
                <li class="breadcrumb-item">
                  <nuxt-link to="/" exact>
                    Главная
                  </nuxt-link>
                </li>
                <li class="breadcrumb-item active">{{ PageTitle }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts-page" class="is_main-contacts-page container">
      <div class="row">
        <div class="col-md-12">
          <p style="color: #ccc;margin-bottom: 2em;" class="text-center wow slideInUp" data-wow-duration="2s">
            <img src="/img/logotype.png" alt="Book-Service" class="img-fluid">
          </p>
          <p style="color: #333;" class="text-center text-uppercase wow slideInUp" data-wow-duration="2s">
            Сеть сервисных центров
          </p>
          <p style="color: #a8312d;margin-bottom: 2em;" class="display-4 text-center text-uppercase wow slideInUp is_main-contacts-page-title" data-wow-duration="2s">
            Book-Service
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 wow slideInLeft" data-wow-duration="2s">
          <p>ИП Моисеенко Кирилл Александрович</p>
          <p>ИНН: 323307422295</p>
          <p>ОГРНИП: 314325624800051</p>
          <p>Юр. адрес: 241035, Россия, Брянская обл., г. Брянск, Бежицкий район, 3го Интернационала ул., 17, корп. А, 4 этаж, офис 403</p>
          <p>тел.: +7-910-290-08-08</p>
          <p>email: kirill1661@mail.ru</p>
        </div>
        <div class="col-md-6"></div>
      </div>
      <div style="margin-top: 1em;" class="row">
        <div class="col-md-6">
          <h3 class="is_contacts-page-reg-title">Советский район</h3>
          <br>
          <p class="is_contacts-page-text">Брянск, Красноармейская ул., 174, ост. Электроника</p>
          <p class="is_contacts-page-text">График работы: ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00</p>
          <p class="is_contacts-page-text">тел.: <a href="tel:+79003736000"> +7-900-373-6000 </a></p>
          <p class="is_contacts-page-text">email: <a href="mailto:help@booksc.ru"> help@booksc.ru </a></p>
        </div>
        <div class="col-md-6">
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad89c29f9c68b079b789829bea8c6f1c31019667da3e0dc929a2f5abc1775837a&amp;width=100%25&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
      </div>
      <div style="margin-top: 1em;" class="row">
        <div class="col-md-6">
          <h3 class="is_contacts-page-reg-title">Бежицкий район</h3>
          <br>
          <p class="is_contacts-page-text">Брянск, 3го Интернационала ул., 17А, 4 этаж, ост. Почта, ТД Весна</p>
          <p class="is_contacts-page-text">График работы: ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00</p>
          <p class="is_contacts-page-text">тел.: <a href="tel:+79307202222"> +7-930-720-2222 </a></p>
          <p class="is_contacts-page-text">email: <a href="mailto:help@booksc.ru"> help@booksc.ru </a></p>
        </div>
        <div class="col-md-6">
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad89c29f9c68b079b789829bea8c6f1c31019667da3e0dc929a2f5abc1775837a&amp;width=100%25&amp;height=240&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  layout: 'contacts',
  name: 'ContactsPage',
  data () {
    return {
      PageTitle: 'Контактная информация'
    }
  },
  head () {
    return {
      title: this.PageTitle + ' Сеть сервисных центров Book-Service',
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

<style></style>
