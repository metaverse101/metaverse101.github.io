<template>
  <section class="metaverse-quotes">
    <metaverse-page>
      <div>
        <h2>Will the metaverse fundamentally change what it means to be human?</h2>

        <v-carousel>
          <v-carousel-item>
            <p>Lorem ipseum </p>
          </v-carousel-item>
        </v-carousel>
      </div>
    </metaverse-page>
  </section>

</template>

<script>
import MetaversePage from "../components/metaverse-page.vue";
export default {
  name: "metaverse-quotes.vue",
  components: {MetaversePage}
}
</script>

<style lang="scss" scoped>
.metaverse-quotes {
  text-align: center;
}
</style>