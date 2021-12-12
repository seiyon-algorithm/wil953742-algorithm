const validationTest = (stones, k) => {
  let count = 0;

  for (const stone of stones) {
    count = stone === 0 ? count + 1 : 0;
    if (count >= k) return false;
  }

  return true;
};

const solution = (stones, k) => {
  let answer = 0;

  while (validationTest(stones, k)) {
    answer++;
    stones = stones.map((stone) => (stone > 0 ? stone - 1 : 0));
  }

  return answer;
};

const sol = solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3);
console.log(sol); //3
