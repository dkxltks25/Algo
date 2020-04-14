function solution(s) {
  var answer = 0;
  const start = 1;
  console.log(s);
  const finish = findMaxLength(s) + 1;
  solve(start, finish, 0, s);
  return answer;
}
function solve(start, finish, Count, array) {
  if (start === finish) {
    return Count;
  }
  const DivideArray = divideString(array, start);
  const ResultArray = [];
  let beforeValue = undefined;
  let cnt = 1;
  DivideArray.map((index, number) => {
    if(beforeValue === undefined) {
      beforeValue = index;
    }else{
    console.log(index,beforeValue);

      if(beforeValue === index){
        cnt++;
      }else{
        if(cnt === 1){
          beforeValue = index;
          ResultArray.push(index);
        }else{
          ResultArray.push(cnt.toString()+index);
          cnt = 1;
        }
      }
    }
  });
  console.log(ResultArray);
  //solve(start + 1, finish, Count, array);
}
function divideString(array, Range) {
  const ReturnArray = [];
  let TempArray = [];
  let Count = 1;
  for (let i = 0; i < array.length; i++) {
    TempArray.push(array[i]);
    if (Count === Range) {
      ReturnArray.push(TempArray[0]);
      TempArray = [];
      Count = 0;
    }
    Count++;
  }
  if (TempArray.length !== 0) {
    ReturnArray.push(TempArray[0]);
  }
  return ReturnArray;
}
const findMaxLength = (array) =>
  array.length % 2 === 0 ? array.length / 2 : (array.length - 1) / 2;

let string = [
  "aabbaccc",
  //   "ababcdcdababcdcd",
  //   "abcabcdede",
  //   "abcabcabcabcdededededede",
  //   "xababcdcdababcdcd",
];

string.map((index) => solution(index));
