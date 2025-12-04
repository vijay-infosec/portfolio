/* ==============================================
   TERMINAL TYPING
============================================== */
const introLines = [
    "> Initializing system...",
    "> Verifying identity...",
    "> Access granted.",
    "> Loading portfolio interface..."
];

let line = 0, charPos = 0;

function typeIntro() {
    const box = document.querySelector(".typed-text");

    if (line < introLines.length) {
        const current = introLines[line];

        if (charPos < current.length) {
            box.textContent += current.charAt(charPos);
            charPos++;
            setTimeout(typeIntro, 45);
        } else {
            box.textContent += "\n";
            charPos = 0;
            line++;
            setTimeout(typeIntro, 180);
        }
    }

    if (line === introLines.length) {
        setTimeout(() => {
            const btn = document.getElementById("enter-btn");
            btn.style.opacity = "1";
            btn.style.pointerEvents = "auto";
        }, 300);
    }
}

window.onload = typeIntro;


/* ==============================================
   ENTER BUTTON → SHOW SITE
============================================== */
document.getElementById("enter-btn").addEventListener("click", () => {

    const intro = document.getElementById("intro-screen");
    const panel = document.getElementById("reveal-panel");

    intro.style.opacity = "0";

    setTimeout(() => {
        panel.style.transform = "translateY(-100%)";
    }, 200);

    setTimeout(() => {
        intro.style.display = "none";
    }, 600);

    setTimeout(() => {
        document.getElementById("site-content").classList.add("show");
    }, 700);

    startRotateTitles();
});


/* ==============================================
   ROTATING TITLES
============================================== */
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
    const txt = roles[rIndex];

    if (rChar < txt.length) {
        t.textContent += txt.charAt(rChar);
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


/* ==============================================
   SECTION FADE-IN
============================================== */
const fadeSections = document.querySelectorAll(".fade-section");

const obs = new IntersectionObserver(
    entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.4 }
);

fadeSections.forEach(s => obs.observe(s));
