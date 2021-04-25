import shipFactory from "./ship.js";
import placingAllShips from "./logic.js";
import arrow from "./sounds/arrow.mp3";
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX//

// *** Initialize arrow sound --->
let arrowSound = new Audio(arrow);
// XXXXX______XXXXXX____XXXXX_____XXXXX //

function gameBoardFactory() {
  /* *
   * * Function to create an Array that serves as the board for the
   * * placement/display of the ship objects
   */
  const boardArr = (function createBoard() {
    let board = [];
    for (let x = 0; x < 10; x++) {
      let inBoard = [];
      for (let y = 0; y < 10; y++) {
        inBoard[y] = "emp";
      }
      board.push(inBoard);
    }
    return board;
  })(); // Board for Player Created
  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

  const missCordsArr = []; //records the coordinates ([x,y]) of missed hits
  const sunkShipArr = []; // records the names (String) of the ship objects that have been sunk
  const currXY = [];
  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
  const carrier = shipFactory(4, "carrier"); // Carrier Ship Created here

  const battleShipOne = shipFactory(3, "battleShipOne"); // Battle Ship One Created here
  const battleShipTwo = shipFactory(3, "battleShipTwo"); // Battle Ship Two Created here

  const submarineOne = shipFactory(2, "submarineOne"); // Submarine One Created here
  const submarineTwo = shipFactory(2, "submarineTwo"); // Submarine Two Created here
  const submarineThree = shipFactory(2, "submarineThree"); // Submarine Three Created here

  const patrolBoatOne = shipFactory(1, "patrolBoatOne"); // Patrol Boat One Created here
  const patrolBoatTwo = shipFactory(1, "patrolBoatTwo"); // Patrol Boat Two Created here
  const patrolBoatThree = shipFactory(1, "patrolBoatThree"); // Patrol Boat Three Created here
  const patrolBoatFour = shipFactory(1, "patrolBoatFour"); // Patrol Boat Four Created here

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
  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX * */

  return {
    getCurrXY() {
      return currXY;
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    getBoard() {
      return boardArr;
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    getMissCordsArr() {
      return missCordsArr;
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    getSunkShipsArr() {
      return sunkShipArr;
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    isAllShipSunk() {
      if (sunkShipArr.length >= 10) {
        return true;
      } else return false;
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

    /* *
     * * Make a function that takes in an array containing
     * * the value of co-ordinates where the mouse pointer clicked, and,
     * * check that the value in that cell in the boardArray is not
     * * equal to "emp" (means empty). Then the object in that cell is
     * * taken and hit function of that object is called to
     * * reduce its length by one element, and, after that the value in the
     * * cell to which the coordinates correspond to will be
     * * replaced by the string "hit" to mark that cell.
     * * If the clicked cell(coordinates) is an empty ("emp") then the value
     * * is replaced by the string "miss" to mark that cell.
     * * if computer's turn then clickCrd is equal to random.
     */
    receiveAttack(clickCrd) {
      arrowSound.play();
      //clickcrd is an array//
      if (clickCrd === "random") {
        let runThis = true;
        while (runThis) {
          let x = Math.floor(Math.random() * boardArr.length);
          let y = Math.floor(Math.random() * boardArr.length);
          while (currXY.length > 0) {
            currXY.pop();
          }
          currXY.push(x);
          currXY.push(y);
          if (
            boardArr[x][y] != "emp" &&
            boardArr[x][y] != "miss" &&
            boardArr[x][y] != "hit"
          ) {
            boardArr[x][y].hit();
            if (boardArr[x][y].isSunk()) {
              sunkShipArr.push(boardArr[x][y].getName());
            }
            boardArr[x][y] = "hit";
            runThis = false;
          } else if (boardArr[x][y] === "emp") {
            boardArr[x][y] = "miss";
            missCordsArr.push([x, y]);
            runThis = false;
          }
        }
      } else {
        const [x, y] = clickCrd;
        if (
          boardArr[x][y] != "emp" &&
          boardArr[x][y] != "miss" &&
          boardArr[x][y] != "hit"
        ) {
          boardArr[x][y].hit();
          if (boardArr[x][y].isSunk()) {
            sunkShipArr.push(boardArr[x][y].getName());
          }
          boardArr[x][y] = "hit";
        } else if (boardArr[x][y] === "emp") {
          boardArr[x][y] = "miss";
          missCordsArr.push([x, y]);
        }
      }
    },
    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
  };
}

export default gameBoardFactory;
