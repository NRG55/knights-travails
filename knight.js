// Default knight moves by squares on the board clockwise
const defaultMoves = [
    [1, 2], // [x, y]
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2]
];

// Checks if coordinates (a next knight moves) are not outside of the board
const isInBounds = (x, y) => {
    return x >= 1 && y >= 0 && x <= 8 && y <= 8;
};

// Possible moves from the starting position (x and y coordinates)
export const possibleMoves = (coordinates) => {
    let [x, y] = coordinates;
    let possibleMoves = [];

    defaultMoves.forEach((array) => {
        let newX = array[0] + x;
        let newY = array[1] + y;

        if (isInBounds(newX, newY)) {
            possibleMoves.push([newX, newY]);
        };        
    });

    return possibleMoves;
};