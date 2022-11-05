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
  // console.log(req);

  // req 정보를 서버로 받아오는 것
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // JSON.stringify() : 문자열로 바꿔주는 것
    body: JSON.stringify(req),
    // res.json()의 반환값은 Promise
    // 기본 res의 반환값은 Response 스트림인데 json 메소드를 통해 Response 스트림을 읽을 수 있다.
    // Response는 데이터가 모두 받아진 상태가 아니다, json으로 Response 스트림을 가져와 완료될 때까지 읽는다
    // 다 읽은 body 텍스트를 Promise 형태로 반환한다.
  }).then((res) => res.json())
    .then((res) => {
      if (res.success){             // 로그인 됐다면 루트로 이동하고 아니면 에러 메시지 ! 
        location.href = "/";
      } else{
        alert(res.msg);
      }
    })
    // 로그인 에러 제거
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });  
}

