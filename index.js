import { chessBoard } from "./chessBoard.js";
import { possibleMoves } from "./knight.js";
import Graph from "./Graph.js";

// const board = chessBoard();

// console.log(board)
// console.log(possibleMoves([3, 3]))

const graph = new Graph();


console.log(graph)

graph.vertices.forEach((vertex) => {
    graph.addVertex(vertex);
})

graph.addEdges('[4, 3]', '[1, 3]');

console.log(graph.adjacentList)

