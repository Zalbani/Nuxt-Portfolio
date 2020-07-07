<template>
  <img :src="imgSrc" class="shield" :alt="imgAlt" />
</template>
<script>
export default {
  props: {
    techno: { type: String, require: true, default: 'white' },
  },
  data() {
    return {
      imgSrc: '/medias/images/V_Tech/' + this.techno.toLowerCase() + '.png',
      imgAlt: 'logo pour la technologie : ' + this.techno,
    }
  },
}
</script>
<style scoped>
.shield {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 200px;
  padding: 3%;
}

@media only screen and (max-width: 767px) {
  .shield {
    width: 32%;
  }
}
</style>
