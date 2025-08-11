import Gameboard from "./src/logic/gameboard.js";
import GameController from "./src/logic/gamecontroller.js";
import ConsoleUI from "./src/ui/consoleUI.js";

console.log(Gameboard.getBoard());

console.log(GameController.checkTie(Gameboard.getBoard()));
