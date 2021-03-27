<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img :src="logoUrl" alt="home" class="d-inline-block align-text-top" />
      </a>
      <h1>{{ title }}</h1>
      <a href="#">Welcome Sally</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Head",
  props: {
    logoUrl: String,
    title: String,
  },
};
</script>

<style scoped>
img {
  height: 4rem;
}
</style>
