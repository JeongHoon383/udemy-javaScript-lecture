// async

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000); // await 줄에는 동기적으로 실행
  return "hello async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();
