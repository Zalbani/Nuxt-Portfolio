<template>
  <footer>
    <h4>{{ timestamp }} Alban Pierson</h4>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      timestamp: '',
    }
  },
  created() {
    setInterval(this.getNow, 1000)
  },
  methods: {
    getNow() {
      const today = new Date()
      this.timestamp = today.getFullYear()
    },
  },
}
</script>
<style lang="sass" scoped>
footer
  background-color: #efefef
  padding-bottom: 10px
  h4
    color: #525252
    text-align: center
    padding-top: 25px
    padding-bottom: 10px
    font-size: 14px
  a
    text-decoration: none
    p
      font-family: 'Roboto', sans-serif
      text-decoration: none
      border: none
      margin: 0 auto
      color: #525252
      text-align: center
      font-size: 14px
    hr
      margin-top: 4px
      width: 70px
      background-color: #525252
      border: none
      height: 2px
@media only screen and (max-width: 767px)
  footer
    display: inline-block
    width: 100%
</style>
