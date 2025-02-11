import Knight from "./Knight.js";

const knight = new Knight();

const moves = knight.moves([1, 1], [3, 8]);

console.log(`=> You made it in ${moves.length - 1} moves! Here's your path from ${moves[0]} to ${moves[moves.length - 1]}:`);

let number = 1;

moves.forEach((move, index) => {
    if (index === 0) {
        return;
    };   
    console.log(`Move ${number}: ${move}`);
    number++
});









