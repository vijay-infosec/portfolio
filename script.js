/* TERMINAL INTRO */
document.body.classList.add("not-loaded");

const terminalScreen = document.getElementById("terminal-screen");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
    terminalScreen.style.opacity = "0";
    terminalScreen.style.transition = "0.8s ease";

    setTimeout(() => {
        terminalScreen.style.display = "none";
        document.body.classList.remove("not-loaded");
    }, 800);
});

/* MATRIX BACKGROUND */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const size = 16;
const columns = canvas.width / size;

let drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = size + "px Consolas";

    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * size, drops[i] * size);

        if (drops[i] * size > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 60);

/* ROLE TYPING EFFECT */
const roles = [
    "Threat Detection",
    "Malware Analysis",
    "Behavior Analysis",
    "Adversary Simulation",
    "Defensive Engineering"
];

let roleIndex = 0;
let charIndex = 0;
const typedRole = document.getElementById("typed-role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        typedRole.textContent += roles[roleIndex][charIndex];
        charIndex++;
        setTimeout(typeRole, 90);
    } else {
        setTimeout(deleteRole, 1200);
    }
}

function deleteRole() {
    if (charIndex > 0) {
        typedRole.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

typeRole();

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* SCROLL TO TOP ON LOGO CLICK */
document.querySelector(".logo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
