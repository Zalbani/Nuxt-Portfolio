<template>
  <a
    class="SocialMedia"
    :href="url"
    :style="style"
    @mouseover="mouseOver()"
    @mouseleave="mouseLeave()"
  >
    <font-awesome-icon :icon="icon" />
  </a>
</template>
<script>
export default {
  props: {
    iconPrefix: { type: String, require: false, default: 'fas' },
    iconName: { type: String, require: true, default: 'paper-plane' },
    url: { type: String, require: false, default: '#' },
    overColor: { type: String, require: false, default: '#05dfd7' },
  },
  data() {
    return {
      icon: [this.iconPrefix, this.iconName],
      hovering: false,
    }
  },
  computed: {
    style() {
      if (this.hovering === true) {
        return 'color: ' + this.overColor
      } else {
        return 'color: white'
      }
    },
  },
  methods: {
    mouseOver() {
      this.hovering = true
    },
    mouseLeave() {
      this.hovering = false
    },
  },
}
</script>
<style lang="sass" scoped>
a.SocialMedia
  text-decoration: none
  color: white
  width: 40px
  list-style: none
  display: inline-block
  vertical-align: top
  padding-left: 2px
  transition-duration: 0.4s
  i
    padding-top: 12px
    color: white
    transition-duration: 0.4s
  &:hover
    transition-duration: 0.4s
    transform: translate(0, -8px)
</style>
