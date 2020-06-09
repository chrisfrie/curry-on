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
      const challenge1 = this.$store.getters.getChallengeById(1);
      const challenge2 = this.$store.getters.getChallengeById(2);
      if (
        this.$store.state.user.pictures.find(picture => picture.challenge == 1)
      ) {
        return [challenge1, challenge2];
      } else {
        return [challenge1];
      }
    }
  }
};
</script>

<style scoped></style>
