<template>
  <div>
    <h2>Profile</h2>
    <section class="profile-body">
      <div class="avatar"><img src="imageURL" /></div>
      <h2>{{ profile.user.username }}</h2>
      <h3>{{ profile.pommesPoints }}</h3>
    </section>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  computed: {
    imageUrl() {
      return process.env.VUE_APP_UPLOAD_URL + this.profile.avatar.url;
    }
  }
};
</script>

<style scoped></style>
