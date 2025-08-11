function solution(bin1, bin2) {
  console.log((parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2));
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

// solution("10", "11");
// solution("1001", "1111");

/* 
  1. bin1, bin2를 십진수로 바꾼다.
  2. bin1과 bin2를 더한다.
  3. 더한 결과를 이진수로 바꾼다.
*/

// 메서드를 사용하지 않고 구현

// 이진수 -> 십진수
// 문자열로 된 이진수를 오른쪽부터 읽으며, 1이 있는 자리마다 2의 거듭제곱을 더해준다.
function solution2(bin1, bin2) {
  let result = 0;
  let power = 1;

  for (let i = bin1.length - 1; i >= 0; i--) {
    let digit = bin1[i] === "1" ? 1 : 0;
    result += digit * power;
    power *= 2;
  }

  console.log(result);
}

solution2("10", "11");
solution2("1001", "1111");
