// 100 BIBLE QUESTIONS DIVIDED INTO 25 PROGRESSIVE LEVELS
const quizDatabase = [
    {
        level: 1, name: "The Deep Jungle", style: "world-jungle",
        questions: [
            { q: "Who was the first man created?", a: ["Noah", "Adam", "Abraham", "Moses"], correct: 1 },
            { q: "What did Noah build to survive the flood?", a: ["A tower", "A castle", "An ark", "A temple"], correct: 2 },
            { q: "How many commandments did God give Moses?", a: ["5", "12", "7", "10"], correct: 3 },
            { q: "Who was swallowed by a great fish?", a: ["Jonah", "Peter", "Daniel", "Paul"], correct: 0 }
        ]
    },
    {
        level: 2, name: "The Deep Jungle", style: "world-jungle",
        questions: [
            { q: "What giant did David defeat with a sling?", a: ["Saul", "Goliath", "Samson", "Absalom"], correct: 1 },
            { q: "Which book is the very first in the Bible?", a: ["Exodus", "Matthew", "Genesis", "Psalms"], correct: 2 },
            { q: "How many days and nights did it rain during Noah's flood?", a: ["7 days", "12 days", "40 days", "100 days"], correct: 2 },
            { q: "What did God use to make Eve?", a: ["Dust", "A rib", "A stone", "A breath"], correct: 1 }
        ]
    },
    {
        level: 3, name: "Scorched Desert", style: "world-desert",
        questions: [
            { q: "What was Jesus' earthly profession before His ministry?", a: ["Fisherman", "Carpenter", "Tentmaker", "Tax Collector"], correct: 1 },
            { q: "Through which sea did Moses lead the Israelites safely?", a: ["The Red Sea", "The Dead Sea", "The Mediterranean Sea", "The Caspian Sea"], correct: 0 },
            { q: "Who was thrown into the lions' den for praying?", a: ["Shadrach", "Elijah", "Daniel", "Jeremiah"], correct: 2 },
            { q: "How many disciples did Jesus choose?", a: ["10", "12", "15", "70"], correct: 1 }
        ]
    },
    {
        level: 4, name: "Scorched Desert", style: "world-desert",
        questions: [
            { q: "What did Judas receive for betraying Jesus?", a: ["A crown of gold", "An estate", "30 pieces of silver", "A purple robe"], correct: 2 },
            { q: "Who received a coat of many colors from his father?", a: ["Benjamin", "Joseph", "David", "Solomon"], correct: 1 },
            { q: "Which New Testament book contains many letters written by Paul?", a: ["Acts", "Revelation", "Romans", "John"], correct: 2 },
            { q: "Who was Jesus' mother?", a: ["Martha", "Elisabeth", "Mary", "Ruth"], correct: 2 }
        ]
    },
    {
        level: 5, name: "Crystal Caves", style: "world-cave",
        questions: [
            { q: "What is the longest book in the Bible?", a: ["Isaiah", "Genesis", "Chronicles", "Psalms"], correct: 3 },
            { q: "On what island was John when he wrote Revelation?", a: ["Cyprus", "Patmos", "Malta", "Crete"], correct: 1 },
            { q: "Who was the oldest man recorded in the Bible?", a: ["Methuselah", "Enoch", "Noah", "Adam"], correct: 0 },
            { q: "Which king asked God for wisdom instead of long life?", a: ["David", "Saul", "Solomon", "Hezekiah"], correct: 2 }
        ]
    },
    {
        level: 6, name: "Crystal Caves", style: "world-cave",
        questions: [
            { q: "What was the original name of the Apostle Paul?", a: ["Saul", "Silas", "Simon", "Stephen"], correct: 0 },
            { q: "In what town was Jesus born?", a: ["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correct: 2 },
            { q: "What food did God provide daily for the Israelites in the wilderness?", a: ["Quail", "Manna", "Honey", "Bread loaves"], correct: 1 },
            { q: "Who was Samson’s down-fall after she cut his hair?", a: ["Delilah", "Ruth", "Jezebel", "Esther"], correct: 0 }
        ]
    },
    {
        level: 7, name: "Frozen Tundra", style: "world-ice",
        questions: [
            { q: "What is the collective name for the first four books of the New Testament?", a: ["The Epistles", "The Law", "The Gospels", "The Prophets"], correct: 2 },
            { q: "Who did God command to sacrifice his only son Isaac?", a: ["Jacob", "Abraham", "Isaac", "Lot"], correct: 1 },
            { q: "Which brother did Jacob trick to get his birthright?", a: ["Joseph", "Reuben", "Esau", "Levi"], correct: 2 },
            { q: "What instrument did David play to soothe King Saul?", a: ["Flute", "Harp", "Trumpet", "Lyre"], correct: 1 }
        ]
    },
    {
        level: 8, name: "Frozen Tundra", style: "world-ice",
        questions: [
            { q: "Who was Jesus' cousin who baptized Him?", a: ["John the Baptist", "James", "Peter", "Andrew"], correct: 0 },
            { q: "What miracle did Jesus perform at the wedding in Cana?", a: ["Healed a blind man", "Turned water into wine", "Walked on water", "Multiplied loaves"], correct: 1 },
            { q: "What did God use to lead the Israelites by night in the desert?", a: ["A star", "A map", "A pillar of fire", "A glowing cloud"], correct: 2 },
            { q: "Who was the female judge of Israel mentioned in the Old Testament?", a: ["Ruth", "Deborah", "Hannah", "Miriam"], correct: 1 }
        ]
    },
    {
        level: 9, name: "Volcanic Peak", style: "world-desert", // Re-using desert colors for volcano focus
        questions: [
            { q: "What was the first miracle Moses performed before Pharaoh?", a: ["Water to blood", "Plague of frogs", "Staff turned into a snake", "Darkness"], correct: 2 },
            { q: "How many books are there in the entire Bible?", a: ["55", "66", "77", "88"], correct: 1 },
            { q: "Who was raised from the dead by Jesus after being in the tomb 4 days?", a: ["Lazarus", "Jairus' daughter", "Tabitha", "Eutychus"], correct: 0 },
            { q: "What was the name of the tower where God confused languages?", a: ["Babylon", "Babel", "Jericho", "Bethel"], correct: 1 }
        ]
    },
    {
        level: 10, name: "Volcanic Peak", style: "world-desert",
        questions: [
            { q: "Which prophet was taken up to heaven in a whirlwind and chariot of fire?", a: ["Elisha", "Isaiah", "Elijah", "Ezekiel"], correct: 2 },
            { q: "Who was exiled to the island of Patmos?", a: ["Paul", "Peter", "John", "Luke"], correct: 2 },
            { q: "What did John the Baptist eat while in the wilderness?", a: ["Manna & Quail", "Wild berries & Roots", "Locusts & Wild honey", "Bread & Water"], correct: 2 },
            { q: "Which city's walls crumbled after the Israelites marched around it?", a: ["Ai", "Sodom", "Jericho", "Nineveh"], correct: 2 }
        ]
    },
    {
        level: 11, name: "Star Realm", style: "world-cave", // Deep space dark themes
        questions: [
            { q: "What did Zacchaeus climb to see Jesus?", a: ["An olive tree", "A sycamore tree", "A city wall", "A rooftop"], correct: 1 },
            { q: "Who was the first Christian martyr stoned to death?", a: ["Stephen", "Philip", "Barnabas", "Matthias"], correct: 0 },
            { q: "What did God make on the very first day of creation?", a: ["The sun", "Plants", "Animals", "Light"], correct: 3 },
            { q: "Who wrote the majority of the Psalms?", a: ["Solomon", "David", "Moses", "Asaph"], correct: 1 }
        ]
    },
    {
        level: 12, name: "Star Realm", style: "world-cave",
        questions: [
            { q: "How did the Apostle Paul escape Damascus when people wanted to capture him?", a: ["In a boat", "In a basket over a wall", "Disguised as a guard", "Through a tunnel"], correct: 1 },
            { q: "Who was Ruth's mother-in-law?", a: ["Orpah", "Naomi", "Hannah", "Elisabeth"], correct: 1 },
            { q: "What animal spoke to Balaam?", a: ["A donkey", "A snake", "A camel", "A lion"], correct: 0 },
            { q: "Which tribe of Israel served as the priests?", a: ["Judah", "Benjamin", "Levi", "Reuben"], correct: 2 }
        ]
    },
    {
        level: 13, name: "Ancient Ruins", style: "world-jungle",
        questions: [
            { q: "Who was Abraham’s first son?", a: ["Isaac", "Ishmael", "Jacob", "Esau"], correct: 1 },
            { q: "What was the name of the city Jonah was sent to warn?", a: ["Tarshish", "Nineveh", "Babylon", "Tyre"], correct: 1 },
            { q: "How many times did Peter deny Jesus before the rooster crowed?", a: ["One time", "Two times", "Three times", "Four times"], correct: 2 },
            { q: "Who was the first king of Israel?", a: ["David", "Saul", "Solomon", "Hezekiah"], correct: 1 }
        ]
    },
    {
        level: 14, name: "Ancient Ruins", style: "world-jungle",
        questions: [
            { q: "Which book of the Bible contains the story of the golden calf?", a: ["Genesis", "Exodus", "Leviticus", "Numbers"], correct: 1 },
            { q: "Who was married to King Ahab and sought to destroy Elijah?", a: ["Athaliah", "Jezebel", "Delilah", "Herodias"], correct: 1 },
            { q: "What was Jesus' first recorded statement on the cross?", a: ["I thirst", "It is finished", "Father, forgive them", "Into your hands"], correct: 2 },
            { q: "Who was Moses' sister?", a: ["Miriam", "Ruth", "Esther", "Rachel"], correct: 0 }
        ]
    },
    {
        level: 15, name: "The Gold Valley", style: "world-desert",
        questions: [
            { q: "Who was the master artisan chosen by God to build the Tabernacle?", a: ["Bezalel", "Hiram", "Solomon", "Aaron"], correct: 0 },
            { q: "What did Jacob dream about at Bethel?", a: ["A chariot of fire", "A ladder to heaven", "Seven thin cows", "A burning bush"], correct: 1 },
            { q: "Which gospel was written by a doctor?", a: ["Matthew", "Mark", "Luke", "John"], correct: 2 },
            { q: "How many people were saved on Noah's Ark?", a: ["2", "4", "8", "12"], correct: 2 }
        ]
    },
    {
        level: 16, name: "The Gold Valley", style: "world-desert",
        questions: [
            { q: "What is the last word in the Bible?", a: ["Hallelujah", "Amen", "Forever", "Christ"], correct: 1 },
            { q: "Who was the high priest that tried Jesus?", a: ["Annas", "Caiaphas", "Melchizedek", "Eli"], correct: 1 },
            { q: "What did God promise Abraham his descendants would outnumber?", a: ["The sand & stars", "The trees in the forest", "The birds of the air", "The fish of the sea"], correct: 0 },
            { q: "Which prophet interpreted King Nebuchadnezzar's dreams?", a: ["Ezekiel", "Jeremiah", "Daniel", "Amos"], correct: 2 }
        ]
    },
    {
        level: 17, name: "Shadow Fortress", style: "world-cave",
        questions: [
            { q: "Who was Timothy's grandmother known for her faith?", a: ["Lois", "Eunice", "Priscilla", "Lydia"], correct: 0 },
            { q: "What city did Abraham intercede for before its destruction?", a: ["Nineveh", "Sodom", "Jericho", "Tyre"], correct: 1 },
            { q: "What was the name of the garden where Jesus prayed before his arrest?", a: ["Eden", "Gethsemane", "Calvary", "Olives"], correct: 1 },
            { q: "Who was the youngest king of Judah, starting at age 7?", a: ["Josiah", "Joash", "Manasseh", "Hezekiah"], correct: 1 }
        ]
    },
    {
        level: 18, name: "Shadow Fortress", style: "world-cave",
        questions: [
            { q: "Which book follows the Gospel of John?", a: ["Romans", "Acts", "Galatians", "Corinthians"], correct: 1 },
            { q: "Who was Moses’ wife?", a: ["Zipporah", "Leah", "Rachel", "Michal"], correct: 0 },
            { q: "What dynamic weapon did God use to scatter the army attacking Joshua at Gibeon?", a: ["Lightning", "Fire from earth", "Large hailstones", "An earthquake"], correct: 2 },
            { q: "How many streams of water did Gideon's men drink from during their test?", a: ["One", "Two", "Three", "None"], correct: 0 }
        ]
    },
    {
        level: 19, name: "Neon Citadels", style: "world-ice",
        questions: [
            { q: "What piece of clothing did John the Baptist wear?", a: ["Fine linen", "Camel's hair", "Purple robes", "Sheepskin jacket"], correct: 1 },
            { q: "Who was David's best friend, the son of King Saul?", a: ["Jonathan", "Abner", "Absalom", "Solomon"], correct: 0 },
            { q: "What was the new name God gave to Jacob?", a: ["Abraham", "Israel", "Isaac", "Joseph"], correct: 1 },
            { q: "How many years did the Israelites wander in the wilderness?", a: ["10 years", "40 years", "70 years", "100 years"], correct: 1 }
        ]
    },
    {
        level: 20, name: "Neon Citadels", style: "world-ice",
        questions: [
            { q: "What was the name of the pool where Jesus healed a blind man?", a: ["Bethesda", "Siloam", "Jordan", "Merom"], correct: 1 },
            { q: "Who was the left-handed judge who killed King Eglon?", a: ["Ehud", "Othniel", "Shamgar", "Gideon"], correct: 0 },
            { q: "Which book contains the verse: 'The Lord is my shepherd; I shall not want'?", a: ["Proverbs", "Isaiah", "Psalms", "Ecclesiastes"], correct: 2 },
            { q: "Who was the husband of Queen Esther?", a: ["Artaxerxes", "Cyrus", "Ahasuerus (Xerxes)", "Darius"], correct: 2 }
        ]
    },
    {
        level: 21, name: "The Mount of Olives", style: "world-jungle",
        questions: [
            { q: "Which New Testament book is written entirely about a runaway slave?", a: ["Titus", "Philemon", "Galatians", "Jude"], correct: 1 },
            { q: "What did Elisha make float in the Jordan River?", a: ["An iron ax head", "A wooden log", "A heavy stone", "A piece of iron armor"], correct: 0 },
            { q: "Who was the father of King David?", a: ["Saul", "Jesse", "Samuel", "Boaz"], correct: 1 },
            { q: "What did Peter find in the mouth of a fish to pay taxes?", a: ["A gold ring", "A piece of silver", "A four-drachma coin", "A pearl"], correct: 2 }
        ]
    },
    {
        level: 22, name: "The Mount of Olives", style: "world-jungle",
        questions: [
            { q: "Who was the tentmaker couple Paul worked with in Corinth?", a: ["Ananias & Sapphira", "Aquila & Priscilla", "Felix & Drusilla", "Elkanah & Hannah"], correct: 1 },
            { q: "What did the high priest Aaron make out of melted gold jewelry?", a: ["A crown", "An altar", "A calf statue", "A golden ark model"], correct: 2 },
            { q: "Which book explicitly mentions the 'Fruit of the Spirit'?", a: ["Ephesians", "Galatians", "Colossians", "Philippians"], correct: 1 },
            { q: "Who was the king who built the first temple in Jerusalem?", a: ["David", "Solomon", "Hezekiah", "Josiah"], correct: 1 }
        ]
    },
    {
        level: 23, name: "The Sanctuary", style: "world-desert",
        questions: [
            { q: "What was the city where believers were first called 'Christians'?", a: ["Jerusalem", "Antioch", "Rome", "Ephesus"], correct: 1 },
            { q: "Who was the mother of Samuel?", a: ["Rachel", "Hannah", "Peninnah", "Elizabeth"], correct: 1 },
            { q: "What animal did God provide as a substitute sacrifice for Isaac?", a: ["A lamb", "A ram", "A bull", "A dove"], correct: 1 },
            { q: "How many stones did David pick up from the stream before fighting Goliath?", a: ["1", "3", "5", "7"], correct: 2 }
        ]
    },
    {
        level: 24, name: "The Sanctuary", style: "world-desert",
        questions: [
            { q: "Who was the Roman governor that sentenced Jesus to be crucified?", a: ["Herod", "Felix", "Pontius Pilate", "Agrippa"], correct: 2 },
            { q: "Which prophet ran a race against chariots and won by God’s power?", a: ["Elisha", "Elijah", "Isaiah", "Jeremiah"], correct: 1 },
            { q: "What did God give to the dynamic duo Joshua and Caleb because they trusted Him?", a: ["Gold crowns", "Land inheritance", "Chariots", "Priest positions"], correct: 1 },
            { q: "What did Jesus say is the greatest commandment?", a: ["Do not steal", "Love God with all your heart", "Honor your parents", "Love your neighbor"], correct: 1 }
        ]
    },
    {
        level: 25, name: "The Promised Land", style: "world-cave",
        questions: [
            { q: "What was the name of the place where Jesus was crucified?", a: ["Gethsemane", "Golgotha (Calvary)", "Bethel", "Sion"], correct: 1 },
            { q: "Which Old Testament book does not mention God explicitly by name?", a: ["Song of Solomon", "Ruth", "Esther", "Lamentations"], correct: 2 },
            { q: "Who was chosen by lot to replace Judas Iscariot as an apostle?", a: ["Matthias", "Barnabas", "Justus", "Silas"], correct: 0 },
            { q: "What is the final word spoken in the Old Testament?", a: ["Amen", "Curse", "Lord", "Prophet"], correct: 1 }
        ]
    }
];
