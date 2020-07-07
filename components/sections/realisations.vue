<template>
  <section class="real">
    <h2>Mes réalisations</h2>
    <nuxt-link
      v-for="(project, index) in projects"
      :key="index"
      :to="{ path: '/project/' + project.id }"
    >
      <realisation
        :title="project.title"
        :actions="project.actions"
        :image="project.image"
      />
    </nuxt-link>
  </section>
</template>
<script>
import realisation from '~/components/oneRealisation'

import projects from '~/static/projects.json'
export default {
  components: {
    realisation,
  },
  data() {
    return { projects }
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
@media only screen and (max-width: 767px) {
  .real {
    padding: 0;
    height: auto;
  }

  .real > h2 {
    padding: 40px;
  }
}
</style>
