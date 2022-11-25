<template>
  <div id="app">
    <metaverse-title />
    <metaverse-timeline />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MetaverseTitle from "./sections/metaverse-title.vue";
import MetaverseTimeline from "./sections/metaverse-timeline.vue";

export default {
  name: 'App',

  components: {
    MetaverseTimeline,
    MetaverseTitle,
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
