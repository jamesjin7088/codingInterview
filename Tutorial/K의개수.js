const solution = (i, j, k) => {
  var answer = 0;

  for (var x = i; x <= j; x++) {
    for (var y = 0; y <= String(x).split("").length; y++) {
      if (String(x).split("")[y] == String(k)) {
        answer++;
      }
    }
  }

  console.log(answer);
};

solution(1, 13, 1);
solution(10, 50, 5);
solution(3, 10, 2);
