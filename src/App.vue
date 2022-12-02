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
import metaverseTitle from "./sections/metaverse-title.vue";
import metaverseNav from "./components/metaverse-nav.vue";
import metaverse101 from "./sections/metaverse-101.vue";
import metaverseCaseStudies from "./sections/metaverse-case-studies.vue";
import metaverseTimeline from './sections/metaverse-timeline.vue';
import metaverseQuotes from './sections/metaverse-quotes.vue';
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
  background-color: #E1F5FE;
}
</style>