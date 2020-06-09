<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="picture in pictures" :key="picture.id">
      <router-link :to="`/pictures/${picture.id}`">
        <img :src="myApiUrl + picture.userChallengePicture.url" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPictures } from "@/services/challenge-service.js";

export default {
  name: "Gallery",
  data() {
    return {
      pictures: []
    };
  },
  computed: {
    myApiUrl() {
      return process.env.VUE_APP_API_URL;
    }
  },

  async created() {
    this.pictures = (await getPictures()).data;
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
