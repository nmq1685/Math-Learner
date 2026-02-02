// CONFIGURATION & DATA
const APP_DATA = {
    sections: [
        {
            id: 'addition',
            title: { en: 'Addition', vi: 'Phép Cộng', ru: 'Сложение' },
            icon: '+',
            styleRef: 'addition',
            desc: { en: 'Count and add numbers', vi: 'Từ đếm ngón tay đến tính nhẩm', ru: 'Считаем и складываем числа' },
            levels: [
                { id: 1, title: 'Level 1', desc: { vi: 'Cộng trong phạm vi 10', en: 'Sum within 10', ru: 'Сумма до 10' } },
                { id: 2, title: 'Level 2', desc: { vi: 'Cộng phạm vi 20 (Không nhớ)', en: 'Within 20 (No regrouping)', ru: 'До 20 (без перехода через десяток)' } },
                { id: 3, title: 'Level 3', desc: { vi: 'Cộng phạm vi 20 (Có nhớ)', en: 'Within 20 (Regrouping)', ru: 'До 20 (с переходом через десяток)' } },
                { id: 4, title: 'Level 4', desc: { vi: 'Cộng tròn chục (đến 100)', en: 'Multiples of 10', ru: 'Круглые десятки (до 100)' } },
                { id: 5, title: 'Level 5', desc: { vi: 'Cộng 2 chữ số (Không nhớ)', en: '2-digit (No regrouping)', ru: 'Двузначные (без перехода)' } },
                { id: 6, title: 'Level 6', desc: { vi: 'Cộng 2 chữ số (Có nhớ)', en: '2-digit (Regrouping)', ru: 'Двузначные (с переходом)' } }
            ]
        },
        {
            id: 'subtraction',
            title: { en: 'Subtraction', vi: 'Phép Trừ', ru: 'Вычитание' },
            icon: '-',
            styleRef: 'subtraction',
            desc: { en: 'Take away numbers', vi: 'Hiểu về bớt đi, hiệu số', ru: 'Учимся вычитать' },
            levels: [
                { id: 1, title: 'Level 1', desc: { vi: 'Trừ trong phạm vi 10', en: 'Subtract within 10', ru: 'Вычитание до 10' } },
                { id: 2, title: 'Level 2', desc: { vi: 'Trừ phạm vi 20 (Không nhớ)', en: 'Within 20 (No regrouping)', ru: 'До 20 (без перехода)' } },
                { id: 3, title: 'Level 3', desc: { vi: 'Trừ qua mốc 10 (Có nhớ)', en: 'Crossing 10 (Regrouping)', ru: 'Через десяток (с переходом)' } },
                { id: 4, title: 'Level 4', desc: { vi: 'Trừ tròn chục', en: 'Multiples of 10', ru: 'Круглые десятки' } },
                { id: 5, title: 'Level 5', desc: { vi: 'Trừ 2 chữ số (Không nhớ)', en: '2-digit (No regrouping)', ru: 'Двузначные (без перехода)' } },
                { id: 6, title: 'Level 6', desc: { vi: 'Trừ 2 chữ số (Có nhớ)', en: '2-digit (Regrouping)', ru: 'Двузначные (с переходом)' } }
            ]
        },
        {
            id: 'multiplication',
            title: { en: 'Multiplication', vi: 'Phép Nhân', ru: 'Умножение' },
            icon: '×',
            styleRef: 'multiplication',
            desc: { en: 'Times tables', vi: 'Bảng cửu chương & tư duy gấp', ru: 'Таблица умножения' },
            levels: [
                { id: 1, title: 'Level 1', desc: { vi: 'Nhân với 0 và 1', en: 'Multiply by 0 and 1', ru: 'Умножение на 0 и 1' } },
                { id: 2, title: 'Level 2', desc: { vi: 'Nhân với 2, 5, 10', en: 'Multiply by 2, 5, 10', ru: 'Умножение на 2, 5, 10' } },
                { id: 3, title: 'Level 3', desc: { vi: 'Bảng cửu chương 3 và 4', en: 'Table of 3 and 4', ru: 'Таблица на 3 и 4' } },
                { id: 4, title: 'Level 4', desc: { vi: 'Bảng cửu chương 6, 7, 8, 9', en: 'Table of 6, 7, 8, 9', ru: 'Таблица на 6, 7, 8, 9' } },
                { id: 5, title: 'Level 5', desc: { vi: 'Ôn tập ngẫu nhiên', en: 'Mixed Tables 1-9', ru: 'Смешанная таблица 1-9' } }
            ]
        },
        {
            id: 'division',
            title: { en: 'Division', vi: 'Phép Chia', ru: 'Деление' },
            icon: '÷',
            styleRef: 'division',
            desc: { en: 'Sharing equaly', vi: 'Phép chia hết, tư duy ngược', ru: 'Деление на равные части' },
            levels: [
                { id: 1, title: 'Level 1', desc: { vi: 'Chia cho 1, 2, 5, 10', en: 'Divide by 1, 2, 5, 10', ru: 'Деление на 1, 2, 5, 10' } },
                { id: 2, title: 'Level 2', desc: { vi: 'Chia cơ bản (<= 50)', en: 'Basic division (<= 50)', ru: 'Простое деление (<= 50)' } },
                { id: 3, title: 'Level 3', desc: { vi: 'Chia nâng cao (<= 81)', en: 'Advanced division (<= 81)', ru: 'Сложное деление (<= 81)' } }
            ]
        },
        {
            id: 'logic',
            title: { en: 'Logic', vi: 'Tư Duy Logic', ru: 'Логика' },
            icon: '?',
            styleRef: 'logic',
            desc: { en: 'Brain Teasers', vi: 'Đố vui, số thiếu, so sánh', ru: 'Головоломки, сравнение' },
            levels: [
                { id: 1, title: 'Dạng 1', desc: { vi: 'Tìm số còn thiếu', en: 'Missing Number', ru: 'Пропущенное число' } },
                { id: 2, title: 'Dạng 2', desc: { vi: 'So sánh ( >, <, = )', en: 'Comparison', ru: 'Сравнение (>, <, =)' } },
                { id: 3, title: 'Dạng 3', desc: { vi: 'Chuỗi toán học', en: 'Mixed Operations', ru: 'Смешанные операции' } }
            ]
        }
    ]
};

// GLOBAL STATE
let state = {
    lang: 'vi',
    currentSection: null,
    currentLevel: null,
    score: 0,
    totalQuestions: 10,
    currentQuestionIndex: 0,
    currQuestion: null,
    userInput: ''
};

// AUDIO SYSTEM (Web Audio API)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const playSound = (type) => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const createOsc = (type, freq, start, duration, vol = 0.1) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.type = type;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(vol, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + duration);

        osc.start(start);
        osc.stop(start + duration);
        return osc;
    };

    if (type === 'sound-click') {
        // High click
        createOsc('sine', 800, now, 0.1, 0.1);
    }
    else if (type === 'sound-correct') {
        // Ding! (Two notes)
        createOsc('triangle', 660, now, 0.3, 0.1); // E5
        setTimeout(() => createOsc('triangle', 1000, now + 0.1, 0.4, 0.1), 100); // B5 (approx)
    }
    else if (type === 'sound-wrong') {
        // Buzz (Low sawtooth)
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    }
    else if (type === 'sound-win') {
        // Fanfare (Major arpeggio)
        createOsc('square', 523.25, now, 0.2, 0.1); // C5
        createOsc('square', 659.25, now + 0.15, 0.2, 0.1); // E5
        createOsc('square', 783.99, now + 0.30, 0.4, 0.1); // G5
        createOsc('square', 1046.50, now + 0.45, 0.6, 0.1); // C6
    }
}

const formatNumber = (num, digits = 0) => {
    return num.toString();
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// MATH LOGIC GENERATOR
const generateQuestion = (sectionId, levelId) => {
    let q = { text: '', ans: '', type: 'input' }; // type: 'input' or 'compare'
    let a, b, c;

    switch (sectionId) {
        case 'addition':
            if (levelId === 1) { // Sum <= 10
                a = getRandomInt(0, 5);
                b = getRandomInt(0, 10 - a);
            } else if (levelId === 2) { // Sum <= 20, no carry (1 digit + 1/2 digit)
                // TH1: 10 + x
                // TH2: 1 digit + 1 digit (sum > 10 but logic says "no memory"? Usually means e.g. 12 + 3)
                // Prompt: "So co 1 chu so cong voi so co 1 hoac 2 chu so" -> 12 + 3, 10 + 5.
                // Keeping it simple: a in [10..15], b in [0..4]
                if (Math.random() > 0.5) { a = 10; b = getRandomInt(0, 9); }
                else { a = getRandomInt(11, 15); b = getRandomInt(0, 4); }
            } else if (levelId === 3) { // Sum > 10 (carry), single digits like 8 + 5
                a = getRandomInt(2, 9);
                b = getRandomInt(11 - a, 9);
                // Ensure sum > 10
                if (a + b <= 10) b = 10 - a + getRandomInt(1, 5);
            } else if (levelId === 4) { // Multiples of 10
                a = getRandomInt(1, 8) * 10;
                b = getRandomInt(1, 9 - (a / 10)) * 10;
            } else if (levelId === 5) { // 2 digits + 2 digits (No carry)
                a = getRandomInt(10, 80); // e.g., 23
                let aUnit = a % 10;
                let maxBUnit = 9 - aUnit;
                let bUnit = getRandomInt(0, maxBUnit);
                let aTen = Math.floor(a / 10);
                let maxBTen = 9 - aTen;
                let bTen = getRandomInt(1, maxBTen);
                b = bTen * 10 + bUnit;
            } else if (levelId === 6) { // 2 digits + 2 digits (Carry)
                a = getRandomInt(15, 85);
                b = getRandomInt(15, 99 - a); // Ensure sum <= 100 or just let it go over 100? prompt examples < 100 typically
            }
            q.text = `${a} + ${b} = ?`;
            q.ans = (a + b).toString();
            break;

        case 'subtraction':
            if (levelId === 1) { // <= 10
                a = getRandomInt(1, 10);
                b = getRandomInt(0, a);
            } else if (levelId === 2) { // <= 20 no carry e.g. 15-3
                a = getRandomInt(11, 19);
                b = getRandomInt(0, a % 10);
            } else if (levelId === 3) { // 13-5 (carry/borrow)
                a = getRandomInt(11, 18);
                // b must be > last digit of a
                let minB = (a % 10) + 1;
                b = getRandomInt(minB, 9);
            } else if (levelId === 4) { // Round 10
                a = getRandomInt(2, 9) * 10;
                b = getRandomInt(1, (a / 10) - 1) * 10;
            } else if (levelId === 5) { // 2 digits, no borrow
                a = getRandomInt(20, 99);
                let aUnit = a % 10;
                let bUnit = getRandomInt(0, aUnit);
                let aTen = Math.floor(a / 10);
                let bTen = getRandomInt(1, aTen - 1);
                b = bTen * 10 + bUnit;
            } else if (levelId === 6) { // 2 digits, borrow
                a = getRandomInt(20, 90);
                let aUnit = a % 10;
                // b unit must be > aUnit
                let bUnit = getRandomInt(aUnit + 1, 9);
                let aTen = Math.floor(a / 10);
                let bTen = getRandomInt(1, aTen - 1);
                b = bTen * 10 + bUnit;
            }
            q.text = `${a} - ${b} = ?`;
            q.ans = (a - b).toString();
            break;

        case 'multiplication':
            if (levelId === 1) { // x0, x1
                b = Math.random() > 0.5 ? 0 : 1;
                a = getRandomInt(1, 10);
            } else if (levelId === 2) { // x2, x5, x10
                let set = [2, 5, 10];
                b = set[getRandomInt(0, 2)];
                a = getRandomInt(1, 10);
            } else if (levelId === 3) { // x3, x4
                b = Math.random() > 0.5 ? 3 : 4;
                a = getRandomInt(1, 10);
            } else if (levelId === 4) { // x6,7,8,9
                b = getRandomInt(6, 9);
                a = getRandomInt(1, 10);
            } else if (levelId === 5) { // Random 1-9
                a = getRandomInt(1, 9);
                b = getRandomInt(1, 9);
            }
            q.text = `${a} × ${b} = ?`;
            q.ans = (a * b).toString();
            break;

        case 'division':
            if (levelId === 1) { // /1, /2, /5, /10
                let set = [1, 2, 5, 10];
                b = set[getRandomInt(0, 3)];
                c = getRandomInt(1, 10); // Quotient
                a = b * c; // Dividend
            } else if (levelId === 2) { // Dividend <= 50
                // Use multiplication to find valid pairs
                b = getRandomInt(2, 9);
                c = getRandomInt(2, Math.floor(50 / b));
                a = b * c;
            } else if (levelId === 3) { // Dividend <= 81
                b = getRandomInt(2, 9);
                c = getRandomInt(2, 9);
                a = b * c;
            }
            q.text = `${a} : ${b} = ?`;
            q.ans = c !== undefined ? c.toString() : (a / b).toString();
            break;

        case 'logic':
            if (levelId === 1) { // Missing Number
                // ? + 5 = 12 or 4 x ? = 20
                let op = getRandomInt(0, 1) === 0 ? '+' : 'x';
                if (op === '+') {
                    a = getRandomInt(1, 20);
                    b = getRandomInt(1, 20);
                    let sum = a + b;
                    // Hide a or b
                    if (Math.random() > 0.5) {
                        q.text = `? + ${b} = ${sum}`;
                        q.ans = a.toString();
                    } else {
                        q.text = `${a} + ? = ${sum}`;
                        q.ans = b.toString();
                    }
                } else {
                    a = getRandomInt(2, 9);
                    b = getRandomInt(2, 9);
                    let prod = a * b;
                    if (Math.random() > 0.5) {
                        q.text = `? × ${b} = ${prod}`;
                        q.ans = a.toString();
                    } else {
                        q.text = `${a} × ? = ${prod}`;
                        q.ans = b.toString();
                    }
                }
            } else if (levelId === 2) { // Comparison
                a = getRandomInt(1, 20);
                b = getRandomInt(1, 20);
                // Maybe simplified expressions like 5+2 ... 8
                let valA = a;
                let sideA = a.toString();
                if (Math.random() > 0.5) {
                    let x = getRandomInt(1, 10);
                    let y = getRandomInt(1, 10);
                    valA = x + y;
                    sideA = `${x} + ${y}`;
                }

                q.text = `${sideA} ... ${b}`;
                q.type = 'compare';
                if (valA > b) q.ans = '>';
                else if (valA < b) q.ans = '<';
                else q.ans = '=';
                q.valA = sideA;
                q.valB = b;
            } else if (levelId === 3) { // Mixed operations e.g. 2 + 3 - 1
                a = getRandomInt(1, 10);
                b = getRandomInt(1, 10);
                c = getRandomInt(1, a + b); // Avoid negative too much
                q.text = `${a} + ${b} - ${c} = ?`;
                q.ans = (a + b - c).toString();
            }
            break;
    }

    // Fallback if something fails
    if (!q.text) {
        q.text = "1 + 1 = ?";
        q.ans = "2";
    }

    return q;
}

// UI RENDERING
const renderHeader = (showBack = false) => {
    const btnBack = document.getElementById('btn-back');
    if (showBack) btnBack.classList.remove('hidden');
    else btnBack.classList.add('hidden');
}

const renderHome = () => {
    state.currentSection = null;
    state.currentLevel = null;
    renderHeader(false); // Hide back button

    const main = document.getElementById('main-content');
    main.innerHTML = `<div class="menu-grid"></div>`;
    const grid = main.querySelector('.menu-grid');

    APP_DATA.sections.forEach(sec => {
        const card = document.createElement('div');
        card.className = `menu-card ${sec.styleRef}`;
        card.onclick = () => renderLevels(sec);

        card.innerHTML = `
            <div class="card-icon">${sec.icon}</div>
            <div class="card-info">
                <h3>${sec.title[state.lang]}</h3>
                <p>${sec.desc[state.lang]}</p>
            </div>
            <div><i class="fas fa-chevron-right" style="color: #ccc"></i></div>
        `;
        grid.appendChild(card);
    });
}

const renderLevels = (section) => {
    state.currentSection = section;
    renderHeader(true);

    const main = document.getElementById('main-content');
    main.innerHTML = `
        <h2 style="margin-top:0">${section.title[state.lang]}</h2>
        <div class="level-grid"></div>
    `;
    const grid = main.querySelector('.level-grid');

    section.levels.forEach(lvl => {
        const btn = document.createElement('div');
        btn.className = 'level-btn';
        btn.onclick = () => startGame(section, lvl);
        btn.innerHTML = `
            <span class="level-number">Level ${lvl.id}</span>
            <span class="level-desc">${lvl.desc[state.lang]}</span>
        `;
        grid.appendChild(btn);
    });
}

const startGame = (section, level) => {
    state.currentLevel = level;
    state.score = 0;
    state.currentQuestionIndex = 0;
    state.userInput = '';

    renderGameScreen();
    nextQuestion();
}

const renderGameScreen = () => {
    const main = document.getElementById('main-content');
    // Using generic layout, content filled by nextQuestion
    main.innerHTML = `
        <div class="game-area">
            <div class="game-header">
                <span>Level ${state.currentLevel.id}</span>
                <span>Score: <span id="score-display">0</span></span>
            </div>
            
            <div id="game-question-container" style="width:100%; text-align:center;">
                <!-- Content Injected Here -->
            </div>

            <div id="keypad-container"></div>
        </div>
    `;

    renderKeypad();
}

const renderKeypad = () => {
    const container = document.getElementById('keypad-container');

    // Check if comparison or number pad
    // Actually we don't know the question type yet upon render frame, 
    // but the section/level usually determines it. 
    // Exception: Logic level 2 is comparison, Logic 1/3 is number.
    // Let's decide based on current question type in `nextQuestion` or checking level now.

    let isComparison = (state.currentSection.id === 'logic' && state.currentLevel.id === 2);

    if (isComparison) {
        container.innerHTML = `
            <div class="keypad" style="grid-template-columns: repeat(3, 1fr);">
                <button class="key-btn" onclick="handleInput('>')">></button>
                <button class="key-btn" onclick="handleInput('=')">=</button>
                <button class="key-btn" onclick="handleInput('<')"><</button>
            </div>
        `;
    } else {
        // Numpad
        let html = '<div class="keypad">';
        for (let i = 1; i <= 9; i++) {
            html += `<button class="key-btn" onclick="handleInput('${i}')">${i}</button>`;
        }
        html += `<button class="key-btn delete-btn" onclick="handleDelete()"><i class="fas fa-backspace"></i></button>`;
        html += `<button class="key-btn" onclick="handleInput('0')">0</button>`;
        html += `<button class="key-btn action-btn" onclick="handleCheck()"><i class="fas fa-check"></i></button>`;
        html += '</div>';
        container.innerHTML = html;
    }
}

const nextQuestion = () => {
    if (state.currentQuestionIndex >= state.totalQuestions) {
        finishGame();
        return;
    }

    state.currentQuestionIndex++;
    state.userInput = '';
    state.currQuestion = generateQuestion(state.currentSection.id, state.currentLevel.id);

    const container = document.getElementById('game-question-container');
    const q = state.currQuestion;

    if (q.type === 'compare') {
        container.innerHTML = `
            <div class="comparison-container">
                <div class="comp-number">${q.valA}</div>
                <div class="comp-operator" id="answer-display">?</div>
                <div class="comp-number">${q.valB}</div>
            </div>
        `;
        // Re-render keypad if switching types (rarely happens dynamically but good to be safe)
        if (!document.querySelector("button[onclick=\"handleInput('>')\"]")) {
            renderKeypad();
        }
    } else {
        // q.text usually is like "2 + 3 = ?"
        // We want to replace ? with our input box visualization
        // Or just display text above and box below
        let displayText = q.text.replace('?', '');
        container.innerHTML = `
            <div class="question-box">${displayText} <span class="answer-area" id="answer-display">?</span></div>
        `;
        // Ensure numpad
        if (!document.querySelector("button[onclick=\"handleInput('1')\"]")) {
            renderKeypad();
        }
    }
}

const handleInput = (val) => {
    playSound('sound-click');

    if (state.currQuestion.type === 'compare') {
        state.userInput = val;
        updateDisplay();
        // Auto check for comparison for smoother UX? Or wait for check?
        // Let's auto check for comparison since single button press
        setTimeout(handleCheck, 300);
    } else {
        if (state.userInput.length < 4) {
            state.userInput += val;
            updateDisplay();
        }
    }
}

const handleDelete = () => {
    playSound('sound-click');
    state.userInput = state.userInput.slice(0, -1);
    updateDisplay();
}

const updateDisplay = () => {
    const disp = document.getElementById('answer-display');
    if (disp) {
        disp.innerText = state.userInput || '?';
        if (state.userInput) disp.classList.remove('answer-placeholder');
        else disp.classList.add('answer-placeholder');
    }

    // Animation effect
    disp.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
    ], { duration: 100 });
}

const handleCheck = () => {
    if (!state.userInput) return;

    if (state.userInput === state.currQuestion.ans) {
        // Correct
        playSound('sound-correct');
        state.score++;
        document.getElementById('score-display').innerText = state.score;
        showFeedback(true);
    } else {
        // Wrong
        playSound('sound-wrong');
        const disp = document.getElementById('answer-display');
        disp.classList.add('shake');
        setTimeout(() => disp.classList.remove('shake'), 500);
        showFeedback(false);
    }
}

const showFeedback = (isCorrect) => {
    // Show Toast for Check
    if (isCorrect) {
        let msg = 'Correct! 🎉';
        if (state.lang === 'vi') msg = 'Chính xác! 🎉';
        if (state.lang === 'ru') msg = 'Верно! 🎉';
        showToast(msg, 'success');
    }

    // Simple delay for flow
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return; // Guard clause

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);

    // Remove after animation (2s total)
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 2000);
}

const finishGame = () => {
    playSound('sound-win');
    const main = document.getElementById('main-content');

    let msg, sub;
    if (state.lang === 'vi') {
        msg = 'Tuyệt vời!';
        sub = `Bạn đạt ${state.score} / ${state.totalQuestions} điểm`;
    } else if (state.lang === 'ru') {
        msg = 'Отлично!';
        sub = `Ваш счет: ${state.score} / ${state.totalQuestions}`;
    } else {
        msg = 'Great Job!';
        sub = `You got ${state.score} / ${state.totalQuestions}`;
    }

    main.innerHTML = `
        <div style="text-align:center; padding-top: 50px;">
            <i class="fas fa-trophy" style="font-size: 5rem; color: #fab1a0; margin-bottom:20px; display:block;"></i>
            <h1 style="color: var(--text-color)">${msg}</h1>
            <p style="font-size: 1.2rem; color: #636e72">${sub}</p>
            
            <button class="btn-primary" onclick="renderHome()" style="margin-top:30px;">
                <i class="fas fa-home"></i> Menu
            </button>
             <button class="btn-primary" onclick="startGame(state.currentSection, state.currentLevel)" style="background:var(--primary-color); margin-left: 10px;">
                <i class="fas fa-redo"></i> Replay
            </button>
        </div>
    `;
    renderHeader(false);
}

// SETTINGS SYSTEM
const showSettingsModal = () => {
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-message');
    const actions = document.querySelector('.modal-actions');

    // Mapping for UI text
    const uiText = {
        vi: { title: 'Cài đặt', msg: 'Chọn ngôn ngữ / Language:', close: 'Đóng' },
        en: { title: 'Settings', msg: 'Choose Language:', close: 'Close' },
        ru: { title: 'Настройки', msg: 'Выберите язык:', close: 'Закрыть' }
    };

    // Fallback if lang undefined (shouldn't happen)
    const t = uiText[state.lang] || uiText.en;

    title.innerText = t.title;
    msg.innerText = t.msg;

    actions.innerHTML = `
        <button class="btn-primary" onclick="changeLang('vi')" style="width:100%; margin-bottom:10px;">Tiếng Việt 🇻🇳</button>
        <button class="btn-primary" onclick="changeLang('en')" style="width:100%; margin-bottom:10px; background:#74b9ff;">English 🇬🇧</button>
        <button class="btn-primary" onclick="changeLang('ru')" style="width:100%; background:#a29bfe;">Русский 🇷🇺</button>
        <button class="btn-primary" onclick="closeModal()" style="width:100%; background:#b2bec3; margin-top:20px;">${t.close}</button>
    `;

    overlay.classList.remove('hidden');
}

const closeModal = () => {
    document.getElementById('modal-overlay').classList.add('hidden');
    playSound('sound-click');
}

window.changeLang = (lang) => {
    state.lang = lang;
    playSound('sound-click');
    closeModal();
    // Refresh to apply changes
    renderHome();
}
// Expose to window for onclick handlers
window.closeModal = closeModal;

// NAVIGATION
document.getElementById('btn-settings').addEventListener('click', () => {
    playSound('sound-click');
    showSettingsModal();
});

document.getElementById('btn-back').addEventListener('click', () => {
    playSound('sound-click');
    if (state.currentLevel) {
        // If in game, go back to level select
        renderLevels(state.currentSection);
        state.currentLevel = null;
    } else if (state.currentSection) {
        // If in Level Select, go to Home
        renderHome();
    }
});

// INIT
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
});
