<template>
  <nav>
    <router-link :to="{ name: 'chapter1' }">1</router-link>
    <router-link
      :to="{ name: 'chapter2' }"
      v-if="$store.getters.isChapterRevealed(2)"
      >2</router-link
    >
    <router-link
      :to="{ name: 'chapter3' }"
      v-if="$store.getters.isChapterRevealed(3)"
      >3</router-link
    >
    <router-link
      :to="{ name: 'chapter4' }"
      v-if="$store.getters.isChapterRevealed(4)"
      >4</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-exact-active {
  color: red;
}

a + a {
  margin-left: 2rem;
}
</style>
