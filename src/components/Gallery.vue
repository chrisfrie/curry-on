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
      return process.env.VUE_APP_API_URL;
    }
  }
};
</script>

<style>
.gallery-container {
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 1rem auto;
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
  flex: 1 0 8rem;
  object-fit: cover;
  border-radius: 0.2rem;
  margin: 1rem;
  box-shadow: 0.3rem 0.4rem 0.4rem #9c9b96;
  overflow: hidden;
}

.gallery-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.gallery-panel img:hover {
  transform: scale(1.15);
}
</style>
