const arr = [1, 2, 3, 4];
const newArr = arr.map((elm) => {
  return elm * 2;
});

// arr.forEach((elm) => newArr.push(elm * 2)); // 배열의 요소를 순회
console.log(newArr);

let number = "3";
// arr.forEach((elm) => {
//   if (elm === number) {
//     console.log(true);
//   }
// });
console.log(arr.includes(number));

console.log(arr.indexOf(number)); // -1 why? 주어진 값과 배열 안에 있는 값이 하나도 일치하는게 없다면 -1 값이 출력됨.

const arr2 = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "pink" },
  { num: 4, color: "brown" },
];

const arr3 = [
  { num: 5, color: "pink" },
  { num: 6, color: "purple" },
];

console.log(arr2.findIndex((elm) => elm.color === "red"));
const element = arr2.find((elm) => {
  return elm.color === "brown";
});

console.log(element);

console.log(arr2.filter((elm) => elm.color === "blue")); // 배열에서 특정한 조건을 만족하는 요소들을 배열로 만들고 싶을 때 filter 함수를 사용함
// filter를 통해 arr2 배열 안에 있는 property 요소 중 하나를 배열로 다시 만듦

console.log(arr2.slice(0, 2));

console.log(arr2.concat(arr3)); // arr2 와 arr3 를 배열 형태로 붙임

let chars = ["나", "다", "가"];
let chars2 = [0, 1, 3, 2, 10, 30, 20];

chars.sort(); // 원본 배열의 순서를 정렬하는 메서드
chars2.sort();

console.log(chars);
console.log(chars2); // sort는 문자 사전순으로 정렬하기 때문에 10 다음에 2인 순서로 출력됨

const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if (a > b) {
    // 크다
    return 1;
  }

  if (a < b) {
    // 작다
    return -1;
  }

  // 같다
  return 0;
}; // 비교 함수

chars2.sort(compare);

console.log(chars2);

const arr4 = ["안녕하세요", "저는", "정훈", "입니다"];

console.log(arr4.join(" "));
