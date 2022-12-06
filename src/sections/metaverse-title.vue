<template xmlns="http://www.w3.org/1999/html">
  <section class="metaverse-title">
      <div class="metaverse-title__header">
        <h1>THE METAVERSE</h1>
        <h2>It doesn’t exist yet. <br>
          Here’s why you still need to care</h2>
        <span class="metaverse-title__text">
          <p>A special report by Pavi Rajesh</p>
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
    h1 {
      font-size: 64pt;
    }

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
}

</style>