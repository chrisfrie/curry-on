import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "@/router";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(Vuex);

let nextId = 1;

function getNewNotificationId() {
  const id = nextId;
  nextId += 1;
  return id;
}

export default new Vuex.Store({
  state: {
    jwt: null,
    user: null,
    challenges: [],
    notifications: [],
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
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      const index = state.notifications.findIndex(
        notification => notification.id == notificationToRemove.id
      );
      state.notifications.splice(index, 1);
    },
    SHOW_LOGIN(state) {
      state.showLogin = true;
    },
    HIDE_LOGIN(state) {
      state.showLogin = false;
    }
  },
  actions: {
    async register(ctx, userdata) {
      try {
        const res = await axios.post("/auth/local/register", userdata);
        const { user, jwt } = res.data;
        ctx.commit("SET_USER", user);
        ctx.commit("SET_JWT", jwt);
        router.push({ name: "challenges" });
      } catch {
        ctx.dispatch("pushNotification", {
          type: "error",
          message:
            "I believe you misstyped something, please check your inputs and try again."
        });
      }
    },
    async login(ctx, { email, password }) {
      try {
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
      } catch {
        ctx.dispatch("pushNotification", {
          type: "error",
          message:
            "Are you sure this is the correct input? Please check it and try again."
        });
      }
    },
    loadUserFromLocalStorage(ctx) {
      const jwt = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");
      if (jwt && user) {
        ctx.commit("SET_JWT", jwt);
        ctx.commit("SET_USER", JSON.parse(user));
      }
    },
    logout(ctx) {
      localStorage.clear();
      ctx.commit("CLEAR_USER");
      router.push({ name: "intro" });
    },

    async fetchChallenges(ctx) {
      if (ctx.state.challenges.length != 0) return;
      try {
        const res = await axios.get("/challenges");
        ctx.commit("SET_CHALLENGES", res.data);
      } catch {
        ctx.dispatch("pushNotification", {
          type: "error",
          message:
            "Sorry my dear, I am an old man, it is my nap time. Please, try later again."
        });
      }
    },

    async completeChallenge(ctx, { userChallengePicture, caption, challenge }) {
      try {
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
      } catch {
        ctx.dispatch("pushNotification", {
          type: "error",
          message:
            "Sorry my dear, seems like something is missing. I can not continue my story without your full engagement"
        });
      }
    },
    // Maybe a notification for completing a challenge;
    async updateUser(ctx) {
      try {
        const res = await axios.get("/users/" + ctx.state.user.id, {
          headers: {
            Authorization: "Bearer " + ctx.state.jwt
          }
        });
        ctx.commit("SET_USER", res.data);
      } catch {
        ctx.dispatch("pushNotification", {
          type: "error",
          message:
            "Sorry my dear, something went wrong, but do not give up! Curry On!"
        });
      }
    },
    pushNotification(ctx, { type, message }) {
      const notification = {
        id: getNewNotificationId(),
        type: type || "success",
        message
      };
      ctx.commit("PUSH_NOTIFICATION", notification);
      setTimeout(() => {
        ctx.commit("REMOVE_NOTIFICATION", notification);
      }, 5000);
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
    },
    getActiveChapter(state, getters) {
      for (let chapter = 3; chapter > 1; --chapter) {
        if (getters.isChapterRevealed(chapter)) return chapter;
      }
      return 1;
    }
  },
  modules: {}
});
