<template>
  <div>
    <h1>
      {{ challenge.title }}
    </h1>
    <p>{{ challenge.details }}</p>
    <p>{{ challenge.startingDate }}</p>
    <p>{{ challenge.endDate }}</p>

    <button class="open-button" @click="openForm()">Accept Challenge!</button>

    <div class="form-popup" id="challengeForm">
      <form class="form-container">
        <label for="chooseAPicture">Choose a Picture</label>
        <input type="file" required />
        <label for="Caption">Describe your Picture</label>
        <input type="text" />

        <button type="submit" class="btn">Upload</button>
        <button type="button" class="btn cancel" @click="closeForm()">
          Close
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["challenge"],
  methods: {
    openForm() {
      document.getElementById("challengeForm").style.display = "flex";
    },
    closeForm() {
      document.getElementById("challengeForm").style.display = "none";
    }
  }
};
</script>

<style scoped>
.open-button {
  padding: 16px 20px;
  cursor: pointer;
  opacity: 0.8;
  position: relative;
  width: 280px;
}

.form-popup {
  display: none;
  position: static;
  margin: 2rem auto;
  right: 15px;
  z-index: 9;
}

.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: var(--light-background);
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.form-container input[type="file"],
.form-container input[type="text"] {
  width: 80%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background-color: #e7e6e1;
}

.form-container input[type="file"]:focus,
.form-container input[type="text"]:focus {
  background-color: #ddd;
  outline: none;
}

.form-container .btn {
  padding: 16px 20px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
}

.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>
