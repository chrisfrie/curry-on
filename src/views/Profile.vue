<template>
  <div>
    <h2>Profile</h2>
    <section class="profile-body">
      <div class="avatar">Avatar</div>
      <h2>{{ profile.user.username }}</h2>
      <h3>{{ profile.pommesPoints }}</h3>
    </section>
  </div>
</template>

<script>
export default {
  props: ["profile"]
};
</script>

<style scoped></style>
