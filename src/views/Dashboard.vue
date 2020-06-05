<template>
  <div>
    <h1>Curry On!</h1>
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
import ChallengeCard from "@/components/ChallengeCard.vue";
import { getChallenges } from "@/services/challenge-service.js";

export default {
  components: {
    ChallengeCard
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
