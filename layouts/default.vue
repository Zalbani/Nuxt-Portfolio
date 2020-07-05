<template>
  <div class="container" data-scrollbar>
    <Header />
    <Rs />
    <div id="particles-js" style="position: fixed; z-index: -1;"></div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Rs from '~/components/Rs'

export default {
  components: {
    Footer,
    Header,
    Rs,
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
</style>
