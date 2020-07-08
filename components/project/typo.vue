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
.typo {
  text-align: left;
  margin: 0;
  width: 100%;
  margin-bottom: 40px;
}
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
.typo > figcaption > h4 {
  color: #4bd0d0;
  padding-bottom: 20px;
}

.typo > figcaption {
  margin-left: 20%;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 20%;
}

.typo > figcaption > h4 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 100;
}
.typo > figcaption > p {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
}
.typo > p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 100;
}
@media only screen and (max-width: 767px) {
  .typo > figcaption {
    margin: 0;
    width: 40%;
  }
  .typo > figcaption > h4 {
    font-size: 22px;
  }
  .typo > figcaption > p {
    font-size: 14px;
  }
  .typo > p {
    font-size: 14px;
    line-height: normal;
  }
}
</style>
