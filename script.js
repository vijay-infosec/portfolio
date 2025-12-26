* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #000;
    color: #ccffea;
    font-family: Consolas, monospace;
    overflow-x: hidden;
}

/* HIDDEN */
.hidden {
    display: none;
}

/* TERMINAL */
#terminal-screen {
    position: fixed;
    inset: 0;
    background: #000;
    z-index: 100000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#terminal-text p {
    font-size: 1.6rem;
    color: #00ff88;
    opacity: 0;
    animation: fadeIn 1s forwards;
    margin: 6px 0;
}

#terminal-text p:nth-child(1) { animation-delay: 0.3s; }
#terminal-text p:nth-child(2) { animation-delay: 1s; }
#terminal-text p:nth-child(3) { animation-delay: 1.7s; }
#terminal-text p:nth-child(4) { animation-delay: 2.4s; }

#enter-btn {
    margin-top: 30px;
    padding: 14px 42px;
    border: 2px solid #00ff88;
    background: transparent;
    color: #00ff88;
    border-radius: 8px;
    cursor: pointer;
}

#enter-btn:hover {
    background: #00ff88;
    color: #000;
}

#terminal-screen.exit {
    opacity: 0;
    transform: scale(1.05);
    transition: 0.8s ease;
}

@keyframes fadeIn {
    to { opacity: 1; }
}

/* MATRIX */
#matrix {
    position: fixed;
    inset: 0;
    opacity: 0.08;
    z-index: -1;
}

/* NAVBAR */
#navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 22px 70px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
}

.logo {
    font-size: 2.2rem;
    font-weight: bold;
    color: #00ff88;
    cursor: pointer;
}

.nav-links {
    display: flex;
    gap: 34px;
}

.nav-links a {
    color: #ccffea;
    text-decoration: none;
    font-size: 1.05rem;
    letter-spacing: 0.5px;
}

.resume-btn {
    border: 2px solid #00ff88;
    padding: 8px 22px;
    border-radius: 6px;
    color: #00ff88;
    text-decoration: none;
}

/* HERO */
#hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.hero-name {
    font-size: 3.8rem;
    color: #00ffb0;
}

.hero-role {
    margin-top: 12px;
    font-size: 1.8rem;
}

.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

/* SECTIONS */
section {
    padding: 140px 10%;
    position: relative;
}

section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: linear-gradient(to right, transparent, #00ff8855, transparent);
}

h2 {
    font-size: 2.5rem;
    color: #00ff88;
    margin-bottom: 20px;
}

.about-lead {
    font-size: 1.2rem;
    color: #9affd4;
    margin-bottom: 18px;
}

/* SCROLL REVEAL */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

/* SKILLS */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 18px;
}

.skill {
    border: 1px solid #00ff88;
    padding: 18px;
    border-radius: 10px;
    transition: 0.3s;
}

.skill:hover {
    background: #00ff88;
    color: #000;
}

/* PROJECTS */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.project-card {
    border: 1px solid #00ff88;
    background: #0f0f0f;
    padding: 22px;
    border-radius: 10px;
    text-decoration: none;
    color: #ccffea;
    transition: 0.3s;
}

.project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 18px #00ff88aa;
}

/* CONTACT */
.contact-buttons {
    margin-top: 20px;
    display: flex;
    gap: 20px;
}

.contact-btn {
    border: 1px solid #00ff88;
    padding: 10px 25px;
    border-radius: 8px;
    color: #00ff88;
    text-decoration: none;
}
