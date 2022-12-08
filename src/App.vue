<template>
  <div id="app">
    <metaverse-nav />
    <router-view />
    <metaverse-footer />
  </div>
</template>

<script>


import metaverseNav from "./components/metaverse-nav.vue";
import metaverseFooter from './components/metaverse-footer.vue';

export default {
  name: 'App',

  components: {
    metaverseFooter,
    metaverseNav,
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
@import './styles/_base.scss';

body {
  background-image: url("../space.jpeg");
  background-size: cover;
}
</style>