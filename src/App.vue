<template>
  <div id="app">
    <Head :logo-url="data.site.logoImage" :title="data.site.title" />
    <Home :title="data.data.metadata.title" :features="data.data.features" />
  </div>
</template>

<script>
import content from "./data/content.json";
import Head from "./components/Head.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Head,
    Home,
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
  color: #2c3e50;
}
</style>
