"use strict"

const output = {
  home: (req, res) => {              // 경로 지정, req/res : 요청/응답
    res.render("home/index");        // 파일 불러오기
  },
  login: (req, res) => {             // login 주소 추가    
    res.render("home/login");        // 파일 불러오기
  },
};

const users = {
  id: ["woorimIT", "나개발", "강팀장"],
  psword: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword){
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      seccess: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};


module.exports = {
  output,
  process,
};