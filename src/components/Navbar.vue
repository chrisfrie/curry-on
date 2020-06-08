<template>
  <div>
    <div class id="nav">
      <div class="logo">
        <img src="../../public/butler.png" alt="Butler" />
      </div>
      <!-- <div class="navigation-menu-desktop"> -->
      <div class="links">
        <router-link to="/">Intro</router-link> |
        <router-link to="/challenges">Challenges</router-link> |
        <router-link to="/profiles">Profile</router-link>
      </div>

      <div class="control" @click="showNav">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>

      <transition name="expand">
        <div
          :class="{ 'navigation-menu-mobile': showSidebar }"
          v-if="showSidebar"
        >
          <img src="../../public/butler.png" alt="Butler" />
          <ul>
            <li><router-link to="/">Intro</router-link></li>
            <li><router-link to="/challenges">Challenges</router-link></li>
            <li><router-link to="/profiles">Profile</router-link></li>
          </ul>
          <div class="control" @click="showNav">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </transition>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showSidebar: false
    };
  },
  methods: {
    showNav() {
      this.showSidebar = !this.showSidebar;
    }
    // enter() {
    //   this.style.height = "auto";
    //   const height = getComputedStyle().height;
    //   this.style.height = 0;

    //   getComputedStyle(el);

    //   setTimeout(() => {
    //     el.style.height = "auto";
    //   });
    // },
    // afterEnter(el) {
    //   el.style.height = "auto";
    // },
    // leave(el) {
    //   el.style.height = getComputedStyle(el).height;
    //   getComputedStyle(el);
    //   setTimeout(() => {
    //     el.style.height = 0;
    //   });
    // }
  }
};
</script>

<style scoped>
#nav {
  display: flex;
  height: 4.5rem;
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

.control {
  display: flex;
  flex-direction: column;
  padding: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  .control {
    display: none;
  }
}

.navigation-menu-mobile {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  top: 0;
  left: 0;
  width: 100vw;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  background-color: #f4f3ed;
  z-index: 999;
  transition: all 1s ease-in-out;
  border-bottom: 1px solid #bdbcb6;
}

ul {
  list-style-type: none;
  padding: auto;
  align-items: right;
}

.expand-enter-active .expand-leave-active {
  transition: all 1s;
}

.expand-enter-to {
  transform: none;
}

.expand-enter,
.expand-leave-to {
  transform: translateY(-200px);
}
</style>
