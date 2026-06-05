// questions.js
const quizDatabase = [
    // ==========================================
    // OLD TESTAMENT BOOKS (Group: "OT")
    // ==========================================
    {
        id: "gen", name: "Genesis", group: "OT", target: 5, timer: 20, bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
        questions: [
            { q: "Who was the first man created?", q_twi: "Hwan ne onipa a odi kan a wɔbɔɔ no?", a: ["Noah", "Adam", "Abel", "Seth"], correct: 1 },
            { q: "What was the first thing God created?", q_twi: "Dɛn ne adeɛ a Onyankopɔn dii kan bɔe?", a: ["Animals", "Light", "Trees", "Water"], correct: 1 },
            { q: "Who built the Ark?", q_twi: "Hwan na ɔyɛɛ adaka no?", a: ["Moses", "Abraham", "Noa", "David"], correct: 2 },
            { q: "Who was Adam's wife?", q_twi: "Hwan ne Adam yere?", a: ["Sarah", "Eve", "Ruth", "Esther"], correct: 1 },
            { q: "Which brother killed Abel?", q_twi: "Onua bɛn na okum Abel?", a: ["Seth", "Cain", "Jacob", "Esau"], correct: 1 }
        ]
    },
    {
        id: "ex", name: "Exodus", group: "OT", target: 5, timer: 20, bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: [
            { q: "Who led Israel out of Egypt?", q_twi: "Hwan na oyii Israel mfiri Misraim?", a: ["Aaron", "Moses", "Joshua", "Caleb"], correct: 1 },
            { q: "How did God appear to Moses in the desert?", q_twi: "Ɔkwan bɛn so na Onyankopɔn puii kyerɛɛ Mose?", a: ["Cloud", "Burning Bush", "Wind", "Voice"], correct: 1 },
            { q: "What was the first plague?", q_twi: "Ɔyaredɔm a edi kan ne dɛn?", a: ["Frogs", "Lice", "Blood", "Darkness"], correct: 2 },
            { q: "Which sea did the Israelites cross?", q_twi: "Ɛpo bɛn na Israelfoɔ twwaeɛ?", a: ["Dead Sea", "Red Sea", "Galilee", "Jordan"], correct: 1 },
            { q: "Where did Moses receive the 10 Commandments?", q_twi: "Bepo bɛn so na Mose nsa kaa mmaransa du no?", a: ["Sinai", "Nebo", "Ararat", "Zion"], correct: 0 }
        ]
    },

    // ==========================================
    // NEW TESTAMENT BOOKS (Group: "NT")
    // ==========================================
    {
        id: "jude", name: "Jude", group: "NT", target: 5, timer: 18, bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: [
            { q: "How many chapters does the book of Jude have?", q_twi: "Ti dodoɔ sɛn na ɛwɔ Yuda nwoma no mu?", a: ["1", "2", "5", "10"], correct: 0 },
            { q: "Jude identifies himself as the brother of whom?", q_twi: "Yuda de ne ho kyerɛɛ sɛ hwan nua?", a: ["Paul", "James", "Peter", "John"], correct: 1 },
            { q: "Which archangel argued with the devil over the body of Moses?", q_twi: "Ɔbɔfopanyin bɛn na ɔne ɔbonsam gyee akyinnyeɛ wɔ Mose amu ho?", a: ["Gabriel", "Michael", "Raphael", "Uriel"], correct: 1 },
            { q: "What did the archangel say to the devil when disputing?", q_twi: "Dɛn na bɔfopanyin no ka kyerɛɛ ɔbonsam wɔ akyinnyeɛ no mu?", a: ["I destroy you", "The Lord rebuke you", "Leave this place", "You are bound"], correct: 1 },
            { q: "Jude warns against people who have gone the way of which brother?", q_twi: "Yuda bɔ kɔkɔɔ firi nnipa a wɔfaɔ onua bɛn kwan so?", a: ["Abel", "Cain", "Seth", "Lot"], correct: 1 }
        ]
    },
    {
        id: "rev", name: "Revelation", group: "NT", target: 5, timer: 15, bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: [
            { q: "Who wrote the Book of Revelation?", q_twi: "Hwan na ɔtwerɛɛ Adiyisɛm nwoma no?", a: ["Paul", "John", "Peter", "Luke"], correct: 1 },
            { q: "On which island was the author exiled?", q_twi: "Supɔn bɛn so na wɔpam twerɛfoɔ no kɔeɛ?", a: ["Cyprus", "Patmos", "Malta", "Crete"], correct: 1 },
            { q: "How many churches were addressed?", q_twi: "Asɔre dodoɔ sɛn na wɔtwerɛ kyerɛɛ wɔn?", a: ["3", "5", "7", "12"], correct: 2 },
            { q: "What color was the first horse?", q_twi: "Ahosuo bɛn na na pɔnkɔ a odi kan no wɔ?", a: ["Red", "Black", "Pale", "White"], correct: 3 },
            { q: "What is the number of the beast?", q_twi: "Dɛn ne aboa no dodoɔ namba?", a: ["777", "616", "666", "999"], correct: 2 }
        ]
    },

    // ==========================================
    // ELLEN G. WHITE WRITINGS (Group: "EGW")
    // ==========================================
    {
        id: "egw_gc", name: "The Great Controversy", group: "EGW", target: 5, timer: 20, bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Which city's destruction opens the first chapter of The Great Controversy?", q_twi: "Kuropɔn bɛn sɛeɛ na ɛbue 'The Great Controversy' ti a ɛdi kan?", a: ["Babylon", "Rome", "Jerusalem", "Nineveh"], correct: 2 },
            { q: "In what year did the 2300-day prophecy of Daniel end?", q_twi: "Afe bɛn mu na Daniel nkɔmhyɛ mfeɛ 2300 no baa awieeɛ?", a: ["1798", "1843", "1844", "1914"], correct: 2 },
            { q: "Where did the Great Disappointment of October 22, 1844 take place?", q_twi: "Ɛhe na mpaaba kɛseɛ a ɛbaa Ɔktober 22, 1844 no siiɛ?", a: ["England", "United States", "Germany", "Ghana"], correct: 1 },
            { q: "Who is described as the 'Morning Star of the Reformation'?", q_twi: "Hwan na wɔbɔɔ ne din sɛ 'Nsoromma a ɛdi anim maa Nsakraeɛ no'?", a: ["Martin Luther", "John Wycliffe", "John Calvin", "Ulrich Zwingli"], correct: 1 },
            { q: "What is the core subject matter of the investigative judgment?", q_twi: "Dɛn ne asɛm titiri a ɛwɔ nhwehwɛmu atemmuo mu?", a: ["Cleansing of the Sanctuary", "Building the Ark", "The Exile", "The Millennium"], correct: 0 }
        ]
    }
];
