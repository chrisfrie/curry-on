<template>
  <router-link
    :disabled="locked"
    :event="!locked ? 'click' : ''"
    :to="{ name: 'show-challenge', params: { id: challenge.id } }"
  >
    <div>
      <div class="challenge-card-grid">
        <div class="challenge-card" :class="{ locked }">
          <img :src="challenge.picturesIds[0]" />
          <p>{{ challenge.title }}</p>
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
  props: {
    challenge: {
      type: Object,
      required: true
    },
    locked: {
      type: Boolean,
      default: false
    }
  }
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
  /* color: var(--light-text);
  background-color: var(--dark-background); */
  margin-left: 2rem;
  border: 1px solid #9c9b96;
  box-sizing: border-box;
}
.challenge-card:last-child {
  margin-bottom: 4rem;
}

.challenge-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  box-sizing: border-box;
  margin-left: -2rem;
  align-self: center;
}

.challenge-card p {
  padding: 1rem;
  flex-grow: 1;
  justify-content: center;
  align-self: center;
}

.challenge-card a {
  color: var(--light-text);
}

.pommes-points {
  width: 30px;
  height: 30px;
  color: white;
  background-color: var(--primary-color);
  border-radius: 50%;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  font-weight: 700;
  font-size: 12px;
}
.challenge-card.locked {
  opacity: 0.1;
  cursor: default;
}
</style>
