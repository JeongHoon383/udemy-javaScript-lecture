const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry",
};

console.log(strawberryCookie);

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, ...topingCookies]; // 배열의 요소를 펼칠 수 있음
console.log(allCookies);
// 중복된 property 사용시 spread 연산자를 사용하자
// 객체의 값을 다른 객체에 펼쳐준다.
