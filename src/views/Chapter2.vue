<template>
  <div class="chapter" id="chapter2">
    <StoryNav />
    <div>
      <h2>Chapter II</h2>

      <p>
        And it was indeed… What a woman, her passion, heart, intelligence, spicy
        shine in her eye. I WAS IN LOVE!!! And even the fact that she was
        married couldn’t stop me from worshiping her. Happily, Herta’s husband
        was far away, starting a business in America. Together with Taylor H. -
        internationally recognized investor - he was opening a big clock factory
        in Chicago.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/curryKneipe.svg" />
      </div>
      <p>
        We, we ,we…. we were together all the time, spending nights and days on
        exploring the city and introducing our golden invention to the local
        street food scene. Currywurst became our love potion, favourite snack
        and an absolute hit in Berlin! So precious, that sometimes we would have
        to climb a tree to eat it in peace without people asking “Where did you
        get it? I need one right now!”.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/treeWurst.svg" />
      </div>
      <p>
        Herta liked to surprise me with new spice combinations.. and would let
        me try them during our blindfolded sessions … ahhhh… <br />I wouldn't
        have thought back then that our perfect idyll would be over very soon….
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/HertaAlone.svg" />
      </div>
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
import StoryNav from "@/components/StoryNav.vue";

export default {
  components: {
    ChallengeCard,
    StoryNav
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
  },
  created() {
    this.$store.dispatch("fetchChallenges");
  }
};
</script>

<style scoped></style>
