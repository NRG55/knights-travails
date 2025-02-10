export default class Graph {
    constructor(size = 8 ) {
        this.vertices = [];
        this.board = this.initBoard(size);
        this.adjacentList = new Map();
      
    };

    initBoard = (size) => {
        const board = [];
        let x;
        let y;

        for (let i = 0; i < size; i++) {
            board[i] = [];
    
            for (let j = 0; j < size; j++) {
                x = j + 1;
                y = 8 - i;

                board[i][j] = `[${x}, ${y}]`; // inserts x and y coordinates for each square on the board
                
                this.vertices.push(`[${x}, ${y}]`); // pushed as a string --> will be used as a key in the adjacentList
            };
        };
    
        return board;
    };

    addVertex(vertex) {   
        this.adjacentList.set(vertex, []);
    };

    addEdges(vertexOne, vertexTwo) {        
        this.adjacentList.get(vertexOne).push(vertexTwo);
        this.adjacentList.get(vertexTwo).push(vertexOne);
    };
}