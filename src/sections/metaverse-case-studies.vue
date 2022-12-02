<template>
  <section class="metaverse-case-studies">
    <metaverse-page>
      <div>
        <span class="text-h2"> CASE STUDIES </span>
        <div class="d-flex">
          <v-card class="ma-5" width="500">
            <img src="../assets/placeholder.png" />
            <v-card-title>Interpersonal Relationships</v-card-title>
            <v-card-text>
              Technology has long connected people when they cannot physically be together - even before the coronavirus
              pandemic brought about an increased use of Zoom and other video conferencing platforms. As is human nature,
              only when it was taken away did people realize the value of person to person interactions, which bolstered
              enthusiasm for technological alternatives.
            </v-card-text>
          </v-card>

          <v-card class="ma-5" width="500">
            <img src="../assets/placeholder.png" />
            <v-card-title>Health Case</v-card-title>
            <v-card-text>
              A team of cardiologists in Palo Alto, California, created 3D virtual models of a patient’s heart,
              lungs and chest cavity they could examine from every angle to perform a difficult heart valve replacement.
              A mother in New Hampton, New York, wore a virtual reality headset during labor that eased the excruciating
              pain by immersing her in a computer-generated beach and soothing her with vocal guidance.
            </v-card-text>

          </v-card>

          <v-card class="ma-5" width="500">
            <img src="../assets/placeholder.png" />
            <v-card-title>Entertainment, gaming and the sex industry</v-card-title>
            <v-card-text>
              The fantasticalness of the gaming world led easily into the fantasticalness of the metaverse.
              Many early iterations of metaverse environments were created in the context of gaming, specifically
              video games, where the concept of creating an avatar to interact with other users in a digitally-designed
              world was common enough.
            </v-card-text>

          </v-card>
        </div>
      </div>
    </metaverse-page>
  </section>
</template>

<script>
import MetaversePage from "../components/metaverse-page.vue";
export default {
  name: "metaverse-case-studies",
  components: {MetaversePage}
}
</script>

<style scoped>

</style>