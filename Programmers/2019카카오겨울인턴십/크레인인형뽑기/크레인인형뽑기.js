const Deque = require("../../../modules/Deque");

const solution = (board, moves) => {
  let answer = 0;
  const deque = new Deque();

  moves.forEach((num) => {
    const row = num - 1;
    for (const line of board) {
      if (line[row] > 0) {
        const top = deque.pop();
        if (top && top === line[row]) {
          answer += 2;
        } else {
          if (top) {
            deque.push(top);
          }
          deque.push(line[row]);
        }
        line[row] = 0;
        break;
      }
    }
  });

  return answer;
};

const sol = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
console.log(sol);
