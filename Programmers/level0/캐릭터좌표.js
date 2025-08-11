function solution(keyinput, board) {
  const boardX = parseInt(board[0] / 2);
  const boardY = parseInt(board[1] / 2);
  let charXY = [0, 0];
  for (let i of keyinput) {
    switch (i) {
      case "up":
        charXY[1] += 1;
        if (charXY[1] > boardY) {
          charXY[1] -= 1;
          break;
        }
        break;
      case "down":
        charXY[1] -= 1;
        if (charXY[1] < -boardY) {
          charXY[1] += 1;
          break;
        }
        break;
      case "left":
        charXY[0] -= 1;
        if (charXY[0] < -boardX) {
          charXY[0] += 1;
          break;
        }
        break;
      case "right":
        charXY[0] += 1;
        if (charXY[0] > boardX) {
          charXY[0] -= 1;
        }
        break;
    }
  }
  console.log(charXY);
}

solution(["left", "right", "up", "right", "right"], [11, 11]);
solution(["down", "down", "down", "down", "down"], [7, 9]);
