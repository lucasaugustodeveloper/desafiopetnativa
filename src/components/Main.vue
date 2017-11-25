<template>
  <div class="row" id="main">
    <projects/>
  </div>
</template>

<script>
import Projects from './main/project'

export default {
  name: 'main',
  components: {
    Projects
  },
  data: () => {
    return {
      msg: 'Component Main'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/sass/functions';

#main {
  background: lighten(colors(color, text), 90);
  margin-top: pxtorem(32);
  padding: pxtorem(16);
}
</style>
