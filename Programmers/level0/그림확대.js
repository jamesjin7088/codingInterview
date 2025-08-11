// 가로행 확대는 배열의 문자열의 각 문자를 k배 늘린다.
// 세로행 확대는 배열의 각 문자열을 k배 늘린다.

function solution(picture, k) {
  let answer = [];

  for (let i of picture) {
    let arr = i.split("");
    let doubleArr = arr.map((item) => item.repeat(k));
    let str = doubleArr.join("");
    for (let j = 0; j < k; j++) {
      answer.push(str);
    }
  }

  console.log(answer);
}

solution(
  [
    ".xx...xx.",
    "x..x.x..x",
    "x...x...x",
    ".x.....x.",
    "..x...x..",
    "...x.x...",
    "....x....",
  ],
  2
);

// 다른 사람 풀이

function solution2(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}
