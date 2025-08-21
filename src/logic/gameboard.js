import createCell from "./cell.js";

const Gameboard = (function () {
    const rows = 3;
    const columns = 3;

    let board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(createCell());
        }
    }

    const getBoard = () => board.map((row) => {
        return row.map((Obj) => Obj.getValue())
    });

    const placeToken = (row, column, player) => {
        if (board[row][column].getValue() !== null) return;
        return board[row][column].addToken(player);
    }

    const clearBoard = () => {
        board = [];
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(createCell());
            }
        }
    }

    return {
        getBoard,
        placeToken,
        clearBoard,
    }

})();

export default Gameboard;