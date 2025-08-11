function solution(l, r) {
  var answer = [];
  for (let i = l; i <= r; i++) {
    if (/^[05]+$/.test(String(i))) {
      answer.push(i);
    }
  }
  if (!answer.length) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  console.log(answer);
  return answer;
}

solution(5, 555);
solution(-1);
