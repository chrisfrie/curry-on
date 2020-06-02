<template>
  <div>
    <h2>{{ challenge.title }}</h2>
    <p>{{ challenge.points }}</p>
  </div>
</template>

<script>
export default {
  props: ["challenge"]
};
</script>

<style scoped></style>
