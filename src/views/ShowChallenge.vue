<template>
  <div>
    <h1>
      {{ challenge.title }}
    </h1>
    <p>{{ challenge.details }}</p>
    <p>{{ challenge.startingDate }}</p>
    <p>{{ challenge.endDate }}</p>
  </div>
</template>

<script>
export default {
  props: ["challenge"]
};
</script>

<style scoped></style>
