function solution(arr) {
  if (arr.length > arr[0].length) {
    let diff = arr.length - arr[0].length;

    arr.map((item) => {
      for (let i = 0; i < diff; i++) {
        item.push(0);
      }
    });
  } else {
    let diff = arr[0].length - arr.length;

    for (let j = 0; j < diff; j++) {
      arr.push(Array(arr[0].length).fill(0));
    }
  }

  console.log(arr);
}

solution([
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
]);

solution([
  [57, 192, 534, 2],
  [9, 345, 192, 999],
]);

solution([
  [1, 2],
  [3, 4],
]);

// 다른 사람 풀이
function solution2(arr) {
  const ROWS = arr.length;
  const COLS = arr[0].length;
  const DIFF = Math.abs(ROWS - COLS);

  if (ROWS > COLS) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0);
      }
    }
  } else if (ROWS < COLS) {
    for (let i = 0; i < DIFF; i++) {
      const row = new Array(COLS).fill(0);
      arr.push(row);
    }
  }

  return arr;
}
