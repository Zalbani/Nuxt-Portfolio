<template>
  <section class="compet">
    <h2>Mon savoir faire</h2>
    <article>
      <div
        v-for="(competence, index) in dataCompetences"
        :key="'competence_' + index"
        class="competence"
      >
        <h3>{{ competence.name }}</h3>
        <p>
          <span v-for="(skill, j) in competence.skills" :key="'skill_' + j">
            <span v-if="j === competence.skills.length - 1">
              {{ skill }}
            </span>
            <span v-else> {{ skill }} / </span>
          </span>
        </p>
        <br />
      </div>
    </article>
  </section>
</template>
<script>
import dataCompetences from '~/static/data/competences.json'

export default {
  data() {
    return { dataCompetences }
  },
}
</script>
<style scoped lang="sass">
.compet
  display: flex
  flex-wrap: nowrap
  justify-content: center
  align-items: center
  h2
    text-align: center
    color: white
    vertical-align: top
    width: 60%
    font-family: 'Roboto', sans-serif
    font-size: 70px
    letter-spacing: 0.4px
    font-weight: 100
  article
    width: 40%
    .competence
      h3
        color: #4bd0d0
        font-family: 'Roboto', sans-serif
        font-size: 22px
        font-weight: 100
      p
        font-family: 'Roboto', sans-serif
        font-size: 24px
        font-weight: 100
        span
          color: white
          padding-bottom: 10px
@media only screen and (max-width: 767px)
  .compet
    display: unset
    h2
      width: 100%
      padding-top: 40px
      font-family: 'Open Sans', sans-serif
      font-size: 32px
      letter-spacing: 0.2px
    article
      width: 100%
      text-align: left
      padding: 9% 20px 20px 20px
</style>
