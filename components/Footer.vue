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
<style>
footer {
  background-color: #efefef;
  padding-bottom: 10px;
}

footer > h4 {
  color: #525252;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 10px;
}

footer > a {
  text-decoration: none;
}

footer > a > p {
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  border: none;
  margin: 0 auto;
  color: #525252;
  text-align: center;
}

footer > a > hr {
  margin-top: 4px;
  width: 70px;
  background-color: #525252;
  border: none;
  height: 2px;
}
footer > h4 {
  font-size: 14px;
}

footer > a > p {
  font-size: 14px;
}
@media only screen and (max-width: 767px) {
  footer {
    display: inline-block;
    width: 100%;
  }
}
</style>
