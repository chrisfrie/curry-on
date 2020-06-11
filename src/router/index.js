import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import Intro from "../views/Intro.vue";
import Picture from "@/views/Picture.vue";
import Profile from "@/views/Profile.vue";
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
    name: "challenges",
    component: Dashboard
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
