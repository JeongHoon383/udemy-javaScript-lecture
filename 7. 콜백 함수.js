function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분 안 좋을 때 하는 동작
    badCallback();
  }
}

function cry() {
  console.log("action :: cry");
}

function sing() {
  console.log("action :: sing");
}

function dance() {
  console.log("action :: dance");
}

checkMood("bad", sing, cry); // checkMood 라는 함수에 함수를 매개변수로 넘겨줌
