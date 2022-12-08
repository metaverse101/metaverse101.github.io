<template>
  <div class="metaverse-nav">
    <v-btn
        class="metaverse-nav__top"
        icon="mdi-menu-up"
        color="purple"
        href="#app"
    />

    <div class="metaverse-nav__banner ">
      <ul>
        <li>
          <a href="/metaverse/">Home</a>
        </li>
        <li
            @mouseover="dropdown = true"
            @mouseleave="dropdown = false">
          <p>Sections</p>
          <div class="metaverse-nav__dropdown" v-if="dropdown">
            <a href="/metaverse/101">METAVERSE 101</a>
            <a href="/metaverse/interpersonal-relationships">Case Study #1: Interpersonal Relationships</a>
            <a href="/metaverse/health-care">Case Study #2: Health Care</a>
            <a href="/metaverse/entertainment">Case Study #3: Gaming and Entertainment</a>
            <a href="/metaverse/meet-the-experts">Meet the Experts</a>
          </div>
        </li>
        <li>
          <a href="/metaverse/about">About</a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "metaverse-nav",
  data() {
    return {
      dropdown: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_base.scss";

.metaverse-nav {
  z-index: 1;
  background-image: $metaverse-nav-color;
  position: fixed;
  top: 0;
  min-width: 100%;


  &__banner {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    margin-right: 5vw;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;

    }
    li {
      font-size: 18pt;
      color: white;
      float: left;
      padding: 10px 30px;

      p {
        text-align: center;
      }
    }

    a {
      font-size: 18pt;
      color: white;
      display: block;
      text-align: center;
      text-decoration: none;
    }
  }

  &__top {
    position: fixed;
    bottom: 5vh;
    right: 5vw;
  }

  &__dropdown {
    background-color: black;
    padding: 20px;
    border-radius: 10px;

    a {
      text-align: left;
    }
  }
}
</style>