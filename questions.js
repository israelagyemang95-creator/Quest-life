// questions.js

const bookQuestions = {
  "Rich Dad Poor Dad": [
    {
      id: 1,
      question: "According to Robert Kiyosaki, what is the primary definition of an asset?",
      options: [
        "Something that puts money into your pocket",
        "Something that takes money out of your pocket",
        "A primary residence or personal vehicle",
        "Any high-value item owned by an individual"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "What does Kiyosaki mean by the term 'The Rat Race'?",
      options: [
        "The pattern of getting stuck in a cycle of working for money to pay for bills",
        "A competitive corporate environment where everyone tries to get promoted",
        "The process of day-trading stocks on Wall Street",
        "Starting a franchise business without prior experience"
      ],
      correctAnswer: 0
    }
  ],
  "The Richest Man in Babylon": [
    {
      id: 1,
      question: "What is the first 'cure' Arkad prescribes for a lean purse?",
      options: [
        "Control thy expenditures",
        "Start thy purse to fattening (Save at least 10%)",
        "Make thy gold multiply",
        "Guard thy treasures from loss"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "According to the book, what is the primary rule for making your gold multiply?",
      options: [
        "Put your savings to work so it earns interest or returns compounding value",
        "Lend money to friends who are starting new businesses",
        "Invest only in high-risk, high-return real estate ventures",
        "Keep your earnings hidden safely in a secure vault"
      ],
      correctAnswer: 0
    }
  ]
};

// Export the data structure so it can be imported cleanly elsewhere
export default bookQuestions;
