<template>
  <footer class="page-footer font-small bs-bg wow fadeIn" data-wow-duration="1s">
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 wow slideInUp" data-wow-duration="2s">
            Book-Service Электроника
          </h5>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-map-marked" aria-hidden="true"></i>
            <span class="d-none" itemprop="postalCode">241037</span>
            <span itemprop="addressLocality">Брянск</span>, <span itemprop="streetAddress">Красноармейская ул., 174</span>, ост. Электроника
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-phone" aria-hidden="true"></i>
            тел.:
            <a href="tel:+79003736000" class="is_contacts-item-link">
                <span itemprop="telephone">
                    +7-900-373-6000
                </span>
            </a>
          </p>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            email:
            <a href="mailto:help@booksc.ru" class="is_contacts-item-link">
              <span itemprop="email">help@booksc.ru</span>
            </a>
          </p>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="far fa-calendar-alt"></i>
            ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-md-3 mx-auto">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4 wow slideInUp" data-wow-duration="2s">
            Book-Service <br>ТД Весна
          </h5>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-map-marked" aria-hidden="true"></i>
            <span class="d-none" itemprop="postalCode">241037</span>
            <span itemprop="addressLocality">Брянск</span>, <span itemprop="streetAddress">III Интернационала ул., 17А</span>, ост. Почта, ТД Весна, 4 этаж
          </p>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-phone" aria-hidden="true"></i>
            тел.:
            <a href="tel:+79307202222" class="is_contacts-item-link">
                <span itemprop="telephone">
                    +7-930-720-2222
                </span>
            </a>
          </p>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            email:
            <a href="mailto:help@booksc.ru" class="is_contacts-item-link">
              <span itemprop="email">help@booksc.ru</span>
            </a>
          </p>
          <p class="is_contacts-item wow slideInUp" data-wow-duration="2s">
            <i class="far fa-calendar-alt"></i>
            ПН-СБ: 10:00 - 19:00 / ВС: 10:00 - 18:00
          </p>
        </div>
        <hr class="clearfix w-100 d-md-none">
        <div class="col-md-3 mx-auto">
        </div>
        <div class="col-md-3 mx-auto text-right wow slideInRight" data-wow-duration="2s" style="line-height:2;">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
            Ссылки
          </h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Главная</a>
            </li>
            <li>
              <a href="#!">Услуги и цены</a>
            </li>
            <li>
              <a href="#!">Магазин BSMarket</a>
            </li>
            <li>
              <a href="#!" data-toggle="modal" data-target="#exampleModalCenter">Статус ремонта</a>
            </li>
            <li>
              <a href="#!">О компании</a>
            </li>
            <li>
              <a href="#!">Контакты</a>
            </li>
            <li>
              <a data-toggle="collapse" data-target="#collapseOne2" href="#!">
                СЦ на карте
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="" id="map-accordeon" name="map-accordeon">
      <div class="card z-depth-0">
        <div
          id="collapseOne2"
          class="collapse"
          aria-labelledby="headingOne2"
          data-parent="#map-accordeon"
        >
          <div class="card-body map-card-body">
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A76ea0ff14f25dccb0001d250726fa6efa283b055a34a618a96877072ceef3fd7&amp;width=100%25&amp;height=450&amp;lang=ru_RU&amp;scroll=true"></script>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3">
      <p class="is_main-footer-copy">
        © 2014 - 2020 Copyright
        <a href="https://booksc.ru"> Сеть сервисных центров Book-Service</a> <br>
        ИП Моисеенко К.А. ИНН: 323307422295 ОГРНИП: 314325624800051 <br>
        Копирование и распространение материалов с данного сайта только с разрешения администрации сайта и с указанием ссылки на первоисточник. <br> Цены, указанные на сайте, не являются публичной офертой. Для уточнения цен необходимо обратиться в офис компании.
        <br>
        Developed by
        <a href="https://vk.com/iceslam">
          IceSlam
        </a>
        and based on
        <a href="https://modx.com/">
          Modx Revolution
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
