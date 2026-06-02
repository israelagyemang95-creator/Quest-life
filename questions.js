/**
 * Bible Quest - Comprehensive 200-Question Database
 * Tech Stack Architecture: JavaScript Array Object Matrix
 * Purpose: Game loop levels, question pools, and AI dynamic image bindings
 */

const quizDatabase = [
    // ==========================================
    // PHASE 1: FOUNDATION AND TRANSITION (Q1 - Q100)
    // ==========================================
    {
        level: 1, 
        name: "The Deep Jungle", 
        bgImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000",
        questions: [
            { q: "Who was the first man created?", a: ["Noah", "Adam", "Abraham", "Moses"], correct: 1 },
            { q: "What did Noah build to survive the flood?", a: ["A tower", "A castle", "An ark", "A temple"], correct: 2 },
            { q: "How many commandments did God give Moses?", a: ["5", "12", "7", "10"], correct: 3 },
            { q: "Who was swallowed by a great fish?", a: ["Jonah", "Peter", "Daniel", "Paul"], correct: 0 },
            { q: "Which book is the very first in the Bible?", a: ["Exodus", "Matthew", "Genesis", "Psalms"], correct: 2 },
            { q: "What giant did David defeat with a sling?", a: ["Saul", "Goliath", "Samson", "Absalom"], correct: 1 },
            { q: "How many disciples did Jesus choose?", a: ["10", "12", "15", "70"], correct: 1 },
            { q: "Who betrayed Jesus to the authorities?", a: ["John", "Peter", "Judas Iscariot", "Thomas"], correct: 2 }
        ]
    },
    {
        level: 2, 
        name: "The Ark Reached", 
        bgImage: "https://images.unsplash.com/photo-1590005354167-6da97870c913?q=80&w=1000",
        questions: [
            { q: "How many days and nights did it rain during Noah's flood?", a: ["7 days", "12 days", "40 days", "100 days"], correct: 2 },
            { q: "What did God use to make Eve?", a: ["Dust", "A rib", "A stone", "A breath"], correct: 1 },
            { q: "What was Jesus' earthly profession before His ministry?", a: ["Fisherman", "Carpenter", "Tentmaker", "Tax Collector"], correct: 1 },
            { q: "Through which sea did Moses lead the Israelites safely?", a: ["The Red Sea", "The Dead Sea", "The Mediterranean Sea", "The Caspian Sea"], correct: 0 },
            { q: "Who was thrown into the lions' den for praying?", a: ["Shadrach", "Elijah", "Daniel", "Jeremiah"], correct: 2 },
            { q: "What is the longest book in the Bible?", a: ["Genesis", "Isaiah", "Psalms", "Revelation"], correct: 2 },
            { q: "Who watched as baby Moses floated down the Nile?", a: ["His mother Jochebed", "His sister Miriam", "Pharaoh's wife", "Ruth"], correct: 1 },
            { q: "On what day of creation did God make humans?", a: ["Third day", "Fifth day", "Sixth day", "Seventh day"], correct: 2 }
        ]
    },
    {
        level: 3, 
        name: "Scorched Desert", 
        bgImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000",
        questions: [
            { q: "What food did God rain down on the Israelites in the desert?", a: ["Quail", "Manna", "Figs", "Bread loaves"], correct: 1 },
            { q: "Who was the oldest man recorded in the Bible, living 969 years?", a: ["Enoch", "Methuselah", "Noah", "Adam"], correct: 1 },
            { q: "What animal spoke to Balaam on his journey?", a: ["A donkey", "A camel", "A serpent", "A lion"], correct: 0 },
            { q: "Which city's walls collapsed after Israel marched around them?", a: ["Ai", "Jericho", "Jerusalem", "Babylon"], correct: 1 },
            { q: "What was the name of Abraham's promised son born to Sarah?", a: ["Ishmael", "Isaac", "Jacob", "Joseph"], correct: 1 },
            { q: "Who was taken up to heaven in a whirlwind and chariot of fire?", a: ["Moses", "Elisha", "Elijah", "Isaiah"], correct: 2 },
            { q: "What did Jacob give his favored son Joseph that sparked jealousy?", a: ["A golden ring", "A coat of many colors", "A flock of sheep", "A silver cup"], correct: 1 },
            { q: "How many brothers did Joseph have?", a: ["10", "11", "12", "7"], correct: 1 }
        ]
    },
    {
        level: 4, 
        name: "Valley of the Kings", 
        bgImage: "https://images.unsplash.com/photo-1608958416715-df72002f2070?q=80&w=1000",
        questions: [
            { q: "Who was the very first human king of Israel?", a: ["David", "Solomon", "Saul", "Rehaboam"], correct: 2 },
            { q: "Who anointed both Saul and David as kings?", a: ["Nathan", "Samuel", "Eli", "Elijah"], correct: 1 },
            { q: "What was Solomon known for having an exceptional amount of?", a: ["Strength", "Wisdom", "Chariots", "Territory"], correct: 1 },
            { q: "Which book comes immediately after the four Gospels in the New Testament?", a: ["Romans", "Acts of the Apostles", "Hebrews", "Revelation"], correct: 1 },
            { q: "On what island was the Apostle John exiled when he wrote Revelation?", a: ["Crete", "Malta", "Patmos", "Cyprus"], correct: 2 },
            { q: "What was the first miracle Jesus performed publicly?", a: ["Healing a blind man", "Turning water into wine", "Walking on water", "Raising Lazarus"], correct: 1 },
            { q: "How many people were saved aboard Noah's Ark?", a: ["2", "4", "8", "12"], correct: 2 },
            { q: "Who lost his immense physical strength when his hair was cut?", a: ["Gideon", "Samson", "Saul", "Absalom"], correct: 1 }
        ]
    },
    {
        level: 5, 
        name: "The Great Exile", 
        bgImage: "https://images.unsplash.com/photo-1447968954315-3f0c44f7313c?q=80&w=1000",
        questions: [
            { q: "Into what city were the people of Judah carried away captive?", a: ["Nineveh", "Babylon", "Alexandria", "Rome"], correct: 1 },
            { q: "Who interpreted King Nebuchadnezzar's mysterious dreams?", a: ["Ezekiel", "Jeremiah", "Daniel", "Nehemiah"], correct: 2 },
            { q: "Which brave queen risked her life to save her Jewish people from destruction?", a: ["Ruth", "Esther", "Jezebel", "Deborah"], correct: 1 },
            { q: "What was the hometown of Jesus where he grew up?", a: ["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"], correct: 2 },
            { q: "How did John the Baptist die?", a: ["Stoned to death", "Crucified", "Beheaded", "Old age in exile"], correct: 2 },
            { q: "Who was raised from the dead by Jesus after being in a tomb for four days?", a: ["Jairus' daughter", "Lazarus", "Tabitha", "Eutychus"], correct: 1 },
            { q: "Which apostle denied knowing Jesus three times before the rooster crowed?", a: ["Judas", "Peter", "Andrew", "Thomas"], correct: 1 },
            { q: "What language was the majority of the New Testament originally written in?", a: ["Hebrew", "Latin", "Aramaic", "Greek"], correct: 3 }
        ]
    },
    {
        level: 6, 
        name: "The Prophetic Wilderness", 
        bgImage: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1000",
        questions: [
            { q: "Which prophet ran away from God's call to preach in Nineveh?", a: ["Hosea", "Amos", "Jonah", "Micah"], correct: 2 },
            { q: "What was the name of Ruth's faithful mother-in-law?", a: ["Orpah", "Naomi", "Hannah", "Elisabeth"], correct: 1 },
            { q: "Who became the leader of Israel immediately after Moses died?", a: ["Caleb", "Joshua", "Aaron", "Eleazar"], correct: 1 },
            { q: "What did John the Baptist eat while preaching in the wilderness?", a: ["Manna and quail", "Wild grapes and figs", "Locusts and wild honey", "Barley loaves"], correct: 2 },
            { q: "Which book containing 150 poetic songs is split into five main sections?", a: ["Proverbs", "Ecclesiastes", "Song of Solomon", "Psalms"], correct: 3 },
            { q: "Who was the Roman governor who authorized the crucifixion of Jesus?", a: ["Herod Antipas", "Pontius Pilate", "Caesar Augustus", "Felix"], correct: 1 },
            { q: "What weapon did the boy David use to slay the champion Goliath?", a: ["A broadsword", "A heavy spear", "A sling and stone", "A bronze bow"], correct: 2 },
            { q: "How many plagues did God send upon the land of Egypt?", a: ["7", "10", "12", "40"], correct: 1 }
        ]
    },
    {
        level: 7, 
        name: "The Apostolic Road", 
        bgImage: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?q=80&w=1000",
        questions: [
            { q: "On what road did Saul experience his dramatic blinding encounter with Jesus?", a: ["Road to Jericho", "Road to Emmaus", "Road to Damascus", "The Via Dolorosa"], correct: 2 },
            { q: "Who was the very first Christian martyr, stoned to death while praying?", a: ["Stephen", "James", "Barnabas", "Philip"], correct: 0 },
            { q: "Which apostle doubted Jesus' resurrection until he saw the wounds?", a: ["Peter", "Thomas", "Nathanael", "Simon the Zealot"], correct: 1 },
            { q: "What was the name of the runaway slave Paul wrote a letter about to his master?", a: ["Onesimus", "Philemon", "Timothy", "Titus"], correct: 0 },
            { q: "What is the shortest book in the entire Old Testament?", a: ["Haggaí", "Malachi", "Obadiah", "Joel"], correct: 2 },
            { q: "What sign did God place in the clouds as a covenant never to flood the earth again?", a: ["A pillar of smoke", "A rainbow", "A bright star", "A golden halo"], correct: 1 },
            { q: "How many times did Israel march around Jericho on its final day before the walls fell?", a: ["Once", "Three times", "Seven times", "Twelve times"], correct: 2 },
            { q: "Which of the following books is NOT a Gospel account?", a: ["Matthew", "Mark", "Luke", "Hebrews"], correct: 3 }
        ]
    },
    {
        level: 8, 
        name: "The Tabernacle Courts", 
        bgImage: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1000",
        questions: [
            { q: "What item was kept inside the Holy of Holies in the Tabernacle?", a: ["The Golden Altar", "The Ark of the Covenant", "The Table of Showbread", "The Brazen Laver"], correct: 1 },
            { q: "Which tribe of Israel was set apart exclusively for priestly service?", a: ["Judah", "Ephraim", "Levi", "Benjamin"], correct: 2 },
            { q: "What was the first of the Ten Commandments given on Mount Sinai?", a: ["Honor your parents", "You shall not murder", "Have no other gods before Me", "Remember the Sabbath"], correct: 2 },
            { q: "How did God guide the Israelites through the wilderness during the night?", a: ["A map of stars", "A pillar of fire", "An angel's voice", "A glowing compass"], correct: 1 },
            { q: "Who was Isaac's wife, whom Eliezer found at the well?", a: ["Rachel", "Leah", "Rebekah", "Keturah"], correct: 2 },
            { q: "What did Moses strike to bring forth water for the thirsty Israelites?", a: ["The ground", "A rock", "An oak tree", "His own shield"], correct: 1 },
            { q: "Which city did Jesus die and rise again outside of?", a: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correct: 1 },
            { q: "What happened to the veil of the Temple when Jesus gave up His spirit?", a: ["It caught fire", "It turned gold", "It tore in two from top to bottom", "It disappeared completely"], correct: 2 }
        ]
    },
    {
        level: 9, 
        name: "Judges of Israel", 
        bgImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000",
        questions: [
            { q: "With how many men did Gideon defeat the massive Midianite army?", a: ["300 men", "10,000 men", "22,000 men", "1,200 men"], correct: 0 },
            { q: "Who was the only female judge of Israel recorded in the scriptures?", a: ["Ruth", "Deborah", "Jael", "Athaliah"], correct: 1 },
            { q: "What weapon did Samson use to slay 1,000 Philistines?", a: ["A bronze spear", "A jawbone of a donkey", "An iron broadsword", "A wooden club"], correct: 1 },
            { q: "Who was Jacob's firstborn son?", a: ["Joseph", "Judah", "Reuben", "Benjamin"], correct: 2 },
            { q: "What did the direct descendants of Jacob become known as?", a: ["The Babylonians", "The 12 Tribes of Israel", "The Edomites", "The Philistines"], correct: 1 },
            { q: "Which Gospel emphasizes Jesus as the eternal Word (Logos) became flesh?", a: ["Matthew", "Mark", "Luke", "John"], correct: 3 },
            { q: "Who was the mother of King Solomon?", a: ["Michal", "Bathsheba", "Abigail", "Maakah"], correct: 1 },
            { q: "What town was King David originally from?", a: ["Jerusalem", "Hebron", "Bethlehem", "Shiloh"], correct: 2 }
        ]
    },
    {
        level: 10, 
        name: "The Upper Room Arena", 
        bgImage: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1000",
        questions: [
            { q: "On what major festival day did the Holy Spirit descend as tongues of fire?", a: ["Passover", "Tabernacles", "Pentecost", "Purim"], correct: 2 },
            { q: "Who was chosen to replace Judas Iscariot as the twelfth apostle?", a: ["Matthias", "Barnabas", "Paul", "Silas"], correct: 0 },
            { q: "What was Paul's trade/occupation which he used to support his ministry?", a: ["Fisherman", "Tax Collector", "Tentmaker", "Physician"], correct: 2 },
            { q: "Which book of the New Testament contains an account of the early church's growth?", a: ["Galatians", "Acts", "Romans", "Titus"], correct: 1 },
            { q: "Who was the primary writer of the New Testament epistles/letters?", a: ["Peter", "John", "Paul", "Luke"], correct: 2 },
            { q: "What is the final word written in the text of the King James Bible?", a: ["Hallelujah", "Amen", "Forever", "God"], correct: 1 },
            { q: "How many books are there in the standard Protestant Old Testament?", a: ["27", "39", "46", "50"], correct: 1 },
            { q: "How many total books comprise the entire Protestant Bible?", a: ["66", "72", "80", "55"], correct: 0 }
        ]
    },
    {
        level: 11, 
        name: "The Patriarchal Fire", 
        bgImage: "https://images.unsplash.com/photo-1514894780887-121968d00567?q=80&w=1000",
        questions: [
            { q: "What was Abraham's original name before God changed it?", a: ["Abimelech", "Abram", "Abner", "Achan"], correct: 1 },
            { q: "What city did Abraham leave behind when God called him to Canaan?", a: ["Ur of the Chaldeans", "Harán", "Babylon", "Damascus"], correct: 0 },
            { q: "Who was Abraham's nephew who chose to live toward Sodom?", a: ["Lot", "Laban", "Esau", "Ishmael"], correct: 0 },
            { q: "What happened to Lot's wife when she looked back at Sodom?", a: ["She was struck by lightning", "She fell into a pit", "She became a pillar of salt", "She was turned to dust"], correct: 2 },
            { q: "How old was Abraham when his son Isaac was born?", a: ["75", "99", "100", "120"], correct: 2 },
            { q: "What animal did God provide as a substitute sacrifice for Isaac?", a: ["A spotless lamb", "A ram caught in a thicket", "A young bullock", "A dove"], correct: 1 },
            { q: "What were the names of Isaac and Rebekah's twin sons?", a: ["Jacob and Esau", "Ephraim and Manasseh", "Cain and Abel", "Perez and Zerah"], correct: 0 },
            { q: "Which twin sold his precious birthright for a bowl of red lentil stew?", a: ["Jacob", "Esau", "Pharez", "Manasseh"], correct: 1 }
        ]
    },
    {
        level: 12, 
        name: "The Dreamer's Ascent", 
        bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000",
        questions: [
            { q: "To what country was Joseph sold as a slave by his brothers?", a: ["Syria", "Assyria", "Egypt", "Babylon"], correct: 2 },
            { q: "Who was Joseph's master in Egypt before he was falsely imprisoned?", a: ["Potiphar", "Pharaoh", "Phicol", "Abimelech"], correct: 0 },
            { q: "Whose dream did Joseph interpret in prison that resulted in execution?", a: ["The Chief Cupbearer", "The Chief Baker", "The Palace Guard", "The Captain of the Host"], correct: 1 },
            { q: "What did Pharaoh's dream of 7 fat and 7 skinny cows represent?", a: ["Years of war and peace", "Years of plenty and famine", "Plagues of insects", "Generations of kings"], correct: 1 },
            { q: "What did Joseph name his firstborn son, meaning 'God has made me forget my trouble'?", a: ["Ephraim", "Manasseh", "Benjamin", "Gershom"], correct: 1 },
            { q: "Which brother offered himself as a hostage so Benjamin could return to Jacob?", a: ["Reuben", "Simeon", "Judah", "Levi"], correct: 2 },
            { q: "How many total people from Jacob's family migrated down to Egypt?", a: ["50", "70", "144", "600"], correct: 1 },
            { q: "In which Egyptian region did the Hebrews settle down?", a: ["Memphis", "Thebes", "Goshen", "Alexandria"], correct: 2 }
        ]
    },
    {
        level: 13, 
        name: "The Sinai Thunders", 
        bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
        questions: [
            { q: "What did Moses' staff turn into when he cast it before Pharaoh?", a: ["A branch", "A river of blood", "A serpent", "A locust"], correct: 2 },
            { q: "What was the very first plague brought upon the land of Egypt?", a: ["Frogs", "Lice", "Water turned to blood", "Darkness"], correct: 2 },
            { q: "What was the final, tenth plague that broke Pharaoh's resistance?", a: ["The locust storm", "Death of the firstborn", "Boils on skin", "Three days of darkness"], correct: 1 },
            { q: "What annual feast was established on the night of the final plague?", a: ["Feast of Tabernacles", "The Passover", "Feast of Weeks", "Day of Atonement"], correct: 1 },
            { q: "How old was Moses when he stood before Pharaoh demanding Israel's release?", a: ["40", "80", "120", "50"], correct: 1 },
            { q: "What false god did Aaron construct while Moses was up on Sinai?", a: ["A golden calf", "A bronze serpent", "An altar to Baal", "An Asherah pole"], correct: 0 },
            { q: "On what specific mountain did Moses die after looking at the Promised Land?", a: ["Mount Sinai", "Mount Horeb", "Mount Nebo", "Mount Carmel"], correct: 2 },
            { q: "How many years did Israel wander in the wilderness due to unbelief?", a: ["10", "25", "40", "70"], correct: 2 }
        ]
    },

    // ==========================================
    // PHASE 2: EXPERT LEVEL EXTREME (Q101 - Q200)
    // ==========================================
    {
        level: 14, 
        name: "The Obscure Chronicles [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000",
        questions: [
            { q: "Who is recorded as the grandson of the prophet Samuel?", a: ["Asaph", "Heman", "Ethan", "Jeduthun"], correct: 1 },
            { q: "Which king of Judah was struck with leprosy for trying to burn incense in the Temple?", a: ["Uzziah", "Hezekiah", "Josiah", "Ahaz"], correct: 0 },
            { q: "Who was the priest of Bethel who opposed the prophet Amos?", a: ["Amaziah", "Pashhur", "Hophni", "Zadok"], correct: 0 },
            { q: "Which wood was exclusively mandated to build the Ark of the Covenant?", a: ["Gopher wood", "Cedar of Lebanon", "Acacia wood", "Olive wood"], correct: 2 },
            { q: "What was the name of Aaron the High Priest's wife?", a: ["Elisheba", "Zipporah", "Milcah", "Cozbi"], correct: 0 },
            { q: "What was the specific physical height of Goliath according to 1 Samuel 17?", a: ["Five cubits and a span", "Six cubits and a span", "Four cubits and a palm", "Seven cubits"], correct: 1 },
            { q: "Who was the chief of King David's elite 'three mighty men'?", a: ["Benaiah", "Abishai", "Josheb-Basshebeth", "Asahel"], correct: 2 },
            { q: "Which king built two golden calves, placing one in Bethel and one in Dan?", a: ["Jeroboam I", "Rehaboam", "Ahab", "Jehu"], correct: 0 }
        ]
    },
    {
        level: 15, 
        name: "Whispers of the Prophets [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000",
        questions: [
            { q: "What alternative name did the prophet Nathan give to baby Solomon?", a: ["Jedidiah", "Lemuel", "Immanuel", "Shealtiel"], correct: 0 },
            { q: "Who would have absolutely nothing to do with the author of 3 John?", a: ["Gaius", "Diotrephes", "Demetrius", "Epaphras"], correct: 1 },
            { q: "In the book of Philemon, who is explicitly named as Paul's fellow prisoner?", a: ["Archippus", "Epaphras", "Demas", "Luke"], correct: 1 },
            { q: "Which wicked king of Israel had his blood licked by dogs in Naboth's vineyard?", a: ["Omri", "Ahab", "Jehoram", "Baasha"], correct: 1 },
            { q: "How many specific items were stored inside the Ark of the Covenant originally?", a: ["One", "Two", "Three", "Seven"], correct: 2 },
            { q: "Which prophet did King Hezekiah consult when the Assyrians targeted Jerusalem?", a: ["Micah", "Isaiah", "Jeremiah", "Zephaniah"], correct: 1 },
            { q: "What is the exact number of standard cubits long that Noah's Ark was engineered to be?", a: ["100 cubits", "300 cubits", "500 cubits", "150 cubits"], correct: 1 },
            { q: "How old was Joseph when his brothers sold him to the merchants?", a: ["12 years old", "17 years old", "30 years old", "20 years old"], correct: 1 }
        ]
    },
    {
        level: 16, 
        name: "The Levitical Blueprint [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
        questions: [
            { q: "What was the name of Moses' father-in-law, the priest of Midian?", a: ["Hobab", "Jethro", "Reuel", "Both Jethro and Reuel"], correct: 3 },
            { q: "How old was Moses when he stood before Pharaoh and said 'Let my people go'?", a: ["40 years old", "80 years old", "120 years old", "70 years old"], correct: 0 },
            { q: "Where exactly was Moses buried by God?", a: ["In a valley in Moab", "On top of Mount Sinai", "In the cave of Machpelah", "In the wilderness of Shur"], correct: 0 },
            { q: "How many days did the waters cover the earth during Noah's flood before receding?", a: ["40 days", "150 days", "365 days", "7 days"], correct: 1 },
            { q: "In which cave did David seek refuge while fleeing from the wrath of Saul?", a: ["Cave of Makkedah", "Cave of Machpelah", "Cave of Adullam", "Cave of En-gedi"], correct: 2 },
            { q: "Which city did Paul get stoned in during his first missionary trip?", a: ["Iconium", "Lystra", "Derbe", "Paphos"], correct: 1 },
            { q: "Where was the altar erected 'To the Unknown God' that Paul referenced?", a: ["Ephesus", "Corinth", "Athens", "Thessalonica"], correct: 2 },
            { q: "What was the total number of individuals in Israel who migrated down to Egypt?", a: ["70 people", "120 people", "600,000 people", "53 people"], correct: 0 }
        ]
    },
    {
        level: 17, 
        name: "Shadows of the Wilderness [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",
        questions: [
            { q: "How many days did Israel travel through the wilderness of Shur before finding water?", a: ["3 days", "5 days", "7 days", "12 days"], correct: 0 },
            { q: "Upon which specific mountain was Israel instructed to declare curses for disobedience?", a: ["Mount Moriah", "Mount Gerizim", "Mount Ebal", "Mount Zion"], correct: 2 },
            { q: "Which Assyrian monarch carried the northern ten tribes of Israel into captivity?", a: ["Tiglath-Pileser III", "Sennacherib", "Shalmaneser V", "Sargon II"], correct: 0 },
            { q: "Exactly how many years did Jeremiah prophesy that the Babylonian captivity would last?", a: ["49 years", "70 years", "100 years", "40 years"], correct: 1 },
            { q: "Which king of Israel holds the record for being the most wicked?", a: ["Ahab", "Manasseh", "Jeroboam", "Omri"], correct: 0 },
            { q: "What two kings disguised themselves before battle and were both slain by enemy archers?", a: ["Saul and David", "Ahab and Josiah", "Jehoram and Ahaziah", "Solomon and Rehoboam"], correct: 1 },
            { q: "Which Judean king was brutally executed by his own sons inside a temple?", a: ["Hezekiah", "Sennacherib", "Saddre", "Amon"], correct: 1 },
            { q: "Who was the mother of Solomon's successor, King Rehoboam?", a: ["Naamah the Ammonitess", "Bathsheba", "Maacah", "Michal"], correct: 0 }
        ]
    },
    {
        level: 18, 
        name: "The Silent Chronicles [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000",
        questions: [
            { q: "Who was the father of the prophet Isaiah?", a: ["Amoz", "Amos", "Hilkiah", "Baruch"], correct: 0 },
            { q: "Which book features the unique phrase 'Where there is no vision, the people perish'?", a: ["Isaiah", "Proverbs", "Ezekiel", "Amos"], correct: 1 },
            { q: "Which specific king of Israel was known for driving his chariot like a madman?", a: ["Jehu", "Joram", "Baasha", "Pekah"], correct: 0 },
            { q: "Who was the left-handed judge who assassinated Eglon, the fat king of Moab?", a: ["Ehud", "Othniel", "Shamgar", "Abdon"], correct: 0 },
            { q: "What was the name of the servant whose ear Peter sliced off at Gethsemane?", a: ["Malchus", "Marcus", "Mathias", "Melchizedek"], correct: 0 },
            { q: "Which minor prophet contains an explicit vision of a flying scroll?", a: ["Zechariah", "Haggai", "Malachi", "Habakkuk"], correct: 0 },
            { q: "How many distinct loops of blue cord were designed for the Tabernacle curtains?", a: ["50", "100", "40", "12"], correct: 0 },
            { q: "Who fell out of a third-story window during a late-night sermon by Paul?", a: ["Eutychus", "Trophimus", "Archippus", "Epaphras"], correct: 0 }
        ]
    },
    {
        level: 19, 
        name: "The Cryptic Testaments [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
        questions: [
            { q: "What was the name of the city that Nimrod built in the plain of Shinar?", a: ["Babel", "Nineveh", "Ur", "Sodom"], correct: 0 },
            { q: "Who was the third son born to Adam and Eve after Abel's murder?", a: ["Seth", "Enos", "Cainan", "Jared"], correct: 0 },
            { q: "Which king of Elam led the alliance that captured Lot in Genesis 14?", a: ["Chedorlaomer", "Amraphel", "Arioch", "Tidal"], correct: 0 },
            { q: "What was the name of the high priest who gave David the holy showbread?", a: ["Ahimelech", "Abiathar", "Zadok", "Ahithophel"], correct: 0 },
            { q: "Which individual was struck dead instantly for touching the Ark of the Covenant?", a: ["Uzzah", "Ahio", "Nadab", "Abihu"], correct: 0 },
            { q: "Who was the father of King Saul?", a: ["Kish", "Ner", "Abiel", "Zeror"], correct: 0 },
            { q: "What was the native home country of the prophet Elijah?", a: ["Gilead", "Tishbe in Gilead", "Anathoth", "Tekoa"], correct: 1 },
            { q: "Which prophet was a literal herdsman and a cultivator of sycamore figs?", a: ["Amos", "Hosea", "Micah", "Joel"], correct: 0 }
        ]
    },
    {
        level: 20, 
        name: "The Apostolic Firestorm [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1526726576990-1eac976cc036?q=80&w=1000",
        questions: [
            { q: "Who was the wealthy seller of purple goods from Thyatira converted by Paul?", a: ["Lydia", "Damaris", "Chloe", "Phoebe"], correct: 0 },
            { q: "What was the name of the island where Paul was shipwrecked on his way to Rome?", a: ["Malta", "Crete", "Cyprus", "Rhodes"], correct: 0 },
            { q: "Which sorcerer was struck blind by Paul for opposing the gospel at Paphos?", a: ["Elymas (Bar-Jesus)", "Simon Magus", "Sceva", "Demetrius"], correct: 0 },
            { q: "Who was the professional lawyer hired by the high priest to prosecute Paul?", a: ["Tertullus", "Festus", "Felix", "Lysias"], correct: 0 },
            { q: "Which unique book contains the explicit prophecy of Enoch regarding judgments?", a: ["Jude", "2 Peter", "Revelation", "2 Thessalonians"], correct: 0 },
            { q: "What was the name of the dynamic Alexandrian Jew who was eloquent and mighty in scriptures?", a: ["Apollos", "Aquila", "Silas", "Barnabas"], correct: 0 },
            { q: "Who was the grandfather of King David?", a: ["Obed", "Boaz", "Jesse", "Salmon"], correct: 0 },
            { q: "Which woman was raised back to life by Peter in Joppa?", a: ["Tabitha (Dorcas)", "Rhoda", "Lois", "Eunice"], correct: 0 }
        ]
    },
    {
        level: 21, 
        name: "The Apocalyptic Threshold [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000",
        questions: [
            { q: "What stone forms the very first foundational layer of the New Jerusalem wall?", a: ["Jasper", "Sapphire", "Chalcedony", "Emerald"], correct: 0 },
            { q: "Which tribe of Israel is completely omitted from the 144,000 listing in Revelation 7?", a: ["Dan", "Ephraim", "Manasseh", "Levi"], correct: 0 },
            { q: "What is the exact name of the star that fell on the third trumpet, turning waters bitter?", a: ["Wormwood", "Apollyon", "Abaddon", "Lucifer"], correct: 0 },
            { q: "How many wings did each of the four living creatures have in Revelation 4?", a: ["Six wings", "Four wings", "Two wings", "Eight wings"], correct: 0 },
            { q: "Who is named as the father of the dynamic security builder Nehemiah?", a: ["Hacaliah", "Seraiah", "Azariah", "Hilkiah"], correct: 0 },
            { q: "Which king of Judah was hiding in Samaria when he was killed by Jehu's men?", a: ["Ahaziah", "Jehoram", "Joash", "Amaziah"], correct: 0 },
            { q: "What was the real name of Esther before she assumed her Persian royal title?", a: ["Hadassah", "Vashti", "Atossa", "Milcah"], correct: 0 },
            { q: "Who was the grandfather of the prophet Zechariah?", a: ["Iddo", "Berechiah", "Meshullam", "Baruch"], correct: 0 }
        ]
    },
    {
        level: 22, 
        name: "The Sanctuary Vaults [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
        questions: [
            { q: "What was the name of the gate where Peter healed the lame man in Acts 3?", a: ["Beautiful Gate", "Golden Gate", "Sheep Gate", "East Gate"], correct: 0 },
            { q: "Which specific Roman ruler expelled every single Jew out of the city of Rome?", a: ["Claudius", "Nero", "Caligula", "Tiberius"], correct: 0 },
            { q: "What was the name of the first Christian convert in the entire region of Europe?", a: ["Lydia", "The Jailer", "Dionysius", "Damaris"], correct: 0 },
            { q: "Who was the father of the legendary builder Bezalel from the tribe of Judah?", a: ["Uri", "Hur", "Caleb", "Segub"], correct: 0 },
            { q: "How many individual silver sockets formed the foundations for the Tabernacle boards?", a: ["100 sockets", "96 sockets", "50 sockets", "40 sockets"], correct: 0 },
            { q: "Which king of Israel committed suicide by burning his own palace down around him?", a: ["Zimri", "Elah", "Shallum", "Tibni"], correct: 0 },
            { q: "Who was the father of the ultimate judge Samson?", a: ["Manoah", "Elkanah", "Jephthah", "Gideon"], correct: 0 },
            { q: "What is the shortest book in the entire New Testament based on word count?", a: ["3 John", "2 John", "Philemon", "Jude"], correct: 0 }
        ]
    },
    {
        level: 23, 
        name: "The Sovereign Decree [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
        questions: [
            { q: "Who was the mother of the prophet Samuel?", a: ["Hannah", "Peninnah", "Rachel", "Elisabeth"], correct: 0 },
            { q: "Which individual was targeted and swallowed up by the earth for rebelling against Moses?", a: ["Korah", "Dathan", "Abiram", "All of these"], correct: 3 },
            { q: "What was the name of the high priest who condemned Jesus during his midnight trial?", a: ["Caiaphas", "Annas", "Theophilus", "Ananias"], correct: 0 },
            { q: "Which book tells the detailed account of a talking donkey tracking an angel?", a: ["Numbers", "Deuteronomy", "Exodus", "Leviticus"], correct: 0 },
            { q: "What was the name of the city of refuge located in the territory of Reuben?", a: ["Bezer", "Ramoth", "Golan", "Hebron"], correct: 0 },
            { q: "Which king of Judah had his life extended by an extra 15 years through prayer?", a: ["Hezekiah", "Josiah", "Uzziah", "Jehoshaphat"], correct: 0 },
            { q: "Who was the scribe who wrote down the letters dictated by the prophet Jeremiah?", a: ["Baruch", "Seraiah", "Ebed-Melech", "Gedaliah"], correct: 0 },
            { q: "What parameter specifies the exact length of a single curtain of goat's hair?", a: ["30 cubits", "28 cubits", "40 cubits", "50 cubits"], correct: 0 }
        ]
    },
    {
        level: 24, 
        name: "The Ancient of Days [EXPERT]", 
        bgImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000",
        questions: [
            { q: "Which book outlines the detailed description of Ezekiel's chariot vision?", a: ["Ezekiel chapter 1", "Ezekiel chapter 10", "Ezekiel chapter 37", "Ezekiel chapter 40"], correct: 0 },
            { q: "Who was the father of the prophet Elisha?", a: ["Shaphat", "Abel", "Jehu", "Joram"], correct: 0 },
            { q: "What was the name of the king of Salem who brought out bread and wine to Abraham?", a: ["Melchizedek", "Abimelech", "Chedorlaomer", "Bera"], correct: 0 },
            { q: "Which pool did Jesus instruct the blind man to wash in to regain sight?", a: ["Pool of Siloam", "Pool of Bethesda", "Pool of Gihon", "Pool of Hezekiah"], correct: 0 },
            { q: "What was the specific trade occupation of the early Christian Luke?", a: ["Physician", "Tentmaker", "Tax Collector", "Fisherman"], correct: 0 },
            { q: "Which son of King David hung by his long hair from an oak tree branch?", a: ["Absalom", "Adonijah", "Amnon", "Solomon"], correct: 0 },
            { q: "Who was the high priest during the restoration under Zechariah?", a: ["Joshua", "Zadok", "Eliashib", "Joiada"], correct: 0 },
            { q: "What is the exact financial sum Judas received for betraying Jesus?", a: ["30 pieces of silver", "50 pieces of silver", "20 pieces of gold", "100 denarii"], correct: 0 }
        ]
    },
    {
        level: 25, 
        name: "The Promised Land Gate", 
        bgImage: "https://images.unsplash.com/photo-1472214222541-d510753a4707?q=80&w=1000",
        questions: [
            { q: "Who were the only two adult spies who trusted God and entered the Promised Land?", a: ["Joshua and Caleb", "Moses and Aaron", "Gideon and Samson", "Elijah and Elisha"], correct: 0 },
            { q: "What river did the Israelites cross on dry ground to enter Canaan?", a: ["The Jordan River", "The Nile River", "The Euphrates River", "The Tigris River"], correct: 0 },
            { q: "What stone was the final foundation layer of the New Jerusalem?", a: ["Amethyst", "Jasper", "Emerald", "Chrysolite"], correct: 0 },
            { q: "What parameter specifies the structural width of the Holy of Holies temple core?", a: ["20 cubits", "10 cubits", "30 cubits", "40 cubits"], correct: 0 },
            { q: "Who was the father of the non-Jewish king Cyrus of Persia?", a: ["Cambyses", "Darius", "Xerxes", "Artaxerxes"], correct: 0 },
            { q: "Which individual was the father of the prophet Zephaniah?", a: ["Cushi", "Gedaliah", "Amariah", "Hezekiah"], correct: 0 },
            { q: "What was the name of the island where Paul was bitten by a viper but suffered no harm?", a: ["Malta", "Cyprus", "Crete", "Patmos"], correct: 0 },
            { q: "What was the ultimate statement made by Jesus on the cross before he died?", a: ["It is finished", "Eloi Eloi lama sabachthani", "Father forgive them", "Into your hands I commit my spirit"], correct: 0 }
        ]
    }
];
