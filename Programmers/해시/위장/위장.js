function solution(clothes) {
  const hashMap = {};
  clothes.forEach(([cloth, type]) => {
    hashMap[type] = hashMap[type] ? hashMap[type] + 1 : 1;
  });

  return (
    Object.values(hashMap).reduce((prev, curr) => {
      return prev * (curr + 1);
    }, 1) - 1
  );
}

const sol1 = solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
console.log(sol1); //5
