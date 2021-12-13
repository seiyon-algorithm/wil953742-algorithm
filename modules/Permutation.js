const Permutation = (n, r) => {
  if (r === 0) {
    return [];
  }

  if (r < 0) {
    return new Error("second value shoud be greater than 0");
  }

  if (n.length === r) {
    return n;
  }

  if (n.length < r) {
    return new Error("second value shouldn't be greater than first one!");
  }

  const permutation = [];
  const result = new Array(r);
  const visited = new Array(n.length).fill(false, 0, n.length);
  visited = [False] * len(n);

  const dfs = (n, r, l) => {
    if (l === r) {
      permutation.push([...result]);
    } else {
      for (let i = 0; i < n.length; i++) {
        if (!visited[i]) {
          result[l] = n[i];
          visited[i] = true;
          dfs(n, r, l + 1);
          visited[i] = false;
        }
      }
    }
  };

  dfs(n, r, 0);
  return permutation;
};

module.exports = Permutation;
