// function great(name) {
//     console.log("hello," + name);
// }

// great("john")
// great("tom")
// great("shpark")
// great("kim")



// function add(a,b) {
//     console.log(a + b);
// }
function add(a,b) {
    return a+b;
}

let sum = add(2,3)
console.log(sum)

console.log(add(5,10))


// 변수에 함수를 담는다.
let sum2 = function(a, b) { // 이름이 없는 함수 == 익명함수
    return a + b;
}
// 그럼?? 변수가함수로서 역활을 한다
// console.log(sum(2,3))


// 변수에 함수는 담는데, fuction 이라는 불필요한 키워드를 없애기 위해서 생겨난게 화살표 함수


let sum3 = (a,b) => { // Arrow function 
    return a+b;
}


// 위에거를 좀더 줄인게 밑에 거가 된다
// 화살표 함수의 변천사 활용하면 엄청나게 간결해진다
let sum4 = (a,b) => a + b;
console.log(sum(4,5));



//-----------
// add(+), minus(-),(*),(/)
// 4개의 함수를 일반함수로 짜고
// 화살표 함수로 짜기

