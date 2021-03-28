<template>
  <div>
    <h5 class="my-3">{{ data.data.metadata.title }}</h5>
    <div class="custom-container">
      <div class="row my-1">
        <div class="col-6 fw-bold">Title</div>
        <div class="col-2 fw-bold">Magnitude</div>
        <div class="col-4 fw-bold">Time</div>
      </div>
      <div
        v-for="(item, index) in data.data.features"
        :key="item.id"
        class="row"
      >
        <div class="col-6 text-start">
          <router-link :to="{ name: 'Detail', params: { index } }">
            {{ item.properties.place }}
          </router-link>
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
  name: "Home",
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
h5 {
  font-weight: bold;
}

.custom-container {
  max-width: 550px;
}
</style>
