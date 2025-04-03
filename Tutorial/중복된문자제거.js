const solution = (my_string) => {
  var my_string = Array.from(my_string);
  var answer = [];

  for (var i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer.push(my_string[i]);
    }
  }

  console.log(answer.join(""));
};

solution("people");
solution("We are the world");

// [...new Set(my_string)].join('');
