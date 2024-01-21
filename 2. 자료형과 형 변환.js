// 1/21(일)

// 자바스크립트 data type(자료형)에는 크게 2가지 있음
// primitive data type(원시 타입) - number, string, boolean, undefined, null

// non-primitive data type(비 원시 타입) - object, array, function

// number 자료형
let age = 25; // 정수

let tall = 175.9; // 실수

console.log(age + tall);

// string
let name = "hoon";

let name2 = "정훈";

let name3 = `hoon ${name2}`; // 문자열 안에 변수를 입력, ${} -> template literal

// boolean
let isSwitchOff = false;

// null
let a = null; // null은 의도적으로 이 변수는 아무값도 가리키지 않는다
console.log(a);

// undefined
let variable;
console.log(variable);

// 형 변환
let numberA = 12;

let numberB = "2";

let numberC = "133";

console.log(numberA * numberB); // 24(숫자열) -> 자바스크립트엔진이 암묵적으로 문자열을 숫자열로 바꿈 묵시적 형변환
console.log(numberA + numberB); // 122(문자열) ->
console.log(numberA + parseInt(numberB)); // 14(숫자열) -> 의도적으로 형 변환 - 명시적 형 변환
console.log(numberC + numberA);
