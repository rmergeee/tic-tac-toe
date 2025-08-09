import createCell from "./cell.js";

const Gameboard = (function () {
    const rows = 3;
    const columns = 3;

    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(createCell());
        }
    }

    const getBoard = () => board.map((row) => {
        return row.map((Obj) => Obj.getValue())
    });

    return {
        getBoard,
    }
})();

export default Gameboard;