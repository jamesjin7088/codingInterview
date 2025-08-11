function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else return num * factorial(num - 1);
}

function solution(balls, share) {
  const result =
    factorial(balls) / (factorial(balls - share) * factorial(share));
  console.log(Math.round(result));
}

solution(3, 2);
solution(5, 3);
solution(30, 15);
