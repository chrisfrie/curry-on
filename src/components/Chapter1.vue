<template>
  <div class="chapter" id="chapter1">
    <div class="chapter-content">
      <div>
        <h2>Chapter One</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          consectetur animi quis dolore, voluptate dolores. Excepturi
          consectetur laudantium dolorem magni quo natus sit placeat error
          delectus veritatis, cupiditate, quaerat recusandae.
        </p>
      </div>
      <ChallengeCard
        v-for="(challenge, index) in challenges"
        :challenge="challenge"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ChallengeCard from "@/components/ChallengeCard.vue";

export default {
  components: {
    ChallengeCard
  },
  computed: {
    challenges() {
      // return this.$store.state.challenges;
      const challenge1 = this.$store.getters.getChallengeById(1);
      return challenge1 ? [challenge1] : [];
    }
  }
};
</script>

<style>
.chapter {
  width: 100vw;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.chapter-content {
  max-width: 400px;
  margin: 0 auto;
}
</style>
