<template>
  <div id="app">
    <Home :title="data.data.metadata.title" :features="data.data.features" />
  </div>
</template>

<script>
import content from "./data/content.json";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
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
  margin-top: 60px;
}
</style>
