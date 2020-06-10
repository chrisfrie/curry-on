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
      challenge: [
        {
          id: 4,
          title: "What Currywurst experience could trigger this emotion?",
          details:
            "Show us your best picture when you had an shocking Currywurst-Experience.",
          attachment: "file.jpg",
          points: 6,
          creatorId: 1,
          picturesIds: [
            "https://i.ibb.co/wz45Hcg/claudio-schwarz-purzlbaum-PJr-RYKd-Awl-Q-unsplash.jpg",
            3,
            5
          ],
          chapterId: 3
        },
        {
          id: 5,
          title: "No Currywurst - just Pommes...",
          details:
            "No emoji can desbribe how disappointed you were in that place where you thought you can get a lecker Currywurst, but they only have pommes in the menu! A picture of your disappointed face is better than all emojis together, please upload one to complete the challenge.",
          points: 6,
          creatorId: 1,
          picturesIds: [
            "https://i.ibb.co/CsfbW3y/photo-1541592106381-b31e9677c0e5.jpg",
            3,
            5
          ],
          chapterId: 3
        },
        {
          id: 6,
          title: "Eating a Currywurst is exciting!",
          details:
            "Can you make people cheer for you eating a Currywurst? Show us!",
          points: 6,
          creatorId: 1,
          picturesIds: [
            "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
            3,
            5
          ],
          chapterId: 3
        }
      ]
    };
  }
};
</script>

<style scoped></style>
