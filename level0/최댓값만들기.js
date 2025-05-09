// 정수 배열 numbers가 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록
// solution 함수를 완성해주세요.

// 배열의 원소의 절댓값 중 가장 큰 두 개의 값을 출력한다
// 1. 최댓값과 두 번째 최댓값을 찾아라
// 2. 최솟값과 두 번째 최솟값을 찾아라

function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

solution([-1, 2, -3, 4, -5]);
solution([0, -31, 24, 10, 1, 9]);
solution([10, 20, 30, 5, 5, 20, 5]);
