<template>
  <div id="app">
    <WebSiteIndex />
  </div>
</template>

<script>
import WebSiteIndex from './components/WebSiteIndex.vue'

export default {
  components: {
    WebSiteIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
