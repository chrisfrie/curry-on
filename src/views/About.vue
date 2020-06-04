<template>
  <div>
    <h1>About</h1>
    <div class="about-card">
      <div class="about-card-intro">
        <!--<img src="../../public/butler.jpg" alt="Butler" /> --->
        <img src="../../public/butler.png" alt="Butler" />
        <p>
          Manfred, a valuable butler from the 50s, worked all his life serving
          oysters in the hippest restaurant in Berlin.
        </p>
      </div>
      <p>
        However, he always dreamed of currywurst. He loved currywurst and
        prepare it and ate it in any version. <br />
        <br />
        Nowadays his ghost always challenges currywurst lovers to be served by
        him, but is not only eat the wurst and enjoy the curry... is something
        else. <br />
        <br />
        Help Manfred solving currywurst challenges and make his dream come true.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-card {
  color: var(--dark-text);
  box-sizing: border-box;
  padding: 10px 20px;
  text-align: center;
  max-width: 35rem;
  margin: 0 auto;
}

.about-card-intro {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.about-card-intro p {
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  justify-content: space-around;
}
</style>
