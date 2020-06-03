<template>
  <router-link :to="{ name: 'show-challenge', params: { id: challenge.id } }">
    <div>
      <h2>{{ challenge.title }}</h2>
      <p>{{ challenge.points }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["challenge"]
};
</script>

<style scoped></style>
