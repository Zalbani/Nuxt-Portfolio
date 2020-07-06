<template>
  <div>
    <section class="head">
      <h1>Alban Pierson</h1>
      <hr />
      <h2>Développeur Full-Stack</h2>
      <hr />
      <button class="scroll-down" @click="scrollTo('.desc')">
        ME DECOUVRIR
      </button>
    </section>
    <section class="desc">
      <h2 class="vanish">Je me décrit.</h2>
      <article>
        <h2>
          Développeur Web curieux et autonome, étudiant en Master expert
          developpeur web à Ynov Informatique - Lyon.
        </h2>
        <br />
        <p>
          Passionné par le Web et tout ce qui l'entoure, plus particulièrement
          par le développement, qu'il soit Front-End ou Back-End. Motivé par le
          besoin de toujours faire mieux, je prends toujours plaisir à relever
          de nouveaux chalenges afin de mettre mes compétences aux services de
          l'innovation.
        </p>
        <br />
        <p>
          Je redige actuellement un memoire sur le sujet des
          <b>architectures logiciels</b> oriente sur les sites et platforme web
        </p>
      </article>
    </section>
    <section-competences />
    <section-realisations />
    <section-experiences />
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import sectionCompetences from '~/components/sections/competences'
import sectionExperiences from '~/components/sections/experiences'
import sectionRealisations from '~/components/sections/realisations'

export default {
  components: {
    sectionCompetences,
    sectionExperiences,
    sectionRealisations,
  },
  methods: {
    scrollTo(elem) {
      // Get element position to scroll to
      const posScrollTo = this.$el.querySelector(elem).getBoundingClientRect()
      // Move the scroll bar to the element position
      Scrollbar.getAll()[0].scrollTo(0, posScrollTo.top, 500)
    },
  },
}
</script>
<style scoped>
.head {
  color: white;
  text-align: center;
  width: 100%;
}

.head hr:first-of-type {
  margin-bottom: 40px;
  margin-top: 40px;
  width: 70%;
  margin-left: 15%;
  color: white;
  background-color: white;
  height: 3px;
  border: none;
}

.head hr:last-of-type {
  margin-top: 100px;
  margin-bottom: 80px;
  width: 10%;
  color: white;
  background-color: white;
  height: 3px;
  border: none;
  display: none;
}

.head > h1 {
  padding-top: 190px;
  margin: 0;
}

.head > button {
  margin-top: 120px;
  border-radius: 4px;
  border: 1px white solid;
  background: none;
  color: white;
  padding: 16px;
  padding-right: 25px;
  padding-left: 25px;
  transition-duration: 0.4s;
}

.head > button:hover {
  transition-duration: 0.4s;
  background: white;
  color: black;
}
.desc {
  background-color: #efefef;
  height: auto;
}
.desc > article {
  padding-bottom: 15%;
}

.desc > article > h2 {
  color: black;
  padding-bottom: 25px;
  padding-top: 15%;
  padding-right: 15%;
  padding-left: 15%;
}

.desc > article > p {
  color: #525252;
  padding-bottom: 15px;
  padding-right: 15%;
  padding-left: 15%;
}

.desc > button {
  margin-top: 120px;
  margin-left: 15%;
  background-color: #efefef;
  border: none;
  text-align: left;
}

.desc > button > hr {
  margin-top: 10px;
  width: 250px;
  height: 2px;
  background-color: black;
  border: none;
}

.head > h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 90px;
  letter-spacing: 0.8px;
  font-weight: 100;
}

.head > h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 85px;
  letter-spacing: 0.8px;
  font-weight: 100;
}

.head > button {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
}

.desc > article > h2 {
  font-size: 25px;
}

.desc > article > p {
  font-size: 25px;
}

.desc > button {
  font-size: 25px;
}

@media only screen and (max-width: 767px) {
  .head > h1 {
    font-size: 36px;
    letter-spacing: 0.4px;
  }

  .head > h2 {
    font-size: 34px;
    letter-spacing: 0.4px;
  }
  .desc > article > h2,
  .desc > article > p {
    font-size: 16px;
  }

  .desc > button {
    font-size: 18px;
  }
  .head > hr:last-of-type {
    display: none;
  }

  .head > button {
    margin-top: 120px;
  }

  .head > hr:first-of-type {
    height: 2px;
    width: 50%;
    margin-left: 25%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .desc > article {
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .desc > article > h2,
  .desc > article > p {
    padding: 5%;
    padding-bottom: 4%;
    padding-top: 0;
  }

  .desc > button {
    padding: 0;
    margin-top: 8%;
    margin-left: 25px;
  }

  .desc > button > hr {
    width: 180px;
  }
}
</style>
