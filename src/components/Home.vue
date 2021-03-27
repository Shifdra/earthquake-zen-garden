<template>
  <div>
    <h3>{{ data.metadata.title }}</h3>
    <div class="container">
      <table class="table table-borderless text-center">
        <thead>
          <th>Title</th>
          <th>Magnitude</th>
          <th>Time</th>
        </thead>
        <tbody>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    data: Object,
  },
};
</script>

<style scoped></style>
