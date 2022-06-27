<template>
   <a class="is-button"
      :class="className"
    @click="$emit('click')"
   >
     <slot>
       <fai
         class="is-button__icon"
         :icon="prefIcon"
        v-if="prefIcon"
       />
       {{text}}
     </slot>
   </a>
</template>

<script>
export default {
  name: "isButton",
  props: {
    text: {
      type: String,
      default: 'button'
    },
    prefIcon: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        'active' : this.active
      }
    }
  }
}
</script>

<style scoped lang="scss">
.is-button {
  display: inline-block;
  padding: 20px 40px;
  text-transform: uppercase;
  background: $bsColor;
  color: #fff;
  transition: $transition;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 14px;
  border: 1px solid $bsColor;
  cursor: pointer;
  &:hover {
    color: $bsColor;
    background: #fff;
  }
  & + .active {
    color: $bsColor;
    background:#fff;
    &:hover {
      color: #fff;
      background: $bsColor;
    }
  }
  &__icon {
    width: $wIcon;
    height: $wIcon;
    border-radius: 50%;
    display: block;
    background: #fff;
    margin: 0 auto 10px;
    overflow: hidden;
  }
}

</style>
