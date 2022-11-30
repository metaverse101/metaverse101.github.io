<template>
  <div class="metaverse-page" data-aos="fade-right" data-aos-duration="2000">
      <slot />
  </div>
</template>

<script>
export default {
  name: "metaverse-page"
}
</script>

<style scoped>
.metaverse-page {
  height: 90vh;
  display: block;
  margin: 5vw;
}
</style>