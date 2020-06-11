<template>
  <div class="gallery-container">
    <h4>Completed Challenges</h4>
    <div class="gallery">
      <div class="gallery-panel" v-for="picture in picture" :key="picture.id">
        <router-link :to="`/pictures/${picture.id}`">
          <img :src="myApiUrl + picture.userChallengePicture.url" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileGallery",
  props: ["picture"],

  computed: {
    myApiUrl() {
      return process.env.VUE_APP_API_URL;
    }
  }
};
</script>

<style scoped></style>
