/* ================================
   TERMINAL TYPING
================================ */
const introLines = [
    "> Initializing system...",
    "> Verifying identity...",
    "> Access granted.",
    "> Loading portfolio interface..."
];

let line = 0, char = 0;

function typeIntro() {
    const box = document.querySelector(".typed-text");

    if (line < introLines.length) {
        if (char < introLines[line].length) {
            box.textContent += introLines[line].charAt(char);
            char++;
            setTimeout(typeIntro, 45);
        } else {
            box.textContent += "\n";
            char = 0;
            line++;
            setTimeout(typeIntro, 200);
        }
    }
}

window.onload = typeIntro;

/* ================================
   ENTER BUTTON
================================ */
document.getElementById("enter-btn").addEventListener("click", () => {

    const intro = document.getElementById("intro-screen");
    const panel = document.getElementById("reveal-panel");
    const site = document.getElementById("site-content");

    intro.style.opacity = "0";

    // Slide panel upward
    setTimeout(() => {
        panel.style.transform = "translateY(-100%)";
    }, 300);

    // Remove intro screen
    setTimeout(() => {
        intro.style.display = "none";
    }, 700);

    // Show site content
    setTimeout(() => {
        site.classList.add("show");
    }, 900);

    // Start rotating titles
    startRotateTitles();
});

/* ================================
   ROTATING TITLES
================================ */
const roles = [
    "Cybersecurity Analyst",
    "Threat Detection Specialist",
    "Adversary Logic & Ethical Hacking",
    "Behavior Analysis",
    "Defensive Engineering"
];

let rIndex = 0, rChar = 0;

function startRotateTitles() {
    const t = document.getElementById("dynamic-text");
    const role = roles[rIndex];

    if (rChar < role.length) {
        t.textContent += role.charAt(rChar);
        rChar++;
        setTimeout(startRotateTitles, 60);
    } else {
        setTimeout(() => {
            t.textContent = "";
            rChar = 0;
            rIndex = (rIndex + 1) % roles.length;
            startRotateTitles();
        }, 1200);
    }
}

/* ================================
   FADE SECTIONS
================================ */
const fadeSections = document.querySelectorAll(".fade-section");

const obs = new IntersectionObserver(
    entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
    { threshold: 0.55 }
);

fadeSections.forEach(s => obs.observe(s));

/* ================================
   MODAL SYSTEM
================================ */
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById(card.dataset.modal).style.display = "flex";
    });
});

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(m => {
        if (e.target === m) m.style.display = "none";
    });
});
