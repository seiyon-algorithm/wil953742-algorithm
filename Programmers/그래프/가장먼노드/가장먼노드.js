function solution(n, edge) {
  const graph = {};
  edge.forEach(([a, b]) => {
    const graphA = graph[a] || [];
    const graphB = graph[b] || [];
    graphA.push(b);
    graphB.push(a);
    graph[a] = graphA;
    graph[b] = graphB;
  });

  const visited = new Array(n + 1).fill(false);
  const level = new Array(n + 1).fill(Infinity);
  visited[1] = true;
  level[1] = 0;
  const queue = [1];
  let lv = 0;
  while (queue.length > 0) {
    const target = queue.shift();
    lv = level[target] + 1;
    graph[target].forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        level[node] = lv;
        queue.push(node);
      }
    });
  }
  return level.filter((i) => i === lv - 1).length;
}

const sol1 = solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
console.log(sol1);
//3
