import Gameboard from "./gameboard.js";

const GameController = (function (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    const board = Gameboard.getBoard();

    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ]

    let activePlayer = players[0];

    const winningCombinations = [
            // Рядки
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],

            // Стовпчики
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],

            // Діагоналі
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewMove = () => {
        console.log(Gameboard.getBoard());
    };

    const playRound = (row, column) => {
        Gameboard.placeToken(row, column, getActivePlayer().token);

        if(checkWin(Gameboard.getBoard(), getActivePlayer().token)) {
            console.log(getActivePlayer().token + " - WIN!!!");
            printNewMove();
            return
        }
        switchPlayerTurn();
        printNewMove();
    };

    const checkWin = (board, turn) => {
        return winningCombinations.some(combination =>
            combination.every(([row, col]) => board[row][col] === turn)
        );
    }

    return {
        playRound,
        getActivePlayer,
        checkWin,
    };
})()

export default GameController;