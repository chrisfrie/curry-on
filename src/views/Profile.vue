<template>
  <div class="profile-wrapper">
    <h2>Profile</h2>
    <section class="profile-body">
      <div class="avatar"><img :src="imageURL" /></div>
      <div class="user-info">
        <h2>{{ profile.user.username }}</h2>
        <p>Current Pommes Points: {{ pommesPoints }}</p>
      </div>
    </section>
    <ProfileGallery :picture="$store.state.user.pictures" />
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
      return "http://localhost:1337" + this.profile.avatar.url;
    },
    pommesPoints() {
      let currentPoints = 0;
      let pictures = [this.$store.state.user.pictures];
      for (const element of pictures) {
        if (element.find(element => element.challenge == 1)) {
          currentPoints += this.$store.state.challenges.pommesPoints;
        } else if (element.find(element => element.challenge == 2)) {
          currentPoints += 6;
        } else if (element.find(element => element.challenge == 3)) {
          currentPoints += 6;
        }
      }

      return currentPoints;
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
