<template>
  <div class="lightbox">
    <img :src="pictureUrl" />

    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        Info
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
      pictures: []
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
  methods: {},
  async created() {
    this.pictures = (await getPictures()).data;
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
  display: grid;
  grid-template-columns: 1rem 1fr auto;
  grid-gap: 2rem;
}
.lightbox img {
  margin: auto;
  width: 100%;
  grid-column-start: 2;
}
.lightbox-info {
  margin: auto 2rem auto 0;
}
.lightbox-info-inner {
  background-color: #ffffff;
  display: inline-block;
  padding: 2rem;
}
</style>
