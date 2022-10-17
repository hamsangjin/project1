"use strict"

const hello = (req, res) => {             // 경로 지정, req/res : 요청/응답
  res.render("home/index")                // 파일 불러오기
};

const login = (req, res) => {             // login 주소 추가    
  res.render("home/login")                // 파일 불러오기
};

module.exports = {
  hello,
  login
};