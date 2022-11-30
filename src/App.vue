<template>
  <div id="app">
    <metaverse-title />
    <metaverse-timeline />
  </div>
</template>

<script>
import MetaverseTitle from "./sections/metaverse-title.vue";
import MetaverseTimeline from "./sections/metaverse-timeline.vue";

export default {
  name: 'App',

  components: {
    MetaverseTimeline,
    MetaverseTitle,
  },

  data: () => ({
    //
  }),
}
</script>
