import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwt: null,
    user: null,
    challenges: [],
    showLogin: false
  },
  mutations: {
    SET_JWT(state, jwt) {
      localStorage.setItem("jwt", jwt);
      state.jwt = jwt;
      axios.defaults.headers.common.Authorization = "Bearer " + jwt;
    },
    SET_USER(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    },
    CLEAR_USER(state) {
      state.jwt = null;
      state.user = null;
      delete axios.defaults.headers.common.Authorization;
    },
    SET_CHALLENGES(state, challenges) {
      state.challenges = challenges;
    },
    SHOW_LOGIN(state) {
      state.showLogin = true;
    },
    HIDE_LOGIN(state) {
      state.showLogin = false;
    }
  },
  actions: {
    // need to implement
    async register(ctx, userdata) {
      const res = await axios.post("/auth/local/register", userdata);
      const { user, jwt } = res.data;
      ctx.commit("SET_USER", user);
      ctx.commit("SET_JWT", jwt);
      router.push({ name: "challenges" });
    },
    // Login needs error handling - if there is an error, show the user what is needed
    async login(ctx, { email, password }) {
      // Do a post request to /auth/local with email and password
      const res = await axios.post("/auth/local", {
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
    loadUserFromLocalStorage(ctx) {
      const jwt = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");
      if (jwt && user) {
        ctx.commit("SET_JWT", jwt);
        ctx.commit("SET_USER", JSON.parse(user));
      }
    },
    // need to implement
    logout(ctx) {
      localStorage.clear();
      ctx.commit("CLEAR_USER");
      router.push({ name: "intro" });
    },
    // Needs Error handling - maybe don't do a fetch, when we already have the challenges (if challanges array is populated, don't fetch again)
    async fetchChallenges(ctx) {
      const res = await axios.get("/challenges");
      ctx.commit("SET_CHALLENGES", res.data);
    },
    // Needs Error handling - make sure that only authenticated user can complete challenges for him/herself
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

      await axios.post("/pictures", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      ctx.dispatch("updateUser");
      router.push({ name: "challenges" });
    },
    // Needs some Error handling - put a try - catch handler with a notification system; Maybe a notification for completing a challenge;
    async updateUser(ctx) {
      const res = await axios.get("/users/" + ctx.state.user.id);
      ctx.commit("SET_USER", res.data);
    }
  },
  getters: {
    getChallengeById: state => id => {
      return state.challenges.find(challenge => challenge.id == id);
    },

    isChapterRevealed: state => chapterId => {
      if (!state.user) return false;

      if (chapterId == 1) {
        return true;
      } else if (chapterId == 2) {
        return state.user.pictures.find(element => element.challenge == 1);
      } else if (chapterId == 3) {
        return (
          state.user.pictures.find(element => element.challenge == 2) &&
          state.user.pictures.find(element => element.challenge == 3)
        );
      } else if (chapterId == 4) {
        return (
          state.user.pictures.find(element => element.challenge == 4) &&
          state.user.pictures.find(element => element.challenge == 5) &&
          state.user.pictures.find(element => element.challenge == 6)
        );
      } else {
        return false;
      }
    }
  },
  modules: {}
});
