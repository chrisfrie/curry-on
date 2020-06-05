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
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="Email" />

      <input type="password" name="password" placeholder="Password" />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
