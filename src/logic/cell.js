function createCell() {
    let value = " ";

    const addToken = (playerToken) => {
        value = playerToken;
    }

    const getValue = () => value;

    return {
        addToken,
        getValue
    }
};

export default createCell;