<template>
  <section id="page-heading" class="is_main-page-heading">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="is_main-page-heading-title wow slideInLeft" data-wow-duration="2s">
            Название категории
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
              <li class="breadcrumb-item active">Название услуги</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Heading'
}
</script>

<style scoped>

</style>
