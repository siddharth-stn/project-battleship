import gameBoardFactory from "./makeBoard.js";

function aI_Player(name="JARVIS") {
  return {
    name,
    board: gameBoardFactory(),
  };
}

export default aI_Player;
