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
      imgSrc: '/images/technos/' + this.techno.toLowerCase() + '.svg',
      imgAlt: 'logo pour la technologie : ' + this.techno,
    }
  },
}
</script>
<style scoped lang="sass">
.shield
  display: inline-block
  box-sizing: border-box
  vertical-align: top
  width: 200px
  padding: 3%

@media only screen and (max-width: 767px)
  .shield
    width: 32%
</style>
