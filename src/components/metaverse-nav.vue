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
        <li v-for="(i, index) in items" :key="index">
          <a :href="i.route">{{ i.title }}</a>
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
      items: [
        {
          title: "Metaverse",
          route: '/metaverse/'
        },
        {
          title: "About",
          route: '/metaverse/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_base.scss";

.metaverse-nav {
  z-index: 1;
  background-color: $metaverse-nav-color;
  position: fixed;
  top: 0;
  min-width: 100%;

  a {
    font-size: 18pt;
    color: $metaverse-font-color;
    display: block;
    text-align: center;
    text-decoration: none;
  }


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
      float: left;
      padding: 10px 30px;
    }
  }

  &__top {
    position: fixed;
    bottom: 5vh;
    right: 5vw;
  }
}
</style>