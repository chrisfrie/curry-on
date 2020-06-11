<template>
  <div class="container">
    <div id="login">
      <div id="close" @click="divHide()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </div>
      <h1>Login</h1>
      <form @submit.prevent="submitLogin">
        <input
          v-model="user.email"
          type="text"
          name="email"
          placeholder="Email or Name"
          @blur="$v.user.email.$touch()"
        />
        <div v-if="$v.user.email.$error" class="error">
          Email is required, please check your input
        </div>
        <input
          v-model="user.password"
          type="password"
          name="password"
          placeholder="Password"
          @blur="$v.user.password.$touch()"
        />
        <div v-if="$v.user.password.$error" class="error">
          Password is required, has to have at least 6 characters
        </div>

        <button type="submit">Login</button>
      </form>
      <p>First Time Here?</p>
      <button type="submit" @click="showRegister">Register</button>
    </div>
    <!-- Register Below -->
    <div id="register">
      <button id="close" @click="divHide(), reverseRegister()">X</button>
      <h1>Register</h1>

      <form @submit.prevent="submitRegister">
        <input
          v-model="user.username"
          type="text"
          name="name"
          placeholder="Username"
          @blur="$v.user.username.$touch()"
        />
        <div v-if="$v.user.username.$error" class="error">
          Username is required, please check your input
        </div>
        <input
          v-model="user.email"
          type="email"
          name="email"
          placeholder="Email"
          @blur="$v.user.email.$touch()"
        />
        <div v-if="$v.user.email.$error" class="error">
          Email is required, please check your input
        </div>
        <input
          v-model="user.password"
          type="password"
          name="password"
          placeholder="Password"
          @blur="$v.user.password.$touch()"
        />
        <div v-if="$v.user.password.$error" class="error">
          Password is required, please check your input
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: ""
      }
      // avatar: null
    };
  },
  computed: {},
  methods: {
    divHide() {
      this.$store.commit("HIDE_LOGIN");
    },

    async submitLogin() {
      this.$store.dispatch("login", {
        email: this.user.email,
        password: this.user.password
      });
    },
    submitRegister() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch("register", this.user);
    },
    showRegister() {
      document.getElementById("register").style.display = "block";
      document.getElementById("login").style.display = "none";
    },
    reverseRegister() {
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "block";
    }
  },
  validations: {
    user: {
      email: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      username: {
        required
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: lightcoral;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.5em;
  margin-top: -0.8em;
}

.container {
  width: 300px;
  opacity: 0.95;
  background-color: #313131;
  overflow: auto;
  border-radius: 1%;
  position: relative;
  color: var(--light-text);
  padding: 1rem 0.5rem 2rem 0.5rem;
}

#register {
  display: none;
}

button {
  border: none;
  outline: none;
  margin: 0 auto 0.5rem auto;
  padding: 0.5rem;
  width: 80%;
  display: block;
}

button:hover {
  color: black;
}

#close {
  position: absolute;
  top: 0;
  right: 0;
  height: 5%;
  width: 5%;
  padding: 0;
  margin: 0.5rem;
  fill: var(--light-text);
}

#close:hover {
  fill: #bebebe;
}
input {
  border: none;
  outline: none;
  margin: 0 auto 0.5rem auto;
  padding: 0.5rem;
  width: 75%;
  display: block;
}

.avatar-preview {
  width: 200px;
  height: 200px;
  border: 1px solid lightgrey;
  color: grey;
  margin: 0.8rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-preview img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
</style>
