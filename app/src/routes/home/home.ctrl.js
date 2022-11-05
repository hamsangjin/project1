"use strict"

const { name } = require("ejs");
const User = require("../../models/User");

const output = {
  home: (req, res) => {              // 경로 지정, req/res : 요청/응답
    res.render("home/index");        // 파일 불러오기
  },
  login: (req, res) => {             // login 주소 추가    
    res.render("home/login");        // 파일 불러오기
  },
  register: (req, res) => {
    res.render("home/register");
  }
};



const process = {
  login: (req, res) => {
    const user = new User(req.body);    // User라는 클래스를 인스턴스화 할 때 req.body를 넣어 인스턴스화를 함
    const response = user.login();      // User.js의 login 메소드를 불러와 로그인 시도
    return res.json(response);          // response을 json객체로 만들어서 클라이언트한테 보냄
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  }
};


module.exports = {
  output,
  process,
};

