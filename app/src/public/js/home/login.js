"use strict";

// login.ejs 파일과 연결되어 있음
// DOM : Document Object Model

// 선택자(login.ejs에 있는 태그)를 통해서 html 값을 가져올 수 있다.

// # : 태그에 id에 부여되어있는 id, psword를 선택해라
const id = document.querySelector("#id"); 
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
  const req = {
    id: id.value,
    psword: psword.value
  };
  console.log(req);
}

