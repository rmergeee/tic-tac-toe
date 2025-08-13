import Gameboard from "./gameboard.js";

const GameController = function (
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

    let isGameOver = false;

    const getGameStatus = () => isGameOver;

    const changeGameStatus = () => isGameOver = !isGameOver;

    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const playRound = (row, column) => {
        Gameboard.placeToken(row, column, getActivePlayer().token);

        if (checkWin(board, getActivePlayer().token)) {
            return
        };
        if (checkTie(board)) {
            return;
        }

        switchPlayerTurn();
    };

    const checkWin = (board, turn) => {
        return winningCombinations.some(combination =>
            combination.every(([row, col]) => board[row][col] === turn)
        );
    }

    const checkTie = (board) => {
        return board.every(row =>
            row.every(cell => cell !== null)
        );
    };

    return {
        playRound,
        getActivePlayer,
        checkWin,
        checkTie,
        getGameStatus,
        changeGameStatus,
    };
};

export default GameController;