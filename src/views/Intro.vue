<template>
  <div>
    <h1>CurryOn!</h1>
    <h2>A story game for Wurst-Enthusiast</h2>
    <div class="intro-card">
      <div class="intro-card-intro">
        <img src="../../public/butler.png" alt="Butler" />
        <p class="text">
          Experience every bite of Manfred’s currywurst love story by completing
          a series of photo-challenges and evoke the drama!!!
        </p>
      </div>
      <ul class="list">
        <li>6 Challenges to take</li>
        <li>3 Chapters to reveal</li>
      </ul>

      <p>
        <br />
        Shall we? <br />
      </p>
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
      if (this.$store.state.user) {
        this.$router.push({ name: "chapter" });
      } else {
        this.$store.commit("SHOW_LOGIN");
      }
    }
  }
};
</script>

<style scoped>
button {
  cursor: pointer;
}

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

.intro-card {
  max-width: 500px;
  margin: 0 auto;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.intro-card-intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 1rem;
}

.intro-card-intro p {
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-around;
  max-width: 30ch;
}

.intro-card-intro img {
  padding-right: 0.5rem;
}

.list {
  list-style-type: none;
}

li {
  letter-spacing: 1.6px;
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

.text {
  text-align: justify;
}
</style>
