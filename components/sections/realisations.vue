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
<style scoped>
.real {
  background-color: #efefef;
  padding-left: 10%;
  padding-right: 10%;
  height: auto;
}

.real > h2 {
  text-align: center;
  padding-top: 125px;
  padding-bottom: 125px;
}

.real > a {
  text-decoration: none;
}
.real > a > figure > figcaption > p:first-of-type {
  font-size: 17px;
}

.real > a > figure > figcaption > p:last-of-type {
  font-size: 12px;
}
.real > h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 70px;
  letter-spacing: 0.4px;
  font-weight: 100;
}
@media only screen and (max-width: 767px) {
  .real > h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    letter-spacing: 0.2px;
  }
  .real {
    padding: 0;
    height: auto;
  }

  .real > h2 {
    padding: 40px;
  }
}
</style>
