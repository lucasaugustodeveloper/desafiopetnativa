<template>
  <div class="header row middle-lg">
    <div class="header_logo">
      <app-logo/>
    </div>

    <div class="header_title center-lg">
      <app-title/>
    </div>

    <div class="header_search">
      <app-search/>
    </div>
  </div>
</template>

<script>
import AppLogo from './header/logo'
import AppSearch from './header/search'
import AppTitle from './header/title'

export default {
  name: 'header',
  components: {
    AppLogo,
    AppSearch,
    AppTitle
  },
  data () {
    return {
      header: 'Component Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  &_logo,
  &_title,
  &_search {
    float: left;
    width: calc(100%/3);
  }
}
</style>
