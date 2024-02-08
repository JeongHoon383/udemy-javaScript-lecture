console.log(helloB()); // 안녕하세요 여러분, 에러 안남 호이스팅 원리
// console.log(helloA()); // 에러남 why? 함수 표현식은 호이스팅이 이뤄지지 않음

let helloA = function () {
  return "안녕하세요 여러분";
}; // 함수 표현식 : 함수를 변수에 담아서 사용

console.log(helloA()); // 함수 표현식은 helloA라는 변수가 초기화 된 후에 출력 가능

function helloB() {
  return "안녕하세요 여러분";
} // 함수 선언식

// console.log(helloC()); 화살표 함수도 함수 표현식과 마찬가지로 호이스팅 적용 안됨

let helloC = () => "안녕하세요 여러분";

console.log(helloC());
