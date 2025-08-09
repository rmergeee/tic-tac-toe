import Gameboard from "./src/logic/gameboard.js";
import GameController from "./src/logic/gamecontroller.js";
import ConsoleUI from "./src/ui/consoleUI.js";

GameController.playRound(0, 0);
GameController.playRound(0, 1);
GameController.playRound(0, 2);


console.log(Gameboard.getBoard());
