function solution(n, lost, reserve) {
  var answer = 0;
  RemoveSameElement(lost, reserve);
}

function RemoveSameElement(lost, reserve) {
  var RemoveElementCase = [];
  lost.map((index, number) => {
    for (let i = 0; i < reserve.length; i++) {
      if (reserve[i] === index) {
        RemoveElementCase.push([number, i]);
      }
    }
  });
  RemoveElementCase.reverse();
  RemoveElementCase.map((index, number) => {
    lost.splice(index[0], 1);
    reserve.splice(index[1], 1);
  });
}
const List = [
  { n: 5, lost: [2, 4], reserve: [1, 3, 5] },
  { n: 5, lost: [2, 4], reserve: [3] },
  { n: 3, lost: [3], reserve: [1] },
  { n: 8, lost: [5, 6], reserve: [4, 5] },
  { n: 8, lost: [3, 4, 7, 8], reserve: [1, 2, 3, 4, 5, 7, 8] },
  { n: 8, lost: [4, 5], reserve: [5, 6] }
];

List.map(index => {
  solution(index.n, index.lost, index.reserve);
});
