function createCell() {
    let value = null;

    const addToken = (player) => {
        value = player;
    }

    const getValue = () => value;

    return {
        addToken,
        getValue,
    }
};

export default createCell;