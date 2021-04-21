import createBoard from "./board.js";
import shipFactory from "./ship.js";
import placingAllShips from "./logic.js";

const boardArr = createBoard(); // Board for Player Created

const carrier = shipFactory(4); // Carrier Ship Created here

const battleShipOne = shipFactory(3); // Battle Ship One Created here
const battleShipTwo = shipFactory(3); // Battle Ship Two Created here

const submarineOne = shipFactory(2); // Submarine One Created here
const submarineTwo = shipFactory(2); // Submarine Two Created here
const submarineThree = shipFactory(2); // Submarine Three Created here

const patrolBoatOne = shipFactory(1); // Patrol Boat One Created here
const patrolBoatTwo = shipFactory(1); // Patrol Boat Two Created here
const patrolBoatThree = shipFactory(1); // Patrol Boat Three Created here
const patrolBoatFour = shipFactory(1); // Patrol Boat Four Created here

// *** Called placingAllships function and,
// *** passed the ship objects with the,
// *** boardArr to place the ships on the board.
placingAllShips(carrier, boardArr);
placingAllShips(battleShipOne, boardArr);
placingAllShips(battleShipTwo, boardArr);
placingAllShips(submarineOne, boardArr);
placingAllShips(submarineTwo, boardArr);
placingAllShips(submarineThree, boardArr);
placingAllShips(patrolBoatOne, boardArr);
placingAllShips(patrolBoatTwo, boardArr);
placingAllShips(patrolBoatThree, boardArr);
placingAllShips(patrolBoatFour, boardArr);
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */


console.log(boardArr);
