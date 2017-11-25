<template>
  <div class="container-fluid" id="app">
    <app-header/>
    <app-main/>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppMain from './components/Main'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style lang="scss">
@import '../static/sass/functions',
  '../static/sass/reset',
  '../static/sass/grid',
  '../static/sass/blocks/header';

#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
