import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    user: null,
    challenges: []
  },
  mutations: {
    SET_JWT(state, jwt) {
      state.jwt = jwt;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CHALLENGES(state, challenges) {
      state.challenges = challenges;
    }
  },
  actions: {
    register() {},
    async login(ctx, { email, password }) {
      const res = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password
      });
      const { user, jwt } = res.data;
      ctx.commit("SET_JWT", jwt);
      ctx.commit("SET_USER", user);
      router.push({ name: "challenges" });
    },
    logout() {}
    // fetchChallenges(ctx) {},
    // completeChallenge(ctx, { userChallengePicture, caption, challengeId }) {},
    // updateUser(ctx) {}
  },
  modules: {}
});
