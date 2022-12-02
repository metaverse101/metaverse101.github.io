<template>
  <section class="metaverse-quotes">
    <metaverse-page>
      <div>
        <h2>Will the metaverse fundamentally change <br>
          what it means to be human?</h2>

        <v-carousel
            hide-delimiter-background>
          <v-carousel-item>
            <p>Lorem ipseum</p>
          </v-carousel-item>
        </v-carousel>
      </div>
    </metaverse-page>
  </section>

</template>

<script>
import MetaversePage from "../components/metaverse-page.vue";
export default {
  name: "metaverse-quotes",
  components: {
    MetaversePage
  }
}
</script>

<style lang="scss" scoped>
.metaverse-quotes {

  p {
    text-align: center;
    font-size: 36pt;
    display: block;
    margin: 10vh auto;
  }
}
</style>