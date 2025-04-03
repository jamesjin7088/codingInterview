// 1. 2부터 n까지 전부 소수라고 가정
// 2. 2부터 제곱근 n까지의 숫자를 기준으로
// 그 숫자의 배수들은 전부 소수가 아님으로 체크크

const solution = (n) => {
  var answer = 0;
  var arr = Array.from({ length: n - 1 }, (_, i) => i + 2);
  var isPrime = true;
  for (var i = 0; i <= arr.length; i++) {
    for (var j = 2; j <= Math.floor(Math.sqrt(n)); j++) {
      if (arr[i] % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == false) answer++;
  }
};

solution(10);
