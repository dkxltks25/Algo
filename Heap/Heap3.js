//디스크 컨트롤러
//처음 실행된 요청의 범위내에 가장 마지막에 들어온 요청 사항을 입력해줍니다.
let CurrentPlaceRange = [];

function getRange(array) {
  array = array
    .filter(a => {
      if (a[0] >= CurrentPlaceRange[0] && a[0] <= CurrentPlaceRange[1]) {
        return a;
      }
    })
    .sort((a, b) => b[0] - a[0]);
  return array;
}
function solution(jobs) {
  let answer = 0;
  jobs.sort((a, b) => a[0] - b[0]);
  firstSetDisk(jobs);
  return answer;
}
function firstSetDisk(array) {
  CurrentPlaceRange = array[0];
  console.log(get);
}
function OtherSetDisk() {}

const jobs = [
  [0, 3],
  [1, 9],
  [2, 6],
  [4, 5]
];
solution(jobs);
