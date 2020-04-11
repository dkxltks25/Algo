function solution(n) {
  var answer = "";
  const trans = [4,1,2];
  let arr = [] 
  while(n > 0){
    arr.push(n%3);
    n = Math.floor(n/3);
  }
  console.log(arr);
  return answer;
}

var n = [1, 2, 3, 4,5,6];

n.map((index) => solution(index));

// 120
//
// 1 1
// 2 2
// 3 4
// 4 11

// [4,1,2]
//
