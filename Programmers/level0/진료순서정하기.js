function solution(emergency) {
  let answer = [];
  const sorted = emergency.slice().sort((a, b) => b - a);
  const obj = {};
  let i = 1;
  sorted.forEach((item) => {
    obj[item] = i++;
  });
  for (let j of emergency) {
    answer.push(obj[j]);
  }
  console.log(answer);
}

solution([30, 10, 23, 6, 100]);

// 다른 사람 풀이
function solution2(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
