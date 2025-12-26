document.addEventListener("DOMContentLoaded", () => {

    /* TERMINAL INTRO */
    const termLines = document.querySelectorAll(".term-line");
    const enterBtn = document.getElementById("enter-btn");
    const terminalScreen = document.getElementById("terminal-screen");

    let i = 0;

    function showTerminalLine() {
        if (i < termLines.length) {
            termLines[i].style.opacity = "1";
            i++;
            setTimeout(showTerminalLine, 800);
        } else {
            enterBtn.style.display = "block";
        }
    }

    showTerminalLine();

    enterBtn.addEventListener("click", () => {
        terminalScreen.remove();
    });

    /* MATRIX BACKGROUND */
    const canvas = document.getElementById("matrix");
    if (canvas) {
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
                ctx.fillText(
                    letters[Math.floor(Math.random() * letters.length)],
                    i * fontSize,
                    y * fontSize
                );
                drops[i] = y * fontSize > canvas.height ? 0 : y + 1;
            });
        }, 60);
    }

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
        if (!roleEl) return;
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

});
