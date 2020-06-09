<template>
  <div>
    <h1>Manfred's Tale!</h1>
    <main>
      <Chapter1 v-if="$store.getters.isChapterRevealed(1)" />
      <Chapter2 v-if="$store.getters.isChapterRevealed(2)" />
      <Chapter3 v-if="$store.getters.isChapterRevealed(3)" />
    </main>
  </div>
</template>

<script>
import Chapter1 from "@/components/Chapter1.vue";
import Chapter2 from "@/components/Chapter2.vue";
import Chapter3 from "@/components/Chapter3.vue";

export default {
  components: {
    Chapter1,
    Chapter2,
    Chapter3
  },
  created() {
    this.$store.dispatch("fetchChallenges");
  }
};
</script>

<style scoped>
.chapter {
  margin-bottom: 5rem;
}

main {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
</style>
