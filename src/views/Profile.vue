<template>
  <div>
    <h5 class="my-3">Profile</h5>
    <div class="custom-container text-start">
      <div class="row my-1">
        <div class="col-4">
          <img :src="data.profile.avatarImage" alt="avatar" class="img-fluid" />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-3 fw-bold">First name</div>
            <div class="col-9">{{ data.profile.firstName }}</div>
          </div>
          <div class="row">
            <div class="col-3 fw-bold">Last name</div>
            <div class="col-9">{{ data.profile.lastName }}</div>
          </div>
          <div class="row">
            <div class="col-3 fw-bold">Phone</div>
            <div class="col-9">{{ data.profile.phone }}</div>
          </div>
          <div class="row">
            <div class="col-3 fw-bold">Email</div>
            <div class="col-9">{{ data.profile.email }}</div>
          </div>
          <div class="row">
            <div class="col-3 fw-bold">Bio</div>
            <div class="col-9">{{ data.profile.bio }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
h5 {
  font-weight: bold;
}

.custom-container {
  max-width: 620px;
}
</style>
