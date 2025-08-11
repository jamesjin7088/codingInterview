function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 == 0) {
      arr.splice(query[i] + 1);
    } else {
      arr.splice(0, query[i]);
    }
  }

  return arr;
}

solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
