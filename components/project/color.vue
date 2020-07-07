<template>
  <figure class="hc">
    <div class="couleur c3" :style="style" />
    <figcaption>
      <p>{{ color }}</p>
    </figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    color: { type: String, require: true, default: 'white' },
  },
  computed: {
    style() {
      return 'background-color: ' + this.color
    },
  },
}
</script>
