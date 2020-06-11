<template>
  <div id="app">
    <Navbar />
    <footer>
      <div class="footer-inner-container">
        <div class="footer-links">
          <ul>
            <li>
              <a href="https://codecampleipzig.de/impressum.html">Imprint</a>
            </li>
            <li>
              <a href="https://codecampleipzig.de/privacy.html">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="footer-copyright">
          <p>Designed and Built by team "Curry-On" Code Camp Leipzig Class 2</p>
          <p>Copyright © 2020 All Rights Reserved</p>
        </div>
      </div>
    </footer>
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

footer {
  display: grid;
  width: 100%;
  font-size: 1rem;
}

.footer-links li {
  display: inline;
}

.footer-links li:not(:first-child) {
  margin-left: 1em;
}

a {
  text-decoration: none;
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

h2 {
  font-size: 1.4rem;
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
