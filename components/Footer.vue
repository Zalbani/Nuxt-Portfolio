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
