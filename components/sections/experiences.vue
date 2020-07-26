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
<style lang="sass" scoped>

.expe
  position: relative
  height: 1250px
  &:before
    content: ''
    position: absolute
    top: 250px
    height: 930px
    left: 50%
    -webkit-transform: translateX(-50%)
    transform: translateX(-50%)
    width: 4px
    background-color: #fff
  h2
    font-family: 'Roboto', sans-serif
    font-size: 70px
    letter-spacing: 0.4px
    font-weight: 100
    color: white
    text-align: center
    padding-top: 125px
    padding-bottom: 50px
  figure
    img
      display: inline-block
      box-sizing: border-box
      vertical-align: top
      width: 200px
      height: 200px
      margin-top: 75px
      margin-left: 15%
    figcaption
      display: inline-block
      box-sizing: border-box
      vertical-align: top
      width: auto
      padding-top: 125px
      margin-left: 30%
      article
        h3
          font-family: 'Roboto Thin', sans-serif
          color: #4bd0d0
          font-size: 29px
        p
          font-size: 27px
          &:first-of-type
            color: white
          &last-of-type
            color: #525252
.entries
  width: calc(100% - 80px)
  max-width: 800px
  margin: auto
  position: relative
  left: -5px
@media only screen and (max-width: 767px)
  .expe
    padding: 0
    &:before
      display: none
    h2
      padding: 40px
      font-family: 'Open Sans', sans-serif
      font-size: 32px
      letter-spacing: 0.2px
    figure
      margin: 15% 0 0 20%
      img
        text-align: center
        width: 80px
        height: 80px
        margin: 0 0 0 5%
      figcaption
        width: 50%
        margin: 0
        padding: 0
        article
          margin: 10px 0 10px 10px
          padding-left: 10%
          h3
            font-size: 20px
          p
            &:first-of-type
              font-size: 18px
            &:last-of-type
              font-size: 16px
</style>
