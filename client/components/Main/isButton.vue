<template>
   <component class="is-button"
      :class="className"
      :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
      :to="to"
      :href="href"
      @click="$emit('click')"
   >
     <slot>
       {{text}}
     </slot>
   </component>
</template>

<script>
export default {
  name: "isButton",
  props: {
    text: {
      type: String,
      default: 'button'
    },
    active: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
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
  padding: 16px 32px;
  text-transform: uppercase;
  background: $bsColor;
  color: #fff;
  transition: $transition;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
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
}

</style>
