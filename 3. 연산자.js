let a = 1; // 대입 연산자

let b = 2;

console.log(a + b);

let c = 5;
c += 10;

console.log(c);

let a2 = 10;

console.log(a2++); // 10, 증감연산자
console.log(a2);

console.log(!true); //false, 논리연산자

console.log(true && true); // true AND true
console.log(true || false); // true or false

let compareA = 1 === "1"; // true -> ==는 자바스크립트에선 값만 비교, false -> === 값 과 자료형까지 비교
console.log(compareA);

let compareB = 3 >= 2;
console.log(compareB);

console.log(typeof compareB);

let aa;
aa = aa ?? 10; // null 병합 연산자, 양쪽에 피연산자중에 null이나 undefined이 아닌 값을 선택
console.log(aa);
