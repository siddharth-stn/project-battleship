import "./style.css";
import humanPlayer from "./humanPlayer.js";
import aI_Player from "./computerPlayer";

//const humanName = prompt("Please Enter Your Name", "Human");
const body = document.getElementsByTagName("body")[0];
const turnDisp = document.getElementById("turnDispPara");

let boardWrapperDiv = document.createElement("div");
boardWrapperDiv.id = "boardWrapperDiv";
boardWrapperDiv.className = "wrapperDiv";
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    let childDiv = document.createElement("div");
    childDiv.className = "cellDiv";
    childDiv.id = `${x},${y}`;
    boardWrapperDiv.appendChild(childDiv);
  };
};
body.appendChild(boardWrapperDiv);

let CboardWrapperDiv = document.createElement("div");
CboardWrapperDiv.id = "CboardWrapperDiv";
CboardWrapperDiv.className = "CwrapperDiv";
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    let CchildDiv = document.createElement("div");
    CchildDiv.className = "CcellDiv";
    CchildDiv.id = `C${x},${y}`;
    CboardWrapperDiv.appendChild(CchildDiv);
  };
};
body.appendChild(CboardWrapperDiv);

const startBtn = document.getElementById("startBtn");

// startBtn.addEventListener("click", (event) => {
//   const playerOne = humanPlayer(humanName);
//   const playerTwo_comp = aI_Player();
//   let on = true;
//   let turn = 1;
//   while (on) {
//     if (turn === 1) {
//       turnDisp.innerText = `${playerOne.name}'s turn`;
//     } else if (turn === 2) {
//       turnDisp.innerText = `${playerTwo_comp.name}'s turn`;
//     }

//     turn = 2;
//     on = false;
//   }
// });
