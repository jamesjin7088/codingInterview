// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로
// 소문자는 대문자로 변환한 문자열을 return해라

// 자바스크립트에서 문자가 대문자인지, 소문자인지 판별하려면,
// toUpperCase()나 toLowerCase()를 이용해 원래 문자와 변환된 문자를
// 비교하는 방식이 가장 많이 쓰인다.

function solution(my_string) {
  let answer = "";
  my_string = my_string.split("");
  for (let item of my_string) {
    if (item === item.toUpperCase()) answer += item.toLowerCase();
    if (item === item.toLowerCase()) answer += item.toUpperCase();
  }
  // for (let item of my_string) answer += item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase();
  console.log(answer);
  return answer;
}

solution("cccCCC");
solution("abCdEfghIJ");
