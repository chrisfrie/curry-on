const general = [
  {
    trigger: [
      "do",
      "ask",
      "commands",
      "instructions",
      "command",
      "instruction",
      "help"
    ],
    responses: [
      {
        text:
          "My friend! As I see you need some help talking to me. I love some good Smalltalk, also I prepared some 'trivia' and I love speaking about my one big 'love' - 'Herta'!"
      }
    ]
  },
  {
    trigger: ["hi", "hey", "hello", "hallo", "morning", "afternoon"],
    responses: [{ text: ["Hallo!", "Guten Tag", "Hello", "Tach", "Good day"] }]
  },
  {
    trigger: ["going", "up", "whats"],
    responses: [
      {
        text: [
          "I haven't had my daily currywurst today.",
          "Nothing much.",
          "Serving on a daily basis, as always.",
          "Exciting things, I saw Herta yesterday!"
        ]
      }
    ]
  },
  {
    trigger: ["how", "doing", "are", "feeling"],
    responses: [
      {
        text: [
          "Excelling!",
          "All good.",
          "Wunderbar!",
          "Fabulous!",
          "Good, it could be wurst."
        ]
      }
    ]
  },
  {
    trigger: ["thanks", "thank"],
    responses: [
      {
        text: [
          "You're welcome!",
          "No problem.",
          "At your service.",
          "My pleasure!"
        ]
      }
    ]
  },
  {
    trigger: ["bye", "night", "goodbye"],
    responses: [
      { text: ["Goodbye.", "See you later.", "Nice talking to you!"] }
    ]
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
          "Watch your language my dear.",
          "Pardon, I do not speak to people with bad manners, I am a respected butler!",
          "Curry on, kid...",
          "I think my pig whistles!",
          "I believe I spider!"
        ]
      }
    ]
  },
  {
    trigger: ["pommes", "points", "score", "point"],
    responses: [
      {
        text: [
          "This is sausage to me!",
          "What do I care?",
          "Come back, when you are a grown up!"
        ]
      }
    ]
  }
];

const initial = [
  {
    // think about how user is going to ask th question about the story - guide him to ask about the story
    trigger: ["trivia", "facts", "random"],
    responses: [
      {
        text: "Do you really want to hear some trivia?",
        nextState: "decideTellTrivia"
      }
    ]
  },
  {
    // think about how user is going to ask th question about the story - guide him to ask about the story
    trigger: ["love", "story", "herta", "hertha"],
    responses: [
      {
        text: "Do you mean my love story?",
        nextState: "decideTellLoveStory"
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
          "I need to leave now, cannot leave my lover waiting for me",
          "I am going out for a cigar!"
        ],
        nextState: "initial"
      }
    ]
  },
  {
    // think about how user is going to ask th question about the story - guide him to ask about the story
    trigger: ["love", "herta", "hertha"],
    responses: [
      {
        text: "What about a love story?",
        nextState: "decideTellLoveStory"
      }
    ]
  },
  {
    // think about how user is going to ask th question about the story - guide him to ask about the story
    trigger: ["trivia", "facts", "random"],
    responses: [
      {
        text: "Do you want to hear some trivia?",
        nextState: "decideTellTrivia"
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
      "course",
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
          "Currywurst exists also as a flavoured energy drink."
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
      "herta",
      "yes",
      "yeah",
      "great",
      "sure",
      "course",
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
          "Since the day I met Herta I cannot stop talking about her, one day we were eating a currywurst and it started to rain, I wanted to go home and leave the currywurst behind, but she said Curry On Manfred I am hungry, and we had the greatest currywurst of our life!",
          "Until this day Simon's Bude exists, and our love story has been passed to all further generations."
        ],
        nextState: "endState"
      }
    ]
  },
  {
    trigger: ["no", "nope", "nop", "never", "hardly", "nay", "negative", "nah"],
    responses: [
      {
        text: ["But, my life is all about currywurst and Herta!"],
        nextState: ["endState"]
        //GABEEEE filter user input if user wants love story or trivia and go back to eiter decide to tell lovestory or trivia
      }
    ]
  }
];

export default {
  welcome:
    "Hello Wurst-Enthusiast! Finished my story? Everything has an end but the Wurst has two, so let's talk!",
  general,
  initial,
  endState,
  decideTellTrivia,
  decideTellLoveStory
};
