function solution(n, results) {
  let answer = 0;
  const graph = [];
  for (let i = 0; i < n + 1; i++) {
    graph.push(new Array(n + 1).fill(Infinity));
  }

  for (let i = 0; i < n + 1; i++) {
    graph[i][i] = 0;
  }

  results.forEach(([s, e]) => {
    graph[s][e] = 1;
  });

  for (let i = 1; i < n + 1; i++) {
    for (let x = 1; x < n + 1; x++) {
      for (let y = 1; y < n + 1; y++) {
        if (graph[x][i] + graph[i][y] < graph[x][y]) {
          graph[x][y] = graph[x][i] + graph[i][y];
        }
      }
    }
  }

  graph.forEach((row, idx) => {
    let degree = 0;
    row.forEach((ele, eleIdx) => {
      if (idx !== eleIdx) {
        if (ele !== Infinity) {
          degree++;
        }
      }
    });

    for (let i = 1; i < n + 1; i++) {
      if (i !== idx) {
        if (graph[i][idx] !== Infinity) {
          degree++;
        }
      }
    }
    if (degree === n - 1) answer++;
  });

  return answer;
}

const sol1 = solution(5, [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
]);
console.log(sol1); //2
