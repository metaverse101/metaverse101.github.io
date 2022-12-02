<template xmlns="http://www.w3.org/1999/html">
  <section class="metaverse-title">
    <metaverse-page>
      <div class="metaverse-title__text">
        <span class="text-h3">The metaverse doesn’t exist yet.</span> <br>
        <span class="text-h3">Here’s why you still need to care</span>
        <img class="metaverse-title__image mt-10" src="../assets/placeholder.png" />
      </div>

      <span class="metaverse-title__text">
        <p>Lorem ipsum dolor sit amet consectetur. Vel etiam nam urna lectus nisl id suscipit rhoncus pulvinar.
          Egestas ac orci sed blandit diam non libero viverra faucibus. Netus tincidunt lobortis at felis.
          Arcu integer dignissim nec nisl.</p>
      </span>
    </metaverse-page>
  </section>
</template>

<script>
import metaversePage from '../components/metaverse-page.vue'

export default {
  name: "metaverse-title",
  components: {
    metaversePage,
  }
}
</script>

<style lang="scss" scoped>
.metaverse-title {

  &__image {
    width: 100%;
    height: 500px;
  }

  &__text {
    span {
      margin: 10px 0;
    }
  }
}

</style>