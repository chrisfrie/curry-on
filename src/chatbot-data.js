const general = [
  {
    trigger: ["commands"],
    responses: [{ text: "We have story & trivia" }]
  },
  {
    trigger: ["hi", "hey", "hello"],
    responses: [{ text: ["Hallo!", "Guten Tag", "Hello"] }]
  },
  {
    trigger: ["what", "is going on", "what is up"],
    responses: [
      {
        text: [
          "I haven't had my daily currywurst today",
          "Nothing much",
          "Serving on a daily basis, as always",
          "Exciting things, I saw Hertha yesterday!"
        ]
      }
    ]
  },
  {
    trigger: ["thanks", "thank you"],
    responses: [{ text: ["You're welcome", "No problem"] }]
  },
  {
    trigger: ["bye", "good bye", "goodbye"],
    responses: [{ text: ["Goodbye", "See you later"] }]
  },
  {
    trigger: [
      "fuck",
      "hell",
      "shit",
      "ass",
      "bastard",
      "bitch",
      "cunt",
      "bugger",
      "twat",
      "suck"
    ],
    responses: [
      {
        text: [
          "Watch your language my dear",
          "Pardon, I do not speak to people with bad manners, I am a respected butler!"
        ]
      }
    ]
  }
];

const initial = [
  {
    // think about how user is going to ask th question about the story - guide him to ask about the story
    trigger: ["trivia", "story", "tale"],
    responses: [
      {
        text: "Do you want to hear some trivia?",
        nextState: "decideTellTrivia"
      }
    ]
  }
];

const endState = [
  {
    trigger: ["boring", "none", "neither", "meh"],
    responses: [
      {
        text: [
          "Coffee time, bye",
          "I need to leave now, cannot leave my lover waiting ofr me",
          "I am going out for a cigar!"
        ]
      }
    ]
  }
];

const decideTellTrivia = [
  {
    trigger: [
      "yes",
      "yeah",
      "great",
      "sure",
      "of course",
      "like",
      "love",
      "alright",
      "roger",
      "positive",
      "ok"

      // ["trivia"]
    ],
    responses: [
      {
        text: [
          "Currywurst has its own dedicated museum, wait no more and visit the Deutsches Currywurst Museum!",
          "800 million Currywurst are eaten every year in Germany and about 70 million just in Berlin, imagine the pleasure! ",
          "Currywurst exists also as a flauvored energy drink."
        ],

        nextState: "initial"
      }
    ]
  },
  {
    trigger: ["no", "nope", "nop", "never", "hardly", "nay", "negative"],
    responses: [
      {
        text: ["What about a love story?", "How about a love story?"],
        nextState: "decideTellLoveStory"
      }
    ]
  }
];

const decideTellLoveStory = [
  {
    trigger: [
      "yes",
      "yeah",
      "great",
      "sure",
      "of course",
      "like",
      "love",
      "alright",
      "roger",
      "positive",
      "ok"

      // ["story"]
    ],
    responses: [
      {
        text: [
          "Since the day I met Hertha I cannot stop talking about her, one day we were eating a currywurst and it started to rain, I wanted to go home and leave the currywurst behind, but she said Curry On Manfred I am hungry, and we had the greatest currywurst of our life!",
          "Until this day Simon's Bude exists, and ouy love story has been passed to all further generations."
        ],
        nextState: "endState"
      }
    ]
  },
  {
    trigger: ["no", "nope", "nop", "never", "hardly", "nay", "negative"],
    responses: [
      {
        text: ["But, my life is all about currywurst and Hertha!"],
        nextState: ["decideTellLoveStory", "decideTellTrivia", "endState"]
        //GABEEEE filter user input if user wants love story or trivia and go back to eiter decide to tell lovestory or trivia
      }
    ]
  }
];

export default {
  welcome: "You finished my story, let's talk!",
  general,
  initial,
  endState,
  decideTellTrivia,
  decideTellLoveStory
};

// let currentState = "initial";

// const handleUserInput = (userInput) => {
// const case = general.find({trigger}, userInput.toLowerCase().split(/\s+/).some(word => trigger.includes(word)));

// if (case) {

// }
// else {
// const state = bot[currentState];
// const case = state.find({trigger}, trigger.includes(userInput));
// if (!case) {
//     console.log ("What do you mean???")
//     return;
// }
// const response = case.responses[Math.floor(Math.random() * case.response.length)];
// console.log (response.text);
// currentState = response.nextState;
// }
