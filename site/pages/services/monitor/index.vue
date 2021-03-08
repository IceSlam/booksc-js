<template>
  <div>
    <section id="page-heading" class="is_main-page-heading">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="is_main-page-heading-title wow slideInLeft" data-wow-duration="2s">
              {{ pageTitle }}
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
                <li class="breadcrumb-item">
                  <nuxt-link to="/services" exact>
                    Услуги и цены
                  </nuxt-link>
                </li>
                <li class="breadcrumb-item active">{{ pageTitle }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <article
      id="content"
      class="is_main-content wow fadeIn"
      data-wow-duration="1s"
    >
    </article>
  </div>
</template>

<script>
export default {
  name: 'TabletCategory',
  layout: 'category',
  data () {
    return {
      pageTitle: 'Ремонт мониторов'
    }
  },
  head () {
    return {
      title: this.pageTitle + ' - Сеть сервисных центров Book-Service',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Ремонт телефонов, планшетов, ноутбуков и компьютеров, техники Apple и устройств IQOS'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/logotype.png' }]
    }
  }
}
</script>

<style scoped>

</style>
