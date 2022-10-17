"use strict"

const express = require("express");         // express 모듈 다운
const router = express.Router();            // app에 실행시켜 저장

const ctrl = require("./home.ctrl");

// npm install ejs -s 실행해야 가능
router.get("/", ctrl.home);                              

router.get("/login", ctrl.login);  

module.exports = router;                    // 다른 파일에서 해당 문서를 불러올 수 있게 만듦