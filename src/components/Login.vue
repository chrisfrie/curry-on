<template>
  <div>
    <div id="login">
      <button id="close" @click="divHide()">X</button>
      <h1>Login</h1>
      <form @submit.prevent="submitLogin">
        <input
          v-model="users.email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <!-- <div v-if="$v.user.email.$error" class="error">
            Email is required, please check your input
          </div> -->
        <input
          v-model="users.password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <!-- <div v-if="$v.user.password.$error" class="error">
            Password is required, has to have at least 6 characters
          </div> -->

        <button type="submit">Login</button>
        <button type="submit" @click="showRegister">Register</button>
      </form>
    </div>
    <div id="register">
      <button id="close" @click="divHide(), reverseRegister()">X</button>
      <h1>Register</h1>
      <!-- <div class="avatar-preview">
      <img v-if="avatarURL" :src="avatarURL" />
      <p v-else>Preview</p>
    </div> -->
      <form @submit.prevent="submitRegister">
        <!-- <button id="close" onclick="divHide()">X</button>
       <label class="file-upload">
        Upload Avatar
        <input @change="fileSelected" type="file"
      /></label> -->
        <input
          v-model="users.name"
          type="text"
          name="name"
          placeholder="Username"
        />
        <input
          v-model="users.email"
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          v-model="users.password"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "",
        email: "",
        password: ""
      },
      avatar: null
    };
  },
  computed: {
    avatarURL() {
      return this.avatar ? window.URL.createObjectURL(this.avatar) : null;
    }
  },
  methods: {
    divHide() {
      document.getElementById("loginPopUp").style.display = "none";
    },
    fileSelected(event) {
      // Check if a file was selected
      if (event.target.files.length == 0) {
        return;
      }

      // Set avatar to selected file
      this.avatar = event.target.files[0];
    },
    async submitLogin() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      try {
        // Dispatch the login action
        await this.$store.dispatch("login", this.users);
        this.$router.push("/");
      } catch {
        this.$store.dispatch("pushNotification", {
          type: "error",
          message: "Unable to login, please check your inputs and try again."
        });
      }
    },
    async submitRegister() {
      try {
        await this.$store.dispatch("register", this.user);
        this.$router.push("/");

        if (this.avatar) {
          await this.$store.dispatch("createProfile", this.avatar);
        }
      } catch {
        this.$store.dispatch("pushNotification", {
          type: "error",
          message: "Sorry, couldn't register, please check your inputs"
        });
      }
    },
    showRegister() {
      document.getElementById("register").style.display = "block";
      document.getElementById("login").style.display = "none";
    },
    reverseRegister() {
      document.getElementById("register").style.display = "none";
      document.getElementById("login").style.display = "block";
    }
  }
};
</script>

<style scoped>
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
</style>
