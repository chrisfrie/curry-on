<template>
  <div>
    <h1>About</h1>
    <div class="about-card">
      <div class="about-card-intro">
      <!--<img src="../../public/butler.jpg" alt="Butler" /> --->
       <img src="../../public/butler.png" alt="Butler" />
      <p>
        Manfred, a valuable butler from the 50s, worked all his life serving
        oysters in the hippiest restaurant in Berlin.
      </p>
      </div>
      <p>
        However, he always dreamed of currywurst. He loved currywurst and
        preferred to prepare and eat it in any version. Nowadays his ghost
        always challenge currywurst lovers to be served by him, but is not only
        eat the wurst and enjoy the curry... is something else. Help Manfred and
        make his dream come true.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-card {
  background-color: #545454;
  color: #EBF1F0;
  border-radius: 20px;
  box-sizing:border-box;
  padding: 0 20px 20px 10px;
  text-align: center;
  
}

.about-card-intro {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
}



</style>
