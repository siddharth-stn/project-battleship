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
    childDiv.innerText = ".";
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
const playerBoard = document.getElementById("boardWrapperDiv");

startBtn.addEventListener("click", (event) => {
  const humanName = prompt("Please Enter Your Name", "Human");
  const playerOne = humanPlayer(humanName);
  const compEnemy = aI_Player();

  const playerCells = Array.from(playerBoard.children);
  playerCells.forEach((element) => {
    let crds = element.id.split(",").map((item) => {
      return Number(item);
    });
    let [x, y] = crds;
    if (typeof playerOne.board.getBoard()[x][y] === "object") {
      element.innerText = "S";
    }
    // console.log(x,y);
  });

  turnDisp.innerText = `${playerOne.name}'s turn`;

  aI_Board.addEventListener("click", humanPlay);

  // *** A Function to receive attack by the A.I. on human player ---->
  function compAttack() {
    playerOne.board.receiveAttack("random");
    let x = playerOne.board.getCurrXY()[0];
    let y = playerOne.board.getCurrXY()[1];
    let cellIndex = parseInt("" + y + x);
    let cells = Array.from(document.getElementsByClassName("cellDiv"));
    if (playerOne.board.getBoard()[x][y] === "hit") {
      cells[cellIndex].innerText = "X";
      cells[cellIndex].style.backgroundColor = "red";
    } else {
      cells[cellIndex].innerText = "O";
      cells[cellIndex].style.backgroundColor = "yellow";
    }
    if (playerOne.board.isAllShipSunk()) {
      console.log(compEnemy.name + " has won.");
      aI_Board.removeEventListener("click", humanPlay);
    }
    turnDisp.innerText = `${playerOne.name}'s turn`;
    aI_Board.addEventListener("click", humanPlay);
  }
  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

  function humanPlay(event) {
    if (event.target.innerText != "X" && event.target.innerText != "O") {
      // *** Attack by the human player ------>
      aI_Board.removeEventListener("click", humanPlay);
      let id = event.target.id;
      let crds = id.slice(1).replace(/,/g, "");
      let crdsArr = [...crds].map((item) => {
        return Number(item);
      });
      let [x, y] = crdsArr;
      compEnemy.board.receiveAttack([x, y]);
      if (compEnemy.board.getBoard()[x][y] === "hit") {
        event.target.innerText = "X";
      } else if (compEnemy.board.getBoard()[x][y] === "miss") {
        event.target.innerText = "O";
      }
      if (compEnemy.board.isAllShipSunk()) {
        console.log(playerOne.name + " has won.");
      }
      turnDisp.innerText = `${compEnemy.name}'s turn`;
      /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */

      // *** calling the compAttack function after a delay of one second

      setTimeout(compAttack, 1000);
    }
  }
});

// *** A function to delay the execution of the program ---->
function delay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */
