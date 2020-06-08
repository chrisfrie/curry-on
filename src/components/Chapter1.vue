<template>
  <div>
    <div>
      <h2>Chapter One</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        consectetur animi quis dolore, voluptate dolores. Excepturi consectetur
        laudantium dolorem magni quo natus sit placeat error delectus veritatis,
        cupiditate, quaerat recusandae.
      </p>
    </div>
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
import ChallengeCard from "@/components/challengecard.vue";
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
  },

  async created() {
    this.challenges = (await getChallenges()).data;
  }
};
</script>

<style scoped></style>
