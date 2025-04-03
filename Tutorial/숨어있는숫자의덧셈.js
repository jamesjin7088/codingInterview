const solution = (my_String) => {
  var arr = my_String.match(/\d+/g);
  var answer = 0;
  for (var i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  console.log(answer);
};

solution("aAb1B2cC34oOp");
solution("1a2b3c4d123Z");
