import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "Gabi",
      completedChallenges: [
        {
          challengeId: 1,
          imageUrl: ""
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
