let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerO, playerX
let count = 0;

boxes.forEach((box) => {
  //to click the boxes of game and enter the value of 'x' and 'o'
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      //turn of player O
      box.innerText = "O";
      turnO = false;
    } else {
        //turn of player X
      box.innerText = "X"; 
      turnO = true;
    }
    //doubleTap to a button is disabled
    box.disabled = true; 
    count++;
    // console.log(count);
     //check winner
    checkWinner(); 
  });
});
let gameDraw = () => {
    msg.innerText = `Game was Draw` ;
    msgCont.classList.remove("hide");
    btnDisable();
}

let winPattern = [
  //access all boxes of game and it will make sure that same pattern will get win.
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let checkWinner = () => {
  for (let arr of winPattern) {
    //traverse all box[index] of box array
    let pos1Val = boxes[arr[0]].innerText;
    let pos2Val = boxes[arr[1]].innerText;
    let pos3Val = boxes[arr[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) 
      {
        // console.log(`winner is "${pos1Val}"`);  //when all value in the pattern matches, it got winner.
        showWinner(pos1Val); //shows winner
        break;
      }else if(count == 9){
        gameDraw();
      }
    }
  }
};
let btnDisable = () => {
  //btn will be disabled untill new game starts after completing old one.
  for (let btn of boxes) {
    btn.disabled = true;
  }
};
let btnEnabled = () => {
  //btn will be disabled untill new game starts after completing old one.
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulations!! \n"${winner}" won the Game.`;
  msgCont.classList.remove("hide");
  btnDisable(); 
};

let resetGame = () => {
  turnO = true;
  btnEnabled();
  msgCont.classList.add("hide");
  count = 0;
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
