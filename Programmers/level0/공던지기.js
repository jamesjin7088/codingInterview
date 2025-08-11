function solution(numbers, k) {
  return numbers[((k - 1) * 2) % numbers.length];
}

solution([1, 2, 3, 4], 2);
solution([1, 2, 3, 4, 5, 6], 5);
solution([1, 2, 3], 3);
