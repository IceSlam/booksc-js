<template>
  <div class="content">
    <lazy-main-top/>
    <lazy-main-choise/>
    <lazy-home-choice/>
    <lazy-home-brands/>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'home',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.content {
  transition: $transition;
  margin-left: 80px;
  &.active {
    transform: translateX(220px);
    max-width: 100%;
    opacity: 0.8;
  }
}
.top {
  &:hover {
    & + .content {
      transform: translateX(220px);
      max-width: 100%;
      opacity: 0.8;
    }
  }
}

</style>
