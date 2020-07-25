<template>
  <div>
    <component-particles />
    <main class="container" data-scrollbar>
      <component-reseaux-sociaux />
      <component-header />
      <Nuxt />
      <component-footer />
    </main>
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import componentParticles from '~/components/particles'
import componentFooter from '~/components/footer'
import componentHeader from '~/components/header'
import componentReseauxSociaux from '~/components/sections/reseauSociaux'

export default {
  components: {
    componentParticles,
    componentFooter,
    componentHeader,
    componentReseauxSociaux,
  },
  mounted() {
    Scrollbar.initAll()
  },
}
</script>
<style lang="sass">
html
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
*,*::before,*::after
  box-sizing: border-box
  margin: 0
.container
  overflow: auto
  height: 100vh
  width: 100%
section
  height: 1050px
h1,h2,h3,h4
  font-family: 'Roboto', sans-serif
  margin: 0
  padding: 0
p
  font-family: 'Open Sans', sans-serif
  margin: 0
  padding: 0
ul > li > a
  font-size: 28px
@media only screen and (max-width: 767px)
  section
    height: 600px
</style>
