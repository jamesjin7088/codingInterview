// 1. array의 각 원소와 n의 차이의 양수값을 새로운  배열에 저장한다.
// 2. Math.max(...arr)로 가장 큰 값을 추출하여 그 값의 인덱스를 구한다.
// 3. return으로 array[2번에서 구한 인덱스]을 내보낸다.

function solution(array, n) {
  array.sort((a, b) => a - b);
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    answer[i] = Math.abs(array[i] - n);
  }

  // return array[answer.indexOf(Math.min(...answer))];
  console.log(array[answer.indexOf(Math.min(...answer))]);
}

//solution([3, 10, 28], 20);
//solution([10, 11, 12], 13);
solution([3, 10, 12, 28], 20);
