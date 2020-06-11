<template>
  <div>
    <div class id="nav">
      <div class="main-navbar">
        <div class="logo">
          <router-link to="/"
            ><img src="../../src/assets/images/KONIEC0.png" alt="CurryOnLogo"
          /></router-link>
        </div>
        <div class="links">
          <router-link class="link" to="/chapter">Story</router-link>
          <router-link
            class="link"
            v-if="$store.state.user"
            :to="{ name: 'profile' }"
            >Profile</router-link
          >
          <span @click="logout" class="link">Logout</span>
        </div>
        <div class="control" @click="showNav">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>

      <transition name="expand">
        <div
          :class="{ 'navigation-menu-mobile': showSidebar }"
          v-if="showSidebar"
        >
          <ul @click="showNav">
            <li><router-link to="/chapter">Story</router-link></li>
            <li>
              <router-link
                v-if="$store.state.user"
                :to="{
                  name: 'profile'
                }"
                >Profile</router-link
              >
            </li>
            <li>
              <router-link v-if="!$store.state.user" to="">Login</router-link>
            </li>
            <li>
              <span @click="logout">Logout</span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
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
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
#nav a {
  color: var (--light-text);
}

#nav a:hover {
  color: black;
}

span.link:hover {
  cursor: pointer;
  color: black;
}

#nav a.router-link-active {
  color: black;
}

.main-navbar {
  position: relative;
  display: flex;
  height: 4.5rem;
  background-color: var(--light-background);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #bdbcb6;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
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

.link {
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
  display: inline-block;
  top: 65px;
  right: 0;
  width: 100vw;
  padding-top: 1rem;
  background-color: var(--light-background);
  z-index: 1;
  border-bottom: 1px solid #bdbcb6;
}

ul {
  list-style-type: none;
  padding-right: 2rem;
  text-align: right;
}

.expand-enter-active {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease;
}
.expand-leave-active {
  transition: opacity 0.5s ease-in-out, transform 1s ease;
}

.expand-enter {
  opacity: 0;
  transform: translateY(-137px);
}
.expand-leave-to {
  transform: translateY(-137px);
  opacity: 0;
}
</style>
