function solution(s) {
  let answer = [];

  const inside = s.trim().slice(2, -2);
  const set = inside.split("},{");
  set.sort((a, b) => a.length - b.length);

  answer.push(parseInt(set[0]));

  for (let i = 1; i < set.length; i++) {
    const list = set[i].split(",").map((ele) => parseInt(ele));
    list.forEach((ele) => {
      if (!answer.includes(ele)) {
        answer.push(ele);
      }
    });
  }

  return answer;
}

const sol = solution("{{2,1},{2},{2,1,3},{2,1,3,4}}");
console.log(sol);
