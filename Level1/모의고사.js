function solution(answers) {
  var answer = [];
  var counts = [];
  var Users = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 2 3
  Users.map(User => {
    var count = 0;
    var answerNumber = 0;
    answers.map((index, number) => {
      if (answerNumber === User.length) {
        answerNumber = 0;
      }
      if (User[answerNumber] === index) {
        count++;
      }
      answerNumber++;
    });
    counts.push(count);
  });
  var largeNumber = -1;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > largeNumber) {
      largeNumber = counts[i];
      answer = [i + 1];
    } else if (counts[i] === largeNumber) {
      answer.push(i + 1);
    }
  }
  console.log(answer);
  return answer;
}
/*
    Case 1 : User 1 5
    Case 2 : User 1 2
    
    Case 1 : user 2 0
    Case 2 : User 2 2

    Case 1  : User 3 0
    Case 2  : User 3 2
*/

var answer = [
  [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2]
];
answer.map(index => {
  solution(index);
});
