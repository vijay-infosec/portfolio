/* TERMINAL FLOW */
const terminalText = document.getElementById("terminal-text");
const enterBtn = document.getElementById("enter-btn");
const terminalScreen = document.getElementById("terminal-screen");

setTimeout(() => {
    terminalText.remove();
    enterBtn.classList.remove("hidden");
}, 4200);

enterBtn.addEventListener("click", () => {
    terminalScreen.classList.add("exit");
    setTimeout(() => terminalScreen.remove(), 800);
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

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px Consolas";

    drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.95 ? 0 : y + 1;
    });
}

setInterval(drawMatrix, 60);

/* ROLE TYPING */
const roles = [
    "Detection Engineering & Threat Hunting",
    "Malware Analysis & Behavioral Profiling",
    "SIEM and EDR Operations",
    "Network Anomaly Detection",
    "Applied Machine Learning for Cybersecurity"
];

let roleIndex = 0;
let charIndex = 0;
const typedRole = document.getElementById("typed-role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typedRole.textContent += roles[roleIndex][charIndex++];
        setTimeout(typeRole, 80);
    } else {
        setTimeout(deleteRole, 1200);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        typedRole.textContent = roles[roleIndex].slice(0, --charIndex);
        setTimeout(deleteRole, 40);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
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

sections.forEach(sec => {
    sec.classList.add("reveal");
    observer.observe(sec);
});

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* LOGO SCROLL TOP */
document.querySelector(".logo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
