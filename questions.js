<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bible Quest Blitz</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        #bg-overlay { position: fixed; inset: 0; background-color: #0f172a; background-size: cover; background-position: center; transition: background-image 1s ease-in-out; z-index: 0; }
        #bg-tint { position: fixed; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.8)); z-index: 1; }
        body { min-height: 100vh; background: #0f172a; color: white; font-family: sans-serif; overflow-x: hidden; }
        .quiz-card { background: rgba(255, 255, 255, 0.95); border-radius: 20px; color: #1e293b; position: relative; z-index: 10; }
        .btn-opt { width: 100%; text-align: left; padding: 1rem; border-radius: 12px; border: 1px solid #e2e8f0; background: white; font-weight: bold; transition: all 0.2s; display: flex; justify-content: space-between; align-items: center; }
        .timer-danger { color: #ef4444 !important; animation: vibrate 0.2s linear infinite; }
        @keyframes vibrate { 0%, 100% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } }
        #level-up-splash { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.95); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 100; opacity: 0; pointer-events: none; transition: all 0.5s; }
        #level-up-splash.active { opacity: 1; pointer-events: auto; }
    </style>
</head>
<body class="p-4 flex flex-col items-center">
    <div id="bg-overlay"></div>
    <div id="bg-tint"></div>

    <div id="level-up-splash">
        <div class="bg-gradient-to-b from-indigo-600 to-indigo-900 p-8 rounded-3xl text-center shadow-2xl max-w-sm w-11/12 border border-white/20">
            <div class="text-6xl mb-2">✨🏆</div>
            <h1 class="text-4xl font-black text-amber-400 uppercase">Level Up!</h1>
            <p id="next-world-txt" class="text-white font-bold mt-4"></p>
        </div>
    </div>

    <div class="fixed top-4 left-4 right-4 flex justify-between z-50">
        <button onclick="toggleLanguage()" class="bg-indigo-600 text-white px-4 py-2 rounded-full font-bold shadow-lg text-sm border border-white/20">
            🌐 <span id="lang-label">English</span>
        </button>
        <button onclick="toggleMusic()" id="music-btn" class="bg-slate-900/80 backdrop-blur p-3 h-11 w-11 rounded-full text-lg border border-white/10 flex items-center justify-center shadow-lg active:scale-95 transition-all">🔇</button>
    </div>

    <div id="game-content" class="w-full max-w-md space-y-6 mt-16 relative z-10">
        <div class="quiz-card p-6 shadow-2xl">
            <h1 id="world-title" class="text-xs font-black uppercase tracking-widest mb-3 text-indigo-600 text-center">INITIALIZING...</h1>
            <div class="flex justify-between items-center mb-4">
                <div id="lvl-badge" class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-black">1</div>
                <div class="flex flex-col items-center">
                    <span id="timer-clock" class="text-3xl font-black text-slate-700">10</span>
                </div>
                <div class="text-right">
                    <p class="text-xl font-black text-slate-800">💰 <span id="gold-val">0</span></p>
                </div>
            </div>
            <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div id="xp-bar" class="h-full bg-green-500 transition-all duration-500" style="width: 0%"></div>
            </div>
        </div>

        <div id="quiz-container" class="space-y-4"></div>
        <button onclick="triggerReset()" class="w-full text-center text-xs text-white/30 mt-10 uppercase tracking-widest block bg-slate-900/40 py-2 rounded-xl border border-white/5">Tap Here to Hard Reset Data</button>
    </div>

    <script>
        // 1. EMBEDDED DATABASE (Eliminates file loading lag)
        const quizDatabase = [
          {
            level: 1,
            name: "Genesis: Early Earth",
            bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
            questions: [
              { q: "Who was the first man?", q_twi: "Hwan ne onipa a odi kan?", a: ["Noah", "Adam", "Seth", "Abel"], a_twi: ["Noa", "Adam", "Set", "Abel"], correct: 1 },
              { q: "What was the first thing God created?", q_twi: "Dɛn ne adeɛ a Onyankopɔn bɔɔ no mfiaseɛ?", a: ["Animals", "Light", "Humans", "Trees"], a_twi: ["Mmoa", "Hann", "Nnipa", "Nnua"], correct: 1 },
              { q: "Who built the Ark?", q_twi: "Hwan na ɔyɛɛ Adaka no?", a: ["Moses", "Abraham", "Noah", "David"], a_twi: ["Mose", "Abraham", "Noa", "Dawid"], correct: 2 },
              { q: "Who was Adam's wife?", q_twi: "Hwan ne Adam yere?", a: ["Sarah", "Eve", "Ruth", "Esther"], a_twi: ["Sara", "Hawa", "Rut", "Ester"], correct: 1 },
              { q: "Which brother killed Abel?", q_twi: "Onua bɛn na okum Abel?", a: ["Seth", "Cain", "Jacob", "Esau"], a_twi: ["Set", "Kain", "Yakobo", "Esau"], correct: 1 },
              { q: "How many days did God take to create the world?", q_twi: "Nna dodoɔ sɛn na Onyankopɔn de bɔɔ wiase?", a: ["6", "7", "10", "40"], a_twi: ["6", "7", "10", "40"], correct: 0 },
              { q: "What did God do on the 7th day?", q_twi: "Dɛn na Onyankopɔn yɛɛ no da a ɛtɔ so nson?", a: ["Created Sun", "He rested", "Created Rain", "He sang"], a_twi: ["Ɔbɔɔ awia", "Ɔhomee", "Ɔtɔɔ nsuo", "Ɔtoo dwom"], correct: 1 },
              { q: "What fruit did Eve eat?", q_twi: "Aba bɛn na Hawa die?", a: ["Banana", "Forbidden Fruit", "Grape", "Orange"], a_twi: ["Kwadu", "Aba a wɔabra", "Bobe", "Akutu"], correct: 1 },
              { q: "Who was the oldest man in the Bible?", q_twi: "Hwan ne onipa a ɔkyɛɛ paa wɔ Bible mu?", a: ["Enoch", "Methuselah", "Noah", "Adam"], a_twi: ["Enok", "Metusela", "Noa", "Adam"], correct: 1 },
              { q: "What was the sign of God's promise to Noah?", q_twi: "Dɛn ne Onyankopɔn bɔhyɛ sɛnkyerɛnne kyerɛɛ Noa?", a: ["Fire", "A Rainbow", "A Star", "A Dove"], a_twi: ["Ogya", "Nyankontɔn", "Nsoroma", "Aburuburo"], correct: 1 }
            ]
          },
          {
            level: 2,
            name: "The Patriarchs",
            bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
            questions: [
              { q: "Who is known as the Father of many nations?", q_twi: "Hwan na wɔfrɛ no aman dodoɔ agya?", a: ["Isaac", "Jacob", "Abraham", "Lot"], a_twi: ["Isak", "Yakobo", "Abraham", "Lot"], correct: 2 },
              { q: "Who was Abraham's wife?", q_twi: "Hwan ne Abraham yere?", a: ["Hagar", "Sarah", "Rebekah", "Leah"], a_twi: ["Hagar", "Sara", "Rebeka", "Lea"], correct: 1 },
              { q: "Who was Abraham's son of promise?", q_twi: "Hwan ne Abraham bɔhyɛ ba no?", a: ["Ishmael", "Isaac", "Esau", "Joseph"], a_twi: ["Ismael", "Isak", "Esau", "Yosef"], correct: 1 },
              { q: "What did Jacob dream about reaching to heaven?", q_twi: "Dɛn na Yakobo soo daeɛ sɛ ɛkɔ soro?", a: ["A Bridge", "A Ladder", "A Mountain", "A Tree"], a_twi: ["Kodoɔ", "Atwerɛ", "Bepo", "Dua"], correct: 1 },
              { q: "Who was Jacob's twin brother?", q_twi: "Hwan ne Yakobo nta nua?", a: ["Joseph", "Esau", "Levi", "Benjamin"], a_twi: ["Yosef", "Esau", "Levi", "Benyamin"], correct: 1 },
              { q: "How many sons did Jacob have?", q_twi: "Mma mmarima dodoɔ sɛn na Yakobo woo wɔn?", a: ["10", "12", "7", "3"], a_twi: ["10", "12", "7", "3"], correct: 1 },
              { q: "Which son of Jacob was sold into slavery?", q_twi: "Yakobo ba bɛn na wɔtɔnn no nkoasuo mu?", a: ["Reuben", "Judah", "Joseph", "Dan"], a_twi: ["Ruben", "Yuda", "Yosef", "Dan"], correct: 2 },
              { q: "What special gift did Jacob give Joseph?", q_twi: "Akyɛdeɛ titiri bɛn na Yakobo de maa Yosef?", a: ["A Sword", "A Coat of many colors", "Gold", "A Horse"], a_twi: ["Afena", "Atadeɛ amamuo", "Sika", "Ponko"], correct: 1 },
              { q: "Who interpreted Pharaoh's dreams?", q_twi: "Hwan na ɔkyerɛɛ Farao daeɛ ase?", a: ["Moses", "Joseph", "Daniel", "Aaron"], a_twi: ["Mose", "Yosef", "Daniel", "Aaron"], correct: 1 },
              { q: "Where did the Israelites live in Egypt?", q_twi: "Ɛhe na Israelfoɔ no tɛnee wɔ Misraim?", a: ["Cairo", "Goshen", "Sinai", "Alexandria"], a_twi: ["Cairo", "Gosen", "Sinai", "Alexandria"], correct: 1 }
            ]
          }
        ];

        let gameData = JSON.parse(localStorage.getItem('bibleQuizRPGData')) || {
            lvl: 1, gold: 100, currentQuestionIndex: 0, lang: 'en'
        };

        let activePool = [];
        let timerInterval = null;
        let timeLeft = 10;
        let isProcessing = false;

        function renderUI() {
            isProcessing = false;
            let levelData = quizDatabase.find(l => l.level === gameData.lvl) || quizDatabase[quizDatabase.length - 1];
            
            // CRITICAL SHUFFLE FIX: If pool size matches old data footprint (less than 5), wipe it and build fresh
            if (activePool.length < 5) {
                activePool = [...levelData.questions].sort(() => Math.random() - 0.5);
                // Clamp index to safety bounds
                if(gameData.currentQuestionIndex >= activePool.length) {
                    gameData.currentQuestionIndex = 0;
                }
            }

            document.getElementById('bg-overlay').style.backgroundImage = `url('${levelData.bgImage}')`;
            document.getElementById('world-title').innerText = levelData.name;
            document.getElementById('lvl-badge').innerText = gameData.lvl;
            document.getElementById('gold-val').innerText = gameData.gold;
            document.getElementById('lang-label').innerText = (gameData.lang === 'en') ? "English" : "Twi";
            
            const progress = (gameData.currentQuestionIndex / activePool.length) * 100;
            document.getElementById('xp-bar').style.width = progress + "%";

            renderQuestion();
            startTimer();
        }

        function renderQuestion() {
            const qObj = activePool[gameData.currentQuestionIndex];
            const container = document.getElementById('quiz-container');
            
            const txt = (gameData.lang === 'en') ? qObj.q : (qObj.q_twi || qObj.q);
            const opts = (gameData.lang === 'en') ? qObj.a : (qObj.a_twi || qObj.a);

            container.innerHTML = `
                <div class="quiz-card p-6 shadow-xl">
                    <h2 class="text-xl font-bold text-slate-800 mb-6">${txt}</h2>
                    <div class="space-y-3" id="opt-box"></div>
                </div>
            `;

            opts.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "btn-opt";
                btn.innerHTML = `<span>${opt}</span>`;
                btn.onclick = () => handleAnswer(idx, qObj.correct, btn);
                document.getElementById('opt-box').appendChild(btn);
            });
        }

        function startTimer() {
            clearInterval(timerInterval);
            timeLeft = 10;
            const clock = document.getElementById('timer-clock');
            clock.classList.remove('timer-danger');
            clock.innerText = timeLeft;

            timerInterval = setInterval(() => {
                timeLeft--;
                clock.innerText = timeLeft;
                if (timeLeft <= 3) clock.classList.add('timer-danger');
                if (timeLeft <= 0) handleTimeout();
            }, 1000);
        }

        function handleTimeout() {
            clearInterval(timerInterval);
            gameData.gold = Math.max(0, gameData.gold - 20);
            
            // Shuffle pool immediately on failure so they don't get the same question back-to-back
            activePool.sort(() => Math.random() - 0.5);
            gameData.currentQuestionIndex = 0; 
            
            save();
            renderUI();
        }

        function handleAnswer(choice, correct, btn) {
            if (isProcessing) return;
            isProcessing = true;
            clearInterval(timerInterval);

            if (choice === correct) {
                btn.style.background = "#dcfce7";
                gameData.gold += 20;
                gameData.currentQuestionIndex++;

                if (gameData.currentQuestionIndex >= activePool.length) {
                    gameData.lvl++;
                    gameData.currentQuestionIndex = 0;
                    activePool = []; // Completely clears out pool to pull new level deck
                    save();
                    setTimeout(showLevelUp, 600);
                } else {
                    save();
                    setTimeout(renderUI, 800);
                }
            } else {
                btn.style.background = "#fee2e2";
                gameData.gold = Math.max(0, gameData.gold - 10);
                
                // SHUFFLE ON WRONG ANSWER LOGIC
                // Re-shuffles the pool instantly, dropping them back to index 0 of the shuffled batch
                activePool.sort(() => Math.random() - 0.5);
                gameData.currentQuestionIndex = 0;
                
                save();
                setTimeout(() => { isProcessing = false; renderUI(); }, 800);
            }
        }

        function showLevelUp() {
            const splash = document.getElementById('level-up-splash');
            splash.classList.add('active');
            setTimeout(() => {
                splash.classList.remove('active');
                renderUI();
            }, 2000);
        }

        function save() { localStorage.setItem('bibleQuizRPGData', JSON.stringify(gameData)); }
        function toggleLanguage() { gameData.lang = (gameData.lang === 'en') ? 'tw' : 'en'; save(); renderQuestion(); }
        function toggleMusic() {} 
        function triggerReset() { localStorage.clear(); activePool = []; location.reload(); }

        window.onload = renderUI;
    </script>
</body>
</html>
