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
