<template>
  <section
    id="social"
    class="is_main-social"
  >
    <div class="mask rgba-black-strong" />
    <b-container>
      <b-row>
        <b-col
          md="4"
        >
          <div class="align-middle">
            <br>
            <h2 class="is_main-social-title text-center text-uppercase text-white wow slideInUp" data-wow-duration="2s">
              Остались вопросы?
            </h2>
            <p class="is_main-social-caption wow slideInUp" data-wow-duration="2s">
              Следите за нами в официальных аккаунтах ВКонтакте и Instagram
            </p>
          </div>
        </b-col>
        <b-col
          md="4"
        />
        <b-col
          class="d-flex align-items-center justify-content-center"
          md="4"
        >
          <script type="text/javascript" src="https://vk.com/js/api/openapi.js?167" />
          <div id="vk_groups" />
          <script type="text/javascript">
            VK.Widgets.Group('vk_groups', {mode: 3, color1: 'A8312D', color2: 'FFF', color3: 'FFF'}, 77717062);
          </script>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SocialWidgets'
}
</script>

<style scoped>
.is_main-social {
  position: relative;
}
.mask {
  position: absolute;
  top: 0;
  right: 0 !important;
  bottom: 0;
  left: 0;
}
.rgba-black-strong {
  background: rgba(0,0,0,.75);
}

</style>
