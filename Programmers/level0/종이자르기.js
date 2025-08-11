function solution(M, N) {
  if (M * N === 1) return 0;
  else console.log(M - 1 + M * (N - 1));
}

solution(2, 2);
solution(2, 5);
solution(1, 1);
