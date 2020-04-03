function solution(n, lost, reserve) {
  var answer = 0;
  RemoveSameElement(lost,reserve);
  answer = n - lost.length;
  lost.sort((a,b)=>b-a)
  lost.map(index => {
    const BorrowRange = findValueToArray(reserve, index);
    if (BorrowRange.length !== 0) {
      const [value, key] = BorrowRange.pop();
      reserve.splice(key, 1);
      answer += 1;
    }
  });
  console.log(answer) ;
  return answer;
}
const findValueToArray = (array, TargetNumber) => {
  let result = [];
  array.map((value, key) => {
      if(value === TargetNumber){
          result = [];
          return;
      }
    if (value === TargetNumber + 1 || value === TargetNumber - 1) {
      result.push([value, key]);
    }
  });
  return result;
};
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
  {n : 5, lost : [1, 3], reserve : [2, 4]},
  { n: 5, lost: [3, 5], reserve: [3] },
  { n: 3, lost: [3], reserve: [1] },
  { n: 8, lost: [5, 6], reserve: [4, 5] },
  { n: 8, lost: [3, 4, 7, 8], reserve: [1, 2, 3, 4, 5, 7, 8] },
  { n: 8, lost: [4, 5], reserve: [5, 6] },
  {n : 30, lost : [2,30], reserve:[2]}
];

List.map(index => {
  solution(index.n, index.lost, index.reserve);
});
