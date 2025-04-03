const solution = (letter) => {
  var morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  var answer = [];
  var arr = letter.split(" ");
  for (var i = 0; i < arr.length; i++) {
    answer.push(morse[arr[i]]);
  }
  console.log(answer.join(""));
};

solution(".... . .-.. .-.. ---");
solution(".--. -.-- - .... --- -.");
