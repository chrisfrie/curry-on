<template>
  <div :class="{ chatClosed }" class="chatbot">
    <section name="chatbox">
      <header>
        <h2>Manfred says hi</h2>
        <div class="toggle-box">
          <button @click="toggleChatbox" v-if="chatClosed" class="open-chatbot">
            ^
          </button>
          <button v-else @click="toggleChatbox" class="close-chatbot">
            X
          </button>
        </div>
      </header>
      <div>
        <main ref="chatboxArea">
          <ul>
            <li
              v-for="chat in chats"
              :key="chat.id"
              class="chat-bubble"
              :class="[chat.sender === 'User' ? 'user-class' : 'manfred-class']"
            >
              {{ chat.message }}
            </li>
          </ul>
        </main>
        <footer>
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
</template>

<script>
import chatbotData from "@/chatbot-data";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      chats: [],
      currentState: "initial",
      noToTrivia: false,
      noToStory: false,
      chatClosed: false,
      userInput: "",
      index: 0,
      intervalHandle: 0,
      counter: 0,
      engagementCount: 0
    };
  },

  methods: {
    toggleChatbox() {
      this.chatClosed = !this.chatClosed;
    },

    sendMessage() {
      if (!this.userInput) return;

      this.counter = 0;
      this.pushToChats("User", this.userInput);

      const generalMatch = this.findTrigger(chatbotData.general);
      if (generalMatch) {
        setTimeout(() => {
          this.pushToChats(
            "Manfred",
            this.getResponseText(chatbotData.general)
          );
          this.index = 0;
        }, 2000);

        this.userInput = "";
        return;
      } else {
        console.log("entering inital");
        const state = chatbotData[this.currentState];
        console.log(this.currentState);

        // this.pushToChats("User", this.userInput);
        const match = this.findTrigger(state);

        if (match) {
          setTimeout(() => {
            this.pushToChats("Manfred", this.getResponseText(state));
            this.currentState = state[this.index].responses[0].nextState;
            this.index = 0;
          }, 2000);
          this.userInput = "";
          return;
        }
      }
      setTimeout(
        () =>
          this.pushToChats(
            "Manfred",
            "Pardon me? Could you rephrase that, please?"
          ),
        1000
      );
      this.userInput = "";
    },

    findTrigger(state) {
      return state.find(({ trigger }, index) => {
        const foundAWord = this.userInput
          .toLowerCase()
          .replace(/[^\w\s\d]/gi, "")
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
        id: uuidv4(),
        sender,
        message
      });
      await this.$nextTick();
      chatboxArea.scrollTo({
        top: chatboxArea.scrollHeight - chatboxArea.clientHeight,
        behavior: "smooth"
      });
    },
    getResponseText(state) {
      console.log("State", state);

      var randomResponseIndex = Math.floor(
        Math.random() * state[this.index].responses[0].text.length
      );
      console.log("index in get", randomResponseIndex);

      return Array.isArray(state[this.index].responses[0].text)
        ? state[this.index].responses[0].text[randomResponseIndex]
        : state[this.index].responses[0].text;
    }
  },
  watch: {
    engagementCount: function() {
      if (this.engagementCount >= 2) {
        clearInterval(this.intervalHandle);
      }
    }
  },
  mounted() {
    this.pushToChats("Manfred", chatbotData.welcome);
  },
  created() {
    this.intervalHandle = setInterval(() => {
      this.counter++;
      if (this.counter > 30) {
        this.pushToChats("Manfred", "Fell asleep? Let's curry on!");
        this.counter = 0;
        this.engagementCount++;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalHandle);
  }
};
</script>

<style scoped>
.chatbot {
  background-color: var(--light-background);
  position: center;
  bottom: 0;
  right: 0;
  width: 100vw;
  transition: transform 1s ease;
}

.chatbot.chatClosed {
  transform: translateY(calc(100% - 2rem));
}

@media (min-width: 600px) {
  .chatbot {
    width: 500px;
  }
}

header {
  background-color: rgb(156, 155, 150);
  position: relative;
  height: 2rem;
}

header h2 {
  padding: 0.25rem;
  margin: 0;
}

header button {
  border: none;
  background-color: rgb(156, 155, 150);
}

.toggle-box {
  position: absolute;
  top: 0;
  right: 0;
  height: 1.4rem;
  width: 2rem;
}

main {
  overflow-y: scroll;
  max-height: 200px;
}

main ul {
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

footer {
  display: flex;
  justify-content: space-between;
}

footer input {
  flex: 1;
}

footer button {
  border: none;
  background-color: rgba(156, 155, 150, 0.8);
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
