<template>
<section class="metaverse-timeline">
  <metaverse-page>
    <iframe src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=100%" width="100%" frameborder="0"></iframe>
  </metaverse-page>
</section>
</template>

<script>
import metaversePage from '../components/metaverse-page.vue';

export default {
  name: "metaverse-timeline",
  components: {
    metaversePage,
  }
}
</script>

<style scoped>

</style>