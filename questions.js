// questions.js
const quizDatabase = [
    // ==========================================
    // EASY BOOKS (5 Questions Each / Target: 5)
    // ==========================================
    {
        level: 1,
        name: "Genesis",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
        questions: [
            { q: "Who was the first man created?", q_twi: "Hwan ne onipa a odi kan a wɔbɔɔ no?", a: ["Noah", "Adam", "Abel", "Seth"], correct: 1 },
            { q: "What was the first thing God created?", q_twi: "Dɛn ne adeɛ a Onyankopɔn dii kan bɔe?", a: ["Animals", "Light", "Trees", "Water"], correct: 1 },
            { q: "Who built the Ark?", q_twi: "Hwan na ɔyɛɛ adaka no?", a: ["Moses", "Abraham", "Noa", "David"], correct: 2 },
            { q: "Who was Adam's wife?", q_twi: "Hwan ne Adam yere?", a: ["Sarah", "Eve", "Ruth", "Esther"], correct: 1 },
            { q: "Which brother killed Abel?", q_twi: "Onua bɛn na okum Abel?", a: ["Seth", "Cain", "Jacob", "Esau"], correct: 1 }
        ]
    },
    {
        level: 2,
        name: "Exodus",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: [
            { q: "Who led Israel out of Egypt?", q_twi: "Hwan na oyii Israel mfiri Misraim?", a: ["Aaron", "Moses", "Joshua", "Caleb"], correct: 1 },
            { q: "How did God appear to Moses in the desert?", q_twi: "Ɔkwan bɛn so na Onyankopɔn puii kyerɛɛ Mose?", a: ["Cloud", "Burning Bush", "Wind", "Voice"], correct: 1 },
            { q: "What was the first plague?", q_twi: "Ɔyaredɔm a edi kan ne dɛn?", a: ["Frogs", "Lice", "Blood", "Darkness"], correct: 2 },
            { q: "Which sea did the Israelites cross?", q_twi: "Ɛpo bɛn na Israelfoɔ twwaeɛ?", a: ["Dead Sea", "Red Sea", "Galilee", "Jordan"], correct: 1 },
            { q: "Where did Moses receive the 10 Commandments?", q_twi: "Bepo bɛn so na Mose nsa kaa mmaransa du no?", a: ["Sinai", "Nebo", "Ararat", "Zion"], correct: 0 }
        ]
    },
    {
        level: 3,
        name: "Leviticus",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Which tribe was chosen to be priests?", q_twi: "Abusua bɛn na wɔfaa wɔn sɛ asɔfoɔ?", a: ["Judah", "Levi", "Benjamin", "Dan"], correct: 1 },
            { q: "What is the main theme of Leviticus?", q_twi: "Levitiko asɛm titiri ne dɛn?", a: ["War", "Holiness", "Travel", "Kings"], correct: 1 },
            { q: "How many types of offerings are listed at the start?", q_twi: "Afɔrebɔ ahorow dodoɔ sɛn na ɛwɔ hɔ?", a: ["3", "5", "7", "10"], correct: 1 },
            { q: "What day was for the cleansing of sins yearly?", q_twi: "Da bɛn na wɔpopa bɔne afe biara?", a: ["Passover", "Day of Atonement", "Sabbath", "Purim"], correct: 1 },
            { q: "What happened to Nadab and Abihu?", q_twi: "Dɛn na ɛtoo Nadab ne Abihu?", a: ["Exiled", "Fire from God killed them", "Drowned", "Became kings"], correct: 1 }
        ]
    },
    {
        level: 4,
        name: "Ruth",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Where was Ruth originally from?", q_twi: "Ɛhe na na Ruth firi?", a: ["Israel", "Moab", "Egypt", "Philistia"], correct: 1 },
            { q: "Who was Ruth's mother-in-law?", q_twi: "Hwan ne Ruth nsew?", a: ["Orpah", "Naomi", "Hannah", "Sarah"], correct: 1 },
            { q: "Whose grain field did Ruth glean in?", q_twi: "Hwan afuo mu na Ruth kɔpue kɔboaboaa mmoa ano?", a: ["Elimelek", "Boaz", "Mahlon", "David"], correct: 1 },
            { q: "What was Naomi's husband's name?", q_twi: "Hwan ne Naomi kunu?", a: ["Boaz", "Chilion", "Elimelek", "Obed"], correct: 2 },
            { q: "Who was Ruth's famous great-grandson?", q_twi: "Hwan ne Ruth nana kankeseɔ a ɔgye din?", a: ["Solomon", "Saul", "Samuel", "King David"], correct: 3 }
        ]
    },
    {
        level: 5,
        name: "Esther",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Who raised Esther after her parents died?", a: ["Haman", "Mordecai", "King Xerxes", "Nehemiah"], correct: 1 },
            { q: "Which empire did Esther become queen of?", a: ["Babylon", "Egypt", "Persia", "Greece"], correct: 2 },
            { q: "Who plotted to destroy all the Jews?", a: ["Mordecai", "Haman", "Bigthana", "Teresh"], correct: 1 },
            { q: "What did Esther ask the Jews to do before she went to the King?", a: ["Fight", "Run away", "Fast and pray", "Sing"], correct: 2 },
            { q: "What holiday was established to celebrate the survival of the Jews?", a: ["Passover", "Purim", "Pentecost", "Hanukkah"], correct: 1 }
        ]
    },
    {
        level: 6,
        name: "Jonah",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Which city did God tell Jonah to preach to?", a: ["Tarshish", "Nineveh", "Jerusalem", "Babylon"], correct: 1 },
            { q: "Where did Jonah try to flee instead?", a: ["Nineveh", "Joppa", "Tarshish", "Sodom"], correct: 2 },
            { q: "How long was Jonah inside the great fish?", a: ["1 day", "3 days and 3 nights", "7 days", "40 days"], correct: 1 },
            { q: "What did the people of Nineveh do when Jonah preached?", a: ["They laughed", "They threw rocks", "They repented and fasted", "They fled"], correct: 2 },
            { q: "What grew over Jonah to give him shade outside the city?", a: ["A vine/plant", "An oak tree", "A tent", "A cloud"], correct: 0 }
        ]
    },

    // Remaining Easy placeholders (You can fill out questions here just like Ruth/Esther/Jonah above)
    ...["Haggai", "Malachi", "Philemon", "2 John", "3 John"].map((name, index) => ({
        level: 7 + index,
        name: name,
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: `Who wrote the book of ${name}?`, a: ["Moses", `${name} or structural author`, "Paul", "Peter"], correct: 1 },
            { q: `What test number is this question for ${name}?`, a: ["One", "Two", "Three", "Four"], correct: 1 },
            { q: `Is the book of ${name} in Old or New Testament?`, a: ["Old", "New", "Apocrypha", "Historical"], correct: 1 },
            { q: `Select the correct thematic choice for ${name}.`, a: ["Faithfulness", "Prophecy and Trust", "Kingdom Judgments", "Grace"], correct: 1 },
            { q: `Final foundational quiz question option for ${name}?`, a: ["Incorrect choice", "Correct biblical fact", "Wrong data", "False statement"], correct: 1 }
        ]
    })),

    // ==========================================
    // MODERATE BOOKS (10 Questions Each / Target: 10)
    // ==========================================
    {
        level: 12,
        name: "Numbers",
        group: "Moderate",
        target: 10,
        timer: 12,
        bg: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?q=80&w=1000",
        questions: [
            { q: "How many spies were sent to Canaan?", a: ["2", "10", "12", "70"], correct: 2 },
            { q: "Which two spies gave a good report?", a: ["Moses & Aaron", "Joshua & Caleb", "Nadab & Abihu", "Dathan & Abiram"], correct: 1 },
            { q: "How long did Israel wander in the desert?", a: ["7 years", "12 years", "40 years", "100 years"], correct: 2 },
            { q: "What happened to Miriam for speaking against Moses?", a: ["Exiled", "Leprosy", "Blindness", "Death"], correct: 1 },
            { q: "Whose donkey spoke to him?", a: ["Moses", "Balaam", "Joshua", "Balak"], correct: 1 },
            { q: "What did Moses lift up to heal the people from snakes?", a: ["A staff", "A Bronze Serpent", "A Sword", "A Prayer"], correct: 1 },
            { q: "Who led a rebellion against Moses and was swallowed by the earth?", a: ["Korah", "Caleb", "Balaam", "Aaron"], correct: 0 },
            { q: "What budded to show God chose Aaron?", a: ["A flower", "Aaron's Staff", "A tree", "A stone"], correct: 1 },
            { q: "Why was Moses not allowed into the Promised Land?", a: ["He was old", "He hit the rock instead of speaking", "He was scared", "He died too soon"], correct: 1 },
            { q: "Which king asked Balaam to curse Israel?", a: ["Pharaoh", "Balak", "Og", "Sihon"], correct: 1 }
        ]
    },
    // Moderate placeholder arrays
    ...["Deuteronomy", "Joshua", "Judges", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "Ezra", "Nehemiah", "Job", "Proverbs", "Ecclesiastes", "Song of Solomon", "Lamentations", "Hosea", "Joel", "Amos", "Obadiah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Zechariah", "Mark", "Luke", "Acts", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "Jude"].map((name, index) => ({
        level: 13 + index,
        name: name,
        group: "Moderate",
        target: 10,
        timer: 12,
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: Array.from({ length: 10 }, (_, i) => ({
            q: `Factual Question ${i + 1} regarding the book of ${name}?`,
            a: ["Wrong option history", "True statement text", "False concept placeholder", "Incorrect option answer"],
            correct: 1
        }))
    })),

    // ==========================================
    // DIFFICULT BOOKS (20 Questions Each / Target: 20)
    // ==========================================
    ...["1 Chronicles", "2 Chronicles", "Major Psalms", "Isaiah", "Jeremiah", "Ezekiel", "Daniel", "Matthew", "Romans", "1 Corinthians", "2 Corinthians", "Revelation"].map((name, index) => ({
        level: 54 + index,
        name: name,
        group: "Difficult",
        target: 20,
        timer: 10,
        bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: Array.from({ length: 20 }, (_, i) => ({
            q: `Deep theological scriptural analysis query ${i + 1} for ${name}?`,
            a: ["Faulty Option A", "Faulty Option B", "True verified text context", "Faulty Option D"],
            correct: 2
        }))
    }))
];
