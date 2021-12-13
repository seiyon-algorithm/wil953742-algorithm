function solution(n, s, a, b, fares) {
  let answer = 0;

  graph = [];
  for (let i = 0; i < n + 1; i++) {
    line = [];
    for (let j = 0; j < n + 1; j++) {
      if (i === j) line.push(0);
      else line.push(Infinity);
    }
    graph.push(line);
  }

  fares.forEach((fare) => {
    graph[fare[0]][fare[1]] = fare[2];
    graph[fare[1]][fare[0]] = fare[2];
  });

  for (let round = 1; round < n + 1; round++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (graph[i][round] + graph[round][j] < graph[i][j]) {
          graph[i][j] = graph[i][round] + graph[round][j];
        }
      }
    }
  }

  answer = graph[s][a] + graph[s][b];
  for (let round = 1; round < n + 1; round++) {
    const new_fare = graph[s][round] + graph[round][a] + graph[round][b];
    if (new_fare < answer) answer = new_fare;
  }

  return answer;
}

const sol = solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
console.log(sol);
