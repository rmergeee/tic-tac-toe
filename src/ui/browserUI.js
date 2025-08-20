import GameController from "../logic/gamecontroller.js";
import Gameboard from "../logic/gameboard.js";

const dialog = document.getElementById('dialog');
const dialogForm = document.querySelector(".dialog-form");
const player1NameOnPage = document.querySelector(".player1");
const player2NameOnPage = document.querySelector(".player2");
const board = document.querySelector(".board");

dialog.showModal();

let playerNames = {};

dialogForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(dialogForm)
    formData.forEach((value, key) => playerNames[key] = value);

    if (playerNames.p1name !== "") player1NameOnPage.textContent = playerNames.p1name;
    if (playerNames.p2name !== "") player2NameOnPage.textContent = playerNames.p2name;

    dialog.close();
})
