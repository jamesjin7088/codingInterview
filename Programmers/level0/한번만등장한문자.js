function solution(s) {
  let answer = [];
  const arr = [...s];

  // reduce를 이용해서 요소의 중복 횟수 구하기
  const count = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (let item in count) {
    if (count[item] === 1) {
      answer.push(item);
    }
  }
  answer.sort();
  console.log(answer.join(""));

  // 다른 사람 풀이
  //   let res = [];
  //   for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  //   return res.sort().join("");
}

solution("abcabcadc");
solution("abdc");
solution("hello");
