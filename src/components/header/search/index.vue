<template>
  <div class="search" id="search">
    <form class="row" action="index.html" method="post">
      <div class="search_input col-lg-8">
        <label for="lbl_search">Enter your user</label>
        <input type="text" name="search" id="lbl_search" placeholder="Enter your user..." v-model="user">
      </div>
      <div class="search_button col-lg-4">
        <button type="submit">Search</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'search',
  data: () => {
    return {
      user: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../../static/sass/functions';

.search {
  &_input {
    label {
      display: none;
    }
    input {
      border: none;
      border-radius: pxtorem(5);
      font-size: pxtorem(18);
      height: pxtorem(35);
      padding-left: pxtorem(16);
      width: 100%;
    }
  }
  &_button {
    button {
      background: colors(color, base);
      border: none;
      border-radius: pxtorem(5);
      color: lighten(colors(color, text), 100);
      font-size: pxtorem(20);
      /*margin-top: pxtorem(15);*/
      width: 80%;
      height: pxtorem(35);
    }
  }
}
</style>
