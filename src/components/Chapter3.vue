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
    <ChallengeCard :challenge="challenge" />
    <Chatbot />
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

  data() {
    return {
      challenge: []
    };
  }
};
</script>

<style scoped></style>
