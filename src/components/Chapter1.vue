<template>
  <div>
    <div>
      <h2>Chapter One</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        consectetur animi quis dolore, voluptate dolores. Excepturi consectetur
        laudantium dolorem magni quo natus sit placeat error delectus veritatis,
        cupiditate, quaerat recusandae.
      </p>
    </div>
    <ChallengeCard :challenge="challenge" />
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
      challenge: {
        id: 1,
        title: "Draw your own Currywurst",
        details:
          "Get creative and draw the perfect (or maybe even artistic) Currywurst!",
        points: 9,
        creatorId: 1,
        picturesIds: [
          "https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/s960x960/67459404_2429206074033339_3827985689568346112_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_eui2=AeF97wbmIqrURX0lQAsekgcksA5y1nvg6-iwDnLWe-Dr6KihLHU7AUUY16aBSfjO-Uc&_nc_ohc=qtGNZh7NzHoAX9uWMwp&_nc_ht=scontent-frt3-2.xx&_nc_tp=7&oh=4129fc3d22bef4bd1afef2331678b26d&oe=5EFC8C48",
          3,
          5
        ],
        chapterId: 1
      }
    };
  }
};
</script>

<style scoped></style>
