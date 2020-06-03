<template>
  <div id="app">
    <div id="nav"><router-link to="/">Dashboard</router-link></div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-text);
}

:root {
  --light-text: #ebf1f0;
  --dark-text: #545454;
  --light-background: #ebf1f0;
  --dark-background: #4e4e5f;
  --primary-color: #f0c552;
  --component-color: #96979d;
}

#nav {
  background-color: #ebf1f0;
  padding: 30px;
  border: 2px solid;
}

#nav a {
  font-weight: bold;
  color: var (--light-text);
}

#nav a.router-link-exact-active {
  color: var (--light-text);
}
</style>
