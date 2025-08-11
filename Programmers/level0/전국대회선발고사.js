function solution(rank, attendance) {
  let students = rank.map((r, i) => ({
    index: i,
    rank: r,
    canAttend: attendance[i],
  }));

  let filtered = students.filter((student) => student.canAttend);

  filtered.sort((a, b) => a.rank - b.rank);

  let [a, b, c] = [filtered[0].index, filtered[1].index, filtered[2].index];

  return 10000 * a + 100 * b + c;
}

solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
