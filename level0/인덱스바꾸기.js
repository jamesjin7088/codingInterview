// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼
// 문자열을 return 하도록 solution 함수를 완성해보세요

// 자바스크립트에서 문자열은 불변이기 때문에 직접 바꾸는 것이 아니라, 배열로 바꿔서 조작하고
// 다시 문자열로 만드는 방식이 필요하다.

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  let temp = my_string[num1];
  for (let i = 0; i < my_string.length; i++) {
    if (i == num1) my_string[num1] = my_string[num2];
    if (i == num2) my_string[num2] = temp;
  }
  console.log(my_string.join(""));
  return my_string.join("");
}

solution("hello", 1, 2);
solution("I love you", 3, 6);

// 구조분해 할당을 이용해 한번에 바꾸기
// [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num2]]
