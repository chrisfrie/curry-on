import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Vuelidate);

store.dispatch("loadUserFromLocalStorage");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
