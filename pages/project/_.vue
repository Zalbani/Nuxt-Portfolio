<template>
  <main>
    <nuxt-link
      v-if="parseInt($route.params.pathMatch, 10) != projects.length - 1"
      :to="(parseInt($route.params.pathMatch, 10) + 1).toString()"
    >
      <svg class="arrow" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </nuxt-link>
    <nuxt-link
      v-if="parseInt($route.params.pathMatch, 10) != 0"
      :to="(parseInt($route.params.pathMatch, 10) - 1).toString()"
    >
      <svg class="arrow right" viewBox="0 0 85 85">
        <path class="arrow-out" d="M37.5 23.5l15 19-15 19" />
        <path class="arrow-in" d="M2.092 23.5l15 19-15 19" />
      </svg>
    </nuxt-link>
    <section class="headp">
      <h1>{{ projects[$route.params.pathMatch].title }}</h1>
      <h2>{{ projects[$route.params.pathMatch].actions }}</h2>
    </section>
    <section class="expli">
      <p
        v-for="(paragraphe, index) in projects[$route.params.pathMatch]
          .description"
        :key="'paragraph_' + index"
      >
        {{ paragraphe }}
      </p>
      <img
        :src="projects[$route.params.pathMatch].mockup.url"
        :alt="projects[$route.params.pathMatch].mockup.imageAlt"
      />
    </section>
    <section class="detail">
      <article>
        <h2>Charte Graphique</h2>
        <hr class="grand" />
        <p
          v-for="(paragraphe, index) in projects[$route.params.pathMatch]
            .graphical_chart.description"
          :key="'graphDesc_' + index"
        >
          {{ paragraphe }}
        </p>

        <h3>Couleurs</h3>
        <hr class="petit" />
        <color
          v-for="(color, index) in projects[$route.params.pathMatch]
            .graphical_chart.colors"
          :key="'color_' + index"
          :color="color"
        />
        <h3>Typographies</h3>
        <hr class="petit2" />
        <typo
          v-for="(typo, index) in projects[$route.params.pathMatch]
            .graphical_chart.typographies"
          :key="'typo_' + index"
          :typo-name="typo.name"
          :typo-desc="typo.description"
          :typo-url="typo.url"
          :css-property="typo.cssProperty"
          :serif="typo.serif"
        />
        <h2>Technologies</h2>
        <hr class="grand" />
        <techno
          v-for="(techno, index) in projects[$route.params.pathMatch].technos"
          :key="'techno_' + index"
          :techno="techno"
        />
      </article>
    </section>
    <section
      v-if="projects[$route.params.pathMatch].screens != undefined"
      class="maquet"
    >
      <img
        v-for="(screen, index) in projects[$route.params.pathMatch].screens"
        :key="'screen_' + index"
        :src="screen.url"
        :alt="screen.imageAlt"
      />
    </section>
    <section class="end">
      <nuxt-link to="/"><h2>Accueil</h2></nuxt-link
      ><!-- @whitespace
--><nuxt-link
        v-if="parseInt($route.params.pathMatch, 10) != projects.length - 1"
        :to="(parseInt($route.params.pathMatch, 10) + 1).toString()"
        ><h2>Projet Suivant</h2></nuxt-link
      >
      <nuxt-link
        v-else
        :to="(parseInt($route.params.pathMatch, 10) - 1).toString()"
        ><h2>Projet Precedent</h2></nuxt-link
      >
    </section>
  </main>
</template>
<script>
import color from '~/components/project/color'
import techno from '~/components/project/techno'
import typo from '~/components/project/typo'

import projects from '~/static/data/realisations.json'
export default {
  components: { color, techno, typo },
  data() {
    return { projects }
  },
  head() {
    return {
      title: projects[this.$nuxt.$route.path.split('/')[2]].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            projects[this.$nuxt.$route.path.split('/')[2]].description[0],
        },
      ],
    }
  },
}
</script>
<style lang="sass" scoped>
.headp
  background-image: url('/fond_realisations.jpg')
  background-size: cover
  height: 40vh
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  h1, h2
    font-family: 'Roboto', sans-serif
    font-size: 50px
    letter-spacing: 0.8px
    font-weight: 100
    text-align: center
    color: white
    padding: 15px
  h2
    font-size: 40px


.expli
  background-color: white
  height: auto
  padding: 40px 14% 50px
  p
    font-size: 24px
    padding: 10px 10px 30px
    a
      text-decoration: none
      transition: color 0.2s ease
      color: #4b86d0
      &:hover
        text-decoration: none
        transition: color 0.2s ease
        color: #4bd0d0
  img
    width: 100%
  button
    font-size: 24px
    margin-top: 50px
    margin-bottom: 50px
    background-color: white
    border: none
    text-align: left
    hr
      margin-top: 10px
      width: 220px
      height: 2px
      background-color: black
      border: none

.detail
  padding: 40px 10%
  background-color: #efefef
  height: auto
  article
    text-align: center
    h2
      padding-top: 60px
      text-align: center
      font-family: 'Roboto', sans-serif
      font-size: 40px
      letter-spacing: 0.4px
      font-weight: 100
    h3
      font-family: 'Roboto', sans-serif
      font-size: 36px
      letter-spacing: 0.4px
      font-weight: 100
      padding-top: 120px
    p
      font-family: 'Open Sans', sans-serif
      font-size: 24px
      line-height: 32px
      text-align: left

.grand
  &:first-of-type
    background-color: #4bd0d0
    width: 246px
    margin-left: calc(50% - 123px)
    margin-top: 10px
    margin-bottom: 70px
    text-align: center
    height: 2px
    border: none
  &:last-of-type
    width: 170px
    margin-left: calc(50% - 85px)
    margin-top: 10px
    background-color: #4bd0d0
    text-align: center
    height: 2px
    border: none
.petit
  text-align: center
  width: 50px
  margin-left: calc(50% - 25px)
  margin-top: 10px
  height: 2px
  border: none
  background-color: #4bd0d0
  margin-bottom: 70px

.petit2
  width: 126px
  margin-left: calc(50% - 63px)
  margin-top: 10px
  text-align: center
  height: 2px
  border: none
  background-color: #4bd0d0
  margin-bottom: 70px

.maquet
  background-color: #efefef
  text-align: center
  height: auto
  img
    width: 80%
    margin: 40px 10%
    &:first-of-type
      width: 80%
      margin: 120px 10% 20px
    &:last-of-type
      width: 80%
      margin: 80px 10% 60px
  button
    border-radius: 4px
    border: 2px #525252 solid
    background: none
    color: black
    padding: 15px 140px
    transition-duration: 0.4s
    margin-bottom: 80px
    font-family: 'Roboto', sans-serif
    font-size: 40px
    font-weight: 100
    &:hover
      color: white
      background-color: #525252
      transition-duration: 0.4s



.end
  height: auto
  a
    h2
      font-family: 'Roboto', sans-serif
      font-size: 40px
      letter-spacing: 0.6px
      font-weight: 100
      padding-top: 20px
      padding-bottom: 20px
      display: inline-block
      box-sizing: border-box
      vertical-align: top
      color: white
      text-align: center
    &:first-of-type > h2
      width: 30%
      background-color: #525252
    &:last-of-type > h2
      width: 70%
      background-color: #4bd0d0

@media only screen and (max-width: 767px)
  .expli
    padding: 5%
    p
      font-size: 18px
    button
      margin-top: 10px
      font-size: 24px
      margin-bottom: 20px
      hr
        width: 150px
        margin-top: 6px
  .detail
    padding: 5%
    article
      text-align: left
      h2
        padding-top: 15px
        font-size: 26px
      h3
        padding-top: 55px
        font-size: 24px
      p
        font-size: 18px
        line-height: normal

  .grand:first-of-type
    margin-bottom: 30px
    width: 200px

  .maquet
    button
      margin-bottom: 40px
      padding: 10px 75px
      font-size: 24px
    img
      &:first-of-type, &:last-of-type
        margin: 5%
  .petit
    margin-bottom: 50px
  .petit2
    margin-bottom: 50px

  .end > a > h2
    padding-top: 15px
    padding-bottom: 15px
    font-size: 22px
  .headp
    h1
      font-size: 24px
    h2
      font-size: 22px

@-webkit-keyframes arrow-moveIn
  50%
    opacity: 1
    -webkit-transform: translateX(35px)
    transform: translateX(35px)
  100%
    opacity: 1
    -webkit-transform: translateX(35px)
    transform: translateX(35px)

@keyframes arrow-moveIn
  50%
    opacity: 1
    -webkit-transform: translateX(35px)
    transform: translateX(35px)
  100%
    opacity: 1
    -webkit-transform: translateX(35px)
    transform: translateX(35px)
@-webkit-keyframes arrow-moveOut
  50%
    opacity: 0
    -webkit-transform: translateX(35px)
    transform: translateX(35px)
  100%
    opacity: 0
    -webkit-transform: translateX(35px)
    transform: translateX(35px)

@keyframes arrow-moveOut
  50%
    opacity: 0
    -webkit-transform: translateX(35px)
    transform: translateX(35px)
  100%
    opacity: 0
    -webkit-transform: translateX(35px)
    transform: translateX(35px)

#square path,#circle path,.arrow-out,.arrow-in
  fill: none
  stroke: #fff
  stroke-width: 2
  stroke-miterlimit: 10
.arrow-in
  opacity: 0

.arrow
  position: absolute
  top: 0
  height: 40vh
  right: 10px
  width: 90px
  &.right
    -webkit-transform: scaleX(-1)
    transform: scaleX(-1)
    position: absolute
    left: 10px
    top: 0
    height: 40vh
    width: 90px
  &:hover
    .arrow-out
      -webkit-animation: arrow-moveOut 1s ease infinite
      animation: arrow-moveOut 1s ease infinite
    .arrow-in
      -webkit-animation: arrow-moveIn 1s ease infinite
      animation: arrow-moveIn 1s ease infinite

@media only screen and (max-width: 767px)
  .arrow
    width: 60px
    &.right
      width: 60px
</style>
