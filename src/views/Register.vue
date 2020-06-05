<template>
  <div>
    <h1>Register</h1>
    <!-- <div class="avatar-preview">
      <img v-if="avatarURL" :src="avatarURL" />
      <p v-else>Preview</p>
    </div> -->
    <form @submit.prevent="submit">
      <!-- <label class="file-upload">
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
</template>

<script>
export default {
  data() {
    return {
      users: {
        username: "",
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
    fileSelected(event) {
      // Check if a file was selected
      if (event.target.files.length == 0) {
        return;
      }

      // Set avatar to selected file
      this.avatar = event.target.files[0];
    },
    async submit() {
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
    }
  }
};
</script>

<style scoped></style>
