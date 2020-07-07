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

.hc {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;

  background-color: white;
  margin: 0;
  margin-left: 4%;
  margin-right: 4%;
  -webkit-box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  transition-duration: 0.4s;
}

.hc > figcaption > p {
  padding: 12px;
}
@media only screen and (max-width: 767px) {
  .couleur {
    width: 100%;
    height: 100px;
  }
  .hc {
    width: 29%;
    margin: 2%;
  }
}
</style>
