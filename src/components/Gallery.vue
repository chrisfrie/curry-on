<template>
  <div class="gallery">
    <div
      class="gallery-panel"
      v-for="picture in challenge.pictures"
      :key="picture.id"
    >
      <router-link :to="`/pictures/${picture.id}`">
        <img :src="myApiUrl + picture.userChallengePicture.url" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["challenge"],
  computed: {
    myApiUrl() {
      return process.env.VUE_APP_UPLOAD_URL;
    }
  }
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 5rem auto;
  justify-content: center;
}

.gallery-panel img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.2rem;
  margin: 0.3rem 0.3rem;
}
</style>
