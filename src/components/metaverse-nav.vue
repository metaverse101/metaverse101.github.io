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
          <router-link to="/">Home</router-link>
        </li>
        <li
            @mouseover="dropdown = true"
            @mouseleave="dropdown = false">
          <p>Sections</p>
          <div class="metaverse-nav__dropdown" v-if="dropdown">
            <router-link to="/101/">Metaverse 101</router-link>
            <router-link to="/interpersonal-relationships/">Case Study #1: Interpersonal Relationships</router-link>
            <router-link to="/health-care/">Case Study #2: Health Care</router-link>
            <router-link to="/entertainment/">Case Study #3: Gaming and Entertainment</router-link>
            <router-link to="/meet-the-experts/">Meet the Experts</router-link>
          </div>
        </li>
        <li>
          <router-link to="/about/">About</router-link>
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