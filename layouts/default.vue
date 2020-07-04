<template>
  <div>
    <script src="https://use.fontawesome.com/72ff95ef45.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/mef.css" />
    <link rel="stylesheet" href="css/typo.css" />
    <link rel="stylesheet" href="css/normalize.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
    />
    <div id="particles-js" style="position: fixed; z-index: -1;"></div>
    <Nuxt class="container" data-scrollbar />
    <Footer />
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  </div>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'

import Footer from '~/components/Footer'

export default {
  components: {
    Footer,
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
