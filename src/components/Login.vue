<template>
  <div>
    <div id="login">
      <button id="close" @click="divHide()">X</button>
      <h1>Login</h1>
      <form @submit.prevent="submitLogin">
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
      <!-- <div class="avatar-preview">
        <img v-if="avatarURL" :src="avatarURL" />
        <p v-else>Preview</p>
      </div> -->
      <form @submit.prevent="submitRegister">
        <!-- <label class="file-upload">
          Upload Avatar
          <input @change="fileSelected" type="file"
        /></label> -->
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
import { required, email, minLength } from "vuelidate/lib/validators";

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
  computed: {
    // avatarURL() {
    //   return this.avatar ? window.URL.createObjectURL(this.avatar) : null;
    // }
  },
  methods: {
    divHide() {
      this.$store.commit("HIDE_LOGIN");
    },
    // fileSelected(event) {
    //   // Check if a file was selected
    //   if (event.target.files.length == 0) {
    //     return;
    //   }

    //   // Set avatar to selected file
    //   this.avatar = event.target.files[0];
    // },
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
      // this.$router.push("/challenges");
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
        required,
        email
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

.login {
  height: 150px;
  display: flex;
  border: 1px solid #9c9b96;
  margin: 0 1.5rem;
  box-sizing: border-box;
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
  max-width: 15px;
  padding: 0 0;
  margin: 0.5rem;
  align-items: center;
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
