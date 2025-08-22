import GameController from "../logic/gamecontroller.js";
import Gameboard from "../logic/gameboard.js";

const BrowserUI = (function () {
    const dialog = document.querySelector('.start');
    const dialogForm = document.querySelector(".dialog-form");
    const player1NameOnPage = document.querySelector(".player1");
    const player2NameOnPage = document.querySelector(".player2");
    const playerTurn = document.querySelector(".active-player");
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    const restartModal = document.querySelector(".restart");

    let playerNames = {};

    let game;

    function openModal() {
        dialog.showModal();
    }

    function closeModal() {
        dialog.close();
    }

    function setupGame() {
        openModal();

        dialogForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(dialogForm)
            formData.forEach((value, key) => playerNames[key] = value);

            if (playerNames.p1name === "") playerNames.p1name = player1NameOnPage.textContent;
            if (playerNames.p2name === "") playerNames.p2name = player2NameOnPage.textContent;

            if (playerNames.p1name !== "") player1NameOnPage.textContent = playerNames.p1name;
            if (playerNames.p2name !== "") player2NameOnPage.textContent = playerNames.p2name;

            game = GameController(playerNames.p1name, playerNames.p2name);

            closeModal();
        })
    }

    function updateUI(cell) {
        Gameboard.getBoard().forEach((rowValue, row) => {
            rowValue.forEach((colValue, col) => {
                if (Number(cell.dataset.row) === row && Number(cell.dataset.col) === col) {
                    cell.textContent = Gameboard.getBoard()[row][col];
                }
            })
        })
    }

    function restartGame() {
        game.changeGameStatusFalse();
        Gameboard.clearBoard();
        cells.forEach(div => div.textContent = "");
        if(game.getActivePlayer().token === "O") game.switchPlayerTurn();
    }

    function openRestartModal() {
        const rh2 = document.querySelector(".restart-h2")
        rh2.textContent = `The player named ${game.getActivePlayer().name} won.`
        if(game.checkTie(Gameboard.getBoard())) rh2.textContent = "Tie!";
        const rbtn = document.querySelector(".restart-btn");
        rbtn.addEventListener("click", () => {
            restartGame();
            restartModal.close();
        })
        restartModal.showModal();
    }

    function playGame() {

        setupGame();

        board.addEventListener('click', (event) => {
            const cell = event.target.closest('.cell');

            const row = Number(cell.dataset.row);
            const column = Number(cell.dataset.col);

            if (!cell) return;
            if (game.getGameStatus()) {
                return
            };
            if (Gameboard.getBoard()[row][column] !== null) return;

            Gameboard.placeToken(row, column, game.getActivePlayer().token);

            updateUI(cell);

            if (game.checkWin(Gameboard.getBoard(), game.getActivePlayer().token)) {
                openRestartModal();
                game.changeGameStatusTrue();
            }

            if (game.checkTie(Gameboard.getBoard())) {
                openRestartModal();
                game.changeGameStatusTrue();
            }

            game.switchPlayerTurn();
        });
    }



    return {
        playGame,
        restartGame,
    }
})()

export default BrowserUI;