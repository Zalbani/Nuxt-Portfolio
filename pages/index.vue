<template>
  <div>
    <section class="head">
      <h1>Alban Pierson</h1>
      <hr />
      <h2>Développeur Full-Stack</h2>
      <hr />
      <button class="scroll-down" @click="scrollTo('#sectionReal')">
        ME DECOUVRIR !
      </button>
    </section>
    <component-section-realisations id="sectionReal" />
    <component-section-experiences />
    <section class="desc">
      <h2 class="me">Qui suis-je ?</h2>
      <article>
        <p>
          Développeur Web curieux et autonome, étudiant en Master expert
          developpeur web à Ynov Informatique - Lyon.
        </p>
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
    <component-section-competences />
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import componentSectionCompetences from '~/components/sections/competences'
import componentSectionExperiences from '~/components/sections/experiences'
import componentSectionRealisations from '~/components/sections/realisations'
export default {
  components: {
    componentSectionCompetences,
    componentSectionExperiences,
    componentSectionRealisations,
  },
  head() {
    return {
      title: 'Alban Pierson | Portfolio | Etudiant MMI',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Développeur Web curieux et autonome, étudiant en développement web en master Informatique 2eme année à Ynov Informatique - Lyon.',
        },
      ],
    }
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
<style scoped lang="sass">
h2.me
  text-align: center
  padding-top: 125px
  padding-bottom: 125px
  font-family: 'Roboto', sans-serif
  font-size: 70px
  letter-spacing: 0.4px
  font-weight: 100
.head
  color: white
  text-align: center
  width: 100%
  hr
    &:first-of-type
      margin-bottom: 40px
      margin-top: 40px
      width: 70%
      margin-left: 15%
      color: white
      background-color: white
      height: 3px
      border: none
    &:last-of-type
      margin-top: 100px
      margin-bottom: 80px
      width: 10%
      color: white
      background-color: white
      height: 3px
      border: none
      display: none
  h1
    padding-top: 190px
    margin: 0
    font-family: 'Roboto', sans-serif
    font-size: 90px
    letter-spacing: 0.8px
    font-weight: 100
  h2
    font-family: 'Roboto', sans-serif
    font-size: 85px
    letter-spacing: 0.8px
    font-weight: 100
  button
    margin-top: 120px
    border-radius: 4px
    border: 1px white solid
    background: none
    color: white
    padding: 16px 25px
    transition-duration: 0.4s
    font-family: 'Roboto', sans-serif
    letter-spacing: 1px
    &:hover
      transition-duration: 0.4s
      background: white
      color: black

.desc
  background-color: #efefef
  height: auto
  article
    padding-bottom: 15%
    h2
      color: black
      padding: 15% 15% 25px
      font-size: 25px
    p
      color: #525252
      padding-bottom: 15px
      padding-right: 15%
      padding-left: 15%
      font-size: 25px
  button
    margin-top: 120px
    margin-left: 15%
    background-color: #efefef
    border: none
    text-align: left
    font-size: 25px
    hr
      margin-top: 10px
      width: 250px
      height: 2px
      background-color: black
      border: none
.compet > h2
  font-family: 'Roboto', sans-serif
  font-size: 70px
  letter-spacing: 0.4px
  font-weight: 100
@media only screen and (max-width: 767px)
  .head
    h1
      font-size: 36px
      letter-spacing: 0.4px
    h2
      font-size: 34px
      letter-spacing: 0.4px
    button
      margin-top: 120px
    hr
      &:last-of-type
        display: none
      &:first-of-type
        height: 2px
        width: 50%
        margin-left: 25%
        margin-top: 30px
        margin-bottom: 30px
  .desc
    article
      padding-top: 35px
      padding-bottom: 35px
      h2, p
        font-size: 16px
        padding: 0 5% 4%

    button
      font-size: 18px
      padding: 0
      margin-top: 8%
      margin-left: 25px
      hr
        width: 180px
  .compet
    h2
      font-family: 'Open Sans', sans-serif
      font-size: 32px
      letter-spacing: 0.2px
    article
      h3
        font-size: 14px
      p
        font-size: 16px
        padding-bottom: 0
</style>
