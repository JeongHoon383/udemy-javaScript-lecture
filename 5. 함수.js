function getArea(width, height) {
  let area = width * height;
  console.log(area);
  return;
} // 함수 선언식, 함수 언언 방식의 함수 생성

let area1 = getArea; //변수에 함수자체가 담기고, 값이 출력되지는 않음
console.log(area1);
console.log("함수 실행 완료");
