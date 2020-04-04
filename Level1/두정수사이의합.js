function solution(a, b) {
    var answer = 0;
    [a,b] = a > b ? [b,a]:[a,b] ;
    for(let i = a; i<=b;i++){
        answer+= i;
    }
    return answer;
}

var arr = [
{a:3,b:5},	
{a:3,b:3},	
{a:5,b:3}
]

arr.map(a=>solution(a.a,a.b))