const solution = (before, after) => {
  var before_arr = Array.from(before).sort();
  var after_arr = Array.from(after).sort();

  if (JSON.stringify(before_arr) === JSON.stringify(after_arr)) {
    return 1;
  } else {
    return 0;
  }
};

solution("olleh", "hello");
solution("allpe", "apple");

// function solution(before, after) {
//     return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
// }
