<template>
  <div id="app">
    <metaverse-nav />
    <metaverse-title />
    <metaverse101 />
    <metaverse-timeline />
    <metaverse-case-studies />
    <metaverse-quotes />
    <metaverse-footer />
  </div>
</template>

<script>
import {
  metaverseTitle,
  metaverse101,
  metaverseTimeline,
  metaverseCaseStudies,
  metaverseQuotes,
} from './sections/sections-export.js'

import metaverseNav from "./components/metaverse-nav.vue";
import metaverseFooter from './components/metaverse-footer.vue';

export default {
  name: 'App',

  components: {
    metaverseFooter,
    metaverseQuotes,
    metaverseTimeline,
    metaverseNav,
    metaverseTitle,
    metaverse101,
    metaverseCaseStudies,
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