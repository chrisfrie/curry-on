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
          <div class="chatbox-area" ref="chatboxArea">
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
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask Manfred"
              @keyup.enter="sendMessage"
            />
            <button @click="sendMessage">
              send
            </button>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import chatbotData from "@/chatbot-data";

export default {
  data() {
    return {
      chats: [],
      currentState: "initial",
      noToTrivia: false,
      noToStory: false,
      chatClosed: false,
      userInput: "",
      index: 0
    };
  },

  methods: {
    toggleChatbox() {
      this.chatClosed = !this.chatClosed;
    },

    sendMessage() {
      this.pushToChats("User", this.userInput);

      const generalMatch = this.findTrigger(chatbotData.general);
      if (generalMatch) {
        setTimeout(
          () =>
            this.pushToChats(
              "Manfred",
              chatbotData.general[this.index].response[0]
            ),
          3000
        );
        this.index = 0;
        this.userInput = "";
      } else {
        const state = chatbotData[this.currentState];

        // this.pushToChats("User", this.userInput);
        const match = this.findTrigger(state);

        if (match) {
          const responseText = Array.isArray(
            state[this.index].responses[0].text
          )
            ? state[this.index].responses[0].text[0]
            : state[this.index].responses[0].text;
          setTimeout(() => this.pushToChats("Manfred", responseText), 3000);
        }
        this.currentState = state[this.index].responses[0].nextState;

        this.index = 0;
        this.userInput = "";
      }
    },

    findTrigger(state) {
      return state.find(({ trigger }, index) => {
        const foundAWord = this.userInput
          .toLowerCase()
          .split(" ")
          .some(word => trigger.includes(word));

        if (foundAWord) {
          this.index = index;
          console.log("index", this.index);
          return true;
        } else {
          return false;
        }
      });
    },

    async pushToChats(sender, message) {
      const chatboxArea = this.$refs.chatboxArea;
      this.chats.push({
        sender,
        message
      });
      await this.$nextTick();
      chatboxArea.scrollTo({
        top: chatboxArea.scrollHeight - chatboxArea.clientHeight,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.pushToChats("Manfred", chatbotData.welcome);
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

.chatbox-area {
  overflow-y: scroll;
  max-height: 200px;
}

.chatbox-area ul {
  margin: 0;
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
