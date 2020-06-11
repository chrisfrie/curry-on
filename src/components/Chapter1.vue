<template>
  <div class="chapter" id="chapter1">
    <div class="chapter-content">
      <div>
        <h2>Chapter I</h2>
        <p>
          And it was indeed… What a woman, her passion, heart, intelligence,
          spicy shine in her eye. I WAS IN LOVE!!! And even the fact that she
          was married couldn’t stop me from worshiping her. Happily, Herta’s
          husband was far away, starting a business in America.
        </p>

        <p>
          We, we ,we…. we were together all the time, spending nights and days
          on exploring the city and introducing our golden invention to the
          local street food scene. Currywurst became our love potion, favourite
          snack and an absolute hit in Berlin! So precious, that sometimes we
          would have to climb a tree to eat it in peace without people asking
          “Where did you get it? I need one right now!”.
        </p>

        <p>
          Herta liked to surprise me with new spice combinations.. and would let
          me try them during our blindfolded sessions … ahhhh… <br />I wouldn't
          have thought back then that our perfect idyll would be over very
          soon….
        </p>
      </div>
      <ChallengeCard
        v-for="(challenge, index) in challenges"
        :challenge="challenge"
        :key="index"
      />
    </div>
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
      // return this.$store.state.challenges;
      const challenge1 = this.$store.getters.getChallengeById(1);
      return challenge1 ? [challenge1] : [];
    }
  }
};
</script>

<style>
.chapter {
  width: 100vw;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.chapter-content {
  max-width: 400px;
  margin: 0 auto;
}
</style>
