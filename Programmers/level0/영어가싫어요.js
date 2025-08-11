function solution(numbers) {
  const number = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const keys = Object.keys(number);
  for (let i of keys) {
    const regex = new RegExp(i, "g");
    numbers = numbers.replace(regex, number[i]);
  }

  /* 
    const num = numbers.replace(/zeor|one|two|three|four|five|six|seven|eigth|nine/g, (v)=>{
            return obj[v];
        });
  */

  console.log(numbers);
}

solution("onetwothreefourfivesixseveneightnine");
solution("onefourzerosixseven");
