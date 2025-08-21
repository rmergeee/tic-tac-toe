import GameController from "../logic/gamecontroller.js";
import Gameboard from "../logic/gameboard.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const log = console.log;

const ConsoleUI = (function () {

    const firstPlayerName = prompt("Введіть ім'я гравця X: ");
    const secondPlayerName = prompt("Введіть ім'я гравця O: ");
    const contrl = GameController(firstPlayerName, secondPlayerName);
    console.table(Gameboard.getBoard());

    const playGame = () => {
        while (contrl.getGameStatus() === false) {
            log("Хід гравця - " + contrl.getActivePlayer().name);

            let row;
            let column;

            do {
                do {
                    row = Number(prompt("Введіть рядок (0-2): "));
                } while (isNaN(row) || row < 0 || row > 2);

                do {
                    column = Number(prompt("Введіть колонку (0-2): "));
                } while (isNaN(column) || column < 0 || column > 2);

                if (Gameboard.getBoard()[row][column] !== null) log("Ця клітинка зайнята! Оберіть іншу.");

            } while (Gameboard.getBoard()[row][column] !== null)

            Gameboard.placeToken(row, column, contrl.getActivePlayer().token);
            console.table(Gameboard.getBoard());

            if (contrl.checkWin(Gameboard.getBoard(), contrl.getActivePlayer().token)) {
                log(contrl.getActivePlayer().name + " win!");
                break;
            }

            if (contrl.checkTie(Gameboard.getBoard())) {
                log("Tie!");
                contrl.changeGameStatusTrue();
            }

            contrl.switchPlayerTurn();
        }
    }

    return {
        playGame,
    }
})();

export default ConsoleUI;