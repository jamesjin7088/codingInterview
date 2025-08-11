function solution(sides) {
  let count = 0;
  let max = Math.max(...sides);
  let min = Math.min(...sides);
  for (let i = max; i < max + min; i++) {
    count++;
  }
  for (let i = max - min + 1; i < max; i++) {
    count++;
  }
  console.log(count);
}

solution([1, 2]);
solution([3, 6]);
solution([11, 7]);
