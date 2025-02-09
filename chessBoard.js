export const chessBoard = () => {
    // const tempArray = Array(8).fill([]);
    
    // const board = tempArray.map((row) => {
    //     row = Array(8).fill([]);

    //     return row;
    // });
   
    // return board;

    const board = [];

    for (let i = 0; i < 8; i++) {
        board[i] = [];

        for (let j = 0; j < 8; j++) {
            board[i][j] = `[${j + 1}, ${8 - i}]`; // inserts x and y coordinates for each square on the board
        };
    };

    return board;
}