<template xmlns="http://www.w3.org/1999/html">
  <section class="metaverse-title">
      <div class="metaverse-title__header" data-aos="fade-right" data-aos-duration="2000">
        <h1>THE METAVERSE</h1>
        <h2>It doesn’t exist yet. <br>
          Here’s why you still need to care</h2>
        <span class="metaverse-title__text">
          <p>A special report by Pavithra Rajesh</p>
          <p class="metaverse-title__subtitle"> Curious about the metaverse? I don't blame you; the word is thrown around in several conversations, but few
          people know exactly what they are talking about. Scroll down and learn a little bit about this powerful - yet,
          futuristic - system, including where it came from, how it works and how it will play out in different environments.</p>
      </span>
      </div>
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
  font-family: "Zen Dots", sans-serif;
  text-align: center;
  color: white;

  &__header {

    h1, h2 {
      color: white
    }
    display: block;
    margin: 5% 20%;
  }

  &__image {
    width: 100%;
    height: 500px;
  }

  &__text {
    span {
      color: white;
      margin: 10px 0;
    }
  }

  &__subtitle {
    background-color: white;
    border-radius: 10px;
    color: black;
    padding: 5%;
    font-family: 'Roboto Condensed', sans-serif;
  }
}

</style>