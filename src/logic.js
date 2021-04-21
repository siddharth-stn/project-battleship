/* *
 * * Get direction randomly (lateral or vertical) for placement of the ship object.
 * * If function returns 1 then the direction is lateral, and
 * * if it returns 2 the direction is vertical.
 */
function getDirection() {
  return Math.floor(Math.random() * 2) + 1;
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

/* *
 * * Make a function that returns an Array of starting co-ordinates
 * * where the ship object can be placed. This function will take
 * * ship object length, the boardArray and direction of plaement values
 * * as arguments to get the possible co-ordinates.
 */
function possiblePlaceArr(length, boardArr, direction) {
  let spaceArr = [];
  if (direction === 1 && length === 4) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          x + 3 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x + 1][y] === "emp" &&
          boardArr[x + 2][y] === "emp" &&
          boardArr[x + 3][y] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 1 && length === 3) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          x + 2 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x + 1][y] === "emp" &&
          boardArr[x + 2][y] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 1 && length === 2) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          x + 1 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x + 1][y] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 1 && length === 1) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (boardArr[x][y] === "emp") {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 2 && length === 4) {
    // now if the direction is vertical (direction === 2)...
    // then the starting co-ordinates where the ship objects may be placed.
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          y + 3 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x][y + 1] === "emp" &&
          boardArr[x][y + 2] === "emp" &&
          boardArr[x][y + 3] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 2 && length === 3) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          y + 2 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x][y + 1] === "emp" &&
          boardArr[x][y + 2] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 2 && length === 2) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (
          y + 1 < 10 &&
          boardArr[x][y] === "emp" &&
          boardArr[x][y + 1] === "emp"
        ) {
          spaceArr.push([x, y]);
        }
      }
    }
  } else if (direction === 1 && length === 1) {
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (boardArr[x][y] === "emp") {
          spaceArr.push([x, y]);
        }
      }
    }
  }
  return spaceArr; // this variable spaceArr will hold-
  // the starting co-ordinates where the ship can be placed
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

/* *
 * * Make a function to return random starting-
 * * coordinates from the spaceArr.
 * * This function will take in the spaceArr as an argument.
 */
function getPlacementCoord(spaceArr) {
  let randIndex = Math.floor(Math.random() * spaceArr.length);
  return spaceArr[randIndex];
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

/* *
 * * Placing the created ship objects in the boardArr
 * * Make a function that takes as an argument:-
 * * The boardArr (where the ship object is going to be placed)
 * * the ship object,
 * * the direction of placement (lateral or vertical), and,
 * * the starting co-ordinates where the ship objects will be placed.
 * * Placing the ship objects on the boardArr means
 * * to replace the value "emp" in that index with the ship object.
 */
function placeShip(boardArr, ship, direction, startCoord) {
  let length = ship.getLength();
  let xStrCrd = Number(startCoord[0]);
  let yStrCrd = Number(startCoord[1]);

  if (direction === 1) {
    for (x = xStrCrd; x < length + xStrCrd; x++) {
      boardArr[x][yStrCrd] = ship;
    }
  } else if (direction === 2) {
    for (y = yStrCrd; y < length + yStrCrd; y++) {
      boardArr[xStrCrd][y] = ship;
    }
  }
}

/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
