/* *
 * * Make a function that:-
 * * that takes an argument (length) which is a number and returns
 * * a ship object having an array of the desired length of the ship
 * * This object/s will have two functions:-
 * * (1) isSunk() returns true when all the hit points have been hit.
 * * (2) hit() with change pop one item from the array in the object when it is hit/clicked.
 */
function shipFactory(length, name) {
  length = Number(length);
  const hitArr = new Array(length);
  hitArr.forEach((element) => {
    element = "NH"; // NH means not hit
  });
  return {
    getName() {
      return name;
    },
    getLength() {
      return length;
    },
    isSunk() {
      if (hitArr.length === 0) {
        return true;
      } else return false;
    },
    hit() {
      hitArr.pop();
    },
  };
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

export default shipFactory;