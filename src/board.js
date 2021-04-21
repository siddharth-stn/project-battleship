/* *
 * * Function to create an Array that serves as the board for the
 * * placement/display of the ship objects
 */
function createBoard() {
  let board = [];
  for (let x = 0; x < 10; x++) {
    let inBoard = [];
    for (let y = 0; y < 10; y++) {
      inBoard[y] = "emp";
    }
    board.push(inBoard);
  }
  return board;
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

export default createBoard;
