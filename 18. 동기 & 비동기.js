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

// 자바스크립트는 싱글 스레드로 동작하는 언어이다.

// 싱글 스레드란 한번에 하나만 수행하는 작업이다. 하지만 자바스크리브는
// 싱글 스레드임과 동시에 논블로킹 방식으로도 작업이 가능하다. 논블로킹 방식이란
// 여러개 작업이 동시에 수행하는 작업이다. 우리가 자바스크립트를 했을 때
// js 파일을 쓰게되면 js 파일은 우리가 작성한 언어이기 때문에 컴퓨터가
// 알아들을 수 없다. 그럼 그 파일을 기계어로 번역해주는 역할을 하는 것이 필요한데
// 그게 자바스크립트 엔진(구글의 V8)이다. 그리고 이 엔진에는 두가지 구성요소가
// 있는데 Memory Heap과 Call Stack이 있다.
