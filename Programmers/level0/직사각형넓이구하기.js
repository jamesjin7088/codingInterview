function solution(dots) {
  let a = Math.sqrt(
    (dots[0][0] - dots[1][0]) ** 2 + (dots[0][1] - dots[1][1]) ** 2
  );
  let b = Math.sqrt(
    (dots[0][0] - dots[2][0]) ** 2 + (dots[0][1] - dots[2][1]) ** 2
  );
  let c = Math.sqrt(
    (dots[0][0] - dots[3][0]) ** 2 + (dots[0][1] - dots[3][1]) ** 2
  );

  if (!Number.isInteger(a)) console.log(b * c);
  else if (!Number.isInteger(b)) console.log(a * c);
  else if (!Number.isInteger(c)) console.log(a * b);
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);

solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);

function solution2(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return Math.max(...x) - Math.min(...x) * (Math.max(...y) - Math.min(...y));
}
