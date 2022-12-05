<template>
  <div id="app">
    <metaverse-nav />
    <router-view />
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
  background-color: $metaverse-bg-color;
}
</style>