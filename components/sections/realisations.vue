<template>
  <section class="real">
    <h2>Mes réalisations</h2>
    <nuxt-link
      v-for="(realisation, index) in dataRealisation"
      :key="'realisation_' + index"
      :to="{ path: '/project/' + realisation.id }"
    >
      <component-realisation
        :title="realisation.title"
        :actions="realisation.actions"
        :image="realisation.thumbnail"
      />
    </nuxt-link>
  </section>
</template>
<script>
import componentRealisation from '~/components/oneRealisation'

import dataRealisation from '~/static/data/realisations.json'
export default {
  components: {
    componentRealisation,
  },
  data() {
    return { dataRealisation }
  },
}
</script>
<style scoped lang="sass">
.real
  background-color: #efefef
  padding-left: 10%
  padding-right: 10%
  height: auto
  h2
    text-align: center
    padding-top: 125px
    padding-bottom: 125px
    font-family: 'Roboto', sans-serif
    font-size: 70px
    letter-spacing: 0.4px
    font-weight: 100
  a
    text-decoration: none
    figure > figcaption > p
      &:first-of-type
        font-size: 17px
      &:last-of-type
        font-size: 12px
@media only screen and (max-width: 767px)
  .real
    padding: 0
    height: auto
    h2
      font-family: 'Open Sans', sans-serif
      font-size: 32px
      letter-spacing: 0.2px
      padding: 40px
</style>
