function solution(s) {
  var answer = "";
  console.log(s.length,s.length % 2 === 0 ? "짝" : "홀");
  let a = Math.floor(s.length / 2);
  console.log(s.length % 2 === 0 ? s[a - 1] + s[a] : s[a]);
  return a % 2 === 0 ? s[a - 1] + s[a] : s[a];
}

var s = ["abcde", "cqwe", "abcdefghi","aaabaaa"];
s.map((index) => solution(index));
