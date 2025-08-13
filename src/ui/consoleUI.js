import GameController from "../logic/gamecontroller.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();  

const log = console.log;

const ConsoleUI = (function () {

    const firstPlayerName = prompt("Введіть ім'я гравця X: ");
    const secondPlayerName = prompt("Введіть ім'я гравця O: ");
    log("Хід гравця - " + firstPlayerName);
    const contrl = GameController(firstPlayerName, secondPlayerName);

    const playGame = () => {
        while (contrl.getGameStatus() === false) {
            log("Хід гравця - " + firstPlayerName)
            contrl.changeGameStatus();
        }
    }

    return {
        playGame,
    }
})();

export default ConsoleUI;