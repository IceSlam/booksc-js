<template>
  <b-col
    class="load-block"
    md="12"
  >
    <b-row>
      <b-col
        md="12"
        class="load-animation mb-3"
      />
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'LoadAnimation'
}
</script>

<style scoped>
.load-animation {
  padding: 34px;
  background: #f5f5f5;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-animation-name: fast-loading;
  animation-name: fast-loading;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: ease
}

@keyframes fast-loading {
  0% {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, #f5f5f5 100%);
    opacity: 0;
  }
  5% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 5%, #f5f5f5 100%);
    opacity: .25;
  }
  10% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 10%, #f5f5f5 100%);
    opacity: .5;
  }
  15% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 15%, #f5f5f5 100%);
    opacity: .75;
  }
  20% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 20%, #f5f5f5 100%);
    opacity: 1;
  }
  25% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 25%, #f5f5f5 100%);
  }
  30% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 30%, #f5f5f5 100%);
  }
  35% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 35%, #f5f5f5 100%);
  }
  40% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 40%, #f5f5f5 100%);
  }
  45% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 45%, #f5f5f5 100%);
  }
  50% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 50%, #f5f5f5 100%);
  }
  55% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 55%, #f5f5f5 100%);
  }
  60% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 60%, #f5f5f5 100%);
  }
  65% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 65%, #f5f5f5 100%);
  }
  70% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 70%, #f5f5f5 100%);
  }
  75% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 75%, #f5f5f5 100%);
  }
  80% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 80%, #f5f5f5 100%);
    opacity: 1;
  }
  85% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 85%, #f5f5f5 100%);
    opacity: .75;
  }
  90% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 90%, #f5f5f5 100%);
    opacity: .5;
  }
  95% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 95%, #f5f5f5 100%);
    opacity: .25;
  }
  100% {
    background: linear-gradient(90deg, #f5f5f5 0%, rgba(255,255,255,1) 100%);
    opacity: 0;
  }
}
</style>
