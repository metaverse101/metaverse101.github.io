<template>
  <div class="metaverse-home">
    <metaverse-title />
    <metaverse101 />
    <metaverse-timeline />
    <metaverse-case-studies />
    <metaverse-quotes />
  </div>
</template>

<script>
import {
  metaverseTitle,
  metaverse101,
  metaverseTimeline,
  metaverseCaseStudies,
  metaverseQuotes,
} from '../sections/sections-export.js'

export default {
  name: "metaverse-home",
  components: {
    metaverseTitle,
    metaverse101,
    metaverseTimeline,
    metaverseCaseStudies,
    metaverseQuotes,
  }
}
</script>

<style lang="scss" scoped>

</style>