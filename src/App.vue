<template>
  <div id="app">
    <Navbar v-if="$store.state.user" />
    <div class="notification-container">
      <transition-group tag="span" name="list">
        <div
          v-for="notification in $store.state.notifications"
          :key="notification.id"
        >
          <p :class="notification.type">
            {{ notification.message }}
          </p>
        </div>
      </transition-group>
    </div>
    <router-view />
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
  --light-text: #f4f3ed;
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

.list-enter {
  opacity: 0;
  transform: scaleY(0);
}
.list-enter-active {
  transition: all 1s;
}
.list-enter-to {
  opacity: 1;
  transform: none;
}
.list-leave {
  opacity: 1;
}
.list-leave-active {
  transition: all 1s;
}
.list-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.notification-container {
  position: fixed;
  right: 1em;
  bottom: 1em;
  width: 300px;
}
.notification-container p {
  background-color: rgb(223, 253, 223);
  color: green;
  border-left: 3px solid green;
  padding: 1em 0.5em;
}
.notification-container p.error {
  color: red;
  background-color: rgb(255, 219, 219);
  border-left: 3px solid red;
}
</style>
