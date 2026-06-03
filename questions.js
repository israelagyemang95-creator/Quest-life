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
        name: "Numbers",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?q=80&w=1000",
        questions: [
            { q: "How many spies were sent to Canaan?", a: ["2", "10", "12", "70"], correct: 2 },
            { q: "Which two spies gave a good report?", a: ["Moses", "Joshua & Caleb", "Aaron", "Korah"], correct: 1 },
            { q: "How long did Israel wander in the desert?", a: ["7 years", "12 years", "40 years", "50 years"], correct: 2 },
            { q: "Whose donkey spoke to him?", a: ["Moses", "Balaam", "Balak", "Joshua"], correct: 1 },
            { q: "What did Moses lift up to heal snake bites?", a: ["A staff", "A Bronze Serpent", "A Sword", "An Altar"], correct: 1 }
        ]
    },
    {
        level: 5,
        name: "Deuteronomy",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: [
            { q: "What does the name 'Deuteronomy' mean?", a: ["First Law", "Second Law", "History", "Prophecy"], correct: 1 },
            { q: "On which mountain did Moses die?", a: ["Sinai", "Nebo", "Ararat", "Carmel"], correct: 1 },
            { q: "How old was Moses when he died?", a: ["80", "100", "120", "150"], correct: 2 },
            { q: "Who was chosen to lead Israel after Moses?", a: ["Caleb", "Aaron", "Joshua", "Eleazar"], correct: 2 },
            { q: "What is the core commandment repeated in this book?", a: ["Build a temple", "Love God with all your heart", "Go to war", "Fast weekly"], correct: 1 }
        ]
    },
    {
        level: 6,
        name: "Joshua",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Which city's walls fell after Israel marched around it?", a: ["Ai", "Jericho", "Gibeon", "Hebron"], correct: 1 },
            { q: "Who hid the Israeli spies in Jericho?", a: ["Deborah", "Rahab", "Ruth", "Delilah"], correct: 1 },
            { q: "What river did Israel cross on dry land to enter Canaan?", a: ["Nile", "Euphrates", "Jordan", "Tigris"], correct: 2 },
            { q: "How many stones did they take from the Jordan as a memorial?", a: ["3", "7", "12", "40"], correct: 2 },
            { q: "What did the sun do during Joshua's battle at Gibeon?", a: ["Turned red", "Stood still", "Went dark", "Disappeared"], correct: 1 }
        ]
    },
    {
        level: 7,
        name: "Judges",
        group: "Easy",
        target: 5,
        timer: 15,
        bg: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
        questions: [
            { q: "Who was the extremely strong judge who fought the Philistines?", a: ["Gideon", "Samson", "Ehud", "Barak"], correct: 1 },
            { q: "Who was the only female judge mentioned?", a: ["Ruth", "Deborah", "Jael", "Hannah"], correct: 1 },
            { q: "What weapon did Gideon's army use along with trumpets?", a: ["Swords", "Jars with torches", "Bows", "Spears"], correct: 1 },
            { q: "Who betrayed Samson to the Philistines?", a: ["Rahab", "Delilah", "Michal", "Jezebel"], correct: 1 },
            { q: "How many men were in Gideon's final chosen army?", a: ["300", "1,000", "10,000", "32,000"], correct: 0 }
        ]
    },
    {
        level: 8,
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

    // ==========================================
    // MODERATE BOOKS (10 Questions Each / Target: 10)
    // ==========================================
    {
        level: 9,
        name: "1 Samuel",
        group: "Moderate",
        target: 10,
        timer: 12,
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: [
            { q: "Who was Samuel's mother?", a: ["Peninnah", "Hannah", "Sarah", "Elizabeth"], correct: 1 },
            { q: "Who was the high priest who trained Samuel?", a: ["Aaron", "Eli", "Phinehas", "Zadok"], correct: 1 },
            { q: "Who was the first king anointed over Israel?", a: ["David", "Saul", "Solomon", "Hezekiah"], correct: 1 },
            { q: "What giant did David defeat with a sling?", a: ["Og", "Goliath", "Sihon"], correct: 1 },
            { q: "Who was Saul's son and David's best friend?", a: ["Jonathan", "Abner", "Absalom", "Ishbosheth"], correct: 0 },
            { q: "What did David play to soothe King Saul?", a: ["Flute", "Harp", "Trumpet", "Cymbal"], correct: 1 },
            { q: "Where did David hide from Saul?", a: ["Caves of En Gedi", "Jericho", "Babylon", "Hebron"], correct: 0 },
            { q: "How did Saul die?", a: ["In battle by arrows", "Fell on his own sword", "Old age", "Poison"], correct: 1 },
            { q: "What tribe was King Saul from?", a: ["Judah", "Benjamin", "Levi", "Ephraim"], correct: 1 },
            { q: "What did Samuel's mother bring him every year?", a: ["A new sword", "A little robe", "Gold coins", "Bread"], correct: 1 }
        ]
    },
    {
        level: 10,
        name: "2 Samuel",
        group: "Moderate",
        target: 10,
        timer: 12,
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: [
            { q: "Which city did David make his capital city?", a: ["Hebron", "Jerusalem", "Samaria", "Gaza"], correct: 1 },
            { q: "Who was Jonathan's lame son whom David showed kindness to?", a: ["Mephibosheth", "Ishbosheth", "Absalom", "Adonijah"], correct: 0 },
            { q: "Who was the prophet that confronted David about his sin?", a: ["Samuel", "Nathan", "Elijah", "Elisha"], correct: 1 },
            { q: "Which of David's sons rebelled and tried to steal the kingdom?", a: ["Solomon", "Absalom", "Amnon", "Adonijah"], correct: 1 },
            { q: "How did Absalom get caught during a battle in the forest?", a: ["Trapped in a cave", "His hair caught in an oak tree", "Fell off a cliff", "Captured by guards"], correct: 1 },
            { q: "Who was Bathsheba's husband whom David sent to the frontline?", a: ["Joab", "Uriah", "Abner", "Benaiah"], correct: 1 },
            { q: "Who was the commander of David's army?", a: ["Abner", "Joab", "Uriah", "Jonathan"], correct: 1 },
            { q: "What did David bring back to Jerusalem with dancing?", a: ["The Golden Calf", "The Ark of the Covenant", "The Bronze Altar", "The Royal Treasury"], correct: 1 },
            { q: "How long did David reign over all Israel and Judah?", a: ["20 years", "33 years", "40 years", "50 years"], correct: 2 },
            { q: "Who cursed David as he fled from Absalom?", a: ["Shimei", "Ziba", "Ahithophel", "Mephibosheth"], correct: 0 }
        ]
    },
    {
        level: 11,
        name: "Jude",
        group: "Moderate",
        target: 10,
        timer: 12,
        bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        questions: [
            { q: "How many chapters does the book of Jude have?", a: ["1", "2", "5", "10"], correct: 0 },
            { q: "Jude identifies himself as the brother of whom?", a: ["Paul", "James", "Peter", "John"], correct: 1 },
            { q: "Which archangel argued with the devil over the body of Moses?", a: ["Gabriel", "Michael", "Raphael", "Uriel"], correct: 1 },
            { q: "What did the archangel say to the devil when disputing?", a: ["I destroy you", "The Lord rebuke you", "Leave this place", "You are bound"], correct: 1 },
            { q: "Jude warns against people who have gone the way of which brother?", a: ["Abel", "Cain", "Seth", "Lot"], correct: 1 },
            { q: "Which Old Testament prophet is quoted as saying 'See, the Lord is coming with thousands'?", a: ["Noah", "Enoch", "Abraham", "Moses"], correct: 1 },
            { q: "Jude warns about the error of which greedy prophet?", a: ["Balaam", "Balak", "Korah", "Jonah"], correct: 0 },
            { q: "Whose rebellion does Jude reference regarding destruction?", a: ["Korah", "Dathan", "Absalom", "Saul"], correct: 0 },
            { q: "What cities does Jude mention as examples of suffering eternal fire?", a: ["Jerusalem and Rome", "Sodom and Gomorrah", "Nineveh and Babylon", "Tyre and Sidon"], correct: 1 },
            { q: "The book of Jude ends with a famous prayer of praise called a what?", a: ["Psalm", "Doxology", "Proverb", "Lament"], correct: 1 }
        ]
    },

    // ==========================================
    // DIFFICULT BOOKS (20 Questions Each / Target: 20)
    // ==========================================
    {
        level: 12,
        name: "Revelation",
        group: "Difficult",
        target: 20,
        timer: 10,
        bg: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: [
            { q: "Who wrote the Book of Revelation?", a: ["Paul", "John", "Peter", "Luke"], correct: 1 },
            { q: "On which island was the author exiled when he received the visions?", a: ["Cyprus", "Patmos", "Malta", "Crete"], correct: 1 },
            { q: "How many churches were addressed at the beginning of Revelation?", a: ["3", "5", "7", "12"], correct: 2 },
            { q: "What color was the first horse in the opening of the seals?", a: ["Red", "Black", "Pale", "White"], correct: 3 },
            { q: "What did the rider of the black horse hold in his hand?", a: ["A bow", "A sword", "A pair of scales", "A crown"], correct: 2 },
            { q: "What was the name given to the rider of the pale horse?", a: ["Hades", "Death", "Famine", "War"], correct: 1 },
            { q: "How many elders sat around the heavenly throne?", a: ["4", "12", "24", "144"], correct: 2 },
            { q: "How many sealed individuals were marked from the tribes of Israel?", a: ["12,000", "24,000", "144,000", "1,000,000"], correct: 2 },
            { q: "What fell from heaven when the third trumpet sounded?", a: ["A mountain of fire", "A great burning star", "Hail and blood", "An angel"], correct: 1 },
            { q: "What was the name of the burning star that turned the waters bitter?", a: ["Absinthe", "Wormwood", "Lucifer", "Marah"], correct: 1 },
            { q: "Who led the heavenly angels in battle against the dragon?", a: ["Gabriel", "Michael", "Uriel", "The Author"], correct: 1 },
            { q: "How many heads did the dragon have?", a: ["1", "3", "7", "10"], correct: 2 },
            { q: "What is the number of the beast?", a: ["777", "616", "666", "999"], correct: 2 },
            { q: "Where will the final battle of the great day of God take place?", a: ["Megiddo / Armageddon", "Jerusalem", "Babylon", "Mount Sinai"], correct: 0 },
            { q: "How many golden bowls full of the wrath of God were poured out?", a: ["3", "7", "10", "12"], correct: 1 },
            { q: "What city is described as falling in a single hour?", a: ["Rome", "Jerusalem", "Babylon", "Nineveh"], correct: 2 },
            { q: "For how many years is the dragon bound in the abyss?", a: ["40", "100", "1,000", "10,000"], correct: 2 },
            { q: "What is the name of the book where the names of the saved are written?", a: ["Book of Deeds", "Book of Life", "Book of Law", "Book of Kings"], correct: 1 },
            { q: "How many gates does the New Jerusalem have?", a: ["4", "7", "12", "24"], correct: 2 },
            { q: "What is the very last word of the book of Revelation?", a: ["Hallelujah", "Amen", "Maranatha", "Forever"], correct: 1 }
        ]
    }
];
