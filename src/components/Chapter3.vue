<template>
  <div>
    <div>
      <h2>Chapter Three</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        consectetur animi quis dolore, voluptate dolores. Excepturi consectetur
        laudantium dolorem magni quo natus sit placeat error delectus veritatis,
        cupiditate, quaerat recusandae.
      </p>
    </div>
    <ChallengeCard
      v-for="(challenge, index) in challenges"
      :challenge="challenge"
      :key="index"
    />
    <Chatbot v-if="isChapterRevealed(4)" />
  </div>
</template>

<script>
import ChallengeCard from "@/components/ChallengeCard.vue";
import Chatbot from "@/components/Chatbot.vue";

export default {
  components: {
    ChallengeCard,
    Chatbot
  },
  computed: {
    challenges() {
      if (this.$store.getters.getChallengeById(4)) {
        const challenge4 = this.$store.getters.getChallengeById(4);
        const challenge5 = this.$store.getters.getChallengeById(5);
        const challenge6 = this.$store.getters.getChallengeById(6);
        return [challenge4, challenge5, challenge6];
      } else {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
