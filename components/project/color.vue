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
<style scoped>
.couleur {
  height: 150px;
  width: 150px;
}
@media only screen and (max-width: 767px) {
  .couleur {
    width: 100%;
    height: 100px;
  }
}
</style>
