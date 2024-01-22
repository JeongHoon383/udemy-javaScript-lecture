let a = 3;

if (a >= 8) {
  console.log("5 이상입니다.");
} else if (a >= 4) {
  // if의 조건식이 거짓일 때 else if 의 조건식이 실행됨
  console.log("4 이상입니다.");
} else if (a >= 3) {
  console.log("3 이상입니다.");
} else {
  console.log("5 이하입니다.");
}

let country = "uk";
// if (country === "ko") {
//   console.log("한국");
// } else if (country === "cn") {
//   console.log("중국");
// } else if (country === "jp") {
//   console.log("일본");
// } else {
//   console.log("미 분류");
// }

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미 분류");
    break;
}
