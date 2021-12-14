const Deque = require("../../../modules/Deque");

function solution(board, r, c) {
  let answer = 0;
  let current = 0;
  const deque = new Deque();
  const transX = [0, 0, 1, -1];
  const transY = [1, -1, 0, 0];
  const ctrlX = (r, i) => {
    const ctrl = [0, r, r, 3];
    return ctrl[i];
  };
  const ctrlY = (c, i) => {
    const ctrl = [c, 0, 3, c];
    return ctrl[i];
  };
  const isDone = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== 0) return false;
      }
    }
    return true;
  };

  const bfs = (r, c) => {
    if (board[r][c] === 0) return false;
    if (current !== 0 && board[r][c] !== current) return false;
    if (current === 0) {
      answer += 1;
      current = board[r][c];
      board[r][c] = 0;
    } else {
      answer += 1;
      current = 0;
      board[r][c] = 0;

      if (isDone(boadr)) return true;
    }

    let isExit = false;
    for (let i = 0; i < 4; i++) {
      if (
        r + transX[i] >= 0 &&
        r + transX[i] < 4 &&
        c + transY[i] < 4 &&
        c + transY[i] >= 0
      ) {
        answer += 1;
        isExit = bfs(r + transX[i], c + transY[i]);
        if (!isExit) answer -= 1;
        else break;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (
        ctrlX(r, i) >= 0 &&
        ctrlX(r, i) < 4 &&
        ctrlY(c, i) < 4 &&
        ctrlY(c, i) >= 0
      ) {
        answer += 1;
        isExit = bfs(ctrlX(r, i), ctrlY(c, i));
        if (!isExit) answer -= 1;
        else break;
      }
    }
  };

  // gg...
}

const sol = solution(
  [
    [3, 0, 0, 2],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [2, 0, 0, 3],
  ],
  0,
  1
);
console.log(sol);
