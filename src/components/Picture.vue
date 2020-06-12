<template>
  <div class="container" @click.self="closeLightbox">
    <img :src="myApiUrl + picture.userChallengePicture.url" />
    <div class="picture-info">
      <div class="picture-caption">
        {{ picture.caption }}
        <div class="picture-user">
          by:
          {{ picture.user.username }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPictures } from "@/services/challenge-service.js";

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
  }
};
</script>

<style scoped>
.container {
  opacity: 0.95;
  background-color: #313131;
  overflow: auto;
  border-radius: 1%;
  position: relative;
  display: table;
}
.container img {
  max-width: 80%;
}
.picture-info {
  display: block;
  margin: 0 auto;
  min-width: 80%;
  border-radius: 10%;
  display: table-cell;
}
.picture-caption {
  background-color: var(--light-background);
  position: relative;
  padding: 0.5rem;
  border-radius: 1%;
}

.picture-user {
  font-size: 24px;
}
</style>
