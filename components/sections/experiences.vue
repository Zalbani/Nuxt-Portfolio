<template>
  <section class="expe">
    <h2>Mes expériences</h2>
    <div class="entries">
      <component-experience
        v-for="(experience, index) in dataExperiences"
        :key="'experience_' + index"
        :title="experience.title"
        :specialite="experience.specialite"
        :date="experience.date"
        :image="experience.image"
      />
    </div>
  </section>
</template>
<script>
import componentExperience from '~/components/oneExperience'

import dataExperiences from '~/static/data/experiences.json'

export default {
  components: {
    componentExperience,
  },
  data() {
    return { dataExperiences }
  },
}
</script>
<style scoped>
.expe > h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 70px;
  letter-spacing: 0.4px;
  font-weight: 100;
}
.expe {
  position: relative;
  height: 1250px;
}
.expe:before {
  content: '';
  position: absolute;
  top: 250px;
  height: 930px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 4px;
  background-color: #fff;
}
.entries {
  width: calc(100% - 80px);
  max-width: 800px;
  margin: auto;
  position: relative;
  left: -5px;
}
.expe > h2 {
  color: white;
  text-align: center;
  padding-top: 125px;
  padding-bottom: 50px;
}

.expe > figure > figcaption > article > h3 {
  font-family: 'Roboto Thin', sans-serif;
  color: #4bd0d0;
}

.expe > figure > figcaption > article > p:first-of-type {
  color: white;
}

.expe > figure > figcaption > article > p:last-of-type {
  color: #525252;
}

.expe > figure > figcaption {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: auto;
  padding-top: 125px;
  margin-left: 30%;
}

.expe > figure > img {
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  width: 200px;
  height: 200px;
  margin-top: 75px;
  margin-left: 15%;
}
.expe > figure > figcaption > article > h3 {
  font-size: 29px;
}

.expe > figure > figcaption > article > p {
  font-size: 27px;
}
@media only screen and (max-width: 767px) {
  .expe > h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    letter-spacing: 0.2px;
  }
  .expe {
    padding: 0;
  }

  .expe:before {
    display: none;
  }

  .expe > h2 {
    padding: 40px;
  }

  .expe > figure {
    margin: 0;
    margin-left: 20%;
    margin-top: 15%;
  }

  .expe > figure > img {
    text-align: center;
    margin: 0;
    width: 80px;
    height: 80px;
    margin-left: 5%;
  }

  .expe > figure > figcaption {
    width: 50%;
    margin: 0;
    padding: 0;
  }
  .expe > figure > figcaption > article {
    margin: 10px;
    margin-right: 0;
    padding-left: 10%;
  }
  .expe > figure > figcaption > article > h3 {
    font-size: 20px;
  }
  .expe > figure > figcaption > article > p:first-of-type {
    font-size: 18px;
  }
  .expe > figure > figcaption > article > p:last-of-type {
    font-size: 16px;
  }
}
</style>
