export const chessBoard = () => {
    const tempArray = Array(8).fill([]);

    const board = tempArray.map((row) => {
        row = Array(8).fill([]);

        return row;
    });
   
    return board;
}