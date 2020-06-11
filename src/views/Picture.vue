<template>
  <div class="container">
    <Picture />
  </div>
</template>

<script>
import Picture from "@/components/Picture.vue";

export default {
  name: "picture",
  components: {
    Picture
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
</style>
