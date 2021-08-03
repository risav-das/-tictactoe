window.onload = () => {
    //js code here
  
    const boxes = document.querySelectorAll(".container div");
    const info_box = document.getElementById("result");
    const restart = document.getElementById("restart");
    let player = "O",
      game_over = false;
    let board = [...Array(9)].fill("x");
    boxes.forEach((ele, index) => {
      ele.onclick = () => {
        if (board[index] == "x" && !game_over) {
          player = player == "X" ? "O" : "X";
          info_box.innerHTML = `Turn:${player == "X" ? "O" : "X"}`;
          board[index] = ele.innerHTML = player;
          gameOver();
        }
      };
    });
  
    const gameOver = () => {
      for (let i = 0; i < 9; i += 3) {
        if (
          board[i] !== "x" &&
          board[i] == board[i + 1] &&
          board[i] == board[i + 2]
        ) {
          info_box.innerHTML = `Winner:${player}`;
          game_over = true;
          return;
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          board[i] !== "x" &&
          board[i] == board[i + 3] &&
          board[i] == board[i + 6]
        ) {
          info_box.innerHTML = `Winner:${player}`;
          game_over = true;
          return;
        }
      }
      if (board[0] !== "x" && board[0] == board[4] && board[0] == board[8]) {
        info_box.innerHTML = `Winner:${player}`;
        game_over = true;
        return;
      }
      if (board[2] !== "x" && board[2] == board[4] && board[2] == board[6]) {
        info_box.innerHTML = `Winner:${player}`;
        game_over = true;
        return;
      }
      if (board.every((ele) => ele !== "x")) {
        info_box.innerHTML = "Draw!!";
        game_over = true;
        return;
      }
    };
  
    const restartGame = () => {
      (player = "O"), (game_over = false);
      board = [...Array(9)].fill("x");
      boxes.forEach((ele) => {
        ele.innerHTML = "";
      });
      info_box.innerHTML = "Turn:X";
    };
    restart.addEventListener("click", restartGame);
  };
  