<template>
  <div>
    <div class id="nav">
      <div class="logo">
        <img src="../../public/butler.png" alt="Butler" />
      </div>
      <div class="links">
        <router-link to="/">Challenges</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  height: 4rem;
  background-color: var(--light-background);
  padding: auto;
  margin-bottom: 2rem;
  border-bottom: 1px solid #bdbcb6;
}

#nav a {
  color: var (--light-text);
}

#nav a.router-link-exact-active {
  color: var (--light-text);
}

.logo {
  width: auto;
  height: 100%;
}

.logo img {
  width: auto;
  height: 100%;
  align-items: flex-start;
}

.links {
  padding: 1rem;
  flex-grow: 1;
  justify-content: center;
  align-self: center;
}

.hamburger {
  display: flex;
  flex-direction: column;
  padding: auto;
  align-items: center;
  justify-content: center;
}

.line1 {
  width: 38px;
  border-bottom: 3px solid #545454;
  margin-bottom: 5px;
  align-self: center;
}

.line2 {
  width: 38px;
  border-bottom: 3px solid #545454;
  margin-bottom: 5px;
  align-self: center;
}

.line3 {
  width: 38px;
  border-bottom: 3px solid #545454;
  margin-bottom: 5px;
  align-self: center;
}
</style>
