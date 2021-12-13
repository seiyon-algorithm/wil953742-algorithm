const solution = (info, query) => {
  info.sort();

  const newInfo = info.map((line) => {
    const lineList = line.split(" ");
    const newLine = lineList.slice(0, 4).join(" and ");
    const score = parseInt(lineList[4]);
    return [newLine, score];
  });

  return query.map((line) => {
    const lineList = line.split(" ");
    const newLine = RegExp(
      lineList
        .map((str) => (str === "-" ? "[a-z]+" : str))
        .slice(0, 7)
        .join(" ")
    );
    const score = parseInt(lineList[7]);
    let count = 0;
    newInfo.forEach((info) => {
      count = newLine.test(info[0]) && score <= info[1] ? count + 1 : count;
    });
    return count;
  });
};

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
const sol = solution(info, query);
console.log(sol); // [1,1,1,1,2,4]
