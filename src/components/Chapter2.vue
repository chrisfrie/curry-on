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
    <ChallengeCard v-for="(challenge, index) in challenges" :key="index" />
  </div>
</template>

<script>
import ChallengeCard from "@/components/ChallengeCard.vue";

export default {
  components: {
    ChallengeCard
  },

  data() {
    return {
      challenges: [
        {
          id: 2,
          title: "Places where you shouldn't eat Currywurst",
          details:
            "Trains, elevators and other narrow spaces are the ideal places to enchant everyone in the area with the wonderful smell of Currywurst. Show us the place where you and your Currywurst got many nasty looks.",
          points: 6,
          creatorId: 1,
          picturesIds: ["https://i.ibb.co/wLRwNws/1384534801000.jpg", 3, 5],
          chapterId: 2
        },
        {
          id: 3,
          title: "Le grand Chef",
          details:
            "Create the most awesome Currywurst there is. Post your picture and soon the biggest Wurstlovers will line up at your kitchen.",
          points: 12,
          creatorId: 1,
          picturesIds: ["https://i.ibb.co/mB3vjS7/maxresdefault.jpg", 3, 5],
          chapterId: 2
        }
      ]
    };
  }
};
</script>

<style scoped></style>
