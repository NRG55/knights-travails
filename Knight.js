export default class Knight {
    constructor() {
        // Default knight moves by squares on the board clockwise
        this.defaultMoves = [
            [1, 2], // [x, y]
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2]
        ];
    };

    // Checks if coordinates (a next knight moves) are not outside of the board
    isInBounds = (x, y) => {
         return x >= 1 && y >= 1 && x <= 8 && y <= 8;
    };
    
    // Possible moves from the starting position (x and y coordinates)
    possibleMoves = (coordinates) => {  
        let x = Number(coordinates.slice(1, 2));
        let y = Number(coordinates.slice(4, 5));
       
        let possibleMoves = [];
    
        this.defaultMoves.forEach((array) => {
            let newX = array[0] + x;
            let newY = array[1] + y;
          
            if (this.isInBounds(newX, newY)) {            
                possibleMoves.push("[" + newX + ", " + newY + "]");
            };        
        });
       
        return possibleMoves;
    };
}









