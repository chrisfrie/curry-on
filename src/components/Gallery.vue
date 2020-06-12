<template>
  <div class="gallery-container">
    <div class="header">
      <h4>Challenge Pictures</h4>
    </div>
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

<style>
.gallery-container {
  max-width: 100rem;
  margin: 0 auto;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.header {
  margin-top: 2rem;
  margin: 0;
}

h4 {
  margin-bottom: 0;
}

.gallery-panel {
  object-fit: cover;
  border-radius: 0.2rem;
  overflow: hidden;
  margin: 0 auto;
}

.gallery-panel img {
  width: 200px;
  height: 200px;
  margin: 0.3rem;
  object-fit: cover;
}
</style>
