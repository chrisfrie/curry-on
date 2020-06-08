<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="pictureUrl" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        Info
      </div>
    </div>
  </div>
</template>

<script>
import { getPictures, getChallenges } from "@/services/challenge-service.js";

export default {
  name: "Picture",
  data() {
    return {
      pictures: [],
      challenges: []
    };
  },
  computed: {
    picture() {
      return this.pictures.find(picture => {
        return picture.id === Number(this.$route.params.id);
      });
    },
    pictureUrl() {
      return this.picture
        ? require(`../assets/images/${this.picture.filename}`)
        : "";
    }
  },
  methods: {
    closeLightbox() {
      this.$router.push(`/challenges/${this.challenges}`);
    }
  },
  async created() {
    this.pictures = (await getPictures()).data;
    this.challenges = (await getChallenges()).data;
  }
};
</script>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
}
.lightbox img {
  margin: auto;
  width: 100%;
}
.lightbox-info {
  margin: auto 2rem auto 0;
}
.lightbox-info-inner {
  background-color: #ffffff;
  padding: 2rem;
  min-width: 80%;
}
</style>
