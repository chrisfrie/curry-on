<template>
  <div class="gallery">
    <div class="gallery-panel" v-for="picture in pictures" :key="picture.id">
      <router-link :to="`/pictures/${picture.id}`">
        <img :src="thumbUrl(picture.filename)" />
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

  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
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
}

.gallery-panel img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 0.2rem;
  margin-right: 1rem;
}
</style>
