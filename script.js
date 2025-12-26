const terminalText = document.getElementById("terminal-text");
const enterBtn = document.getElementById("enter-btn");
const terminalScreen = document.getElementById("terminal-screen");

/* REMOVE TEXT FIRST, THEN SHOW BUTTON */
setTimeout(() => {
    terminalText.remove();
    enterBtn.classList.remove("hidden");
}, 4200);

enterBtn.addEventListener("click", () => {
    terminalScreen.remove();
});

/* MATRIX */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const size = 16;
const cols = canvas.width / size;
const drops = Array.from({ length: cols }, () => 1);

setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = size + "px Consolas";

    drops.forEach((y, i) => {
        ctx.fillText(letters[Math.floor(Math.random() * 2)], i * size, y * size);
        drops[i] = y * size > canvas.height ? 0 : y + 1;
    });
}, 60);

/* ROLE TYPING */
const roles = [
    "Detection Engineering",
    "Malware Analysis",
    "Threat Hunting",
    "SIEM & EDR Operations"
];

let r = 0, c = 0;
const el = document.getElementById("typed-role");

function type() {
    if (c < roles[r].length) {
        el.textContent += roles[r][c++];
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1200);
    }
}

function erase() {
    if (c > 0) {
        el.textContent = roles[r].slice(0, --c);
        setTimeout(erase, 40);
    } else {
        r = (r + 1) % roles.length;
        setTimeout(type, 300);
    }
}

type();
