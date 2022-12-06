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
  background-color: white;
  display: block;
  border-radius: 10px;
  padding: 5%;
  margin: 1% 20%;
}
</style>