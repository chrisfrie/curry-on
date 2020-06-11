<template>
  <div class="profile-wrapper">
    <h2>Profile</h2>
    <section class="profile-body">
      <div v-if="user.profile && user.profile.avatar" class="avatar">
        <img :src="imageURL" />
      </div>

      <template v-else-if="$store.state.user.id == user.id">
        <input
          style="display: none"
          ref="fileInput"
          @change="fileSelected"
          type="file"
        />
        <button @click="$refs.fileInput.click()">Upload Avatar</button>
      </template>

      <div class="user-info">
        <h2>{{ user.username }}</h2>
        <p>Current Pommes Points: {{ pommesPoints }}</p>
      </div>
    </section>
    <ProfileGallery :picture="user.pictures" />
  </div>
</template>

<script>
import ProfileGallery from "@/components/ProfileGallery.vue";

export default {
  components: {
    ProfileGallery
  },
  data() {
    return {
      avatar: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    imageURL() {
      return process.env.VUE_APP_API_URL + this.user.profile.avatar.url;
    },
    pommesPoints() {
      if (!this.$store.state.challenges.length) return 0;
      const completedChallenges = this.user.pictures.map(picture => {
        return picture.challenge;
      });
      let currentPoints = 0;
      for (const element of completedChallenges) {
        const challenge = this.$store.getters.getChallengeById(element);
        currentPoints += Number(challenge.pommesPoints);
      }
      return currentPoints;
    },
    avatarPreviewUrl() {
      return this.avatar ? window.URL.createObjectURL(this.avatar) : null;
    }
  },
  methods: {
    fileSelected(event) {
      // Check if a file was selected
      if (event.target.files.length == 0) {
        return;
      }

      this.$store.dispatch("createProfile", { avatar: event.target.files[0] });
    }
  },
  async created() {
    this.$store.dispatch("fetchChallenges");
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
