import Knight from "./Knight.js";
import Graph from "./Graph.js";

const graph = new Graph();
const knight = new Knight();

// console.log(graph)

graph.vertices.forEach((vertex) => {
    graph.addVertex(vertex);
});

for (const vertex of graph.adjacentList.keys()) {
    const neighbors = knight.possibleMoves(vertex);  
   
    neighbors.forEach((neighbor) => {
        graph.addEdges(vertex, neighbor);
    });
}

console.log(graph.adjacentList)





