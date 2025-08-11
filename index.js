import Gameboard from "./src/logic/gameboard.js";
import GameController from "./src/logic/gamecontroller.js";
import ConsoleUI from "./src/ui/consoleUI.js";

console.log(Gameboard.getBoard()[0][0]);

GameController.playRound(0, 0);
GameController.playRound(1, 0);

GameController.playRound(0, 1);
GameController.playRound(1, 1);

GameController.playRound(0, 2);
GameController.playRound(1, 2);
