// 자바스크립츠는 싱글 thread 방식
// 그래서 비동기 작업이 필요함 why? 자바스크립트는 동기적 방식으로 처리를 하는데
// 하나의 작업이 끝날때까지 기다리면 전체적인 작업이 더뎌짐

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a + 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// taskA(3, 4, (res) => {
//   console.log("A Task RESULT : ", res);
// });

// taskB(3, (res) => {
//   console.log("B Task RESULT : ", res);
// });

// taskC(4, (res) => {
//   console.log("C Task RESULT :", res);
// });

console.log("코드 끝"); //

taskA(4, 5, (a_res) => {
  console.log("A RESULT :", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT :", b_res);
    taskC(b_res, (c_res) => {
      console.log("C RESULT", c_res);
    });
  });
});
