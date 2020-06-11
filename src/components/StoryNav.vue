<template>
  <nav>
    <h2>Chapter</h2>
    <router-link :to="{ name: 'chapter1' }">I</router-link>
    <router-link
      :to="{ name: 'chapter2' }"
      :disabled="!$store.getters.isChapterRevealed(2)"
      :event="$store.getters.isChapterRevealed(2) ? 'click' : ''"
      >II</router-link
    >
    <router-link
      :to="{ name: 'chapter3' }"
      :disabled="!$store.getters.isChapterRevealed(3)"
      :event="$store.getters.isChapterRevealed(3) ? 'click' : ''"
      >III</router-link
    >
    <router-link
      :to="{ name: 'chapter4' }"
      :disabled="!$store.getters.isChapterRevealed(4)"
      :event="$store.getters.isChapterRevealed(4) ? 'click' : ''"
      >IV</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav,
a,
h2 {
  font-family: "Marbre", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0;
}
h2 {
  display: inline-block;
  margin-right: 2rem;
}

a.router-link-exact-active {
  color: black;
  border-bottom: 1px solid black;
}

a + a {
  margin-left: 2rem;
}

a[disabled="disabled"] {
  opacity: 0.2;
}
</style>
