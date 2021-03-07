<template>
  <section
    id="social"
    class="is_main-social view wow fadeIn"
    data-wow-duration="1s"
  >
    <div class="mask rgba-black-strong"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 flex-content">
          <div class="align-middle">
            <br>
            <h2 class="is_main-social-title text-center text-uppercase text-white wow slideInUp" data-wow-duration="2s">
              Остались вопросы?
            </h2>
            <p class="is_main-social-caption wow slideInUp" data-wow-duration="2s">
              Следите за нами в официальных аккаунтах ВКонтакте и Instagram
            </p>
          </div>
        </div>
        <div class="col-md-4 wow slideInUp" data-wow-duration="2s">
          <center>
            <script type="text/javascript" src="https://vk.com/js/api/openapi.js?167"></script>
            <!-- VK Widget -->
            <div id="vk_groups"></div>
            <script type="text/javascript">
              VK.Widgets.Group('vk_groups', {mode: 3, color1: 'A8312D', color2: 'FFF', color3: 'FFF'}, 77717062);
            </script>
          </center>
          <br>
        </div>
        <div class="col-md-4 wow slideInUp" data-wow-duration="2s">
          <iframe src="https://averin.pro/widget.php?l=bookservice32&style=2&width=250&gallery=0&s=80&icc=3&icr=3&t=1&tt=Мы в Инстаграм&h=1&ttcolor=FFFFFF&th=c3c3c3&bw=ffffff&bscolor=FFFFFF&bs=a8312d&ts=Подписаться&ch=utf8" allowtransparency="true" frameborder="0" scrolling="no" style="background:rgba(255,255,255,.01);border:none;overflow:hidden;width:350px;height:300px;" ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialWidgets'
}
</script>

<style scoped>

</style>
