<template>
  <div>
    <h1>Manfred's Tale!</h1>
    <Chapter1 />
    <Chapter2 />
    <Chapter3>
      <Chatbot />
    </Chapter3>
    <div v-for="(challenges, index) in chapters" :key="index" class="chapter">
      <ChallengeCard
        v-for="challenge in challenges"
        :key="challenge.id"
        :challenge="challenge"
      />
    </div>
  </div>
</template>

<script>
import Chapter1 from "@/components/Chapter1.vue";
import Chapter2 from "@/components/Chapter2.vue";
import Chapter3 from "@/components/Chapter3.vue";
import Chatbot from "@/components/Chatbot.vue";
import ChallengeCard from "@/components/ChallengeCard.vue";
import { getChallenges } from "@/services/challenge-service.js";

export default {
  components: {
    Chapter1,
    Chapter2,
    Chapter3,
    ChallengeCard,
    Chatbot
  },
  data() {
    return {
      challenges: []
    };
  },
  async created() {
    this.challenges = (await getChallenges()).data;
  },
  computed: {
    chapters() {
      const result = [];
      for (let chapterId = 1; chapterId <= 3; chapterId++) {
        const chapter = this.challenges.filter(
          challenge => challenge.chapterId == chapterId
        );
        result.push(chapter);
      }
      return result;
    }
  }
};
</script>

<style scoped>
.chapter {
  margin-bottom: 5rem;
}
</style>
