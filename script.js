// Biến toàn cục
let currentAnswer = 8;
let userTypedAnswer = "";
let currentLang = "en";

const translations = {
    en: {
        hint: "Hint",
        check: "Check",
        clear: "Clear",
        ok: "OK",
        continue: "Continue",
        correct_title: "Correct!",
        correct_msg: "You drew the number {num} beautifully!",
        wrong_title: "Oops!",
        wrong_msg: "{correct} is the answer, but I thought you drew {num}. Try again!",
        system_title: "System",
        no_ocr: "Could not recognize. Write clearer or use the keypad!",
        hint_msg: "The result is {ans}"
    },
    vi: {
        hint: "Gợi ý",
        check: "Kiểm tra",
        clear: "Xóa",
        ok: "Xong",
        continue: "Tiếp tục",
        correct_title: "Chính xác!",
        correct_msg: "Bé vẽ số {num} rất đẹp!",
        wrong_title: "Tiếc quá!",
        wrong_msg: "{correct} mới là đáp án đúng, nhưng máy tính nghĩ bé vẽ {num}. Thử lại nhé!",
        system_title: "Hệ thống",
        no_ocr: "Không nhận diện được. Bé viết rõ hơn hoặc dùng bàn phím nhé!",
        hint_msg: "Kết quả là {ans}"
    },
    ru: {
        hint: "Подсказка",
        check: "Проверить",
        clear: "Стереть",
        ok: "ОК",
        continue: "Продолжить",
        correct_title: "Правильно!",
        correct_msg: "Ты нарисовал число {num} очень красиво!",
        wrong_title: "Ой!",
        wrong_msg: "Правильный ответ {correct}, а я подумал, что это {num}. Попробуй еще раз!",
        system_title: "Система",
        no_ocr: "Не удалось распознать. Пиши четче или используй кнопки!",
        hint_msg: "Результат: {ans}"
    }
};

function changeLanguage() {
    currentLang = document.getElementById("lang-select").value;
    updateUI();
}

function updateUI() {
    const t = translations[currentLang];
    document.getElementById("btn-clear-text").innerText = t.clear;
    document.getElementById("btn-hint-text").innerText = t.hint;
    document.getElementById("btn-check-text").innerText = t.check;
    document.getElementById("btn-ok-text").innerText = t.ok;

    const modalBtn = document.querySelector("#game-modal .btn-primary");
    if (modalBtn) modalBtn.innerText = t.continue;
}

function generateQuestion() {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    currentAnswer = a + b;
    document.getElementById("num1").innerText = a;
    document.getElementById("num2").innerText = b;
    document.getElementById("operator").innerText = "+";
    userTypedAnswer = "";
    document.getElementById("user-answer").innerText = "?";
}

function inputNumber(num) {
    userTypedAnswer += num;
    document.getElementById("user-answer").innerText = userTypedAnswer;
}

function clearAnswer() {
    userTypedAnswer = "";
    document.getElementById("user-answer").innerText = "?";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showHint() {
    const t = translations[currentLang];
    showModal(t.hint, t.hint_msg.replace("{ans}", currentAnswer), "💡");
}

function showModal(title, message, icon = "⭐") {
    const modal = document.getElementById("game-modal");
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal-icon").innerText = icon;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("game-modal").style.display = "none";
}

const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");
let painting = false;

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function startPosition(e) {
    painting = true;
    draw(e);
}
function finishedPosition() {
    painting = false;
    ctx.beginPath();
}
function draw(e) {
    if (!painting) return;
    const rect = canvas.getBoundingClientRect();
    let clientX = e.clientX || (e.touches && e.touches[0].clientX);
    let clientY = e.clientY || (e.touches && e.touches[0].clientY);
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#2d3436";
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseleave", finishedPosition);

canvas.addEventListener("touchstart", (e) => { e.preventDefault(); startPosition(e); });
canvas.addEventListener("touchend", finishedPosition);
canvas.addEventListener("touchmove", (e) => { e.preventDefault(); draw(e); });

async function checkAnswer() {
    const t = translations[currentLang];
    let finalAnswer = userTypedAnswer;
    if (finalAnswer === "") {
        const answerBox = document.getElementById("user-answer");
        answerBox.innerText = "...";
        finalAnswer = await recognizeHandwriting();
        if (finalAnswer) {
            answerBox.innerText = finalAnswer;
        } else {
            showModal(t.system_title, t.no_ocr, "❓");
            answerBox.innerText = "?";
            return;
        }
    }
    if (parseInt(finalAnswer) === currentAnswer) {
        showModal(t.correct_title, t.correct_msg.replace("{num}", finalAnswer), "⭐");
        const scoreElement = document.getElementById("score-label");
        let currentScoreStr = scoreElement.innerText.replace("⭐ ", "").trim();
        let currentScore = parseInt(currentScoreStr) || 0;
        scoreElement.innerText = "⭐ " + (currentScore + 10);
        const fill = document.querySelector(".fill");
        let currentWidth = parseInt(fill.style.width) || 0;
        if (currentWidth < 100) fill.style.width = (currentWidth + 10) + "%";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        generateQuestion();
    } else {
        showModal(t.wrong_title, t.wrong_msg.replace("{correct}", currentAnswer).replace("{num}", finalAnswer), "💔");
        document.getElementById("user-answer").innerText = "?";
        userTypedAnswer = "";
    }
}

async function recognizeHandwriting() {
    try {
        const trimmedCanvas = getTrimmedCanvas(canvas);
        if (!trimmedCanvas) return null;
        const dataUrl = trimmedCanvas.toDataURL("image/png");
        const result = await Tesseract.recognize(dataUrl, "eng", {
            tessedit_char_whitelist: "0123456789",
            tessedit_pageseg_mode: "7"
        });
        return result.data.text.trim().replace(/[^0-9]/g, "");
    } catch (error) {
        console.error("Lỗi nhận diện:", error);
        return null;
    }
}

function getTrimmedCanvas(sourceCanvas) {
    const context = sourceCanvas.getContext("2d");
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    let minX = width, minY = height, maxX = 0, maxY = 0;
    let found = false;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const alpha = data[(y * width + x) * 4 + 3];
            if (alpha > 0) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                found = true;
            }
        }
    }
    if (!found) return null;
    const trimWidth = maxX - minX + 1;
    const trimHeight = maxY - minY + 1;
    const padding = 40;
    const destCanvas = document.createElement("canvas");
    destCanvas.width = trimWidth + padding * 2;
    destCanvas.height = trimHeight + padding * 2;
    const destCtx = destCanvas.getContext("2d");
    destCtx.fillStyle = "white";
    destCtx.fillRect(0, 0, destCanvas.width, destCanvas.height);
    destCtx.drawImage(sourceCanvas, minX, minY, trimWidth, trimHeight, padding, padding, trimWidth, trimHeight);
    return destCanvas;
}

updateUI();
generateQuestion();
