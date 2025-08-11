function solution(array) {
  let answer = 0;
  const newArray = array.map((item) => String(item).split(""));
  const count = newArray.reduce((acc, cur) => {
    cur.forEach((item) => {
      if (item === "7") acc++;
    });
    return acc;
  }, 0);
  console.log(count);
}

solution([7, 77, 17]);

// 다른 사람 풀이
function solution2(array) {
  return array.join("").split("7").length - 1;
}
