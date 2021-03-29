<template>
  <div>
    <h5 class="my-3">{{ data.data.metadata.title }}</h5>
    <div class="custom-container">
      <div class="row my-1">
        <div @click="toggleSort('place');" class="col-6 fw-bold">
          Title
        </div>
        <div @click="toggleSort('mag');" class="col-2 fw-bold">
          Magnitude
        </div>
        <div @click="toggleSort('time');" class="col-4 fw-bold">
          Time
        </div>
      </div>
      <div v-for="(item, index) in features" :key="item.id" class="row">
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
  data() {
    return {
      features: this.data.data.features,
      sortBy: { field: null, asc: false },
    };
  },
  methods: {
    formatTime: function(timestamp) {
      let d = moment(timestamp).format("lll");
      return d;
    },

    toggleSort: function(sortField) {
      /*Setting the sort order asc/desc
        1. When the user continues to click the same field we toggle the direction
        2. Clicking a new field will always be ascending to begin with
      */
      if (sortField === this.sortBy.field)
        this.sortBy.asc = !this.sortBy.asc;
      else
        this.sortBy.asc = true;

      //set the field being sorted by
      this.sortBy.field = sortField;

      //apply sort order to the features array
      this.features.sort((a, b) => {
        if (this.sortBy.asc)
          return a.properties[this.sortBy.field] > b.properties[this.sortBy.field] ? 1 : -1;
        else 
          return a.properties[this.sortBy.field] < b.properties[this.sortBy.field] ? 1 : -1;
      });
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
