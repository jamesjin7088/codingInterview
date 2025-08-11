function solution(s) {
  let answer = 0;
  const arr = s.split(" ");
  arr.forEach((item, idx) => {
    if (item === "Z") {
      answer -= Number(arr[idx - 1]);
    } else {
      answer += Number(item);
    }
  });
  console.log(answer);
}

solution("1 2 Z 3");
solution("10 20 30 40");
solution("10 Z 20 Z 1");
solution("10 Z 20 Z");
solution("-1 -2 -3 Z");
