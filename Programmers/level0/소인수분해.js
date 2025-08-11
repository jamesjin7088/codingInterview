function solution(n) {
  let answer = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      answer.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  console.log([...new Set(answer)]);
}

solution(12);
solution(17);
solution(420);
