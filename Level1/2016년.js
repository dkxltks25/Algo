function solution(a, b) {
    var answer = '';
    var Week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    var date = new Date(2016,a-1,b);
    return Week[date.getDay()];
}

a = 5;
b = 24; 
solution(a,b);