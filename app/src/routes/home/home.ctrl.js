"use strict"

const { name } = require("ejs");
const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {              // 경로 지정, req/res : 요청/응답
    res.render("home/index");        // 파일 불러오기
  },
  login: (req, res) => {             // login 주소 추가    
    res.render("home/login");        // 파일 불러오기
  },
};



const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");      // User저장소에 담겨있는 데이터를 가져옴

     const response = {};
    if (users.id.includes(id)) {              // 로그인 기능 구현한 거임 중요한 부분
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword){
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response); 
  },
};


module.exports = {
  output,
  process,
};