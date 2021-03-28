<template>
  <div>
    <h3 class="my-4">{{ properties.title }}</h3>
    <div class="custom-container text-start">
      <div class="row">
        <div class="col-3 fw-bold">Title</div>
        <div class="col-9">{{ properties.title }}</div>
      </div>
      <div class="row">
        <div class="col-3 fw-bold">Magnitude</div>
        <div class="col-9">{{ properties.mag }}</div>
      </div>
      <div class="row">
        <div class="col-3 fw-bold">Time</div>
        <div class="col-9">{{ formatTime(properties.time) }}</div>
      </div>
      <div class="row">
        <div class="col-3 fw-bold">Status</div>
        <div class="col-9">{{ properties.status }}</div>
      </div>
      <div class="row">
        <div class="col-3 fw-bold">Tsunami</div>
        <div class="col-9">{{ properties.tsunami }}</div>
      </div>
      <div class="row">
        <div class="col-3 fw-bold">Type</div>
        <div class="col-9">{{ properties.type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Detail",
  props: {
    data: Object,
    index: { type: Number, required: true },
  },
  computed: {
    properties: function() {
      return this.data.data.features[this.index].properties;
    },
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
  max-width: 470px;
}
</style>
