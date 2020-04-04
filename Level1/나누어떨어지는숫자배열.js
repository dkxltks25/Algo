function solution(arr, divisor) {
  var answer = [];
  arr.map(index=> index % divisor ? "" : answer.push(index)) 
  answer.length === 0 ? answer.push(-1) : ""; 
  answer.sort((a,b)=>a-b);
  return answer;
}

var s = [
  { arr: [5, 9, 7, 10], divisor: 5 },
  { arr: [2, 36, 1, 3], divisor: 1 },
  { arr: [3, 2, 6], divisor: 10 },
];


s.map((index,number)=>{
    const {arr,divisor} = index;
    solution(arr, divisor)
})