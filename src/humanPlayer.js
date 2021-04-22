import gameBoardFactory from "./makeBoard.js";

function humanPlayer(name) {
  return {
    name,
    board: gameBoardFactory(),
  };
}

export default humanPlayer;
