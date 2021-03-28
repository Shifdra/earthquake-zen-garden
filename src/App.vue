<template>
  <div id="app">
    <Head :logo-url="data.site.logoImage" :title="data.site.title" />
    <router-view :data="data" />
  </div>
</template>

<script>
import content from "./data/content.json";
import Head from "./components/Head.vue";

export default {
  name: "App",
  components: {
    Head,
  },
  data() {
    return {
      data: content,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444444;
}

h5 {
  font-weight: bold;
}

.custom-container {
  margin: auto;
}
</style>
