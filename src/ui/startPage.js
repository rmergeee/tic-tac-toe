const gameLog = `$ ./tic-tac-toe --boot
[BOOT] Initializing Tic-Tac-Toe Game System...
[OK]   Kernel loaded
[OK]   Memory check passed (32MB free)
[INFO] Loading assets...
       -> Board textures .............. OK
       -> Player icons (X / O) ........ OK
       -> Sound effects ............... OK
       -> AI module v1.2 .............. OK
[INFO] Setting up environment...
       -> Applying terminal theme ..... OK
       -> Loading font: Fira Code ..... OK
       -> Screen resolution: 80x25 .... OK
[INFO] Checking user data...
       -> Save slot 1 ................. Empty
       -> Save slot 2 ................. Empty
       -> Achievements ................ None
[OK]   Profile created: "Player1"

[INFO] Connecting players...
       -> Player 1: Human (Local) ..... OK
       -> Player 2: Human (Local) ..... OK
[OK]   Multiplayer module skipped

[SYSTEM] All systems operational.
[SYSTEM] Game engine ready.
──────────────────────────────────────────────
           TIC TAC TOE v1.0 (c) 2025
──────────────────────────────────────────────
Tips: Try to win in less than 5 moves 😉

Press [Enter] to start the game...
`;

const pre = document.querySelector(".gameLog")

let position = 0;

const typeText = () => {
    if (position === gameLog.length) return;

    pre.textContent += gameLog[position];
    position++;

    setTimeout(typeText, 5)
}

function redirectToGamepage() {
    window.location.assign('./game.html');
}

typeText();

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        redirectToGamepage();
    }
});