import Vue from "vue";
import VueRouter from "vue-router";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import Intro from "../views/Intro.vue";
import Picture from "@/views/Picture.vue";
import Profile from "@/views/Profile.vue";
import Chapter1 from "@/components/Chapter1.vue";
import Chapter2 from "@/components/Chapter2.vue";
import Chapter3 from "@/components/Chapter3.vue";
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
    path: "/challenges",
    redirect: () => {
      switch (store.getters.getActiveChapter) {
        case 3:
          return "/chapter3";
        case 2:
          return "/chapter2";
        default:
          return "/chapter1";
      }
    }
  },
  {
    path: "/chapter1",
    name: "chapter1",
    component: Chapter1
  },
  {
    path: "/chapter2",
    name: "chapter2",
    component: Chapter2
  },
  {
    path: "/chapter3",
    name: "chapter3",
    component: Chapter3
  },
  {
    path: "/challenges/:id",
    name: "show-challenge",
    component: ShowChallenge,
    async beforeEnter(to, from, next) {
      console.log(to.params.id);
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
      console.log(to.params.id);
      const res = await axios.get(`/pictures/${to.params.id}`);
      to.params.picture = res.data;
      next();
    },
    props: true
  },
  {
    path: "/profiles/:id",
    name: "profile",
    component: Profile,
    async beforeEnter(to, from, next) {
      const res = await axios.get(`/users/${to.params.id}`);
      to.params.user = res.data;
      next();
    },
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.name);
  if (to.name == "intro") {
    next();
  } else if (!store.state.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
