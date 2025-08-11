function solution(score) {
  let scores = [];

  for (let i of score) {
    scores.push((i[0] + i[1]) / 2);
  }

  let sortedScores = [...scores].sort((a, b) => b - a);

  const rankObject = {};

  sortedScores.forEach((score, index) => {
    if (!rankObject.hasOwnProperty(score)) {
      rankObject[score] = index + 1;
    }
  });

  let ranks = [];

  for (let i of scores) {
    ranks.push(rankObject[i]);
  }

  console.log(ranks);
}

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);

solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);

// 다른 사람 풀이
function solution2(score) {
  let avg = score.map((v) => v[0] + v[1] / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
