<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@font-face {
  font-family: "Marbre";
  src: url("./assets/fonts/Marbre.otf");
}

body {
  background-color: var(--light-background);
}

#app {
  font-family: "Bellefair", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-text);
}

:root {
  --light-text: #ebf1f0;
  --dark-text: #545454;
  --light-background: #f4f3ed;
  --dark-background: #4e4e5f;
  --primary-color: #f0c552;
  --component-color: #96979d;
}

h1,
h2,
h3,
h4 {
  font-family: "Marbre", sans-serif;
  font-weight: 700;
}

a {
  color: var(--dark-text);
  text-decoration: none;
}

button {
  font-family: "Bellefair", serif;
  text-transform: uppercase;
  background-color: #c9c8c3;
  color: var(--dark-text);
  border: 2px solid #9c9b96;
  outline: none;
}
</style>
