import Knight from "./Knight.js";

export default class Graph {
    constructor(size = 8 ) { // Size 8 * 8
        this.vertices = [];  // initBoard() fills up the array with vertices 
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
                                              // inserts x and y coordinates for each square on the board
                board[i][j] = `[${x}, ${y}]`; // just to display the array in the console similar to X Y graph:)

                this.vertices.push(`[${x}, ${y}]`); // pushed as a string --> will be used as a key in the adjacentList
            };
        };
    
        return board;
    };

    addVertex(vertex) {   
        this.adjacentList.set(vertex, new Set());
    };

    addEdges(vertexOne, vertexTwo) {              
        this.adjacentList.get(vertexOne).add(vertexTwo);
        this.adjacentList.get(vertexTwo).add(vertexOne);
    };

    buildAdjacentList = () => {        
        const knight = new Knight();

        this.vertices.forEach((vertex) => {
            this.addVertex(vertex);
        });
        
      
        for (const vertex of this.adjacentList.keys()) {
            const neighbors = knight.possibleMoves(vertex);  
           
            neighbors.forEach((neighbor) => {
                this.addEdges(vertex, neighbor);
            });
        };       
    };
}