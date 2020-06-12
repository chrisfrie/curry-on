<template>
  <div class="chapter" id="chapter3">
    <StoryNav />
    <div class="chapter-content">
      <p style="text-align:left; font-style: italic">
        Franz. Franz. Franz, Franz Josef! <br />
        I’m begging of you, please don't take my girl. <br />Franz. Franz.
        Franz, Franz Josef! <br />Please don't take her just because you can…
      </p>

      <div class="imgFlex">
        <img src="../../src/assets/images/franzandhertaWedding.svg" />
      </div>
      <p>
        It was another hot night, but this time not curry but tension was in the
        air.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/rainWurst.svg" />
      </div>
      <p>
        “Manfred, I have to leave you, my husband is very sick, I need to take
        care of him.” Herta said. “But what about me, us? Our love? What about
        all of the currywurst we ate together?” I screamed. “I am sorry my love,
        I don’t think you understand… It is 1959..I am a woman trapped in social
        construct, I need to go to America to support my husband” she said.
        “Please… you can’t break my heart”. I sobbed. “I am sorry” Herta
        whispered. That night we had our last currywurst and the sky was crying
        with us. The next day she left, and that image of her - sadly waving
        from the train window - supposed to be the last one I'll ever be given
        to save in my heart.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/train.svg" />
      </div>
      <p>
        When I came back to my apartment, I felt empty. How can I just move on
        with my life when I dedicated it to Herta and Currywurst?? I looked at
        my kitchen counter and suddenly one thought popped up in my head -
        “Maybe you can’t have her, but you can still continue your Currywurst
        journey, you must!”.
      </p>

      <p>
        I went through my cabinets and placed everything I found on the table.
        “Wait a second…” I mumbled. “Vinegar, Tomatenmark, onion, garlic,
        spices… Maybe the new chapter of my life needs a new Currywurst sauce!”
        I mixed all of the ingredients, put my Wurst on the pan and when the
        sausage was ready I poured the sauce over it and sprinkled everything
        with curry powder. What I created was a true perfection.
      </p>

      <p>
        I wanted to go to the other room and share it with Herta, but she was
        very gone. <br />
        “Stop that Manfred, you can’t live in your past” I scolded myself.
        <br />
        Still.. I had to let someone taste this marvelous creation!<br />
        “Knock, knock” - there was a knock at the door. I opened.
        “Surprise!!!!!” my friends and family screamed at me. “Oh my Lord” I
        sighed.<br />
        I totally forgot it was my birthday.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/tableTwosmall.svg" />
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
      if (this.$store.getters.getChallengeById(4)) {
        const challenge4 = this.$store.getters.getChallengeById(4);
        const challenge5 = this.$store.getters.getChallengeById(5);
        const challenge6 = this.$store.getters.getChallengeById(6);
        return [challenge4, challenge5, challenge6];
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

<style scoped>
.chapter-content {
  text-align: justify;
}
</style>
