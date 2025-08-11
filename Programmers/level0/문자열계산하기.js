function solution(my_string) {
  let arr = my_string.split(" ");
  let answer = Number(arr[0]);
  console.log(arr);
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === "+") {
      answer += Number(arr[i + 1]);
    } else if (arr[i] === "-") {
      answer -= Number(arr[i + 1]);
    }
  }
  console.log(answer);
}

solution("3 + 4 + 4");
