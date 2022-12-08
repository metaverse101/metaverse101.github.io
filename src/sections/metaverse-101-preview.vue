<template>
  <section class="metaverse-101">
    <metaverse-page>
      <div>
        <h1>METAVERSE 101</h1>

        <span class="mt-10">
          <p>
            The future of technological innovation. <br>
            The forthcoming iteration of the internet. <br>
            The next big thing.
          </p>

          <p>
            Chances are you have heard revolutionary statements as such - from flagship technology companies to your
            gamer friend - about a system that will change the world: the metaverse. Colloquially, it is a computer-generated,
            immersive world that people can navigate and interact with, designed to mimic the real world and beyond. The truth,
            however, is far more complex.
          </p>

          <p>
            Some people believe humans will be able to live - at least part of their lives - in the metaverse, working and
            socializing as they do in the real world but with more creative freedom and without the physical limitations.
            Despite the widespread reach of its spectacle, however, the metaverse itself remains enigmatic. Both expansive
            yet not fully realized, the metaverse raises many questions about its inner workings, inherent dangers and its
            all-encompassing future.
          </p>

          <p>
            “I like to say that the metaverse is a metaphor,” said David Nelson, director of the Mixed Reality Lab at the University of Southern California. “It is a placeholder for what we will do with immersive technology, how we will adopt it and how it will impact our lives and our culture. People are using this term without it really being defined yet and I think they know that because it is being defined as we discuss it.”
          </p>
        </span>

        <v-btn to="/101/" class="mt-10">
          Read More
        </v-btn>
      </div>
    </metaverse-page>
  </section>
</template>

<script>
import MetaversePage from "../components/metaverse-page.vue";

export default {
  name: "metaverse-101",
  components: {
    MetaversePage
  }
}
</script>

<style lang="scss" scoped>
.metaverse-101 {
  p {
    padding: 2% 0;
  }
}
</style>