<template>
  <section id="page-heading" class="is_main-page-heading">
    <b-container>
      <b-row>
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
              <li class="breadcrumb-item active">
                {{ breadcrumbsPageTitle }}
              </li>
            </ol>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumbs',
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
