function solution(arr, k) {
  let answer = [];

  let set = new Set(arr);

  for (let i of newArr) {
    if (answer.length < k) {
      answer.push(i);
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  console.log(answer);
}

solution([0, 1, 1, 2, 2, 3], 3);
solution([0, 1, 1, 1, 1], 4);

// 다른 사람의 풀이
function solution2(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}
