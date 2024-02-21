let a = "";

if (a) {
  console.log("true");
} else {
  console.log("false");
}

const getName = (person) => {
  if (!person) {
    // false Not => true
    return "객체가 아닙니다";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);

// 자바스크립트는 본인만의 기준으로 true, false 값을 반환
// false 값 : null, undefined, 0, -0, NaN, ""
// 자바스크립트 true, falsy 성질을 이용하여 true 값을 반환
