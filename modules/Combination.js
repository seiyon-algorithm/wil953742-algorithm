const Combination = (n, r) => {
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

  const combination = [];
  const result = new Array(r);

  const dfs = (n, r, l, s) => {
    if (l === r) {
      combination.push([...result]);
    } else {
      for (let i = s; i < n.length; i++) {
        result[l] = n[i];
        dfs(n, r, l + 1, i + 1);
      }
    }
  };

  dfs(n, r, 0, 0);
  return combination;
};

module.exports = Combination;
