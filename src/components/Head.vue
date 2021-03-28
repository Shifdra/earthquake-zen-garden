<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">
        <img :src="logoUrl" alt="home" class="d-inline-block align-text-top" />
      </router-link>

      <h1>{{ title }}</h1>

      <router-link to="profile">
        Welcome Sally
      </router-link>
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
