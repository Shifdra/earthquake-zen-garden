<template>
  <div>
    <h3 class="my-4">Profile</h3>
    <div class="custom-container">
      <div class="row my-1">
        <div class="col-6">Title</div>
        <div class="col-2">Magnitude</div>
        <div class="col-4">Time</div>
      </div>
      <div v-for="item in data.data.features" :key="item.id" class="row">
        <div class="col-6 text-start">
          <a href="">{{ item.properties.place }}</a>
        </div>
        <div class="col-2">{{ item.properties.mag }}</div>
        <div class="col-4">{{ formatTime(item.properties.time) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Profile",
  props: {
    data: Object,
  },
  methods: {
    formatTime: function(timestamp) {
      let d = moment(timestamp).format("lll");
      return d;
    },
  },
};
</script>

<style scoped>
.custom-container {
  margin: auto;
  max-width: 600px;
}
</style>
