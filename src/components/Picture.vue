<template>
  <div class="lightbox" @click.self="closeLightbox">
    <img :src="myApiUrl + picture.userChallengePicture.url" />
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        {{ picture.caption }}
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
    myApiUrl() {
      return process.env.VUE_APP_UPLOAD_URL;
    }
  },
  methods: {
    closeLightbox() {
      this.$router.push({ path: `/challenges/${this.picture.challenge.id}` });
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lightbox img {
  margin: 10% auto 0 auto;
  width: 90%;
}
.lightbox-info {
  margin: 0;
  width: 90vw;
}
.lightbox-info-inner {
  background-color: var(--light-background);
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
}
</style>
