import Graph from "./Graph.js";

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

    moves(start, end) { 
        const startCoordinates = this.arrayToString(start); // Need to convert coordinates from array to string        
        const endCoordinates = this.arrayToString(end);

        const graph = new Graph();        
        graph.buildAdjacentList();
        const adjacentList = graph.adjacentList;  
        
        if (!adjacentList.has(startCoordinates) || !adjacentList.has(endCoordinates)) {
            throw new Error("Invalid coordinates!");
        };           
      
        const queue = [];
        const path = [];
        const visited = {};        
        const predecessorsMap = {}; // Stores key value pairs -> key(neighbor vertex): value(parent vertex)

        queue.push(startCoordinates);
        visited[startCoordinates] = true;        

        while (queue.length) {
            const vertex = queue.shift();          
            const neighborsList = adjacentList.get(vertex);          
           
            if (vertex === endCoordinates) {
                let current = vertex;
               
                while (current) {
                    path.unshift(current); // Unshift instead of push to keep coordinates sequence from the first move 
                    current = predecessorsMap[current];
                };

                return path;
            }

            neighborsList.forEach((neighbor) => {
                if (!visited[neighbor]) {                  
                    visited[neighbor] = true;
                    predecessorsMap[neighbor] = vertex;
                    queue.push(neighbor);                
                };
            });
        };    
    };

    arrayToString(array) {
        const [x, y] = array;

        return `[${x}, ${y}]`;
    };
}









