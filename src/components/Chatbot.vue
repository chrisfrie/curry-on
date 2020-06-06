<template>
  <div class="chatbot-wrapper">
    <div class="chatbot">
      <section name="chatbox">
        <header class="chatbox-header">
          <h2>Manfred says hi</h2>
          <div class="toggle-box">
            <button
              @click="toggleChatbox"
              v-if="chatClosed"
              class="open-chatbot"
            >
              ^
            </button>
            <button @click="toggleChatbox" v-else class="close-chatbot">
              X
            </button>
          </div>
        </header>
        <div :style="[chatClosed ? { display: 'none' } : {}]">
          <div class="chatbox-area">
            <ul>
              <li
                v-for="chat in chats"
                :key="chat.message"
                class="chat-bubble"
                :class="[
                  chat.sender === 'User' ? 'user-class' : 'manfred-class'
                ]"
              >
                {{ chat.message }}
              </li>
            </ul>
          </div>
          <footer class="chatbox-footer">
            <input type="text" placeholder="Ask Manfred" />
            <button>send</button>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["chatbot"],

  data() {
    return {
      chats: [
        { sender: "User", message: "Hi Manfred" },
        { sender: "Manfred", message: "Hallo!" },
        {
          sender: "User",
          message:
            "How many Pommes Points do I have? And maybe just tell me another cool story about your Curryurst life"
        },
        { sender: "Manfred", message: "That's sausage to me" }
      ],
      chatClosed: false
    };
  },

  methods: {
    toggleChatbox() {
      this.chatClosed = !this.chatClosed;
    }
  }
};
</script>

<style scoped>
.chatbot-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  background-color: var(--light-background);
}

.chatbot {
  border: 1px solid #9c9b96;
}

.chatbox-header {
  background-color: rgba(156, 155, 150, 0.8);
  position: relative;
}

.chatbox-header h2 {
  margin: 0;
}

.toggle-box {
  position: absolute;
  top: 0;
  right: 0;
  height: 1.4rem;
  width: 2rem;
}

.chatbox-footer {
  display: flex;
  justify-content: space-between;
}

.chatbox-footer input {
  flex: 1;
}

.chatbox-footer button {
  border: none;
}

.chatbox-area ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.chat-bubble {
  max-width: 60%;
  border-radius: 5px;
  padding: 0.2rem 0.4rem;
  margin: 10px;
}

.user-class {
  text-align: justify;
  align-self: flex-end;
  background-color: rgba(156, 155, 150, 0.3);
}

.manfred-class {
  text-align: left;
  background-color: rgba(240, 197, 82, 0.5);
}
</style>
