import GameController from "../logic/gamecontroller.js";
import Gameboard from "../logic/gameboard.js";

const BrowserUI = (function () {
    const dialog = document.getElementById('dialog');
    const dialogForm = document.querySelector(".dialog-form");
    const player1NameOnPage = document.querySelector(".player1");
    const player2NameOnPage = document.querySelector(".player2");
    const playerTurn = document.querySelector(".active-player");
    const board = document.querySelector(".board");

    let playerNames = {};

    let game;

    const virtualBoard = Gameboard;

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

    function playGame() {

        setupGame();

        board.addEventListener('click', (event) => {
            const cell = event.target.closest('.cell');
            if (!cell) return;

            const row = Number(cell.dataset.row);
            const column = Number(cell.dataset.col);

            cell.textContent = game.getActivePlayer().token;
            game.switchPlayerTurn();

            Gameboard.placeToken(row, column, game.getActivePlayer().token);

            if (game.checkWin(virtualBoard.getBoard(), game.getActivePlayer().token)) {
                console.log(game.getActivePlayer().name + " win!");
                game.changeGameStatus();
            }

            if (game.checkTie(virtualBoard.getBoard())) {
                console.log("Tie!");
                game.changeGameStatus();
            }
        });
    }



    return {
        playGame,
    }
})()

export default BrowserUI;