"use strict"

const app = require("../app");

const PORT = 3000;

// npm install express -s로 express 모듈 설치해야 실행
app.listen(PORT, () => {                   // 서버를 3000번 포트로 열어줘라 / 콜백 함수 넘기기
  console.log("서버 가동")                    
});