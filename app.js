"use strict"

// 모듈
const express = require("express");         // express 모듈 다운
const app = express();                      // app에 실행시켜 저장

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// app 세팅
app.set("views", "./views");                // 저장할 경로
app.set("view engine", "ejs");

// use : 미들웨어를 등록해주는 메소드
app.use("/", home);                        // module.exports한 index.js파일을 쓸 수 있게 

module.exports = app;

// npm init -y :  기본값
// package.json로 설치한 모듈을 다시 설치할 수 있음.
// 그 설치한 모듈은 node_modules에 저장돼있음






