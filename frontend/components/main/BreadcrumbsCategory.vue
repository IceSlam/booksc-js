<template>
  <section id="page-heading" class="is_main-page-heading">
    <b-container>
      <b-row
        v-if="breadcrumbsPageTitle.length"
      >
        <b-col
          md="6"
        >
          <h2 class="is_main-page-heading-title">
            {{ breadcrumbsPageTitle }}
          </h2>
        </b-col>
        <b-col
          md="6"
        >
          <nav aria-label="breadcrumb is_main-heading-breadcrumbs text-right">
            <ol style="float:right;" class="breadcrumb is_main-heading-breadcrumbs">
              <li class="breadcrumb-item">
                <NLink to="/" exact>
                  Главная
                </NLink>
              </li>
              <li class="breadcrumb-item">
                <NLink to="/services">
                  Услуги и цены
                </NLink>
              </li>
              <li class="breadcrumb-item active">
                {{ breadcrumbsPageTitle }}
              </li>
            </ol>
          </nav>
        </b-col>
      </b-row>
      <b-row
        v-else
      >
        <LoadAnimation />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'BreadcrumbsCategory',
  components: {
    LoadAnimation: () => import('@/components/main/LoadAnimation')
  },
  props: {
    breadcrumbsPageTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
