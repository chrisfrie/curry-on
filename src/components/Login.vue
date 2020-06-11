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
      <button type="submit" @click="showRegister">Register</button>
    </div>
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
      document.getElementById("loginPopUp").style.display = "none";
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

#register {
  display: none;
}

button,
input {
  border: none;
  outline: none;
  margin: 0 auto 1rem auto;
  padding: 0.5rem;
  width: 75%;
  max-width: 300px;
  display: block;
}

#close {
  position: fixed;
  right: 0;
  top: 0;
  border: none;
  outline: none;
  width: 5%;
  height: 5%;
  max-width: 40px;
  text-align: center;
  padding: 0;
}

.file-upload input[type="file"] {
  display: none;
}
.file-upload {
  border: 1px solid lightgrey;
  color: grey;
  width: 25%;

  cursor: pointer;
  padding: 0.5rem 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  display: inline-block;
  text-transform: uppercase;
  background-color: #c9c8c3;
  font-size: 13.33px;
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
