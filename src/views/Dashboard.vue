<template>
  <div>
    <h1>Manfred's Tale!</h1>
    <Chapter1 />
    <Chapter2 />
    <Chapter3>
      <Chatbot />
    </Chapter3>
  </div>
</template>

<script>
import Chapter1 from "@/components/Chapter1.vue";
import Chapter2 from "@/components/Chapter2.vue";
import Chapter3 from "@/components/Chapter3.vue";
import Chatbot from "@/components/Chatbot.vue";

export default {
  components: {
    Chapter1,
    Chapter2,
    Chapter3,
    Chatbot
  },

};
</script>

<style scoped>
.chapter {
  margin-bottom: 5rem;
}
</style>
