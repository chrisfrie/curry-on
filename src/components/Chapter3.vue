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

export default {
  components: {
    ChallengeCard
  }
};
</script>

<style scoped></style>
