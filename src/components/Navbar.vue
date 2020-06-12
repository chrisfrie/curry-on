<template>
  <div>
    <div class id="nav">
      <div class="main-navbar">
        <div class="logo">
          <router-link to="/"
            ><img src="../../src/assets/images/KONIEC0.png" alt="CurryOnLogo"
          /></router-link>
        </div>
        <div class="sk-circle" v-if="$store.state.loading">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
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

.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  color: #545454;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
