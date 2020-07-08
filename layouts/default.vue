<template>
  <div>
    <Particles />
    <main class="container" data-scrollbar>
      <FloatingLinks />
      <Header />
      <Nuxt />
      <Footer />
    </main>
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import Particles from '~/components/Particles'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import FloatingLinks from '~/components/sections/reseauSociaux'

export default {
  components: {
    Particles,
    Footer,
    Header,
    FloatingLinks,
  },
  mounted() {
    Scrollbar.initAll()
  },
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  overflow: auto;
  height: 100vh;
  width: 100%;
}
section {
  height: 1050px;
}

@media only screen and (max-width: 767px) {
  section {
    height: 600px;
  }
}
</style>
