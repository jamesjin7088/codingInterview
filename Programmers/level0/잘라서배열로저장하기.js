function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.substring(n * i, n * (i + 1)));
  }
  console.log(answer);
}

solution("abc1Addfggg4556b", 6);
solution("abcdef123", 3);

// 다른 사람 풀이
function solution2(my_str, n) {
  return my_str.match(new RegExp(`.{1, ${n}}`, "g"));
}
