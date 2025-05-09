// 암호화된 cipher를 주고받씁니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호힙니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을
// return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
  let answer = "";
  cipher = cipher.split("");
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code == 0) answer += cipher[i - 1];
  }
  console.log(answer);
  return answer;
}

solution("dfjardstddetckdaccccdegk", 4);
solution("pfqallllabwaoclk", 2);
