<template>
  <div class="challenge-container">
    <router-link
      :disabled="locked"
      :event="!locked ? 'click' : ''"
      :to="{ name: 'show-challenge', params: { id: challenge.id } }"
    >
      <div>
        <div class="challenge-card-grid">
          <div class="challenge-card" :class="{ locked }">
            <img :src="imageUrl" />
            <p>{{ challenge.title }}</p>
            <div class="pommes-points">
              <p>{{ challenge.pommesPoints }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
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
  },
  computed: {
    imageUrl() {
      return process.env.VUE_APP_UPLOAD_URL + this.challenge.titlePicture.url;
    }
  }
};
</script>

<style scoped>
.challenge-container {
  max-width: 400px;
  margin: 0 auto;
}

.challenge-card-grid {
  margin-top: 1rem;
}
.challenge-card {
  height: 150px;
  display: flex;
  border: 1.2px solid #9c9b96;
  margin: 0.5rem;
  margin-top: 0;
  margin-left: 2rem;
  box-sizing: border-box;
  box-shadow: -15px 8px 15px rgba(0, 0, 0, 0.1);
}
.challenge-container:last-child {
  margin-bottom: 4rem;
}

.challenge-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  box-sizing: border-box;
  margin-left: -1rem;
  align-self: center;
  border: 1px solid #9c9b96;
}

.challenge-card p {
  font-size: 1.4rem;
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

.pommes-points p {
  font-size: 1rem;
  color: var(--dark-text);
}
.challenge-card.locked {
  opacity: 0.1;
  cursor: default;
}
</style>
