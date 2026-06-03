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
            { q: "How many spies were sent to Canaan?", q_twi: "Akwansrafoɔ dodoɔ sɛn na wɔsomaa wɔn kɔɔ Kanaan?", a: ["2", "10", "12", "70"], correct: 2 },
            { q: "Which two spies gave a good report?", q_twi: "Akwansrafoɔ baanu bɛn na wɔde amanneɛbɔ pa baeɛ?", a: ["Moses", "Joshua & Caleb", "Aaron", "Korah"], correct: 1 },
            { q: "How long did Israel wander in the desert?", q_twi: "Mfiri dodoɔ sɛn na Israelfoɔ kyinii wɔ ɛserɛ so?", a: ["7 years", "12 years", "40 years", "50 years"], correct: 2 },
            { q: "Whose donkey spoke to him?", q_twi: "Hwan afunumu na ɔkasa kyerɛɛ no?", a: ["Moses", "Balaam", "Balak", "Joshua"], correct: 1 },
            { q: "What did Moses lift up to heal snake bites?", q_twi: "Dɛn na Mose maa so de saa bɔreka yareɛ?", a: ["A staff", "A Bronze Serpent", "A Sword", "An Altar"], correct: 1 }
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
            { q: "What does the name 'Deuteronomy' mean?", q_twi: "Dɛn ne 'Deuteronomium' aseɛ?", a: ["First Law", "Second Law", "History", "Prophecy"], correct: 1 },
            { q: "On which mountain did Moses die?", q_twi: "Bepo bɛn so na Mose wuiɛ?", a: ["Sinai", "Nebo", "Ararat", "Carmel"], correct: 1 },
            { q: "How old was Moses when he died?", q_twi: "Mfeɛ sɛn na Mose diiɛ ansa na ɔrewu?", a: ["80", "100", "120", "150"], correct: 2 },
            { q: "Who was chosen to lead Israel after Moses?", q_twi: "Hwan na wɔfaa no sɛ ɔnni Israel anim wɔ Mose akyi?", a: ["Caleb", "Aaron", "Joshua", "Eleazar"], correct: 2 },
            { q: "What is the core commandment repeated in this book?", q_twi: "Ahyɛdeɛ titiri bɛn na wɔtinn so bio wɔ nwoma yi mu?", a: ["Build a temple", "Love God with all your heart", "Go to war", "Fast weekly"], correct: 1 }
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
            { q: "Which city's walls fell after Israel marched around it?", q_twi: "Kurom bɛn afasuo na ɛhwee ase wɔ berɛ a Israel kyini ho?", a: ["Ai", "Jericho", "Gibeon", "Hebron"], correct: 1 },
            { q: "Who hid the Israeli spies in Jericho?", q_twi: "Hwan na ɔde akwansrafoɔ no siei wɔ Yeriko?", a: ["Deborah", "Rahab", "Ruth", "Delilah"], correct: 1 },
            { q: "What river did Israel cross on dry land to enter Canaan?", q_twi: "Asubɔnten bɛn na Israelfoɔ twaa so weee mu kɔɔ Kanaan?", a: ["Nile", "Euphrates", "Jordan", "Tigris"], correct: 2 },
            { q: "How many stones did they take from the Jordan as a memorial?", q_twi: "Aboɔ dodoɔ sɛn na wɔfa firii Yordan de yɛɛ nkaeɛdum?", a: ["3", "7", "12", "40"], correct: 2 },
            { q: "What did the sun do during Joshua's battle at Gibeon?", q_twi: "Dɛn na awia yɛɛ wɔ Yosua ko berɛ mu wɔ Gibeon?", a: ["Turned red", "Stood still", "Went dark", "Disappeared"], correct: 1 }
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
            { q: "Who was the extremely strong judge who fought the Philistines?", q_twi: "Hwan ne ɔtemmufoɔ dendenbren a ɔne Filistifoɔ koeɛ?", a: ["Gideon", "Samson", "Ehud", "Barak"], correct: 1 },
            { q: "Who was the only female judge mentioned?", q_twi: "Hwan ne ɔbaa temmufoɔ koro pɛ a wɔbɔɔ ne din?", a: ["Ruth", "Deborah", "Jael", "Hannah"], correct: 1 },
            { q: "What weapon did Gideon's army use along with trumpets?", q_twi: "Akodeɛ bɛn na Gideon dɔm de dii dwuma ka ntorobɛnto ho?", a: ["Swords", "Jars with torches", "Bows", "Spears"], correct: 1 },
            { q: "Who betrayed Samson to the Philistines?", q_twi: "Hwan na ɔyii Samson mae kyerɛɛ Filistifoɔ no?", a: ["Rahab", "Delilah", "Michal", "Jezebel"], correct: 1 },
            { q: "How many men were in Gideon's final chosen army?", q_twi: "Mmarima dodoɔ sɛn na na wɔwɔ Gideon dɔm a wɔfa wɔn twaka akyi?", a: ["300", "1,000", "10,000", "32,000"], correct: 0 }
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
            { q: "Who was Samuel's mother?", q_twi: "Hwan ne Samuel maame?", a: ["Peninnah", "Hannah", "Sarah", "Elizabeth"], correct: 1 },
            { q: "Who was the high priest who trained Samuel?", q_twi: "Hwan ne ɔsɔfopanyin a ɔtetee Samuel?", a: ["Aaron", "Eli", "Phinehas", "Zadok"], correct: 1 },
            { q: "Who was the first king anointed over Israel?", q_twi: "Hwan ne ɔhenkan a wɔsra nku guu ne ti so wɔ Israel?", a: ["David", "Saul", "Solomon", "Hezekiah"], correct: 1 },
            { q: "What giant did David defeat with a sling?", q_twi: "Kɔbrɛpanyin bɛn na Dawid de koraa tiri piraa no?", a: ["Og", "Goliath", "Sihon"], correct: 1 },
            { q: "Who was Saul's son and David's best friend?", q_twi: "Hwan ne Saulo ba a na ɔyɛ Dawid adamfo pa?", a: ["Jonathan", "Abner", "Absalom", "Ishbosheth"], correct: 0 },
            { q: "What did David play to soothe King Saul?", q_twi: "Dɛn nnwomteɛ na Dawid bɔ de dwoɔ Ɔhɛn Saulo kɔn?", a: ["Flute", "Harp", "Trumpet", "Cymbal"], correct: 1 },
            { q: "Where did David hide from Saul?", q_twi: "Ɛhe na Dawid kɔpue siei firii Saulo anim?", a: ["Caves of En Gedi", "Jericho", "Babylon", "Hebron"], correct: 0 },
            { q: "How did Saul die?", q_twi: "Ɔkwan bɛn so na Saulo wuiɛ?", a: ["In battle by arrows", "Fell on his own sword", "Old age", "Poison"], correct: 1 },
            { q: "What tribe was King Saul from?", q_twi: "Abusua bɛn mu na Ɔhɛn Saulo firieɛ?", a: ["Judah", "Benjamin", "Levi", "Ephraim"], correct: 1 },
            { q: "What did Samuel's mother bring him every year?", q_twi: "Dɛn na Samuel maame de brɛ no afe biara?", a: ["A new sword", "A little robe", "Gold coins", "Bread"], correct: 1 }
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
            { q: "Which city did David make his capital city?", q_twi: "Kuropɔn bɛn na Dawid yɛɛ no ne henekurom?", a: ["Hebron", "Jerusalem", "Samaria", "Gaza"], correct: 1 },
            { q: "Who was Jonathan's lame son whom David showed kindness to?", q_twi: "Hwan ne Yonatan ba apakye a Dawid kyerɛɛ no ayamyeɛ?", a: ["Mephibosheth", "Ishbosheth", "Absalom", "Adonijah"], correct: 0 },
            { q: "Who was the prophet that confronted David about his sin?", q_twi: "Hwan ne odiyifoɔ a ɔkasakyerɛɛ Dawid firi ne bɔne ho?", a: ["Samuel", "Nathan", "Elijah", "Elisha"], correct: 1 },
            { q: "Which of David's sons rebelled and tried to steal the kingdom?", q_twi: "Dawid mma mu hwan na ɔteew atua de pɛɛ henie no?", a: ["Solomon", "Absalom", "Amnon", "Adonijah"], correct: 1 },
            { q: "How did Absalom get caught during a battle in the forest?", q_twi: "Ɔkwan bɛn so na kyere kaa Absalom wɔ kwaem ko no mu?", a: ["Trapped in a cave", "His hair caught in an oak tree", "Fell off a cliff", "Captured by guards"], correct: 1 },
            { q: "Who was Bathsheba's husband whom David sent to the frontline?", q_twi: "Hwan ne Batseba kunu a Dawid de no kɔɔ koman kosi anim pɛɛ?", a: ["Joab", "Uriah", "Abner", "Benaiah"], correct: 1 },
            { q: "Who was the commander of David's army?", q_twi: "Hwan na na ɔyɛ Dawid dɔm mu safohene panyin?", a: ["Abner", "Joab", "Uriah", "Jonathan"], correct: 1 },
            { q: "What did David bring back to Jerusalem with dancing?", q_twi: "Dɛn na Dawid sa de gyee baa Yerusalem bio?", a: ["The Golden Calf", "The Ark of the Covenant", "The Bronze Altar", "The Royal Treasury"], correct: 1 },
            { q: "How long did David reign over all Israel and Judah?", q_twi: "Mfeɛ dodoɔ sɛn na Dawid dii hene wɔ Israel ne Yuda nyinaa so?", a: ["20 years", "33 years", "40 years", "50 years"], correct: 2 },
            { q: "Who cursed David as he fled from Absalom?", q_twi: "Hwan na ɔndwooo Dawid berɛ a na ɔredwane firi Absalom anim?", a: ["Shimei", "Ziba", "Ahithophel", "Mephibosheth"], correct: 0 }
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
            { q: "How many chapters does the book of Jude have?", q_twi: "Ti dodoɔ sɛn na ɛwɔ Yuda nwoma no mu?", a: ["1", "2", "5", "10"], correct: 0 },
            { q: "Jude identifies himself as the brother of whom?", q_twi: "Yuda de ne ho kyerɛɛ sɛ hwan nua?", a: ["Paul", "James", "Peter", "John"], correct: 1 },
            { q: "Which archangel argued with the devil over the body of Moses?", q_twi: "Ɔbɔfopanyin bɛn na ɔne ɔbonsam gyee akyinnyeɛ wɔ Mose amu ho?", a: ["Gabriel", "Michael", "Raphael", "Uriel"], correct: 1 },
            { q: "What did the archangel say to the devil when disputing?", q_twi: "Dɛn na bɔfopanyin no ka kyerɛɛ ɔbonsam wɔ akyinnyeɛ no mu?", a: ["I destroy you", "The Lord rebuke you", "Leave this place", "You are bound"], correct: 1 },
            { q: "Jude warns against people who have gone the way of which brother?", q_twi: "Yuda bɔ kɔkɔɔ firi nnipa a wɔfaɔ onua bɛn kwan so?", a: ["Abel", "Cain", "Seth", "Lot"], correct: 1 },
            { q: "Which Old Testament prophet is quoted as saying 'See, the Lord is coming with thousands'?", q_twi: "Apam Dada mu odiyifoɔ bɛn na wɔfaa ne kaseɛ sɛ 'Hwɛ, Awurade de mpempem reba'?", a: ["Noah", "Enoch", "Abraham", "Moses"], correct: 1 },
            { q: "Jude warns about the error of which greedy prophet?", q_twi: "Kɔkɔɔbɔ bɛn na ɛfa odiyifoɔ nnebɔnepɛfoɔ bɛn mfomsoɔ ho?", a: ["Balaam", "Balak", "Korah", "Jonah"], correct: 0 },
            { q: "Whose rebellion does Jude reference regarding destruction?", q_twi: "Hwan atuateɛ na Yuda bɔɔ afaseɔ firi ɔsɛeɛ ho?", a: ["Korah", "Dathan", "Absalom", "Saul"], correct: 0 },
            { q: "What cities does Jude mention as examples of suffering eternal fire?", q_twi: "Nkuropɔn bɛn na Yuda bɔɔ din sɛ ogya a ɛnnum nhwɛsoɔ?", a: ["Jerusalem and Rome", "Sodom and Gomorrah", "Nineveh and Babylon", "Tyre and Sidon"], correct: 1 },
            { q: "The book of Jude ends with a famous prayer of praise called a what?", q_twi: "Ɔkwan bɛn so na Yuda nwoma no de ayeyi mpaebɔ a agye din ba awieeɛ?", a: ["Psalm", "Doxology", "Proverb", "Lament"], correct: 1 }
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
            { q: "Who wrote the Book of Revelation?", q_twi: "Hwan na ɔtwerɛɛ Adiyisɛm nwoma no?", a: ["Paul", "John", "Peter", "Luke"], correct: 1 },
            { q: "On which island was the author exiled when he received the visions?", q_twi: "Supɔn bɛn so na wɔpam twerɛfoɔ no kɔeɛ berɛ a ɔnyaa anisoadehunu no?", a: ["Cyprus", "Patmos", "Malta", "Crete"], correct: 1 },
            { q: "How many churches were addressed at the beginning of Revelation?", q_twi: "Asɔre dodoɔ sɛn na wɔtwerɛ kyerɛɛ wɔn wɔ Adiyisɛm mfiaseɛ?", a: ["3", "5", "7", "12"], correct: 2 },
            { q: "What color was the first horse in the opening of the seals?", q_twi: "Ahosuo bɛn na na pɔnkɔ a odi kan no wɔ wɔ nsɔano bue mu?", a: ["Red", "Black", "Pale", "White"], correct: 3 },
            { q: "What did the rider of the black horse hold in his hand?", q_twi: "Dɛn na onipa a ɔte pɔnkɔ tuntum no kura wɔ ne nsam?", a: ["A bow", "A sword", "A pair of scales", "A crown"], correct: 2 },
            { q: "What was the name given to the rider of the pale horse?", q_twi: "Dɛn din na wɔde too ɔtefoɔ a ɔwɔ pɔnkɔ fitaa- fitaa no so?", a: ["Hades", "Death", "Famine", "War"], correct: 1 },
            { q: "How many elders sat around the heavenly throne?", q_twi: "Mpanimfoɔ dodoɔ sɛn na na wɔtete ahengwa ho wɔ soro?", a: ["4", "12", "24", "144"], correct: 2 },
            { q: "How many sealed individuals were marked from the tribes of Israel?", q_twi: "Nnipa dodoɔ sɛn na wɔasɔ wɔn ano firi Israel mmusuakuo mu?", a: ["12,000", "24,000", "144,000", "1,000,000"], correct: 2 },
            { q: "What fell from heaven when the third trumpet sounded?", q_twi: "Dɛn na ɛfiri soro hwee ase berɛ a tɔntɔ nnyegyeɛ a ɛtɔ so mmiɛnsa bɔeɛ?", a: ["A mountain of fire", "A great burning star", "Hail and blood", "An angel"], correct: 1 },
            { q: "What was the name of the burning star that turned the waters bitter?", q_twi: "Dɛn na nsoromma a ɛredɛw a ɛmaa nsuo yɛɛ nwono no din?", a: ["Absinthe", "Wormwood", "Lucifer", "Marah"], correct: 1 },
            { q: "Who led the heavenly angels in battle against the dragon?", q_twi: "Hwan na ɔdi anim maa soro abɔfoɔ ne ɔtweaseɛmfonini no koeɛ?", a: ["Gabriel", "Michael", "Uriel", "The Author"], correct: 1 },
            { q: "How many heads did the dragon have?", q_twi: "Ati dodoɔ sɛn na na ɔtweaseɛmfonini no kura?", a: ["1", "3", "7", "10"], correct: 2 },
            { q: "What is the number of the beast?", q_twi: "Dɛn ne aboa no dodoɔ namba?", a: ["777", "616", "666", "999"], correct: 2 },
            { q: "Where will the final battle of the great day of God take place?", q_twi: "Ɛhe na Onyankopɔn da kɛseɛ akokoakone firi nyinaa bɛkɔ so?", a: ["Megiddo / Armageddon", "Jerusalem", "Babylon", "Mount Sinai"], correct: 0 },
            { q: "How many golden bowls full of the wrath of God were poured out?", q_twi: "Sika kora dodoɔ sɛn a Onyankopɔn abufuo ahyɛ mu ma na wɔhwie gueɛ?", a: ["3", "7", "10", "12"], correct: 1 },
            { q: "What city is described as falling in a single hour?", q_twi: "Kuropɔn bɛn na wɔkyerɛɛ sɛ ɛhwee ase dɔnhwere pɛ mu?", a: ["Rome", "Jerusalem", "Babylon", "Nineveh"], correct: 2 },
            { q: "For how many years is the dragon bound in the abyss?", q_twi: "Mfeɛ dodoɔ sɛn na wɔde kyekyeree ɔtweaseɛmfonini no guu amoa donkudonku mu?", a: ["40", "100", "1,000", "10,000"], correct: 2 },
            { q: "What is the name of the book where the names of the saved are written?", q_twi: "Dɛn nwoma din na wɔatwerɛ nkwafoɔ nyinaa din gu mu?", a: ["Book of Deeds", "Book of Life", "Book of Law", "Book of Kings"], correct: 1 },
            { q: "How many gates does the New Jerusalem have?", q_twi: "Aponn dodoɔ sɛn na Yerusalem Foforɔ no kura?", a: ["4", "7", "12", "24"], correct: 2 },
            { q: "What is the very last word of the book of Revelation?", q_twi: "Dɛn ne asɛmfua pɛ a ɛdi deɛ ɛwɔ Adiyisɛm nwoma no awieeɛ pɛɛ?", a: ["Hallelujah", "Amen", "Maranatha", "Forever"], correct: 1 }
        ]
    }
];
