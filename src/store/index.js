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
      // Do a post request to /auth/local with email and password
      const res = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password
      });
      // Extract the user and jwt key from the response body
      const { user, jwt } = res.data;
      // Trigger the mutations
      ctx.commit("SET_JWT", jwt);
      ctx.commit("SET_USER", user);
      // Redirect to /challenges
      router.push({ name: "challenges" });
    },
    logout() {},
    async fetchChallenges(ctx) {
      const res = await axios.get("http://localhost:1337/challenges");
      ctx.commit("SET_CHALLENGES", res.data);
    },
    async completeChallenge(ctx, { userChallengePicture, caption, challenge }) {
      const formData = new FormData();
      formData.set(
        "data",
        JSON.stringify({
          caption,
          user: ctx.state.user.id,
          challenge
        })
      );
      formData.set("files.userChallengePicture", userChallengePicture);

      await axios.post("http://localhost:1337/pictures", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      ctx.dispatch("updateUser");
      router.push({ name: "challenges" });
    },
    async updateUser(ctx) {
      const res = await axios.get(
        "http://localhost:1337/users/" + ctx.state.user.id,
        {
          headers: {
            Authorization: "Bearer " + ctx.state.jwt
          }
        }
      );
      ctx.commit("SET_USER", res.data);
    }
  },
  getters: {
    getChallengeById: state => id => {
      return state.challenges.find(challenge => challenge.id == id);
    },
    challengesChapter1: state => {
      return state.challenges.filter();
    }
  },
  modules: {}
});
