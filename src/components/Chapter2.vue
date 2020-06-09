<template>
  <div>
    <div>
      <h2>Chapter Two</h2>
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
      if (this.$store.getters.getChallengeById(2)) {
        const challenge2 = this.$store.getters.getChallengeById(2);
        const challenge3 = this.$store.getters.getChallengeById(3);
        return [challenge2, challenge3];
      } else {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
