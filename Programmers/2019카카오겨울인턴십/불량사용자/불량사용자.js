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

  const dfs = (user_id, banned_id) => {
    if(banned_id.length === 0) {
      return answer++;
    } else {
      user_id.forEach((user, idx) => {
        const matchIdx = getMatchIdx(user, banned_id);
        if(matchIdx >= 0) {
          console.log(idx, user_id, matchIdx, banned_id)
          dfs([...user_id.slice(idx+1)], [...banned_id.slice(0, matchIdx), ...banned_id.slice(matchIdx+1)])
        };
      })
    }
  } 

  dfs(user_id, banned_id);
  return answer;
};

const sol = solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "*rodo", "******", "******"]
);
console.log(sol); //3

// Recursion 못 풀겠음.... gg...