// 단락 회로 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.
const getName = (person) => {
  //   if (!person) {
  //     return "객체가 아닙니다.";
  //   }
  //   return person.name;
  // };
  const name = person && person.name; // null
  return name || "객체가 아닙니다"; // 객체가 아닙니다.
};

let person = { name: "정훈" };
const name = getName(person);
console.log(name);
