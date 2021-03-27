<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="custom-container">
      <div class="row">
        <div class="col-6">Title</div>
        <div class="col-2">Magnitude</div>
        <div class="col-4">Time</div>
      </div>
      <div v-for="item in features" :key="item.id" class="row">
        <div class="col-6 text-start">{{ item.properties.place }}</div>
        <div class="col-2">{{ item.properties.mag }}</div>
        <div class="col-4">{{ formatTime(item.properties.time) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Home",
  props: {
    title: String,
    features: Array,
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
