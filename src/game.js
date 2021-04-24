import "./style.css";
import humanPlayer from "./humanPlayer.js";
import aI_Player from "./computerPlayer";

const body = document.getElementsByTagName("body")[0];

// * * show messages from the game  ------>
const turnDisp = document.getElementById("turnDispPara");
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX * */

//* * Draw/add the elements to display player board on the viewport ----->
let boardWrapperDiv = document.createElement("div");
boardWrapperDiv.id = "boardWrapperDiv";
boardWrapperDiv.className = "wrapperDiv";
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    let childDiv = document.createElement("div");
    childDiv.className = "cellDiv";
    childDiv.id = `${x},${y}`;
    boardWrapperDiv.appendChild(childDiv);
  }
}
body.appendChild(boardWrapperDiv);
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

//* * Draw/add the elements to display enemy board on the viewport  ------>
let CboardWrapperDiv = document.createElement("div");
CboardWrapperDiv.id = "CboardWrapperDiv";
CboardWrapperDiv.className = "CwrapperDiv";
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    let CchildDiv = document.createElement("div");
    CchildDiv.className = "CcellDiv";
    CchildDiv.id = `C${x},${y}`;
    CchildDiv.innerText = ".";
    CboardWrapperDiv.appendChild(CchildDiv);
  }
}
body.appendChild(CboardWrapperDiv);
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

const startBtn = document.getElementById("startBtn");
const aI_Board = document.getElementById("CboardWrapperDiv");

startBtn.addEventListener("click", (event) => {
  const humanName = prompt("Please Enter Your Name", "Human");
  const playerOne = humanPlayer(humanName);
  const compEnemy = aI_Player();

  let turn = 1;
  turnDisp.innerText = `${playerOne.name}'s turn`;
  function displayBoardElem(event) {
    if (turn === 1) {
      turn = 2;
      let id = event.target.id;
      let crds = id.slice(1).replace(/,/g, "");
      let crdsArr = [...crds].map((item) => {
        return Number(item);
      });
      const [x, y] = crdsArr;
      compEnemy.board.receiveAttack([x, y]);
      if (compEnemy.board.getBoard()[x][y] === "hit") {
        event.target.innerText = "X";
      } else {
        event.target.innerText = "O";
      }
      if (compEnemy.board.isAllShipSunk()) {
        console.log(playerOne.name + " has won.");
        aI_Board.removeEventListener("click", displayBoardElem);
      }
      turnDisp.innerText = `${compEnemy.name}'s turn`;
    }
  }
  aI_Board.addEventListener("click", displayBoardElem);
});
