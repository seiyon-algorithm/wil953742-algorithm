const stringToRegex = (s) => {
  return RegExp(`^${s.split("*").join('.')}$`);
};

const regexMatch = (user, banned) => {
  return stringToRegex(banned).test(user);
}

const getMatchIdx = (user, banned_id) => {
  for(let i=0; i<banned_id.length; i++) {
    if(regexMatch(user, banned_id[i])) return i;
  }
  return -1;
}

const solution = (user_id, banned_id) => {
  let answer = 0;
  const set = new Set();

  const dfs = (result, user_id, banned_id) => {
    if(banned_id.length === 0) {
      set.add(result);
    } else {
      user_id.forEach((user, idx) => {
        const matchIdx = getMatchIdx(user, banned_id);
        if(matchIdx >= 0) {
          result.push(user);
          dfs([...result], [...user_id.slice(0, idx), ...user_id.slice(idx+1)], [...banned_id.slice(0, matchIdx), ...banned_id.slice(matchIdx+1)])
        };
      })
    }
  } 

  dfs([], user_id, banned_id);
  return set;
};

const sol = solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "*rodo", "******", "******"]
);
console.log(sol); //3

// Recursion 못 풀겠음.... gg...