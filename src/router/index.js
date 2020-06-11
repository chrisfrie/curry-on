import Vue from "vue";
import VueRouter from "vue-router";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import Intro from "../views/Intro.vue";
import Picture from "@/views/Picture.vue";
import Profile from "@/views/Profile.vue";
import Chapter1 from "@/views/Chapter1.vue";
import Chapter2 from "@/views/Chapter2.vue";
import Chapter3 from "@/views/Chapter3.vue";
import Chapter4 from "@/views/Chapter4.vue";
import store from "@/store";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro
  },
  {
    path: "/chapter",
    name: "chapter",
    redirect: () => {
      switch (store.getters.getActiveChapter) {
        case 4:
          return "/chapter/4";
        case 3:
          return "/chapter/3";
        case 2:
          return "/chapter/2";
        default:
          return "/chapter/1";
      }
    }
  },
  {
    path: "/chapter/1",
    name: "chapter1",
    component: Chapter1
  },
  {
    path: "/chapter/2",
    name: "chapter2",
    component: Chapter2
  },
  {
    path: "/chapter/3",
    name: "chapter3",
    component: Chapter3
  },
  {
    path: "/chapter/4",
    name: "chapter4",
    component: Chapter4
  },
  {
    path: "/challenges/:id",
    name: "show-challenge",
    component: ShowChallenge,
    async beforeEnter(to, from, next) {
      const res = await axios.get(`/challenges/${to.params.id}`);
      to.params.challenge = res.data;
      next();
    },
    props: true
  },
  {
    path: "/pictures/:id",
    name: "picture",
    component: Picture,
    async beforeEnter(to, from, next) {
      const res = await axios.get(`/pictures/${to.params.id}`);
      to.params.picture = res.data;
      next();
    },
    props: true
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name == "intro") {
    next();
  } else if (!store.state.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
