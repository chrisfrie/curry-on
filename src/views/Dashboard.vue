<template>
  <div>
    <h1>Dashboard</h1>
    <ChallengeCard
      v-for="challenge in challenges"
      :key="challenge.id"
      :challenge="challenge"
    />
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
  }
};
</script>

<style scoped></style>
