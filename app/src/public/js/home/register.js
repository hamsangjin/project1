"use strict";

// register.ejs 파일과 연결되어 있음
// DOM : Document Object Model

// 선택자(register.ejs에 있는 태그)를 통해서 html 값을 가져올 수 있다.

// # : 태그에 id에 부여되어있는 id, psword를 선택해라
const id = document.querySelector("#id"); 
const psword = document.querySelector("#psword");
const confirmPsword = document.querySelector("#confirm-psword");
const name = document.querySelector("#name");
const birth = document.querySelector("#birth");
const phonenb = document.querySelector("#phonenb");
const email = document.querySelector("#email");
const registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register(){
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    psword: psword.value,
    name: name.value,
    birth: birth.value,
    phonenb: phonenb.value,
    email: email.value,
    
  };


  // req 정보를 서버로 받아오는 것
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // Sign Up 버튼을 눌리면 입력된 데이터를 body에 저장
    body: JSON.stringify(req),
  }).then((res) => res.json())
    .then((res) => {
      if (res.success){             // 로그인 됐다면 루트로 이동하고 아니면 에러 메시지 ! 
        location.href = "/login";
      } else{
        alert(res.msg);
      }
    })
    // 로그인 에러 제거
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });  
}

