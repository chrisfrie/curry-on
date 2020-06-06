<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Challenges</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");

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

#nav {
  background-color: var(--light-background);
  padding: 10px;
  margin-bottom: 2rem;
  border-bottom: 1px solid #bdbcb6;
}

#nav a {
  color: var (--light-text);
}

#nav a.router-link-exact-active {
  color: var (--light-text);
}
</style>
