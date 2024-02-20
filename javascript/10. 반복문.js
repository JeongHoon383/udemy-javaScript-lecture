// console.log("정훈");
// console.log("정훈");
// console.log("정훈");
// console.log("정훈");
// console.log("정훈");

// for (let i = 1; i <= 5; i++) {
//   // 반복 수행할 명령
//   console.log("정훈");
// }

// let arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   // 반복 수행할 명령
//   console.log(arr[i]);
// }

let person = {
  name: "정훈",
  age: 29,
  tall: 174,
};

const personKeys = Object.keys(person);
console.log(personKeys);

for (let i = 0; i < personKeys.length; i++) {
  console.log(personKeys);

  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
}

const personValues = Object.values(person);

for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}
