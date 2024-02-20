let person = new Object(); // 객체 생성자 방식
let people = {
  key: "value", // 프로퍼티 (객체 프로퍼티)
  key1: "value2",
  Key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {},
}; // 객체 리터럴 방식, 객체 안에 있는 것은 프로퍼티, 프로퍼티는 key 와 value로 이뤄져 있음, key는 무조건 문자열, value는 어떤 자료형이든 상관 없음

console.log(people); // 객체의 전체 프로퍼티를 보여줌
console.log(people.key3); // 점 표기법
console.log(people["key4"]); // 괄호 표기법

console.log(getPropertyValue("key4"));

function getPropertyValue(key) {
  return people[key];
} // 동적인 파라미터를 전달받는 상황에서 점 표기법이 아닌 괄호 표기법을 통해서 객체의 프로퍼티에 쉽게 접근할 수 있음
// 또는 키를 꺼내야되는데 키가 고정되어있지 않는 상황에 괄호 표기법을 사용

let damn = {
  name: "hoon",
  age: 29,
};

damn.name = "jisu"; // 이 방식으로 property 값을 바꿀 수 있지만 매번 새로운 코드를 작성해야됨
console.log(damn.age);

const change = (object, property, changeValue) => {
  object[property] = changeValue;
}; // property를 바꿔주는 함수

change(damn, "age", 39);
console.log(damn.age);

// let person3 = 25;
// person3 = 27;
// console.log(person3);

const person2 = {
  // const로 했을때 person2 변수 자체의 값은 변경이 불가하지만, person2 의 객체 property 값은 변경이 가능함
  name: "정훈", // 멤버
  age: 25, // 멤버
  say: () => {
    console.log("안녕하세요");
  }, // 메서드 -> 방법
}; // 객체 안에 함수 형태인 property 는 메서드, 함수가 아닌 property는 멤버라고 부름

person2.location = "한국";
person2["gender"] = "남성";

person2.name = "정훈 A";
person2["age"] = 40;
delete person2.age; // property 삭제
delete person2["gender"];
person2.name = null; // delete 문법 보단 null 값을 할당하는 것이 좋음
console.log(person2);

console.log(`name : ${"name" in person2}`); // name이라는 key를 가진 property 가 있냐?
console.log(`age : ${"age" in person2}`);
console.log(`say : ${"say" in person2}`);
