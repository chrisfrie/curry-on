<template>
  <div class="chapter" id="chapter1">
    <StoryNav />
    <div>
      <h2>Chapter I</h2>
      <div>
        <p>
          My name is Manfred and back in the 50s I used to be a very respected
          butler, serving oysters at the most glamorous parties and high society
          events in Berlin. I had access to the absolutely best and the most
          highly sophisticated cuisine you could imagine, but my true culinary
          passion was Berlin's street food.
        </p>

        <p>
          The purpose of that story, however, is not to brag about my status
          back in the days... Oh my wurst, my memory… one second... of course!
        </p>

        <p>
          It all begins on this one hot evening, that changed my personal and
          culinary life forever.
        </p>

        <img
          src="../../src/assets/images/Simon.svg"
          style="width:128px;height:128px"
        />
        <p>
          Every other night after work I was getting bratwurst at my favourite
          Bude. After a quick chat with the famous Simon, the most successful
          Street-Food-Bude owner himself, I picked my order and asked for extra
          Tomatenmark on the sausage. It was getting late, so I quickly turned
          back to head home…
        </p>

        <p>PUFFFFF!!!</p>
        <img
          src="../../src/assets/images/curryDust.svg"
          style="width:128px;height:128px"
        />
        <p>
          Golden cloud has blown up in the air! Spicy smelling dust covered my
          tuxedo, bratwurst and everything around. “What is happening? Is that
          magic or a bomb explosion?” After a few seconds, the dust settled and
          there she was - the most stunning woman in Western Berlin standing in
          front of me… and I knew that my heart was in trouble.
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
import StoryNav from "@/components/StoryNav.vue";

export default {
  components: {
    ChallengeCard,
    StoryNav
  },
  computed: {
    challenges() {
      // return this.$store.state.challenges;
      const challenge1 = this.$store.getters.getChallengeById(1);
      return challenge1 ? [challenge1] : [];
    }
  },
  created() {
    this.$store.dispatch("fetchChallenges");
  }
};
</script>

<style>
.chapter {
  max-width: 500px;
  margin: 0 auto;
  flex-shrink: 0;
  scroll-snap-align: start;
}
</style>
