// 조건문 한 줄로 끝내기
let a = -1;
// if (a >= 0) {
//   console.log("양수");
// } else {
//   console.log("음수");
// }
a >= 0 ? console.log("양수") : console.log("음수");
// 조건 ? 참 일때 조건 : 거짓 일때 조건

let b = [];

// if (b.length === 0) {
//   console.log("빈 배열");
// } else {
//   console.log("안 빈 배열");
// }

const arrayStatus = b.length === 0 ? "빈배열" : "안 빈 배열";
console.log(arrayStatus);

let c = [];

const result = c ? true : false;
console.log(result);

// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F

let score = 20;
if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F입니다");
} // 중첩 연산일땐 if문을 쓸 것 why? if문이 더 가독성이 좋음

// score >= 90
//   ? console.log("A+")
//   : score >= 50
//   ? console.log("B+")
//   : console.log("F입니다.");
