import { chessBoard } from "./chessBoard.js";
import { possibleMoves } from "./knight.js";

const board = chessBoard();

console.log(board)
console.log(possibleMoves([3, 3]))
