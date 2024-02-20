// let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// let [one, two, three] = arr;

// let [one, two, three, four = "four"] = ["one", "two", "three"];

// console.log(one, two, three, four);

let a = 10;

let b = 20;

// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

[a, b] = [b, a];
console.log(a, b); // 비 구조화 할당을 이용한 변수 스왑

let object = { one: "one", two: "two", three: "three", name: "정훈" };

// let one = object.one;
// let two = object.two;
// let three = object.three;

let { one, two, three, name: myName } = object;

console.log(one, two, three, myName);
