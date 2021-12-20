function solution(genres, plays) {
  const answer = [];
  const hash = {};
  const hashPlay = {};
  for (let i = 0; i < genres.length; i++) {
    const hashGenre = hash[genres[i]] || [];
    let hashPlayGenre = hashPlay[genres[i]] || 0;
    hashGenre.push([i, plays[i]]);
    hashPlayGenre += plays[i];
    hash[genres[i]] = hashGenre;
    hashPlay[genres[i]] = hashPlayGenre;
  }
  const playCnt = Object.entries(hashPlay).sort((a, b) => {
    return b[1] - a[1];
  });

  playCnt.forEach(([genre]) => {
    const songs = hash[genre].sort((a, b) => {
      return b[1] - a[1];
    });

    answer.push(songs[0][0]);
    if (songs.length > 1) {
      answer.push(songs[1][0]);
    }
  });

  return answer;
}

const sol1 = solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);
console.log(sol1);
// [4, 1, 3, 0]
