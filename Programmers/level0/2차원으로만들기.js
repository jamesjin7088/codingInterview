function solution(num_list, n) {
  const arr = Array(num_list.length / n)
    .fill()
    .map(() => Array(n).fill(0));

  let row = 0;
  let col = 0;
  let colMax = n - 1;

  for (let i of num_list) {
    arr[row][col] = i;
    if (col === colMax) (col = 0), row++;
    else col++;
  }

  console.log(arr);

  // 다른 사람 풀이
  // var answer = [];

  // while (num_list.length) {
  //   answer.push(num_list.splice(0, n));
  // }

  // return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);
