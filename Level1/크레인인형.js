// 바구니 배열
// 바구니 중복 요소 삭제
// 제일 상위의 요소 선택

function solution(board, moves) {
console.time();
  var answer = 0;
  var basket = [];
  moves.map((index, number) => {
      var tile = GetTile(board,index);
      tile ? basket.push(tile) : "";
      answer += ReturnTileCount(basket);
  });
  console.log(answer);
  console.timeStamp();
  console.timeEnd();
  return answer;
}
function GetTile(board, SelectNumber) {
  var result = 0;
  for (var i = 0; i < board.length; i++) {
    if (board[i][SelectNumber - 1] !== 0) {
      result = board[i][SelectNumber - 1];
      board[i][SelectNumber - 1] = 0;
      break;
    }
  }
  return result;
}
function ReturnTileCount(basket){
    if(basket.length <= 1){
        return 0 ;
    }
    var LastCount = basket.length-1;
    if(basket[LastCount] === basket[LastCount-1]){
        basket.pop();
        basket.pop();
        return 2;
    }
    return 0;

}
var board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
var moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
/*
    4 3
    4 3 1
    4 2
    4 2 4 
*/