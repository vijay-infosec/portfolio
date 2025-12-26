/* TERMINAL FLOW – DETERMINISTIC */
const lines = document.querySelectorAll("#terminal-text .line");
const terminalText = document.getElementById("terminal-text");
const enterBtn = document.getElementById("enter-btn");
const terminalScreen = document.getElementById("terminal-screen");

let i = 0;

function showLine() {
    if (i < lines.length) {
        lines[i].style.opacity = "1";
        i++;
        setTimeout(showLine, 800);
    } else {
        terminalText.remove();
        enterBtn.style.display = "block";
    }
}

showLine();

enterBtn.addEventListener("click", () => {
    terminalScreen.remove();
});

/* MATRIX BACKGROUND */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

setInterval(() => {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px Consolas";

    drops.forEach((y, i) => {
        ctx.fillText(letters[Math.floor(Math.random() * 2)], i * fontSize, y * fontSize);
        drops[i] = y * fontSize > canvas.height ? 0 : y + 1;
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
const roleEl = document.getElementById("typed-role");

function typeRole() {
    if (c < roles[r].length) {
        roleEl.textContent += roles[r][c++];
        setTimeout(typeRole, 80);
    } else {
        setTimeout(deleteRole, 1200);
    }
}

function deleteRole() {
    if (c > 0) {
        roleEl.textContent = roles[r].slice(0, --c);
        setTimeout(deleteRole, 40);
    } else {
        r = (r + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

typeRole();

/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
