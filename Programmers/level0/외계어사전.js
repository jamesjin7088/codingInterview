function solution(spell, dic) {
  /* 
    spell을 정렬한다. 
    spell 배열의 길이와 dic 배열의 문자열 원소의 길이를 비교해 같은 것만 필터링한다.
    필터링한 문자열 원소들을 배열로 변환후 spell 배열과 동일한 배열이 존재할 경우 
    return 1, 존재하지 않을 경우 return 2를 한다.
  */

  spell.sort();
  for (let i of dic) {
    if (i.length === spell.length) {
      let sortedI = [...i];
      if (JSON.stringify(sortedI) === JSON.stringify(spell)) return 1;
    }
  }
  return 2;
}

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]);
solution(["Z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]);

// 다른 사람 풀이
function solution2(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}
