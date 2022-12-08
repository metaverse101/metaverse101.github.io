<template>
  <section class="metaverse-timeline">
    <metaverse-page>
      <h1>TIMELINE</h1>

      <div class="metaverse-timeline__frame">
        <iframe
            src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Ilh9Lh3chZ1J6Uz5pHdmUE92D1mVmllFweQG8vVqmHM&font=Default&lang=en&initial_zoom=2&height=650'
            width='100%' height="700" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'/>
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
    margin: 5% 0;
  }
}
</style>
