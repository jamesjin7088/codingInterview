const input = require("fs").readFileSync("/dev/stdin").toString().trim();

var arr = ["int"];

for (var i = 0; i < input / 4; i++) {
  arr.unshift("long");
}
console.log(arr.join(" "));
