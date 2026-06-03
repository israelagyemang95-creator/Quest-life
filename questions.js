/**
 * Bible Quest Blitz - Question Database
 * Ensure this file is saved in the same folder as your index.html
 */

const quizDatabase = [
  {
    level: 1,
    name: "The Beginning / Mfitiaseɛ",
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
      },
      {
        q: "Who was Adam's wife?",
        q_twi: "Hwan ne Adam yere?",
        a: ["Sarah", "Ruth", "Eve", "Mary"],
        a_twi: ["Sara", "Rut", "Hawa", "Maria"],
        correct: 2
      },
      {
        q: "What was the name of the garden where Adam and Eve lived?",
        q_twi: "Tuo bɛn mu na Adam ne Hawa tɛnee?",
        a: ["Gethsemane", "Eden", "Sinai", "Canaan"],
        a_twi: ["Getsemane", "Eden", "Sinai", "Kanaan"],
        correct: 1
      }
    ]
  },
  {
    level: 2,
    name: "The Great Exodus / Atukɔ Biakoye",
    bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
    questions: [
      {
        q: "Through which sea did Moses lead the Israelites?",
        q_twi: "Ɛpo bɛn mu na Mose faa Israelfoɔ no?",
        a: ["Dead Sea", "Mediterranean Sea", "Red Sea", "Galilee"],
        a_twi: ["Po Wuuo", "Po Mediteranea", "Ɛpo Kɔkɔɔ", "Galilea Po"],
        correct: 2
      },
      {
        q: "How many commandments did God give to Moses?",
        q_twi: "Mmaransɛm dodoɔ sɛn na Onyankopɔn de maa Mose?",
        a: ["5", "10", "12", "7"],
        a_twi: ["5", "10", "12", "7"],
        correct: 1
      },
      {
        q: "In what form did God first appear to Moses?",
        q_twi: "Tebea bɛn mu na Onyankopɔn dii kan yii ne ho adi kyerɛɛ Mose?",
        a: ["A cloud", "A burning bush", "A giant", "A bird"],
        a_twi: ["Omununkum", "Wura a ɛredɛre", "Ɔkatakyi", "Anomaa"],
        correct: 1
      },
      {
        q: "Who was Moses' brother?",
        q_twi: "Hwan ne Mose nua barima?",
        a: ["Joshua", "Aaron", "Caleb", "Jacob"],
        a_twi: ["Yosua", "Aaron", "Kaleb", "Yakobo"],
        correct: 1
      }
    ]
  },
  {
    level: 3,
    name: "Kings and Prophets / Ahemfo ne Adiyifoɔ",
    bgImage: "https://images.unsplash.com/photo-1461360228754-6e81c478bd42?q=80&w=1000",
    questions: [
      {
        q: "Who defeated the giant Goliath?",
        q_twi: "Hwan na odii ɔkatakyi Goliat so nkonim?",
        a: ["Saul", "Solomon", "David", "Samson"],
        a_twi: ["Saulo", "Solomon", "Dawid", "Samson"],
        correct: 2
      },
      {
        q: "Which king was known for his great wisdom?",
        q_twi: "Ɔhene bɛn na na wagye din wɔ ne nyansa kɛseɛ nti?",
        a: ["David", "Saul", "Solomon", "Hezekiah"],
        a_twi: ["Dawid", "Saulo", "Solomon", "Hesekia"],
        correct: 2
      },
      {
        q: "Who was swallowed by a big fish?",
        q_twi: "Hwan na mpataa kɛseɛ bi menee no?",
        a: ["Peter", "Jonah", "Paul", "Daniel"],
        a_twi: ["Petro", "Yona", "Paulo", "Daniel"],
        correct: 1
      }
    ]
  }
];

// Prevents crashing if the file is imported into an environment using ES Modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizDatabase };
}
