<template>
  <div>
    <div class id="nav">
      <div class="logo">
        <img src="../../public/butler.png" alt="Butler" />
      </div>
      <!-- <div class="navigation-menu-desktop"> -->
      <div class="links">
        <router-link to="/">Challenges</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <!-- </div> -->
      <div class="hamburger" id="expand-mobile-nav">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <!-- <div class="navigation-menu-mobile">
        <button class="hamburger" @click="expandMobileNavigation"></button>
        <ul>
          <li><router-link to="/">Challenges</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    expandMobileNavigation() {
      var nav = document.querySelector("nav");
      nav.classList.add("mobile-navigation-expanded");
    },
    collapseMobileNavigation() {
      var nav = document.querySelector("nav");
      nav.classList.remove("mobile-navigation-expanded");
    }
  }
};

//     var nav = document.querySelector("nav");

// var expandMobileNavigation = function() {
//   nav.classList.add("mobile-navigation-expanded");
// };

// var collapseMobileNavigation = function() {
//   nav.classList.remove("mobile-navigation-expanded");
// };

// var expandButton = document.querySelector("#expand-mobile-navigation");

// expandButton.addEventListener("click", expandMobileNavigation);

// var collapseButton = document.querySelector("#collapse-mobile-navigation");

// collapseButton.addEventListener("click", collapseMobileNavigation);};
</script>

<style scoped>
#nav {
  display: flex;
  height: 4rem;
  background-color: var(--light-background);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #bdbcb6;
  justify-content: space-between;
  align-items: center;
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
}

.hamburger {
  display: flex;
  flex-direction: column;
  padding: auto;
  align-items: center;
  justify-content: center;
}

.line {
  width: 38px;
  border-bottom: 3px solid #545454;
  margin-bottom: 5px;
  align-self: center;
}

@media (max-width: 599px) {
  .links {
    display: none;
  }
}

@media (min-width: 600px) {
  .hamburger {
    display: none;
  }
}
</style>
