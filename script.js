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
    "Malware Analysis",
    "Detection Engineering",
    "Threat Hunting",
    "SIEM & EDR Operations"
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

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
