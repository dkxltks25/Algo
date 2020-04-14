function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.map((index,number)=>{
        index = index.split("");
        const stack = skill;
        if(CheckSkilePosition(stack,index)){
            answer++;
        }
    })
    return answer;
}
function CheckSkilePosition(stack,skillTree){
    let findPosition = 0;
    let SelectPosition = 0 ;
    for(let i = 0; i<skillTree.length;i++){
        let Position = ReturnPosition(skillTree[i],stack)
        if( findPosition === Position){
            findPosition++;
        }else{
            if(Position !== -1){
                return false;
            }
        }
    }
    return true;
}
function ReturnPosition(word,array){
    for(let i = 0; i<array.length;i++){
        if(word === array[i]){
            return i;
        }
    }
    return -1;
}
let skill = "CBD";
let skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
solution(skill,skill_trees);


// 스킬트리에서 SeleectPosition 해당하는 녀석을 선택
// 스택에서 찾음
// 찾은 값이 findPosition에 있는 녀석인지.ㄴ
// 