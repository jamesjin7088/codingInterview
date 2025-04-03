const solution = (n) => {
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial *= i;
    if (factorial > n) {
      return console.log(i - 1);
    }
  }
};

solution(3628800);
solution(7);
