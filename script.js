// CONFIGURATION & DATA
const APP_DATA = {
    grades: [
        {
            id: 'grade1',
            title: { vi: 'Lớp 1', en: 'Grade 1', ru: '1 класс' },
            icon: '👶',
            styleRef: 'grade1',
            desc: { vi: 'Làm quen với số & phép tính cơ bản', en: 'Introduction to numbers & basic operations', ru: 'Знакомство с числами' },
            sections: [
                {
                    id: 'g1_number',
                    title: { vi: 'Số học', en: 'Number Sense', ru: 'Числа' },
                    levels: [
                        { id: 'g1_n1', title: { vi: 'Đếm số', en: 'Counting', ru: 'Счет' }, desc: { vi: 'Điền số còn thiếu', en: 'Missing numbers', ru: 'Пропущенные числа' } },
                        { id: 'g1_n2', title: { vi: 'So sánh', en: 'Comparison', ru: 'Сравнение' }, desc: { vi: 'Lớn, bé, bằng (<100)', en: 'Greater/Less than (<100)', ru: 'Сравнение до 100' } },
                        { id: 'g1_n3', title: { vi: 'Sắp xếp', en: 'Ordering', ru: 'Порядок' }, desc: { vi: 'Thứ tự từ bé đến lớn', en: 'Ascending/Descending', ru: 'По возрастанию' } }
                    ]
                },
                {
                    id: 'g1_ops',
                    title: { vi: 'Phép tính', en: 'Operations', ru: 'Операции' },
                    levels: [
                        { id: 'g1_o1', title: { vi: 'Phạm vi 10', en: 'Range 10', ru: 'До 10' }, desc: { vi: 'Cộng/Trừ cơ bản', en: 'Basic Add/Sub', ru: 'Сложение и вычитание' } },
                        { id: 'g1_o2', title: { vi: 'Phạm vi 20', en: 'Range 20', ru: 'До 20' }, desc: { vi: 'Cộng/Trừ không nhớ', en: 'No carrying/borrowing', ru: 'Без перехода' } },
                        { id: 'g1_o3', title: { vi: 'Tròn chục', en: 'Tens', ru: 'Десятки' }, desc: { vi: 'Cộng/Trừ tròn chục (<100)', en: 'Multiples of 10', ru: 'Круглые десятки' } },
                        { id: 'g1_o4', title: { vi: 'Phạm vi 100', en: 'Range 100', ru: 'До 100' }, desc: { vi: 'Cộng/Trừ không nhớ', en: 'No carrying/borrowing', ru: 'Без перехода' } }
                    ]
                },
                {
                    id: 'g1_geo',
                    title: { vi: 'Hình học & Đo lường', en: 'Geometry & Measure', ru: 'Геометрия' },
                    levels: [
                        { id: 'g1_g1', title: { vi: 'Đồng hồ', en: 'Clock', ru: 'Часы' }, desc: { vi: 'Đọc giờ đúng', en: 'Tell time', ru: 'Линейное время' } },
                        { id: 'g1_g2', title: { vi: 'Độ dài', en: 'Length', ru: 'Длина' }, desc: { vi: 'Cộng trừ đơn vị cm', en: 'Add/Sub cm units', ru: 'Сантиметры' } }
                    ]
                }
            ]
        },
        {
            id: 'grade2',
            title: { vi: 'Lớp 2', en: 'Grade 2', ru: '2 класс' },
            icon: '🐣',
            styleRef: 'grade2',
            desc: { vi: 'Phép tính có nhớ & nhân chia', en: 'Regrouping & Multiplication', ru: 'Сложение и деление' },
            sections: [
                {
                    id: 'g2_ops_adv',
                    title: { vi: 'Phép tính nâng cao', en: 'Advanced Ops', ru: 'Сложные операции' },
                    levels: [
                        { id: 'g2_o1', title: { vi: 'Cộng có nhớ', en: 'Addition carrying', ru: 'Сложение с переходом' }, desc: { vi: 'Phạm vi 100', en: 'Within 100', ru: 'До 100' } },
                        { id: 'g2_o2', title: { vi: 'Trừ có nhớ', en: 'Subtraction borrowing', ru: 'Вычитание с переходом' }, desc: { vi: 'Phạm vi 100', en: 'Within 100', ru: 'До 100' } },
                        { id: 'g2_o3', title: { vi: 'Tìm thành phần', en: 'Find x', ru: 'Найти x' }, desc: { vi: 'Tìm x trong phép cộng/trừ', en: 'Find missing part in +/-', ru: 'Поиск неизвестного' } }
                    ]
                },
                {
                    id: 'g2_mul_div',
                    title: { vi: 'Nhân & Chia cơ bản', en: 'Mul & Div 1', ru: 'Умножение и деление' },
                    levels: [
                        { id: 'g2_m1', title: { vi: 'Bảng nhân 2-5', en: 'Tables 2-5', ru: 'Таблицы 2-5' }, desc: { vi: 'Thực hành nhân cơ bản', en: 'Basic multiplication', ru: 'Умножение' } },
                        { id: 'g2_m2', title: { vi: 'Bảng chia 2-5', en: 'Div Tables 2-5', ru: 'Деление 2-5' }, desc: { vi: 'Thực hành chia cơ bản', en: 'Basic division', ru: 'Деление' } },
                        { id: 'g2_m3', title: { vi: 'Gấp & Giảm', en: 'Scaling', ru: 'Масштаб' }, desc: { vi: 'Gấp lên / giảm đi số lần', en: 'Multiply/Divide times', ru: 'Во сколько раз' } }
                    ]
                },
                {
                    id: 'g2_number',
                    title: { vi: 'Số học & Phép tính', en: 'Numbers & Ops', ru: 'Числа' },
                    levels: [
                        { id: 'g2_n1', title: { vi: 'Phạm vi 1000', en: 'Range 1000', ru: 'До 1000' }, desc: { vi: 'So sánh số có 3 chữ số', en: 'Compare 3-digit numbers', ru: 'Сравнение' } },
                        { id: 'g2_n2', title: { vi: 'Cộng trừ 1000', en: 'Add/Sub 1000', ru: 'До 1000' }, desc: { vi: 'Phạm vi 1000 (không nhớ)', en: '3-digit (no regrouping)', ru: 'Счет до 1000' } }
                    ]
                }
            ]
        },
        {
            id: 'grade3',
            title: { vi: 'Lớp 3', en: 'Grade 3', ru: '3 класс' },
            icon: '🐥',
            styleRef: 'grade3',
            desc: { vi: 'Mở rộng nhân chia & số lớn', en: 'Detailed Mul/Div & Large Numbers', ru: 'Умножение и большие числа' },
            sections: [
                {
                    id: 'g3_mul_div',
                    title: { vi: 'Nhân & Chia nâng cao', en: 'Advanced Mul/Div', ru: 'Умножение и деление' },
                    levels: [
                        { id: 'g3_m1', title: { vi: 'Bảng nhân 6-9', en: 'Tables 6-9', ru: 'Таблицы 6-9' }, desc: { vi: 'Hoàn thiện bảng cửu chương', en: 'Finish times tables', ru: 'Таблица умножения' } },
                        { id: 'g3_m2', title: { vi: 'Nhân với 1 chữ số', en: 'Mul by 1-digit', ru: 'Умножение на 1 цифру' }, desc: { vi: 'Số có 2, 3 chữ số', en: '2, 3-digit numbers', ru: 'Многозначные числа' } },
                        { id: 'g3_m3', title: { vi: 'Phép chia', en: 'Division', ru: 'Деление' }, desc: { vi: 'Chia hết & Có dư', en: 'Exact & remainders', ru: 'С остатком' } }
                    ]
                },
                {
                    id: 'g3_logic',
                    title: { vi: 'Biểu thức & Logic', en: 'Expressions', ru: 'Логика' },
                    levels: [
                        { id: 'g3_l1', title: { vi: 'Giá trị biểu thức', en: 'Values', ru: 'Выражения' }, desc: { vi: 'Quy tắc nhân chia trước', en: 'Order of operations', ru: 'Порядок действий' } },
                        { id: 'g3_l2', title: { vi: 'Tìm X nâng cao', en: 'Advanced Find X', ru: 'Поиск x' }, desc: { vi: 'X nhân, X chia số lớn', en: 'Find x in mul/div', ru: 'Поиск неизвестного' } }
                    ]
                },
                {
                    id: 'g3_geo',
                    title: { vi: 'Số học & Hình học', en: 'Math & Geo', ru: 'Геометрия' },
                    levels: [
                        { id: 'g3_g1', title: { vi: 'Số La Mã', en: 'Roman Numerals', ru: 'Римские цифры' }, desc: { vi: 'Làm quen I, V, X', en: 'Identify I, V, X', ru: 'I, V, X' } },
                        { id: 'g3_g2', title: { vi: 'Số lớn 100k', en: '100k Range', ru: 'До 100к' }, desc: { vi: 'Cộng trừ có nhớ', en: 'Add/Sub with carrying', ru: 'Сложение до 100к' } },
                        { id: 'g3_g3', title: { vi: 'Diện tích', en: 'Area', ru: 'Площадь' }, desc: { vi: 'Hình chữ nhật & vuông', en: 'Rect & Square area', ru: 'Площадь фигуры' } }
                    ]
                }
            ]
        },
        {
            id: 'grade4',
            title: { vi: 'Lớp 4', en: 'Grade 4', ru: '4 класс' },
            icon: '🦅',
            styleRef: 'grade4',
            desc: { vi: 'Số rất lớn, phân số & TBC', en: 'Fractions & Large Calculations', ru: 'Дроби и вычисления' },
            sections: [
                {
                    id: 'g4_fractions',
                    title: { vi: 'Phân số', en: 'Fractions', ru: 'Дроби' },
                    levels: [
                        { id: 'g4_f1', title: { vi: 'Rút gọn & Quy đồng', en: 'Simplify & Common', ru: 'Упрощение' }, desc: { vi: 'Tối giản & Quy đồng mẫu', en: 'Simplifying & Common Denominator', ru: 'Знаменатель' } },
                        { id: 'g4_f2', title: { vi: 'Cộng & Trừ', en: 'Add & Sub', ru: 'Сложение' }, desc: { vi: 'Cùng & khác mẫu số', en: 'Same/Diff denominators', ru: 'Сложение дробей' } },
                        { id: 'g4_f3', title: { vi: 'Nhân & Chia', en: 'Mul & Div', ru: 'Умножение' }, desc: { vi: 'Toán phân số nâng cao', en: 'Fraction multiplication/div', ru: 'Умножение дробей' } }
                    ]
                },
                {
                    id: 'g4_ops',
                    title: { vi: 'Số tự nhiên lớn', en: 'Large Natural Num', ru: 'Натуральные числа' },
                    levels: [
                        { id: 'g4_o1', title: { vi: 'Nhân & Chia lớn', en: 'Big Mul/Div', ru: 'Умножение' }, desc: { vi: 'Với số có 2, 3 chữ số', en: 'By 2, 3-digit numbers', ru: 'Многозначные' } },
                        { id: 'g4_o2', title: { vi: 'Trung bình cộng', en: 'Average', ru: 'Среднее' }, desc: { vi: 'Tìm TBC của nhiều số', en: 'Find average', ru: 'Среднее значение' } },
                        { id: 'g4_o3', title: { vi: 'Dấu hiệu chia hết', en: 'Divisibility', ru: 'Деление' }, desc: { vi: 'Chia hết cho 2, 3, 5, 9', en: 'Rules for 2, 3, 5, 9', ru: 'Признаки делимости' } }
                    ]
                },
                {
                    id: 'g4_geo',
                    title: { vi: 'Đổi đơn vị & Hình học', en: 'Units & Geo', ru: 'Величины' },
                    levels: [
                        { id: 'g4_g1', title: { vi: 'Đổi đơn vị', en: 'Unit Conversion', ru: 'Единицы' }, desc: { vi: 'Tấn, tạ, thế kỷ...', en: 'Weight, Time, Length', ru: 'Конвертация' } },
                        { id: 'g4_g2', title: { vi: 'Hình bình hành', en: 'Parallelogram', ru: 'Параллелограмм' }, desc: { vi: 'Diện tích hình bình hành', en: 'Area of Parallelogram', ru: 'Площадь' } },
                        { id: 'g4_g3', title: { vi: 'Hình thoi', en: 'Rhombus', ru: 'Ромб' }, desc: { vi: 'Diện tích hình thoi', en: 'Area of Rhombus', ru: 'Площадь ромба' } }
                    ]
                }
            ]
        }
    ]
};

const SITE_TRANSLATIONS = {
    'nav_home': { vi: 'Trang Chủ', en: 'Home', ru: 'Главная' },
    'nav_play': { vi: 'Chơi Ngay', en: 'Play Now', ru: 'Играть' },
    'nav_about': { vi: 'Giới Thiệu', en: 'About', ru: 'О проекте' },
    'hero_title': { vi: 'Học Toán Thật Vui!', en: 'Math is Fun!', ru: 'Математика - это весело!' },
    'hero_desc': { vi: 'Nền tảng học tập tương tác giúp trẻ làm quen với những con số một cách tự nhiên nhất.', en: 'Interactive learning platform helping kids get familiar with numbers naturally.', ru: 'Интерактивная платформа, помогающая детям подружиться с числами.' },
    'hero_btn': { vi: 'Bắt Đầu Ngay', en: 'Start Now', ru: 'Начать сейчас' },
    'footer_desc': { vi: 'Ứng dụng học toán vui nhộn cho bé.', en: 'Fun math learning app for kids.', ru: 'Веселое приложение для изучения математики.' },
    'footer_links': { vi: 'Liên Kết', en: 'Links', ru: 'Ссылки' },
    'footer_contact': { vi: 'Liên Hệ', en: 'Contact', ru: 'Контакты' },
    'footer_privacy': { vi: 'Chính Sách Bảo Mật', en: 'Privacy Policy', ru: 'Приватность' },
    'about_page_title': { vi: 'Về Math Learner', en: 'About Math Learner', ru: 'О Math Learner' },
    'about_hero_p': { vi: 'Khơi dậy niềm yêu thích toán học cho trẻ em thông qua các trò chơi tương tác thú vị.', en: 'Igniting a love for math through fun interactive games.', ru: 'Пробуждаем любовь к математике через веселые игры.' },
    'mission_title': { vi: 'Sứ Mệnh Của Chúng Tôi', en: 'Our Mission', ru: 'Наша миссия' },
    'mission_desc': { vi: 'Biến những con số khô khan trở thành niềm vui, giúp trẻ em tiếp cận toán học một cách tự nhiên.', en: 'Turning dry numbers into fun, helping kids approach math naturally.', ru: 'Превращаем сухие цифры в радость, помогая детям осваивать математику.' },
    'method_title': { vi: 'Phương Pháp Học Tập', en: 'Learning Method', ru: 'Метод обучения' },
    'method_desc': { vi: 'Kết hợp "Học mà chơi - Chơi mà học" với màu sắc và âm thanh sinh động.', en: 'Combining "Learning through play" with vibrant colors and sounds.', ru: 'Сочетание обучения с игрой, яркими цветами и звуками.' },
    'age_title': { vi: 'Mọi Lứa Tuổi', en: 'All Ages', ru: 'Для всех возрастов' },
    'age_desc': { vi: 'Từ phép tính đơn giản đến các thử thách tư duy phức tạp hơn.', en: 'From simple calculations to complex logic challenges.', ru: 'От простых вычислений до сложных логических задач.' },
    'dev_title': { vi: 'Đội Ngũ Phát Triển', en: 'Development Team', ru: 'Команда разработчиков' },
    'dev_desc': { vi: 'Dự án được xây dựng vì cộng đồng.', en: 'Project built for the community.', ru: 'Проект, созданный для сообщества.' },
    'settings_title': { vi: 'Cài Đặt', en: 'Settings', ru: 'Настройки' },
    'settings_lang': { vi: 'Ngôn ngữ:', en: 'Language:', ru: 'Язык:' },
    'settings_close': { vi: 'Đóng', en: 'Close', ru: 'Закрыть' },
    'result_great': { vi: 'Tuyệt vời!', en: 'Great Job!', ru: 'Отлично!' },
    'result_score': { vi: 'Bạn đạt {score} / {total} điểm', en: 'You got {score} / {total} points', ru: 'Ваш счет: {score} / {total}' },
    'btn_replay': { vi: 'Chơi lại', en: 'Replay', ru: 'Заново' },
    'btn_menu': { vi: 'Trở về', en: 'Menu', ru: 'Меню' },
    // UI
    'ui_score': { vi: 'Điểm', en: 'Score', ru: 'Счет' },
    'ui_correct': { vi: 'Chính xác! 🎉', en: 'Correct! 🎉', ru: 'Верно! 🎉' },
    'ui_wrong': { vi: 'Sai rồi, thử lại!', en: 'Wrong, try again!', ru: 'Неверно, повторите!' },
    // Questions
    'q_min': { vi: 'Số bé nhất trong: {val}', en: 'Smallest number in: {val}', ru: 'Наименьшее число: {val}' },
    'q_max': { vi: 'Số lớn nhất trong: {val}', en: 'Largest number in: {val}', ru: 'Наибольшее число: {val}' },
    'q_clock': { vi: 'Bây giờ là mấy giờ? (Kim ngắn: {a}, kim dài: 12)', en: 'What time is it? (Short hand: {a}, long hand: 12)', ru: 'Который час? (Короткая: {a}, длинная: 12)' },
    'q_find_x': { vi: 'Tìm x?', en: 'Find x?', ru: 'Найти x?' },
    'q_scaling_up': { vi: 'Số gấp {n} lần số {a} là bao nhiêu?', en: 'What is {n} times {a}?', ru: 'Во сколько раз {n} больше {a}?' },
    'q_scaling_down': { vi: 'Số giảm đi {n} lần của số {a} là bao nhiêu?', en: 'What is {a} divided by {n}?', ru: 'Во сколько раз {n} меньше {a}?' },
    'q_div_remainder': { vi: '(Chỉ lấy phần nguyên)', en: '(Quotient only)', ru: '(Только целое)' },
    'q_roman': { vi: 'Số La Mã {val} là số mấy?', en: 'What number is Roman numeral {val}?', ru: 'Какое число обозначает {val}?' },
    'q_area_rect': { vi: 'S hình chữ nhật cạnh {a}cm và {b}cm là bao nhiêu cm2?', en: 'Area of rectangle with sides {a}cm and {b}cm?', ru: 'Площадь прямоугольника {a}см и {b}см?' },
    'q_area_para': { vi: 'S hình bình hành đáy {a}cm, cao {b}cm là?', en: 'Area of parallelogram base {a}cm, height {b}cm?', ru: 'Площадь параллелограмма {a}см и {b}см?' },
    'q_area_rhom': { vi: 'S hình thoi có 2 đường chéo {a}cm và {b}cm là?', en: 'Area of rhombus with diagonals {a}cm and {b}cm?', ru: 'Площадь ромба с диагоналями {a}см и {b}см?' },
    'q_simplify': { vi: 'Rút gọn {val} về tối giản. Kết quả ?/{b}', en: 'Simplify {val}. Result ?/{b}', ru: 'Упростите {val}. Результат ?/{b}' },
    'q_div_check': { vi: 'Số {a} có chia hết cho {n} không? (1=Có, 0=Không)', en: 'Is {a} divisible by {n}? (1=Yes, 0=No)', ru: 'Делится ли {a} на {n}? (1=Да, 0=Нет)' },
    'q_unit_weight': { vi: '{a} tấn = ? kg', en: '{a} tons = ? kg', ru: '{a} тонн = ? кг' },
    'q_average': { vi: 'Trung bình cộng của {val} là?', en: 'Average of {val} is?', ru: 'Среднее арифметическое {val}?' },
    'q_unit_cm': { vi: '{a}cm + {b}cm = ? cm', en: '{a}cm + {b}cm = ? cm', ru: '{a}см + {b}см = ? см' }
};

// GLOBAL STATE
let state = {
    lang: localStorage.getItem('math_learner_lang') || 'en',
    currentGrade: null,
    currentSection: null,
    currentLevel: null,
    score: 0,
    totalQuestions: 10,
    currentQuestionIndex: 0,
    currQuestion: null,
    userInput: '',
    isAnswerLocked: false
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

const t = (key, params = {}) => {
    let str = (SITE_TRANSLATIONS[key] && SITE_TRANSLATIONS[key][state.lang]) || key;
    for (const [p, val] of Object.entries(params)) {
        str = str.replace(`{${p}}`, val);
    }
    return str;
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// MATH LOGIC GENERATOR
const generateQuestion = (sectionId, levelId) => {
    let q = { text: '', ans: '', type: 'input' }; // type: 'input' or 'compare'
    let a, b, c, d;

    // We mostly use levelId now since they are unique e.g. 'g1_n1'
    switch (levelId) {
        // --- GRADE 1 ---
        case 'g1_n1': // Counting - missing numbers
            a = getRandomInt(1, 15);
            let seq = [a, a + 1, a + 2, a + 3, a + 4];
            let missingIdx = getRandomInt(0, 4);
            let ans = seq[missingIdx];
            seq[missingIdx] = '...';
            q.text = seq.join(', ');
            q.ans = ans.toString();
            break;

        case 'g1_n2': // Comparison < 100
            a = getRandomInt(1, 100);
            b = getRandomInt(1, 100);
            q.type = 'compare';
            q.valA = a;
            q.valB = b;
            q.ans = a > b ? '>' : (a < b ? '<' : '=');
            break;

        case 'g1_n3': // Ordering
            // For simplicity, let's ask for the smallest or largest of 3
            let nums = [getRandomInt(1, 100), getRandomInt(1, 100), getRandomInt(1, 100)];
            // ensure unique
            nums = [...new Set(nums)];
            if (nums.length < 3) nums.push(getRandomInt(1, 100));
            if (Math.random() > 0.5) {
                q.text = t('q_min', { val: nums.join(', ') });
                q.ans = Math.min(...nums).toString();
            } else {
                q.text = t('q_max', { val: nums.join(', ') });
                q.ans = Math.max(...nums).toString();
            }
            break;

        case 'g1_o1': // Add/Sub range 10
            a = getRandomInt(1, 9);
            if (Math.random() > 0.5) {
                b = getRandomInt(0, 10 - a);
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                b = getRandomInt(0, a);
                q.text = `${a} - ${b} = ?`;
                q.ans = (a - b).toString();
            }
            break;

        case 'g1_o2': // Range 20 no regroup
            if (Math.random() > 0.5) {
                a = getRandomInt(10, 15);
                b = getRandomInt(0, 4);
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                a = getRandomInt(11, 19);
                b = getRandomInt(0, a % 10);
                q.text = `${a} - ${b} = ?`;
                q.ans = (a - b).toString();
            }
            break;

        case 'g1_o3': // Tens < 100
            a = getRandomInt(1, 8) * 10;
            if (Math.random() > 0.5) {
                b = getRandomInt(1, 9 - (a / 10)) * 10;
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                b = getRandomInt(1, a / 10) * 10;
                q.text = `${a} - ${b} = ?`;
                q.ans = (a - b).toString();
            }
            break;

        case 'g1_o4': // Range 100 no regroup
            a = getRandomInt(21, 80);
            if (Math.random() > 0.5) {
                b = getRandomInt(1, 9 - (a % 10)); // unit
                c = getRandomInt(1, 9 - Math.floor(a / 10)) * 10; // tens
                b = b + c;
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                b = getRandomInt(0, a % 10);
                c = getRandomInt(1, Math.floor(a / 10) - 1) * 10;
                b = b + c;
                q.text = `${a} - ${b} = ?`;
                q.ans = (a - b).toString();
            }
            break;

        case 'g1_g1': // Clock
            a = getRandomInt(1, 12);
            q.text = t('q_clock', { a: a });
            q.ans = a.toString();
            break;

        case 'g1_g2': // Length cm
            a = getRandomInt(1, 10);
            b = getRandomInt(1, 10);
            q.text = t('q_unit_cm', { a: a, b: b });
            q.ans = (a + b).toString();
            break;

        // --- GRADE 2 ---
        case 'g2_o1': // Addition with carrying
            a = getRandomInt(15, 85);
            b = getRandomInt(15, 99 - a);
            // Ensure carrying? 
            if ((a % 10) + (b % 10) < 10) b += (10 - (a % 10));
            q.text = `${a} + ${b} = ?`;
            q.ans = (a + b).toString();
            break;

        case 'g2_o2': // Subtraction with borrowing
            a = getRandomInt(31, 99);
            b = getRandomInt(11, a - 5);
            // Ensure borrowing
            if ((a % 10) >= (b % 10)) b = (Math.floor(b / 10) * 10) + (a % 10) + 1;
            if (b >= a) b = a - 1;
            q.text = `${a} - ${b} = ?`;
            q.ans = (a - b).toString();
            break;

        case 'g2_o3': // Find x
            a = getRandomInt(5, 30);
            b = getRandomInt(5, 30);
            c = a + b;
            if (Math.random() > 0.5) {
                q.text = `x + ${a} = ${c}. ` + t('q_find_x');
                q.ans = b.toString();
            } else {
                q.text = `${c} - x = ${a}. ` + t('q_find_x');
                q.ans = b.toString();
            }
            break;

        case 'g2_m1': // Mul 2-5
            a = getRandomInt(2, 5);
            b = getRandomInt(1, 10);
            q.text = `${a} × ${b} = ?`;
            q.ans = (a * b).toString();
            break;

        case 'g2_m2': // Div 2-5
            b = getRandomInt(2, 5);
            c = getRandomInt(1, 10);
            a = b * c;
            q.text = `${a} : ${b} = ?`;
            q.ans = c.toString();
            break;

        case 'g2_m3': // Scaling
            a = getRandomInt(2, 10);
            if (Math.random() > 0.5) {
                q.text = t('q_scaling_up', { a: a, n: 3 });
                q.ans = (a * 3).toString();
            } else {
                q.text = t('q_scaling_down', { a: a * 2, n: 2 });
                q.ans = a.toString();
            }
            break;

        case 'g2_n1': // Range 1000 compare
            a = getRandomInt(100, 999);
            b = getRandomInt(100, 999);
            q.type = 'compare';
            q.valA = a;
            q.valB = b;
            q.ans = a > b ? '>' : (a < b ? '<' : '=');
            break;

        case 'g2_n2': // Add/Sub 1000 no regroup
            a = getRandomInt(200, 700);
            b = getRandomInt(100, 200);
            if (Math.random() > 0.5) {
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                q.text = `${a} - ${b} = ?`;
                q.ans = (a - b).toString();
            }
            break;

        // --- GRADE 3 ---
        case 'g3_m1': // Mul 6-9
            a = getRandomInt(6, 9);
            b = getRandomInt(1, 10);
            q.text = `${a} × ${b} = ?`;
            q.ans = (a * b).toString();
            break;

        case 'g3_m2': // 2/3-digit x 1-digit
            a = getRandomInt(11, 200);
            b = getRandomInt(2, 5);
            q.text = `${a} × ${b} = ?`;
            q.ans = (a * b).toString();
            break;

        case 'g3_m3': // Div with remainder
            b = getRandomInt(2, 9);
            c = getRandomInt(2, 10); // Quotient
            d = getRandomInt(1, b - 1); // Remainder
            a = b * c + d;
            q.text = `${a} : ${b} = ? ` + t('q_div_remainder');
            q.ans = c.toString();
            break;

        case 'g3_l1': // Order of ops
            a = getRandomInt(10, 30);
            b = getRandomInt(2, 5);
            c = getRandomInt(2, 5);
            // 20 + 5 * 2
            q.text = `${a} + ${b} × ${c} = ?`;
            q.ans = (a + b * c).toString();
            break;

        case 'g3_l2': // Advanced Find X
            a = getRandomInt(2, 5);
            b = getRandomInt(20, 50);
            c = a * b;
            q.text = `x × ${a} = ${c}. ` + t('q_find_x');
            q.ans = b.toString();
            break;

        case 'g3_g1': // Roman
            let romans = { 'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10 };
            let keys = Object.keys(romans);
            let rIdx = getRandomInt(0, 9);
            q.text = t('q_roman', { val: keys[rIdx] });
            q.ans = romans[keys[rIdx]].toString();
            break;

        case 'g3_g2': // 100k Range Add/Sub
            a = getRandomInt(10000, 50000);
            b = getRandomInt(10000, 40000);
            if (Math.random() > 0.5) {
                q.text = `${a} + ${b} = ?`;
                q.ans = (a + b).toString();
            } else {
                q.text = `${a + b} - ${a} = ?`;
                q.ans = b.toString();
            }
            break;

        case 'g3_g3': // Area
            a = getRandomInt(3, 10);
            b = getRandomInt(3, 10);
            q.text = t('q_area_rect', { a: a, b: b });
            q.ans = (a * b).toString();
            break;

        // --- GRADE 4 ---
        case 'g4_f1': // Simplify fraction
            c = getRandomInt(2, 5);
            a = getRandomInt(1, 3);
            b = getRandomInt(4, 6);
            // Example: 2/4 -> 1/2
            q.text = t('q_simplify', { val: `${a * c}/${b * c}`, b: b });
            q.ans = a.toString();
            break;

        case 'g4_f2': // Add/Sub same denominator
            a = getRandomInt(1, 5);
            b = getRandomInt(1, 5);
            c = 12;
            q.text = `${a}/${c} + ${b}/${c} = ?/${c}`;
            q.ans = (a + b).toString();
            break;

        case 'g4_f3': // Mul fraction
            a = getRandomInt(1, 4);
            b = getRandomInt(5, 9);
            q.text = `${a}/2 × ${b}/3 = ?/6`;
            q.ans = (a * b).toString();
            break;

        case 'g4_o1': // Big Mul/Div
            a = getRandomInt(100, 150);
            b = getRandomInt(11, 13);
            q.text = `${a} × ${b} = ?`;
            q.ans = (a * b).toString();
            break;

        case 'g4_o2': // Average
            a = getRandomInt(10, 20);
            b = getRandomInt(20, 30);
            c = getRandomInt(30, 40);
            let sum = a + b + c;
            // ensure divisible by 3 by adjusting c
            let rem = sum % 3;
            if (rem !== 0) c += (3 - rem);
            q.text = t('q_average', { val: `${a}, ${b}, ${c}` });
            q.ans = ((a + b + c) / 3).toString();
            break;

        case 'g4_o3': // Divisibility
            a = [120, 123, 124, 125, 129][getRandomInt(0, 4)];
            q.text = t('q_div_check', { a: a, n: 3 });
            // if a=120, 1+2+0=3 (yes), if a=123, 1+2+3=6 (yes), if a=129, 1+2+9=12 (yes)
            q.ans = (a % 3 === 0) ? "1" : "0";
            break;

        case 'g4_g1': // Unit conversion
            a = getRandomInt(2, 10);
            q.text = t('q_unit_weight', { a: a });
            q.ans = (a * 1000).toString();
            break;

        case 'g4_g2': // Parallelogram area
            a = getRandomInt(5, 15); // base
            b = getRandomInt(4, 10); // height
            q.text = t('q_area_para', { a: a, b: b });
            q.ans = (a * b).toString();
            break;

        case 'g4_g3': // Rhombus area
            a = getRandomInt(4, 12); // diagonal 1
            b = getRandomInt(4, 10); // diagonal 2
            // ensure a*b is even
            if ((a * b) % 2 !== 0) a++; // make it even
            q.text = t('q_area_rhom', { a: a, b: b });
            q.ans = ((a * b) / 2).toString();
            break;

        default:
            q.text = "1 + 1 = ?";
            q.ans = "2";
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
    state.currentGrade = null;
    state.currentSection = null;
    state.currentLevel = null;
    renderHeader(false); // Hide back button

    const main = document.getElementById('main-content');
    main.innerHTML = `<div class="menu-grid"></div>`;
    const grid = main.querySelector('.menu-grid');

    APP_DATA.grades.forEach(grade => {
        const card = document.createElement('div');
        card.className = `menu-card ${grade.styleRef}`;
        card.onclick = () => renderSectionsByGrade(grade);

        card.innerHTML = `
            <div class="card-icon">${grade.icon}</div>
            <div class="card-info">
                <h3>${grade.title[state.lang]}</h3>
                <p>${grade.desc[state.lang]}</p>
            </div>
            <div><i class="fas fa-chevron-right" style="color: #ccc"></i></div>
        `;
        grid.appendChild(card);
    });
}

const renderSectionsByGrade = (grade) => {
    state.currentGrade = grade;
    state.currentSection = null;
    renderHeader(true);

    const main = document.getElementById('main-content');
    main.innerHTML = `
        <h2 style="margin-top:0">${grade.title[state.lang]}</h2>
        <div class="menu-grid"></div>
    `;
    const grid = main.querySelector('.menu-grid');

    grade.sections.forEach(sec => {
        const card = document.createElement('div');
        card.className = `menu-card`;
        card.style.padding = '15px';
        card.onclick = () => renderLevels(sec);

        card.innerHTML = `
            <div class="card-info">
                <h3 style="margin-bottom:0">${sec.title[state.lang]}</h3>
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
            <span class="level-number">${lvl.title[state.lang]}</span>
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
    state.isAnswerLocked = false;

    renderGameScreen();
    nextQuestion();
}

const renderGameScreen = () => {
    const main = document.getElementById('main-content');
    // Using generic layout, content filled by nextQuestion
    main.innerHTML = `
        <div class="game-area">
            <div class="game-header">
                <span>${state.currentLevel.title[state.lang]}</span>
                <span>${t('ui_score')}: <span id="score-display">0</span></span>
            </div>
            
            <div class="game-body">
                <div id="game-question-container">
                    <!-- Content Injected Here -->
                </div>

                <div id="keypad-container"></div>
            </div>
        </div>
    `;

    renderKeypad();
}

const renderKeypad = () => {
    const container = document.getElementById('keypad-container');
    if (!container) return;

    // Determine type: check current question first, then fallback to level heuristics
    let isComparison = false;
    if (state.currQuestion) {
        isComparison = (state.currQuestion.type === 'compare');
    } else {
        // Heuristic for the very first render before nextQuestion() is called
        isComparison = ['g1_n2', 'g2_n1'].includes(state.currentLevel.id);
    }

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
    state.isAnswerLocked = false;
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
    // Prevent double-checking if answer is already locked
    if (state.isAnswerLocked) return;
    if (!state.userInput) return;

    if (state.userInput === state.currQuestion.ans) {
        // Lock the answer to prevent multiple checks
        state.isAnswerLocked = true;

        // Correct
        playSound('sound-correct');
        state.score++;
        document.getElementById('score-display').innerText = state.score;

        // Show success message
        showToast(t('ui_correct'), 'success');

        // Move to next question
        setTimeout(() => {
            nextQuestion();
        }, 1200);
    } else {
        // Wrong
        playSound('sound-wrong');
        const disp = document.getElementById('answer-display');
        disp.classList.add('shake');

        // Show error message
        showToast(t('ui_wrong'), 'error');

        setTimeout(() => disp.classList.remove('shake'), 500);
    }
}

const applyTranslations = () => {
    // Translate static elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (SITE_TRANSLATIONS[key]) {
            el.innerText = SITE_TRANSLATIONS[key][state.lang];
        }
    });

    // Update select dropdown if it exists
    const select = document.getElementById('lang-select');
    if (select) select.value = state.lang;
}

window.changeLang = (lang) => {
    state.lang = lang;
    localStorage.setItem('math_learner_lang', lang);
    playSound('sound-click');

    // Close modal if it was open (from game settings)
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.classList.add('hidden');

    applyTranslations();

    // If we're in a game or section, we might need to re-render to update dynamic content
    if (state.currentLevel) {
        renderGameScreen();
        nextQuestion();
    } else if (state.currentSection) {
        renderLevels(state.currentSection);
    } else if (state.currentGrade) {
        renderSectionsByGrade(state.currentGrade);
    } else {
        renderHome();
    }
}

const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'times-circle'}"></i> ${message}`;

    container.appendChild(toast);

    // Auto remove after animation
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

const finishGame = () => {
    playSound('sound-win');
    const main = document.getElementById('main-content');

    const msg = SITE_TRANSLATIONS['result_great'][state.lang];
    const sub = SITE_TRANSLATIONS['result_score'][state.lang]
        .replace('{score}', state.score)
        .replace('{total}', state.totalQuestions);

    main.innerHTML = `
        <div class="result-screen">
            <i class="fas fa-trophy trophy-icon"></i>
            <h1 class="result-title">${msg}</h1>
            <p class="result-subtitle">${sub}</p>
            
            <div class="result-actions">
                <button class="btn-primary" onclick="renderHome()">
                    <i class="fas fa-home"></i> ${SITE_TRANSLATIONS['btn_menu'][state.lang]}
                </button>
                 <button class="btn-primary" onclick="startGame(state.currentSection, state.currentLevel)" style="background:var(--primary-color);">
                    <i class="fas fa-redo"></i> ${SITE_TRANSLATIONS['btn_replay'][state.lang]}
                </button>
            </div>
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

    title.innerText = SITE_TRANSLATIONS['settings_title'][state.lang];
    msg.innerText = SITE_TRANSLATIONS['settings_lang'][state.lang];

    actions.innerHTML = `
        <button class="btn-primary" onclick="changeLang('vi')" style="width:100%; margin-bottom:10px;">Tiếng Việt 🇻🇳</button>
        <button class="btn-primary" onclick="changeLang('en')" style="width:100%; margin-bottom:10px; background:#74b9ff;">English 🇬🇧</button>
        <button class="btn-primary" onclick="changeLang('ru')" style="width:100%; background:#a29bfe;">Русский 🇷🇺</button>
        <button class="btn-primary" onclick="closeModal()" style="width:100%; background:#b2bec3; margin-top:20px;">${SITE_TRANSLATIONS['settings_close'][state.lang]}</button>
    `;

    overlay.classList.remove('hidden');
}

const closeModal = () => {
    document.getElementById('modal-overlay').classList.add('hidden');
    playSound('sound-click');
}

// Expose to window for onclick handlers (most are already exposed by being global functions)
window.closeModal = closeModal;

// NAVIGATION
const settingsBtn = document.getElementById('btn-settings');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        playSound('sound-click');
        showSettingsModal();
    });
}

const backBtn = document.getElementById('btn-back');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        playSound('sound-click');
        if (state.currentLevel) {
            // If in game, go back to level select
            renderLevels(state.currentSection);
            state.currentLevel = null;
        } else if (state.currentSection) {
            // If in Level Select, go to Grade Sections
            renderSectionsByGrade(state.currentGrade);
            state.currentSection = null;
        } else if (state.currentGrade) {
            // If in Grade Sections, go to Home
            renderHome();
        }
    });
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();

    // Set mobile menu toggle
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // sync language select dropdown if exists
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = state.lang;
    }

    // Only initialize game if main-content exists
    if (document.getElementById('main-content')) {
        renderHome();
    }
});
