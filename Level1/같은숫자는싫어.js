function solution(arr) {
  var answer = [];
  
  let beforNumber = -1;
  arr.map((index,number)=>{
      if(index !== beforNumber ){
          answer.push(index);
          beforNumber = index;
      }
  })
  console.log(answer) 
  return answer;
}

var arr = [
  [1, 1, 3, 3, 0, 1, 1],
  [4, 4, 4, 3, 3],
];

arr.map((index,number)=>{
    solution(index);
})