import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import Intro from "../views/Intro.vue";
import Picture from "@/views/Picture.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

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
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/challenges/:id",
    name: "show-challenge",
    component: ShowChallenge,
    async beforeEnter(to, from, next) {
      console.log(to.params.id);
      const res = await axios.get(
        `http://localhost:3000/challenges/${to.params.id}`
      );
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
      const res = await axios.get(
        `http://localhost:3000/pictures/${to.params.id}`
      );
      to.params.picture = res.data;
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

export default router;
