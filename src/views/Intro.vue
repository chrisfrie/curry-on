<template>
  <div>
    <h1>Welcome to CurryOn!</h1>
    <div class="intro-card">
      <div class="intro-card-intro">
        <img src="../../public/butler.png" alt="Butler" />

        <p>
          Experience every bite of Manfred’s and Herta’s currywurst love story
          <br />
          by completing a series of photo-challenges and evoke the drama!!!
        </p>
      </div>
      <ul class="list">
        <li>6 challenges to take</li>
        <li>3 chapters to reveal</li>
      </ul>

      <p>Are you ready?</p>
    </div>

    <button id="popup" @click="divShow()" type="button" class="start">
      Start
    </button>
    <div v-if="$store.state.showLogin" id="loginPopUp">
      <Login />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  components: {
    Login
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.showLogin == true) {
      this.$store.commit("HIDE_LOGIN");
    }
    next();
  },
  methods: {
    divShow() {
      this.$store.commit("SHOW_LOGIN");
    }
  }
};
</script>

<style scoped>
#loginPopUp {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-card {
  color: var(--dark-text);
  box-sizing: border-box;
  padding: 10px 20px;
  text-align: center;
  max-width: 35rem;
  margin: 0 auto;
}

.intro-card-intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.intro-card-intro p {
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-around;
}
.instruction-card p {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.test {
  display: flex;
  max-width: 300px;
  max-height: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.explore {
  padding: 16px 20px;
  cursor: pointer;
  background-color: black;
  opacity: 0.8;
  position: relative;
  width: 280px;
}
.list {
  list-style-type: none;
}
button {
  border: none;
  outline: none;
  margin: 0 auto 1rem auto;
  padding: 0.5rem;
  width: 75%;
  max-width: 300px;
  display: block;
}
</style>
