//-----------
// add(+), minus(-),(*),(/)
// 4개의 함수를 일반함수로 짜고
// 화살표 함수로 짜기



// 일반함수 4개구현


function add(a,b) {
    return a+b;
}

function minus(a,b) {
    return a-b;
}
function multip(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

console.log(add(5,10))
console.log(minus(10,7))
console.log(multip(3,2))
console.log(divide(9,3))


// 화살표 함수로 4개 구현

let add2 = (a,b) => a+b;
console.log(add2(4,5));

let minus2 = (a,b) => a-b;
console.log(minus2(10,2));

let multip2 = (a,b) => a*b;
console.log(multip2(4,2))
