import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import Intro from "../views/Intro.vue";
import Picture from "@/views/Picture.vue";
import store from "@/store";

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
      const res = await axios.get(
        `http://localhost:1337/challenges/${to.params.id}`
      );
      to.params.challenge = res.data;
      next();
    },
    props: true
  },
  {
    path: "/pictures/:id",
    name: "picture",
    component: Picture
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
    return;
  } else {
    if (store.state.user) {
      next();
    } else next("/");
  }
});

export default router;
