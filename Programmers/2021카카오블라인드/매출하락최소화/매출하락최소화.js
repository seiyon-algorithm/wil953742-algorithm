const Deque = require("../../../modules/Deque");

function solution(sales, links) {
  let answer = 0;
  const teams = [];

  for (let i = 1; i < sales.length + 1; i++) {
    const team = [i];
    links.forEach((link) => {
      if (link[0] === i) {
        team.push(link[1]);
      }
    });
    if (team.length > 1) {
      teams.push(team);
    }
  }

  teams.forEach(team => {
    answer += team[0];
  })

  const bf = (set) => {
    
    team.forEach(num => {
      const newSet = new Set(set);
      bf(newSet.add(num));
    })

  }
}

const sol = solution(
  [14, 17, 15, 18, 19, 14, 13, 16, 28, 17],
  [
    [10, 8],
    [1, 9],
    [9, 7],
    [5, 4],
    [1, 5],
    [5, 10],
    [10, 6],
    [1, 3],
    [10, 2],
  ]
);

console.log(sol);
