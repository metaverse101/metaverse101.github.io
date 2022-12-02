<template>
  <section class="metaverse-timeline">
    <metaverse-page>
      <span class="text-h2">
        TIMELINE
      </span> <br>
      <span class="text-h3">
        The History and Development of the Metaverse
      </span>

      <div class="metaverse-timeline__frame">
        <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=100%" />
      </div>

    </metaverse-page>
  </section>
</template>

<script>
import metaversePage from "../components/metaverse-page.vue";
export default {
  name: "metaverse-timeline.vue",
  components: {
    metaversePage
  }
}
</script>

<style lang="scss" scoped>
.metaverse-timeline {
  &__frame {
    iframe {
      width: 100%;
      height: 500px;
    }
  }
}
</style>
