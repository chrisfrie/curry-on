<template>
  <div class="chapter" id="chapter4">
    <StoryNav />
    <div>
      <h2>Final Chapter</h2>
      <p>
        The Currywurst with Ketchup sauce turned out to be a big success. I had
        even become a business partner with the famous Simon, The Bude Owner
        himself. We opened a franchise that was very popular across the city. I
        bought a new house, could afford a little cabin on the Nordsee coast...
        My life seemed to be complete, but one thing was still and always
        missing - Herta.
      </p>

      <p>
        It was one of those fresh spring days. I was heading to the new Bude
        opening as Simon and I decided to expand even more. On my way there I
        was passing the train station and suddenly something struck me. I
        stopped. In the distance I saw a woman smiling at me. “No, that could
        not be. You're tired Manfred” I thought. I looked once again and it
        became clear - she is back and she is back for good.
      </p>
      <img src="../../src/assets/images/tablewurst.svg" />
      <p>...</p>

      <p>
        Herta and I decided to spend the summer up in my cabin. We needed some
        privacy - time to clear the air and to enjoy ourselves. Herta’s return
        was the hottest gossip in Berlin’s Street Food scene, so during the
        first couple of weeks I felt more like a celebrity bodyguard than a man
        who won the love of his life back. We spent our days mostly trying new
        Currywurst recipes, walking along the beach and talking. I was so happy.
      </p>

      <p>
        One morning we chose another direction and ended up having a picnic
        close to the Netherlands border. You could only imagine how surprised we
        were to find a little boy collecting metal parts of old fishing boats.
        <br />
        “Hi, little boy, are you ok, where are your parents?” Herta asked
        gently. <br />
        “I do not have parents, I live nearby, working at the Centrum Wiskunde &
        Informatica research station, we are constructing a new computer based
        on ARRA II. We are also out of resources - that is why I’m collecting
        metal pieces on the beach'' the boy said. <br />
        “Oh my, you must be a genius! How old are you?” I asked. <br />
        “I am 11, my name is Gabe, I do have an IQ of 161. Additionally I can
        make a very good indian curry” he recited. <br />
        “Curry, you say…” Herta smiled at me.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/nordsee.svg" />
      </div>

      <p>…</p>

      <p>
        “Gabe, Herta, please, Curry on! We are late for the Christmas Market!” I
        said for the 3rd time this evening. <br />
        “Oh my dear, we are almost ready and don’t worry, Simon is there to take
        care of our stand” Herta laughed.<br />
        “Exactly, there is no logic in your behaviour father, everything is
        under control. The new automatic system of preparing Currywurst was made
        with test driven development and I supervised everything” Gabe sighted.
        <br />
        “Son, you are truly a blessing, I am the happiest man in the world” I
        said and kissed Herta. My life was finally complete.
      </p>
      <div class="imgFlex">
        <img src="../../src/assets/images/theend.svg" />
      </div>
      <p>THE END</p>
    </div>

    <Chatbot />
  </div>
</template>

<script>
import Chatbot from "@/components/Chatbot.vue";
import StoryNav from "@/components/StoryNav.vue";

export default {
  components: {
    Chatbot,
    StoryNav
  }
};
</script>

<style scoped></style>
