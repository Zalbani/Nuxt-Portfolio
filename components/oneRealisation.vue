<template>
  <figure>
    <img :src="image.url" :alt="image.imageAlt" />
    <figcaption>
      <p>{{ title }}</p>
      <p>{{ actions }}</p>
    </figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    title: { type: String, require: true, default: 'coucou' },
    actions: { type: String, require: true, default: 'Design & Integration' },
    image: {
      type: Object,
      require: true,
      default() {
        return {
          image: {
            url: 'medias/images/projet_fast_cafet/fast_presentation.jpg',
            imageAlt: '',
          },
        }
      },
    },
  },
}
</script>
<style scoped>
figure {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  background-color: white;
  width: 25%;
  margin: 0;
  margin-left: 7%;
  margin-bottom: 7%;
  -webkit-box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 1px 6px 2px rgba(0, 0, 0, 0.4);
  transition-duration: 0.4s;
  border-radius: 4px;
}

figure:hover {
  transition-duration: 0.4s;
  transform: translate(0, -15px);
  -webkit-box-shadow: 3px 9px 6px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 9px 6px 2px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 1px 9px 2px rgba(0, 0, 0, 0.4);
}

figure > img {
  width: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}

figure > figcaption {
  background-color: white;
  margin: 5%;
}

figure > figcaption > p:first-of-type {
  text-transform: capitalize;
  color: black;
  padding-bottom: 10px;
}

figure > figcaption > p:last-of-type {
  color: #525252;
}
@media only screen and (max-width: 767px) {
  figure {
    margin: 0;
    margin-bottom: 50px;
    width: 100%;
  }
  figure > img {
    height: auto;
  }
  figure > figcaption {
    height: 30px;
    margin: 10%;
  }
  figure > figcaption > br {
    display: none;
  }
  figure > figcaption > p:last-of-type {
    margin-top: 10px;
  }
  figure > figcaption > p:first-of-type {
    font-size: 16px;
  }
  figure > figcaption > p:last-of-type {
    font-size: 12px;
  }
}
</style>
