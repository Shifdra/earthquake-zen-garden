<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <router-link to="/">
        <img :src="logoUrl" alt="home" class="d-inline-block align-text-top" />
      </router-link>

      <h2>{{ title }}</h2>

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
.navbar-light {
  background-color: #ededed;
}

h2 {
  color: #777777;
  font-weight: bold;
}

img {
  height: 4rem;
}
</style>
