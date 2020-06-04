<template>
  <router-link :to="{ name: 'show-challenge', params: { id: challenge.id } }">
    <div>
      <div class="challenge-card-grid">
        <div class="challenge-card">
          <img :src="challenge.picturesIds[0]" />
          <h2>{{ challenge.title }}</h2>
          <div class="pommes-points">
            <p>{{ challenge.points }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
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
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 24% 19% 19% 27% 10%;
  color: var(--light-text);
  background-color: var(--dark-background);
  border-radius: 20px;
  margin-left: 3rem;
}

.challenge-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.challenge-card h2 {
  grid-column: 2 / 5;
  grid-row-start: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pommes-points {
  width: 30px;
  height: 30px;
  box-shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--dark-text);
  background-color: #f0c552;
  border-radius: 50%;
  grid-column-start: 5;
  grid-row-start: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
