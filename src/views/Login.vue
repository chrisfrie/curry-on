<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submit">
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
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
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
    }
  }
};
</script>

<style scoped></style>
