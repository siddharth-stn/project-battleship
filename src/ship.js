import explosion from "./sounds/explosion.mp3";
import gunShot from "./sounds/gunShot.mp3";

// *** make audio component of different sounds
// *** to be played later in the game
let expSound = new Audio(explosion);
let gunSound = new Audio(gunShot);

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
        expSound.play();
        return true;
      } else return false;
    },
    hit() {
      gunSound.play();
      hitArr.pop();
    },
  };
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

export default shipFactory;