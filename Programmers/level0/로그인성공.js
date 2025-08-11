function solution(id_pw, db) {
  for (let i of db) {
    if (id_pw[0] === i[0] && id_pw[1] === i[1]) {
      console.log("login");
      return "login";
    } else if (id_pw[0] == i[0] && id_pw[1] !== i[1]) {
      console.log("wrong pw");
      return "wrong pw";
    }
  }
  console.log("fail");
  return "fail";
}

solution(
  ["meosseugi", "1234"],
  [
    ["rardss", "123"],
    ["yyoom", "1234"],
    ["meosseugi", "1234"],
  ]
);

solution(
  ["programmer01", "15789"],
  [
    ["programmer02", "111111"],
    ["programmer00", "134"],
    ["programmer01", "1145"],
  ]
);

solution(
  ["rabbit04", "98761"],
  [
    ["jaja11", "98761"],
    ["krong0313", "29440"],
    ["rabbit00", "111333"],
  ]
);
