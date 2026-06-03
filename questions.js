/**
 * Bible Quest Blitz - Question Database
 * Structure: Array of levels containing localized questions and answers.
 * Make sure 'correct' uses a 0-indexed integer (0 = first answer, 1 = second, etc.)
 */

const quizDatabase = [
  {
    level: 1,
    name: "Genesis Beginnings / Mfitiaseɛ",
    bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
    questions: [
      {
        q: "Who was the first man created by God?",
        q_twi: "Hwan ne onipa a odi kan a Onyankopɔn bɔɔ no?",
        a: ["Noah", "Adam", "Abraham", "Moses"],
        a_twi: ["Noa", "Adam", "Abraham", "Mose"],
        correct: 1
      },
      {
        q: "What did Noah build to survive the great flood?",
        q_twi: "Dɛn na Noa yɛe de kwatiyɛɛ nsuyiri kɛseɛ no?",
        a: ["A tower", "A castle", "An ark", "A temple"],
        a_twi: ["Abantenten", "Aban denden", "Adaka (Adwene)", "Asɔredan"],
        correct: 2
      },
      {
        q: "How many days did God take to create the heavens and the earth?",
        q_twi: "Nna dodoɔ sɛn na Onyankopɔn de bɔɔ ɔsoro ne asase?",
        a: ["3 days", "6 days", "7 days", "12 days"],
        a_twi: ["Nna 3", "Nna 6", "Nna 7", "Nna 12"],
        correct: 1
      }
    ]
  },
  {
    level: 2,
    name: "The Exodus / Atukɔ Biakoye",
    bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
    questions: [
      {
        q: "Through which sea did Moses lead the Israelites to escape Egypt?",
        q_twi: "Ɛpo bɛn mu na Mose faa mu kyeree Israelfoɔ kwan de guan firi Misraim?",
        a: ["Dead Sea", "Mediterranean Sea", "Red Sea", "Galilee"],
        a_twi: ["Po Wuuo", "Po Mediteranea", "Ɛpo Kɔkɔɔ", "Galilea Po"],
        correct: 2
      },
      {
        q: "On which mountain did Moses receive the Ten Commandments?",
        q_twi: "Bepo bɛn so na Mose nsa kaa Mmaransɛm Du no?",
        a: ["Mount Sinai", "Mount Ararat", "Mount Carmel", "Mount Olives"],
        a_twi: ["Sinai Bepo", "Ararat Bepo", "Karmel Bepo", "Ngo Bepo"],
        correct: 0
      }
    ]
  }
  
  // --- LEVEL 3 TO 15 ARCHITECTURE ---
  // To expand to your full 200 questions, continue the pattern below:
  /*
  ,
  {
    level: 3,
    name: "Kings & Prophets / Ahemfo ne Adiyifoɔ",
    bgImage: "URL_HERE",
    questions: [
      {
        q: "Who defeated the giant Goliath?",
        q_twi: "Hwan na odii ɔkatakyi Goliat so nkonim?",
        a: ["Saul", "Solomon", "David", "Samson"],
        a_twi: ["Saulo", "Solomon", "Dawid", "Samson"],
        correct: 2
      }
    ]
  }
  */
];

// Prevents crashing if the file is imported into an environment using ES Modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizDatabase };
}
