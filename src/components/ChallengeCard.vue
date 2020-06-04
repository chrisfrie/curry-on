<template>
  <div>
    <div class="challenge-card-grid">
      <div class="challenge-card">
        <img :src="challenge.picturesIds[0]" />
        <body>
          {{ challenge.title }}
        </body>
        <div class="pommes-points">
          <p>{{ challenge.points }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["challenge"]
};
</script>

<style scoped>
.challenge-card-grid {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.challenge-card {
  width: 400px;
  height: 150px;
  display: flex;
  color: var(--light-text);
  background-color: var(--dark-background);
  border-radius: 20px;
  margin-left: 2rem;
  border: 4px solid #4e4e5f;
  box-sizing: border-box;
}

.challenge-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 1px solid var(--component-color);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: -2rem;
  align-self: center;
}

.challenge-card body {
  width: 60%;
  justify-content: center;
  align-self: center;
}

.pommes-points {
  min-width: 30px;
  height: 30px;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--dark-text);
  background-color: var(--primary-color);
  border-radius: 50%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
}
</style>
