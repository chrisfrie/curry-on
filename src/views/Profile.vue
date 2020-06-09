<template>
  <div class="profile-wrapper">
    <h2>Profile</h2>
    <section class="profile-body">
      <div class="avatar"><img :src="imageURL" /></div>
      <div class="user-info">
        <h2>UserName: {{ profile.user.username }}</h2>
        <p>Current Pommes Points: {{ profile.pommesPoints }}</p>
      </div>
    </section>
    <div class="profile-gallery"><ProfileGallery /></div>
  </div>
</template>

<script>
import ProfileGallery from "@/components/ProfileGallery.vue";
export default {
  props: ["profile"],
  components: {
    ProfileGallery
  },
  computed: {
    imageURL() {
      return "http://localhost:3000" + this.profile.avatar.url;
    }
  }
};
</script>

<style scoped>
.profile-body {
  display: flex;
  justify-content: center;
}
.avatar img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px black;
  border-radius: 50%;
  margin-right: 2rem;
}
.user-info {
  text-align: left;
  align-self: center;
}
</style>
