<template>
  <section class="metaverse-quotes">
    <metaverse-page>
      <div>
        <h2>Will the metaverse fundamentally change what it means to be human?</h2>

        <v-carousel
            hide-delimiter-background>
          <v-carousel-item v-for="(q, index) in quotes" :key="index">
            <p><em>{{ q.text }}</em></p>
            <p>─ {{ q.author }}, <em>{{ q.occupation }}</em></p>
          </v-carousel-item>
        </v-carousel>
      </div>
    </metaverse-page>
  </section>

</template>

<script>
import metaversePage from "../components/metaverse-page.vue";
import quotes from '../data/metaverse-quotes.js'

export default {
  name: "metaverse-quotes",
  components: {
    metaversePage
  },
  data() {
    return {
      quotes,
    }
  }
}
</script>

<style lang="scss" scoped>
.metaverse-quotes {
  text-align: center;

  p {
    font-size: 16pt;
    display: block;
    margin: 5% 8%;
  }
}
</style>