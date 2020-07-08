<template>
  <figure class="typo">
    <link :href="typoUrl" rel="stylesheet" />
    <figcaption>
      <h4>{{ typoName }}</h4>
      <p>{{ typoDesc }}</p>
    </figcaption>
    <p :style="style">
      A Z E R T Y U I O P Q S D F G H J K L M W X C V B N a z e r t y u i o p q
      s d f g h j k l m w x c v b n :/ , ; ! % ? 1 2 3 4 5 6 7 8 9 0
    </p>
  </figure>
</template>
<script>
export default {
  props: {
    typoName: { type: String, require: true, default: 'Montsérat' },
    typoDesc: {
      type: String,
      require: true,
      default: "Plus légère plus avec plus d'oxygène",
    },
    typoUrl: {
      type: String,
      require: true,
      default:
        'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
    },
    cssProperty: { type: String, require: true, default: 'Montserrat' },
    serif: { type: Boolean, require: false, default: false },
  },
  computed: {
    style() {
      if (this.serif === true) {
        return "font-family: '" + this.cssProperty + "', serif"
      } else {
        return "font-family: '" + this.cssProperty + "', sans-serif"
      }
    },
  },
}
</script>
<style scoped>
.typo > p {
  display: inline-block;
  vertical-align: bottom;
  margin-left: 10%;
  width: 35%;
  height: 80px;
  padding-top: 5px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 100;
}
</style>
