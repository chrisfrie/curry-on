import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ShowChallenge from "@/views/ShowChallenge.vue";
import axios from "axios";
import About from "../views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/about",
    name: "about",
    component: About
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
    async beforeEnter(to, form, next) {
      console.log(to.params.id);
      const res = await axios.get(
        `http://localhost:3000/challenges/${to.params.id}`
      );
      to.params.challenge = res.data;
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
